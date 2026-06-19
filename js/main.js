/* ============================================
   DyeTex - Main JS (rediseñado)
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- STICKY NAV ---------- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('sticky', window.scrollY > 30);
  });

  /* ---------- MOBILE MENU ---------- */
  const navToggle = document.querySelector('.bar-menu');
  const navMenu = document.querySelector('.nav-links-tg');
  navToggle?.addEventListener('click', () => navMenu.classList.toggle('open'));
  document.querySelectorAll('.nav-links-tg a').forEach(a => {
    a.addEventListener('click', () => navMenu.classList.remove('open'));
  });

  /* ---------- LANGUAGE SWITCHER ---------- */
  const btnLanguageBox = document.querySelector('.arrow-language');
  const boxLanguageSelect = document.querySelector('.languageBox');
  const langButtons = document.querySelectorAll('[data-language]');
  const textsToChange = document.querySelectorAll('[data-section]');
  const lngText = document.querySelector('.changeLang');

  btnLanguageBox?.addEventListener('click', (e) => {
    e.stopPropagation();
    boxLanguageSelect.classList.toggle('show');
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.language-switcher-wrap')) {
      boxLanguageSelect.classList.remove('show');
    }
  });

  const loadLanguage = async (lang) => {
    try {
      const res = await fetch(`i18n/${lang}.json`);
      const data = await res.json();
      textsToChange.forEach(elem => {
        const section = elem.dataset.section;
        const value = elem.dataset.value;
        if (data[section] && data[section][value]) {
          elem.innerHTML = data[section][value];
        }
      });
      document.documentElement.lang = lang;
      lngText.textContent = lang.toUpperCase();
      localStorage.setItem('dytex-lang', lang);
    } catch (err) {
      console.error('Error loading language:', err);
    }
  };

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      loadLanguage(btn.dataset.language);
      boxLanguageSelect.classList.remove('show');
    });
  });

  // Load saved language or default
  const savedLang = localStorage.getItem('dytex-lang') || 'en';
  loadLanguage(savedLang);

  /* ---------- SCROLL REVEAL ANIMATIONS ---------- */
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('active'), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  revealElements.forEach(el => revealObserver.observe(el));

  /* ---------- SOLUTION CAROUSEL (duplicate for infinite loop) ---------- */
  const track = document.querySelector('.carousel-cards');
  if (track) track.innerHTML += track.innerHTML;

  /* ---------- APP CAROUSEL (fotos movibles) ---------- */
  const $items = document.querySelectorAll('.carousel-item');
  if ($items.length > 0) {
    let progress = 50, active = 0, isDown = false, startX = 0;
    const speedWheel = 0.02, speedDrag = -0.1;
    const getZindex = (array, index) =>
      array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i));

    const displayItems = (item, index, active) => {
      const zIndex = getZindex([...$items], active)[index];
      item.style.setProperty('--zIndex', zIndex);
      item.style.setProperty('--active', (index - active) / $items.length);
    };
    const animate = () => {
      progress = Math.max(0, Math.min(progress, 100));
      active = Math.floor(progress / 100 * ($items.length - 1));
      $items.forEach((item, index) => displayItems(item, index, active));
    };
    animate();
    $items.forEach((item, i) => {
      item.addEventListener('click', () => {
        progress = (i / $items.length) * 100 + 10;
        animate();
      });
    });
    const handleWheel = e => { progress += e.deltaY * speedWheel; animate(); };
    const handleMouseMove = e => {
      if (!isDown) return;
      const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      progress += (x - startX) * speedDrag; startX = x; animate();
    };
    const handleMouseDown = e => { isDown = true; startX = e.clientX || (e.touches && e.touches[0].clientX) || 0; };
    const handleMouseUp = () => isDown = false;
    document.addEventListener('wheel', handleWheel, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchstart', handleMouseDown, { passive: true });
    document.addEventListener('touchmove', handleMouseMove, { passive: true });
    document.addEventListener('touchend', handleMouseUp);
  }

  /* ---------- SUBSCRIBE FORM ---------- */
  const subscribeForm = document.getElementById('subscribeForm');
  subscribeForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('subscribeEmail').value;
    const btn = subscribeForm.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = '✓ Subscribed!';
    btn.style.background = '#10b981';
    console.log('New subscriber:', email);
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      subscribeForm.reset();
    }, 2500);
  });

  /* ============================================
     AI ASSISTANT (Clara) - Mejorado
     ============================================ */
  const vaIcon = document.getElementById('vaIcon');
  const messageBox = document.getElementById('messageBox');
  const closeChat = document.getElementById('closeChat');
  const maskAi = document.getElementById('maskAi');
  const sendButton = document.getElementById('sendButton');
  const txtWriter = document.getElementById('txtWriter');
  const claraTalksBox = document.getElementById('claraTalksBox');
  const suggestedActions = document.getElementById('suggestedActions');

  const openChat = () => {
    messageBox.classList.add('open');
    maskAi.classList.add('show');
    setTimeout(() => txtWriter.focus(), 300);
  };
  const closeChatFn = () => {
    messageBox.classList.remove('open');
    maskAi.classList.remove('show');
  };

  vaIcon.addEventListener('click', openChat);
  closeChat.addEventListener('click', closeChatFn);
  maskAi.addEventListener('click', closeChatFn);

  // Bot response logic (multilingual-aware via simple keyword matching)
  const chatBox = (sentence) => {
    const s = sentence.toLowerCase().trim();
    let final = '';

    if (/(hello|hi|hola|bonjour|olá|oi)/.test(s)) {
      final = "Hello! 👋 How can I assist you today?";
    } else if (s.includes('location') || s.includes('donde') || s.includes('où') || s.includes('onde')) {
      final = "We are located at Av. de la Marina 2810, San Miguel, Lima - Perú.";
    } else if (s.includes('contact') || s.includes('email') || s.includes('phone')) {
      final = "You can reach us at supportintex@gmail.com or +51 999 999 999.";
    } else if (s.includes('benefit')) {
      final = "Benefits include: increased efficiency, reduced downtime, improved production quality. Our solution integrates with your existing machines using IoT sensors — no replacement needed. 🚀";
    } else if (s.includes('report')) {
      final = "DyeTex generates automatic reports on efficiency, output per hour, fault history, and maintenance schedules. 📊";
    } else if (s.includes('monitor') || s.includes('machine')) {
      final = "Yes! We monitor machines in real time, providing up-to-date info on performance and status. ⚙️";
    } else if (s.includes('company') || s.includes('offer') || s.includes('service')) {
      final = "We provide innovative IoT solutions for textile machinery monitoring, maintenance, and analytics.";
    } else if (s.includes('price') || s.includes('plan') || s.includes('cost')) {
      final = "We offer Free ($0), Pro ($19/mo) and Enterprise (custom) plans. Check the Pricing section above! 💎";
    } else {
      final = "I'm sorry, I didn't quite get that. I can help with: company info, services, location, contact, benefits, reports, monitoring, and pricing. 🤖";
    }
    return final;
  };

  const createHumanMessage = (msg) => {
    const div = document.createElement('div');
    div.className = 'humanTalksCont';
    const inner = document.createElement('div');
    inner.className = 'humanMessage';
    inner.textContent = msg;
    div.appendChild(inner);
    claraTalksBox.appendChild(div);
    claraTalksBox.scrollTop = claraTalksBox.scrollHeight;
  };

  const createTypingIndicator = () => {
    const div = document.createElement('div');
    div.className = 'claraTalksCont typing-wrap';
    div.innerHTML = `
      <div class="vaImgProfile"><img class="imgVA" src="Img/Clara.png" alt="Clara"></div>
      <div class="typing-indicator"><span></span><span></span><span></span></div>
    `;
    claraTalksBox.appendChild(div);
    claraTalksBox.scrollTop = claraTalksBox.scrollHeight;
    return div;
  };

  const createBotMessage = (msg) => {
    const div = document.createElement('div');
    div.className = 'claraTalksCont';
    div.innerHTML = `
      <div class="vaImgProfile"><img class="imgVA" src="Img/Clara.png" alt="Clara"></div>
      <div class="vaMessage">${msg}</div>
    `;
    claraTalksBox.appendChild(div);
    claraTalksBox.scrollTop = claraTalksBox.scrollHeight;
  };

  const sendMessage = (msg) => {
    if (!msg || !msg.trim()) return;
    createHumanMessage(msg);
    suggestedActions.style.display = 'none';

    const typing = createTypingIndicator();
    setTimeout(() => {
      typing.remove();
      createBotMessage(chatBox(msg));
    }, 800 + Math.random() * 600);
  };

  sendButton.addEventListener('click', () => {
    sendMessage(txtWriter.value);
    txtWriter.value = '';
  });

  txtWriter.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage(txtWriter.value);
      txtWriter.value = '';
    }
  });

  // Suggested action chips
  document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      sendMessage(chip.dataset.msg);
    });
  });

  // Auto-open chat after 6 seconds (once per session)
  if (!sessionStorage.getItem('dytex-chat-shown')) {
    setTimeout(() => {
      if (!messageBox.classList.contains('open')) {
        vaIcon.style.animation = 'bounce 0.6s 3';
      }
    }, 6000);
    sessionStorage.setItem('dytex-chat-shown', '1');
  }
});

/* Bounce keyframes injected */
const style = document.createElement('style');
style.textContent = `@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}`;
document.head.appendChild(style);