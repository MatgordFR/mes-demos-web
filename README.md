<div align="center">

# 🎨 Démos front-end — MatgordFR

### Trois sites, trois métiers, **zéro dépendance.**

Trois pages de démonstration codées à la main pour montrer mon savoir-faire côté web.<br>
Vanilla (HTML/CSS/JS), sans framework, sans CDN, polices auto-hébergées, graphismes SVG faits main.

![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Dépendances](https://img.shields.io/badge/d%C3%A9pendances-0-2ea44f?style=flat-square)
![Sans build](https://img.shields.io/badge/build-aucun-8957e5?style=flat-square)
![Accessible](https://img.shields.io/badge/a11y-clavier_%2B_reduced_motion-0f7d63?style=flat-square)
![Licence](https://img.shields.io/badge/licence-ISC-2f81f7?style=flat-square)

[![▶ Ouvrir les démos](https://img.shields.io/badge/%E2%96%B6_Ouvrir_les_d%C3%A9mos-141416?style=for-the-badge)](https://matgordfr.github.io/matgord-portfolio-demos/)

</div>

> [!NOTE]
> **Projets démo.** Les entreprises, produits, personnes et données sont **entièrement fictifs** — ce sont des vitrines de savoir-faire, pas des sites en production. Tout tourne dans le navigateur, sans backend.

---

## Les trois démos

| | Démo | Métier | Ce qu'elle montre |
|---|---|---|---|
| 🔥 | **[Forno](https://matgordfr.github.io/matgord-portfolio-demos/forno/)** | One-pager restauration | Pizzeria napolitaine, ambiance « braise », four vivant et **cuisson interactive de 90 s** |
| ✷ | **[Sillage](https://matgordfr.github.io/matgord-portfolio-demos/studio/)** | Portfolio studio créatif | Éditorial immersif, **curseur sur mesure** et **affiches riso générées** par projet |
| 📈 | **[Pouls](https://matgordfr.github.io/matgord-portfolio-demos/statut/)** | Landing produit / SaaS | Surveillance & page de statut : **board vivant**, pricing mensuel/annuel, FAQ dépliable |

<div align="center">

### 🔥 Forno
[![Forno](assets/thumbs/forno.jpg)](https://matgordfr.github.io/matgord-portfolio-demos/forno/)

### ✷ Sillage
[![Sillage](assets/thumbs/studio.jpg)](https://matgordfr.github.io/matgord-portfolio-demos/studio/)

### 📈 Pouls
[![Pouls](assets/thumbs/statut.jpg)](https://matgordfr.github.io/matgord-portfolio-demos/statut/)

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

```
index.html            → le hub (cette page d'accueil)
forno/                → démo 1 · pizzeria napolitaine
studio/               → démo 2 · studio créatif « Sillage »
statut/               → démo 3 · produit « Pouls »
  assets/{css,js,fonts}
assets/                → fonts + vignettes du hub
```

Chaque démo est **autonome** : son propre HTML, CSS, JS et ses polices. On peut ouvrir n'importe quel dossier isolément.

## 🚀 Lancer en local

Ouvrez `index.html` — ou servez le dossier :

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

## 👤 Auteur

Réalisé par **[MatgordFR](https://github.com/MatgordFR)** — dev indépendant (bots Discord, sites, IA).
🌐 [matgord.com](https://matgord.com) · 🐦 [@matgordfr](https://x.com/matgordfr)

## 📄 Licence

[ISC](LICENSE) — libre d'usage.
