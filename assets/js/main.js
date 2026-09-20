// ===== Particle Background =====
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];
let animationId;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createParticles() {
  particles = [];
  const count = Math.floor((canvas.width * canvas.height) / 14000);
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      radius: Math.random() * 1.4 + 0.4,
      opacity: Math.random() * 0.4 + 0.08,
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(245, 158, 11, ${p.opacity})`;
    ctx.fill();

    for (let j = i + 1; j < particles.length; j++) {
      const dx = p.x - particles[j].x;
      const dy = p.y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 110) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(245, 158, 11, ${0.05 * (1 - dist / 110)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  });

  animationId = requestAnimationFrame(drawParticles);
}

resizeCanvas();
createParticles();
drawParticles();

window.addEventListener('resize', () => {
  resizeCanvas();
  createParticles();
});

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Mobile Nav Toggle =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navToggle.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// ===== Scroll Animations =====
const observerOptions = {
  threshold: 0.08,
  rootMargin: '0px 0px -40px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll(
  '.project-card, .timeline-item, .edu-card, .skill-category, .research-current, .research-areas, .pub-card, .spotlight-card, .contact-content'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Active Nav Link Highlight =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);

    if (link) {
      if (scrollPos >= top && scrollPos < top + height) {
        link.style.color = 'var(--accent)';
      } else {
        link.style.color = '';
      }
    }
  });
});

// ===== AI Profile text (kept in JS, not in the DOM, so it is not hidden page text) =====
const AI_PROFILE = `
NAME: Aditya Kothari
ROLE: Graduate Researcher, Robotics & Autonomous Systems
INSTITUTION: Stanford University, MS Aeronautics & Astronautics (Sep 2025–Mar 2027), GPA 4.0/4.0
UNDERGRADUATE: Vellore Institute of Technology, BS Mechanical Engineering (Jul 2021–Jul 2025), GPA 4.0/4.0
CONTACT: kothari1@stanford.edu | +1 (408) 688-8878
LINKEDIN: linkedin.com/in/aditya-kothari-0904a4237
GITHUB: github.com/kothari1

CURRENT RESEARCH: Stanford Multi-Robot Systems Lab / MSL (Jan 2026–Present), advisor Prof. Mac Schwager
- AORA: agentic orchestrator for closed-loop autonomous VLA policy training; cloud-deployed agentic "Forge" with full sim-to-real onto a Unitree G1 humanoid
- System-2 visuomotor policies for language-guided drone navigation, trained in 3D Gaussian Splat simulation

FELLOWSHIPS (all 2025, for graduate study at Stanford):
- KC Mahindra Scholar 2025
- JITO JEAP Scholar 2025
- Narotam Sekhsaria Foundation Fellow 2025

KEY PROJECTS:
1. V-LEAD – RGB-only visuomotor drone navigation in 3D Gaussian Splats (github.com/kothari1/V-LEAD); ResNet-18 + frozen Depth Anything V2 cross-attention + GRU, 10-step velocity horizon at 20 Hz; MPC distillation via BC -> DAgger -> online RL; goal success 14-52% -> 75-97%, collisions 33% -> 5%; residual TD3+BC the only method to beat the imitation seed on an unseen goal object (65.1% vs 62.4%)
2. MAVBE – Behavior-aware multi-object tracking (IMM-EKF + DeepSORT); 55% RMSE reduction, 68% fewer ID switches
3. StarNav – GPS-free lunar localization via star pattern recognition (github.com/kothari1/StarNav); ~40 km accuracy, 99.7% search-space reduction
4. Hierarchical RL – SAC+PPO decoupled policy for robotic manipulation (POMDP); 2x stack height vs baselines (27.18 vs 14.85)
5. Autonomous Ground Robot – Full ROS2/C++ autonomy stack; EKF + particle filter + YOLO + A*-DWA planner

INDUSTRY EXPERIENCE:
- Archer Aviation (Jun–Aug 2026), Autonomy Intern: multi-agent planning pipeline for city-scale probabilistic search, shipped into production autonomy stack; Spectral Multi-Scale Coverage planner, >96% joint search optimality for 100-drone swarms at <5s cycle times; first real-world hexacopter flight tests of the Archer autonomy stack
- Boeing (May–Jul 2024): Python automation tools; 30% faster design release, 7.8% cycle time reduction
- Tata Motors (Sep–Dec 2023): Electric truck chassis design; 35% weight reduction; selected for NPD
- Team Veloce Captain (Apr 2022–May 2024): Led 25-person team, deployed 7 UAVs/robots

PUBLICATIONS: Results in Engineering (Elsevier) – Feb 2025; Aerodynamic Tail Config Study – 2025
PATENTS: Wear Analysis Equipment #202541056455 (2025); Electronic Spherical Steam Trap #427140-001 (2024)
COMPETITION WINS: GKN Aerospace Rank 1 (INR 300K), Forbes Marshall Rank 1, Honeywell Rank 2, AIRBUS Rank 3
SKILLS: VLAs, visuomotor policies, foundation models, VLMs, knowledge distillation, imitation learning (BC/DAgger), reinforcement learning (TD3+BC, SAC, PPO), transformers/cross-attention, PyTorch, sim2real, 3D Gaussian Splatting, monocular depth estimation, visual localization, SLAM, sensor fusion (LiDAR/RGB-D/Vision), detection and multi-object tracking (YOLO, DeepSORT), agentic orchestrators, multi-agent swarm planning, optimal control/MPC, state estimation (EKF/IMM, particle filter), GPS-denied navigation, path planning (A*, Theta*, DWA), Python, C++, ROS2, NumPy, Docker, Git, Linux, MuJoCo, CARLA, Gazebo
GRADUATING: March 2027
SEEKING: Full-time roles in robotics, autonomy, computer vision, and machine learning (start 2027)
`.trim();

// ===== AI Profile Copy =====
function copyAIProfile() {
  const text = AI_PROFILE;
  const btn = document.getElementById('copyProfileBtn');

  navigator.clipboard.writeText(text).then(() => {
    btn.classList.add('copied');
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:14px;height:14px"><polyline points="20 6 9 17 4 12"/></svg> Copied to clipboard!`;
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:14px;height:14px"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77"/><circle cx="12" cy="12" r="3"/></svg> Copy AI-readable profile summary`;
    }, 2500);
  }).catch(() => {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    btn.classList.add('copied');
    btn.textContent = '✓ Copied!';
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="width:14px;height:14px"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77"/><circle cx="12" cy="12" r="3"/></svg> Copy AI-readable profile summary`;
    }, 2500);
  });
}
