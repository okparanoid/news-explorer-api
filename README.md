# **news-explorer-api**

## О проекте:
Бэкенд для дипломного проекта Яндекс.Практикума

## Основной функционал: 
- POST /signup - создаёт пользователя с переданными в теле email, password и name
- POST /signin - проверяет переданные в теле почту и пароль
- GET /users/me - возвращает информацию о пользователе (email и имя)
- GET /articles - возвращает все сохранённые пользователем статьи
- POST /articles - создаёт статью с переданными в теле keyword, title, text, date, source, link и image
- DELETE /articles/articleId - удаляет сохранённую статью  по _id

## Инструкции по запуску:
- Скачать или склонировать репозиторий
- Установить зависимости при помощи npm - `npm i`
- Запустить в development режиме - `npm run dev`
- Запустить сборку production-билда - `npm run start`

### [Домен](http://okrelax.students.nomoreparties.co)

### [IP-адрес](http://84.201.131.108)
