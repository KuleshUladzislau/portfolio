import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyProjects} from "./MyProjects/MyProjects";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";
import {AboutMe} from "./AboutMe/AboutMe";
import {useContext, useEffect, useLayoutEffect, useRef, useState} from "react";
import {logDOM} from "@testing-library/react";
import {ScrollContext} from "./assets/scrollContext";
import {state} from "./global/languageState";


function App() {


    const [overflowMode,setOverflowMode] = useState(false)
    const [language,setLanguage] = useState('en')

    const onClickHandler = ()=>{
        setOverflowMode(!true)
    }

    useEffect(() => {
        if (overflowMode) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, []);


    const {setCurrentPage,currentPage } = useContext(ScrollContext);

    const scrollHandler = () => {
        const componentIds = state[language].header.menu
        const updatedComponents = [];



        componentIds.forEach((componentId) => {
            const component = document.getElementById(componentId);

            if (component) {
                const { top, bottom } = component.getBoundingClientRect();
                const windowHeight = window.innerHeight;


                if (top + 480 < windowHeight && bottom > 0 && !updatedComponents.includes(componentId)) {
                    updatedComponents.push(componentId);
                }
            }
        });

        setCurrentPage(updatedComponents[updatedComponents.length-1]); // Используем только последнее обновленное значение
    };

    useLayoutEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        scrollHandler()
    }, [language]);



    return (
        <div  >
            <Header setOverflowMode={onClickHandler}
                    headerNav={state[language].header}
                    changeLanguage={setLanguage}
                    language={language}
            />
            <Main mainState={state[language].main}/>
            <AboutMe aboutMeState={state[language].aboutMe}/>
            <Skills skillState={state[language].skillsPage}/>
            <MyProjects projectsState={state[language].projectPage}/>
            <Contacts contactsState={state[language].contactsPage}/>
            <Footer/>
        </div>
    );
}

export default App;
