import React from 'react';

const store = {
    projects: [
        {
            id: 1,
            title: '1. Текущий действующий сайт',
            description: 'Сайт сделан на React, подключен API emailJS для обратной связи.',
            reference: 'Ссылка на GitHub: https://github.com/Andreygsmnn/resume.git '
        },
        {
            id: 2,
            title: '2. Мини приложение для работы с Контактами',
            description: 'Реализация на TypeScript-React-Redux. Доступ к контактам открывается только после прохождения авторизации(логин: abc@gmail.com пароль:12345 ).Реализованы функции поиска, редактирования, удаления, добавления контактов',
            reference: 'Ссылка на GitHub: https://github.com/Andreygsmnn/contacts_app.git  и ссылка на deploy: https://typescript-app-contacts.netlify.app'
        },
    ],
    layouts: [
        {   id: 11,
            title: '1. Одностраничный сайт с рекламным контентом',
            description: 'Пример верстки по макету figma, проверен валидатором HTML и GooglePageSpeed',
            reference: 'Ссылка на GitHub: https://github.com/Andreygsmnn/example_layout.git и ссылка на deploy: https://clinquant-kringle-ee2903.netlify.app'
        },
       
    ]
}

export default store;


