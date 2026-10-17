# My Routine — многостраничная PWA

## Структура
- `index.html` — Сегодня: прогресс, вода, дедлайны, мини-календарь.
- `tasks.html` — Задачи: добавление, фильтры, дедлайны.
- `habits.html` — Привычки: отметки и серии.
- `calendar.html` — Календарь: тренировки и месяцы.
- `more.html` — Заметки, экспорт/импорт, настройки.
- `style.css`, `app.js` — общий дизайн и логика.
- `manifest.json`, `service-worker.js`, `icons/` — PWA.

## Публикация на GitHub Pages
1. Создай репозиторий `my-routine`.
2. Загрузи все файлы и папку `icons`.
3. Settings → Pages → Branch: `main`, Folder: `/ (root)` → Save.
4. Открой `https://ТВОЙ_НИК.github.io/my-routine/`.

## Обновление PWA
После изменения файлов увеличь номер в `service-worker.js`:
`const CACHE_NAME = "my-routine-v3";`
