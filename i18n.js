/*
 * Portfolio i18n — PT (default, lives in index.html), EN and ES.
 * Each translatable element carries data-i18n="key" (innerHTML is swapped)
 * or data-i18n-aria="key" (aria-label is swapped). Portuguese is read from
 * the page itself, so the HTML stays the single source for PT.
 */
(function () {
  var T = {
    en: {
      'loader': 'loading your story',
      'nav.story': 'Journey',
      'nav.mindset': 'Mindset',
      'nav.impact': 'Impact',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',

      'hero.available': 'Open to opportunities',
      'hero.exsap': 'Former SAP iXp',
      'hero.title': 'Turning<br/>data into real<br/><span class="accent">impact</span>.',
      'hero.sub': 'From a completely different field to the heart of innovation: today I am an AI Engineer at Infosys (CoE Brazil), after nearly 2 years building data and AI solutions at SAP.',
      'hero.cta1': 'Read my story',
      'hero.cta2': 'Get in touch',
      'stat.validated': 'Companies validated',
      'stat.inactive': 'Inactive CNPJs identified',
      'stat.analyzed': 'Companies analyzed',
      'stat.countries': 'Countries — LATAM',

      'story.eyebrow': 'Journey',
      'story.title': 'A journey of<br/>transformation.',
      'story.intro': 'This is not a story about technology. It is about courage, curiosity and my ability to build a path where none existed yet.',
      'story.cap': 'SAP iXp Intern · Customer Data Intelligence · Jan 2025 – Sep 2026<br/>Infosys · AI Engineer, CoE Brazil · Oct 2026 – Present',
      'tl1.chapter': 'The beginning',
      'tl1.heading': 'Law firm — the first foundations',
      'tl1.text': 'Before technology, my first experience of the corporate world taught me organization, discipline and attention to detail. But one thing was clear to me: my future would be closer to innovation and to building solutions.',
      'tl2.chapter': 'Operational leadership',
      'tl2.heading': 'Pet Móvel — real management and human lessons',
      'tl2.text': 'Running a Pet Móvel franchise, I was responsible for everything: operations, team, scheduling and customer service. That is where my conviction took shape — technology only creates value when it solves people’s real problems.',
      'tl3.chapter': 'The big turn',
      'tl3.heading': 'IBMEC SP — the decision that changed everything',
      'tl3.text': 'I found a degree that was still rare in Brazil: Data Science and Artificial Intelligence. The perfect intersection of business, technology and innovation. I decided to change careers completely and enrolled at IBMEC São Paulo.',
      'tl4.chapter': 'Academic leadership',
      'tl4.heading': 'IBMEC Star — the first woman in the program',
      'tl4.text': 'I took on the Events Board, organizing meetings with executives from Coca-Cola, Johnson & Johnson and other market leaders. In 2024 I won the IBMEC Star award — becoming the first woman in the Data Science and AI program to receive this academic excellence award. In 2026.1 I received it for a second time.',
      'tl5.chapter': 'SAP · January 2025 – September 2026',
      'tl5.heading': 'SAP iXp — Customer Data Intelligence',
      'tl5.text': 'I joined SAP as a Sales Development Executive and was soon moved to Data Research. Over nearly 2 years, my role evolved from tactical support to the sales organization into building my own data and AI solutions, which came to underpin the team’s operations across Latin America — all while still a student, before finishing my degree.',
      'tl6.chapter': 'Infosys · October 2026 – Present',
      'tl6.heading': 'AI Engineer — CoE Brazil',
      'tl6.text': 'Today I am an AI Engineer at the Infosys Center of Excellence (CoE) in Brazil. I design and build AI-powered solutions — from applied LLMs to multi-agent workflows — for clients and internal operations, using AI-assisted engineering tools such as Claude, Codex and GitHub Copilot to speed up prototyping, development and delivery.',

      'mind.title': 'What drives<br/>my journey.',
      'mind.intro': 'It is not only what I can do — it is how I think, what I believe in and how I act when facing problems.',
      'mind1.title': 'Resilience',
      'mind1.body': 'When I commit to something, I see it through. When I find a problem, I look for the solution. When there is no path, I build one.',
      'mind2.title': 'Curiosity',
      'mind2.body': 'Many of my achievements came from questioning existing processes. The question that guides me: "Is there a better way to do this?"',
      'mind3.title': 'Courage',
      'mind3.body': 'I changed careers completely, leaving a traditional field for a brand-new one. I took risks, learned complex technologies and built solutions nobody asked for.',
      'mind4.title': 'Diligence',
      'mind4.body': 'I do what I promise. I deliver results. I execute with quality. I take ownership of the work I sign.',

      'imp.eyebrow': 'Impact',
      'imp.title': 'Numbers that<br/>speak for themselves.',
      'imp.intro': 'Impact is not intention — it is results. Each number stands for a real problem I solved.',
      'aie.eyebrow': 'Flagship project · SAP',
      'aie.p1': 'The manual, account-by-account work exposed the team’s real bottleneck — and led me to propose and lead the creation of the Account Intelligence Engine: a platform connecting automation, APIs, data analysis, CRM and sales strategy, with dedicated integrations for 6 countries — Brazil, Argentina, Chile, Colombia, Peru and Ecuador.',
      'aie.p2': 'I built Python pipelines to integrate, query and enrich data from public and private sources — CNPJ/Receita Federal, ARCA/AFIP (SOAP Web Services), Datos Abiertos Colombia via the Socrata SODA API, RUC/SUNAT, Serper and SearchAPI — automating account collection, normalization, matching and enrichment, with insights such as economic activity, company size, address, registration status, estimated revenue, partners/officers, websites and market signals. I also applied Machine Learning, NLP, predictive analytics and segmentation in pilots to prioritize and qualify companies for the sales teams.',
      'aie.m1': 'companies validated in the Brazil CRM in ~5 days (before: manual, one-by-one research and validation)',
      'aie.m2': 'inactive CNPJs identified with the Brazilian Federal Revenue Service, plus relevant record inconsistencies',
      'aie.m3': 'companies analyzed for commercial expansion',
      'aie.m4n': '6 countries',
      'aie.m4': 'LATAM coverage: BR, AR, CL, CO, PE, EC',
      'ss.label': 'Solutions built',
      'ss1.title': 'KPI Dashboard — Leadership & Demand Generation',
      'ss1.desc': 'Dashboard built for leaders across several areas to track KPIs, campaign analysis and demand generation in real time.',
      'ss2.title': 'Brazil API — Receita Federal & CNPJ',
      'ss2.desc': 'Automation that validated ~60,000 companies in the Brazil CRM in about 5 days, integrating CNPJ data from the Federal Revenue Service.',
      'ss3.title': 'Latin America APIs — Chile, Peru, Colombia, Mexico and Argentina',
      'ss3.desc': 'Per-country lookup interfaces integrated with official company registries: SII (Chile), SUNAT (Peru), Chamber of Commerce and Datos Abiertos (Colombia), SIEM/DENUE/SAT (Mexico) and ARCA/AFIP and BCRA (Argentina).',
      'ss4.title': 'Extra Solutions — AI Agent, Tools Hub & Email Validator',
      'ss4.desc': 'Conversational AI agent with a supervisor-agent architecture (LangChain, LangGraph, SAP Cloud SDK for AI, SAP AI Core) that unifies the countries’ APIs into a single interface and automatically routes each query to the right country and logic; a hub that centralizes the team’s tools; and an email validator at scale — all in SAP UI5/Fiori on SAP BTP, following SAP UX standards.',
      'inf.eyebrow': 'Current project · Infosys',
      'inf.title': 'AI agent workflow platform — AMS',
      'inf.p1': 'On an AMS (Application Management Services) project, I built an AI agent workflow platform that supports the support team in handling incident, problem and task tickets.',
      'inf.p2': 'I built the solution’s data flow layer — ingestion, data cleansing, ETL and metadata management, along the lines of tools such as OpenMetadata — and implemented a workflow builder where users design their own agent flows, connecting databases, APIs and other sources, with OpenAI models consumed through Azure OpenAI Service. I owned the end-to-end solution architecture and database design.',
      'inf.tag1': 'Multi-agent workflows',
      'inf.m1': 'ticket types supported by agents: incidents, problems and tasks',
      'inf.m2': 'end-to-end solution architecture and database design owned by me',
      'inf.m3': 'data layer: ingestion, cleansing, ETL and metadata management',
      'inf.m4': 'workflow builder so users can design their own agent flows',
      'ic1.lbl': 'Processing speed',
      'ic1.desc': 'Validation that would have taken months now runs in days, automated with Python and government APIs.',
      'ic2.lbl': 'Countries integrated',
      'ic2.desc': 'Dedicated integrations for Brazil, Argentina, Chile, Colombia, Peru and Ecuador — unified by an AI agent in a single interface.',
      'ic3.lbl': 'Executive visibility',
      'ic3.desc': 'I presented the work and its results to executive leadership, including the Vice Presidency of SAP Brazil — showing impact on productivity, CRM reliability and scalability.',
      'ic4.lbl': 'A new scope for the team',
      'ic4.desc': 'The impact was so deep that the team moved from manual tasks to strategic work.',

      'proj.eyebrow': 'Projects & Awards',
      'proj.title': 'Building.<br/>Competing. Winning.',
      'proj.intro': 'Three hackathons won under tight deadlines and high pressure, where framing the problem quickly and testing hypotheses fast was decisive — plus recognition at SAP and academic projects that go far beyond the classroom.',
      'proj.sapLabel': 'Recognition at SAP',
      'proj.hackLabel': 'Hackathons & Academic awards',
      'aw5.place': '1st Place · Innovation',
      'aw5.desc': 'Conceived, designed and led the execution, together with the Data Intelligence team, of the winning project among more than 65 cases presented across Latin America — using AI to make demand generation smarter, more scalable and more efficient.',
      'aw6.title': 'SAP LATAM Recognition',
      'aw6.evt': 'Regional · Latin America',
      'aw6.desc': 'Regional recognition for innovative data and AI solutions applied to Customer Data Intelligence.',
      'aw7.title': 'SAP internal recognition',
      'aw7.evt': 'Multiple recognitions',
      'aw7.desc': 'Received multiple “Appreciates” for building high-impact data and automation solutions, becoming a go-to reference for account intelligence initiatives.',
      'aw.regnat': '1st Regional · 3rd National',
      'aw1.desc': 'Machine Learning, time series and economic analysis to identify regime shifts in market indicators (crisis, recovery and stability), using PCA, LDA and K-Means for pattern extraction, dimensionality reduction and scenario segmentation.',
      'aw2.desc': 'Corporate data analysis in partnership with Dermage: exploratory analyses, segmentation, pattern identification and data-driven recommendations to support decision-making.',
      'aw3.place': '1st Regional',
      'aw3.title': 'IBMEC Tech Hackathon — Finance App',
      'aw3.desc': 'Built a personal finance management app using AI, Java and React.',
      'aw4.desc': 'Academic excellence award received twice. In 2024, I became the first woman in the Data Science and Artificial Intelligence program to win it.',
      'pj.num': 'Project · IBMEC SP',
      'pj1.title': 'Kyra Project — ML & NLP',
      'pj1.desc': 'Machine Learning and Natural Language Processing projects for the company Kyra — experiments with predictive models, classification, segmentation and text analysis.',
      'pj2.title': 'Executive Dashboards — Power BI',
      'pj2.desc': 'I built interactive dashboards with DAX, Power Query, relational modeling and business KPIs.',
      'pj3.title': 'Full-Stack Web Applications',
      'pj3.desc': 'I built web and back-end applications with Flask and Spring Boot, integrated with relational databases and Azure cloud.',

      'cert.eyebrow': 'Certifications & Training',
      'cert.title': 'Continuous<br/>learning.',
      'cert.intro': 'AI certifications and an ongoing learning path in data, AI, cloud and business — at SAP, at Infosys and on my own.',
      'cert.label1': 'Certifications',
      'cert.label2': 'SAP Learning & Databricks',
      'cert.label3': 'Infosys · Lex platform',
      'cert.bdc': 'SAP · SAP Datasphere, SAP Analytics Cloud and SAP Databricks',
      'cert.hana': 'SAP · Machine Learning on SAP HANA with hana-ml, PAL and APL',
      'cert.llm': 'SAP · SAP’s Generative AI strategy, RAG, fine-tuning and LLM evaluation',

      'sk.eyebrow': 'Skills',
      'sk.title': 'A stack that connects<br/>analytics, AI and business.',
      'sk.intro': 'The tools and know-how I use every day, organized by layer, from raw data to business decisions.',
      'sk1.title': 'Programming, Data & Automation',
      'sk2.title': 'ML, NLP & Generative AI',
      'sk3.title': 'Data Platforms, SAP & Cloud',
      'sk4.title': 'APIs & Data Ingestion',
      'sk5.title': 'Solution Advisory & Prototyping',
      'sk6.title': 'Business Intelligence & Visualization',
      'sk7.title': 'Development & Tools',
      'sk8.title': 'Languages',
      'sk.pyadv': 'Advanced Python',
      'sk.automation': 'Process automation',
      'sk.cleansing': 'Data cleansing & normalization',
      'sk.agents': 'Agents & multi-agent workflows',
      'sk.regression': 'Regression',
      'sk.classification': 'Classification',
      'sk.segmentation': 'Segmentation',
      'sk.predictive': 'Predictive analytics',
      'sk.timeseries': 'Time series',
      'sk.sources': 'Public & private sources',
      'sk.engines': 'Lookup & enrichment engines',
      'sk.opendata': 'Open Data',
      'sk.vibe': 'Rapid AI-assisted prototyping (vibe coding)',
      'sk.demos': 'Working demos',
      'sk.needs': 'Business needs assessment',
      'sk.value': 'Value proposition',
      'sk.exec': 'Executive presentations',
      'sk.excel': 'Advanced Excel',
      'sk.dash': 'Executive dashboards',
      'sk.kpis': 'KPIs & sales analytics',
      'sk.pt': 'Portuguese — Native',
      'sk.en': 'English — Advanced',
      'sk.es': 'Spanish — Intermediate',

      'ab.eyebrow': 'About',
      'ab.title': 'The story doesn’t<br/>end here.',
      'ab.p1': 'I am an <strong>AI Engineer at Infosys (CoE Brazil)</strong>, with nearly 2 years at <strong>SAP in Customer Data Intelligence</strong>, and a <strong>Data Science and Artificial Intelligence student at IBMEC SP</strong> (evening program, expected graduation Jun 2027).',
      'ab.p2': 'I combine hands-on building of AI, data and automation solutions with business acumen: I quickly get to the core of complex problems, turn ideas into working solutions and communicate their value to both technical and executive audiences.',
      'ab.p3': 'Before technology, I worked at a law firm and managed a franchise. That path gave me something no course teaches: <strong>the perspective of someone who has seen real problems and understood that technology is a means, not an end.</strong>',
      'ab.p4': 'Native Portuguese, advanced <strong>English</strong> and intermediate <strong>Spanish</strong>. Current focus: applied AI, agents and multi-agent workflows, data engineering and scalable solutions to business problems.',
      'ct.eyebrow': 'Contact',
      'ct.title': 'Let’s<br/>talk.',
      'ct.loc': 'Location',
      'ct.locval': 'Granja Viana, Cotia – SP, Brazil',
      'ct.phone': 'Phone',
      'ct.phoneval': '+55 11 99268-4820',
      'ft.main': 'Juliane de Assis Pirozelli Oliveira &nbsp;·&nbsp; AI Engineer &nbsp;·&nbsp; Data Science & AI &nbsp;·&nbsp; IBMEC SP &nbsp;·&nbsp; <strong>Infosys</strong>',
      'ft.sub': 'Data, determination and lots of Python.',
      'aria.close': 'Close',
      'aria.top': 'Back to top'
    },

    es: {
      'loader': 'cargando tu historia',
      'nav.story': 'Trayectoria',
      'nav.mindset': 'Mindset',
      'nav.impact': 'Impacto',
      'nav.projects': 'Proyectos',
      'nav.skills': 'Skills',
      'nav.contact': 'Contacto',

      'hero.available': 'Abierta a oportunidades',
      'hero.exsap': 'Ex-SAP iXp',
      'hero.title': 'Transformando<br/>datos en <span class="accent">impacto</span><br/>real.',
      'hero.sub': 'De un área completamente distinta al corazón de la innovación: hoy soy AI Engineer en Infosys (CoE Brasil), después de casi 2 años construyendo soluciones de datos e IA en SAP.',
      'hero.cta1': 'Conoce mi historia',
      'hero.cta2': 'Contáctame',
      'stat.validated': 'Empresas validadas',
      'stat.inactive': 'CNPJs inactivos identificados',
      'stat.analyzed': 'Empresas analizadas',
      'stat.countries': 'Países — LATAM',

      'story.eyebrow': 'Trayectoria',
      'story.title': 'Un camino de<br/>transformación.',
      'story.intro': 'Esta no es una historia sobre tecnología. Es sobre coraje, curiosidad y mi capacidad de construir un camino donde todavía no existía.',
      'story.cap': 'SAP iXp Intern · Customer Data Intelligence · Ene 2025 – Sep 2026<br/>Infosys · AI Engineer, CoE Brasil · Oct 2026 – Actualidad',
      'tl1.chapter': 'El comienzo',
      'tl1.heading': 'Estudio jurídico — los primeros fundamentos',
      'tl1.text': 'Antes de la tecnología, mi primer contacto con el mundo corporativo me enseñó organización, disciplina y atención al detalle. Pero tenía algo claro: mi futuro estaría más cerca de la innovación y de la construcción de soluciones.',
      'tl2.chapter': 'Liderazgo operativo',
      'tl2.heading': 'Pet Móvel — gestión real y aprendizajes humanos',
      'tl2.text': 'Al administrar una franquicia de Pet Móvel, mi responsabilidad era total: gestión operativa, equipo, agenda y atención al cliente. Ahí se formó mi convicción: la tecnología solo genera valor cuando resuelve problemas reales de las personas.',
      'tl3.chapter': 'El gran giro',
      'tl3.heading': 'IBMEC SP — la decisión que lo cambió todo',
      'tl3.text': 'Descubrí una carrera todavía poco común en Brasil: Ciencia de Datos e Inteligencia Artificial. La intersección perfecta entre negocios, tecnología e innovación. Decidí cambiar completamente de carrera e ingresé a IBMEC São Paulo.',
      'tl4.chapter': 'Protagonismo académico',
      'tl4.heading': 'IBMEC Star — la primera mujer de la carrera',
      'tl4.text': 'Asumí la Dirección de Eventos, organizando encuentros con ejecutivos de Coca-Cola, Johnson & Johnson y otros grandes líderes del mercado. En 2024 gané el premio IBMEC Star y me convertí en la primera mujer de la carrera de Ciencia de Datos e IA en recibir este premio a la excelencia académica. En 2026.1 lo recibí por segunda vez.',
      'tl5.chapter': 'SAP · Enero 2025 – Septiembre 2026',
      'tl5.heading': 'SAP iXp — Customer Data Intelligence',
      'tl5.text': 'Ingresé a SAP como Sales Development Executive y pronto fui transferida al área de Data Research. En casi 2 años, mi rol evolucionó del soporte táctico al área de ventas a la construcción de mis propias soluciones de datos e IA, que pasaron a sostener la operación del equipo en toda América Latina — todavía como estudiante, antes de terminar la carrera.',
      'tl6.chapter': 'Infosys · Octubre 2026 – Actualidad',
      'tl6.heading': 'AI Engineer — CoE Brasil',
      'tl6.text': 'Hoy soy AI Engineer en el Centro de Excelencia (CoE) de Infosys en Brasil. Diseño y construyo soluciones con IA — desde LLMs aplicados hasta workflows multiagente — para clientes y operaciones internas, utilizando herramientas de ingeniería asistida por IA como Claude, Codex y GitHub Copilot para acelerar el prototipado, el desarrollo y la entrega.',

      'mind.title': 'Lo que impulsa<br/>mi trayectoria.',
      'mind.intro': 'No es solo lo que sé hacer — es cómo pienso, en qué creo y cómo actúo frente a los problemas.',
      'mind1.title': 'Resiliencia',
      'mind1.body': 'Cuando asumo un compromiso, llego hasta el final. Cuando encuentro un problema, busco la solución. Cuando no existe un camino, lo construyo.',
      'mind2.title': 'Curiosidad',
      'mind2.body': 'Gran parte de mis logros surgieron porque cuestioné procesos existentes. La pregunta que me guía: "¿Existe una mejor forma de hacer esto?"',
      'mind3.title': 'Coraje',
      'mind3.body': 'Cambié completamente de carrera. Pasé de un área tradicional a una totalmente nueva. Asumí riesgos, aprendí tecnologías complejas y construí soluciones sin que me las pidieran.',
      'mind4.title': 'Diligencia',
      'mind4.body': 'Cumplo lo que prometo. Entrego resultados. Ejecuto con calidad. Me siento dueña del trabajo que firmo.',

      'imp.eyebrow': 'Impacto',
      'imp.title': 'Números que<br/>hablan por sí solos.',
      'imp.intro': 'El impacto no es intención — es resultado. Cada número representa un problema real que resolví.',
      'aie.eyebrow': 'Proyecto principal · SAP',
      'aie.p1': 'El trabajo manual, cuenta por cuenta, reveló el verdadero cuello de botella del equipo — y me llevó a proponer y liderar la creación del Account Intelligence Engine: una plataforma que conecta automatización, APIs, análisis de datos, CRM y estrategia de ventas, con integraciones dedicadas para 6 países — Brasil, Argentina, Chile, Colombia, Perú y Ecuador.',
      'aie.p2': 'Desarrollé pipelines en Python para integrar, consultar y enriquecer datos de fuentes públicas y privadas — CNPJ/Receita Federal, ARCA/AFIP (SOAP Web Services), Datos Abiertos Colombia vía Socrata SODA API, RUC/SUNAT, Serper y SearchAPI — automatizando la recolección, normalización, matching y enriquecimiento de cuentas, con insights como actividad económica, tamaño de la empresa, dirección, situación registral, facturación estimada, socios, sitios web y señales de mercado. También apliqué Machine Learning, NLP, análisis predictivo y segmentación en pilotos para priorizar y calificar empresas para los equipos de ventas.',
      'aie.m1': 'empresas validadas en el CRM de Brasil en ~5 días (antes: investigación y validación manual, una por una)',
      'aie.m2': 'CNPJs inactivos identificados ante la Receita Federal de Brasil, además de inconsistencias registrales relevantes',
      'aie.m3': 'empresas analizadas para expansión comercial',
      'aie.m4n': '6 países',
      'aie.m4': 'cobertura LATAM: BR, AR, CL, CO, PE, EC',
      'ss.label': 'Soluciones creadas',
      'ss1.title': 'Dashboard de KPIs — Liderazgo y Generación de Demanda',
      'ss1.desc': 'Dashboard construido para que líderes de diversas áreas sigan KPIs, análisis de campañas y generación de demanda en tiempo real.',
      'ss2.title': 'API Brasil — Receita Federal y CNPJ',
      'ss2.desc': 'Automatización que validó ~60 mil empresas del CRM de Brasil en unos 5 días, integrando datos de CNPJ de la Receita Federal.',
      'ss3.title': 'APIs América Latina — Chile, Perú, Colombia, México y Argentina',
      'ss3.desc': 'Interfaces de consulta por país, integradas a registros oficiales de empresas: SII (Chile), SUNAT (Perú), Cámara de Comercio y Datos Abiertos (Colombia), SIEM/DENUE/SAT (México) y ARCA/AFIP y BCRA (Argentina).',
      'ss4.title': 'Soluciones Extra — Agente de IA, Centralización de Herramientas y Email Validator',
      'ss4.desc': 'Agente de IA conversacional con arquitectura de agente supervisor (LangChain, LangGraph, SAP Cloud SDK for AI, SAP AI Core) que unifica las APIs de los países en una sola interfaz y enruta automáticamente cada consulta al país y la lógica correctos; un hub que centraliza las herramientas del área; y un validador de e-mails a escala — todo en SAP UI5/Fiori sobre SAP BTP, siguiendo los estándares de UX de SAP.',
      'inf.eyebrow': 'Proyecto actual · Infosys',
      'inf.title': 'Plataforma de workflows de agentes de IA — AMS',
      'inf.p1': 'En un proyecto de AMS (Application Management Services), construí una plataforma de workflows de agentes de IA que apoya al equipo de soporte en la gestión de tickets de incidentes, problemas y tareas.',
      'inf.p2': 'Construí la capa de flujo de datos — ingesta, limpieza, ETL y gestión de metadatos, en la línea de herramientas como OpenMetadata — e implementé un workflow builder donde los propios usuarios diseñan sus flujos de agentes, conectando bases de datos, APIs y otras fuentes, con modelos de OpenAI consumidos a través de Azure OpenAI Service. Fui responsable de la arquitectura de punta a punta de la solución y del diseño de la base de datos.',
      'inf.tag1': 'Workflows multiagente',
      'inf.m1': 'tipos de ticket apoyados por agentes: incidentes, problemas y tareas',
      'inf.m2': 'arquitectura de la solución y diseño de la base de datos bajo mi responsabilidad',
      'inf.m3': 'capa de datos: ingesta, limpieza, ETL y gestión de metadatos',
      'inf.m4': 'workflow builder para que los usuarios diseñen sus propios flujos de agentes',
      'ic1.lbl': 'Velocidad de procesamiento',
      'ic1.desc': 'Una validación que llevaría meses pasó a ejecutarse en días con automatización en Python y APIs gubernamentales.',
      'ic2.lbl': 'Países integrados',
      'ic2.desc': 'Integraciones dedicadas para Brasil, Argentina, Chile, Colombia, Perú y Ecuador — unificadas por un agente de IA en una sola interfaz.',
      'ic3.lbl': 'Visibilidad ejecutiva',
      'ic3.desc': 'Presenté el trabajo y sus resultados al liderazgo ejecutivo, incluida la Vicepresidencia de SAP Brasil — con impacto en productividad, confiabilidad del CRM y escalabilidad.',
      'ic4.lbl': 'Un nuevo alcance para el área',
      'ic4.desc': 'El impacto fue tan profundo que el equipo dejó de ejecutar tareas manuales para actuar de forma estratégica.',

      'proj.eyebrow': 'Proyectos y Premios',
      'proj.title': 'Construyendo.<br/>Compitiendo. Ganando.',
      'proj.intro': 'Tres hackathons ganados con plazos cortos y alta presión, donde enmarcar rápido el problema y probar hipótesis con velocidad fue decisivo — además de reconocimientos en SAP y proyectos académicos que van mucho más allá del aula.',
      'proj.sapLabel': 'Reconocimientos en SAP',
      'proj.hackLabel': 'Hackathons y premios académicos',
      'aw5.place': '1.er Lugar · Innovación',
      'aw5.desc': 'Concebí, diseñé y lideré la ejecución, junto con el equipo de Data Intelligence, del proyecto ganador entre más de 65 casos presentados en toda América Latina — usando IA para que la generación de demanda sea más inteligente, escalable y eficiente.',
      'aw6.title': 'Reconocimiento SAP LATAM',
      'aw6.evt': 'Regional · América Latina',
      'aw6.desc': 'Reconocimiento regional por soluciones innovadoras de datos e IA aplicadas a Customer Data Intelligence.',
      'aw7.title': 'Reconocimientos internos de SAP',
      'aw7.evt': 'Múltiples reconocimientos',
      'aw7.desc': 'Recibí varios “Appreciates” por construir soluciones de datos y automatización de alto impacto, convirtiéndome en referente de las iniciativas de account intelligence.',
      'aw.regnat': '1.º Regional · 3.º Nacional',
      'aw1.desc': 'Machine Learning, series temporales y análisis económico para identificar cambios de régimen en indicadores de mercado (crisis, recuperación y estabilidad), con PCA, LDA y K-Means para extracción de patrones, reducción de dimensionalidad y segmentación de escenarios.',
      'aw2.desc': 'Análisis de datos corporativos en alianza con Dermage: análisis exploratorios, segmentaciones, identificación de patrones y recomendaciones basadas en datos para apoyar la toma de decisiones.',
      'aw3.place': '1.º Regional',
      'aw3.title': 'Hackathon IBMEC Tech — App Financiera',
      'aw3.desc': 'Desarrollo de una app de gestión de finanzas personales con IA, Java y React.',
      'aw4.desc': 'Premio a la excelencia académica recibido dos veces. En 2024 fui la primera mujer de la carrera de Ciencia de Datos e Inteligencia Artificial en obtenerlo.',
      'pj.num': 'Proyecto · IBMEC SP',
      'pj1.title': 'Proyecto Kyra — ML y NLP',
      'pj1.desc': 'Proyectos de Machine Learning y Procesamiento de Lenguaje Natural para la empresa Kyra — experimentos con modelos predictivos, clasificación, segmentación y análisis de texto.',
      'pj2.title': 'Dashboards Ejecutivos — Power BI',
      'pj2.desc': 'Desarrollé dashboards interactivos con DAX, Power Query, modelado relacional y KPIs de negocio.',
      'pj3.title': 'Aplicaciones Web Full-Stack',
      'pj3.desc': 'Desarrollé aplicaciones web y back-end con Flask y Spring Boot, integradas con bases de datos relacionales y la nube de Azure.',

      'cert.eyebrow': 'Certificaciones y Formación',
      'cert.title': 'Formación<br/>continua.',
      'cert.intro': 'Certificaciones en IA y un camino de aprendizaje continuo en datos, IA, cloud y negocios — en SAP, en Infosys y por cuenta propia.',
      'cert.label1': 'Certificaciones',
      'cert.label2': 'SAP Learning y Databricks',
      'cert.label3': 'Infosys · plataforma Lex',
      'cert.bdc': 'SAP · SAP Datasphere, SAP Analytics Cloud y SAP Databricks',
      'cert.hana': 'SAP · Machine Learning en SAP HANA con hana-ml, PAL y APL',
      'cert.llm': 'SAP · Estrategia de IA Generativa de SAP, RAG, fine-tuning y evaluación de LLMs',

      'sk.eyebrow': 'Competencias',
      'sk.title': 'Un stack que conecta<br/>análisis, IA y negocio.',
      'sk.intro': 'Herramientas y conocimientos que uso a diario, organizados por capa, del dato bruto a la decisión de negocio.',
      'sk1.title': 'Programación, Datos y Automatización',
      'sk2.title': 'ML, NLP e IA Generativa',
      'sk3.title': 'Plataformas de Datos, SAP y Cloud',
      'sk4.title': 'APIs e Ingesta de Datos',
      'sk5.title': 'Solution Advisory y Prototipado',
      'sk6.title': 'Business Intelligence y Visualización',
      'sk7.title': 'Desarrollo y Herramientas',
      'sk8.title': 'Idiomas',
      'sk.pyadv': 'Python avanzado',
      'sk.automation': 'Automatización de procesos',
      'sk.cleansing': 'Limpieza y normalización de datos',
      'sk.agents': 'Agentes y workflows multiagente',
      'sk.regression': 'Regresión',
      'sk.classification': 'Clasificación',
      'sk.segmentation': 'Segmentación',
      'sk.predictive': 'Análisis predictivo',
      'sk.timeseries': 'Series temporales',
      'sk.sources': 'Fuentes públicas y privadas',
      'sk.engines': 'Motores de consulta y enriquecimiento',
      'sk.opendata': 'Datos Abiertos',
      'sk.vibe': 'Prototipado rápido con IA (vibe coding)',
      'sk.demos': 'Demos funcionales',
      'sk.needs': 'Levantamiento de necesidades de negocio',
      'sk.value': 'Propuesta de valor',
      'sk.exec': 'Presentaciones ejecutivas',
      'sk.excel': 'Excel avanzado',
      'sk.dash': 'Dashboards ejecutivos',
      'sk.kpis': 'KPIs y sales analytics',
      'sk.pt': 'Portugués — Nativo',
      'sk.en': 'Inglés — Avanzado',
      'sk.es': 'Español — Intermedio',

      'ab.eyebrow': 'Sobre mí',
      'ab.title': 'La historia no<br/>termina aquí.',
      'ab.p1': 'Soy <strong>AI Engineer en Infosys (CoE Brasil)</strong>, con casi 2 años en <strong>SAP en Customer Data Intelligence</strong>, y estudiante de <strong>Ciencia de Datos e Inteligencia Artificial en IBMEC SP</strong> (turno noche, graduación prevista en jun/2027).',
      'ab.p2': 'Combino la construcción práctica de soluciones de IA, datos y automatización con visión de negocio: llego rápido al núcleo de problemas complejos, transformo ideas en soluciones funcionales y comunico su valor a públicos técnicos y ejecutivos.',
      'ab.p3': 'Antes de la tecnología, trabajé en un estudio jurídico y en la gestión de una franquicia. Ese camino me dio algo que ningún curso enseña: <strong>la perspectiva de quien vio problemas reales y entendió que la tecnología es un medio, no un fin.</strong>',
      'ab.p4': 'Portugués nativo, <strong>inglés</strong> avanzado y <strong>español</strong> intermedio. Foco actual: IA aplicada, agentes y workflows multiagente, ingeniería de datos y soluciones escalables para problemas de negocio.',
      'ct.eyebrow': 'Contacto',
      'ct.title': 'Hablemos.',
      'ct.loc': 'Ubicación',
      'ct.locval': 'Granja Viana, Cotia – SP, Brasil',
      'ct.phone': 'Teléfono',
      'ct.phoneval': '+55 11 99268-4820',
      'ft.main': 'Juliane de Assis Pirozelli Oliveira &nbsp;·&nbsp; AI Engineer &nbsp;·&nbsp; Ciencia de Datos e IA &nbsp;·&nbsp; IBMEC SP &nbsp;·&nbsp; <strong>Infosys</strong>',
      'ft.sub': 'Datos, determinación y mucho Python.',
      'aria.close': 'Cerrar',
      'aria.top': 'Volver al inicio'
    }
  };

  var META = {
    pt: {
      lang: 'pt-BR',
      title: 'Juliane Oliveira — AI Engineer · Data & AI',
      desc: 'Portfólio de Juliane Oliveira: AI Engineer na Infosys (CoE Brasil), ex-SAP Customer Data Intelligence e estudante de Ciência de Dados e IA no IBMEC SP.'
    },
    en: {
      lang: 'en',
      title: 'Juliane Oliveira — AI Engineer · Data & AI',
      desc: 'Portfolio of Juliane Oliveira: AI Engineer at Infosys (CoE Brazil), former SAP Customer Data Intelligence intern and Data Science & AI student at IBMEC SP.'
    },
    es: {
      lang: 'es',
      title: 'Juliane Oliveira — AI Engineer · Data & AI',
      desc: 'Portafolio de Juliane Oliveira: AI Engineer en Infosys (CoE Brasil), ex-SAP Customer Data Intelligence y estudiante de Ciencia de Datos e IA en IBMEC SP.'
    }
  };

  var LANGS = ['pt', 'en', 'es'];
  var STORE_KEY = 'portfolio-lang';

  // Remember the Portuguese text that ships in the HTML.
  var textEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var ariaEls = Array.prototype.slice.call(document.querySelectorAll('[data-i18n-aria]'));
  textEls.forEach(function (el) { el._i18nPt = el.innerHTML; });
  ariaEls.forEach(function (el) { el._i18nPt = el.getAttribute('aria-label') || ''; });
  var metaDesc = document.querySelector('meta[name="description"]');

  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = 'pt';
    var dict = T[lang] || {};

    textEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      el.innerHTML = (lang !== 'pt' && dict[key] != null) ? dict[key] : el._i18nPt;
    });
    ariaEls.forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', (lang !== 'pt' && dict[key] != null) ? dict[key] : el._i18nPt);
    });

    var meta = META[lang];
    document.documentElement.lang = meta.lang;
    document.title = meta.title;
    if (metaDesc) metaDesc.setAttribute('content', meta.desc);

    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
      var on = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  function initialLang() {
    var fromUrl = null;
    try { fromUrl = new URLSearchParams(window.location.search).get('lang'); } catch (e) {}
    if (fromUrl && LANGS.indexOf(fromUrl.toLowerCase()) !== -1) return fromUrl.toLowerCase();

    var saved = null;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) {}
    if (saved && LANGS.indexOf(saved) !== -1) return saved;

    var nav = ((navigator.languages && navigator.languages[0]) || navigator.language || 'pt').toLowerCase();
    if (nav.indexOf('pt') === 0) return 'pt';
    if (nav.indexOf('es') === 0) return 'es';
    return 'en';
  }

  document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang')); });
  });

  window.setLang = setLang;
  window.PORTFOLIO_I18N = T;
  setLang(initialLang());
})();
