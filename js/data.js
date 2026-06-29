
const siteConfig = {
  brandName: "INDEF",
  shortName: "INDEF",
  languageLabel: "EN",
  currency: "MXN",
  locale: "es-MX",
  logo: "assets/logos/LOGO-BLANCO.png",
  fallbackLogoText: "INDEF",
  primaryCta: {
    label: "Comenzar ahora",
    url: "https://indef.mx/empieza-a-invertir/"
  },
  mobileSticky: {
    kicker: "Participación mínima",
    text: "$115,000 MXN",
    sub: "Acceso al portafolio INDEF",
    label: "Comenzar ahora",
    url: "https://indef.mx/empieza-a-invertir/"
  },
  floatingCoffee: false
};

const navData = [
  { label: "Qué hacemos", target: "#about" },
  { label: "Portafolio", target: "#model" },
  { label: "Proceso", target: "#how-to" },
  { label: "Sucursales", target: "#branches" },
  { label: "Calculadora", target: "#calculator" },
  { label: "FAQ", target: "#faq" },
  { label: "Socios", target: "#investors" },
  { label: "Legal", target: "#footer-legal" }
];

/* ─── HERO ──────────────────────────────────────────────────
   Captar atención en los primeros diez segundos.
─────────────────────────────────────────────────────────── */
const heroData = {
  badge: "México · España · Próximamente",
  title: {
    before: "No invertimos en ideas.",
    highlight: "Invertimos en operación."
  },
  subtitle: "Identificamos, desarrollamos y operamos marcas internacionales con trayectoria comprobada en México y España.",
  description: "INDEF selecciona franquicias que ya demostraron su valor, las desarrolla en nuevos mercados y las opera con el mismo rigor que las hizo funcionar. No construimos desde cero. Entramos donde el camino ya fue trazado.",
  image: "assets/images/IMG_3119.jpg",
  ctas: [
    { label: "Comenzar ahora", url: "https://indef.mx/empieza-a-invertir/", style: "primary" },
    { label: "Ver el portafolio", url: "#model", style: "secondary" },
    { label: "Ver sucursales", url: "#branches", style: "secondary" }
  ],
  disclaimer: "Sin rendimientos garantizados. La participación en cualquier negocio implica riesgo real."
};

/* ─── BONUS ─────────────────────────────────────────────────
   El portafolio está en movimiento. Contexto real.
─────────────────────────────────────────────────────────── */
const bonusData = {
  eyebrow: "Estado actual del portafolio",
  title: "El portafolio está creciendo.",
  subtitle: "Dos marcas en operación. Dos más próximas. La expansión al siguiente mercado ya está en marcha.",
  description: "Quienes se suman durante una fase de expansión activa participan desde el inicio de ese crecimiento, con condiciones documentadas desde el primer paso. No generamos urgencia. Solo informamos el estado del portafolio.",
  bullets: [
    "19 unidades en Mérida y España. Presencia física, no proyección.",
    "Las condiciones de esta etapa están en contrato desde el inicio del proceso.",
    "La documentación completa está disponible antes de comprometer cualquier monto."
  ],
  visual: {
    captionTitle: "En operación",
    captionText: "Santa Gloria y Allô Mon Coco en Mérida, Yucatán. Material capturado durante el servicio diario de nuestras marcas."
  },
  cta: { label: "Entender cómo participar", url: "#how-to" }
};

/* ─── INVERSORES ─────────────────────────────────────────────
   Actividad ilustrativa de la red de socios.
─────────────────────────────────────────────────────────── */
const investorsData = {
  eyebrow: "Red de socios",
  title: "Quienes ya participan.",
  subtitle: "",
  items: [
    { initials: "AM", name: "Ana María R.", branch: "Santa Gloria Paseo Montejo — Mérida", amount: "$50,000", time: "Hace 1 día" },
    { initials: "RG", name: "Rubén G.", branch: "Portafolio INDEF", amount: "$120,000", time: "Hace 1 día" },
    { initials: "LP", name: "Laura P.", branch: "Allô Mon Coco DAM — Mérida", amount: "$80,000", time: "Hace 2 días" },
    { initials: "CM", name: "Carlos M.", branch: "Portafolio INDEF", amount: "$35,000", time: "Hace 2 días" },
    { initials: "IF", name: "Isabel F.", branch: "Santa Gloria España", amount: "$200,000", time: "Hace 3 días" },
    { initials: "JT", name: "Jorge T.", branch: "Portafolio INDEF", amount: "$95,000", time: "Hace 3 días" },
    { initials: "PR", name: "Paula R.", branch: "Santa Gloria La Isla — Mérida", amount: "$60,000", time: "Hace 4 días" },
    { initials: "DV", name: "Daniel V.", branch: "Santa Gloria Altabrisa — Mérida", amount: "$150,000", time: "Hace 4 días" }
  ]
};

/* ─── MÉTRICAS ──────────────────────────────────────────────
   Solo cifras reales. Sin datos no confirmados.
─────────────────────────────────────────────────────────── */
const metricsData = {
  social: {
    eyebrow: "El criterio INDEF",
    title: "No incorporamos marcas.\nLas seleccionamos.",
    subtitle: "Cada marca que forma parte del portafolio pasó por un proceso de evaluación riguroso. No buscamos tendencias. Buscamos negocios capaces de sostenerse durante años.",
    cards: [
      {
        title: "Historia operativa",
        text: "No evaluamos ideas. Evaluamos negocios que llevan años funcionando."
      },
      {
        title: "Rentabilidad",
        text: "Analizamos resultados reales antes de considerar cualquier expansión."
      },
      {
        title: "Escalabilidad",
        text: "Buscamos marcas que puedan operar en nuevos mercados con el mismo nivel que las hizo exitosas en origen."
      },
      {
        title: "Compatibilidad",
        text: "Cada marca debe poder integrarse al ecosistema INDEF y operar bajo nuestra metodología."
      }
    ],
    manifestoTitle: "Lo que buscamos en una marca.",
    manifesto: [
      { num: "01", text: "Lleva años funcionando." },
      { num: "02", text: "Su modelo puede trasladarse a otros mercados." },
      { num: "03", text: "Genera demanda consistente." },
      { num: "04", text: "Puede crecer sin perder calidad." },
      { num: "05", text: "Aporta valor al portafolio." }
    ],
    manifestoClose: "No buscamos la siguiente tendencia. Buscamos negocios capaces de seguir funcionando dentro de diez años."
  },
  investment: {
    eyebrow: "El modelo INDEF",
    title: "Capacidad sobre antigüedad.",
    subtitle: "La confianza no se construye con años. Se construye con operación, metodología y resultados consistentes.",
    cards: [
      { title: "Operación antes que expansión", text: "No incorporamos marcas para después descubrir si funcionan. Primero operamos, después escalamos." },
      { title: "Selección disciplinada", text: "Cada marca pasa por un proceso de evaluación operativo, financiero y estratégico antes de integrarse al portafolio." },
      { title: "Expansión controlada", text: "Cada nueva ciudad mantiene los mismos estándares de operación, calidad y experiencia." },
      { title: "Alineación de largo plazo", text: "Buscamos construir relaciones sostenibles entre operadores, franquiciantes e inversionistas." }
    ],
    ecosystemTitle: "INDEF no opera una sola marca.",
    ecosystemText: "Opera un portafolio. Cada marca suma presencia física, demanda sostenida y reputación construida antes de llegar a nuevos mercados. No es una apuesta sobre el futuro. Es la administración disciplinada de lo que ya existe.",
    timeline: [
      { year: "01", text: "Identificamos marcas que llevan años funcionando en sus mercados de origen. No conceptos. Trayectorias con resultado." },
      { year: "02", text: "Evaluamos demanda, consistencia del modelo y compatibilidad con el mercado destino antes de comprometer cualquier recurso." },
      { year: "03", text: "Negociamos el acuerdo directamente con el franquiciante. Sin terceros en la cadena. Con toda la documentación desde el inicio." },
      { year: "04", text: "La primera unidad abre siguiendo con precisión el estándar que hizo exitosa a la marca en origen." },
      { year: "05", text: "Escalamos solo cuando los resultados locales justifican el siguiente paso." }
    ],
    assets: [
      "19 unidades en operación en México y España.",
      "Cada marca tiene años de trayectoria antes de entrar al portafolio INDEF.",
      "Cada participación está respaldada por contrato notariado."
    ]
  }
};

/* ─── UBICACIONES ────────────────────────────────────────── */
const locationsData = {
  upcoming: {
    eyebrow: "El crecimiento del portafolio",
    title: "Crecemos cuando el modelo está listo.",
    description: "Cada nueva ciudad representa una decisión estratégica, no un objetivo comercial. Antes de abrir un nuevo mercado validamos operación, estandarización y capacidad de replicación. Solo entonces el portafolio continúa creciendo.",
    steps: [
      { num: "01", text: "Operación consolidada." },
      { num: "02", text: "Estándares replicables." },
      { num: "03", text: "Expansión basada en resultados." }
    ],
    cta: { label: "Conocer nuestro modelo", url: "#model" },
    card: {
      image: "assets/images/IMG_3118.jpg",
      captionTitle: "Nuevo mercado en preparación",
      captionText: "El crecimiento del portafolio continúa siguiendo la misma metodología que ha permitido operar en México y España."
    }
  },
  newLocation: {
    eyebrow: "Modelo validado",
    title: "Lo importante no es cuántas unidades existen.\nEs que todas ya operan.",
    description: "Cada marca del portafolio ya pasó por el proceso más difícil: abrir, operar, vender, estandarizar y mantenerse en funcionamiento.\n\nINEDF no desarrolla ideas. Integra negocios que ya demostraron resultados y construye crecimiento sobre una operación existente.",
    cards: [
      { title: "Operación comprobada", text: "Cada unidad ya atiende clientes reales y opera bajo procesos estandarizados." },
      { title: "Expansión disciplinada", text: "Cada nueva ciudad replica un modelo existente, no uno experimental." },
      { title: "Capital sobre evidencia", text: "La participación se abre únicamente cuando la operación ya fue validada." }
    ],
    logoMark: "assets/logos/Recurso 23IMG LOGO2.png",
    cta: { label: "Ver todas las sucursales", url: "#branches" }
  }
};

/* ─── VISIÓN / QUIÉNES SOMOS ────────────────────────────────
   Qué es INDEF, por qué existe, dónde opera.
─────────────────────────────────────────────────────────── */
const visionData = {
  eyebrow: "Qué hace INDEF",
  title: "Un puente entre mercados.",
  description: "Las mejores franquicias del mundo no llegan solas a nuevos territorios. Alguien tiene que identificarlas cuando ya tienen años de historia, desarrollarlas con el mismo rigor y operarlas como si nunca hubieran salido de su mercado de origen.\n\nINEDF hace eso. Somos el operador, no el intermediario. Hoy estamos en México y España, con más por venir.",
  stats: [
    { value: "19", label: "Unidades activas" },
    { value: "4", label: "Marcas en portafolio" },
    { value: "2", label: "Países: México y España" },
    { value: "+1", label: "Ciudad próximamente" }
  ],
  phases: [
    { range: "Paso 1", title: "Identificación", text: "Buscamos marcas que llevan años funcionando en sus mercados de origen. No conceptos con potencial. Historias con resultado." },
    { range: "Paso 2", title: "Evaluación", text: "Analizamos la consistencia del modelo y la compatibilidad con el mercado destino antes de comprometer cualquier recurso." },
    { range: "Paso 3", title: "Desarrollo", text: "Desarrollamos cada marca con el rigor operativo que la hizo exitosa en origen. Sin atajos." },
    { range: "Paso 4", title: "Apertura", text: "La primera unidad abre siguiendo el estándar exacto de origen." },
    { range: "Paso 5", title: "Expansión", text: "Escalamos cuando los resultados locales justifican el siguiente paso. No antes." }
  ],
  founder: {
    captionTitle: "Conoce INDEF",
    captionText: "Conoce cómo identificamos, desarrollamos y operamos marcas antes de llevarlas a nuevos mercados.",
    captionLink: "Ver video completo"
  }
};

/* ─── BENEFICIOS ─────────────────────────────────────────────
   Qué diferencia a INDEF del resto.
─────────────────────────────────────────────────────────── */
const benefitsData = {
  eyebrow: "Qué diferencia a INDEF",
  title: "Estructura sobre promesa.",
  subtitle: "Cada elemento del modelo existe por una razón operativa, no como argumento de venta.",
  items: [
    { icon: "H", title: "Historia antes que hipótesis", text: "Ninguna marca entra al portafolio sin años de operación en su mercado de origen. Santa Gloria tenía decenas de ubicaciones en España antes de abrir en Mérida." },
    { icon: "=", title: "El mismo nivel en cada mercado", text: "Lo que hace funcionar a una marca en España debe funcionar igual en Mérida. Si el modelo no sostiene ese traslado, no entra al portafolio." },
    { icon: "◎", title: "Ubicaciones reales y abiertas", text: "Las 19 unidades tienen dirección pública, están abiertas al público y tienen reseñas de clientes reales. Visitar cualquiera de ellas en Mérida es parte del proceso que recomendamos." },
    { icon: "⊕", title: "Contrato antes de capital", text: "Nada sucede sin acta notarial previa. La participación no comienza antes de que el documento esté firmado y comprendido. Con tu abogado, si lo prefieres." },
    { icon: "≡", title: "Reporte. No proyección.", text: "Los socios reciben métricas de operación reales trimestralmente. Lo que sucedió, no lo que esperamos que suceda." },
    { icon: "→", title: "Expansión con base, no con fe", text: "La siguiente expansión no es una promesa. Es la continuación de un portafolio que ya opera 19 unidades en México y España." }
  ]
};

/* ─── CALCULADORA ────────────────────────────────────────── */
const calculatorData = {
  eyebrow: "Proyección de participación",
  title: "Entiende los números primero.",
  subtitle: "Escenarios ilustrativos. No representan garantía ni compromiso de rendimiento.",
  minAmount: 10000,
  maxAmount: 5000000,
  step: 1000,
  initialAmount: 50000,
  unitPrice: 100,
  totalNetworkUnits: 2000000,
  labels: {
    amount: "Monto de participación",
    units: "Unidades adquiridas",
    ownership: "Participación en la red",
    projected: "Valor proyectado"
  },
  scenarios: [
    { name: "Conservador", annualRoi: 8 },
    { name: "Caso base", annualRoi: 15 },
    { name: "Favorable", annualRoi: 25 }
  ]
};

/* ─── COMPROMISOS MUTUOS ─────────────────────────────────── */
const decisionData = {
  eyebrow: "Así trabajamos con nuestros socios",
  title: "Dos partes. Compromisos claros.",
  subtitle: "Una relación de largo plazo requiere que ambas partes sepan qué esperar del otro desde el primer día.",
  columns: [
    {
      title: "Lo que pedimos de cada socio",
      items: [
        "Que revise la documentación completa antes de comprometer capital.",
        "Que visite al menos una unidad en operación.",
        "Que comprenda con claridad qué está adquiriendo y qué no.",
        "Que participe con un monto compatible con su perfil real de riesgo y horizonte de tiempo."
      ]
    },
    {
      title: "Lo que INDEF comprometió",
      items: [
        "Documentación disponible sin condición ni presión previa.",
        "Reportes trimestrales con métricas reales de operación.",
        "Una sola manera de hacer las cosas. Sin excepción por monto o relación.",
        "Transparencia cuando los resultados no son los esperados."
      ]
    }
  ]
};

/* ─── DATA ROOM ─────────────────────────────────────────────
   Qué puede revisar el socio antes de decidir.
─────────────────────────────────────────────────────────── */
const dataRoomData = {
  eyebrow: "Documentación disponible",
  title: "Todo está antes de que preguntes.",
  subtitle: "Cada unidad, cada contrato y cada cifra existe antes de que lo solicites. No entregamos información por presión. La ponemos disponible desde el principio.",
  indicatorsTitle: "Lo que existe ahora",
  indicators: [
    { value: "19", label: "Unidades en operación" },
    { value: "2", label: "Países: México y España" },
    { value: "4", label: "Marcas en portafolio" }
  ],
  cards: [
    { title: "Presencia real y pública", text: "Las 19 unidades están abiertas al público. Cada una tiene dirección física y puede visitarse antes de cualquier decisión." },
    { title: "Metodología transparente", text: "El proceso de selección de marcas, el estándar de operación y la estructura de participación están documentados y disponibles para revisión completa." },
    { title: "Contratos antes de cualquier paso", text: "Nada sucede sin documento formal previo. La estructura legal es revisable completa, con el tiempo necesario, antes del primer peso comprometido." }
  ],
  carouselImages: [
    "assets/images/img_2878.webp",
    "assets/images/img_2879.webp",
    "assets/images/img_2880.webp",
    "assets/images/img_2881.webp",
    "assets/images/img_2882.webp",
    "assets/images/img_2883.webp",
    "assets/images/img_2884.webp",
    "assets/images/img_2885.webp",
    "assets/images/img_2886.webp",
    "assets/images/img_2887.webp",
    "assets/images/img_2888.webp",
    "assets/images/img_2889.webp",
    "assets/images/img_2891.webp",
    "assets/images/img_2893.webp",
    "assets/images/img_2894.webp",
    "assets/images/img_2895.webp",
    "assets/images/img_2896.webp",
    "assets/images/img_2897.webp",
    "assets/images/img_2899.webp",
    "assets/images/img_2900.webp",
    "assets/images/img_2901.webp",
    "assets/images/img_2902.webp",
    "assets/images/img_2903.webp",
    "assets/images/img_2904.webp",
    "assets/images/img_2906.webp",
    "assets/images/img_2892.webp"
  ],
  cta: { label: "Agenda tu primera sesión", url: "mailto:contacto@indef.mx?subject=Solicitud%20de%20primera%20sesi%C3%B3n%20%E2%80%94%20INDEF" }
};

/* ─── SCARCITY STRIP ─────────────────────────────────────── */
const scarcityData = {
  text: "Expansión activa",
  highlight: "Expansión activa. Las condiciones de participación para esta etapa están disponibles para quienes inician el proceso ahora."
};

/* ─── PORTAFOLIO ─────────────────────────────────────────────
   Las marcas del portafolio y su razón de ser.
─────────────────────────────────────────────────────────── */
const modelData = {
  eyebrow: "El portafolio INDEF",
  title: "Marcas con historia. No con potencial.",
  subtitle: "Cada marca demostró su valor antes de llegar al portafolio. Años de operación, demanda real, presencia propia.",
  pillars: [
    {
      icon: "SG",
      title: "Santa Gloria",
      fullName: "Santa Gloria Coffee & Bakery",
      status: "active",
      statusLabel: "En operación",
      category: "Panadería artesanal · Café",
      markets: ["🇲🇽 Mérida, Yucatán — 3 unidades", "🇪🇸 España — 15 unidades"],
      totalUnits: 18,
      text: "Marca española de panadería artesanal con decenas de ubicaciones en España antes de llegar a México. Seleccionada por la solidez de su modelo y la consistencia de su demanda. Opera en Mérida y España con el mismo estándar.",
      image: "assets/images/SantaGloria.jpg",
      video: "assets/videos/SG_09.mp4"
    },
    {
      icon: "AMC",
      title: "Allô Mon Coco",
      fullName: "Allô Mon Coco",
      status: "active",
      statusLabel: "En operación",
      category: "Brunch · Café",
      markets: ["🇲🇽 Mérida, Yucatán — 1 unidad (DAM)"],
      totalUnits: 1,
      text: "Propuesta de brunch con identidad clara, ambiente diferenciado y modelo operativo sólido. Opera en el Distrito de Arte Mérida. Seleccionada por la fortaleza de su estructura, no por su novedad.",
      image: "assets/images/Allo Mon Coco.jpg"
    },
    {
      icon: "WP",
      title: "Wetzel's Pretzels",
      fullName: "Wetzel's Pretzels",
      status: "upcoming",
      statusLabel: "Próximamente",
      category: "Snacks · Retail",
      markets: ["🇲🇽 México — En desarrollo"],
      totalUnits: 0,
      text: "Marca estadounidense con más de 350 ubicaciones internacionales. Trayectoria consolidada en entornos de alto tráfico. En desarrollo para México.",
      image: "assets/images/wetzels-pretzels-2.jpg"
    },
    {
      icon: "CBT",
      title: "Coco Bubble Tea",
      fullName: "Coco Bubble Tea",
      status: "upcoming",
      statusLabel: "Próximamente",
      category: "Bebidas · Bubble Tea",
      markets: ["🇲🇽 México — En evaluación"],
      totalUnits: 0,
      text: "Próxima incorporación al portafolio. El criterio de selección es el mismo que para todas las marcas: trayectoria operativa sólida antes de cualquier compromiso.",
      image: "assets/images/Coco-Bubble-Tea-Kiosk-photo.jpg"
    }
  ],
  roiTitle: "Proyección de retorno anual",
  roi: [
    { label: "Conservador", value: "8%" },
    { label: "Caso base", value: "15%" },
    { label: "Favorable", value: "25%" }
  ]
};

/* ─── PROCESO ─────────────────────────────────────────────────
   Qué sucede después del primer contacto.
─────────────────────────────────────────────────────────── */
const howToData = {
  eyebrow: "Cómo participar",
  title: "Sin prisa. Sin sorpresas.",
  subtitle: "Cada etapa está diseñada para que sepas dónde estás y qué viene después. No avanzamos al siguiente paso hasta que el anterior esté comprendido.",
  steps: [
    {
      title: "Explora el portafolio",
      text: "Recorre las marcas, revisa la documentación disponible y, si estás en Mérida, visita cualquier unidad en operación. Sin presión. Sin tiempo límite."
    },
    {
      title: "Una primera conversación",
      text: "Escríbenos para agendar 30 a 45 minutos con un asesor INDEF. No es una presentación de ventas. Es una sesión para resolver tus preguntas sobre el modelo, las marcas, la estructura legal y las condiciones actuales. Sin propuesta. Sin presión de cierre."
    },
    {
      title: "Tú defines el monto",
      text: "Si decides avanzar, defines el monto compatible con tu perfil y horizonte de participación. No hay mínimo sugerido por INDEF, solo el que sea adecuado para ti."
    },
    {
      title: "Contrato notariado",
      text: "Firma del acta notarial con la estructura legal documentada. No existe paso siguiente antes de que este documento esté revisado y comprendido. Con tu abogado, si lo prefieres."
    },
    {
      title: "Reportes trimestrales",
      text: "Desde el primer trimestre recibes métricas reales: desempeño por unidad, actividad del portafolio y resultados del período. Lo que ocurrió, no lo que esperamos. Acceso completo desde tu portal de socio."
    }
  ],
  image: "assets/images/img_2895.webp",
  card: {
    image: "assets/images/sg_mexico.jpg",
    title: "Conoce una operación real",
    text: "Recorre una de nuestras operaciones en México y conoce el estándar con el que desarrollamos cada marca antes de integrarla al portafolio INDEF.",
    link: "Ver más",
    linkUrl: "#branches"
  }
};

/* ─── SUCURSALES ─────────────────────────────────────────────
   19 unidades reales. Agrupadas por país y ciudad.
─────────────────────────────────────────────────────────── */
const branchesData = {
  eyebrow: "19 unidades activas",
  title: "Ir a verlas es parte del proceso.",
  subtitle: "No pedimos confianza ciega. Cada unidad está abierta al público con dirección real y clientes diarios. Visitar es parte del proceso que esperamos de cada socio.",
  totalActive: 19,
  videoGallery: [
    {
      src: "assets/videos/TESTIMONIAL SG.mp4",
      label: "Santa Gloria — Testimonio"
    },
    {
      src: "assets/videos/Allo apertura DAM.mp4",
      label: "Allô Mon Coco — Apertura DAM"
    }
  ],
  countries: [
    {
      flag: "🇲🇽",
      name: "México",
      totalUnits: 4,
      cities: [
        {
          name: "Mérida, Yucatán",
          units: 4,
          image: "assets/images/merida.jpg.avif",
          branches: [
            {
              name: "Santa Gloria La Isla",
              brand: "Santa Gloria",
              mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+La+Isla+M%C3%A9rida"
            },
            {
              name: "Santa Gloria Paseo Montejo",
              brand: "Santa Gloria",
              mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Paseo+Montejo+M%C3%A9rida"
            },
            {
              name: "Santa Gloria Altabrisa",
              brand: "Santa Gloria",
              mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Altabrisa+M%C3%A9rida"
            },
            {
              name: "Allô Mon Coco DAM",
              brand: "Allô Mon Coco",
              mapsUrl: "https://www.google.com/maps/search/?api=1&query=All%C3%B4+Mon+Coco+DAM+M%C3%A9rida"
            }
          ]
        }
      ]
    },
    {
      flag: "🇪🇸",
      name: "España",
      totalUnits: 15,
      cities: [
        {
          name: "Madrid",
          units: 7,
          image: "assets/images/madrid.avif",
          branches: [
            {
              name: "Santa Gloria Alcalá 164",
              brand: "Santa Gloria",
              mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Alcal%C3%A1+164+Madrid"
            },
            {
              name: "Santa Gloria Alcalá 244",
              brand: "Santa Gloria",
              mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Alcal%C3%A1+244+Madrid"
            },
            {
              name: "Santa Gloria Atocha 84",
              brand: "Santa Gloria",
              mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Atocha+84+Madrid"
            },
            {
              name: "Santa Gloria Av. Ciudad de Barcelona 77",
              brand: "Santa Gloria",
              mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Ciudad+de+Barcelona+77+Madrid"
            },
            {
              name: "Santa Gloria López de Hoyos 126",
              brand: "Santa Gloria",
              mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+L%C3%B3pez+de+Hoyos+126+Madrid"
            },
            {
              name: "Santa Gloria Moraleja Green",
              brand: "Santa Gloria",
              mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Moraleja+Green+Alcobendas+Madrid"
            },
            {
              name: "Santa Gloria Pedro Teixeira 7",
              brand: "Santa Gloria",
              mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Pedro+Teixeira+7+Madrid"
            }
          ]
        },
        {
          name: "Bilbao",
          units: 5,
          image: "assets/images/bilbao.jpg.webp",
          branches: [
            {
              name: "Santa Gloria Alameda de Urquijo",
              brand: "Santa Gloria",
              mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Alameda+de+Urquijo+Bilbao"
            },
            {
              name: "Santa Gloria Alameda Recalde 31",
              brand: "Santa Gloria",
              mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Alameda+Recalde+31+Bilbao"
            },
            {
              name: "Santa Gloria CC Bilbao Intermodal",
              brand: "Santa Gloria",
              mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Bilbao+Intermodal"
            },
            {
              name: "Santa Gloria Iparraguirre 11",
              brand: "Santa Gloria",
              mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Iparraguirre+11+Bilbao"
            },
            {
              name: "Santa Gloria Puente Deusto 13",
              brand: "Santa Gloria",
              mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Puente+Deusto+13+Bilbao"
            }
          ]
        },
        {
          name: "San Sebastián",
          units: 3,
          image: "assets/images/sansebastian.jpg",
          branches: [
            {
              name: "Santa Gloria Av. Sancho el Sabio 26",
              brand: "Santa Gloria",
              mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Sancho+el+Sabio+26+Donostia"
            },
            {
              name: "Santa Gloria CC Paseo del Mar",
              brand: "Santa Gloria",
              mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+CC+Paseo+del+Mar+San+Sebasti%C3%A1n"
            },
            {
              name: "Santa Gloria Easo 73",
              brand: "Santa Gloria",
              mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Easo+73+Donostia"
            }
          ]
        }
      ]
    }
  ],
  upcoming: {
    eyebrow: "Próxima expansión",
    title: "Expansión en curso",
    description: "El portafolio opera 19 unidades en México y España. La siguiente ciudad está en desarrollo. Las condiciones de esta etapa están disponibles para quienes comienzan el proceso ahora."
  }
};

/* ─── PARTICIPACIÓN ──────────────────────────────────────────
   Qué implica participar. Con precisión sobre liquidez.
─────────────────────────────────────────────────────────── */
const participationData = {
  eyebrow: "Qué implica participar",
  title: "Sin ambigüedad.",
  subtitle: "Todo está documentado antes del primer peso comprometido.",
  introTitle: "La diferencia que define el modelo",
  intro: "No operamos una marca. Operamos un portafolio. Tu participación no es la compra de una franquicia individual, sino una posición dentro de un sistema que mantiene 19 unidades en operación en México y España, con estructura legal formalizada. Esa diferencia define cómo se genera el valor y cómo se distribuye.",
  cards: [
    {
      title: "Qué estás adquiriendo",
      text: "Unidades de participación privada dentro del portafolio INDEF, conforme a la estructura legal establecida en el contrato notariado."
    },
    {
      title: "Qué no estás adquiriendo",
      text: "No adquieres una franquicia individual ni una sola unidad física. Tu participación es sobre el desempeño del portafolio completo, no de un punto de venta específico."
    },
    {
      title: "Horizonte de tiempo y liquidez",
      text: "Esta es una participación de largo plazo. El capital no es líquido en el corto plazo. El horizonte de participación y las condiciones de salida están definidos en el contrato y se revisan en la primera sesión."
    },
    {
      title: "El riesgo, con precisión",
      text: "Todo modelo empresarial puede generar resultados menores a los estimados o pérdidas. No hay garantías. Hay estructura, transparencia y 19 unidades con trayectoria real."
    }
  ]
};

/* ─── FAQ ─────────────────────────────────────────────────────
   Las preguntas que un socio serio tiene y no siempre hace.
─────────────────────────────────────────────────────────── */
const faqData = {
  eyebrow: "Preguntas frecuentes",
  title: "Respuestas directas.",
  subtitle: "Si la pregunta que tienes no está aquí, es la primera que deberías hacer en la sesión con el equipo.",
  items: [
    {
      question: "¿Qué es INDEF exactamente?",
      answer: "Un grupo empresarial que identifica, desarrolla y opera franquicias internacionales con trayectoria comprobada. Hoy operamos 19 unidades en Mérida, Yucatán y España: dos marcas activas, dos más próximamente. No somos intermediarios. Somos el operador."
    },
    {
      question: "¿Qué marcas operan actualmente?",
      answer: "Santa Gloria Coffee & Bakery, con tres unidades en Mérida y quince en España, y Allô Mon Coco, con una unidad en el Distrito de Arte Mérida. Wetzel's Pretzels y Coco Bubble Tea están en desarrollo."
    },
    {
      question: "¿Cómo puedo comprobar que las unidades existen?",
      answer: "Visitando cualquiera de ellas. En Mérida puedes ir a Santa Gloria La Isla, Santa Gloria Paseo Montejo, Santa Gloria Altabrisa o Allô Mon Coco DAM. Son establecimientos abiertos al público. Visitar es parte del proceso que recomendamos a cada socio."
    },
    {
      question: "¿Por qué participar a través de INDEF y no adquirir una franquicia directamente?",
      answer: "Adquirir una franquicia directamente implica asumir la operación completa: local, personal, inventario, costos fijos y gestión diaria. La participación a través de INDEF permite acceder al desempeño de un portafolio ya operado, sin gestionar la operación. Son dos modelos con perfiles de involucramiento, capital y riesgo distintos."
    },
    {
      question: "¿Cómo es la primera sesión con el equipo?",
      answer: "30 a 45 minutos con un asesor INDEF. No es una presentación de ventas. Es una conversación para resolver tus preguntas sobre el modelo, las marcas en operación, la estructura legal y las condiciones actuales. Sin propuesta inmediata. Sin presión de cierre. Si al final no tiene sentido para ti, respetamos esa decisión."
    },
    {
      question: "¿Cuánto tiempo queda comprometido mi capital?",
      answer: "Esta es una participación de largo plazo. El capital no es líquido en el corto plazo. El horizonte de participación y las condiciones de salida están definidos en el contrato. Los términos exactos se revisan en la primera sesión y están documentados antes de firmar cualquier documento."
    },
    {
      question: "¿Hay rendimientos garantizados?",
      answer: "No. Ninguna participación empresarial real garantiza rendimientos. Las proyecciones mostradas son escenarios ilustrativos, no compromisos. Revisa el contrato completo y consulta a un asesor financiero certificado e independiente antes de participar."
    },
    {
      question: "¿Qué respaldo legal tiene mi participación?",
      answer: "Contratos notariados y estructura legal documentada. Todo disponible para revisión completa, con el tiempo que necesites y con tu propio abogado si lo prefieres, antes de firmar cualquier documento. Ningún paso sucede sin que el documento esté firmado y comprendido."
    }
  ],
  moreInfo: [
    { title: "El portafolio", text: "Las 4 marcas de INDEF y su estado actual.", url: "#model", label: "Revisar" },
    { title: "Sucursales", text: "19 unidades en operación en Mérida y España.", url: "#branches", label: "Ver" },
    { title: "Estructura legal", text: "Contratos, notarización y modelo jurídico.", url: "#footer-legal", label: "Leer" },
    { title: "Términos", text: "Condiciones, riesgos y responsabilidades.", url: "#footer-legal", label: "Leer" }
  ]
};

/* ─── BLOG ─────────────────────────────────────────────────── */
const blogData = {
  eyebrow: "Perspectiva INDEF",
  title: "Lo que pensamos y por qué.",
  subtitle: "No publicamos contenido para generar clics. Publicamos cuando tenemos algo concreto que vale la pena decir.",
  posts: [
    { num: "01", title: "Artículo 01", author: "Equipo INDEF", date: "Próximamente" },
    { num: "02", title: "Artículo 02", author: "Equipo INDEF", date: "Próximamente" },
    { num: "03", title: "Artículo 03", author: "Equipo INDEF", date: "Próximamente" }
  ]
};

/* ─── CTA FINAL ──────────────────────────────────────────────────────────── */
const ctaData = {
  title: "¿Listo para una conversación?",
  subtitle: "No una presentación. No una propuesta. Una sesión de 30 a 45 minutos para resolver las preguntas que importan antes de tomar cualquier decisión.",
  note: "Sin compromisos en la primera sesión. Sin rendimientos garantizados. La participación implica riesgo empresarial real.",
  ctas: [
    { label: "Comenzar ahora", url: "https://indef.mx/empieza-a-invertir/", style: "primary" },
    { label: "Ver el portafolio", url: "#model", style: "secondary" },
    { label: "Ver sucursales", url: "#branches", style: "secondary" }
  ]
};

/* ─── MENSAJE INSTITUCIONAL ─────────────────────────────────
   La posición del grupo. Cierra el sitio.
─────────────────────────────────────────────────────────── */
const founderMessageData = {
  mission: {
    eyebrow: "Nuestra misión",
    text: "Desarrollar y operar marcas gastronómicas con modelos de negocio comprobados, creando oportunidades de crecimiento sostenibles para socios, franquiciantes e inversionistas mediante una expansión disciplinada y basada en resultados."
  },
  vision: {
    eyebrow: "Nuestra visión",
    text: "Consolidarnos como el grupo referente en la expansión internacional de marcas gastronómicas, conectando mercados mediante operación real, estándares consistentes y crecimiento de largo plazo."
  },
  what: {
    title: "¿Qué hacemos?",
    text: "Identificamos marcas con operación comprobada en sus mercados de origen. Validamos su capacidad de expansión, desarrollamos la operación local bajo nuestros estándares y únicamente después abrimos oportunidades de participación para nuestros socios.",
    bullets: [
      "Operamos antes de expandir.",
      "Documentamos antes de estructurar.",
      "Validamos antes de crecer."
    ]
  },
  image: "assets/images/joserevista.jpg"
};

/* ─── FOOTER ─────────────────────────────────────────────── */
const footerData = {
  description: "Identificamos, desarrollamos y operamos franquicias internacionales con trayectoria comprobada. México · España · Expansión activa.",
  columns: [
    {
      title: "Navegación",
      links: [
        { label: "Qué hacemos", url: "#about" },
        { label: "Portafolio", url: "#model" },
        { label: "El proceso", url: "#how-to" },
        { label: "Sucursales", url: "#branches" },
        { label: "Calculadora", url: "#calculator" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Socios activos", url: "#investors" },
        { label: "Términos y condiciones", url: "#footer-legal" },
        { label: "Estructura legal", url: "#footer-legal" }
      ]
    }
  ],
  contact: {
    title: "Contacto",
    email: "",
    whatsapp: "",
    website: "indef.mx"
  },
  social: {
    title: "Síguenos",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/indefmx/?hl=en" },
      { label: "LinkedIn", url: "https://www.linkedin.com/company/indefmx/?originalSubdomain=mx" },
      { label: "Facebook", url: "https://www.facebook.com/p/Grupo-INDEF-61573011222003/" }
    ]
  },
  rights: "2026 INDEF. Todos los derechos reservados."
};

/* ─── LEGAL ──────────────────────────────────────────────── */
const legalData = {
  id: "footer-legal",
  disclaimerLabel: "Aviso legal:",
  disclaimer: "Toda participación empresarial implica riesgo. El historial pasado no garantiza resultados futuros. Las proyecciones mostradas son escenarios ilustrativos y no constituyen garantía de rendimiento. La participación en el portafolio INDEF es de carácter privado, no líquida en el corto plazo, y está sujeta a los términos del contrato notariado vigente. Consulta a un asesor financiero certificado e independiente antes de comprometer capital.",
  privacy: "La información contenida en este sitio es de carácter informativo e institucional. INDEF no ejerce como asesor financiero certificado. Ninguna sección de este sitio constituye una oferta pública de valores. Toda decisión de inversión debe tomarse con asesoría profesional independiente."
};

window.LANDING_DATA = {
  siteConfig,
  navData,
  heroData,
  bonusData,
  investorsData,
  metricsData,
  locationsData,
  visionData,
  benefitsData,
  calculatorData,
  decisionData,
  dataRoomData,
  scarcityData,
  modelData,
  howToData,
  branchesData,
  participationData,
  faqData,
  blogData,
  ctaData,
  founderMessageData,
  footerData,
  legalData
};
