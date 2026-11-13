import { SiteContent } from './content.types';

export const CONTENT_EN: SiteContent = {
  nav: { work: 'Work', experience: 'Experience', contact: 'Contact', switchLang: 'Ver en español' },

  intro: {
    kicker: 'AI & full-stack engineer · Havana, Cuba · Remote',
    headline: 'I build AI systems that companies trust with sensitive data.',
    lede:
      'Right now that means a platform that runs internal audits for banks and enterprises in Chile. ' +
      'Before that, a recruitment platform in Spain that handles candidate data under GDPR. ' +
      'I work across the whole stack, and I care most about the parts nobody demos: permissions, ' +
      'tests, and what happens when the model is wrong.',
    availability: 'Open to remote roles with teams in Europe and Latin America.',
    photoAlt: 'Portrait of Dayan Cabrera Corvo',
    cvLabel: 'Download CV (PDF)',
  },

  work: {
    title: 'Selected work',
    cases: [
      {
        id: 'immuna',
        meta: 'ASAI · Chile · 2026 – present',
        title: 'IMMUNA, an AI platform for internal audit',
        fact: '1,050 items, 0 failures',
        factLabel: 'Load test with 50 audits running at once, before going live with clients.',
        paragraphs: [
          'Internal audit is slow, document-heavy work, and auditors answer for every conclusion they sign. ' +
            'IMMUNA runs the whole cycle, from the annual plan to the final report and its follow-up, with AI ' +
            'agents doing the reading and auditors keeping the last word.',
          'I am one of its core developers. I built the AI layer: OCR and indexing of client documents, ' +
            'retrieval over pgvector, agents that can query the database but never write to it, and a verifier ' +
            'that checks every answer against the sources it cites. I also built Muna, the auditors’ copilot, ' +
            'on an MCP server with 34 tools.',
          'Some clients cannot send their data to a public cloud, so I benchmarked open models against Gemini and ' +
            'made the stack independent of the provider. It runs on Google Cloud today, including a dedicated ' +
            'environment for a bank.',
        ],
        stack: 'FastAPI · PostgreSQL with row-level security · pgvector · Google ADK · Gemini on Vertex AI · MCP · React 19 · Cloud Run',
      },
      {
        id: 'sobit',
        meta: 'Evercreate, for Sobit Technologies · Spain · 2026',
        title: 'Sobit Talent Engine, a recruitment platform',
        fact: '10 LLM features in production',
        factLabel: 'Each one with a fallback provider and its cost tracked per call.',
        paragraphs: [
          'A recruiting firm needed one system for its public site, its recruiters, its clients and its consultants. ' +
            'Clients see candidates as blind CVs, so personal data has to be removed reliably, and all of it falls ' +
            'under GDPR.',
          'I led development from May 2026. The AI pipeline reads CVs, matches candidates by meaning rather than ' +
            'keywords and removes personal data, switching between Gemini and Claude when one of them fails.',
          'Before handing it over I reviewed every access policy and closed the gaps I found, including some that ' +
            'exposed candidate files. The handover was contractual: twelve documents, from the data dictionary to ' +
            'the data-protection impact assessment, plus a scripted migration of all the data.',
        ],
        stack: 'Supabase · PostgreSQL with row-level security · Vercel · TypeScript · Python · Vercel AI SDK · Gemini · Claude',
      },
      {
        id: 'okaction',
        meta: 'OK Action · 2025 – 2026',
        title: 'A coach for speaking clearly in Spanish',
        fact: 'Feedback every 5 seconds',
        factLabel: 'While the person is still talking, not after.',
        paragraphs: [
          'A training platform for spoken communication with eight modules: pronunciation, prosody, filler words, ' +
            'loudness, phonation and more. The user speaks, and the system listens and answers as they go.',
          'I designed the architecture: audio streamed from the browser to the Gemini Live API over WebSocket, ' +
            'volume and voice quality measured locally with the Web Audio API, and an asynchronous FastAPI backend ' +
            'on Google Cloud.',
        ],
        stack: 'Gemini Live API · WebSocket · Web Audio API · FastAPI · PostgreSQL · React 19',
      },
    ],
    alsoTitle: 'Also',
    also: [
      {
        title: 'AI app generator',
        year: '2026',
        text: 'Turns a prompt or a URL into an editable React app, with a live preview in the browser and changes made by conversation.',
      },
      {
        title: 'PerspectiVa',
        year: '2025',
        text: 'Backend for a Spanish news comparator: 10,000+ articles from 8 outlets, grouped by story, showing what each outlet leaves out.',
      },
      {
        title: 'SICI',
        year: '2026',
        text: 'Digitizes the prenatal care record used in Cuban family-medicine clinics. Sole developer.',
      },
      {
        title: 'Claude Code plugin',
        year: '2026',
        text: 'Six skills that teach new developers a team’s engineering standards, from architecture review to writing tests first.',
      },
      {
        title: 'HULK compiler',
        year: '2024',
        text: 'A compiler for an object-oriented language, written from scratch in Rust.',
      },
    ],
  },

  principles: {
    title: 'How I work',
    items: [
      'Models get things wrong, so the system has to notice. I build the checks in, not on top.',
      'I read the access policies before the feature list. Most serious bugs live there.',
      'I write things down. Every system I have handed over came with what someone else needs to run it.',
    ],
  },

  experience: {
    title: 'Experience',
    rows: [
      { period: '2026 – present', place: 'ASAI (Chile)', role: 'Software Engineer, Full-Stack & AI' },
      { period: '2026', place: 'Evercreate', role: 'Lead Developer' },
      { period: '2025 – 2026', place: 'OK Action', role: 'Full-Stack Developer' },
      { period: '2025 – 2026', place: 'PerspectiVa', role: 'Backend Developer' },
      { period: '2022 – 2026', place: 'University of Havana', role: 'B.Sc. in Computer Science' },
    ],
    languagesTitle: 'Languages',
    languages: 'Spanish, native. English, B2 working proficiency.',
  },

  contact: {
    title: 'Contact',
    text: 'Email is the best way to reach me.',
    location: 'Havana, Cuba · UTC−5',
    links: [
      { label: 'CV in English (PDF)', href: 'assets/Dayan_Cabrera_Corvo_CV.pdf' },
      { label: 'CV en español (PDF)', href: 'assets/Dayan_Cabrera_Corvo_CV_ES.pdf' },
      { label: 'GitHub', href: 'https://github.com/DayanCabrera2003' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dayan-cabrera-corvo' },
      { label: 'Telegram', href: 'https://t.me/un_buscador' },
    ],
  },
};
