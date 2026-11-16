<div align="center">
  <h1>mobile.info</h1>
  <p><strong>Твой следующий смартфон начинается здесь.</strong></p>
  <p>Небольшой каталог современных смартфонов с отдельными страницами характеристик и адаптивным интерфейсом.</p>
  <p>
    <a href="https://xaretsaka.github.io/Praktika/">Открыть сайт</a>
    ·
    <a href="https://github.com/xaretsaka/Praktika">Исходный код</a>
  </p>
  <p>
    <img src="https://img.shields.io/badge/HTML5-разметка-E34F26?logo=html5&logoColor=white" alt="HTML5">
    <img src="https://img.shields.io/badge/SCSS-стили-CF649A?logo=sass&logoColor=white" alt="SCSS">
    <img src="https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript">
    <img src="https://img.shields.io/badge/Gulp-сборка-CF4647?logo=gulp&logoColor=white" alt="Gulp">
    <img src="https://img.shields.io/badge/Hosting-GitHub%20Pages-222222?logo=githubpages&logoColor=white" alt="GitHub Pages">
  </p>
</div>

---

## О проекте

**mobile.info** — учебный информационный сайт о смартфонах. На главной странице размещён каталог из шести моделей. Для каждой модели предусмотрена отдельная страница с основными характеристиками, изображением устройства и ссылкой на источник информации производителя.

Проект выполнен на HTML, SCSS и JavaScript. Для подготовки стилей и копирования ресурсов используется Gulp. Интерфейс оформлен в тёмной цветовой гамме с фиолетовыми акцентами и адаптируется под разные размеры экранов.

## Каталог смартфонов

| Модель | Страница |
|---|---|
| Apple iPhone 18 Pro | [`iphone.html`](./iphone.html) |
| Samsung Galaxy S26 Ultra | [`samsung.html`](./samsung.html) |
| Google Pixel 11 Pro | [`google.html`](./google.html) |
| OnePlus 15 | [`oneplus.html`](./oneplus.html) |
| Xiaomi 17 Ultra | [`xiaomi.html`](./xiaomi.html) |
| Nothing Phone (3) | [`nothing.html`](./nothing.html) |

## Возможности

- **Каталог устройств** — карточки смартфонов с изображениями и краткими описаниями.
- **Страницы моделей** — отдельные HTML-страницы с характеристиками каждого устройства.
- **Навигация по сайту** — переходы между главной страницей, каталогом и разделом «О проекте».
- **Адаптивная вёрстка** — перестроение сетки карточек и элементов интерфейса на узких экранах.
- **Мобильное меню** — раскрытие меню с помощью кнопки, закрытие при выборе ссылки, клике вне меню или нажатии `Esc`.
- **Источники характеристик** — ссылки на страницы производителей размещены на страницах соответствующих смартфонов.
- **Сравнение моделей** — отдельная ссылка ведёт на внешний сервис NanoReview; сравнение не реализовано как внутренняя функция сайта.

## Технологии

| Инструмент | Для чего используется |
|---|---|
| HTML5 | Структура страниц и контент |
| SCSS / Sass | Организация и написание стилей с использованием переменных, миксинов и отдельных модулей |
| JavaScript | Логика мобильной навигации и взаимодействие с элементами страницы |
| Gulp 5 | Автоматизация сборки и отслеживание изменений в исходниках |
| Autoprefixer | Добавление необходимых CSS-префиксов |
| PostCSS | Обработка CSS в процессе сборки |
| gulp-clean-css | Минификация итогового CSS |
| npm | Установка и управление инструментами разработки |

Сторонние JavaScript-библиотеки для интерфейса не используются: логика меню написана на нативном JavaScript.

## Структура проекта

```text
mobile.info/
├── index.html              # Главная страница и каталог
├── iphone.html             # Страница iPhone 18 Pro
├── samsung.html            # Страница Galaxy S26 Ultra
├── google.html             # Страница Pixel 11 Pro
├── oneplus.html            # Страница OnePlus 15
├── xiaomi.html             # Страница Xiaomi 17 Ultra
├── nothing.html            # Страница Nothing Phone (3)
│
├── src/                    # Исходные файлы
│   ├── scss/
│   │   ├── main.scss       # Главный SCSS-файл
│   │   ├── _base.scss      # Базовые стили
│   │   ├── _layout.scss    # Шапка, навигация и подвал
│   │   ├── _components.scss # Карточки, сетки и компоненты
│   │   ├── _phone.scss     # Стили страниц смартфонов
│   │   ├── _pages.scss     # Стили отдельных секций и адаптива
│   │   ├── _mixins.scss    # Миксины и медиазапросы
│   │   └── _variables.scss # Цвета, размеры и точки перелома
│   ├── js/
│   │   └── main.js         # Исходный JavaScript
│   └── img/                # Исходные изображения
│
├── css/
│   └── main.css            # Скомпилированный CSS
├── js/
│   └── main.js             # Копия JavaScript для сайта
├── img/                    # Ресурсы, скопированные Gulp
│
├── gulpfile.js             # Конфигурация Gulp
├── package.json            # Скрипты и зависимости проекта
├── package-lock.json       # Зафиксированные версии зависимостей
└── .gitignore              # Исключения для Git
```

## Запуск проекта локально

### Требования

- [Node.js](https://nodejs.org/) — рекомендуется актуальная LTS-версия.
- npm — устанавливается вместе с Node.js.
- [Git](https://git-scm.com/) — для клонирования репозитория.

### 1. Клонирование репозитория

```bash
git clone https://github.com/xaretsaka/Praktika.git
cd Praktika
```

### 2. Установка зависимостей

```bash
npm ci
```

`npm ci` устанавливает зависимости в соответствии с `package-lock.json`.

### 3. Сборка проекта

```bash
npm run build
```

После выполнения команды Gulp пересоздаёт каталоги сборки и формирует CSS, копирует JavaScript и изображения.

### 4. Режим разработки

```bash
npm run dev
```

Команда выполняет первоначальную сборку и запускает наблюдение за изменениями в `src/scss/`, `src/js/` и `src/img/`. При изменении исходников соответствующие файлы обрабатываются автоматически.

> **Важно:** `npm run dev` запускает наблюдение Gulp, а не локальный веб-сервер. Для просмотра сайта откройте `index.html` в браузере или используйте расширение Live Server в Visual Studio Code.

## Задачи Gulp

| Задача | Действие |
|---|---|
| `styles` | Компилирует `src/scss/main.scss`, применяет Autoprefixer и минифицирует CSS в `css/` |
| `scripts` | Копирует JavaScript из `src/js/` в `js/` |
| `images` | Копирует изображения из `src/img/` в `img/` |
| `clean` | Удаляет каталоги `css/`, `js/` и `img/` перед новой сборкой |
| `build` | Выполняет очистку и затем запускает задачи стилей, скриптов и изображений параллельно |
| `dev` | Выполняет `build` и отслеживает изменения исходных файлов |

Доступные npm-команды:

```bash
npm run build  # Однократная сборка
npm run dev    # Сборка и отслеживание изменений
```

## Публикация

Опубликованная версия проекта доступна на **GitHub Pages**:

**[https://xaretsaka.github.io/Praktika/](https://xaretsaka.github.io/Praktika/)**

Исходный код и история изменений находятся в репозитории:

**[https://github.com/xaretsaka/Praktika](https://github.com/xaretsaka/Praktika)**

## Обновление проекта на GitHub

После внесения изменений выполните в корневой папке проекта:

```bash
git add .
git commit -m "Update website"
git push origin main
```

---

<div align="center">
  <sub>mobile.info · Учебный проект о смартфонах и технологиях</sub>
</div>
