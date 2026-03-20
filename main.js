document.addEventListener("DOMContentLoaded", () => {
  const aboutMeBtn = document.getElementById("about-me-btn")
  const aboutSkillsBtn = document.getElementById("about-skills-btn")
  const aboutQualitesBtn = document.getElementById("about-qualites-btn")
  const aboutExpBtn = document.getElementById("about-exp-btn")
  const aboutDiplomesBtn = document.getElementById("about-diplomes-btn")

  const aboutText = document.getElementById("about-text-placeholder")
  const aboutExtra = document.getElementById("about-me-extra")
  const skillsContainer = document.getElementById("skills-container")
  const allButtons = [aboutMeBtn, aboutSkillsBtn, aboutQualitesBtn, aboutExpBtn, aboutDiplomesBtn]

  const activeColor = "#F5EBE0"
  const inactiveColor = "rgba(245, 235, 224, 0.6)"

  // Contenu "Qui suis-je ?"
  const aboutMeContent = `
    Je m'appelle Giordana Nyom, j'ai actuellement 23 ans. Je suis étudiante à Paris au sein de l'école H3 Hitema en deuxième
    année de BTS SIO spécialité SLAM (Services Informatiques aux Organisations spécialité en Solutions Logicielles et Applications Métiers).
    <br><br>
    <strong>Pourquoi le développement web ?</strong><br>
    Parce que j'aime créer, résoudre des problèmes, et voir mes idées prendre vie à 
    travers le code. C'est un domaine en constante évolution, qui me pousse à donner le 
    meilleur de moi-même et à rester curieuse.
  `

  // Contenu extra "Qui suis-je ?" (affiché en dessous)
  const aboutMeExtraContent = `
    <strong>Ce qui me passionne ?</strong><br>
    <ul style="margin: 10px 0 10px 20px; line-height: 1.8;">
      <li>Le design web et l'expérience utilisateur</li>
      <li>Les défis techniques</li>
      <li>Travailler en équipe et apprendre des autres</li>
      <li>Créer des interfaces à la fois esthétiques et fonctionnelles</li>
    </ul>
    <br>
    <strong>Et aujourd'hui ?</strong> Je me pousse à progresser chaque jour. 
    Mon objectif : intégrer une équipe dynamique, contribuer à des projets innovants, 
    et ne jamais cesser d'évoluer !
  `

  // Contenu "Qualités"
  const qualitesContent = `
    <div class="qualites-container">
      <div class="qualite-item">
        <span class="qualite-icon">🧩</span>
        <h4>Problem Solver</h4>
        <p>J’aime analyser une situation, identifier les blocages et trouver des solutions efficaces, notamment en programmation.</p>
      </div>
      <div class="qualite-item">
        <span class="qualite-icon">🧠</span>
        <h4>Curieuse</h4>
        <p>Toujours à l'affût des nouvelles technologies et des bonnes pratiques.</p>
      </div>
      <div class="qualite-item">
        <span class="qualite-icon">🤝</span>
        <h4>Team player</h4>
        <p>Je sais collaborer, communiquer et partager les responsabilités pour atteindre un objectif commun.</p>
      </div>
      <div class="qualite-item">
        <span class="qualite-icon">🎯</span>
        <h4>Persévérante</h4>
        <p>Je ne lâche rien face aux défis techniques.</p>
      </div>
      <div class="qualite-item">
        <span class="qualite-icon">🤔</span>
        <h4>Polyvalente</h4>
        <p>Ma réorientation vers l’informatique illustre ma capacité à m’adapter à de nouveaux environnements et à apprendre rapidement.</p>
      </div>
      <div class="qualite-item">
        <span class="qualite-icon">💪</span>
        <h4>Endurante</h4>
        <p>Je sais garder la tête froide face aux deadlines et organiser mes priorités pour rester efficace.</p>
      </div>
    </div>
  `


  // Contenu "Expériences"
  const experiencesContent = `
    <div class="experiences-container">

      <div class="experience-item">
        <div class="exp-header">
          <h4>Back-Office E-Commerce</h4>
          <span class="exp-date">DEC 2025 - JANV 2026</span>
        </div>
        <p class="exp-company">VM Consulting, Dugny (93)</p>
        <p class="exp-description">Gestion et intégration de fiches produits via CMS (Shopify) || Développement et maintenance de contenus dynamiques en
          HTML/CSS et solutions no-code || Conception et déploiement de campagnes d’e-mailing et newsletters || Mise à jour et
          enrichissement de la base de données produits.</p>
      </div>

      <div class="experience-item">
        <div class="exp-header">
          <h4>Developpeuse</h4>
          <span class="exp-date">AVRIL 2025 - MAI 2025</span>
        </div>
        <p class="exp-company">Engie, Bagneux (92)</p>
        <p class="exp-description">Développement de chartes graphiques d'email || Intégration HTML conforme aux normes d'accessibilité EAA || Support
          technique : gestion de tickets via Jira || Tests et BAT d'emails en phase de préproduction || Analyse de données de
          performance emailing (taux d'ouverture, clics, délivrabilité) via Splunk || Participation aux cérémonies agiles (daily meetings,
          sprints).</p>
      </div>

      <div class="experience-item">
        <div class="exp-header">
          <h4>Conseillère de Vente</h4>
          <span class="exp-date">MARS 2025 - Présent</span>
        </div>
        <p class="exp-company">Alinea, Rosny-sous-Bois (93)</p>
        <p class="exp-description">Conseil clientèle || Commandes || Services après vente || Logistique
        </p>
      </div>

      <div class="experience-item">
        <div class="exp-header">
          <h4>Conseillère de Vente</h4>
          <span class="exp-date">JUILL 2023 - MARS 2024</span>
        </div>
        <p class="exp-company">Ikea, Paris(75)</p>
        <p class="exp-description">Conseil clientèle || Commandes || Services après vente || Logistique
        </p>
      </div>

    </div>
  `

  // Contenu "Diplômes"
  const diplomesContent = `
    <div class="experiences-container">

      <div class="experience-item">
        <div class="exp-header">
          <h4>BTS SIO SLAM</h4>
          <span class="exp-date">2024 - 2026</span>
        </div>
        <p class="exp-company">H3 Hitema, Paris (75)</p>
        <p class="exp-description">Services Informatiques aux Organisations - Solutions Logicielles et Applications Métiers (SLAM) - En cours</p>
      </div>

      <div class="experience-item">
        <div class="exp-header">
          <h4>Licence STAPS</h4>
          <span class="exp-date">2021 - 2024</span>
        </div>
        <p class="exp-company">Université Paris Cité, Paris (75)</p>
        <p class="exp-description">Option Activité Physique Adaptée et Santé (APAS) - Mention Assez Bien</p>
      </div>

      <div class="experience-item">
        <div class="exp-header">
          <h4>Bac Scientifique</h4>
          <span class="exp-date">2017 - 2020</span>
        </div>
        <p class="exp-company">Lycée Germaine Tillion, Le Bourget (93)</p>
        <p class="exp-description">Mention Bien</p>
      </div>

    </div>
  `

  function swapMain(content, showSkills = false) {
    aboutText.style.opacity = 0
    skillsContainer.style.display = showSkills ? "block" : "none"
    setTimeout(() => {
      aboutText.innerHTML = content
      aboutText.style.opacity = 1
    }, 200)
  }

  function toggleExtra(show, content = "") {
    if (show && content) {
      aboutExtra.innerHTML = content
      aboutExtra.style.maxHeight = aboutExtra.scrollHeight + 500 + "px"
      aboutExtra.style.opacity = 1
    } else {
      aboutExtra.style.maxHeight = 0
      aboutExtra.style.opacity = 0
    }
  }

  function setActive(btn) {
    allButtons.forEach((b) => {
      if (b) {
        b.style.color = b === btn ? activeColor : inactiveColor
        b.style.backgroundColor = b === btn ? "rgba(255, 255, 255, 0.1)" : "transparent"
      }
    })
  }

  // Event listeners pour les boutons
  if (aboutMeBtn) {
    aboutMeBtn.onclick = () => {
      setActive(aboutMeBtn)
      swapMain(aboutMeContent, false)
      toggleExtra(true, aboutMeExtraContent)
    }
  }

  if (aboutSkillsBtn) {
    aboutSkillsBtn.onclick = () => {
      setActive(aboutSkillsBtn)
      swapMain("", true)
      toggleExtra(false)
    }
  }

  if (aboutQualitesBtn) {
    aboutQualitesBtn.onclick = () => {
      setActive(aboutQualitesBtn)
      swapMain(qualitesContent, false)
      toggleExtra(false)
    }
  }

  if (aboutExpBtn) {
    aboutExpBtn.onclick = () => {
      setActive(aboutExpBtn)
      swapMain(experiencesContent, false)
      toggleExtra(false)
    }
  }

  if (aboutDiplomesBtn) {
    aboutDiplomesBtn.onclick = () => {
      setActive(aboutDiplomesBtn)
      swapMain(diplomesContent, false)
      toggleExtra(false)
    }
  }

  // État initial - Charger le contenu "Qui suis-je" au démarrage
  setActive(aboutMeBtn)
  if (aboutText) {
    aboutText.innerHTML = aboutMeContent
  }
  if (aboutExtra) {
    aboutExtra.innerHTML = aboutMeExtraContent
    toggleExtra(true, aboutMeExtraContent)
  }

  // Intersection Observer pour les animations
  const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show")
      } else {
        entry.target.classList.remove("show")
      }
    })
  }, options)

  document.querySelectorAll(".hidden").forEach((el) => revealObserver.observe(el))

  // Filtres des projets
  const filterButtons = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".work-card")

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter

      filterButtons.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      projectCards.forEach((card) => {
        const status = card.querySelector(".project-status")
        const statusText = status ? status.textContent.toLowerCase() : ""

        if (filter === "all") {
          card.classList.remove("filter-hidden")
        } else if (filter === "completed" && statusText === "complet") {
          card.classList.remove("filter-hidden")
        } else if (filter === "encours" && statusText === "en cours") {
          card.classList.remove("filter-hidden")
        } else {
          card.classList.add("filter-hidden")
        }
      })
    })
  })

  // Modal des projets
  const modal = document.getElementById("project-modal")
  const modalClose = document.querySelector(".modal-close")
  const modalTitle = document.getElementById("modal-title")
  const modalDescription = document.getElementById("modal-description")
  const modalDetails = document.getElementById("modal-details")
  const modalLink = document.getElementById("modal-link")

  const projectData = {
    smartbillet: {
      title: "Système de Billetterie - SmartBillet",
      description:
        "Application de gestion de billetterie développée en JavaFX avec MySQL, permettant la gestion complète des clients, événements et billets avec une interface d'administration professionnelle.",
      details:
        "<strong>Fonctionnalités clés :</strong><br>• Gestion des clients<br>• Gestion des billets<br>• Gestion des évènements<br>• Interface utilisateur",
    },
    bookhub: {
      title: "Bookhub",
      description:
        "L’application permet à trois types d’utilisateurs d’interagir avec le système : les visiteurs (consultation du catalogue), les usagers (emprunts de livres) et les bibliothécaires (administration complète via un back-office).",
      details:
        "<strong>Fonctionnalités clés :</strong><br>• Inscription et connexion sécurisées avec hashage bcrypt<br>• Catalogue de livres avec recherche par titre, auteur ou catégorie<br>• Système d’emprunt : 1 à 5 exemplaires pour 30 jours maximum<br>• Gestion des retours par le bibliothécaire<br>• Back-office : CRUD exemplaires, gestion usagers, recherche avancée<br>• Profil utilisateur avec emprunt en cours et historique",
    },
    pacman: {
      title: "Pacman",
      description:
        "Le joueur incarne Pac-Man, un personnage jaune évoluant dans un labyrinthe rempli de pac-gommes. Le but est simple : manger toutes les pac-gommes sans se faire attraper par les fantômes.",
      details:
        "<strong>Fonctionnalités clés :</strong><br>• Création du plateau<br>• Déplacement de Pacman<br>• Gestion des fantômes<br>• Gestion du score",
    },
    flappybird: {
      title: "Copie Flappy Bird",
      description:
        "Une copie du jeu Flappy Bird",
      details: "En cours",
    },
    tetris: {
      title: "Copie Tetris",
      description:
        "Une copie du jeu Tetris",
      details: "En cours"
    },
    ecommerce:{
      title: "Site E-Commerce",
      description:
        "Ce projet représente ma deuxième réalisation dans le cadre de ma formation en développement web, axé sur l’apprentissage du PHP. Il s’agit d’une plateforme e-commerce spécialisée dans la vente d’objet en ligne.",
      details: "<strong>Fonctionnalités clés :</strong><br>• Catalogue de produits<br>• Gestion des utilisateurs<br>• Fonctionnalités E-Commerce<br>• Interface utilisateur"
    }
  }

  document.addEventListener("click", (e) => {
    const card = e.target.closest("button[data-project]")
    if (!card) return

    const projectKey = card.dataset.project
    const linkUrl = card.dataset.link
    const project = projectData[projectKey]

    if (project) {
      modalTitle.textContent = project.title
      modalDescription.textContent = project.description
      modalDetails.innerHTML = project.details

      if (!linkUrl) {
        modalLink.textContent = "Ce projet est privé et non accessible publiquement."
        modalLink.removeAttribute("href")
        modalLink.style.cursor = "default"
      } else {
        modalLink.textContent = "Voir le projet"
        modalLink.href = linkUrl
        modalLink.style.cursor = "pointer"
      }

      modal.classList.add("active")
    }
  })

  if (modalClose) {
    modalClose.onclick = () => {
      modal.classList.remove("active")
    }
  }

  if (modal) {
    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.classList.remove("active")
      }
    }
  }

  const modalContent = document.querySelector(".modal-content")
  if (modalContent) {
    modalContent.onclick = (e) => {
      e.stopPropagation()
    }
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      modal.classList.remove("active")
    }
  })
})