# vue-basic

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# 📁 Vue 3 + Vite Project Structure

Proyek ini menggunakan **Vue 3** dengan **Vite** sebagai build tool. Berikut adalah struktur direktori dan penjelasannya.

---

## 📂 Struktur Folder

```text
VUE-BASIC/
├── .vscode/                # Pengaturan editor khusus VS Code
├── node_modules/           # Folder dependencies hasil dari npm/yarn install
├── public/                 # File statis (favicon, dsb) yang langsung dicopy saat build
│   └── favicon.ico
│
├── src/                    # Folder utama kode aplikasi
│   ├── assets/             # File static: CSS, gambar, logo
│   │   ├── base.css
│   │   ├── logo.svg
│   │   └── main.css
│   │
│   ├── components/         # Komponen Vue yang bisa digunakan ulang
│   │   ├── icons/
│   │   ├── CompositionComponent.vue
│   │   ├── OptionsComponent.vue
│   │   └── TextInterpolation.vue
│   │
│   ├── App.vue             # Komponen root aplikasi
│   └── main.js             # Entry point aplikasi
│
├── index.html              # HTML utama
├── package.json            # Info project + dependencies
├── vite.config.js          # Konfigurasi Vite
└── README.md
```

## 📌 Penjelasan Penting

### `App.vue`
Komponen utama aplikasi yang menjadi root untuk seluruh komponen lain.

### `main.js`
File utama yang digunakan untuk membuat dan mount Vue App ke elemen di `index.html`.

```sh
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

createApp(App).mount('#app')
```
