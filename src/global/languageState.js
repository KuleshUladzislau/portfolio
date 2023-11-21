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
                <>
                  I’m a front-end developer. I develop applications on <b>React</b> using <b>TypeScript</b>
                    <b>ReduxToolKit</b> and <b>RTK Query</b> to work with <b>REST API</b>.
                  I also have experience in creating my own <b>UI libraries</b> based on RadixUI and testing them using <b>Storybook</b>.
                  Creating an application from scratch, developing an authorisation flow, from independent components to connecting REST API
                  I worked with various ui libraries: <b>MaterialUi</b>, <b>AntDesign</b>, <b>Radix UI</b>.
                  I have experience working with preprocessors <b>SCSS</b>, <b>SAAS</b>. Participation in teamwork, working with <b>GIT</b>.
                </>,
            items:[
                {title:'From:',description:'Minsk , Belarus'},
                {title:'Date of birth:',description:'19 December 1997 '},
                {title:'Email:',description:'kulesh_uladzislau@mail.ru'},
                {title:'Name:',description:'Kulesh Vlad'},

            ],
            id:'aboutMe'
        },
        skillsPage:{
            id:'skills',
            h2:'How can i help you in your next project'
        },
        projectPage:{
            h2:'My Projects',
            projects:[
                {
                    img:socialNetwork,
                    title:'Social Network',
                    link:'https://kuleshuladzislau.github.io/SocialNetWork',
                    description: 'Small social network where you can find friends, follow their activity and communicate with them.'
                },
                {
                    img:todoList,
                    title:'Task-Manager',
                    link:'https://kuleshuladzislau.github.io/Task-Manager/',
                    description:'The application helps to set tasks, to prioritise them To change their position with the help of drag and drop.'
                },
                {
                    img:learningCards,
                    title:'Learning Cards',
                    link:'https://team-cards-h4mu.vercel.app/login',
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
            living:'Living in:',
            address:'Minsk, Belarus',
            recommendationForUser:

             'Please give me as accurate information as possible so that our first meeting is as productive as possible. ' +
                'I’ll be happy to help you if my skills and experience match your requirements. ' +
                'Please fill out the form or we can chat personally.',
            phone:'Call:',
            errors:{
                email:'Invalid email address',
                message:'Please fill in the field',
                name:'Please fill in the field'
            }
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
               <>
                   Я <b>фронтенд разработичк</b>. Разрабатываю приложения на <b>React</b> используя <b>TypeScript</b>, <b>ReduxToolKit</b> и <b>RTK Query</b> для
                 работы с <b>REST API</b>.Так же имею опыт в создании собственных <b>UI</b> библиотек на основе <b>RadixUI</b>
                   <span> и</span> тестирования их с помощью <b>Storybook</b> . Создание приложения с нуля ,разработка авторизационного флоу ,от независимых компонент
                 до подключения REST API.Работал с различнимы ui библиотеками : <b>MaterialUi</b>, <b>AntDesign</b>, <b>Radix
                   UI</b>.
                 Имею опыт работы с препроцессорами <b>SCSS</b> , <b>SAAS</b>.
                 Участие в командной работе ,работа с <b>GIT</b>.
                </>,
            items:[
                {title:'Нахожусь:',description:'Минск , Беларусь'},
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
                    link:'https://kuleshuladzislau.github.io/Task-Manager/',
                    description: 'Приложение помогает ставить задачи,выставлять их приоритет,' +
                        'и с помощью драгн дропа менять их положение.'
                },
                {
                    img:learningCards,
                    title:'Обучающие карточки',
                    link:'https://team-cards-h4mu.vercel.app/login',
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
            phone:'Тел:',
            living:'Проживаю:',
            address:'Минск, Беларусь',
            errors:{
                email:'Неверный формат почты',
                message:'Пожалуйста ,заполните поле',
                name:'Пожалуйста ,заполните поле'
            }
        }

    }
}
