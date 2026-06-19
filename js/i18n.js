// ══════════════════════════════════════════════════
// DyeTex i18n — translations + loader
// ══════════════════════════════════════════════════

const TRANSLATIONS = {
  en: {
    nav: { solutions: "Solutions", howWorks: "How It Works", team: "The Team", product: "Product", login: "Login" },
    hero: { badge: "IoT-Powered Textile Intelligence", title1: "Machines that", title2: "transform quality", title3: "into every stitch.", desc: "Monitor, anticipate, and respond before a failure occurs.\nDigitize your textile plant today.", cta: "Request Demo", watch: "See how it works" },
    stats: { downtime: "Downtime reduction", uptime: "Machine uptime", alert: "Alert response" },
    solutions: { eyebrow: "What we solve", title: "Industrial intelligence\nfor every loom", desc: "Our platform connects directly to your existing machinery. No replacements needed — just smart sensors and adaptive modules that transform your plant into a data-driven operation." },
    features: {
      realtime: { title: "Real-Time Monitoring", desc: "Track RPM, temperature, vibration and output for every machine in your plant, live on a single dashboard." },
      predictive: { title: "Predictive Alerts", desc: "AI detects anomalies before they cause failures. Receive alerts by SMS or email with recommended actions." },
      reports: { title: "Automated Reports", desc: "Daily, weekly or monthly efficiency reports generated automatically. Export to PDF, share with your team instantly." },
      maintenance: { title: "Maintenance Scheduler", desc: "Plan preventive maintenance based on real usage data, not guesswork. Reduce unplanned stops by up to 40%." },
      analytics: { title: "Advanced Analytics", desc: "Visualize production KPIs, output efficiency and quality metrics with interactive charts and heat maps." },
      iot: { title: "IoT Integration", desc: "Compatible with existing machinery. Install non-invasive sensors in hours without stopping production." }
    },
    howWorks: { eyebrow: "The process", title: "Up and running\nin 3 steps" },
    steps: {
      s1: { title: "Install Smart Sensors", desc: "Our technicians install non-invasive IoT sensors on your existing machines. Zero downtime during installation — your plant keeps running." },
      s2: { title: "Connect to the Platform", desc: "Data flows in real-time to your DyeTex dashboard. See every machine's status from any device, anywhere." },
      s3: { title: "Act on Intelligence", desc: "Receive predictive alerts, schedule maintenance and make decisions backed by data — before a single stitch is lost." }
    },
    team: { eyebrow: "The people", title: "Built by engineers,\nfor engineers", desc: "We are a multidisciplinary team of software engineers, IoT specialists and textile industry veterans based in Lima, Peru.", v1: "Industry-first design thinking", v2: "Real-world sensor deployments", v3: "Continuous iteration with clients" },
    mission: { title: "Mission", text: "Provide textile companies with efficient solutions that optimize machine performance through real-time monitoring, increasing productivity and reducing downtime through timely maintenance notifications." },
    vision: { title: "Vision", text: "Become the leading platform for the textile industry, transforming machinery management and production processes, contributing to industrial growth and competitiveness across Latin America." },
    product: { eyebrow: "The platform", title: "Every screen built\nfor the plant floor", desc: "DyeTex drives operational efficiency in the textile industry through advanced technology. Real-time monitoring, smart alerts, and detailed reports — all in one place." },
    pricing: { eyebrow: "Plans", title: "Made for every plant", desc: "Start monitoring your machines today. Scale as your operation grows.", period: "/ mo", popular: "Most Popular", start: "Get Started", contact: "Contact Sales", custom: "Custom",
      free: { name: "Starter", desc: "Ideal to test real-time monitoring in a small plant.", f1: "Up to 5 machines", f2: "Real-time dashboard", f3: "Basic alert notifications", f4: "7-day data history", f5: "Email support" },
      pro: { name: "Pro", desc: "For plants with multiple lines and teams needing full visibility.", f1: "Unlimited machines", f2: "AI predictive alerts", f3: "Automated PDF reports", f4: "Maintenance scheduler", f5: "Advanced analytics", f6: "Mobile app access", f7: "Priority support", f8: "1-year data history" },
      ent: { name: "Enterprise", desc: "For large plants and textile groups needing dedicated infrastructure.", f1: "Everything in Pro", f2: "Custom sensor deployment", f3: "On-premise option", f4: "SLA guarantee", f5: "Dedicated account manager" }
    },
    cta: { eyebrow: "Stay ahead", title: "Transform your factory\ninto a smart facility", desc: "Join 200+ textile plants already reducing downtime with DyeTex. Get early access, product updates and industry insights.", placeholder: "your@email.com", subscribe: "Get Early Access", note: "No spam. Unsubscribe anytime.", success: "You're on the list! We'll be in touch soon." },
    footer: { tagline: "Smart monitoring for textile machinery.", product: "Product", company: "Company", getInTouch: "Get in Touch", contact: "Contact", privacy: "Privacy Policy", terms: "Terms of Use", pricing: "Pricing", made: "Made in Lima, Perú 🇵🇪" },
    chat: { status: "Online · DyeTex AI", greeting: "Hello! I'm Clara, DyeTex's AI assistant. How can I help you today?", placeholder: "Ask me anything...", s1: "App benefits", s2: "Contact us", s3: "What it monitors", s4: "Reports", s5: "Our location", s6: "Pricing" }
  },

  es: {
    nav: { solutions: "Soluciones", howWorks: "Cómo Funciona", team: "El Equipo", product: "Producto", login: "Ingresar" },
    hero: { badge: "Inteligencia Textil con IoT", title1: "Máquinas que", title2: "transforman calidad", title3: "en cada puntada.", desc: "Monitorea, anticipa y responde antes de que ocurra una falla.\nDigitaliza tu planta textil hoy.", cta: "Solicitar Demo", watch: "Ver cómo funciona" },
    stats: { downtime: "Reducción de paradas", uptime: "Disponibilidad", alert: "Respuesta de alertas" },
    solutions: { eyebrow: "Lo que resolvemos", title: "Inteligencia industrial\npara cada telar", desc: "Nuestra plataforma se conecta directamente a tu maquinaria existente. Sin reemplazos — solo sensores inteligentes y módulos adaptativos que transforman tu planta en una operación basada en datos." },
    features: {
      realtime: { title: "Monitoreo en Tiempo Real", desc: "Rastrea RPM, temperatura, vibración y producción de cada máquina en tu planta, en vivo en un solo panel." },
      predictive: { title: "Alertas Predictivas", desc: "La IA detecta anomalías antes de que causen fallas. Recibe alertas por SMS o correo con acciones recomendadas." },
      reports: { title: "Reportes Automatizados", desc: "Reportes de eficiencia diarios, semanales o mensuales generados automáticamente. Exporta a PDF y comparte al instante." },
      maintenance: { title: "Programador de Mantenimiento", desc: "Planifica el mantenimiento preventivo basado en datos reales de uso, no en suposiciones. Reduce paradas no planificadas hasta un 40%." },
      analytics: { title: "Analíticas Avanzadas", desc: "Visualiza KPIs de producción, eficiencia y métricas de calidad con gráficos interactivos y mapas de calor." },
      iot: { title: "Integración IoT", desc: "Compatible con maquinaria existente. Instala sensores no invasivos en horas sin detener la producción." }
    },
    howWorks: { eyebrow: "El proceso", title: "Operativo\nen 3 pasos" },
    steps: {
      s1: { title: "Instala Sensores Inteligentes", desc: "Nuestros técnicos instalan sensores IoT no invasivos en tus máquinas existentes. Cero tiempo de inactividad — tu planta sigue funcionando." },
      s2: { title: "Conéctate a la Plataforma", desc: "Los datos fluyen en tiempo real a tu panel DyeTex. Ve el estado de cada máquina desde cualquier dispositivo." },
      s3: { title: "Actúa con Inteligencia", desc: "Recibe alertas predictivas, programa mantenimiento y toma decisiones respaldadas por datos — antes de perder una sola puntada." }
    },
    team: { eyebrow: "Las personas", title: "Creado por ingenieros,\npara ingenieros", desc: "Somos un equipo multidisciplinario de ingenieros de software, especialistas en IoT y veteranos de la industria textil, basados en Lima, Perú.", v1: "Pensamiento centrado en la industria", v2: "Despliegues reales de sensores", v3: "Iteración continua con clientes" },
    mission: { title: "Misión", text: "Brindar a las empresas textiles soluciones eficientes que optimicen el rendimiento de las máquinas mediante monitoreo en tiempo real, aumentando la productividad y reduciendo el tiempo de inactividad." },
    vision: { title: "Visión", text: "Convertirnos en la plataforma líder para la industria textil, transformando la gestión de maquinaria y procesos productivos, contribuyendo al crecimiento industrial en América Latina." },
    product: { eyebrow: "La plataforma", title: "Cada pantalla diseñada\npara la planta", desc: "DyeTex impulsa la eficiencia operacional en la industria textil mediante tecnología avanzada. Monitoreo en tiempo real, alertas inteligentes y reportes detallados — todo en un solo lugar." },
    pricing: { eyebrow: "Planes", title: "Para cada planta", desc: "Empieza a monitorear tus máquinas hoy. Escala según crece tu operación.", period: "/ mes", popular: "Más Popular", start: "Comenzar", contact: "Contactar Ventas", custom: "Personalizado",
      free: { name: "Starter", desc: "Ideal para probar el monitoreo en tiempo real en una planta pequeña.", f1: "Hasta 5 máquinas", f2: "Panel en tiempo real", f3: "Alertas básicas", f4: "Historial de 7 días", f5: "Soporte por correo" },
      pro: { name: "Pro", desc: "Para plantas con múltiples líneas y equipos que necesitan visibilidad completa.", f1: "Máquinas ilimitadas", f2: "Alertas predictivas con IA", f3: "Reportes PDF automáticos", f4: "Programador de mantenimiento", f5: "Analíticas avanzadas", f6: "Acceso a app móvil", f7: "Soporte prioritario", f8: "Historial de 1 año" },
      ent: { name: "Empresa", desc: "Para grandes plantas y grupos textiles que necesitan infraestructura dedicada.", f1: "Todo lo del plan Pro", f2: "Despliegue de sensores personalizado", f3: "Opción on-premise", f4: "Garantía SLA", f5: "Gerente de cuenta dedicado" }
    },
    cta: { eyebrow: "Mantente adelante", title: "Transforma tu fábrica\nen una planta inteligente", desc: "Únete a más de 200 plantas textiles que ya reducen paradas con DyeTex. Obtén acceso anticipado e insights de la industria.", placeholder: "tu@email.com", subscribe: "Obtener Acceso Anticipado", note: "Sin spam. Cancela en cualquier momento.", success: "¡Estás en la lista! Estaremos en contacto pronto." },
    footer: { tagline: "Monitoreo inteligente para maquinaria textil.", product: "Producto", company: "Empresa", getInTouch: "Contáctanos", contact: "Contacto", privacy: "Política de Privacidad", terms: "Términos de Uso", pricing: "Planes", made: "Hecho en Lima, Perú 🇵🇪" },
    chat: { status: "En línea · DyeTex IA", greeting: "¡Hola! Soy Clara, asistente IA de DyeTex. ¿En qué te puedo ayudar hoy?", placeholder: "Pregúntame algo...", s1: "Beneficios", s2: "Contacto", s3: "Qué monitorea", s4: "Reportes", s5: "Ubicación", s6: "Precios" }
  },

  fr: {
    nav: { solutions: "Solutions", howWorks: "Comment ça marche", team: "L'Équipe", product: "Produit", login: "Connexion" },
    hero: { badge: "Intelligence Textile IoT", title1: "Des machines qui", title2: "transforment la qualité", title3: "à chaque point.", desc: "Surveillez, anticipez et répondez avant qu'une panne ne survienne.\nNumérisez votre usine textile aujourd'hui.", cta: "Demander une Démo", watch: "Voir comment ça marche" },
    stats: { downtime: "Réduction des arrêts", uptime: "Disponibilité machines", alert: "Réponse aux alertes" },
    solutions: { eyebrow: "Ce que nous résolvons", title: "Intelligence industrielle\npour chaque métier", desc: "Notre plateforme se connecte directement à vos machines existantes. Aucun remplacement nécessaire — juste des capteurs intelligents qui transforment votre usine en opération data-driven." },
    features: {
      realtime: { title: "Surveillance en Temps Réel", desc: "Suivez les RPM, température, vibration et production de chaque machine en direct sur un seul tableau de bord." },
      predictive: { title: "Alertes Prédictives", desc: "L'IA détecte les anomalies avant qu'elles ne causent des pannes. Recevez des alertes par SMS ou email avec des actions recommandées." },
      reports: { title: "Rapports Automatisés", desc: "Rapports d'efficacité quotidiens, hebdomadaires ou mensuels générés automatiquement. Exportez en PDF et partagez instantanément." },
      maintenance: { title: "Planificateur de Maintenance", desc: "Planifiez la maintenance préventive sur la base de données d'utilisation réelles. Réduisez les arrêts non planifiés jusqu'à 40%." },
      analytics: { title: "Analytiques Avancées", desc: "Visualisez les KPIs de production, l'efficacité et les métriques qualité avec des graphiques interactifs." },
      iot: { title: "Intégration IoT", desc: "Compatible avec les machines existantes. Installez des capteurs non invasifs en quelques heures sans arrêter la production." }
    },
    howWorks: { eyebrow: "Le processus", title: "Opérationnel\nen 3 étapes" },
    steps: {
      s1: { title: "Installer les Capteurs", desc: "Nos techniciens installent des capteurs IoT non invasifs sur vos machines existantes. Zéro temps d'arrêt — votre usine continue de fonctionner." },
      s2: { title: "Connectez-vous à la Plateforme", desc: "Les données circulent en temps réel vers votre tableau de bord DyeTex. Consultez l'état de chaque machine depuis n'importe quel appareil." },
      s3: { title: "Agissez avec Intelligence", desc: "Recevez des alertes prédictives, planifiez la maintenance et prenez des décisions basées sur les données — avant qu'un seul point ne soit perdu." }
    },
    team: { eyebrow: "Les personnes", title: "Créé par des ingénieurs,\npour des ingénieurs", desc: "Nous sommes une équipe multidisciplinaire d'ingénieurs logiciels, de spécialistes IoT et de vétérans de l'industrie textile basés à Lima, Pérou.", v1: "Approche centrée sur l'industrie", v2: "Déploiements réels de capteurs", v3: "Itération continue avec les clients" },
    mission: { title: "Mission", text: "Fournir aux entreprises textiles des solutions efficaces qui optimisent les performances des machines grâce à une surveillance en temps réel, augmentant la productivité et réduisant les temps d'arrêt." },
    vision: { title: "Vision", text: "Devenir la plateforme leader pour l'industrie textile, transformant la gestion des machines et des processus de production, contribuant à la croissance industrielle en Amérique latine." },
    product: { eyebrow: "La plateforme", title: "Chaque écran conçu\npour l'atelier", desc: "DyeTex stimule l'efficacité opérationnelle dans l'industrie textile grâce à une technologie avancée. Surveillance en temps réel, alertes intelligentes et rapports détaillés." },
    pricing: { eyebrow: "Forfaits", title: "Pour chaque usine", desc: "Commencez à surveiller vos machines aujourd'hui. Évoluez selon votre opération.", period: "/ mois", popular: "Le Plus Populaire", start: "Commencer", contact: "Contacter les Ventes", custom: "Personnalisé",
      free: { name: "Starter", desc: "Idéal pour tester la surveillance en temps réel dans une petite usine.", f1: "Jusqu'à 5 machines", f2: "Tableau de bord en temps réel", f3: "Alertes basiques", f4: "Historique 7 jours", f5: "Support par email" },
      pro: { name: "Pro", desc: "Pour les usines avec plusieurs lignes nécessitant une visibilité complète.", f1: "Machines illimitées", f2: "Alertes prédictives IA", f3: "Rapports PDF automatiques", f4: "Planificateur de maintenance", f5: "Analytiques avancées", f6: "Accès app mobile", f7: "Support prioritaire", f8: "Historique 1 an" },
      ent: { name: "Entreprise", desc: "Pour les grandes usines nécessitant une infrastructure dédiée.", f1: "Tout du plan Pro", f2: "Déploiement personnalisé", f3: "Option on-premise", f4: "Garantie SLA", f5: "Gestionnaire de compte dédié" }
    },
    cta: { eyebrow: "Restez en avance", title: "Transformez votre usine\nen installation intelligente", desc: "Rejoignez plus de 200 usines textiles qui réduisent déjà les arrêts avec DyeTex.", placeholder: "votre@email.com", subscribe: "Accès Anticipé", note: "Pas de spam. Désabonnez-vous à tout moment.", success: "Vous êtes sur la liste ! Nous vous contacterons bientôt." },
    footer: { tagline: "Surveillance intelligente pour machines textiles.", product: "Produit", company: "Entreprise", getInTouch: "Nous Contacter", contact: "Contact", privacy: "Politique de Confidentialité", terms: "Conditions d'Utilisation", pricing: "Forfaits", made: "Fait à Lima, Pérou 🇵🇪" },
    chat: { status: "En ligne · DyeTex IA", greeting: "Bonjour ! Je suis Clara, l'assistante IA de DyeTex. Comment puis-je vous aider ?", placeholder: "Posez votre question...", s1: "Avantages", s2: "Contact", s3: "Ce que ça surveille", s4: "Rapports", s5: "Notre adresse", s6: "Tarifs" }
  },

  pt: {
    nav: { solutions: "Soluções", howWorks: "Como Funciona", team: "A Equipe", product: "Produto", login: "Entrar" },
    hero: { badge: "Inteligência Têxtil com IoT", title1: "Máquinas que", title2: "transformam qualidade", title3: "em cada ponto.", desc: "Monitore, antecipe e responda antes que uma falha ocorra.\nDigitalize sua planta têxtil hoje.", cta: "Solicitar Demo", watch: "Ver como funciona" },
    stats: { downtime: "Redução de paradas", uptime: "Disponibilidade", alert: "Resposta de alertas" },
    solutions: { eyebrow: "O que resolvemos", title: "Inteligência industrial\npara cada tear", desc: "Nossa plataforma conecta diretamente às suas máquinas existentes. Sem substituições — apenas sensores inteligentes que transformam sua planta em operação orientada por dados." },
    features: {
      realtime: { title: "Monitoramento em Tempo Real", desc: "Rastreie RPM, temperatura, vibração e produção de cada máquina ao vivo em um único painel." },
      predictive: { title: "Alertas Preditivos", desc: "A IA detecta anomalias antes que causem falhas. Receba alertas por SMS ou e-mail com ações recomendadas." },
      reports: { title: "Relatórios Automatizados", desc: "Relatórios de eficiência diários, semanais ou mensais gerados automaticamente. Exporte para PDF e compartilhe." },
      maintenance: { title: "Agendador de Manutenção", desc: "Planeje manutenção preventiva com base em dados reais. Reduza paradas não planejadas em até 40%." },
      analytics: { title: "Análises Avançadas", desc: "Visualize KPIs de produção, eficiência e métricas de qualidade com gráficos interativos e mapas de calor." },
      iot: { title: "Integração IoT", desc: "Compatível com maquinário existente. Instale sensores não invasivos em horas sem parar a produção." }
    },
    howWorks: { eyebrow: "O processo", title: "Operacional\nem 3 etapas" },
    steps: {
      s1: { title: "Instale Sensores Inteligentes", desc: "Nossos técnicos instalam sensores IoT não invasivos nas suas máquinas existentes. Zero tempo de inatividade — sua planta continua funcionando." },
      s2: { title: "Conecte-se à Plataforma", desc: "Os dados fluem em tempo real para o seu painel DyeTex. Veja o status de cada máquina de qualquer dispositivo." },
      s3: { title: "Aja com Inteligência", desc: "Receba alertas preditivos, agende manutenção e tome decisões baseadas em dados — antes de perder um único ponto." }
    },
    team: { eyebrow: "As pessoas", title: "Criado por engenheiros,\npara engenheiros", desc: "Somos uma equipe multidisciplinar de engenheiros de software, especialistas em IoT e veteranos da indústria têxtil sediados em Lima, Peru.", v1: "Pensamento centrado na indústria", v2: "Implantações reais de sensores", v3: "Iteração contínua com clientes" },
    mission: { title: "Missão", text: "Fornecer às empresas têxteis soluções eficientes que otimizem o desempenho das máquinas por meio do monitoramento em tempo real, aumentando a produtividade e reduzindo o tempo de inatividade." },
    vision: { title: "Visão", text: "Tornar-se a plataforma líder para a indústria têxtil, transformando o gerenciamento de maquinário e processos de produção, contribuindo para o crescimento industrial na América Latina." },
    product: { eyebrow: "A plataforma", title: "Cada tela criada\npara o chão de fábrica", desc: "A DyeTex impulsiona a eficiência operacional na indústria têxtil por meio de tecnologia avançada. Monitoramento em tempo real, alertas inteligentes e relatórios detalhados." },
    pricing: { eyebrow: "Planos", title: "Para cada planta", desc: "Comece a monitorar suas máquinas hoje. Escale conforme sua operação cresce.", period: "/ mês", popular: "Mais Popular", start: "Começar", contact: "Falar com Vendas", custom: "Personalizado",
      free: { name: "Starter", desc: "Ideal para testar o monitoramento em tempo real em uma planta pequena.", f1: "Até 5 máquinas", f2: "Painel em tempo real", f3: "Alertas básicos", f4: "Histórico de 7 dias", f5: "Suporte por e-mail" },
      pro: { name: "Pro", desc: "Para plantas com múltiplas linhas e equipes que precisam de visibilidade total.", f1: "Máquinas ilimitadas", f2: "Alertas preditivos com IA", f3: "Relatórios PDF automáticos", f4: "Agendador de manutenção", f5: "Análises avançadas", f6: "Acesso ao app móvel", f7: "Suporte prioritário", f8: "Histórico de 1 ano" },
      ent: { name: "Empresarial", desc: "Para grandes plantas e grupos têxteis que precisam de infraestrutura dedicada.", f1: "Tudo do plano Pro", f2: "Implantação personalizada de sensores", f3: "Opção on-premise", f4: "Garantia de SLA", f5: "Gerente de conta dedicado" }
    },
    cta: { eyebrow: "Fique à frente", title: "Transforme sua fábrica\nem uma planta inteligente", desc: "Junte-se a mais de 200 plantas têxteis que já reduzem paradas com DyeTex.", placeholder: "seu@email.com", subscribe: "Obter Acesso Antecipado", note: "Sem spam. Cancele a qualquer momento.", success: "Você está na lista! Entraremos em contato em breve." },
    footer: { tagline: "Monitoramento inteligente para maquinário têxtil.", product: "Produto", company: "Empresa", getInTouch: "Fale Conosco", contact: "Contato", privacy: "Política de Privacidade", terms: "Termos de Uso", pricing: "Planos", made: "Feito em Lima, Peru 🇵🇪" },
    chat: { status: "Online · DyeTex IA", greeting: "Olá! Sou a Clara, assistente IA da DyeTex. Como posso ajudar você hoje?", placeholder: "Pergunte-me algo...", s1: "Benefícios", s2: "Contato", s3: "O que monitora", s4: "Relatórios", s5: "Nossa localização", s6: "Preços" }
  }
};

// ── i18n engine ──
let currentLang = 'en';

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  currentLang = lang;

  // Text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = getNestedKey(t, key);
    if (val !== undefined) el.innerHTML = val.replace(/\n/g, '<br>');
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = getNestedKey(t, key);
    if (val) el.placeholder = val;
  });

  // Update lang button
  const btn = document.getElementById('currentLang');
  if (btn) btn.textContent = lang.toUpperCase();

  // Chat suggestions
  updateChatSuggestions();

  // Store
  localStorage.setItem('dyetex-lang', lang);
}

function getNestedKey(obj, path) {
  return path.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);
}

function updateChatSuggestions() {
  // Re-render suggestion chips with current language
  const chips = document.querySelectorAll('.suggestion-chip');
  const t = TRANSLATIONS[currentLang];
  chips.forEach(chip => {
    const key = chip.getAttribute('data-i18n');
    if (key) {
      const val = getNestedKey(t, key);
      if (val) chip.textContent = val;
    }
  });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('dyetex-lang') || 'en';
  applyTranslations(saved);

  // Lang dropdown
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('open');
    });

    document.addEventListener('click', () => langDropdown.classList.remove('open'));

    langDropdown.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        applyTranslations(btn.getAttribute('data-lang'));
        langDropdown.classList.remove('open');
      });
    });
  }
});

// Expose for other scripts
window.DyeTexI18n = { translate: applyTranslations, get: (key) => getNestedKey(TRANSLATIONS[currentLang], key) };