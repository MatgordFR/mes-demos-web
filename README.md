<div align="center">

# 🎨 Démos front-end — MatgordFR

### Cinq démos, cinq terrains — quatre en **vanilla pur**, une pièce en **WebGL temps réel.**

Le **hub** qui rassemble mes démos front-end. Chacune vit dans son propre dépôt,<br>
et cette page les présente d'un coup d'œil. Sans framework, sans CDN, tout auto-hébergé.

![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![WebGL](https://img.shields.io/badge/WebGL-990000?style=flat-square&logo=webgl&logoColor=white)
![Sans CDN](https://img.shields.io/badge/CDN-0-2ea44f?style=flat-square)
![Sans build](https://img.shields.io/badge/build-aucun-8957e5?style=flat-square)
![Licence](https://img.shields.io/badge/licence-ISC-2f81f7?style=flat-square)

[![▶ Ouvrir le hub](https://img.shields.io/badge/%E2%96%B6_Ouvrir_le_hub-141416?style=for-the-badge)](https://matgordfr.github.io/mes-demos-web/)

</div>

> [!NOTE]
> **Projets démo.** Entreprises, produits, personnes et données **entièrement fictifs** — des vitrines de savoir-faire, pas des sites en production. Tout tourne dans le navigateur, sans backend.

---

## Les cinq démos

| | Démo | Terrain | Démo live | Code |
|---|---|---|---|---|
| 📊 | **Essor** | Tableau de bord CRM / SaaS — **analytics de MRR** (waterfall, ARPU, LTV, churn) | [ouvrir ↗](https://matgordfr.github.io/site-tableau-de-bord/) | [site-tableau-de-bord](https://github.com/MatgordFR/site-tableau-de-bord) |
| 🔥 | **Forno** | One-pager restauration — pizzeria, four vivant, **cuisson interactive de 90 s** | [ouvrir ↗](https://matgordfr.github.io/site-restaurant/) | [site-restaurant](https://github.com/MatgordFR/site-restaurant) |
| ✷ | **Sillage** | Portfolio studio créatif — **curseur custom** & **affiches génératives** | [ouvrir ↗](https://matgordfr.github.io/site-studio/) | [site-studio](https://github.com/MatgordFR/site-studio) |
| 📈 | **Pouls** | Landing produit / SaaS — **board vivant**, pricing mensuel/annuel, FAQ | [ouvrir ↗](https://matgordfr.github.io/site-produit/) | [site-produit](https://github.com/MatgordFR/site-produit) |
| 🫧 | **Interférence** | Pièce WebGL — **verre iridescent calculé en temps réel**, shaders GLSL, le scroll transforme la matière | [ouvrir ↗](https://matgordfr.github.io/site-interference/) | [site-interference](https://github.com/MatgordFR/site-interference) |

<div align="center">

### 📊 [Essor](https://matgordfr.github.io/site-tableau-de-bord/)
[![Essor](assets/thumbs/crm.jpg)](https://matgordfr.github.io/site-tableau-de-bord/)

### 🔥 [Forno](https://matgordfr.github.io/site-restaurant/)
[![Forno](assets/thumbs/forno.jpg)](https://matgordfr.github.io/site-restaurant/)

### ✷ [Sillage](https://matgordfr.github.io/site-studio/)
[![Sillage](assets/thumbs/studio.jpg)](https://matgordfr.github.io/site-studio/)

### 📈 [Pouls](https://matgordfr.github.io/site-produit/)
[![Pouls](assets/thumbs/statut.jpg)](https://matgordfr.github.io/site-produit/)

### 🫧 [Interférence](https://matgordfr.github.io/site-interference/)
[![Interférence](assets/thumbs/interference.jpg)](https://matgordfr.github.io/site-interference/)

</div>

---

## Le parti pris

- **Sans CDN, sans build** — les quatre sites sont en **vanilla pur** (0 dépendance) ; *Interférence* embarque **three.js vendorisé** (self-hébergé, aucun CDN), plus des shaders GLSL écrits à la main.
- **Une identité par démo** — palette, typographie et animations dérivées du sujet, jamais un gabarit recyclé.
- **Polices auto-hébergées** — Bricolage Grotesque, Fraunces, Instrument Serif, Space Grotesk, JetBrains Mono. Aucune requête tierce, aucun pisteur.
- **Graphismes dessinés** — icônes, illustrations et graphiques en SVG écrit à la main ; l'art des affiches de *Sillage* est **généré** au chargement, la matière d'*Interférence* est **calculée image par image**.
- **Léger** — les quatre démos vanilla pèsent ~100 Ko ; *Interférence* charge three.js vendorisé (~2 Mo), toujours 0 requête tierce.
- **Accessible & responsive** — navigation clavier, focus visible, `prefers-reduced-motion` respecté, du grand écran au mobile sans débordement.

## 🛠️ Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![SVG](https://img.shields.io/badge/SVG-FFB13B?style=flat-square&logo=svg&logoColor=black)
![three.js](https://img.shields.io/badge/three.js-000000?style=flat-square&logo=three.js&logoColor=white)
![GLSL](https://img.shields.io/badge/GLSL-5586A4?style=flat-square)

## 📁 Structure

Ce dépôt = **le hub uniquement**. Les démos sont dans leurs propres dépôts (voir la table ci-dessus).

```
index.html            → le hub (cette page d'accueil)
assets/css/hub.css    → styles du hub
assets/js/hub.js      → reveals au scroll
assets/fonts/         → Bricolage + Space Grotesk (auto-hébergées)
assets/thumbs/        → vignettes des démos
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
