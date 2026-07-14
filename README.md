<div align="center">

# 🎨 Démos front-end — MatgordFR

### Quatre sites, quatre métiers, **zéro dépendance.**

Le **hub** qui rassemble mes quatre démos front-end. Chacune vit dans son propre dépôt,<br>
et cette page les présente d'un coup d'œil. Vanilla (HTML/CSS/JS), sans framework, sans CDN.

![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Dépendances](https://img.shields.io/badge/d%C3%A9pendances-0-2ea44f?style=flat-square)
![Sans build](https://img.shields.io/badge/build-aucun-8957e5?style=flat-square)
![Licence](https://img.shields.io/badge/licence-ISC-2f81f7?style=flat-square)

[![▶ Ouvrir le hub](https://img.shields.io/badge/%E2%96%B6_Ouvrir_le_hub-141416?style=for-the-badge)](https://matgordfr.github.io/mes-demos-web/)

</div>

> [!NOTE]
> **Projets démo.** Entreprises, produits, personnes et données **entièrement fictifs** — des vitrines de savoir-faire, pas des sites en production. Tout tourne dans le navigateur, sans backend.

---

## Les quatre démos

| | Démo | Métier | Démo live | Code |
|---|---|---|---|---|
| 📊 | **MatgordCRM** | Tableau de bord CRM / SaaS — **analytics de MRR** (waterfall, ARPU, LTV, churn) | [ouvrir ↗](https://matgordfr.github.io/site-tableau-de-bord/) | [site-tableau-de-bord](https://github.com/MatgordFR/site-tableau-de-bord) |
| 🔥 | **Forno** | One-pager restauration — pizzeria, four vivant, **cuisson interactive de 90 s** | [ouvrir ↗](https://matgordfr.github.io/site-restaurant/) | [site-restaurant](https://github.com/MatgordFR/site-restaurant) |
| ✷ | **Sillage** | Portfolio studio créatif — **curseur custom** & **affiches génératives** | [ouvrir ↗](https://matgordfr.github.io/site-studio/) | [site-studio](https://github.com/MatgordFR/site-studio) |
| 📈 | **Pouls** | Landing produit / SaaS — **board vivant**, pricing mensuel/annuel, FAQ | [ouvrir ↗](https://matgordfr.github.io/site-produit/) | [site-produit](https://github.com/MatgordFR/site-produit) |

<div align="center">

### 📊 [MatgordCRM](https://matgordfr.github.io/site-tableau-de-bord/)
[![MatgordCRM](assets/thumbs/crm.jpg)](https://matgordfr.github.io/site-tableau-de-bord/)

### 🔥 [Forno](https://matgordfr.github.io/site-restaurant/)
[![Forno](assets/thumbs/forno.jpg)](https://matgordfr.github.io/site-restaurant/)

### ✷ [Sillage](https://matgordfr.github.io/site-studio/)
[![Sillage](assets/thumbs/studio.jpg)](https://matgordfr.github.io/site-studio/)

### 📈 [Pouls](https://matgordfr.github.io/site-produit/)
[![Pouls](assets/thumbs/statut.jpg)](https://matgordfr.github.io/site-produit/)

</div>

---

## Le parti pris, sur les trois

- **Zéro dépendance** — pas de framework, pas de librairie de graphiques, pas de CDN, pas de build.
- **Une identité par démo** — palette, typographie et animations dérivées du sujet, jamais un gabarit recyclé.
- **Polices auto-hébergées** — Bricolage Grotesque, Fraunces, Instrument Serif, Space Grotesk, JetBrains Mono. Aucune requête tierce, aucun pisteur.
- **Graphismes dessinés** — icônes, illustrations et graphiques en SVG écrit à la main ; l'art des affiches de *Sillage* est **généré** au chargement.
- **Léger & rapide** — chaque démo pèse ~100 Ko, se charge d'un coup.
- **Accessible & responsive** — navigation clavier, focus visible, `prefers-reduced-motion` respecté, du grand écran au mobile sans débordement.

## 🛠️ Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![SVG](https://img.shields.io/badge/SVG-FFB13B?style=flat-square&logo=svg&logoColor=black)

## 📁 Structure

Ce dépôt = **le hub uniquement**. Les démos sont dans leurs propres dépôts (voir la table ci-dessus).

```
index.html            → le hub (cette page d'accueil)
assets/css/hub.css    → styles du hub
assets/js/hub.js      → reveals au scroll
assets/fonts/         → Bricolage + Space Grotesk (auto-hébergées)
assets/thumbs/        → vignettes des trois démos
```

## 🚀 Lancer en local

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## 👤 Auteur

Réalisé par **[MatgordFR](https://github.com/MatgordFR)** — dev indépendant (bots Discord, sites, IA).
🌐 [matgord.com](https://matgord.com) · 🐦 [@matgordfr](https://x.com/matgordfr)

## 📄 Licence

[ISC](LICENSE) — libre d'usage.
