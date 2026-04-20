# Portfolio Website — Claude Agent Context

## Who You're Working With
**Aditya Kothari** — Stanford MS Aeronautics & Astronautics (Sep 2025–Mar 2027, GPA 4.0). Robotics & autonomy researcher at Stanford Multi-Robot Systems Lab. BS Mechanical Engineering, VIT (GPA 4.0). Contact: kothari1@stanford.edu | +1 (408) 688-8878.

## What This Repo Is
Personal portfolio website hosted at kothari1.github.io. Pure static site — no build tools, no frameworks, no npm. Just `index.html`, `assets/css/style.css`, `assets/js/main.js`, `assets/images/headshot.jpg`, and two PDFs (`Aditya_Kothari_Resume.pdf`, `Aditya_Portfolio.pdf`).

## Tech Stack
- **HTML/CSS/JS** — vanilla, zero dependencies beyond Google Fonts (Inter + JetBrains Mono)
- **Design system**: dark theme (`#0a0a0f` bg, `#00d4ff` cyan, `#7b61ff` purple), CSS variables throughout
- **JS features**: canvas particle background, Intersection Observer scroll animations, mobile hamburger nav

## Site Sections (in order)
1. **Hero** — name, tagline ("Robotics & Autonomy Researcher"), CTA buttons (Projects / Resume / Portfolio)
2. **About** — stats cards (4.0 GPA, 7+ robots, 4 patents/pubs, 3 fellowships), research focus, bio
3. **Projects** — 8 cards (5 featured): LangDrive, Hierarchical RL, Autonomous Ground Robot, MAVBE, StarNav, E-VTOL, STOL Aircraft, AIRBUS Safety
4. **Experience** — timeline: Stanford MRS Lab (Jan 2026–present), Boeing, Tata Motors, Team Veloce
5. **Education** — Stanford MS + VIT BS, honors
6. **Skills** — 4 categories: Robotics & Autonomy, Control & Learning, Tools & Infrastructure, Domain Knowledge
7. **Achievements** — fellowships (NSF/KC Mahindra/JITO JEAP), competition wins (GKN Rank 1, Forbes Rank 1, Honeywell Rank 2, AIRBUS Rank 3), publications & patents
8. **Contact** — email, LinkedIn, GitHub; CTA: "Looking for summer 2026 internship opportunities"

## Key Profile Facts (for content accuracy)
- **Research**: semantic feature extraction using 3D Gaussian Splats + egocentric vision for language-guided navigation
- **Top projects**: LangDrive (VLMs + CARLA, ≈75% safe behavior), Hierarchical RL (SAC+PPO, POMDP, 2x stack height), Full-stack ground robot (ROS2/C++, YOLO, EKF, A*+DWA), MAVBE (IMM+DeepSORT, 55% RMSE reduction), StarNav (GPS-free lunar localization, ~40km accuracy)
- **Industry**: Boeing Software Tools Intern (30% design release time reduction), Tata Motors Vehicle Systems, Team Veloce captain (25 people, 7 UAVs/robots)
- **Publications**: Results in Engineering (Elsevier, JIF 7.9) — grain boundary evolution in GRCop alloys; 1 more publication
- **Patents**: Wear Analysis Equipment #202541056455 (2025), Electronic Spherical Steam Trap #427140-001 (2024)
- **Fellowships**: NSF Scholar 25, KC Mahindra Scholar 25, JITO JEAP Scholar 25, Narotam Sekhsaria Foundation Fellow

## Working Guidelines
- Preserve all factual content exactly — improvements are visual/UX/structural
- Keep it a pure static site unless explicitly asked to add a build step
- Dark theme is intentional and should be preserved
- GitHub Pages deployment: push to `main` branch, site is live at kothari1.github.io
- Currently on `main` branch; `index.html` and `style.css` have uncommitted changes at session start
