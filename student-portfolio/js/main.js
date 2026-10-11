/**
 * Main Application Script
 * Midnight Glassmorphism Portfolio for Gopikrishna
 * Features:
 * - Interactive Canvas Particle Hero Background with Mouse Physics
 * - Scroll-Triggered Fade-In Animations (IntersectionObserver)
 * - Full-Featured Image Lightbox Gallery (Prev/Next, Zoom, Captions)
 * - Back to Top Floating Smooth-Scroll Button
 * - Responsive Mobile Hamburger Drawer
 * - Dynamic Projects & Skills Filtering
 * - Project Details Modal & Interactive Contact Form
 */

// Global State
let currentLightboxIndex = 0;
let galleryItems = [];

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Interactive Hero Canvas
  initHeroCanvas();

  // 2. Render Dynamic Components
  renderStats();
  renderSkills('all');
  renderProjects('all');
  renderAchievements();

  // 3. Initialize Interactive Features
  setupScrollAnimations();
  setupBackToTop();
  setupMobileNav();
  setupScrollSpy();
  setupLightbox();
  setupContactForm();
  setupBoxBubbleEffect();

  // 4. Initialize Icons
  refreshIcons();
});

/* ==========================================================================
   1. Interactive Canvas Particle Background
   ========================================================================== */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 130 };
  let animationFrameId;

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
    createParticles();
  }

  function createParticles() {
    particles = [];
    // Adjust density based on screen width
    const particleCount = width < 768 ? 45 : Math.floor((width * height) / 14000);
    const colors = [
      'rgba(96, 165, 250, 0.7)',  // Blue-400
      'rgba(167, 139, 250, 0.6)', // Purple-400
      'rgba(56, 189, 248, 0.65)', // Cyan-400
      'rgba(255, 255, 255, 0.5)'  // Soft white
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.75,
        vy: (Math.random() - 0.5) * 0.75,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseRadius: Math.random() * 2 + 1
      });
    }
  }

  // Mouse interaction events
  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    } else {
      mouse.x = null;
      mouse.y = null;
    }
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener('resize', resize);
  resize();

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      // Bounce at canvas borders
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Mouse repulsion physics
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = dx / distance;
          const directionY = dy / distance;
          p.x -= directionX * force * 3;
          p.y -= directionY * force * 3;
        }
      }

      // Draw particle circle with soft glow
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.fill();
      ctx.shadowBlur = 0; // reset for performance

      // Draw constellation connection lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
        const maxDist = width < 768 ? 85 : 120;

        if (dist < maxDist) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const alpha = (1 - dist / maxDist) * 0.18;
          ctx.strokeStyle = `rgba(147, 197, 253, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   2. Scroll-Triggered Fade-In Animations
   ========================================================================== */
function setupScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   3. Back to Top Button
   ========================================================================== */
function setupBackToTop() {
  const bttBtn = document.getElementById('back-to-top');
  if (!bttBtn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 380) {
      bttBtn.classList.add('show');
    } else {
      bttBtn.classList.remove('show');
    }
  }, { passive: true });

  bttBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================================
   4. Stats Bar Rendering
   ========================================================================== */
function renderStats() {
  const container = document.getElementById('stats-grid');
  if (!container || !window.PORTFOLIO_DATA || !window.PORTFOLIO_DATA.stats) return;

  container.innerHTML = window.PORTFOLIO_DATA.stats.map((stat, i) => `
    <div class="glass-card rounded-2xl p-5 flex items-center gap-4 fade-in-scroll delay-${(i + 1) * 100}">
      <div class="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
        <i data-lucide="${stat.icon || 'star'}" class="w-6 h-6"></i>
      </div>
      <div>
        <div class="text-2xl sm:text-3xl font-black tracking-tight text-white">${stat.value}</div>
        <div class="text-xs font-semibold text-slate-300">${stat.label}</div>
        <div class="text-[11px] text-slate-500">${stat.subtext}</div>
      </div>
    </div>
  `).join('');

  refreshIcons();
}

/* ==========================================================================
   5. Skills Matrix Rendering & Filtering
   ========================================================================== */
function renderSkills(category = 'all') {
  const container = document.getElementById('skills-grid');
  if (!container || !window.PORTFOLIO_DATA || !window.PORTFOLIO_DATA.skills) return;

  const { skills } = window.PORTFOLIO_DATA;
  let itemsToRender = [];

  if (category === 'all' || category === 'programming') {
    skills.programming.forEach(item => itemsToRender.push({ ...item, group: 'Programming & C++' }));
  }
  if (category === 'all' || category === 'design') {
    skills.design.forEach(item => itemsToRender.push({ ...item, group: 'Web Design & Arts' }));
  }
  if (category === 'all' || category === 'academic') {
    skills.academic.forEach(item => itemsToRender.push({ ...item, group: 'Academic Subjects' }));
  }
  if (category === 'all' || category === 'tools') {
    skills.tools.forEach(item => itemsToRender.push({ ...item, group: 'Tools & Workflow' }));
  }

  container.innerHTML = itemsToRender.map((skill, index) => {
    return `
      <div class="glass-card rounded-2xl p-5 flex flex-col justify-between group fade-in-scroll">
        <div>
          <div class="flex items-start justify-between gap-3 mb-2">
            <div class="flex items-center gap-2.5">
              <div class="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <i data-lucide="${skill.icon || 'code'}" class="w-4 h-4"></i>
              </div>
              <div>
                <h4 class="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">${skill.name}</h4>
                <span class="text-[11px] font-mono text-slate-400">${skill.group}</span>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-mono font-medium glass-badge shrink-0">
              ${skill.level}
            </span>
          </div>
          <p class="text-xs text-slate-400 mt-2 mb-3 leading-relaxed">
            ${skill.note}
          </p>
        </div>

        <div>
          <div class="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-1.5">
            <span>Proficiency</span>
            <span>${skill.percentage}%</span>
          </div>
          <div class="skill-bar-track">
            <div class="skill-bar-progress" style="width: ${skill.percentage}%;"></div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  refreshIcons();
  setupScrollAnimations();
}

function filterSkills(category, btn) {
  const tabs = document.querySelectorAll('#skill-filter-tabs .skill-tab');
  tabs.forEach(tab => {
    tab.classList.remove('active', 'border-blue-500', 'bg-blue-500/10', 'text-blue-400');
    tab.classList.add('border-[#2a2a2a]', 'bg-transparent', 'text-slate-400');
  });

  const target = btn || (window.event && (window.event.currentTarget || window.event.target));
  if (target) {
    target.classList.add('active', 'border-blue-500', 'bg-blue-500/10', 'text-blue-400');
    target.classList.remove('border-[#2a2a2a]', 'bg-transparent', 'text-slate-400');
  }

  renderSkills(category);
}

/* ==========================================================================
   6. Projects & Image Lightbox Showcase
   ========================================================================== */
function renderProjects(category = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container || !window.PORTFOLIO_DATA || !window.PORTFOLIO_DATA.projects) return;

  const { projects } = window.PORTFOLIO_DATA;
  const filtered = category === 'all' ? projects : projects.filter(p => p.category === category);

  // Update global gallery items for lightbox indexing
  galleryItems = filtered.filter(p => p.image);

  container.innerHTML = filtered.map((p, idx) => {
    const liveLinkHtml = p.liveUrl 
      ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-xl bg-[#222222] hover:bg-[#333333] text-slate-300 hover:text-white transition-colors" title="Live Preview" aria-label="Live Demo of ${p.title}">
          <i data-lucide="external-link" class="w-4 h-4"></i>
        </a>`
      : '';

    const githubLinkHtml = p.githubUrl
      ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-xl bg-[#222222] hover:bg-[#333333] text-slate-300 hover:text-white transition-colors" title="View Source Code" aria-label="Source code of ${p.title}">
          <i data-lucide="github" class="w-4 h-4"></i>
        </a>`
      : '';

    const imageHtml = p.image ? `
      <div class="gallery-thumbnail-container mt-2 cursor-pointer group/img" onclick="openLightboxByProject('${p.id}')">
        <img src="${p.image}" alt="${p.title}" loading="lazy" class="w-full h-44 object-cover">
        <div class="gallery-overlay">
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 border border-white/20 text-xs font-semibold text-white">
            <i data-lucide="maximize-2" class="w-3.5 h-3.5 text-blue-400"></i>
            <span>View Image</span>
          </span>
        </div>
      </div>
    ` : '';

    return `
      <div class="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between group fade-in-scroll">
        <div class="space-y-3.5">
          <!-- Card Top Bar -->
          <div class="flex items-center justify-between gap-2">
            <span class="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
              ${p.badge}
            </span>
            <div class="flex items-center gap-1.5">
              ${githubLinkHtml}
              ${liveLinkHtml}
            </div>
          </div>

          <!-- Project Image Preview (Clickable for Lightbox) -->
          ${imageHtml}

          <!-- Title & Description -->
          <div>
            <h3 class="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
              ${p.title}
            </h3>
            <p class="text-xs sm:text-sm text-slate-400 mt-2 line-clamp-3 leading-relaxed">
              ${p.description}
            </p>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5 pt-1">
            ${p.tags.map(t => `
              <span class="px-2 py-0.5 rounded text-[11px] font-mono glass-badge">
                ${t}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Card Footer -->
        <div class="pt-4 mt-5 border-t border-[#2a2a2a] flex items-center justify-between">
          <span class="text-xs font-mono font-semibold text-emerald-400 flex items-center gap-1.5">
            <i data-lucide="award" class="w-3.5 h-3.5"></i>
            ${p.metrics}
          </span>
          <button onclick="openProjectModal('${p.id}')" class="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 group/btn" aria-label="View details for ${p.title}">
            <span>Details</span>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  refreshIcons();
  setupScrollAnimations();
}

function filterProjects(category, btn) {
  const buttons = document.querySelectorAll('#project-filter-buttons .filter-btn');
  buttons.forEach(b => {
    b.classList.remove('active', 'border-blue-500', 'bg-blue-500/10', 'text-blue-400');
    b.classList.add('border-[#2a2a2a]', 'bg-transparent', 'text-slate-400');
  });

  const target = btn || (window.event && (window.event.currentTarget || window.event.target));
  if (target) {
    target.classList.add('active', 'border-blue-500', 'bg-blue-500/10', 'text-blue-400');
    target.classList.remove('border-[#2a2a2a]', 'bg-transparent', 'text-slate-400');
  }

  renderProjects(category);
}

/* ==========================================================================
   7. Image Lightbox Modal Engine
   ========================================================================== */
function setupLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const closeBtn = document.getElementById('lightbox-close');

  if (!modal) return;

  if (prevBtn) prevBtn.addEventListener('click', showPrevLightboxImage);
  if (nextBtn) nextBtn.addEventListener('click', showNextLightboxImage);
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  // Click outside to dismiss
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevLightboxImage();
    if (e.key === 'ArrowRight') showNextLightboxImage();
  });
}

function openLightboxByProject(projectId) {
  if (!galleryItems || galleryItems.length === 0) {
    galleryItems = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.projects.filter(p => p.image)) || [];
  }
  const index = galleryItems.findIndex(p => p.id === projectId);
  openLightboxByIndex(index !== -1 ? index : 0);
}

function openLightboxByIndex(index) {
  if (!galleryItems || galleryItems.length === 0) return;
  currentLightboxIndex = (index + galleryItems.length) % galleryItems.length;

  const item = galleryItems[currentLightboxIndex];
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-image');
  const caption = document.getElementById('lightbox-caption');
  const counter = document.getElementById('lightbox-counter');

  if (!modal || !img) return;

  img.src = item.image;
  img.alt = item.title;
  if (caption) caption.textContent = item.imageCaption || item.title;
  if (counter) counter.textContent = `Image ${currentLightboxIndex + 1} of ${galleryItems.length}`;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function showNextLightboxImage() {
  openLightboxByIndex(currentLightboxIndex + 1);
}

function showPrevLightboxImage() {
  openLightboxByIndex(currentLightboxIndex - 1);
}

/* ==========================================================================
   8. Achievements & Milestones Rendering
   ========================================================================== */
function renderAchievements() {
  const container = document.getElementById('achievements-container');
  if (!container || !window.PORTFOLIO_DATA || !window.PORTFOLIO_DATA.achievements) return;

  container.innerHTML = window.PORTFOLIO_DATA.achievements.map((item, index) => `
    <div class="relative pl-10 sm:pl-14 space-y-2 group fade-in-scroll">
      <!-- Bullet indicator -->
      <div class="absolute left-2 sm:left-4 top-1.5 w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-blue-500 group-hover:scale-125 transition-transform shadow-[0_0_10px_#3b82f6]"></div>
      
      <div class="glass-card rounded-2xl p-6 space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h3 class="text-base sm:text-lg font-bold text-white flex items-center gap-2">
            <i data-lucide="${item.icon || 'trophy'}" class="w-5 h-5 text-blue-400"></i>
            ${item.title}
          </h3>
          <span class="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
            ${item.date}
          </span>
        </div>
        <div class="text-xs font-semibold text-slate-400 flex items-center gap-2">
          <span>${item.issuer}</span>
          <span>•</span>
          <span class="text-emerald-400">${item.badge}</span>
        </div>
        <p class="text-sm text-slate-300 leading-relaxed">
          ${item.description}
        </p>
      </div>
    </div>
  `).join('');

  refreshIcons();
  setupScrollAnimations();
}

/* ==========================================================================
   9. Project Details Modal
   ========================================================================== */
function openProjectModal(projectId) {
  if (!window.PORTFOLIO_DATA) return;
  const project = window.PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('project-modal');
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-badge').textContent = project.badge;
  document.getElementById('modal-description').textContent = project.description;

  const bulletsContainer = document.getElementById('modal-bullets');
  bulletsContainer.innerHTML = project.bulletPoints.map(b => `
    <li class="flex items-start gap-2.5">
      <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 mt-1 shrink-0"></i>
      <span class="text-slate-300 text-sm leading-relaxed">${b}</span>
    </li>
  `).join('');

  const tagsContainer = document.getElementById('modal-tags');
  tagsContainer.innerHTML = project.tags.map(t => `
    <span class="px-2.5 py-1 rounded-md text-xs font-mono glass-badge">${t}</span>
  `).join('');

  const githubBtn = document.getElementById('modal-github');
  if (project.githubUrl) {
    githubBtn.href = project.githubUrl;
    githubBtn.classList.remove('hidden');
  } else {
    githubBtn.classList.add('hidden');
  }

  const liveBtn = document.getElementById('modal-live');
  if (project.liveUrl) {
    liveBtn.href = project.liveUrl;
    liveBtn.classList.remove('hidden');
  } else {
    liveBtn.classList.add('hidden');
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  refreshIcons();
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal handlers
window.addEventListener('click', (e) => {
  const modal = document.getElementById('project-modal');
  if (e.target === modal) {
    closeProjectModal();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeProjectModal();
  }
});

/* ==========================================================================
   10. Mobile Navigation Drawer
   ========================================================================== */
function setupMobileNav() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');
    if (isHidden) {
      menu.classList.remove('hidden');
      if (openIcon) openIcon.classList.add('hidden');
      if (closeIcon) closeIcon.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
      if (openIcon) openIcon.classList.remove('hidden');
      if (closeIcon) closeIcon.classList.add('hidden');
    }
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      if (openIcon) openIcon.classList.remove('hidden');
      if (closeIcon) closeIcon.classList.add('hidden');
    });
  });
}

/* ==========================================================================
   11. Scroll Spy (Active Navigation Indicator)
   ========================================================================== */
function setupScrollSpy() {
  const sections = document.querySelectorAll('main > section');
  const navLinks = document.querySelectorAll('header nav a');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-blue-400', 'bg-blue-500/10');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-blue-400', 'bg-blue-500/10');
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   12. Contact Form & Utilities
   ========================================================================== */
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const msgInput = document.getElementById('message');
  const charCounter = document.getElementById('char-counter');

  if (msgInput && charCounter) {
    msgInput.addEventListener('input', () => {
      const length = msgInput.value.length;
      charCounter.textContent = `${length} / 500`;
      if (length > 450) {
        charCounter.classList.add('text-amber-400');
      } else {
        charCounter.classList.remove('text-amber-400');
      }
    });
  }

  if (form) {
    form.addEventListener('submit', handleContactSubmit);
  }
}

function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim() || 'Student Portfolio Inquiry';
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    showToast('Please fill out all required fields.');
    return;
  }

  showToast(`Thank you, ${name}! Generating email draft...`, 3500);

  const recipient = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.profile.socials.email) || 'gopi736736@gmail.com';
  const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hello Gopikrishna,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent from Portfolio Website`)}`;

  setTimeout(() => {
    window.location.href = mailtoUrl;
    const form = document.getElementById('contact-form');
    if (form) form.reset();
    const charCounter = document.getElementById('char-counter');
    if (charCounter) charCounter.textContent = '0 / 500';
  }, 1000);
}

function copyEmailToClipboard() {
  const email = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.profile.socials.email) || 'gopi736736@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    showToast(`Copied ${email} to clipboard!`);
  }).catch(() => {
    showToast(`Email: ${email}`);
  });
}

/* ==========================================================================
   13. Toast Notification Helper
   ========================================================================== */
function showToast(message, duration = 3000) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

/* ==========================================================================
   14. Interactive Box Bubble Touch Effect
   Generates luminous frosted bubbles whenever touching or clicking cards
   ========================================================================== */
function setupBoxBubbleEffect() {
  // Listen for touch / click on cards, panels, and interactive boxes
  document.addEventListener('pointerdown', handleBoxPointerDown, { passive: true });

  // Optional subtle floating bubble trail when moving finger/cursor over cards
  let lastMoveTime = 0;
  document.addEventListener('pointermove', (e) => {
    const now = performance.now();
    if (now - lastMoveTime < 130) return; // throttled for smooth 60fps performance
    lastMoveTime = now;

    const box = e.target.closest('.bubble-box-sub, .bubble-box, .glass-card, .terminal-card');
    if (!box) return;

    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    createSingleTrailBubble(box, x, y);
  }, { passive: true });
}

function handleBoxPointerDown(e) {
  // Target sub-box or parent card
  const box = e.target.closest('.bubble-box-sub, .bubble-box, .glass-card, .terminal-card, .skill-tab');
  if (!box) return;

  // Deflate other previously touched boxes
  document.querySelectorAll('.is-bubble-inflated, .anim-bubble-inflate').forEach(el => {
    if (el !== box) {
      el.classList.remove('is-bubble-inflated', 'anim-bubble-inflate');
    }
  });

  // Make this touched box expand and get bigger like a bubble!
  box.classList.add('is-bubble-inflated', 'anim-bubble-inflate');

  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  createBubbleBurst(box, x, y);

  // Auto deflate smoothly after 1.5s
  clearTimeout(box._bubbleDeflateTimer);
  box._bubbleDeflateTimer = setTimeout(() => {
    box.classList.remove('is-bubble-inflated', 'anim-bubble-inflate');
  }, 1500);
}

function createBubbleBurst(container, x, y) {
  if (getComputedStyle(container).position === 'static') {
    container.style.position = 'relative';
  }

  let bubbleBox = container.querySelector('.touch-bubble-container');
  if (!bubbleBox) {
    bubbleBox = document.createElement('div');
    bubbleBox.className = 'touch-bubble-container';
    container.appendChild(bubbleBox);
  }

  // 1. Create primary expanding frosted bubble wave
  const wave = document.createElement('div');
  wave.className = 'touch-bubble-wave';
  const waveSize = Math.max(70, Math.min(container.offsetWidth * 0.45, 120));
  wave.style.width = `${waveSize}px`;
  wave.style.height = `${waveSize}px`;
  wave.style.left = `${x}px`;
  wave.style.top = `${y}px`;
  bubbleBox.appendChild(wave);

  wave.addEventListener('animationend', () => wave.remove());

  // 2. Spawn 5 to 7 floating luminous micro-bubbles
  const count = 6;
  for (let i = 0; i < count; i++) {
    const mini = document.createElement('div');
    mini.className = 'touch-mini-bubble';

    const size = Math.floor(Math.random() * 14) + 10; // 10px - 24px
    const dx = (Math.random() - 0.5) * 85;            // dispersion
    const dy = -(Math.random() * 55 + 35);            // upward drift
    const delay = Math.random() * 80;

    mini.style.width = `${size}px`;
    mini.style.height = `${size}px`;
    mini.style.left = `${x}px`;
    mini.style.top = `${y}px`;
    mini.style.setProperty('--dx', `${dx}px`);
    mini.style.setProperty('--dy', `${dy}px`);
    mini.style.animationDelay = `${delay}ms`;

    bubbleBox.appendChild(mini);
    mini.addEventListener('animationend', () => mini.remove());
  }

  // Idle cleanup
  setTimeout(() => {
    if (bubbleBox && bubbleBox.childElementCount === 0) {
      bubbleBox.remove();
    }
  }, 1200);
}

function createSingleTrailBubble(container, x, y) {
  let bubbleBox = container.querySelector('.touch-bubble-container');
  if (!bubbleBox) {
    bubbleBox = document.createElement('div');
    bubbleBox.className = 'touch-bubble-container';
    container.appendChild(bubbleBox);
  }

  const mini = document.createElement('div');
  mini.className = 'touch-mini-bubble';

  const size = Math.floor(Math.random() * 8) + 8; // 8px - 16px
  const dx = (Math.random() - 0.5) * 45;
  const dy = -(Math.random() * 40 + 25);

  mini.style.width = `${size}px`;
  mini.style.height = `${size}px`;
  mini.style.left = `${x}px`;
  mini.style.top = `${y}px`;
  mini.style.setProperty('--dx', `${dx}px`);
  mini.style.setProperty('--dy', `${dy}px`);

  bubbleBox.appendChild(mini);
  mini.addEventListener('animationend', () => mini.remove());
}
