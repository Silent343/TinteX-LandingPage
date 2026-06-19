document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll(".reveal");
    
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Opcional: observer.unobserve(entry.target); para que anime solo una vez
            }
        });
    };

    const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
    
    revealElements.forEach(el => revealObserver.observe(el));


    // --- 2. Multimodal AI Chat Logic ---
    const chatToggle = document.getElementById("chatToggle");
    const chatPanel = document.getElementById("chatPanel");
    const closeChat = document.getElementById("closeChat");
    const sendBtn = document.getElementById("sendBtn");
    const chatInput = document.getElementById("chatInput");
    const chatMessages = document.getElementById("chatMessages");

    // Abrir/Cerrar
    chatToggle.addEventListener("click", () => chatPanel.classList.toggle("active"));
    closeChat.addEventListener("click", () => chatPanel.classList.remove("active"));

    // Auto-resize del textarea
    chatInput.addEventListener("input", function() {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
    });

    // Enviar mensaje
    const sendMessage = () => {
        const text = chatInput.value.trim();
        if (!text) return;

        // Crear burbuja del usuario
        const userMsg = document.createElement("div");
        userMsg.className = "message human";
        userMsg.innerHTML = `<div class="bubble">${text}</div>`;
        chatMessages.appendChild(userMsg);

        // Limpiar input
        chatInput.value = "";
        chatInput.style.height = "auto";
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simular respuesta IA
        setTimeout(() => {
            const aiMsg = document.createElement("div");
            aiMsg.className = "message ai";
            aiMsg.innerHTML = `
                <img src="Img/Clara.png" alt="AI" onerror="this.src='https://via.placeholder.com/30'">
                <div class="bubble">That's an interesting question about your machinery. Let me analyze that for you...</div>
            `;
            chatMessages.appendChild(aiMsg);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    };

    sendBtn.addEventListener("click", sendMessage);
    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });


    // --- 3. Internalization (i18n) Simple ---
    const translations = {
        en: {
            nav_solutions: "Solutions", nav_pricing: "Pricing", nav_start: "Get Started",
            hero_title: "Machines that transform quality into every stitch.",
            hero_subtitle: "Monitor, anticipate, and respond before a failure occurs. Digitize your plant today.",
            hero_cta1: "Subscribe Now", hero_cta2: "Learn More",
            sol_title: "Why choose DyeTex?",
            sol_1_title: "Real-time Monitoring", sol_1_desc: "Track efficiency and machine performance with extreme precision, instantly.",
            price_title: "Plans made for every factory",
            price_free: "Free", price_pro: "Pro", cta_title: "Ready to transform your production?"
        },
        fr: {
            nav_solutions: "Solutions", nav_pricing: "Tarifs", nav_start: "Commencer",
            hero_title: "Des machines qui transforment la qualité à chaque point.",
            hero_subtitle: "Surveillez, anticipez et répondez avant qu'une panne ne survienne. Numérisez votre usine aujourd'hui.",
            hero_cta1: "S'abonner", hero_cta2: "En savoir plus",
            sol_title: "Pourquoi choisir DyeTex?",
            sol_1_title: "Surveillance en temps réel", sol_1_desc: "Suivez l'efficacité et les performances des machines avec une précision extrême.",
            price_title: "Des plans pour chaque usine",
            price_free: "Gratuit", price_pro: "Pro", cta_title: "Prêt à transformer votre production?"
        },
        pt: {
            nav_solutions: "Soluções", nav_pricing: "Preços", nav_start: "Começar",
            hero_title: "Máquinas que transformam a qualidade em cada ponto.",
            hero_subtitle: "Monitore, antecipe e responda antes que ocorra uma falha. Digitalize sua fábrica hoje.",
            hero_cta1: "Inscreva-se", hero_cta2: "Saiba Mais",
            sol_title: "Por que escolher DyeTex?",
            sol_1_title: "Monitoramento em tempo real", sol_1_desc: "Acompanhe a eficiência e o desempenho das máquinas com extrema precisão.",
            price_title: "Planos feitos para cada fábrica",
            price_free: "Livre", price_pro: "Pro", cta_title: "Pronto para transformar sua produção?"
        }
    };

    window.changeLang = function(lang) {
        document.querySelector(".active-lang").innerText = lang.toUpperCase();
        const elements = document.querySelectorAll("[data-i18n]");
        
        elements.forEach(el => {
            const key = el.getAttribute("data-i18n");
            if(translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });
    };
});