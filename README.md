<div align="center">

# 🎨 Démos front-end — MatgordFR

### Trois sites, trois métiers, **zéro dépendance.**

Le **hub** qui rassemble mes trois démos front-end. Chacune vit dans son propre dépôt,<br>
et cette page les présente d'un coup d'œil. Vanilla (HTML/CSS/JS), sans framework, sans CDN.

![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Dépendances](https://img.shields.io/badge/d%C3%A9pendances-0-2ea44f?style=flat-square)
![Sans build](https://img.shields.io/badge/build-aucun-8957e5?style=flat-square)
![Licence](https://img.shields.io/badge/licence-ISC-2f81f7?style=flat-square)

[![▶ Ouvrir le hub](https://img.shields.io/badge/%E2%96%B6_Ouvrir_le_hub-141416?style=for-the-badge)](https://matgordfr.github.io/matgord-portfolio-demos/)

</div>

> [!NOTE]
> **Projets démo.** Entreprises, produits, personnes et données **entièrement fictifs** — des vitrines de savoir-faire, pas des sites en production. Tout tourne dans le navigateur, sans backend.

---

## Les trois démos

| | Démo | Métier | Démo live | Code |
|---|---|---|---|---|
| 🔥 | **Forno** | One-pager restauration — pizzeria, four vivant, **cuisson interactive de 90 s** | [ouvrir ↗](https://matgordfr.github.io/forno-demo/) | [forno-demo](https://github.com/MatgordFR/forno-demo) |
| ✷ | **Sillage** | Portfolio studio créatif — **curseur custom** & **affiches génératives** | [ouvrir ↗](https://matgordfr.github.io/sillage-demo/) | [sillage-demo](https://github.com/MatgordFR/sillage-demo) |
| 📈 | **Pouls** | Landing produit / SaaS — **board vivant**, pricing mensuel/annuel, FAQ | [ouvrir ↗](https://matgordfr.github.io/pouls-demo/) | [pouls-demo](https://github.com/MatgordFR/pouls-demo) |

<div align="center">

### 🔥 [Forno](https://matgordfr.github.io/forno-demo/)
[![Forno](assets/thumbs/forno.jpg)](https://matgordfr.github.io/forno-demo/)

### ✷ [Sillage](https://matgordfr.github.io/sillage-demo/)
[![Sillage](assets/thumbs/studio.jpg)](https://matgordfr.github.io/sillage-demo/)

### 📈 [Pouls](https://matgordfr.github.io/pouls-demo/)
[![Pouls](assets/thumbs/statut.jpg)](https://matgordfr.github.io/pouls-demo/)

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
