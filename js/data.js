
/* Imágenes del data room — idénticas para todos los idiomas */
const _carouselImages = [
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
];

/* Sucursales — la estructura geográfica es compartida; solo los nombres
   de país varían por idioma. Definimos una factory. */
function _buildCountries(t) {
  return [
    {
      flag: "🇲🇽",
      name: t.mexico,
      totalUnits: 4,
      cities: [
        {
          name: "Mérida, Yucatán",
          units: 4,
          image: "assets/images/merida.jpg.avif",
          branches: [
            { name: "Santa Gloria La Isla", brand: "Santa Gloria", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+La+Isla+M%C3%A9rida" },
            { name: "Santa Gloria Paseo Montejo", brand: "Santa Gloria", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Paseo+Montejo+M%C3%A9rida" },
            { name: "Santa Gloria Altabrisa", brand: "Santa Gloria", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Altabrisa+M%C3%A9rida" },
            { name: "Allô Mon Coco DAM", brand: "Allô Mon Coco", mapsUrl: "https://www.google.com/maps/search/?api=1&query=All%C3%B4+Mon+Coco+DAM+M%C3%A9rida" }
          ]
        }
      ]
    },
    {
      flag: "🇪🇸",
      name: t.spain,
      totalUnits: 15,
      cities: [
        {
          name: "Madrid",
          units: 7,
          image: "assets/images/madrid.avif",
          branches: [
            { name: "Santa Gloria Alcalá 164", brand: "Santa Gloria", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Alcal%C3%A1+164+Madrid" },
            { name: "Santa Gloria Alcalá 244", brand: "Santa Gloria", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Alcal%C3%A1+244+Madrid" },
            { name: "Santa Gloria Atocha 84", brand: "Santa Gloria", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Atocha+84+Madrid" },
            { name: "Santa Gloria Av. Ciudad de Barcelona 77", brand: "Santa Gloria", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Ciudad+de+Barcelona+77+Madrid" },
            { name: "Santa Gloria López de Hoyos 126", brand: "Santa Gloria", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+L%C3%B3pez+de+Hoyos+126+Madrid" },
            { name: "Santa Gloria Moraleja Green", brand: "Santa Gloria", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Moraleja+Green+Alcobendas+Madrid" },
            { name: "Santa Gloria Pedro Teixeira 7", brand: "Santa Gloria", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Pedro+Teixeira+7+Madrid" }
          ]
        },
        {
          name: "Bilbao",
          units: 5,
          image: "assets/images/bilbao.jpg.webp",
          branches: [
            { name: "Santa Gloria Alameda de Urquijo", brand: "Santa Gloria", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Alameda+de+Urquijo+Bilbao" },
            { name: "Santa Gloria Alameda Recalde 31", brand: "Santa Gloria", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Alameda+Recalde+31+Bilbao" },
            { name: "Santa Gloria CC Bilbao Intermodal", brand: "Santa Gloria", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Bilbao+Intermodal" },
            { name: "Santa Gloria Iparraguirre 11", brand: "Santa Gloria", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Iparraguirre+11+Bilbao" },
            { name: "Santa Gloria Puente Deusto 13", brand: "Santa Gloria", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Puente+Deusto+13+Bilbao" }
          ]
        },
        {
          name: "San Sebastián",
          units: 3,
          image: "assets/images/sansebastian.jpg",
          branches: [
            { name: "Santa Gloria Av. Sancho el Sabio 26", brand: "Santa Gloria", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Sancho+el+Sabio+26+Donostia" },
            { name: "Santa Gloria CC Paseo del Mar", brand: "Santa Gloria", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+CC+Paseo+del+Mar+San+Sebasti%C3%A1n" },
            { name: "Santa Gloria Easo 73", brand: "Santa Gloria", mapsUrl: "https://www.google.com/maps/search/?api=1&query=Santa+Gloria+Easo+73+Donostia" }
          ]
        }
      ]
    }
  ];
}

/* ════════════════════════════════════════════════════════════
   ESPAÑOL — fuente de verdad
   ════════════════════════════════════════════════════════════ */
const _es = {
  siteConfig: {
    brandName: "INDEF",
    shortName: "INDEF",
    languageLabel: "ES",
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
    floatingCoffee: false,
    ui: {
      participatingIn: "Participando en",
      unit: "unidad", units: "unidades",
      countries: "países",
      verifyOnMaps: "Verificables en Google Maps",
      activeUnits: "unidades activas",
      annualProjection: "Proyección anual ilustrativa",
      roiSuffix: "ROI anual",
      comingSoon: "Próximamente",
      articleLabel: "ARTÍCULO",
      close: "Cerrar",
      openVideo: "Ver video en pantalla completa",
      enableSound: "Activar sonido",
      mute: "Silenciar",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      langLabel: "Cambiar idioma",
      playVideo: "Reproducir"
    }
  },
  seoData: {
    title: "INDEF — No invertimos en ideas. Invertimos en operación.",
    description: "Identificamos, desarrollamos y operamos marcas gastronómicas internacionales en México y España. No invertimos en ideas. Invertimos en operación.",
    ogTitle: "INDEF — No invertimos en ideas. Invertimos en operación.",
    ogDescription: "Identificamos, desarrollamos y operamos marcas gastronómicas internacionales con trayectoria comprobada en México y España."
  },
  navData: [
    { label: "Qué hacemos", target: "#about" },
    { label: "Portafolio", target: "#model" },
    { label: "Proceso", target: "#how-to" },
    { label: "Sucursales", target: "#branches" },
    { label: "Calculadora", target: "#calculator" },
    { label: "FAQ", target: "#faq" },
    { label: "Socios", target: "#investors" },
    { label: "Legal", target: "#footer-legal" }
  ],
  heroData: {
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
  },
  bonusData: {
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
  },
  investorsData: {
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
  },
  metricsData: {
    social: {
      eyebrow: "El criterio INDEF",
      title: "No incorporamos marcas.\nLas seleccionamos.",
      subtitle: "Cada marca que forma parte del portafolio pasó por un proceso de evaluación riguroso. No buscamos tendencias. Buscamos negocios capaces de sostenerse durante años.",
      cards: [
        { title: "Historia operativa", text: "No evaluamos ideas. Evaluamos negocios que llevan años funcionando." },
        { title: "Rentabilidad", text: "Analizamos resultados reales antes de considerar cualquier expansión." },
        { title: "Escalabilidad", text: "Buscamos marcas que puedan operar en nuevos mercados con el mismo nivel que las hizo exitosas en origen." },
        { title: "Compatibilidad", text: "Cada marca debe poder integrarse al ecosistema INDEF y operar bajo nuestra metodología." }
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
  },
  locationsData: {
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
  },
  visionData: {
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
  },
  benefitsData: {
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
  },
  calculatorData: {
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
  },
  decisionData: {
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
  },
  dataRoomData: {
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
    carouselImages: _carouselImages,
    cta: { label: "Agenda tu primera sesión", url: "mailto:contacto@indef.mx?subject=Solicitud%20de%20primera%20sesi%C3%B3n%20%E2%80%94%20INDEF" }
  },
  scarcityData: {
    text: "Expansión activa",
    highlight: "Expansión activa. Las condiciones de participación para esta etapa están disponibles para quienes inician el proceso ahora."
  },
  modelData: {
    eyebrow: "El portafolio INDEF",
    title: "Marcas con historia. No con potencial.",
    subtitle: "Cada marca demostró su valor antes de llegar al portafolio. Años de operación, demanda real, presencia propia.",
    pillars: [
      {
        icon: "SG", title: "Santa Gloria", fullName: "Santa Gloria Coffee & Bakery",
        status: "active", statusLabel: "En operación", category: "Panadería artesanal · Café",
        markets: ["🇲🇽 Mérida, Yucatán — 3 unidades", "🇪🇸 España — 15 unidades"], totalUnits: 18,
        text: "Marca española de panadería artesanal con decenas de ubicaciones en España antes de llegar a México. Seleccionada por la solidez de su modelo y la consistencia de su demanda. Opera en Mérida y España con el mismo estándar.",
        image: "assets/images/SantaGloria.jpg", video: "assets/videos/SG_09.mp4"
      },
      {
        icon: "AMC", title: "Allô Mon Coco", fullName: "Allô Mon Coco",
        status: "active", statusLabel: "En operación", category: "Brunch · Café",
        markets: ["🇲🇽 Mérida, Yucatán — 1 unidad (DAM)"], totalUnits: 1,
        text: "Propuesta de brunch con identidad clara, ambiente diferenciado y modelo operativo sólido. Opera en el Distrito de Arte Mérida. Seleccionada por la fortaleza de su estructura, no por su novedad.",
        image: "assets/images/Allo Mon Coco.jpg"
      },
      {
        icon: "WP", title: "Wetzel's Pretzels", fullName: "Wetzel's Pretzels",
        status: "upcoming", statusLabel: "Próximamente", category: "Snacks · Retail",
        markets: ["🇲🇽 México — En desarrollo"], totalUnits: 0,
        text: "Marca estadounidense con más de 350 ubicaciones internacionales. Trayectoria consolidada en entornos de alto tráfico. En desarrollo para México.",
        image: "assets/images/wetzels-pretzels-2.jpg"
      },
      {
        icon: "CBT", title: "Coco Bubble Tea", fullName: "Coco Bubble Tea",
        status: "upcoming", statusLabel: "Próximamente", category: "Bebidas · Bubble Tea",
        markets: ["🇲🇽 México — En evaluación"], totalUnits: 0,
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
  },
  howToData: {
    eyebrow: "Cómo participar",
    title: "Sin prisa. Sin sorpresas.",
    subtitle: "Cada etapa está diseñada para que sepas dónde estás y qué viene después. No avanzamos al siguiente paso hasta que el anterior esté comprendido.",
    steps: [
      { title: "Explora el portafolio", text: "Recorre las marcas, revisa la documentación disponible y, si estás en Mérida, visita cualquier unidad en operación. Sin presión. Sin tiempo límite." },
      { title: "Una primera conversación", text: "Escríbenos para agendar 30 a 45 minutos con un asesor INDEF. No es una presentación de ventas. Es una sesión para resolver tus preguntas sobre el modelo, las marcas, la estructura legal y las condiciones actuales. Sin propuesta. Sin presión de cierre." },
      { title: "Tú defines el monto", text: "Si decides avanzar, defines el monto compatible con tu perfil y horizonte de participación. No hay mínimo sugerido por INDEF, solo el que sea adecuado para ti." },
      { title: "Contrato notariado", text: "Firma del acta notarial con la estructura legal documentada. No existe paso siguiente antes de que este documento esté revisado y comprendido. Con tu abogado, si lo prefieres." },
      { title: "Reportes trimestrales", text: "Desde el primer trimestre recibes métricas reales: desempeño por unidad, actividad del portafolio y resultados del período. Lo que ocurrió, no lo que esperamos. Acceso completo desde tu portal de socio." }
    ],
    image: "assets/images/img_2895.webp",
    card: {
      image: "assets/images/sg_mexico.jpg",
      title: "Conoce una operación real",
      text: "Recorre una de nuestras operaciones en México y conoce el estándar con el que desarrollamos cada marca antes de integrarla al portafolio INDEF.",
      link: "Ver más",
      linkUrl: "#branches"
    }
  },
  branchesData: {
    eyebrow: "19 unidades activas",
    title: "Ir a verlas es parte del proceso.",
    subtitle: "No pedimos confianza ciega. Cada unidad está abierta al público con dirección real y clientes diarios. Visitar es parte del proceso que esperamos de cada socio.",
    totalActive: 19,
    videoGallery: [
      { src: "assets/videos/TESTIMONIAL SG.mp4", label: "Santa Gloria — Testimonio" },
      { src: "assets/videos/Allo apertura DAM.mp4", label: "Allô Mon Coco — Apertura DAM" }
    ],
    countries: _buildCountries({ mexico: "México", spain: "España" }),
    upcoming: {
      eyebrow: "Próxima expansión",
      title: "Expansión en curso",
      description: "El portafolio opera 19 unidades en México y España. La siguiente ciudad está en desarrollo. Las condiciones de esta etapa están disponibles para quienes comienzan el proceso ahora."
    }
  },
  participationData: {
    eyebrow: "Qué implica participar",
    title: "Sin ambigüedad.",
    subtitle: "Todo está documentado antes del primer peso comprometido.",
    introTitle: "La diferencia que define el modelo",
    intro: "No operamos una marca. Operamos un portafolio. Tu participación no es la compra de una franquicia individual, sino una posición dentro de un sistema que mantiene 19 unidades en operación en México y España, con estructura legal formalizada. Esa diferencia define cómo se genera el valor y cómo se distribuye.",
    cards: [
      { title: "Qué estás adquiriendo", text: "Unidades de participación privada dentro del portafolio INDEF, conforme a la estructura legal establecida en el contrato notariado." },
      { title: "Qué no estás adquiriendo", text: "No adquieres una franquicia individual ni una sola unidad física. Tu participación es sobre el desempeño del portafolio completo, no de un punto de venta específico." },
      { title: "Horizonte de tiempo y liquidez", text: "Esta es una participación de largo plazo. El capital no es líquido en el corto plazo. El horizonte de participación y las condiciones de salida están definidos en el contrato y se revisan en la primera sesión." },
      { title: "El riesgo, con precisión", text: "Todo modelo empresarial puede generar resultados menores a los estimados o pérdidas. No hay garantías. Hay estructura, transparencia y 19 unidades con trayectoria real." }
    ]
  },
  faqData: {
    eyebrow: "Preguntas frecuentes",
    title: "Respuestas directas.",
    subtitle: "Si la pregunta que tienes no está aquí, es la primera que deberías hacer en la sesión con el equipo.",
    items: [
      { question: "¿Qué es INDEF exactamente?", answer: "Un grupo empresarial que identifica, desarrolla y opera franquicias internacionales con trayectoria comprobada. Hoy operamos 19 unidades en Mérida, Yucatán y España: dos marcas activas, dos más próximamente. No somos intermediarios. Somos el operador." },
      { question: "¿Qué marcas operan actualmente?", answer: "Santa Gloria Coffee & Bakery, con tres unidades en Mérida y quince en España, y Allô Mon Coco, con una unidad en el Distrito de Arte Mérida. Wetzel's Pretzels y Coco Bubble Tea están en desarrollo." },
      { question: "¿Cómo puedo comprobar que las unidades existen?", answer: "Visitando cualquiera de ellas. En Mérida puedes ir a Santa Gloria La Isla, Santa Gloria Paseo Montejo, Santa Gloria Altabrisa o Allô Mon Coco DAM. Son establecimientos abiertos al público. Visitar es parte del proceso que recomendamos a cada socio." },
      { question: "¿Por qué participar a través de INDEF y no adquirir una franquicia directamente?", answer: "Adquirir una franquicia directamente implica asumir la operación completa: local, personal, inventario, costos fijos y gestión diaria. La participación a través de INDEF permite acceder al desempeño de un portafolio ya operado, sin gestionar la operación. Son dos modelos con perfiles de involucramiento, capital y riesgo distintos." },
      { question: "¿Cómo es la primera sesión con el equipo?", answer: "30 a 45 minutos con un asesor INDEF. No es una presentación de ventas. Es una conversación para resolver tus preguntas sobre el modelo, las marcas en operación, la estructura legal y las condiciones actuales. Sin propuesta inmediata. Sin presión de cierre. Si al final no tiene sentido para ti, respetamos esa decisión." },
      { question: "¿Cuánto tiempo queda comprometido mi capital?", answer: "Esta es una participación de largo plazo. El capital no es líquido en el corto plazo. El horizonte de participación y las condiciones de salida están definidos en el contrato. Los términos exactos se revisan en la primera sesión y están documentados antes de firmar cualquier documento." },
      { question: "¿Hay rendimientos garantizados?", answer: "No. Ninguna participación empresarial real garantiza rendimientos. Las proyecciones mostradas son escenarios ilustrativos, no compromisos. Revisa el contrato completo y consulta a un asesor financiero certificado e independiente antes de participar." },
      { question: "¿Qué respaldo legal tiene mi participación?", answer: "Contratos notariados y estructura legal documentada. Todo disponible para revisión completa, con el tiempo que necesites y con tu propio abogado si lo prefieres, antes de firmar cualquier documento. Ningún paso sucede sin que el documento esté firmado y comprendido." }
    ],
    moreInfo: [
      { title: "El portafolio", text: "Las 4 marcas de INDEF y su estado actual.", url: "#model", label: "Revisar" },
      { title: "Sucursales", text: "19 unidades en operación en Mérida y España.", url: "#branches", label: "Ver" },
      { title: "Estructura legal", text: "Contratos, notarización y modelo jurídico.", url: "#footer-legal", label: "Leer" },
      { title: "Términos", text: "Condiciones, riesgos y responsabilidades.", url: "#footer-legal", label: "Leer" }
    ]
  },
  blogData: {
    eyebrow: "Perspectiva INDEF",
    title: "Lo que pensamos y por qué.",
    subtitle: "No publicamos contenido para generar clics. Publicamos cuando tenemos algo concreto que vale la pena decir.",
    posts: [
      { num: "01", title: "Artículo 01", author: "Equipo INDEF", date: "Próximamente" },
      { num: "02", title: "Artículo 02", author: "Equipo INDEF", date: "Próximamente" },
      { num: "03", title: "Artículo 03", author: "Equipo INDEF", date: "Próximamente" }
    ]
  },
  ctaData: {
    title: "¿Listo para una conversación?",
    subtitle: "No una presentación. No una propuesta. Una sesión de 30 a 45 minutos para resolver las preguntas que importan antes de tomar cualquier decisión.",
    note: "Sin compromisos en la primera sesión. Sin rendimientos garantizados. La participación implica riesgo empresarial real.",
    ctas: [
      { label: "Comenzar ahora", url: "https://indef.mx/empieza-a-invertir/", style: "primary" },
      { label: "Ver el portafolio", url: "#model", style: "secondary" },
      { label: "Ver sucursales", url: "#branches", style: "secondary" }
    ]
  },
  founderMessageData: {
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
  },
  footerData: {
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
    contact: { title: "Contacto", email: "", whatsapp: "", website: "indef.mx" },
    social: {
      title: "Síguenos",
      links: [
        { label: "Instagram", url: "https://www.instagram.com/indefmx/?hl=en" },
        { label: "LinkedIn", url: "https://www.linkedin.com/company/indefmx/?originalSubdomain=mx" },
        { label: "Facebook", url: "https://www.facebook.com/p/Grupo-INDEF-61573011222003/" }
      ]
    },
    rights: "2026 INDEF. Todos los derechos reservados."
  },
  legalData: {
    id: "footer-legal",
    disclaimerLabel: "Aviso legal:",
    disclaimer: "Toda participación empresarial implica riesgo. El historial pasado no garantiza resultados futuros. Las proyecciones mostradas son escenarios ilustrativos y no constituyen garantía de rendimiento. La participación en el portafolio INDEF es de carácter privado, no líquida en el corto plazo, y está sujeta a los términos del contrato notariado vigente. Consulta a un asesor financiero certificado e independiente antes de comprometer capital.",
    privacy: "La información contenida en este sitio es de carácter informativo e institucional. INDEF no ejerce como asesor financiero certificado. Ninguna sección de este sitio constituye una oferta pública de valores. Toda decisión de inversión debe tomarse con asesoría profesional independiente."
  }
};

/* ════════════════════════════════════════════════════════════
   ENGLISH
   ════════════════════════════════════════════════════════════ */
const _en = {
  siteConfig: {
    brandName: "INDEF",
    shortName: "INDEF",
    languageLabel: "EN",
    currency: "MXN",
    locale: "en-US",
    logo: "assets/logos/LOGO-BLANCO.png",
    fallbackLogoText: "INDEF",
    primaryCta: { label: "Get started", url: "https://indef.mx/empieza-a-invertir/" },
    mobileSticky: {
      kicker: "Minimum investment",
      text: "$115,000 MXN",
      sub: "Access to the INDEF portfolio",
      label: "Get started",
      url: "https://indef.mx/empieza-a-invertir/"
    },
    floatingCoffee: false,
    ui: {
      participatingIn: "Participating in",
      unit: "unit", units: "units",
      countries: "countries",
      verifyOnMaps: "Verifiable on Google Maps",
      activeUnits: "active units",
      annualProjection: "Illustrative annual projection",
      roiSuffix: "Annual ROI",
      comingSoon: "Coming soon",
      articleLabel: "ARTICLE",
      close: "Close",
      openVideo: "View full screen",
      enableSound: "Enable sound",
      mute: "Mute",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      langLabel: "Change language",
      playVideo: "Play"
    }
  },
  seoData: {
    title: "INDEF — We don't invest in ideas. We invest in operations.",
    description: "We identify, develop, and operate proven international F&B franchise brands in Mexico and Spain. Not ideas. Operations.",
    ogTitle: "INDEF — We don't invest in ideas. We invest in operations.",
    ogDescription: "We identify, develop, and operate proven international franchise brands with verifiable track records in Mexico and Spain."
  },
  navData: [
    { label: "What we do", target: "#about" },
    { label: "Portfolio", target: "#model" },
    { label: "Process", target: "#how-to" },
    { label: "Locations", target: "#branches" },
    { label: "Calculator", target: "#calculator" },
    { label: "FAQ", target: "#faq" },
    { label: "Partners", target: "#investors" },
    { label: "Legal", target: "#footer-legal" }
  ],
  heroData: {
    badge: "Mexico · Spain · Coming soon",
    title: { before: "We don't invest in ideas.", highlight: "We invest in operations." },
    subtitle: "We identify, develop, and operate international brands with proven track records in Mexico and Spain.",
    description: "INDEF selects franchises that have already demonstrated their value, develops them in new markets, and operates them with the same discipline that made them successful. We don't build from scratch. We enter where the path has already been paved.",
    image: "assets/images/IMG_3119.jpg",
    ctas: [
      { label: "Get started", url: "https://indef.mx/empieza-a-invertir/", style: "primary" },
      { label: "View portfolio", url: "#model", style: "secondary" },
      { label: "View locations", url: "#branches", style: "secondary" }
    ],
    disclaimer: "No guaranteed returns. Participation in any business involves real risk."
  },
  bonusData: {
    eyebrow: "Current portfolio status",
    title: "The portfolio is growing.",
    subtitle: "Two brands in operation. Two more coming. Expansion into the next market is already underway.",
    description: "Those who join during an active expansion phase participate from the very beginning of that growth, with terms documented from the first step. We don't create urgency. We simply report the portfolio's status.",
    bullets: [
      "19 units in Mérida and Spain. Physical presence, not projection.",
      "The terms for this stage are in contract from the beginning of the process.",
      "Complete documentation is available before committing any amount."
    ],
    visual: {
      captionTitle: "In operation",
      captionText: "Santa Gloria and Allô Mon Coco in Mérida, Yucatán. Footage captured during our brands' daily service."
    },
    cta: { label: "Learn how to join", url: "#how-to" }
  },
  investorsData: {
    eyebrow: "Partner network",
    title: "Who's already participating.",
    subtitle: "",
    items: [
      { initials: "AM", name: "Ana María R.", branch: "Santa Gloria Paseo Montejo — Mérida", amount: "$50,000", time: "1 day ago" },
      { initials: "RG", name: "Rubén G.", branch: "Portafolio INDEF", amount: "$120,000", time: "1 day ago" },
      { initials: "LP", name: "Laura P.", branch: "Allô Mon Coco DAM — Mérida", amount: "$80,000", time: "2 days ago" },
      { initials: "CM", name: "Carlos M.", branch: "Portafolio INDEF", amount: "$35,000", time: "2 days ago" },
      { initials: "IF", name: "Isabel F.", branch: "Santa Gloria España", amount: "$200,000", time: "3 days ago" },
      { initials: "JT", name: "Jorge T.", branch: "Portafolio INDEF", amount: "$95,000", time: "3 days ago" },
      { initials: "PR", name: "Paula R.", branch: "Santa Gloria La Isla — Mérida", amount: "$60,000", time: "4 days ago" },
      { initials: "DV", name: "Daniel V.", branch: "Santa Gloria Altabrisa — Mérida", amount: "$150,000", time: "4 days ago" }
    ]
  },
  metricsData: {
    social: {
      eyebrow: "The INDEF criterion",
      title: "We don't add brands.\nWe select them.",
      subtitle: "Every brand in the portfolio went through a rigorous evaluation process. We don't look for trends. We look for businesses capable of sustaining themselves for years.",
      cards: [
        { title: "Operating history", text: "We don't evaluate ideas. We evaluate businesses that have been running for years." },
        { title: "Profitability", text: "We analyze real results before considering any expansion." },
        { title: "Scalability", text: "We look for brands that can operate in new markets at the same level that made them successful at origin." },
        { title: "Compatibility", text: "Each brand must be able to integrate into the INDEF ecosystem and operate under our methodology." }
      ],
      manifestoTitle: "What we look for in a brand.",
      manifesto: [
        { num: "01", text: "It has been running for years." },
        { num: "02", text: "Its model can be transferred to other markets." },
        { num: "03", text: "It generates consistent demand." },
        { num: "04", text: "It can grow without losing quality." },
        { num: "05", text: "It adds value to the portfolio." }
      ],
      manifestoClose: "We don't look for the next trend. We look for businesses capable of still running ten years from now."
    },
    investment: {
      eyebrow: "The INDEF model",
      title: "Capability over tenure.",
      subtitle: "Trust isn't built with years. It's built with operations, methodology, and consistent results.",
      cards: [
        { title: "Operations before expansion", text: "We don't add brands to discover later if they work. We operate first, then scale." },
        { title: "Disciplined selection", text: "Every brand goes through an operational, financial, and strategic evaluation process before joining the portfolio." },
        { title: "Controlled expansion", text: "Every new city maintains the same standards of operations, quality, and experience." },
        { title: "Long-term alignment", text: "We seek to build sustainable relationships between operators, franchisors, and investors." }
      ],
      ecosystemTitle: "INDEF doesn't operate a single brand.",
      ecosystemText: "It operates a portfolio. Each brand adds physical presence, sustained demand, and reputation built before arriving in new markets. This isn't a bet on the future. It's the disciplined management of what already exists.",
      timeline: [
        { year: "01", text: "We identify brands that have been running for years in their home markets. Not concepts. Track records with results." },
        { year: "02", text: "We evaluate demand, model consistency, and compatibility with the target market before committing any resources." },
        { year: "03", text: "We negotiate the agreement directly with the franchisor. No middlemen. Full documentation from the start." },
        { year: "04", text: "The first unit opens precisely following the standard that made the brand successful at origin." },
        { year: "05", text: "We scale only when local results justify the next step." }
      ],
      assets: [
        "19 units in operation in Mexico and Spain.",
        "Each brand has years of track record before entering the INDEF portfolio.",
        "Each participation is backed by a notarized contract."
      ]
    }
  },
  locationsData: {
    upcoming: {
      eyebrow: "Portfolio growth",
      title: "We grow when the model is ready.",
      description: "Every new city represents a strategic decision, not a commercial target. Before opening a new market, we validate operations, standardization, and replication capacity. Only then does the portfolio continue to grow.",
      steps: [
        { num: "01", text: "Consolidated operations." },
        { num: "02", text: "Replicable standards." },
        { num: "03", text: "Results-based expansion." }
      ],
      cta: { label: "Discover our model", url: "#model" },
      card: {
        image: "assets/images/IMG_3118.jpg",
        captionTitle: "New market in preparation",
        captionText: "Portfolio growth continues following the same methodology that has enabled operations in Mexico and Spain."
      }
    },
    newLocation: {
      eyebrow: "Validated model",
      title: "What matters is not how many units exist.\nIt's that all of them are already operating.",
      description: "Every brand in the portfolio has already gone through the hardest process: open, operate, sell, standardize, and keep running.\n\nINEF doesn't develop ideas. It integrates businesses that have already demonstrated results and builds growth on existing operations.",
      cards: [
        { title: "Proven operations", text: "Every unit already serves real customers and operates under standardized processes." },
        { title: "Disciplined expansion", text: "Every new city replicates an existing model, not an experimental one." },
        { title: "Capital on evidence", text: "Participation opens only when operations have already been validated." }
      ],
      logoMark: "assets/logos/Recurso 23IMG LOGO2.png",
      cta: { label: "View all locations", url: "#branches" }
    }
  },
  visionData: {
    eyebrow: "What INDEF does",
    title: "A bridge between markets.",
    description: "The world's best franchises don't arrive on their own in new territories. Someone has to identify them when they already have years of history, develop them with the same discipline, and operate them as if they never left their home market.\n\nINDEF does that. We are the operator, not the intermediary. Today we're in Mexico and Spain, with more to come.",
    stats: [
      { value: "19", label: "Active units" },
      { value: "4", label: "Portfolio brands" },
      { value: "2", label: "Countries: Mexico & Spain" },
      { value: "+1", label: "City coming soon" }
    ],
    phases: [
      { range: "Step 1", title: "Identification", text: "We seek brands that have been running for years in their home markets. Not concepts with potential. Stories with results." },
      { range: "Step 2", title: "Evaluation", text: "We analyze model consistency and compatibility with the target market before committing any resources." },
      { range: "Step 3", title: "Development", text: "We develop each brand with the operational rigor that made it successful at origin. No shortcuts." },
      { range: "Step 4", title: "Opening", text: "The first unit opens following the exact standard from origin." },
      { range: "Step 5", title: "Expansion", text: "We scale when local results justify the next step. Not before." }
    ],
    founder: {
      captionTitle: "Meet INDEF",
      captionText: "Learn how we identify, develop, and operate brands before bringing them to new markets.",
      captionLink: "Watch full video"
    }
  },
  benefitsData: {
    eyebrow: "What sets INDEF apart",
    title: "Structure over promise.",
    subtitle: "Every element of the model exists for an operational reason, not as a sales argument.",
    items: [
      { icon: "H", title: "History before hypothesis", text: "No brand enters the portfolio without years of operation in its home market. Santa Gloria had dozens of locations in Spain before opening in Mérida." },
      { icon: "=", title: "The same standard in every market", text: "What makes a brand work in Spain must work the same way in Mérida. If the model can't sustain that transfer, it doesn't enter the portfolio." },
      { icon: "◎", title: "Real and open locations", text: "The 19 units have public addresses, are open to the public, and have reviews from real customers. Visiting any of them in Mérida is part of the process we recommend." },
      { icon: "⊕", title: "Contract before capital", text: "Nothing happens without a prior notarial deed. Participation doesn't begin until the document is reviewed and understood. With your own attorney, if you prefer." },
      { icon: "≡", title: "Reports. Not projections.", text: "Partners receive real operational metrics quarterly. What happened, not what we expect to happen." },
      { icon: "→", title: "Expansion with evidence, not faith", text: "The next expansion isn't a promise. It's the continuation of a portfolio that already operates 19 units in Mexico and Spain." }
    ]
  },
  calculatorData: {
    eyebrow: "Participation projection",
    title: "Understand the numbers first.",
    subtitle: "Illustrative scenarios. They do not represent a guarantee or commitment of returns.",
    minAmount: 10000,
    maxAmount: 5000000,
    step: 1000,
    initialAmount: 50000,
    unitPrice: 100,
    totalNetworkUnits: 2000000,
    labels: {
      amount: "Investment amount",
      units: "Units acquired",
      ownership: "Network ownership",
      projected: "Projected value"
    },
    scenarios: [
      { name: "Conservative", annualRoi: 8 },
      { name: "Base case", annualRoi: 15 },
      { name: "Favorable", annualRoi: 25 }
    ]
  },
  decisionData: {
    eyebrow: "How we work with our partners",
    title: "Two parties. Clear commitments.",
    subtitle: "A long-term relationship requires both parties to know what to expect from each other from day one.",
    columns: [
      {
        title: "What we ask of each partner",
        items: [
          "Review the complete documentation before committing capital.",
          "Visit at least one operating unit.",
          "Understand clearly what you are acquiring and what you are not.",
          "Participate with an amount compatible with your real risk profile and time horizon."
        ]
      },
      {
        title: "What INDEF committed to",
        items: [
          "Documentation available without conditions or prior pressure.",
          "Quarterly reports with real operational metrics.",
          "One way of doing things. No exceptions by amount or relationship.",
          "Transparency when results fall short of expectations."
        ]
      }
    ]
  },
  dataRoomData: {
    eyebrow: "Available documentation",
    title: "Everything is ready before you ask.",
    subtitle: "Every unit, every contract, and every figure exists before you request it. We don't release information under pressure. We make it available from the beginning.",
    indicatorsTitle: "What exists today",
    indicators: [
      { value: "19", label: "Units in operation" },
      { value: "2", label: "Countries: Mexico & Spain" },
      { value: "4", label: "Portfolio brands" }
    ],
    cards: [
      { title: "Real and public presence", text: "The 19 units are open to the public. Each has a physical address and can be visited before any decision." },
      { title: "Transparent methodology", text: "The brand selection process, operating standard, and participation structure are documented and available for full review." },
      { title: "Contracts before any step", text: "Nothing happens without a prior formal document. The legal structure is fully reviewable, with all the time needed, before the first peso committed." }
    ],
    carouselImages: _carouselImages,
    cta: { label: "Schedule your first meeting", url: "mailto:contacto@indef.mx?subject=Solicitud%20de%20primera%20sesi%C3%B3n%20%E2%80%94%20INDEF" }
  },
  scarcityData: {
    text: "Active expansion",
    highlight: "Active expansion. Participation terms for this stage are available for those who begin the process now."
  },
  modelData: {
    eyebrow: "The INDEF portfolio",
    title: "Brands with history. Not with potential.",
    subtitle: "Each brand demonstrated its value before joining the portfolio. Years of operation, real demand, established presence.",
    pillars: [
      {
        icon: "SG", title: "Santa Gloria", fullName: "Santa Gloria Coffee & Bakery",
        status: "active", statusLabel: "In operation", category: "Artisan Bakery · Coffee",
        markets: ["🇲🇽 Mérida, Yucatán — 3 units", "🇪🇸 Spain — 15 units"], totalUnits: 18,
        text: "A Spanish artisan bakery brand with dozens of locations in Spain before arriving in Mexico. Selected for the strength of its model and the consistency of its demand. It operates in Mérida and Spain with the same standard.",
        image: "assets/images/SantaGloria.jpg", video: "assets/videos/SG_09.mp4"
      },
      {
        icon: "AMC", title: "Allô Mon Coco", fullName: "Allô Mon Coco",
        status: "active", statusLabel: "In operation", category: "Brunch · Coffee",
        markets: ["🇲🇽 Mérida, Yucatán — 1 unit (DAM)"], totalUnits: 1,
        text: "A brunch concept with a clear identity, a distinctive atmosphere, and a solid operating model. It operates in the Mérida Art District. Selected for the strength of its structure, not for its novelty.",
        image: "assets/images/Allo Mon Coco.jpg"
      },
      {
        icon: "WP", title: "Wetzel's Pretzels", fullName: "Wetzel's Pretzels",
        status: "upcoming", statusLabel: "Coming soon", category: "Snacks · Retail",
        markets: ["🇲🇽 Mexico — In development"], totalUnits: 0,
        text: "A U.S. brand with more than 350 international locations. An established track record in high-traffic environments. In development for Mexico.",
        image: "assets/images/wetzels-pretzels-2.jpg"
      },
      {
        icon: "CBT", title: "Coco Bubble Tea", fullName: "Coco Bubble Tea",
        status: "upcoming", statusLabel: "Coming soon", category: "Beverages · Bubble Tea",
        markets: ["🇲🇽 Mexico — In evaluation"], totalUnits: 0,
        text: "The next addition to the portfolio. The selection criterion is the same as for every brand: a solid operating track record before any commitment.",
        image: "assets/images/Coco-Bubble-Tea-Kiosk-photo.jpg"
      }
    ],
    roiTitle: "Projected annual return",
    roi: [
      { label: "Conservative", value: "8%" },
      { label: "Base case", value: "15%" },
      { label: "Favorable", value: "25%" }
    ]
  },
  howToData: {
    eyebrow: "How to join",
    title: "No rush. No surprises.",
    subtitle: "Each stage is designed so you know where you stand and what comes next. We don't move to the next step until the previous one is understood.",
    steps: [
      { title: "Explore the portfolio", text: "Browse the brands, review the available documentation, and if you're in Mérida, visit any operating unit. No pressure. No time limit." },
      { title: "An initial conversation", text: "Write to us to schedule 30 to 45 minutes with an INDEF advisor. This isn't a sales presentation. It's a session to answer your questions about the model, the brands, the legal structure, and current terms. No proposal. No closing pressure." },
      { title: "You define the amount", text: "If you decide to move forward, you define the amount compatible with your profile and time horizon. There's no minimum suggested by INDEF, only the one that's right for you." },
      { title: "Notarized contract", text: "Signing of the notarial deed with the documented legal structure. No next step exists before this document is reviewed and understood. With your own attorney, if you prefer." },
      { title: "Quarterly reports", text: "From the first quarter, you receive real metrics: unit performance, portfolio activity, and period results. What happened, not what we expect. Full access from your partner portal." }
    ],
    image: "assets/images/img_2895.webp",
    card: {
      image: "assets/images/sg_mexico.jpg",
      title: "See a real operation",
      text: "Tour one of our operations in Mexico and see the standard with which we develop every brand before integrating it into the INDEF portfolio.",
      link: "Learn more",
      linkUrl: "#branches"
    }
  },
  branchesData: {
    eyebrow: "19 active units",
    title: "Visiting them is part of the process.",
    subtitle: "We don't ask for blind trust. Every unit is open to the public with a real address and daily customers. Visiting is part of the process we expect from every partner.",
    totalActive: 19,
    videoGallery: [
      { src: "assets/videos/TESTIMONIAL SG.mp4", label: "Santa Gloria — Testimonial" },
      { src: "assets/videos/Allo apertura DAM.mp4", label: "Allô Mon Coco — DAM Opening" }
    ],
    countries: _buildCountries({ mexico: "Mexico", spain: "Spain" }),
    upcoming: {
      eyebrow: "Next expansion",
      title: "Expansion underway",
      description: "The portfolio operates 19 units in Mexico and Spain. The next city is in development. Terms for this stage are available for those who begin the process now."
    }
  },
  participationData: {
    eyebrow: "What participation involves",
    title: "No ambiguity.",
    subtitle: "Everything is documented before the first peso committed.",
    introTitle: "The difference that defines the model",
    intro: "We don't operate a single brand. We operate a portfolio. Your participation isn't the purchase of an individual franchise, but a position within a system that maintains 19 units in operation in Mexico and Spain, with formalized legal structure. That difference defines how value is generated and how it's distributed.",
    cards: [
      { title: "What you are acquiring", text: "Private participation units within the INDEF portfolio, in accordance with the legal structure established in the notarized contract." },
      { title: "What you are not acquiring", text: "You are not acquiring an individual franchise nor a single physical unit. Your participation is on the performance of the complete portfolio, not a specific point of sale." },
      { title: "Time horizon and liquidity", text: "This is a long-term participation. Capital is not liquid in the short term. The participation horizon and exit conditions are defined in the contract and reviewed in the first session." },
      { title: "The risk, precisely stated", text: "Any business model may generate results lower than estimated, or losses. There are no guarantees. There is structure, transparency, and 19 units with a real track record." }
    ]
  },
  faqData: {
    eyebrow: "Frequently asked questions",
    title: "Direct answers.",
    subtitle: "If the question you have isn't here, it's the first one you should ask in the session with the team.",
    items: [
      { question: "What exactly is INDEF?", answer: "A business group that identifies, develops, and operates international franchises with a proven track record. Today we operate 19 units in Mérida, Yucatán and Spain: two active brands, two more coming soon. We are not intermediaries. We are the operator." },
      { question: "Which brands are currently operating?", answer: "Santa Gloria Coffee & Bakery, with three units in Mérida and fifteen in Spain, and Allô Mon Coco, with one unit in the Mérida Art District. Wetzel's Pretzels and Coco Bubble Tea are in development." },
      { question: "How can I verify that the units exist?", answer: "By visiting any of them. In Mérida you can go to Santa Gloria La Isla, Santa Gloria Paseo Montejo, Santa Gloria Altabrisa, or Allô Mon Coco DAM. They are establishments open to the public. Visiting is part of the process we recommend to every partner." },
      { question: "Why participate through INDEF instead of acquiring a franchise directly?", answer: "Acquiring a franchise directly means taking on the full operation: premises, staff, inventory, fixed costs, and daily management. Participating through INDEF gives you access to the performance of an already-operated portfolio, without managing the operation. These are two models with different profiles of involvement, capital, and risk." },
      { question: "What is the first session with the team like?", answer: "30 to 45 minutes with an INDEF advisor. It isn't a sales presentation. It's a conversation to answer your questions about the model, the operating brands, the legal structure, and current terms. No immediate proposal. No closing pressure. If in the end it doesn't make sense for you, we respect that decision." },
      { question: "How long is my capital committed?", answer: "This is a long-term participation. Capital is not liquid in the short term. The participation horizon and exit conditions are defined in the contract. The exact terms are reviewed in the first session and documented before signing any document." },
      { question: "Are returns guaranteed?", answer: "No. No real business participation guarantees returns. The projections shown are illustrative scenarios, not commitments. Review the full contract and consult a certified, independent financial advisor before participating." },
      { question: "What legal backing does my participation have?", answer: "Notarized contracts and documented legal structure. Everything available for full review, with all the time you need and with your own attorney if you prefer, before signing any document. No step happens without the document being signed and understood." }
    ],
    moreInfo: [
      { title: "The portfolio", text: "INDEF's 4 brands and their current status.", url: "#model", label: "Review" },
      { title: "Locations", text: "19 operating units in Mérida and Spain.", url: "#branches", label: "View" },
      { title: "Legal structure", text: "Contracts, notarization, and legal model.", url: "#footer-legal", label: "Read" },
      { title: "Terms", text: "Conditions, risks, and responsibilities.", url: "#footer-legal", label: "Read" }
    ]
  },
  blogData: {
    eyebrow: "INDEF perspective",
    title: "What we think and why.",
    subtitle: "We don't publish content to generate clicks. We publish when we have something concrete worth saying.",
    posts: [
      { num: "01", title: "Article 01", author: "INDEF Team", date: "Coming soon" },
      { num: "02", title: "Article 02", author: "INDEF Team", date: "Coming soon" },
      { num: "03", title: "Article 03", author: "INDEF Team", date: "Coming soon" }
    ]
  },
  ctaData: {
    title: "Ready for a conversation?",
    subtitle: "Not a presentation. Not a proposal. A 30 to 45-minute session to address the questions that matter before making any decision.",
    note: "No commitments in the first session. No guaranteed returns. Participation involves real business risk.",
    ctas: [
      { label: "Get started", url: "https://indef.mx/empieza-a-invertir/", style: "primary" },
      { label: "View portfolio", url: "#model", style: "secondary" },
      { label: "View locations", url: "#branches", style: "secondary" }
    ]
  },
  founderMessageData: {
    mission: {
      eyebrow: "Our mission",
      text: "To develop and operate food and beverage brands with proven business models, creating sustainable growth opportunities for partners, franchisors, and investors through disciplined, results-based expansion."
    },
    vision: {
      eyebrow: "Our vision",
      text: "To become the benchmark group for the international expansion of F&B brands, connecting markets through real operations, consistent standards, and long-term growth."
    },
    what: {
      title: "What do we do?",
      text: "We identify brands with proven operations in their home markets. We validate their expansion capacity, develop local operations under our standards, and only then open participation opportunities for our partners.",
      bullets: [
        "We operate before we expand.",
        "We document before we structure.",
        "We validate before we grow."
      ]
    },
    image: "assets/images/joserevista.jpg"
  },
  footerData: {
    description: "We identify, develop, and operate proven international franchises. Mexico · Spain · Active expansion.",
    columns: [
      {
        title: "Navigation",
        links: [
          { label: "What we do", url: "#about" },
          { label: "Portfolio", url: "#model" },
          { label: "The process", url: "#how-to" },
          { label: "Locations", url: "#branches" },
          { label: "Calculator", url: "#calculator" }
        ]
      },
      {
        title: "Legal",
        links: [
          { label: "Active partners", url: "#investors" },
          { label: "Terms & conditions", url: "#footer-legal" },
          { label: "Legal structure", url: "#footer-legal" }
        ]
      }
    ],
    contact: { title: "Contact", email: "", whatsapp: "", website: "indef.mx" },
    social: {
      title: "Follow us",
      links: [
        { label: "Instagram", url: "https://www.instagram.com/indefmx/?hl=en" },
        { label: "LinkedIn", url: "https://www.linkedin.com/company/indefmx/?originalSubdomain=mx" },
        { label: "Facebook", url: "https://www.facebook.com/p/Grupo-INDEF-61573011222003/" }
      ]
    },
    rights: "2026 INDEF. All rights reserved."
  },
  legalData: {
    id: "footer-legal",
    disclaimerLabel: "Legal notice:",
    disclaimer: "All business participation involves risk. Past performance does not guarantee future results. The projections shown are illustrative scenarios and do not constitute a guarantee of return. Participation in the INDEF portfolio is private in nature, not liquid in the short term, and is subject to the terms of the current notarized contract. Consult a certified and independent financial advisor before committing capital.",
    privacy: "The information contained on this site is informational and institutional in nature. INDEF does not act as a certified financial advisor. No section of this site constitutes a public offering of securities. Any investment decision must be made with independent professional advice."
  }
};

/* ════════════════════════════════════════════════════════════
   FRANÇAIS
   ════════════════════════════════════════════════════════════ */
const _fr = {
  siteConfig: {
    brandName: "INDEF",
    shortName: "INDEF",
    languageLabel: "FR",
    currency: "MXN",
    locale: "fr-FR",
    logo: "assets/logos/LOGO-BLANCO.png",
    fallbackLogoText: "INDEF",
    primaryCta: { label: "Commencer maintenant", url: "https://indef.mx/empieza-a-invertir/" },
    mobileSticky: {
      kicker: "Investissement minimum",
      text: "$115,000 MXN",
      sub: "Accès au portefeuille INDEF",
      label: "Commencer maintenant",
      url: "https://indef.mx/empieza-a-invertir/"
    },
    floatingCoffee: false,
    ui: {
      participatingIn: "Participant à",
      unit: "unité", units: "unités",
      countries: "pays",
      verifyOnMaps: "Vérifiables sur Google Maps",
      activeUnits: "unités actives",
      annualProjection: "Projection annuelle illustrative",
      roiSuffix: "ROI annuel",
      comingSoon: "Prochainement",
      articleLabel: "ARTICLE",
      close: "Fermer",
      openVideo: "Voir en plein écran",
      enableSound: "Activer le son",
      mute: "Couper le son",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      langLabel: "Changer de langue",
      playVideo: "Lire"
    }
  },
  seoData: {
    title: "INDEF — Nous n'investissons pas dans des idées. Nous investissons dans l'opération.",
    description: "Nous identifions, développons et exploitons des marques de restauration internationales au Mexique et en Espagne. Pas des idées. Des opérations.",
    ogTitle: "INDEF — Nous n'investissons pas dans des idées. Nous investissons dans l'opération.",
    ogDescription: "Nous identifions, développons et exploitons des marques de franchise internationales avec des antécédents prouvés au Mexique et en Espagne."
  },
  navData: [
    { label: "Ce que nous faisons", target: "#about" },
    { label: "Portefeuille", target: "#model" },
    { label: "Processus", target: "#how-to" },
    { label: "Établissements", target: "#branches" },
    { label: "Calculatrice", target: "#calculator" },
    { label: "FAQ", target: "#faq" },
    { label: "Partenaires", target: "#investors" },
    { label: "Légal", target: "#footer-legal" }
  ],
  heroData: {
    badge: "Mexique · Espagne · Prochainement",
    title: { before: "Nous n'investissons pas dans des idées.", highlight: "Nous investissons dans l'opération." },
    subtitle: "Nous identifions, développons et exploitons des marques internationales avec des antécédents prouvés au Mexique et en Espagne.",
    description: "INDEF sélectionne des franchises qui ont déjà démontré leur valeur, les développe sur de nouveaux marchés et les exploite avec la même rigueur qui les a fait réussir. Nous ne construisons pas à partir de zéro. Nous entrons là où le chemin a déjà été tracé.",
    image: "assets/images/IMG_3119.jpg",
    ctas: [
      { label: "Commencer maintenant", url: "https://indef.mx/empieza-a-invertir/", style: "primary" },
      { label: "Voir le portefeuille", url: "#model", style: "secondary" },
      { label: "Voir les établissements", url: "#branches", style: "secondary" }
    ],
    disclaimer: "Aucun rendement garanti. La participation à toute entreprise comporte un risque réel."
  },
  bonusData: {
    eyebrow: "État actuel du portefeuille",
    title: "Le portefeuille se développe.",
    subtitle: "Deux marques en exploitation. Deux autres à venir. L'expansion vers le marché suivant est déjà en cours.",
    description: "Ceux qui rejoignent durant une phase d'expansion active participent dès le début de cette croissance, avec des conditions documentées dès la première étape. Nous ne créons pas d'urgence. Nous informons simplement de l'état du portefeuille.",
    bullets: [
      "19 unités à Mérida et en Espagne. Présence physique, pas une projection.",
      "Les conditions de cette étape figurent au contrat dès le début du processus.",
      "La documentation complète est disponible avant d'engager le moindre montant."
    ],
    visual: {
      captionTitle: "En exploitation",
      captionText: "Santa Gloria et Allô Mon Coco à Mérida, Yucatán. Images saisies durant le service quotidien de nos marques."
    },
    cta: { label: "Comment participer", url: "#how-to" }
  },
  investorsData: {
    eyebrow: "Réseau de partenaires",
    title: "Ceux qui participent déjà.",
    subtitle: "",
    items: [
      { initials: "AM", name: "Ana María R.", branch: "Santa Gloria Paseo Montejo — Mérida", amount: "$50,000", time: "Il y a 1 jour" },
      { initials: "RG", name: "Rubén G.", branch: "Portafolio INDEF", amount: "$120,000", time: "Il y a 1 jour" },
      { initials: "LP", name: "Laura P.", branch: "Allô Mon Coco DAM — Mérida", amount: "$80,000", time: "Il y a 2 jours" },
      { initials: "CM", name: "Carlos M.", branch: "Portafolio INDEF", amount: "$35,000", time: "Il y a 2 jours" },
      { initials: "IF", name: "Isabel F.", branch: "Santa Gloria España", amount: "$200,000", time: "Il y a 3 jours" },
      { initials: "JT", name: "Jorge T.", branch: "Portafolio INDEF", amount: "$95,000", time: "Il y a 3 jours" },
      { initials: "PR", name: "Paula R.", branch: "Santa Gloria La Isla — Mérida", amount: "$60,000", time: "Il y a 4 jours" },
      { initials: "DV", name: "Daniel V.", branch: "Santa Gloria Altabrisa — Mérida", amount: "$150,000", time: "Il y a 4 jours" }
    ]
  },
  metricsData: {
    social: {
      eyebrow: "Le critère INDEF",
      title: "Nous n'ajoutons pas de marques.\nNous les sélectionnons.",
      subtitle: "Chaque marque du portefeuille a suivi un processus d'évaluation rigoureux. Nous ne cherchons pas les tendances. Nous cherchons des entreprises capables de se maintenir pendant des années.",
      cards: [
        { title: "Historique d'exploitation", text: "Nous n'évaluons pas des idées. Nous évaluons des entreprises qui fonctionnent depuis des années." },
        { title: "Rentabilité", text: "Nous analysons des résultats réels avant d'envisager toute expansion." },
        { title: "Évolutivité", text: "Nous recherchons des marques capables d'opérer sur de nouveaux marchés au même niveau que celui qui les a fait réussir à l'origine." },
        { title: "Compatibilité", text: "Chaque marque doit pouvoir s'intégrer à l'écosystème INDEF et opérer selon notre méthodologie." }
      ],
      manifestoTitle: "Ce que nous recherchons dans une marque.",
      manifesto: [
        { num: "01", text: "Elle fonctionne depuis des années." },
        { num: "02", text: "Son modèle peut être transféré à d'autres marchés." },
        { num: "03", text: "Elle génère une demande constante." },
        { num: "04", text: "Elle peut croître sans perdre en qualité." },
        { num: "05", text: "Elle apporte de la valeur au portefeuille." }
      ],
      manifestoClose: "Nous ne cherchons pas la prochaine tendance. Nous cherchons des entreprises capables de fonctionner encore dans dix ans."
    },
    investment: {
      eyebrow: "Le modèle INDEF",
      title: "La capacité avant l'ancienneté.",
      subtitle: "La confiance ne se construit pas avec les années. Elle se construit avec l'opération, la méthodologie et des résultats constants.",
      cards: [
        { title: "L'opération avant l'expansion", text: "Nous n'ajoutons pas de marques pour découvrir ensuite si elles fonctionnent. Nous opérons d'abord, puis nous développons." },
        { title: "Sélection disciplinée", text: "Chaque marque suit un processus d'évaluation opérationnel, financier et stratégique avant d'intégrer le portefeuille." },
        { title: "Expansion contrôlée", text: "Chaque nouvelle ville maintient les mêmes standards d'opération, de qualité et d'expérience." },
        { title: "Alignement à long terme", text: "Nous cherchons à construire des relations durables entre opérateurs, franchiseurs et investisseurs." }
      ],
      ecosystemTitle: "INDEF n'exploite pas une seule marque.",
      ecosystemText: "Il exploite un portefeuille. Chaque marque ajoute une présence physique, une demande soutenue et une réputation construite avant d'arriver sur de nouveaux marchés. Ce n'est pas un pari sur l'avenir. C'est la gestion disciplinée de ce qui existe déjà.",
      timeline: [
        { year: "01", text: "Nous identifions des marques qui fonctionnent depuis des années sur leurs marchés d'origine. Pas des concepts. Des parcours avec des résultats." },
        { year: "02", text: "Nous évaluons la demande, la cohérence du modèle et la compatibilité avec le marché cible avant d'engager la moindre ressource." },
        { year: "03", text: "Nous négocions l'accord directement avec le franchiseur. Sans intermédiaires. Avec toute la documentation dès le début." },
        { year: "04", text: "La première unité ouvre en suivant précisément le standard qui a fait le succès de la marque à l'origine." },
        { year: "05", text: "Nous développons uniquement lorsque les résultats locaux justifient l'étape suivante." }
      ],
      assets: [
        "19 unités en exploitation au Mexique et en Espagne.",
        "Chaque marque a des années de parcours avant d'entrer au portefeuille INDEF.",
        "Chaque participation est garantie par un contrat notarié."
      ]
    }
  },
  locationsData: {
    upcoming: {
      eyebrow: "La croissance du portefeuille",
      title: "Nous grandissons lorsque le modèle est prêt.",
      description: "Chaque nouvelle ville représente une décision stratégique, non un objectif commercial. Avant d'ouvrir un nouveau marché, nous validons l'opération, la standardisation et la capacité de réplication. Ce n'est qu'alors que le portefeuille continue de croître.",
      steps: [
        { num: "01", text: "Opération consolidée." },
        { num: "02", text: "Standards reproductibles." },
        { num: "03", text: "Expansion fondée sur les résultats." }
      ],
      cta: { label: "Découvrir notre modèle", url: "#model" },
      card: {
        image: "assets/images/IMG_3118.jpg",
        captionTitle: "Nouveau marché en préparation",
        captionText: "La croissance du portefeuille se poursuit en suivant la même méthodologie qui a permis d'opérer au Mexique et en Espagne."
      }
    },
    newLocation: {
      eyebrow: "Modèle validé",
      title: "L'important n'est pas combien d'unités existent.\nC'est qu'elles fonctionnent toutes déjà.",
      description: "Chaque marque du portefeuille a déjà traversé le processus le plus difficile : ouvrir, opérer, vendre, standardiser et continuer à fonctionner.\n\nINDEF ne développe pas des idées. Il intègre des entreprises qui ont déjà démontré des résultats et bâtit la croissance sur une opération existante.",
      cards: [
        { title: "Opération éprouvée", text: "Chaque unité sert déjà de vrais clients et fonctionne selon des processus standardisés." },
        { title: "Expansion disciplinée", text: "Chaque nouvelle ville reproduit un modèle existant, non un modèle expérimental." },
        { title: "Capital fondé sur la preuve", text: "La participation ne s'ouvre que lorsque l'opération a déjà été validée." }
      ],
      logoMark: "assets/logos/Recurso 23IMG LOGO2.png",
      cta: { label: "Voir tous les établissements", url: "#branches" }
    }
  },
  visionData: {
    eyebrow: "Ce que fait INDEF",
    title: "Un pont entre les marchés.",
    description: "Les meilleures franchises du monde n'arrivent pas seules sur de nouveaux territoires. Quelqu'un doit les identifier lorsqu'elles ont déjà des années d'histoire, les développer avec la même rigueur et les exploiter comme si elles n'avaient jamais quitté leur marché d'origine.\n\nINDEF fait cela. Nous sommes l'opérateur, non l'intermédiaire. Aujourd'hui nous sommes au Mexique et en Espagne, avec d'autres à venir.",
    stats: [
      { value: "19", label: "Unités actives" },
      { value: "4", label: "Marques du portefeuille" },
      { value: "2", label: "Pays : Mexique et Espagne" },
      { value: "+1", label: "Ville prochainement" }
    ],
    phases: [
      { range: "Étape 1", title: "Identification", text: "Nous recherchons des marques qui fonctionnent depuis des années sur leurs marchés d'origine. Pas des concepts à potentiel. Des histoires avec des résultats." },
      { range: "Étape 2", title: "Évaluation", text: "Nous analysons la cohérence du modèle et la compatibilité avec le marché cible avant d'engager la moindre ressource." },
      { range: "Étape 3", title: "Développement", text: "Nous développons chaque marque avec la rigueur opérationnelle qui l'a fait réussir à l'origine. Sans raccourcis." },
      { range: "Étape 4", title: "Ouverture", text: "La première unité ouvre en suivant le standard exact d'origine." },
      { range: "Étape 5", title: "Expansion", text: "Nous développons lorsque les résultats locaux justifient l'étape suivante. Pas avant." }
    ],
    founder: {
      captionTitle: "Découvrez INDEF",
      captionText: "Découvrez comment nous identifions, développons et exploitons des marques avant de les amener sur de nouveaux marchés.",
      captionLink: "Voir la vidéo complète"
    }
  },
  benefitsData: {
    eyebrow: "Ce qui distingue INDEF",
    title: "Structure plutôt que promesse.",
    subtitle: "Chaque élément du modèle existe pour une raison opérationnelle, non comme argument de vente.",
    items: [
      { icon: "H", title: "L'histoire avant l'hypothèse", text: "Aucune marque n'entre au portefeuille sans années d'exploitation sur son marché d'origine. Santa Gloria comptait des dizaines d'emplacements en Espagne avant d'ouvrir à Mérida." },
      { icon: "=", title: "Le même standard sur chaque marché", text: "Ce qui fait fonctionner une marque en Espagne doit fonctionner de la même manière à Mérida. Si le modèle ne supporte pas ce transfert, il n'entre pas au portefeuille." },
      { icon: "◎", title: "Emplacements réels et ouverts", text: "Les 19 unités ont une adresse publique, sont ouvertes au public et disposent d'avis de clients réels. Visiter l'une d'elles à Mérida fait partie du processus que nous recommandons." },
      { icon: "⊕", title: "Le contrat avant le capital", text: "Rien ne se produit sans acte notarié préalable. La participation ne commence pas avant que le document soit examiné et compris. Avec votre propre avocat, si vous le préférez." },
      { icon: "≡", title: "Des rapports. Pas des projections.", text: "Les partenaires reçoivent des indicateurs d'exploitation réels chaque trimestre. Ce qui s'est passé, non ce que nous espérons voir se produire." },
      { icon: "→", title: "Expansion fondée sur la preuve, non sur la foi", text: "La prochaine expansion n'est pas une promesse. C'est la continuité d'un portefeuille qui exploite déjà 19 unités au Mexique et en Espagne." }
    ]
  },
  calculatorData: {
    eyebrow: "Projection de participation",
    title: "Comprenez d'abord les chiffres.",
    subtitle: "Scénarios illustratifs. Ils ne représentent ni garantie ni engagement de rendement.",
    minAmount: 10000,
    maxAmount: 5000000,
    step: 1000,
    initialAmount: 50000,
    unitPrice: 100,
    totalNetworkUnits: 2000000,
    labels: {
      amount: "Montant de l'investissement",
      units: "Unités acquises",
      ownership: "Part dans le réseau",
      projected: "Valeur projetée"
    },
    scenarios: [
      { name: "Conservateur", annualRoi: 8 },
      { name: "Cas de base", annualRoi: 15 },
      { name: "Favorable", annualRoi: 25 }
    ]
  },
  decisionData: {
    eyebrow: "Comment nous travaillons avec nos partenaires",
    title: "Deux parties. Des engagements clairs.",
    subtitle: "Une relation à long terme exige que les deux parties sachent ce qu'elles peuvent attendre l'une de l'autre dès le premier jour.",
    columns: [
      {
        title: "Ce que nous demandons à chaque partenaire",
        items: [
          "Examiner la documentation complète avant d'engager du capital.",
          "Visiter au moins une unité en exploitation.",
          "Comprendre clairement ce qu'il acquiert et ce qu'il n'acquiert pas.",
          "Participer avec un montant compatible avec son profil réel de risque et son horizon de temps."
        ]
      },
      {
        title: "Ce à quoi INDEF s'est engagé",
        items: [
          "Documentation disponible sans condition ni pression préalable.",
          "Rapports trimestriels avec des indicateurs d'exploitation réels.",
          "Une seule manière de faire les choses. Sans exception selon le montant ou la relation.",
          "Transparence lorsque les résultats sont en deçà des attentes."
        ]
      }
    ]
  },
  dataRoomData: {
    eyebrow: "Documentation disponible",
    title: "Tout est prêt avant même votre demande.",
    subtitle: "Chaque unité, chaque contrat et chaque chiffre existe avant que vous ne le demandiez. Nous ne communiquons pas d'informations sous pression. Nous les rendons disponibles dès le départ.",
    indicatorsTitle: "Ce qui existe aujourd'hui",
    indicators: [
      { value: "19", label: "Unités en exploitation" },
      { value: "2", label: "Pays : Mexique et Espagne" },
      { value: "4", label: "Marques du portefeuille" }
    ],
    cards: [
      { title: "Présence réelle et publique", text: "Les 19 unités sont ouvertes au public. Chacune dispose d'une adresse physique et peut être visitée avant toute décision." },
      { title: "Méthodologie transparente", text: "Le processus de sélection des marques, le standard d'exploitation et la structure de participation sont documentés et disponibles pour un examen complet." },
      { title: "Des contrats avant toute étape", text: "Rien ne se produit sans document formel préalable. La structure juridique est entièrement consultable, avec tout le temps nécessaire, avant le premier peso engagé." }
    ],
    carouselImages: _carouselImages,
    cta: { label: "Planifiez votre première rencontre", url: "mailto:contacto@indef.mx?subject=Solicitud%20de%20primera%20sesi%C3%B3n%20%E2%80%94%20INDEF" }
  },
  scarcityData: {
    text: "Expansion active",
    highlight: "Expansion active. Les conditions de participation pour cette étape sont disponibles pour ceux qui commencent le processus maintenant."
  },
  modelData: {
    eyebrow: "Le portefeuille INDEF",
    title: "Des marques avec une histoire. Pas avec un potentiel.",
    subtitle: "Chaque marque a démontré sa valeur avant de rejoindre le portefeuille. Des années d'exploitation, une demande réelle, une présence établie.",
    pillars: [
      {
        icon: "SG", title: "Santa Gloria", fullName: "Santa Gloria Coffee & Bakery",
        status: "active", statusLabel: "En exploitation", category: "Boulangerie artisanale · Café",
        markets: ["🇲🇽 Mérida, Yucatán — 3 unités", "🇪🇸 Espagne — 15 unités"], totalUnits: 18,
        text: "Marque espagnole de boulangerie artisanale comptant des dizaines d'emplacements en Espagne avant son arrivée au Mexique. Sélectionnée pour la solidité de son modèle et la constance de sa demande. Elle opère à Mérida et en Espagne avec le même standard.",
        image: "assets/images/SantaGloria.jpg", video: "assets/videos/SG_09.mp4"
      },
      {
        icon: "AMC", title: "Allô Mon Coco", fullName: "Allô Mon Coco",
        status: "active", statusLabel: "En exploitation", category: "Brunch · Café",
        markets: ["🇲🇽 Mérida, Yucatán — 1 unité (DAM)"], totalUnits: 1,
        text: "Une proposition de brunch à l'identité claire, à l'ambiance distinctive et au modèle opérationnel solide. Elle opère dans le District d'Art de Mérida. Sélectionnée pour la force de sa structure, non pour sa nouveauté.",
        image: "assets/images/Allo Mon Coco.jpg"
      },
      {
        icon: "WP", title: "Wetzel's Pretzels", fullName: "Wetzel's Pretzels",
        status: "upcoming", statusLabel: "Prochainement", category: "Snacks · Retail",
        markets: ["🇲🇽 Mexique — En développement"], totalUnits: 0,
        text: "Marque américaine comptant plus de 350 emplacements internationaux. Un parcours consolidé dans des environnements à fort trafic. En développement pour le Mexique.",
        image: "assets/images/wetzels-pretzels-2.jpg"
      },
      {
        icon: "CBT", title: "Coco Bubble Tea", fullName: "Coco Bubble Tea",
        status: "upcoming", statusLabel: "Prochainement", category: "Boissons · Bubble Tea",
        markets: ["🇲🇽 Mexique — En évaluation"], totalUnits: 0,
        text: "Prochaine intégration au portefeuille. Le critère de sélection est le même que pour toutes les marques : un parcours opérationnel solide avant tout engagement.",
        image: "assets/images/Coco-Bubble-Tea-Kiosk-photo.jpg"
      }
    ],
    roiTitle: "Projection de rendement annuel",
    roi: [
      { label: "Conservateur", value: "8%" },
      { label: "Cas de base", value: "15%" },
      { label: "Favorable", value: "25%" }
    ]
  },
  howToData: {
    eyebrow: "Comment participer",
    title: "Sans précipitation. Sans surprises.",
    subtitle: "Chaque étape est conçue pour que vous sachiez où vous en êtes et ce qui suit. Nous ne passons pas à l'étape suivante avant que la précédente soit comprise.",
    steps: [
      { title: "Explorez le portefeuille", text: "Parcourez les marques, examinez la documentation disponible et, si vous êtes à Mérida, visitez n'importe quelle unité en exploitation. Sans pression. Sans limite de temps." },
      { title: "Une première conversation", text: "Écrivez-nous pour planifier 30 à 45 minutes avec un conseiller INDEF. Ce n'est pas une présentation commerciale. C'est une séance pour répondre à vos questions sur le modèle, les marques, la structure juridique et les conditions actuelles. Sans proposition. Sans pression de conclusion." },
      { title: "Vous définissez le montant", text: "Si vous décidez d'avancer, vous définissez le montant compatible avec votre profil et votre horizon. Il n'y a pas de minimum suggéré par INDEF, seulement celui qui vous convient." },
      { title: "Contrat notarié", text: "Signature de l'acte notarié avec la structure juridique documentée. Aucune étape suivante n'existe avant que ce document soit examiné et compris. Avec votre propre avocat, si vous le préférez." },
      { title: "Rapports trimestriels", text: "Dès le premier trimestre, vous recevez des indicateurs réels : performance par unité, activité du portefeuille et résultats de la période. Ce qui s'est passé, non ce que nous espérons. Accès complet depuis votre portail partenaire." }
    ],
    image: "assets/images/img_2895.webp",
    card: {
      image: "assets/images/sg_mexico.jpg",
      title: "Découvrez une opération réelle",
      text: "Parcourez l'une de nos opérations au Mexique et découvrez le standard avec lequel nous développons chaque marque avant de l'intégrer au portefeuille INDEF.",
      link: "En savoir plus",
      linkUrl: "#branches"
    }
  },
  branchesData: {
    eyebrow: "19 unités actives",
    title: "Aller les voir fait partie du processus.",
    subtitle: "Nous ne demandons pas une confiance aveugle. Chaque unité est ouverte au public avec une adresse réelle et des clients quotidiens. Visiter fait partie du processus que nous attendons de chaque partenaire.",
    totalActive: 19,
    videoGallery: [
      { src: "assets/videos/TESTIMONIAL SG.mp4", label: "Santa Gloria — Témoignage" },
      { src: "assets/videos/Allo apertura DAM.mp4", label: "Allô Mon Coco — Ouverture DAM" }
    ],
    countries: _buildCountries({ mexico: "Mexique", spain: "Espagne" }),
    upcoming: {
      eyebrow: "Prochaine expansion",
      title: "Expansion en cours",
      description: "Le portefeuille exploite 19 unités au Mexique et en Espagne. La prochaine ville est en développement. Les conditions de cette étape sont disponibles pour ceux qui commencent le processus maintenant."
    }
  },
  participationData: {
    eyebrow: "Ce qu'implique la participation",
    title: "Sans ambiguïté.",
    subtitle: "Tout est documenté avant le premier peso engagé.",
    introTitle: "La différence qui définit le modèle",
    intro: "Nous n'exploitons pas une seule marque. Nous exploitons un portefeuille. Votre participation n'est pas l'achat d'une franchise individuelle, mais une position au sein d'un système qui maintient 19 unités en exploitation au Mexique et en Espagne, avec une structure juridique formalisée. Cette différence définit comment la valeur est générée et comment elle est distribuée.",
    cards: [
      { title: "Ce que vous acquérez", text: "Des unités de participation privée au sein du portefeuille INDEF, conformément à la structure juridique établie dans le contrat notarié." },
      { title: "Ce que vous n'acquérez pas", text: "Vous n'acquérez ni une franchise individuelle ni une seule unité physique. Votre participation porte sur la performance du portefeuille complet, non sur un point de vente spécifique." },
      { title: "Horizon de temps et liquidité", text: "Il s'agit d'une participation à long terme. Le capital n'est pas liquide à court terme. L'horizon de participation et les conditions de sortie sont définis au contrat et examinés lors de la première séance." },
      { title: "Le risque, énoncé avec précision", text: "Tout modèle d'entreprise peut générer des résultats inférieurs aux estimations, ou des pertes. Il n'y a aucune garantie. Il y a une structure, de la transparence et 19 unités avec un parcours réel." }
    ]
  },
  faqData: {
    eyebrow: "Questions fréquentes",
    title: "Des réponses directes.",
    subtitle: "Si la question que vous avez n'est pas ici, c'est la première que vous devriez poser lors de la séance avec l'équipe.",
    items: [
      { question: "Qu'est-ce qu'INDEF exactement ?", answer: "Un groupe d'entreprises qui identifie, développe et exploite des franchises internationales avec un parcours prouvé. Aujourd'hui, nous exploitons 19 unités à Mérida, Yucatán et en Espagne : deux marques actives, deux autres prochainement. Nous ne sommes pas des intermédiaires. Nous sommes l'opérateur." },
      { question: "Quelles marques sont actuellement en exploitation ?", answer: "Santa Gloria Coffee & Bakery, avec trois unités à Mérida et quinze en Espagne, et Allô Mon Coco, avec une unité dans le District d'Art de Mérida. Wetzel's Pretzels et Coco Bubble Tea sont en développement." },
      { question: "Comment puis-je vérifier que les unités existent ?", answer: "En visitant l'une d'entre elles. À Mérida, vous pouvez vous rendre à Santa Gloria La Isla, Santa Gloria Paseo Montejo, Santa Gloria Altabrisa ou Allô Mon Coco DAM. Ce sont des établissements ouverts au public. Visiter fait partie du processus que nous recommandons à chaque partenaire." },
      { question: "Pourquoi participer via INDEF plutôt que d'acquérir une franchise directement ?", answer: "Acquérir une franchise directement implique d'assumer l'opération complète : local, personnel, inventaire, coûts fixes et gestion quotidienne. La participation via INDEF permet d'accéder à la performance d'un portefeuille déjà exploité, sans gérer l'opération. Ce sont deux modèles aux profils d'implication, de capital et de risque distincts." },
      { question: "Comment se déroule la première séance avec l'équipe ?", answer: "30 à 45 minutes avec un conseiller INDEF. Ce n'est pas une présentation commerciale. C'est une conversation pour répondre à vos questions sur le modèle, les marques en exploitation, la structure juridique et les conditions actuelles. Sans proposition immédiate. Sans pression de conclusion. Si au final cela n'a pas de sens pour vous, nous respectons cette décision." },
      { question: "Pendant combien de temps mon capital reste-t-il engagé ?", answer: "Il s'agit d'une participation à long terme. Le capital n'est pas liquide à court terme. L'horizon de participation et les conditions de sortie sont définis au contrat. Les conditions exactes sont examinées lors de la première séance et documentées avant la signature de tout document." },
      { question: "Y a-t-il des rendements garantis ?", answer: "Non. Aucune participation à une entreprise réelle ne garantit de rendements. Les projections présentées sont des scénarios illustratifs, non des engagements. Examinez le contrat complet et consultez un conseiller financier certifié et indépendant avant de participer." },
      { question: "Quel soutien juridique a ma participation ?", answer: "Des contrats notariés et une structure juridique documentée. Tout est disponible pour un examen complet, avec tout le temps qu'il vous faut et avec votre propre avocat si vous le préférez, avant la signature de tout document. Aucune étape ne se produit sans que le document soit signé et compris." }
    ],
    moreInfo: [
      { title: "Le portefeuille", text: "Les 4 marques d'INDEF et leur statut actuel.", url: "#model", label: "Examiner" },
      { title: "Établissements", text: "19 unités en exploitation à Mérida et en Espagne.", url: "#branches", label: "Voir" },
      { title: "Structure juridique", text: "Contrats, notarisation et modèle juridique.", url: "#footer-legal", label: "Lire" },
      { title: "Conditions", text: "Conditions, risques et responsabilités.", url: "#footer-legal", label: "Lire" }
    ]
  },
  blogData: {
    eyebrow: "Perspective INDEF",
    title: "Ce que nous pensons et pourquoi.",
    subtitle: "Nous ne publions pas de contenu pour générer des clics. Nous publions lorsque nous avons quelque chose de concret qui vaut la peine d'être dit.",
    posts: [
      { num: "01", title: "Article 01", author: "Équipe INDEF", date: "Prochainement" },
      { num: "02", title: "Article 02", author: "Équipe INDEF", date: "Prochainement" },
      { num: "03", title: "Article 03", author: "Équipe INDEF", date: "Prochainement" }
    ]
  },
  ctaData: {
    title: "Prêt pour une conversation ?",
    subtitle: "Pas une présentation. Pas une proposition. Une séance de 30 à 45 minutes pour répondre aux questions qui comptent avant de prendre toute décision.",
    note: "Aucun engagement lors de la première séance. Aucun rendement garanti. La participation comporte un risque d'entreprise réel.",
    ctas: [
      { label: "Commencer maintenant", url: "https://indef.mx/empieza-a-invertir/", style: "primary" },
      { label: "Voir le portefeuille", url: "#model", style: "secondary" },
      { label: "Voir les établissements", url: "#branches", style: "secondary" }
    ]
  },
  founderMessageData: {
    mission: {
      eyebrow: "Notre mission",
      text: "Développer et exploiter des marques de restauration aux modèles d'affaires éprouvés, en créant des opportunités de croissance durables pour les partenaires, franchiseurs et investisseurs grâce à une expansion disciplinée et fondée sur les résultats."
    },
    vision: {
      eyebrow: "Notre vision",
      text: "Devenir le groupe de référence pour l'expansion internationale des marques de restauration, en connectant les marchés par une opération réelle, des standards constants et une croissance à long terme."
    },
    what: {
      title: "Que faisons-nous ?",
      text: "Nous identifions des marques à l'opération éprouvée sur leurs marchés d'origine. Nous validons leur capacité d'expansion, développons l'opération locale selon nos standards, et ce n'est qu'ensuite que nous ouvrons des opportunités de participation à nos partenaires.",
      bullets: [
        "Nous opérons avant de nous étendre.",
        "Nous documentons avant de structurer.",
        "Nous validons avant de croître."
      ]
    },
    image: "assets/images/joserevista.jpg"
  },
  footerData: {
    description: "Nous identifions, développons et exploitons des franchises internationales éprouvées. Mexique · Espagne · Expansion active.",
    columns: [
      {
        title: "Navigation",
        links: [
          { label: "Ce que nous faisons", url: "#about" },
          { label: "Portefeuille", url: "#model" },
          { label: "Le processus", url: "#how-to" },
          { label: "Établissements", url: "#branches" },
          { label: "Calculatrice", url: "#calculator" }
        ]
      },
      {
        title: "Légal",
        links: [
          { label: "Partenaires actifs", url: "#investors" },
          { label: "Conditions générales", url: "#footer-legal" },
          { label: "Structure juridique", url: "#footer-legal" }
        ]
      }
    ],
    contact: { title: "Contact", email: "", whatsapp: "", website: "indef.mx" },
    social: {
      title: "Suivez-nous",
      links: [
        { label: "Instagram", url: "https://www.instagram.com/indefmx/?hl=en" },
        { label: "LinkedIn", url: "https://www.linkedin.com/company/indefmx/?originalSubdomain=mx" },
        { label: "Facebook", url: "https://www.facebook.com/p/Grupo-INDEF-61573011222003/" }
      ]
    },
    rights: "2026 INDEF. Tous droits réservés."
  },
  legalData: {
    id: "footer-legal",
    disclaimerLabel: "Avis juridique :",
    disclaimer: "Toute participation à une entreprise comporte un risque. Les performances passées ne garantissent pas les résultats futurs. Les projections présentées sont des scénarios illustratifs et ne constituent pas une garantie de rendement. La participation au portefeuille INDEF est de nature privée, non liquide à court terme, et soumise aux conditions du contrat notarié en vigueur. Consultez un conseiller financier certifié et indépendant avant d'engager du capital.",
    privacy: "Les informations contenues sur ce site sont de nature informative et institutionnelle. INDEF n'agit pas en tant que conseiller financier certifié. Aucune section de ce site ne constitue une offre publique de valeurs mobilières. Toute décision d'investissement doit être prise avec un conseil professionnel indépendant."
  }
};

window.LANDING_DATA = { es: _es, en: _en, fr: _fr };
