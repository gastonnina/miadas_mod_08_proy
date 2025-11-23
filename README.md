<!-- omit in toc -->
# 📊 Modelo Supervisado – Stack Overflow Survey 2025
**Predicción de adopción de herramientas de IA en desarrolladores**

Sitio web y repositorio del Sprint 1 para la materia **Modelamiento de Datos I (UMSA)**.  
El proyecto implementa un flujo completo de **clasificación supervisada** usando el dataset:

**📌 Stack Overflow Annual Developer Survey 2025**  
https://www.kaggle.com/datasets/edoardogalli/stack-overflow-annual-developer-survey-2025

---
<!-- omit in toc -->
## 👤 Información general

| | |
|-|-|
| **Autor** | Gaston Nina Sossa |
| **Posgrado** | Maestría en Inteligencia Artificial y Data Science |
| **Materia** | Modelamiento de Datos I – Sprint 1 |
| **🌐 Sitio Web (Presentación)** | https://gastonnina.github.io/miadas_mod_08_proy/ |
| **🗃️ Repositorio GitHub** | https://github.com/gastonnina/miadas_mod_08_proy |
| **📄 PDF Final (Latex)** | _Inclúyelo aquí cuando lo generes_ |

---
<!-- omit in toc -->
# 📑 Tabla de Contenidos
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [⚙️ Flujo del Proyecto](#️-flujo-del-proyecto)
- [✏️ Cómo editar contenido](#️-cómo-editar-contenido)
- [📊 Dataset](#-dataset)
- [🧪 Reproducibilidad](#-reproducibilidad)
- [📘 Notebooks incluidos](#-notebooks-incluidos)
- [📦 Requisitos (opcional)](#-requisitos-opcional)

---

## 📁 Estructura del Proyecto

```
.
├── docs/
│   ├── index.html
│   └── assets/
│       ├── css/
│       ├── js/
│       └── charts/
├── notebooks/
│   ├── eda/
│   ├── models/
│   └── optimization/
├── data/
│   ├── raw/
│   └── processed/
├── latex/
│   ├── main.tex
│   ├── *.tex
│   ├── referencias.bib
│   └── images/
├── scripts/
├── Makefile
├── README.md
└── requirements.txt
```

---

## ⚙️ Flujo del Proyecto

1. **EDA inicial**
2. **Modelos competidores**
3. **Comparación con criterio preciso**
4. **Selección del modelo ganador**
5. **Optimización del modelo**
6. **Presentación (Reveal.js)**
7. **Documento académico (LaTeX)**

---

## ✏️ Cómo editar contenido

- Editar slides en: `docs/index.html`
- Editar CSS/JS: `docs/assets/`
- Notebooks: `notebooks/`
- Datos: `data/`
- Documento académico: `latex/`

---

## 📊 Dataset

Kaggle:  
https://www.kaggle.com/datasets/edoardogalli/stack-overflow-annual-developer-survey-2025

---

## 🧪 Reproducibilidad

Instalar dependencias:
```bash
pip install -r requirements.txt
```

Ejecutar notebooks:
```bash
jupyter notebook
```

Compilar LaTeX:
```bash
cd latex
make
```

---

## 📘 Notebooks incluidos

| Carpeta | Contenido |
|--------|-----------|
| `notebooks/eda/` | Exploración y correlaciones |
| `notebooks/models/` | Modelos, métricas, CV |
| `notebooks/optimization/` | GridSearch y RandomizedSearch |

---

## 📦 Requisitos (opcional)
```
pandas
numpy
scikit-learn
plotly
matplotlib
seaborn
jupyter
```
