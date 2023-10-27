import socialNetwork from "../common/photos/projects/social-page_main.png";
import todoList from "../common/photos/projects/to-do-list.png";
import learningCards from "../common/photos/projects/learning-cards.jpg";

export const state = {
    en:{
        header:{
            menu:['home', 'aboutMe', 'skills', 'projects', 'contacts']
        },
        main:{
            span:'Hi There!',
            h1:'I am Vlad Kulesh!',
            p:'A Frontend Developer',
            buttonContact:'Contact Me',
            buttonView:'View My Works',
            id:'home',
            buttonContacts:'contacts',
            buttonProjects:'projects'
        },
        aboutMe:{
            h2:'AboutMe',
            descriptionAboutMe:
               'I’m a front-end developer. I develop applications on React using TypeScript ReduxToolKit and RTK Query to work with REST API.' +
                ' I also have experience in creating my own UI libraries based on RadixUI and testing them using Storybook.' +
                ' Creating an application from scratch, developing an authorisation flow, from independent components to connecting REST API.' +
                ' I worked with various ui libraries: MaterialUi, AntDesign, Radix UI.' +
                ' I have experience working with preprocessors SCSS, SAAS. Participation in teamwork, working with GIT.',
            items:[
                {title:'From:',description:'Minsk,Belarus'},
                {title:'Date of birth:',description:'December,1997 19'},
                {title:'Email:',description:'kulesh_uladzislau@mail.ru'},
                {title:'Name:',description:'Kulesh Vlad'},

            ],
            id:'aboutMe'
        },
        skillsPage:{
            id:'skills',
            h2:'How i help you in your next project'
        },
        projectPage:{
            h2:'My Projects',
            projects:[
                {
                    img:socialNetwork,
                    title:'Social Network',
                    link:'https://kuleshuladzislau.github.io/SocialNetWork/',
                    description: 'Small social network where you can find friends, follow their activity and communicate with them.'
                },
                {
                    img:todoList,
                    title:'ToDoList',
                    link:'https://kuleshuladzislau.github.io/TodoList',
                    description:'The application helps to set tasks, to prioritise them To change their position with the help of drag and drop.'
                },
                {
                    img:learningCards,
                    title:'Learning Cards',
                    link:'https://kuleshuladzislau.github.io/TodoList',
                    description: 'Training according to the old methodology ' +
                        '- constant repetition,where cards that are marked with a low rating fall out more often '
                },
            ],
            id:'projects'

        },
        contactsPage:{
            h2:'Contacts',
            name:'What is Your Name:',
            email:'Your Email Address:',
            help:'How can I help You?:',
            id:'contacts',
            recommendationForUser:
             'Please give me as accurate information as possible so that our first meeting is as productive as possible. ' +
                'I’ll be happy to help you if my skills and experience match your requirements. ' +
                'Please fill out the form or we can chat personally.',
            phone:'Call:'
        }
    },
    ru:{
        header:{
            menu:['главная','обо мне','скиллы','проекты','контакты']
        },
        main:{
            span:'Привет всем!',
            h1:'Я Влад Кулеш!',
            p:'Фронтенд Разработчик',
            buttonContact:'Контакты',
            buttonView:'Мои Работы',
            id:'главная',
            buttonContacts:'контакты',
            buttonProjects:'проекты'
        },
        aboutMe:{
            h2:'Обо Мне',
            descriptionAboutMe:
               'Я фронтенд разработичк.Разрабатываю приложения на React используя TypeScript ReduxToolKit и RTK Query для ' +
                'работы с REST API.Так же имею опыт в создании собственных UI библиотек на основе RadixUI ' +
                'и тестирования их с помощью Storybook.Создание приложения с нуля ,разработка авторизационного флоу ,от независимых компонент до подключения REST API.Работал с различнимы ui библиотеками : MaterialUi, AntDesign,Radix UI.' +
                'Имею опыт работы с препроцессорами SCSS,SAAS.' +
                'Участие в командной работе ,работа с GIT. ',
            items:[
                {title:'Нахожусь:',description:'Минск,Беларусь'},
                {title:'Дата Рождения:',description:'19 декабря 1997'},
                {title:'Почта:',description:'kulesh_uladzislau@mail.ru'},
                {title:'Имя:',description:'Кулеш Влад'},

            ],
            id:'обо мне'
        },
        skillsPage:{
            id:'скиллы',
            h2:'Мои навыки'
        },
        projectPage:{
            h2:'Мои проекты',
            projects:[
                {
                    img:socialNetwork,
                    title:'Социальная сеть',
                    link:'https://kuleshuladzislau.github.io/SocialNetWork/',
                    description:'Небольшая социальная сеть,где можно находить друзей,следить за их активностью ' +
                        ' и общаться с ними.'

                },
                {
                    img:todoList,
                    title:'Таск Менеджер',
                    link:'https://kuleshuladzislau.github.io/TodoList',
                    description: 'Приложение помогает ставить задачи,выставлять их приоритет,' +
                        'и с помощью драгн дропа менять их положение.'
                },
                {
                    img:learningCards,
                    title:'Обучающие карточки',
                    link:'https://kuleshuladzislau.github.io/TodoList',
                    description: 'Обучение по старой методике - постоянного повторения' +
                        ' ,где карточки ,которые отмечены низкой оценкой,выпадают чаще '
                },

            ],
            id:'проекты',

        },
        contactsPage:{
            h2:'Контакты',
            name:'Ваше Имя:',
            email:'Ваша электронная почта:',
            help:'Как я Вам могу помочь?:',
            id:'контакты',
            recommendationForUser:
                'Пожалуйста,дайте как можно более точную информацию,чтобы наша первая встреча была' +
                ' мамксимально продуктивной. Буду рад Вам помочь,если мои навыки и опыт совпадут с' +
                ' вашими требованиями. Заполните ,пожалуйста, форму или можем пообщаться лично.',
            phone:'Тел:'
        }

    }
}
