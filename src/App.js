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


function App() {


    const [overflowMode,setOverflowMode] = useState(false)

    const onClickHandler = ()=>{
        setOverflowMode(!overflowMode)
    }

    useEffect(() => {
        if (overflowMode) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [overflowMode]);


    const {setCurrentPage } = useContext(ScrollContext);
    const scrollHandler = () => {
        const componentIds = ['home', 'contacts', 'aboutMe', 'skills', 'projects'];
        const updatedComponents = [];


        componentIds.forEach((componentId) => {
            const component = document.getElementById(componentId);

            if (component) {
                const { top, bottom } = component.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (top < windowHeight && bottom > 20 && !updatedComponents.includes(componentId)) {
                    updatedComponents.push(componentId);
                }
            }
        });

        setCurrentPage(updatedComponents[updatedComponents.length - 1]); // Используем только последнее обновленное значение
    };

    useLayoutEffect(() => {
        window.addEventListener('scroll', scrollHandler);
    }, []);

    console.log(overflowMode)

    return (
        <div  >
            <Header setOverflowMode={onClickHandler} />
            <Main/>
            <AboutMe/>
            <Skills/>
            <MyProjects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
