const projects = {
  smartbillet: {
    title: "SmartBillet",
    tagline: "Application de gestion de billetterie en JavaFX",
    status: "En cours",
    statusClass: "status-encours",
    isE6: true,
    description: `
      <p>SmartBillet est une application de gestion de billetterie développée en JavaFX avec une base de données MySQL. Elle permet la gestion complète des clients, des événements et des billets via une interface d'administration professionnelle.</p>
      <p>Ce projet a été réalisé dans le cadre de l'épreuve E6 du BTS SIO option SLAM, en binôme, avec pour objectif de répondre à un cahier des charges fonctionnel précis.</p>
    `,
    features: [
      "Gestion des clients (création, modification, suppression)",
      "Gestion des événements avec dates et lieux",
      "Génération et gestion des billets",
      "Interface d'administration intuitive",
      "Connexion sécurisée à la base de données MySQL",
    ],
    technologies: ["Java", "JavaFX", "MySQL", "CSS"],
    github: "https://github.com/Giopa02/Smart_Billet",
    liveUrl: null,
    video: "assets/smartbillet-assets/demo.mov",
    pdf: "assets/smartbillet-assets/Fiche_projet_Smartbillet.pdf",
    bilan: "Ce projet m'a permis de consolider mes compétences en architecture MVC/DAO, accès base de données via JDBC et sécurisation des mots de passe avec bcrypt. La principale difficulté rencontrée a été la gestion de la navigation JavaFX. La mise en place de tests unitaires JUnit 5 + Mockito m'a sensibilisée à l'importance de la qualité logicielle.",
  },
  bookhub: {
    title: "BookHub",
    tagline: "Application web de gestion de bibliothèque en Laravel",
    status: "En cours",
    statusClass: "status-encours",
    isE6: true,
    description: `
      <p>BookHub est une application web de gestion de bibliothèque développée en PHP avec le framework Laravel 12. Elle permet à trois types d'utilisateurs d'interagir avec le système : les visiteurs, les usagers et les bibliothécaires.</p>
      <p>Ce projet a été réalisé dans le cadre de l'épreuve E6 du BTS SIO option SLAM, en binôme, en suivant une méthodologie de développement rigoureuse avec versioning Git et documentation fonctionnelle.</p>
    `,
    features: [
      "Inscription et connexion sécurisées avec hashage bcrypt",
      "Catalogue de livres avec recherche par titre, auteur ou catégorie",
      "Système d'emprunt : 1 à 5 exemplaires pour 30 jours maximum",
      "Gestion des retours par le bibliothécaire",
      "Back-office : CRUD exemplaires, gestion usagers, recherche avancée",
      "Profil utilisateur avec emprunts en cours et historique",
    ],
    technologies: ["PHP", "Laravel", "CSS", "JavaScript"],
    github: "https://github.com/Giopa02/BookHub",
    liveUrl: "http://51.45.27.68",
    video: null,
    pdf: "assets/bookhub-assets/Fiche_projet_BookHub_E6.pdf",
    bilan: "La majorité des fonctionnalités du cahier des charges ont été implémenté, ainsi que plusieurs fonctionnalités optionnelles (2FA, historique des mots de passe, état des exemplaires). Sur le plan technique, le projet a permis de consolider la maîtrise du framework Laravel 12 (migrations, Eloquent ORM, middleware, Blade), de l'écriture de tests unitaires avec PHPUnit 12 (40 tests passants), et de l'analyse qualité via SonarQube (Quality Gate Passed, toutes les métriques en grade A).",
  },
  pacman: {
    title: "Pacman",
    tagline: "Reproduction du jeu d'arcade classique",
    status: "Complet",
    statusClass: "status-complet",
    isE6: false,
    description: `
      <p>Une reproduction fidèle du jeu d'arcade classique Pac-Man. Le joueur incarne Pac-Man, un personnage jaune évoluant dans un labyrinthe rempli de pac-gommes. Le but est de manger toutes les pac-gommes sans se faire attraper par les fantômes.</p>
    `,
    features: [
      "Création du plateau de jeu",
      "Déplacement fluide de Pacman",
      "Intelligence artificielle des fantômes",
      "Gestion du score en temps réel",
    ],
    technologies: ["Java"],
    github: null,
    liveUrl: null,
    video: null,
  },
  flappybird: {
    title: "Copie Flappy Bird",
    tagline: "Reproduction du jeu mobile viral",
    status: "En cours",
    statusClass: "status-encours",
    isE6: false,
    description: `
      <p>Une reproduction du jeu mobile Flappy Bird. Le joueur contrôle un oiseau qui doit passer entre des tuyaux en évitant de les toucher.</p>
    `,
    features: [
      "Physique de vol réaliste",
      "Génération aléatoire des obstacles",
      "Gestion du score",
    ],
    technologies: ["Java"],
    github: null,
    liveUrl: null,
    video: null,
  },
  tetris: {
    title: "Copie Tetris",
    tagline: "Reproduction du jeu de puzzle classique",
    status: "En cours",
    statusClass: "status-encours",
    isE6: false,
    description: `
      <p>Une reproduction du jeu de puzzle classique Tetris. Le joueur doit faire tomber des pièces pour compléter des lignes et marquer des points.</p>
    `,
    features: [
      "Chute des pièces avec accélération progressive",
      "Rotation des tétrominos",
      "Suppression des lignes complètes",
      "Gestion du score",
    ],
    technologies: ["Java"],
    github: null,
    liveUrl: null,
    video: null,
  },
  ecommerce: {
    title: "Site E-Commerce",
    tagline: "Plateforme e-commerce en PHP",
    status: "Complet",
    statusClass: "status-complet",
    isE6: false,
    description: `
      <p>Ce projet représente une réalisation dans le cadre de la formation en développement web, axé sur l'apprentissage du PHP. Il s'agit d'une plateforme e-commerce spécialisée dans la vente d'objets en ligne.</p>
    `,
    features: [
      "Catalogue de produits",
      "Gestion des utilisateurs",
      "Panier et processus d'achat",
      "Interface utilisateur responsive",
    ],
    technologies: ["PHP", "HTML", "CSS", "JavaScript"],
    github: null,
    liveUrl: null,
    video: null,
  },
}

function init() {
  const params = new URLSearchParams(window.location.search)
  const key = params.get("project")
  const project = projects[key]

  if (!project) {
    document.title = "Projet introuvable — Giordana Nyom"
    return
  }

  document.title = `${project.title} — Giordana Nyom`

  document.getElementById("detail-title").textContent = project.title
  document.getElementById("detail-tagline").textContent = project.tagline

  const statusEl = document.getElementById("detail-status")
  statusEl.textContent = project.status
  statusEl.className = `project-status ${project.statusClass}`

  const e6Badge = document.getElementById("detail-e6-badge")
  if (project.isE6) e6Badge.style.display = "inline-block"

  document.getElementById("detail-description").innerHTML = project.description

  const featuresEl = document.getElementById("detail-features")
  featuresEl.innerHTML = `<ul class="features-list">${project.features.map(f => `<li>${f}</li>`).join("")}</ul>`

  const techEl = document.getElementById("detail-technologies")
  techEl.innerHTML = project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join("")

  const pdfSection = document.getElementById("detail-pdf-section")
  if (project.pdf) {
    document.getElementById("detail-pdf").src = project.pdf
    pdfSection.style.display = "block"
  }

  const bilanSection = document.getElementById("detail-bilan-section")
  if (project.bilan) {
    document.getElementById("detail-bilan").innerHTML = project.bilan
    bilanSection.style.display = "block"
  }

  const videoSection = document.getElementById("detail-video-section")
  const videoEl = document.getElementById("detail-video")
  const videoPlaceholder = document.getElementById("detail-video-placeholder")
  if (project.video) {
    document.getElementById("detail-video-src").src = project.video
    videoEl.load()
    videoEl.style.display = "block"
    videoPlaceholder.style.display = "none"
  } else {
    videoEl.style.display = "none"
    videoPlaceholder.style.display = "block"
  }

  const githubLink = document.getElementById("detail-github-link")
  if (project.github) {
    githubLink.href = project.github
    githubLink.style.display = "inline-block"
  }

  const liveLink = document.getElementById("detail-live-link")
  if (project.liveUrl) {
    liveLink.href = project.liveUrl
    liveLink.style.display = "inline-block"
  }
}

init()
