export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  categories: Array<'videojuegos' | 'audiovisual' | 'diseno'>;
  categoryLabels: string[];
  client: string;
  date: string;
  role: string[];
  tools: string[];
  status: 'Finalizado' | 'En Desarrollo' | 'Prototipo' | 'Académico';
  image: string;
  liveUrl?: string;
  liveLabel?: string;
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: string[];
  tools: { name: string; tag: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const personalData = {
  name: "Oscar Taboada",
  shortTitle: "Ing. en Diseño y Animación Digital",
  fullTitle: "Ingeniero en Diseño y Animación Digital",
  location: "Sucre, Bolivia",
  email: "taboadaoscar53@gmail.com",
  phone: "+591 75772244",
  whatsappUrl: "https://wa.me/59175772244?text=%C2%A1Hola%20Oscar!%20Vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.",
  instagramUrl: "https://www.instagram.com/oscar.taboada.2000/",
  linkedinUrl: "https://www.linkedin.com/in/oscar-taboada",
  avatarUrl: "/images/avatar.png",
  heroCoverUrl: "/images/hero_cover.png",
  availableForWork: true,
  statusText: "Disponible para proyectos & docencia",
  bioHeadline: "Creando mundos interactivos, contenido audiovisual dinámico e identidades visuales memorables.",
  bioLead: "Hola, soy Oscar. Ingeniero en Diseño y Animación Digital con experiencia en diseño gráfico, producción audiovisual y motion graphics, especializado en la creación de contenido visual para eventos tecnológicos y en el desarrollo de videojuegos.",
  bioDescription: "Trabajo como profesional independiente combinando estética y funcionalidad, desde piezas gráficas y edición de video hasta el desarrollo de videojuegos interactivos en Unity y C#. Me caracterizo por una atención cuidadosa al detalle, adaptabilidad a distintos flujos de trabajo y un enfoque centrado en transformar ideas en experiencias claras, coherentes e impactantes.",
  education: {
    institution: "Universidad San Francisco Xavier de Chuquisaca",
    degree: "Licenciatura en Diseño y Animación Digital",
    period: "2019 – 2023",
    location: "Sucre, Bolivia",
    details: "Formación especializada en narrativa visual, modelado 3D, animación digital, desarrollo de videojuegos y producción audiovisual."
  }
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Desarrollo de Videojuegos",
    icon: "gamepad",
    description: "Creación de experiencias lúdicas e interactivas con énfasis en mecánicas fluidas, interfaces claras y fines educativos.",
    skills: [
      "Programación en Unity & C#",
      "Sistemas de diálogo dinámicos",
      "Motores de preguntas y lógica interactiva",
      "Diseño de interfaz de usuario (UI/UX para juegos)",
      "Publicación y optimización para Google Play"
    ],
    tools: [
      { name: "Unity", tag: "Motor 2D/3D" },
      { name: "C#", tag: "Lenguaje" },
      { name: "GitHub Desktop", tag: "Control de versiones" }
    ]
  },
  {
    title: "Producción Audiovisual & Motion Graphics",
    icon: "video",
    description: "Narrativa en movimiento, cobertura de eventos de tecnología y postproducción de alto impacto para redes sociales.",
    skills: [
      "Motion graphics y animación gráfica",
      "Edición de video institucional y publicitario",
      "Cobertura audiovisual de eventos tecnológicos",
      "Corrección de color y montaje dinámico",
      "Adaptación a formatos verticales y horizontales"
    ],
    tools: [
      { name: "After Effects", tag: "Animación" },
      { name: "Premiere Pro", tag: "Edición" },
      { name: "DaVinci Resolve", tag: "Color & Montaje" },
      { name: "CapCut", tag: "Edición rápida" }
    ]
  },
  {
    title: "Diseño Gráfico & UI",
    icon: "palette",
    description: "Construcción de identidades visuales coherentes, material promocional y diseño de interfaces centradas en el usuario.",
    skills: [
      "Identidad visual y branding",
      "Diseño de piezas publicitarias para redes",
      "Prototipado de interfaces UI en Figma",
      "Modelado y render básico en 3D",
      "Diseño centrado en la coherencia visual"
    ],
    tools: [
      { name: "Figma", tag: "UI / UX" },
      { name: "Illustrator", tag: "Vectorial" },
      { name: "Photoshop", tag: "Raster & Edición" },
      { name: "Blender", tag: "3D" },
      { name: "Canva", tag: "Composición" }
    ]
  }
];

export const allToolsList = [
  { name: "Unity", category: "Videojuegos", level: "Avanzado" },
  { name: "C#", category: "Programación", level: "Avanzado" },
  { name: "Adobe After Effects", category: "Motion Graphics", level: "Avanzado" },
  { name: "Adobe Premiere Pro", category: "Audiovisual", level: "Avanzado" },
  { name: "Figma", category: "UI/UX", level: "Intermedio / Avanzado" },
  { name: "Adobe Illustrator", category: "Diseño", level: "Avanzado" },
  { name: "Adobe Photoshop", category: "Diseño", level: "Avanzado" },
  { name: "Blender", category: "3D", level: "Intermedio" },
  { name: "DaVinci Resolve", category: "Audiovisual", level: "Intermedio" },
  { name: "CapCut", category: "Video", level: "Avanzado" },
  { name: "GitHub Desktop", category: "Desarrollo", level: "Intermedio" }
];

export const projects: Project[] = [
  {
    id: "dino-defensor",
    title: "Dino Defensor",
    shortDesc: "Videojuego educativo en Unity creado para el concurso nacional 'DinoJuego', enfocado en la seguridad ciudadana.",
    fullDesc: "Videojuego educativo desarrollado en Unity y publicado en Google Play Store, creado en el marco del concurso nacional 'DinoJuego'. El proyecto aborda la temática de seguridad ciudadana mediante mecánicas lúdicas dirigidas a un público infantil. Fui responsable de la dirección general, la programación en C#, implementación de mecánicas principales, integración de assets y diseño de la experiencia de juego, logrando una armoniosa combinación entre aprendizaje y diversión interactiva.",
    categories: ["videojuegos"],
    categoryLabels: ["Videojuegos", "Educativo"],
    client: "Jalqa Studio / Proyecto personal",
    date: "Junio 2024",
    role: ["Director de proyecto", "Desarrollador / Programador Unity", "Diseñador de UI", "Editor de video"],
    tools: ["Unity", "C#", "Blender", "CapCut"],
    status: "Finalizado",
    image: "/images/project_dino_defensor.png",
    liveUrl: "https://play.google.com/store/apps/details?id=com.JalqaStudio.DINOPolicia&hl=es_BO",
    liveLabel: "Ver en Google Play",
    highlights: [
      "Publicado oficialmente en Google Play Store",
      "Proyecto galardonado en el concurso nacional DinoJuego",
      "Mecánicas de seguridad ciudadana con dinámicas atractivas para niños",
      "Integración de modelado 3D optimizado para dispositivos móviles"
    ]
  },
  {
    id: "ludica",
    title: "Lúdica",
    shortDesc: "Videojuego educativo de orientación vocacional para estudiantes de bachillerato en su paso a la universidad.",
    fullDesc: "Videojuego educativo desarrollado en Unity, enfocado en la orientación vocacional y preparación de estudiantes de nivel secundario/bachillerato para su transición a la educación superior. Mi aporte principal incluyó la programación de la lógica en C#, el diseño e implementación de un sistema modular de diálogos interactivos, un motor dinámico de preguntas de opción múltiple y el diseño de la interfaz de usuario.",
    categories: ["videojuegos"],
    categoryLabels: ["Videojuegos", "Educativo"],
    client: "Xmedia / ITEC",
    date: "Agosto 2023",
    role: ["Desarrollador / Programador Unity"],
    tools: ["Unity", "C#"],
    status: "En Desarrollo",
    image: "/images/project_ludica.jpeg",
    liveUrl: "https://play.google.com/store/apps/details?id=com.JalqaStudio.Ludica&pcampaignid=web_share",
    liveLabel: "Ficha en Google Play",
    highlights: [
      "Sistema de árboles de diálogo interactivos en tiempo real",
      "Motor evaluativo de preguntas con retroalimentación inmediata",
      "Interfaz adaptativa diseñada para una navegación intuitiva",
      "Colaboración interdisciplinaria con pedagogos e instituciones académicas"
    ]
  },
  {
    id: "aprende-y-juega",
    title: "Aprende & Juega",
    shortDesc: "Videojuego interactivo orientado a niños de nivel inicial para reforzar habilidades cognitivas mediante minijuegos.",
    fullDesc: "Videojuego educativo actualmente en fase activa de desarrollo, orientado a niños de nivel inicial y centros de estimulación temprana. El proyecto busca reforzar habilidades cognitivas, motricidad fina y comprensión lógica a través de una serie de minijuegos interactivos creados en Unity. Mi labor abarca el diseño conceptual de mecánicas educativas, la programación completa y la definición visual pedagógica.",
    categories: ["videojuegos", "diseno"],
    categoryLabels: ["Videojuegos", "Prototipo"],
    client: "Proyecto personal",
    date: "Diciembre 2024",
    role: ["Director de proyecto", "Desarrollador Unity", "Diseñador de UI", "Diseñador gráfico"],
    tools: ["Unity", "C#", "Illustrator"],
    status: "En Desarrollo",
    image: "/images/project_aprende_juega.png",
    highlights: [
      "Minijuegos estructurados según hitos del desarrollo cognitivo infantil",
      "Diseño visual de personajes e interfaz amigable sin barreras de texto",
      "Arquitectura modular para incorporar nuevos niveles de aprendizaje"
    ]
  },
  {
    id: "google-io-extended-sucre",
    title: "Google I/O Extended Sucre",
    shortDesc: "Producción audiovisual, motion graphics y piezas gráficas oficiales para el evento Google I/O de GDG Sucre.",
    fullDesc: "Producción y diseño integral de piezas gráficas y contenido audiovisual para las ediciones del Google I/O Extended organizadas por GDG Sucre. Mi participación comprendió el desarrollo de toda la identidad gráfica del evento, cortinillas en motion graphics, bumpers animados y edición de videos para canales digitales, asegurando total fidelidad a los lineamientos visuales oficiales de Google Developer Communities.",
    categories: ["audiovisual", "diseno"],
    categoryLabels: ["Audiovisual", "Motion Graphics", "Diseño Gráfico"],
    client: "GDG Sucre",
    date: "Julio 2022",
    role: ["Diseñador gráfico", "Diseñador de UI", "Editor de video", "Motion designer"],
    tools: ["Figma", "Illustrator", "After Effects", "Blender", "DaVinci Resolve", "CapCut"],
    status: "Finalizado",
    image: "/images/project_google_io.png",
    liveUrl: "https://www.instagram.com/gdg.sucre/",
    liveLabel: "Ver en Instagram @gdg.sucre",
    highlights: [
      "Cumplimiento riguroso del manual de marca de Google Developers",
      "Producción de motion graphics para pantallas principales de auditorio",
      "Contenido promocional en redes con alto engagement en la comunidad tecnológica",
      "Postproducción de resúmenes de ponencias y material de difusión"
    ]
  },
  {
    id: "devfest-sucre",
    title: "DevFest Sucre",
    shortDesc: "Coordinación audiovisual, cobertura de evento, motion graphics e identidad gráfica para el DevFest Sucre.",
    fullDesc: "Producción y realización audiovisual para múltiples ediciones consecutivas del DevFest Sucre. Como coordinador audiovisual, lideré la cobertura en vivo, el diseño de piezas gráficas oficiales, motion graphics para ponencias y la postproducción de resúmenes y reels para plataformas digitales. El objetivo se centró en proyectar una imagen profesional y vibrante que documente el crecimiento de la comunidad de desarrolladores en Chuquisaca.",
    categories: ["audiovisual", "diseno"],
    categoryLabels: ["Audiovisual", "Motion Graphics", "Diseño Gráfico"],
    client: "GDG Sucre",
    date: "Julio 2022",
    role: ["Coordinador audiovisual", "Editor de video", "Motion designer", "Diseñador gráfico", "Diseñador de UI"],
    tools: ["Figma", "Illustrator", "After Effects", "Blender", "CapCut"],
    status: "Finalizado",
    image: "/images/project_devfest.png",
    liveUrl: "https://www.tiktok.com/@gdgsucre",
    liveLabel: "Ver en TikTok @gdgsucre",
    highlights: [
      "Coordinación de equipo audiovisual y cobertura en tiempo real",
      "Identidad visual coherente a lo largo de todas las ediciones",
      "Edición ágil de reels y clips para amplificación en TikTok e Instagram",
      "Diseño de pantallas de bienvenida y cortinillas animadas de conferencias"
    ]
  },
  {
    id: "ciberkids-sucre",
    title: "CiberKids Sucre",
    shortDesc: "Diseño de identidad visual, material publicitario y producción audiovisual para un centro de desarrollo infantil.",
    fullDesc: "Diseño y producción completa de material gráfico y audiovisual para el centro de desarrollo infantil CiberKids en Sucre. El proyecto estuvo orientado a consolidar su posicionamiento institucional y presencia en canales digitales a través de piezas publicitarias, banners informativos y un video institucional que comunica calidez, seguridad y metodología educativa a las familias.",
    categories: ["audiovisual", "diseno"],
    categoryLabels: ["Diseño Gráfico", "Audiovisual"],
    client: "CiberKids",
    date: "Agosto 2023",
    role: ["Diseñador gráfico", "Editor de video", "Motion designer"],
    tools: ["Illustrator", "Photoshop", "CapCut"],
    status: "Finalizado",
    image: "/images/project_ciberkids.png",
    highlights: [
      "Conceptualización gráfica adaptada a padres de familia y primera infancia",
      "Video institucional con narrativa emocional y explicativa",
      "Plantillas gráficas reutilizables para publicaciones periódicas en redes"
    ]
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "¿Qué servicios ofreces?",
    answer: "Ofrezco soluciones creativas e interactivas organizadas en tres áreas de especialidad:\n\n• **Desarrollo de Videojuegos & Entornos Interactivos**: Programación de lógica y mecánicas en Unity C#, videojuegos educativos, sistemas de diálogo y cuestionarios dinámicos, diseño de interfaz (UI/UX) y preparación para publicación en tiendas como Google Play.\n\n• **Producción Audiovisual & Motion Graphics**: Animación de elementos gráficos (motion design), edición dinámica de video, cortinillas para conferencias, cobertura y postproducción de eventos presenciales y contenido de alto impacto para redes sociales.\n\n• **Diseño Gráfico & Branding**: Creación de identidad de marca, manuales gráficos, piezas publicitarias digitales e impresas, maquetación de interfaces en Figma y modelado 3D básico en Blender."
  },
  {
    question: "¿Cómo puedo iniciar un proyecto contigo?",
    answer: "El proceso es colaborativo, transparente y consta de 4 pasos fundamentales:\n\n1. **Contacto Inicial**: Escríbeme por WhatsApp (+591 75772244) o mediante el formulario con una breve descripción de tu idea, requerimiento o evento.\n2. **Diagnóstico & Alcance**: Agendamos una breve conversación para definir objetivos, referencias estéticas, entregables y fechas límite.\n3. **Propuesta & Cronograma**: Te presento una cotización detallada con etapas de trabajo estructuradas y fechas de revisión programadas.\n4. **Desarrollo & Entrega**: Trabajamos con avances iterativos donde podrás brindar feedback hasta alcanzar el resultado óptimo y recibir los archivos finales listos para su uso."
  }
];
