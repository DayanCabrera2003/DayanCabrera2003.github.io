import { SiteContent } from './content.types';

export const CONTENT_ES: SiteContent = {
  nav: { work: 'Trabajo', experience: 'Experiencia', contact: 'Contacto', switchLang: 'View in English' },

  intro: {
    kicker: 'Ingeniero de IA y full-stack · La Habana, Cuba · Remoto',
    headline: 'Construyo sistemas de IA a los que las empresas confían datos sensibles.',
    lede:
      'Hoy eso es una plataforma que hace auditoría interna para bancos y empresas en Chile. ' +
      'Antes, una plataforma de reclutamiento en España que maneja datos de candidatos bajo el RGPD. ' +
      'Trabajo en todo el stack, y lo que más me importa es lo que nadie enseña en una demo: los permisos, ' +
      'los tests y lo que pasa cuando el modelo se equivoca.',
    availability: 'Abierto a puestos remotos con equipos en Europa y Latinoamérica.',
    photoAlt: 'Retrato de Dayan Cabrera Corvo',
    cvLabel: 'Descargar CV (PDF)',
  },

  work: {
    title: 'Trabajo seleccionado',
    cases: [
      {
        id: 'immuna',
        meta: 'ASAI · Chile · 2026 – actualidad',
        title: 'IMMUNA, una plataforma de IA para auditoría interna',
        fact: '1.050 ítems, 0 fallos',
        factLabel: 'Prueba de carga con 50 auditorías a la vez, antes de salir a producción con clientes.',
        paragraphs: [
          'La auditoría interna es un trabajo lento, lleno de documentos, y el auditor responde por cada ' +
            'conclusión que firma. IMMUNA cubre el ciclo completo, del plan anual al informe final y su ' +
            'seguimiento, con agentes de IA que hacen la lectura y auditores que tienen la última palabra.',
          'Soy uno de sus desarrolladores principales. Construí la capa de IA: OCR e indexación de los documentos ' +
            'del cliente, búsqueda sobre pgvector, agentes que pueden consultar la base de datos pero nunca ' +
            'escribir en ella, y un verificador que contrasta cada respuesta con las fuentes que cita. También ' +
            'construí Muna, el copiloto de los auditores, sobre un servidor MCP con 34 herramientas.',
          'Algunos clientes no pueden enviar sus datos a una nube pública, así que comparé modelos abiertos con ' +
            'Gemini e hice el sistema independiente del proveedor. Hoy funciona en Google Cloud, con un entorno ' +
            'dedicado para un banco.',
        ],
        stack: 'FastAPI · PostgreSQL con seguridad a nivel de fila · pgvector · Google ADK · Gemini en Vertex AI · MCP · React 19 · Cloud Run',
      },
      {
        id: 'sobit',
        meta: 'Evercreate, para Sobit Technologies · España · 2026',
        title: 'Sobit Talent Engine, una plataforma de reclutamiento',
        fact: '10 funciones con LLM en producción',
        factLabel: 'Cada una con un proveedor de respaldo y su coste medido por llamada.',
        paragraphs: [
          'Una consultora de selección necesitaba un solo sistema para su web pública, sus reclutadores, sus ' +
            'clientes y sus consultores. Los clientes ven a los candidatos como CV ciegos, así que los datos ' +
            'personales tienen que eliminarse sin fallos, y todo está sujeto al RGPD.',
          'Lideré el desarrollo desde mayo de 2026. El pipeline de IA lee los CV, encuentra candidatos por ' +
            'significado y no por palabras clave, y elimina los datos personales, alternando entre Gemini y ' +
            'Claude cuando uno de los dos falla.',
          'Antes del traspaso revisé cada política de acceso y cerré los huecos que encontré, incluidos algunos ' +
            'que exponían archivos de candidatos. El traspaso fue contractual: doce documentos, del diccionario ' +
            'de datos a la evaluación de impacto en protección de datos, y una migración automatizada de todos ' +
            'los datos.',
        ],
        stack: 'Supabase · PostgreSQL con seguridad a nivel de fila · Vercel · TypeScript · Python · Vercel AI SDK · Gemini · Claude',
      },
      {
        id: 'okaction',
        meta: 'OK Action · 2025 – 2026',
        title: 'Un entrenador para hablar con claridad en español',
        fact: 'Respuesta cada 5 segundos',
        factLabel: 'Mientras la persona todavía está hablando, no al final.',
        paragraphs: [
          'Una plataforma de entrenamiento de comunicación oral con ocho módulos: pronunciación, prosodia, ' +
            'muletillas, volumen, fonación y más. La persona habla, y el sistema escucha y le responde sobre la marcha.',
          'Diseñé la arquitectura: audio enviado desde el navegador a la Gemini Live API por WebSocket, volumen y ' +
            'calidad de la voz medidos en el propio navegador con la Web Audio API, y un backend asíncrono en ' +
            'FastAPI sobre Google Cloud.',
        ],
        stack: 'Gemini Live API · WebSocket · Web Audio API · FastAPI · PostgreSQL · React 19',
      },
    ],
    alsoTitle: 'Además',
    also: [
      {
        title: 'Generador de apps con IA',
        year: '2026',
        text: 'Convierte un prompt o una URL en una app React editable, con vista previa en el navegador y cambios por conversación.',
      },
      {
        title: 'PerspectiVa',
        year: '2025',
        text: 'Backend de un comparador de noticias español: más de 10.000 artículos de 8 medios, agrupados por noticia, mostrando qué omite cada medio.',
      },
      {
        title: 'SICI',
        year: '2026',
        text: 'Digitaliza la historia de atención prenatal de los consultorios del médico de familia en Cuba. Único desarrollador.',
      },
      {
        title: 'Plugin para Claude Code',
        year: '2026',
        text: 'Seis skills que enseñan a los desarrolladores nuevos los estándares de un equipo, de la revisión de arquitectura a escribir los tests primero.',
      },
      {
        title: 'Compilador HULK',
        year: '2024',
        text: 'Un compilador para un lenguaje orientado a objetos, escrito desde cero en Rust.',
      },
    ],
  },

  principles: {
    title: 'Cómo trabajo',
    items: [
      'Los modelos se equivocan, así que el sistema tiene que darse cuenta. Las comprobaciones van dentro, no encima.',
      'Leo las políticas de acceso antes que la lista de funciones. Ahí viven los errores graves.',
      'Lo dejo todo por escrito. Cada sistema que he entregado iba con lo que otro necesita para operarlo.',
    ],
  },

  experience: {
    title: 'Experiencia',
    rows: [
      { period: '2026 – actualidad', place: 'ASAI (Chile)', role: 'Ingeniero de Software, Full-Stack e IA' },
      { period: '2026', place: 'Evercreate', role: 'Desarrollador Líder' },
      { period: '2025 – 2026', place: 'OK Action', role: 'Desarrollador Full-Stack' },
      { period: '2025 – 2026', place: 'PerspectiVa', role: 'Desarrollador Backend' },
      { period: '2022 – 2026', place: 'Universidad de La Habana', role: 'Licenciatura en Ciencia de la Computación' },
    ],
    languagesTitle: 'Idiomas',
    languages: 'Español, nativo. Inglés, B2 de nivel profesional.',
  },

  contact: {
    title: 'Contacto',
    text: 'El correo es la mejor forma de contactarme.',
    location: 'La Habana, Cuba · UTC−5',
    links: [
      { label: 'CV en español (PDF)', href: 'assets/Dayan_Cabrera_Corvo_CV_ES.pdf' },
      { label: 'CV in English (PDF)', href: 'assets/Dayan_Cabrera_Corvo_CV.pdf' },
      { label: 'GitHub', href: 'https://github.com/DayanCabrera2003' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dayan-cabrera-corvo' },
      { label: 'Telegram', href: 'https://t.me/un_buscador' },
    ],
  },
};
