// ══════════════════════════════════════════════════
// DyeTex — main.js
// Navbar · Scroll Reveal · Stats Counter · Carousel
// Chat Widget · Subscribe Form
// ══════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ─────────────────────────────────────
  // 1. NAVBAR
  // ─────────────────────────────────────
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }, { passive: true });

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('mobile-open');
  });

  // Close mobile menu on link click
  navLinks?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('mobile-open');
    });
  });

  // ─────────────────────────────────────
  // 2. SCROLL REVEAL
  // ─────────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay ? parseInt(entry.target.dataset.delay) * 120 : 0;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  // ─────────────────────────────────────
  // 3. STATS COUNTER
  // ─────────────────────────────────────
  const statNums = document.querySelectorAll('.stat-num[data-target]');

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'));
      const duration = 1800;
      const start = performance.now();

      const tick = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * ease);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      };

      requestAnimationFrame(tick);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => countObserver.observe(el));

  // ─────────────────────────────────────
  // 4. APP CAROUSEL
  // ─────────────────────────────────────
  const track   = document.getElementById('appTrack');
  const prevBtn = document.getElementById('carPrev');
  const nextBtn = document.getElementById('carNext');
  const dotsWrap = document.getElementById('carDots');
  const slides  = track?.querySelectorAll('.app-slide');

  if (track && slides?.length) {
    let current = 0;
    const total = slides.length;

    // Build dots
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'car-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });

    const dots = dotsWrap.querySelectorAll('.car-dot');

    function goTo(idx) {
      current = (idx + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    prevBtn?.addEventListener('click', () => goTo(current - 1));
    nextBtn?.addEventListener('click', () => goTo(current + 1));

    // Auto-advance
    let autoPlay = setInterval(() => goTo(current + 1), 4000);
    track.parentElement.addEventListener('mouseenter', () => clearInterval(autoPlay));
    track.parentElement.addEventListener('mouseleave', () => {
      autoPlay = setInterval(() => goTo(current + 1), 4000);
    });

    // Touch / swipe
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    });
  }

  // ─────────────────────────────────────
  // 5. SUBSCRIBE FORM
  // ─────────────────────────────────────
  const form    = document.getElementById('subscribeForm');
  const emailIn = document.getElementById('subscribeEmail');
  const success = document.getElementById('formSuccess');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailIn.value.trim();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRe.test(email)) {
      emailIn.style.borderColor = '#ef4444';
      emailIn.focus();
      setTimeout(() => { emailIn.style.borderColor = ''; }, 1500);
      return;
    }

    // Simulate submission
    const btn = form.querySelector('.subscribe-btn');
    btn.disabled = true;
    btn.style.opacity = '0.7';

    setTimeout(() => {
      form.querySelector('.form-row').style.display = 'none';
      form.querySelector('.form-note').style.display = 'none';
      success.classList.add('show');
    }, 600);
  });

  // ─────────────────────────────────────
  // 6. AI CHAT WIDGET
  // ─────────────────────────────────────
  const chatToggle   = document.getElementById('chatToggle');
  const chatPanel    = document.getElementById('chatPanel');
  const chatIcon     = document.getElementById('chatIcon');
  const chatClose    = document.getElementById('chatClose');
  const chatMinimize = document.getElementById('chatMinimize');
  const chatInput    = document.getElementById('chatInput');
  const chatSend     = document.getElementById('chatSend');
  const chatMessages = document.getElementById('chatMessages');
  const suggestions  = document.querySelectorAll('.suggestion-chip');
  let chatOpen = false;
  let suggestionsHidden = false;

  function toggleChat() {
    chatOpen = !chatOpen;
    chatPanel.classList.toggle('open', chatOpen);
    chatIcon.classList.toggle('hidden', chatOpen);
    chatClose.classList.toggle('hidden', !chatOpen);

    if (chatOpen) {
      setTimeout(() => chatInput?.focus(), 300);
      scrollChat();
    }
  }

  chatToggle?.addEventListener('click', toggleChat);
  chatMinimize?.addEventListener('click', toggleChat);

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (chatOpen && !chatPanel.contains(e.target) && !chatToggle.contains(e.target)) {
      toggleChat();
    }
  });

  function scrollChat() {
    if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function appendMessage(text, role) {
    const wrap = document.createElement('div');
    wrap.className = `chat-msg ${role}`;

    if (role === 'bot') {
      const av = document.createElement('div');
      av.className = 'msg-avatar';
      av.innerHTML = '<img src="Img/Clara.png" alt="Clara" onerror="this.parentElement.innerHTML=\'<div class=\\\"avatar-fallback-sm\\\">C</div>\'">';
      wrap.appendChild(av);
    }

    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    bubble.textContent = text;
    wrap.appendChild(bubble);
    chatMessages?.appendChild(wrap);
    scrollChat();
  }

  function showTyping() {
    const wrap = document.createElement('div');
    wrap.className = 'chat-msg bot chat-typing';
    wrap.id = 'typingIndicator';
    const av = document.createElement('div');
    av.className = 'msg-avatar';
    av.innerHTML = '<img src="Img/Clara.png" alt="Clara" onerror="this.parentElement.innerHTML=\'<div class=\\\"avatar-fallback-sm\\\">C</div>\'">';
    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble';
    bubble.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
    wrap.appendChild(av);
    wrap.appendChild(bubble);
    chatMessages?.appendChild(wrap);
    scrollChat();
  }

  function removeTyping() {
    document.getElementById('typingIndicator')?.remove();
  }

  function getBotAnswer(msg) {
    const m = msg.toLowerCase();
    const t = TRANSLATIONS[window.DyeTexI18n ? currentLangRef() : 'en'] || TRANSLATIONS['en'];

    if (m.includes('hello') || m.includes('hi') || m.includes('hola') || m.includes('bonjour') || m.includes('olá')) {
      return t.chat.greeting;
    }
    if (m.includes('benefit') || m.includes('beneficio') || m.includes('avantage') || m.includes('benefício')) {
      return 'DyeTex helps you reduce machine downtime by up to 40%, generate automated efficiency reports, receive AI-powered failure alerts, and make data-driven maintenance decisions — all from one dashboard.';
    }
    if (m.includes('contact') || m.includes('contacto')) {
      return 'You can reach us at supportintex@gmail.com or call +51 999 999 999. We are based at Av. de la Marina 2810, San Miguel, Lima — Perú.';
    }
    if (m.includes('monitor') || m.includes('surveill')) {
      return 'DyeTex monitors RPM, temperature, vibration, pressure, and output of each machine in real-time. Data is streamed live to your dashboard from IoT sensors installed directly on your equipment.';
    }
    if (m.includes('report') || m.includes('reporte') || m.includes('rapport') || m.includes('relatório')) {
      return 'The platform generates automated daily, weekly, and monthly reports covering efficiency metrics, fault history, output per hour, and maintenance records. All exportable to PDF.';
    }
    if (m.includes('location') || m.includes('ubicación') || m.includes('adresse') || m.includes('localização') || m.includes('where') || m.includes('dónde')) {
      return 'We are located at Av. de la Marina 2810, San Miguel, Lima, Perú. Our team is available remotely worldwide.';
    }
    if (m.includes('pric') || m.includes('precio') || m.includes('tarif') || m.includes('preço') || m.includes('cost') || m.includes('plan')) {
      return 'We offer 3 plans: Starter (free, up to 5 machines), Pro ($49/mo, unlimited machines + AI features), and Enterprise (custom pricing for large plants). Scroll to the Pricing section to learn more!';
    }
    if (m.includes('install') || m.includes('setup') || m.includes('configurar')) {
      return 'Installation is done by our certified technicians. We install non-invasive IoT sensors on your existing machines — no production stop needed. The full setup typically takes less than a day.';
    }
    if (m.includes('demo')) {
      return 'You can request a live demo at dytex-fn8rqq4mw-hectors-projects-a1cfc66e.vercel.app or click the "Request Demo" button on this page. Our team will reach out within 24 hours.';
    }
    if (m.includes('plant') || m.includes('planta') || m.includes('usine') || m.includes('fábrica')) {
      return 'DyeTex supports monitoring of up to 5 plants simultaneously on the Enterprise plan. Each plant has its own dedicated dashboard view with cross-plant comparison tools.';
    }
    return "I'm Clara, DyeTex's AI assistant. I can answer questions about our product features, pricing, installation, or how to contact us. What would you like to know?";
  }

  function currentLangRef() {
    return document.getElementById('currentLang')?.textContent?.toLowerCase() || 'en';
  }

  function sendMessage(text) {
    if (!text.trim()) return;

    // Hide suggestions after first interaction
    if (!suggestionsHidden) {
      document.getElementById('chatSuggestions').style.display = 'none';
      suggestionsHidden = true;
    }

    appendMessage(text, 'user');
    chatInput.value = '';

    // Typing indicator
    showTyping();

    setTimeout(() => {
      removeTyping();
      const answer = getBotAnswer(text);
      appendMessage(answer, 'bot');
    }, 900 + Math.random() * 600);
  }

  chatSend?.addEventListener('click', () => sendMessage(chatInput.value));

  chatInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(chatInput.value);
    }
  });

  suggestions?.forEach(chip => {
    chip.addEventListener('click', () => {
      const query = chip.getAttribute('data-query') || chip.textContent;
      sendMessage(query);
    });
  });

  // ─────────────────────────────────────
  // 7. SMOOTH ANCHOR SCROLL
  // ─────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = navbar ? navbar.offsetHeight + 16 : 80;
        window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
      }
    });
  });

  // ─────────────────────────────────────
  // 8. FEATURE CARD TILT (subtle)
  // ─────────────────────────────────────
  const cards = document.querySelectorAll('.feature-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 8;
      card.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

});