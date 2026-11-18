/**
 * SAHIL BEACH HUT - WATER SPORTS & JET SKI BOOKING ENGINE
 * Dynamic Water Wave Simulation, Ambient Ocean Synth,
 * Real-time Pricing Calculator, WhatsApp Booking, and Digital Boarding Pass
 */

document.addEventListener('DOMContentLoaded', () => {
  initWaterCanvas();
  initBubbles();
  initOceanSound();
  initPricingToggle();
  initGallery();
  initBookingCalculator();
  initAccordion();
  initNavbarScroll();
  initMobileNav();
});

/* ===================================================================
   1. DYNAMIC WATER WAVE CANVAS (HERO SECTION)
   =================================================================== */
function initWaterCanvas() {
  const canvas = document.getElementById('water-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = 160);

  let step = 0;
  let mouse = { x: width / 2, y: height / 2, active: false };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = 160;
  });

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  const waves = [
    { amplitude: 18, frequency: 0.012, speed: 0.035, color: 'rgba(2, 132, 199, 0.45)', offset: 25 },
    { amplitude: 22, frequency: 0.018, speed: 0.025, color: 'rgba(0, 240, 255, 0.35)', offset: 35 },
    { amplitude: 14, frequency: 0.022, speed: 0.045, color: 'rgba(4, 18, 41, 0.95)', offset: 45 }
  ];

  function draw() {
    ctx.clearRect(0, 0, width, height);
    step += 0.8;

    waves.forEach((wave, idx) => {
      ctx.beginPath();
      ctx.moveTo(0, height);

      for (let x = 0; x <= width; x += 6) {
        let mouseInfluence = 0;
        if (mouse.active) {
          const dist = Math.abs(x - mouse.x);
          if (dist < 120) {
            mouseInfluence = Math.sin((dist / 120) * Math.PI) * 16;
          }
        }

        const y =
          height -
          wave.offset +
          Math.sin(x * wave.frequency + step * wave.speed + idx) * wave.amplitude +
          Math.cos(x * 0.006 + step * 0.02) * 8 +
          mouseInfluence;

        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fillStyle = wave.color;
      ctx.fill();

      // Draw water foam on top edge of front wave
      if (idx === 1) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 1.8;
        ctx.stroke();
      }
    });

    requestAnimationFrame(draw);
  }

  draw();
}

/* ===================================================================
   2. FLOATING WATER BUBBLES GENERATOR
   =================================================================== */
function initBubbles() {
  const container = document.querySelector('.water-bubbles-bg');
  if (!container) return;

  const bubbleCount = 20;
  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const size = Math.random() * 22 + 8;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 8 + 10}s`;
    bubble.style.animationDelay = `${Math.random() * 6}s`;
    container.appendChild(bubble);
  }
}

/* ===================================================================
   3. AMBIENT OCEAN SOUND SYNTHESIZER (WEB AUDIO API)
   Generates authentic soothing ocean surf without requiring audio files
   =================================================================== */
function initOceanSound() {
  const toggleBtn = document.getElementById('sound-toggle');
  if (!toggleBtn) return;

  let audioCtx = null;
  let isPlaying = false;
  let noiseNode = null;
  let filterNode = null;
  let gainNode = null;
  let lfoNode = null;
  let lfoGain = null;

  function createOceanSound() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();

    // 5 seconds pink noise buffer
    const bufferSize = audioCtx.sampleRate * 5;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      output[i] *= 0.11;
      b6 = white * 0.115926;
    }

    noiseNode = audioCtx.createBufferSource();
    noiseNode.buffer = noiseBuffer;
    noiseNode.loop = true;

    // Lowpass filter simulating water muffling & wave swells
    filterNode = audioCtx.createBiquadFilter();
    filterNode.type = 'lowpass';
    filterNode.frequency.setValueAtTime(320, audioCtx.currentTime);

    // LFO for periodic wave swell motion (approx 0.12 Hz = 8 second wave cycle)
    lfoNode = audioCtx.createOscillator();
    lfoNode.frequency.setValueAtTime(0.12, audioCtx.currentTime);

    lfoGain = audioCtx.createGain();
    lfoGain.gain.setValueAtTime(260, audioCtx.currentTime);

    lfoNode.connect(lfoGain);
    lfoGain.connect(filterNode.frequency);

    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.08, audioCtx.currentTime);

    noiseNode.connect(filterNode);
    filterNode.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    noiseNode.start();
    lfoNode.start();
  }

  toggleBtn.addEventListener('click', () => {
    if (!isPlaying) {
      if (!audioCtx) {
        createOceanSound();
      } else if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      isPlaying = true;
      toggleBtn.classList.add('playing');
      toggleBtn.querySelector('.sound-label').textContent = 'Ocean Waves: ON';
    } else {
      if (audioCtx) {
        audioCtx.suspend();
      }
      isPlaying = false;
      toggleBtn.classList.remove('playing');
      toggleBtn.querySelector('.sound-label').textContent = 'Ocean Waves: OFF';
    }
  });
}

/* ===================================================================
   4. INTERACTIVE PRICING SWITCHER (1 HOUR VS FULL DAY)
   =================================================================== */
const packageData = {
  standard: {
    name: 'Standard Package',
    hp: '700 HP Jet Ski 🌊🏊🏻‍♂️',
    hourlyPrice: 20000,
    fullDayPrice: 80000,
    lifeguards: 'Safety briefing & On-site team',
    description: 'Perfect for beginners, couples & thrill seekers looking for high-octane fun.'
  },
  premium: {
    name: 'Premium Package',
    hp: '1100 HP Jet Ski + 1 Lifeguard ⭐',
    hourlyPrice: 25000,
    fullDayPrice: 100000,
    lifeguards: 'Includes 1 Dedicated Lifeguard',
    description: 'Our most popular choice! High-speed performance with dedicated escort.'
  },
  vip: {
    name: 'VIP Luxury Package',
    hp: '1800 HP Jet Ski + 2 Lifeguards 👑',
    hourlyPrice: 30000,
    fullDayPrice: 120000,
    lifeguards: 'Includes 2 Dedicated Lifeguards',
    description: 'Maximum adrenaline! Monster 1800 HP watercraft with double lifeguard escort.'
  }
};

let currentPricingMode = 'hourly'; // 'hourly' or 'fullday'

function initPricingToggle() {
  const toggleBtns = document.querySelectorAll('.pricing-switcher .toggle-btn');
  const priceDisplayStandard = document.getElementById('price-standard');
  const priceDisplayPremium = document.getElementById('price-premium');
  const priceDisplayVip = document.getElementById('price-vip');
  const periodDisplays = document.querySelectorAll('.price-period-label');

  if (!toggleBtns.length) return;

  function updatePrices(mode) {
    currentPricingMode = mode;

    toggleBtns.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.duration === mode);
    });

    const isHourly = mode === 'hourly';

    if (priceDisplayStandard) {
      animateValue(priceDisplayStandard, isHourly ? 20000 : 80000);
    }
    if (priceDisplayPremium) {
      animateValue(priceDisplayPremium, isHourly ? 25000 : 100000);
    }
    if (priceDisplayVip) {
      animateValue(priceDisplayVip, isHourly ? 30000 : 120000);
    }

    periodDisplays.forEach((el) => {
      el.textContent = isHourly ? '/ 1 Hour Ride' : '/ Full Day Package';
    });
  }

  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      updatePrices(btn.dataset.duration);
    });
  });
}

function animateValue(element, target) {
  const formatted = Number(target).toLocaleString('en-PK');
  element.style.transform = 'scale(0.85)';
  element.style.opacity = '0.5';
  setTimeout(() => {
    element.textContent = formatted;
    element.style.transform = 'scale(1)';
    element.style.opacity = '1';
  }, 150);
}

/* ===================================================================
   5. REAL FLEET GALLERY & LIGHTBOX
   =================================================================== */
function initGallery() {
  const filterBtns = document.querySelectorAll('.gallery-filter-tabs .filter-pill');
  const galleryCards = document.querySelectorAll('.gallery-card');
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  if (!galleryCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      galleryCards.forEach((card) => {
        if (filter === 'all' || card.dataset.category.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Lightbox click
  galleryCards.forEach((card) => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.querySelector('h4') ? card.querySelector('h4').textContent : '';
      const sub = card.querySelector('span') ? card.querySelector('span').textContent : '';

      if (lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        if (lightboxCaption) {
          lightboxCaption.innerHTML = `<strong>${title}</strong> — ${sub}`;
        }
        lightbox.classList.add('active');
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }
}

/* ===================================================================
   6. INTERACTIVE BOOKING ENGINE & CALCULATOR
   =================================================================== */
function initBookingCalculator() {
  // Elements
  const locationCards = document.querySelectorAll('.option-location');
  const packageCards = document.querySelectorAll('.option-package');
  const durationCards = document.querySelectorAll('.option-duration');
  const dateInput = document.getElementById('booking-date');
  const timeSelect = document.getElementById('booking-time');
  const skisSelect = document.getElementById('booking-skis');
  const ridersSelect = document.getElementById('booking-riders');
  const addonCheckboxes = document.querySelectorAll('.addon-checkbox');

  // Customer Form Fields
  const nameInput = document.getElementById('guest-name');
  const phoneInput = document.getElementById('guest-phone');
  const emailInput = document.getElementById('guest-email');
  const notesInput = document.getElementById('guest-notes');
  const soloWaiverCheck = document.getElementById('solo-waiver-check');

  // Summary Elements
  const sumLocation = document.getElementById('sum-location');
  const sumPackage = document.getElementById('sum-package');
  const sumDuration = document.getElementById('sum-duration');
  const sumLifeguards = document.getElementById('sum-lifeguards');
  const sumDateTime = document.getElementById('sum-datetime');
  const sumBasePrice = document.getElementById('sum-base-price');
  const sumAddonsPrice = document.getElementById('sum-addons-price');
  const sumTotalPrice = document.getElementById('sum-total-price');

  // Action Buttons
  const btnWhatsApp = document.getElementById('btn-book-whatsapp');
  const btnTicket = document.getElementById('btn-get-ticket');

  // Current Booking State
  const state = {
    location: 'Hawksbay Beach Karachi',
    packageKey: 'premium',
    duration: '1hour', // '1hour' or 'fullday'
    date: '',
    timeSlot: 'Morning Breeze (09:00 AM - 10:00 AM)',
    skisCount: 1,
    ridersCount: 2,
    addons: []
  };

  // Set default min date to today
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
    state.date = today;
  }

  // Location selector
  locationCards.forEach((card) => {
    card.addEventListener('click', () => {
      locationCards.forEach((c) => c.classList.remove('selected'));
      card.classList.add('selected');
      state.location = card.dataset.location;
      recalculate();
    });
  });

  // Package selector
  packageCards.forEach((card) => {
    card.addEventListener('click', () => {
      packageCards.forEach((c) => c.classList.remove('selected'));
      card.classList.add('selected');
      state.packageKey = card.dataset.package;
      recalculate();
    });
  });

  // Duration selector
  durationCards.forEach((card) => {
    card.addEventListener('click', () => {
      durationCards.forEach((c) => c.classList.remove('selected'));
      card.classList.add('selected');
      state.duration = card.dataset.duration;
      recalculate();
    });
  });

  if (dateInput) {
    dateInput.addEventListener('change', () => {
      state.date = dateInput.value;
      recalculate();
    });
  }

  if (timeSelect) {
    timeSelect.addEventListener('change', () => {
      state.timeSlot = timeSelect.value;
      recalculate();
    });
  }

  if (skisSelect) {
    skisSelect.addEventListener('change', () => {
      state.skisCount = parseInt(skisSelect.value, 10) || 1;
      recalculate();
    });
  }

  if (ridersSelect) {
    ridersSelect.addEventListener('change', () => {
      state.ridersCount = parseInt(ridersSelect.value, 10) || 2;
      recalculate();
    });
  }

  addonCheckboxes.forEach((chk) => {
    chk.addEventListener('change', () => {
      const parentCard = chk.closest('.addon-card');
      if (parentCard) {
        parentCard.classList.toggle('selected', chk.checked);
      }
      recalculate();
    });
  });

  function recalculate() {
    const pkg = packageData[state.packageKey] || packageData.premium;
    const isFullDay = state.duration === 'fullday';
    const unitPrice = isFullDay ? pkg.fullDayPrice : pkg.hourlyPrice;
    const baseTotal = unitPrice * state.skisCount;

    // Add-ons calculation
    let addonsTotal = 0;
    state.addons = [];

    addonCheckboxes.forEach((chk) => {
      if (chk.checked) {
        const cost = parseInt(chk.dataset.price, 10) || 0;
        addonsTotal += cost;
        state.addons.push({
          name: chk.dataset.name,
          price: cost
        });
      }
    });

    const grandTotal = baseTotal + addonsTotal;

    // Update Summary UI
    if (sumLocation) sumLocation.textContent = state.location;
    if (sumPackage) sumPackage.textContent = `${pkg.name} (${pkg.hp.split(' ')[0]} HP)`;
    if (sumDuration) sumDuration.textContent = isFullDay ? 'Full Day Jet Ski Ride' : '1 Hour Jet Ski Ride';
    if (sumLifeguards) sumLifeguards.textContent = pkg.lifeguards;

    const formattedDate = state.date ? new Date(state.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Today';
    if (sumDateTime) sumDateTime.textContent = `${formattedDate} @ ${state.timeSlot.split(' ')[0]}`;

    if (sumBasePrice) sumBasePrice.textContent = `Rs. ${baseTotal.toLocaleString('en-PK')}`;
    if (sumAddonsPrice) sumAddonsPrice.textContent = `Rs. ${addonsTotal.toLocaleString('en-PK')}`;
    if (sumTotalPrice) sumTotalPrice.textContent = `Rs. ${grandTotal.toLocaleString('en-PK')}`;

    return {
      pkg,
      baseTotal,
      addonsTotal,
      grandTotal,
      isFullDay
    };
  }

  // Pre-fill / quick trigger from package cards on top
  window.selectPackageFromGrid = function(packageKey, durationKey) {
    const targetPkgCard = document.querySelector(`.option-package[data-package="${packageKey}"]`);
    if (targetPkgCard) {
      packageCards.forEach((c) => c.classList.remove('selected'));
      targetPkgCard.classList.add('selected');
      state.packageKey = packageKey;
    }

    if (durationKey) {
      const targetDurCard = document.querySelector(`.option-duration[data-duration="${durationKey}"]`);
      if (targetDurCard) {
        durationCards.forEach((c) => c.classList.remove('selected'));
        targetDurCard.classList.add('selected');
        state.duration = durationKey;
      }
    }

    recalculate();

    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // WhatsApp Button Click
  if (btnWhatsApp) {
    btnWhatsApp.addEventListener('click', (e) => {
      e.preventDefault();

      const guestName = nameInput ? nameInput.value.trim() : '';
      const guestPhone = phoneInput ? phoneInput.value.trim() : '';

      if (!guestName || !guestPhone) {
        alert('Please enter your Name and WhatsApp / Phone Number to proceed with booking.');
        if (nameInput && !nameInput.value) nameInput.focus();
        else if (phoneInput) phoneInput.focus();
        return;
      }

      if (soloWaiverCheck && !soloWaiverCheck.checked) {
        alert('Please acknowledge the Safety & Solo Ride policy checkbox before proceeding.');
        soloWaiverCheck.focus();
        return;
      }

      const calc = recalculate();
      const refCode = 'SHL-' + Math.floor(100000 + Math.random() * 900000);

      const msg = `🌊 *JET SKI BOOKING ENQUIRY - SAHIL BEACH HUT* 🌊
━━━━━━━━━━━━━━━━━━━━━
🔖 *Booking Ref:* ${refCode}
👤 *Guest Name:* ${guestName}
📱 *Phone:* ${guestPhone}
${emailInput && emailInput.value ? `📧 *Email:* ${emailInput.value.trim()}\n` : ''}
📍 *Location:* ${state.location}
🚤 *Package:* ${calc.pkg.name} (${calc.pkg.hp})
⏱ *Duration:* ${calc.isFullDay ? 'Full Day Package' : '1 Hour Thrill Ride'}
📅 *Date:* ${state.date}
⏰ *Time Slot:* ${state.timeSlot}
🔢 *Number of Skis:* ${state.skisCount} (${state.ridersCount} Riders)
🏊🏻‍♂️ *Lifeguards:* ${calc.pkg.lifeguards}
⛽ *Fuel:* 100% Included
${state.addons.length ? `➕ *Add-ons:* ${state.addons.map(a => a.name).join(', ')}\n` : ''}
💰 *TOTAL AMOUNT:* Rs. ${calc.grandTotal.toLocaleString('en-PK')}
━━━━━━━━━━━━━━━━━━━━━
💬 *Notes:* ${notesInput && notesInput.value ? notesInput.value.trim() : 'Looking forward to an awesome beach day!'}

_Sent via www.sahilbeachuts.com_`;

      const encodedMsg = encodeURIComponent(msg);
      const whatsappUrl = `https://wa.me/923091331516?text=${encodedMsg}`;
      window.open(whatsappUrl, '_blank');
    });
  }

  // Digital Ticket Button Click
  if (btnTicket) {
    btnTicket.addEventListener('click', (e) => {
      e.preventDefault();

      const guestName = nameInput ? nameInput.value.trim() : 'Valued Guest';
      const guestPhone = phoneInput ? phoneInput.value.trim() : '+92 300 0000000';

      const calc = recalculate();
      const refCode = 'SAHIL-' + Math.floor(100000 + Math.random() * 900000);

      // Populate Ticket Modal
      document.getElementById('tkt-ref').textContent = refCode;
      document.getElementById('tkt-guest').textContent = guestName;
      document.getElementById('tkt-phone').textContent = guestPhone;
      document.getElementById('tkt-pkg').textContent = calc.pkg.name;
      document.getElementById('tkt-hp').textContent = calc.pkg.hp.split(' ')[0] + ' HP';
      document.getElementById('tkt-loc').textContent = state.location.replace(' Karachi', '');
      document.getElementById('tkt-date').textContent = state.date;
      document.getElementById('tkt-slot').textContent = state.timeSlot.split('(')[0].trim();
      document.getElementById('tkt-duration').textContent = calc.isFullDay ? 'Full Day' : '1 Hour';
      document.getElementById('tkt-total').textContent = `Rs. ${calc.grandTotal.toLocaleString('en-PK')}`;

      // Draw simple QR Code on Canvas
      drawDummyQR('qr-canvas', refCode);

      // Show modal
      const ticketModal = document.getElementById('ticket-modal');
      if (ticketModal) {
        ticketModal.classList.add('active');
      }
    });
  }

  // Initialize calculation once
  recalculate();
}

/* ===================================================================
   7. QR CODE CANVAS GENERATOR (FOR BOARDING PASS)
   =================================================================== */
function drawDummyQR(canvasId, text) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = 100;
  canvas.height = 100;

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, 100, 100);

  ctx.fillStyle = '#0f172a';
  // Corner markers
  function marker(x, y) {
    ctx.fillRect(x, y, 24, 24);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x + 4, y + 4, 16, 16);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(x + 8, y + 8, 8, 8);
  }

  marker(8, 8);
  marker(68, 8);
  marker(8, 68);

  // Pseudo-random data dots based on string
  let seed = 42;
  for (let i = 0; i < text.length; i++) seed += text.charCodeAt(i);

  for (let r = 0; r < 14; r++) {
    for (let c = 0; c < 14; c++) {
      if ((r < 5 && c < 5) || (r < 5 && c > 8) || (r > 8 && c < 5)) continue;
      seed = (seed * 9301 + 49297) % 233280;
      if (seed / 233280 > 0.48) {
        ctx.fillRect(10 + c * 5.7, 10 + r * 5.7, 4.5, 4.5);
      }
    }
  }
}

// Close Ticket Modal
window.closeTicketModal = function() {
  const modal = document.getElementById('ticket-modal');
  if (modal) modal.classList.remove('active');
};

// Print Ticket
window.printTicket = function() {
  window.print();
};

/* ===================================================================
   8. ACCORDION (RULES & GUIDELINES)
   =================================================================== */
function initAccordion() {
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach((h) => {
    h.addEventListener('click', () => {
      const item = h.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.accordion-item').forEach((i) => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ===================================================================
   9. NAVBAR SCROLL EFFECT
   =================================================================== */
function initNavbarScroll() {
  const navbar = document.querySelector('.main-navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ===================================================================
   10. MOBILE NAVIGATION DRAWER
   =================================================================== */
function initMobileNav() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }
}
