 const express = require('express');
   const path = require('path');
   const app = express();

   // Переменные окружения
   const PORT = process.env.PORT || 3000;
   const GEMINI_API_KEY = process.env.API_KEY;

   // Устанавливаем middleware для парсинга JSON
   app.use(express.json());
   // Устанавливаем middleware для обслуживания статических файлов
   app.use(express.static(path.join(__dirname, 'public')));

   // Основной маршрут для отдачи главной страницы
   app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, 'public', 'index.html'));
   });

   // Маршрут для обработки запросов к Gemini
   app.post('/api/generate', async (req, res) => {
     // Проверяем, был ли передан API ключ
     if (!GEMINI_API_KEY) {
       return res.status(500).json({ error: 'API_KEY не сконфигурирован на сервере' });
     }

     const { prompt } = req.body;

     // Проверяем, был ли передан промпт
     if (!prompt) {
       return res.status(400).json({ error: 'Промпт не был предоставлен' });
     }

     try {
       const fetch = (await import('node-fetch')).default;
       const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;
       ледний, самый важный шаг — логика для фронтенда, которая будет отправлять запрос на наш бэкенд.
       const response = await fetch(geminiUrl, {
         method: 'POST',blic/script.js`
         headers: {───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
           'Content-Type': 'application/json',                                                                                                            │
         },                                                                                                                                               │
         body: JSON.stringify({MContentLoaded', () => {                                                                                                   │
           contents: [{ = document.getElementById('prompt-input');                                                                                        │
             parts: [{tton = document.getElementById('generate-button');                                                                                  │
               text: promptdocument.getElementById('response-text');                                                                                      │
             }]                                                                                                                                           │
           }]eButton.addEventListener('click', async () => {                                                                                              │
         })onst prompt = promptInput.value;                                                                                                               │
       });if (!prompt) {                                                                                                                                  │
│             alert('Пожалуйста, введите ваш вопрос.');                                                                                                   │
       if (!response.ok) {                                                                                                                                │
           const errorData = await response.json();                                                                                                       │
           console.error('Ошибка от Gemini API:', errorData);                                                                                             │
           throw new Error(`Ошибка API: ${response.statusText}`);                                                                                         │
       }  generateButton.disabled = true;                                                                                                                 │
│         responseText.textContent = 'Обработка запроса...';                                                                                              │
       const data = await response.json();                                                                                                                │
          try {                                                                                                                                           │
       // Проверяем наличие текста в ответе'/api/generate', {                                                                                             │
       const text = data.candidates?.[0]?.content?.parts?.[0]?.text;                                                                                      │
       if (text) {headers: {                                                                                                                              │
           res.json({ response: text });pplication/json',                                                                                                 │
       } else {   },                                                                                                                                      │
           console.error('Неверный формат ответа от Gemini:', data);                                                                                      │
           res.status(500).json({ error: 'Не удалось извлечь текст из ответа API' });                                                                     │
       }                                                                                                                                                  │
│             const data = await response.json();                                                                                                         │
     } catch (error) {                                                                                                                                    │
       console.error('Внутренняя ошибка сервера:', error);                                                                                                │
       res.status(500).json({ error: 'Внутренняя ошибка сервера при обращении к Gemini API' });                                                           │
     }        } else {                                                                                                                                    │
   });            responseText.textContent = 'Ошибка: ' + (data.error || 'Неизвестная ошибка');                                                           │
│             }                                                                                                                                           │
   // Запускаем сервер                                                                                                                                    │
   app.listen(PORT, () => {                                                                                                                               │
     console.log(`Сервер запущен на порту ${PORT}`);роса:', error);                                                                                       │
   });        responseText.textContent = 'Не удалось подключиться к серверу. Посмотрите в консоль для деталей.';                                          │
│         } finally {                                                                                                                                     │
  ---         // Включаем кнопку обратно                                                                                                                  │
│             generateButton.disabled = false;

