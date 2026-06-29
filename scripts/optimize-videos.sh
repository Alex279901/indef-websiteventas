#!/usr/bin/env bash
# ═══════════════════════════════════════════════════════════════
#  INDEF — Optimización de videos para producción web
#  Uso: bash scripts/optimize-videos.sh
#
#  Requiere: ffmpeg (se instala automáticamente si tienes Homebrew)
#
#  Qué hace:
#   1. Mueve los originales a assets/videos/originals/ (respaldo)
#   2. Genera versiones web optimizadas en assets/videos/
#   3. Mantiene la misma resolución, sin pérdida visual perceptible
#   4. Target: 4–6 Mbps para videos verticales 2K, ~8–10 Mbps para 4K
#
#  Los archivos en originals/ se excluyen del .gitignore
#  Los videos optimizados SÍ se versionar en el repo
# ═══════════════════════════════════════════════════════════════

set -euo pipefail

# ── Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log()    { echo -e "${BLUE}[INDEF]${NC} $1"; }
ok()     { echo -e "${GREEN}[OK]${NC} $1"; }
warn()   { echo -e "${YELLOW}[WARN]${NC} $1"; }
error()  { echo -e "${RED}[ERROR]${NC} $1"; exit 1; }

# ── Verificar ffmpeg
if ! command -v ffmpeg &>/dev/null; then
  # Buscar en rutas alternativas
  for p in ~/bin/ffmpeg /opt/homebrew/bin/ffmpeg /usr/local/bin/ffmpeg; do
    if [ -x "$p" ]; then
      export PATH="$(dirname "$p"):$PATH"
      break
    fi
  done
fi

if ! command -v ffmpeg &>/dev/null; then
  warn "ffmpeg no encontrado."
  if command -v brew &>/dev/null; then
    log "Instalando ffmpeg con Homebrew..."
    brew install ffmpeg
  else
    log "Descargando ffmpeg portable para macOS..."
    mkdir -p ~/bin
    curl -L "https://evermeet.cx/ffmpeg/getrelease/ffmpeg/zip" -o /tmp/ffmpeg.zip
    unzip -o /tmp/ffmpeg.zip -d ~/bin/
    chmod +x ~/bin/ffmpeg
    export PATH="$HOME/bin:$PATH"
    rm /tmp/ffmpeg.zip
  fi
fi

FFMPEG_VERSION=$(ffmpeg -version 2>&1 | head -1)
ok "ffmpeg disponible: $FFMPEG_VERSION"

# ── Directorios
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
VIDEOS_DIR="$PROJECT_DIR/assets/videos"
ORIGINALS_DIR="$VIDEOS_DIR/originals"
OUTPUT_DIR="$VIDEOS_DIR"  # Los optimizados reemplazan a los originales en la misma carpeta

mkdir -p "$ORIGINALS_DIR"

# ── Lista de videos a procesar (con sus configuraciones específicas)
# Formato: "nombre_origen|bitrate_video_kbps|descripcion"
# Bitrates:
#   Videos 4K/2160p verticales de alta acción: 5000–6000k
#   Videos 1080p: 2500–3500k
#   Videos de animación/gráficos: 2000–3000k
#   Videos cortos de fondo (loop): 1500–2500k

declare -A VIDEO_BITRATES=(
  ["VIDEO-BETY-02-5.mp4"]="5000"          # 271MB → ~30MB — video principal hero
  ["ANIMACION INDEF OPPO 28 NOV-3.mp4"]="3000"  # 52MB → ~15MB — animación logo
  ["SG_09.mp4"]="5000"                    # 247MB → ~30MB — branch video
  ["SG_012.mp4"]="4000"                   # 214MB → ~25MB — branch video
  ["SG_03.mp4"]="5000"                    # 457MB → ~35MB — branch video
  ["SG_04.mp4"]="5000"                    # 504MB → ~35MB — branch video
  ["SG_1.mp4"]="5000"                     # 248MB → ~30MB — branch video
  ["QUE ES INDEF.mp4"]="2500"             # 5MB → ya pequeño, optimizar por compatibilidad
  ["TESTIMONIAL SG.mp4"]="2500"           # 5MB → ya pequeño
  ["TESTIMONIAL_FIF1.mp4"]="2500"         # 3MB → ya pequeño
  ["Allo apertura DAM.mp4"]="2500"        # 7MB → ya pequeño
  ["Invertir en franquicias no es solo para millonarios.mp4"]="2500"  # 8MB → ya pequeño
)

log "Iniciando optimización de ${#VIDEO_BITRATES[@]} videos..."
echo ""

TOTAL_ORIGINAL=0
TOTAL_OPTIMIZED=0
PROCESSED=0
SKIPPED=0

for video in "${!VIDEO_BITRATES[@]}"; do
  INPUT="$VIDEOS_DIR/$video"
  BITRATE="${VIDEO_BITRATES[$video]}"

  if [ ! -f "$INPUT" ]; then
    warn "No encontrado: $video — omitiendo"
    ((SKIPPED++)) || true
    continue
  fi

  ORIGINAL_SIZE=$(du -m "$INPUT" | cut -f1)
  TOTAL_ORIGINAL=$((TOTAL_ORIGINAL + ORIGINAL_SIZE))

  # ── Nombre del backup y del output
  BACKUP="$ORIGINALS_DIR/$video"
  # Output temporal (mismo nombre, misma carpeta)
  TEMP_OUTPUT="$VIDEOS_DIR/__temp_${video}"

  log "Procesando: $video (${ORIGINAL_SIZE}MB) → target ~${BITRATE}k"

  # ── Detectar resolución (solo para logging)
  RESOLUTION=$(ffprobe -v error -select_streams v:0 \
    -show_entries stream=width,height \
    -of csv=p=0:s=x "$INPUT" 2>/dev/null || echo "unknown")
  log "  Resolución: $RESOLUTION → escalando a máx 1920p (largo lado)"

  # ── Hacer backup del original si no existe ya
  if [ ! -f "$BACKUP" ]; then
    log "  Respaldo: originals/$video"
    cp "$INPUT" "$BACKUP"
  else
    log "  Respaldo ya existe en originals/"
  fi

  # ── Codificar (SCALE_FILTER siempre con comillas para evitar word-splitting)
  ffmpeg -i "$INPUT" \
    -vf "scale=-2:1920" \
    -c:v libx264 \
    -preset slow \
    -crf 23 \
    -b:v "${BITRATE}k" \
    -maxrate "$((BITRATE * 2))k" \
    -bufsize "$((BITRATE * 4))k" \
    -profile:v high \
    -level 4.1 \
    -pix_fmt yuv420p \
    -movflags +faststart \
    -c:a aac \
    -b:a 128k \
    -ac 2 \
    -y \
    "$TEMP_OUTPUT" \
    2>&1 | grep -E "^(frame|fps|time|size|video:|audio:|Error)" || true

  if [ -f "$TEMP_OUTPUT" ] && [ -s "$TEMP_OUTPUT" ]; then
    # Reemplazar el original con el optimizado
    mv "$TEMP_OUTPUT" "$INPUT"
    NEW_SIZE=$(du -m "$INPUT" | cut -f1)
    TOTAL_OPTIMIZED=$((TOTAL_OPTIMIZED + NEW_SIZE))
    REDUCTION=$(( (ORIGINAL_SIZE - NEW_SIZE) * 100 / ORIGINAL_SIZE ))
    ok "  ${video}: ${ORIGINAL_SIZE}MB → ${NEW_SIZE}MB (-${REDUCTION}%)"
    ((PROCESSED++)) || true
  else
    error "  Falló la codificación de: $video"
  fi

  echo ""
done

echo ""
echo "══════════════════════════════════════════════"
ok "Optimización completa"
echo ""
echo "  Videos procesados : $PROCESSED"
echo "  Videos omitidos   : $SKIPPED"
echo "  Tamaño original   : ${TOTAL_ORIGINAL}MB"
echo "  Tamaño optimizado : ${TOTAL_OPTIMIZED}MB"
if [ $TOTAL_ORIGINAL -gt 0 ]; then
  TOTAL_REDUCTION=$(( (TOTAL_ORIGINAL - TOTAL_OPTIMIZED) * 100 / TOTAL_ORIGINAL ))
  echo "  Reducción total   : -${TOTAL_REDUCTION}%"
fi
echo ""
echo "  Originales en     : assets/videos/originals/"
echo "  (excluidos del repo por .gitignore)"
echo "══════════════════════════════════════════════"
