<!-- omit in toc -->
# 📊 Stack Overflow 2025 – Clasificación

Sitio web y repositorio para el **Clasificación** usando el dataset **[Stack Overflow Annual Developer Survey 2025](https://www.kaggle.com/datasets/edoardogalli/stack-overflow-annual-developer-survey-2025)**.

---

**Autor**: Gaston Nina Sossa

**Materia:** Modelado de Datos I

---
- [🗂️ Estructura](#️-estructura)
- [✏️ Edición de contenido](#️-edición-de-contenido)
- [🧾 Dataset](#-dataset)

## 🗂️ Estructura
```
.
├─ docs/                  # GitHub Pages (habilitar Pages: main /docs)
│  ├─ index.html          # Presentación reveal.js + menú + Plotly
│  └─ assets/
│     ├─ css/custom.css
│     └─ js/app.js
├─ notebooks/
│  ├─ eda/                # Notebooks de EDA (bivariados, etc.)
│  └─ models/             # Modelos (LogReg, RF, XGB, CV, métricas)
├─ data/
│  ├─ raw/                # Datos originales
│  └─ processed/          # Datos limpios/feature engineered
├─ latex/
│  ├─ src/                # Futuro: .tex, bib, figs
│  └─ build/              # Artefactos de compilación
├─ scripts/               # Utilidades (ETL, export gráficas)
├─ .gitignore
```

## ✏️ Edición de contenido
- Modifica `docs/index.html` para actualizar textos/secciones.
- Inserta imágenes/plots estáticos en `docs/assets/` o usa Plotly embebido.
- Coloca notebooks en `notebooks/` y datos en `data/` (no subas archivos muy pesados).

## 🧾 Dataset
- Kaggle: https://www.kaggle.com/datasets/edoardogalli/stack-overflow-annual-developer-survey-2025

---
**Tip**: Si usas Colab, monta el repo con `git` o sube notebooks a `notebooks/` y exporta gráficos a `docs/assets/plots/` para usarlos en la presentación.
