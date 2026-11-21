# YachtJet — Training Landing Page

**[English](#english) · [Українська](#українська)**

> ⚠️ **This is a training project.**
> YachtJet is a fictional brand. The site does not offer real services, the form does not send data anywhere, and nothing on the page can be booked or bought.
>
> ⚠️ **Це навчальний проєкт.**
> YachtJet — вигаданий бренд. Сайт не надає реальних послуг, форма нікуди не відправляє дані, і на сторінці нічого не можна забронювати чи купити.

---

## English

### About the project

A responsive landing page for a fictional luxury yacht rental company, built from a ready-made Figma design.
I made it after finishing the full-stack course at GoIT, to practice turning a design into pixel-accurate HTML and CSS.

**Live demo:** https://anton-symonenko-ua.github.io/JachtJet-training-project-/

### What I practiced

- Semantic HTML: sections, `nav`, `dl` for yacht specs, visually hidden form labels
- Building a layout to match Figma on four breakpoints: **1440**, **1280**, **768** and **375** px
- Flexbox and CSS Grid, overlapping blocks, CSS custom properties
- Hover and focus states from the design's UI Kit
- Retina images with `srcset` and `@2x` background images in WebP
- An SVG sprite for icons and an SVG favicon with a PNG fallback
- An accessible mobile menu in plain JavaScript: closes with Escape or on link click, moves focus, uses `inert` for the page behind it

### Tech stack

- HTML5
- CSS3 (no frameworks or preprocessors)
- Vanilla JavaScript (the mobile menu only)
- Google Fonts: Inter

### Project structure

```
├── index.html
├── styles.css
├── js/
│   └── menu.js        # mobile menu
└── images/
    ├── icons.svg      # SVG sprite
    ├── favicon.svg
    └── *.webp         # images in 1x and @2x
```

### How to run locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Anton-Symonenko-UA/JachtJet-training-project-.git
   ```
2. Open the folder in VS Code and start **Live Server**.

Open the page through a local server, not by double-clicking `index.html`: icons from the SVG sprite and the favicon don't load from `file://`.

### Disclaimer

This project was made for learning purposes only. The design, photos and brand name belong to their respective owners and are used here only for practice. The project is not intended for commercial use.

---

## Українська

### Про проєкт

Адаптивний лендинг для вигаданої компанії з оренди яхт, зверстаний за готовим макетом у Figma.
Я зробив його після закінчення курсу Full Stack у GoIT, щоб потренуватися точно переносити макет в HTML і CSS.

**Живе демо:** https://anton-symonenko-ua.github.io/JachtJet-training-project-/

### Що я відпрацював

- Семантичну верстку: секції, `nav`, `dl` для характеристик яхт, приховані label у формі
- Верстку за макетом на чотирьох брейкпоінтах: **1440**, **1280**, **768** і **375** px
- Flexbox і CSS Grid, блоки, що накладаються один на одного, CSS-змінні
- Hover- і focus-стани за UI Kit макета
- Retina-зображення через `srcset` і фонові картинки `@2x` у форматі WebP
- SVG-спрайт для іконок і SVG-favicon із запасним PNG
- Доступне мобільне меню на чистому JavaScript: закривається по Escape і після кліку на пункт, переносить фокус, блокує сторінку позаду через `inert`

### Технології

- HTML5
- CSS3 (без фреймворків і препроцесорів)
- Vanilla JavaScript (лише мобільне меню)
- Google Fonts: Inter

### Структура проєкту

```
├── index.html
├── styles.css
├── js/
│   └── menu.js        # мобільне меню
└── images/
    ├── icons.svg      # SVG-спрайт
    ├── favicon.svg
    └── *.webp         # зображення 1x і @2x
```

### Як запустити локально

1. Склонуй репозиторій:
   ```bash
   git clone https://github.com/Anton-Symonenko-UA/JachtJet-training-project-.git
   ```
2. Відкрий папку у VS Code і запусти **Live Server**.

Відкривай сторінку через локальний сервер, а не подвійним кліком по `index.html`: іконки зі SVG-спрайта і favicon не завантажуються з `file://`.

### Застереження

Проєкт створено виключно з навчальною метою. Дизайн, фотографії та назва бренду належать їхнім власникам і використані тут лише для практики. Проєкт не призначений для комерційного використання.
