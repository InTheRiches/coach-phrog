import Navigation from '@/components/Navigation'
import Content from '@/components/Content'
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import {useEffect} from "react";
import {useRouter} from "next/router";
import ContentScroll from "@/components/ContentScroll";
import useDarkMode from 'use-dark-mode';
import {ScrambleElement} from "@/components/Scrambler";

export default function ContentPage({ currentTopic, content }) {
    ContentScroll();

    const { value: isDarkMode, toggle: toggleDarkMode } = useDarkMode();

    useEffect(() => {
        if (isDarkMode) {
          document.documentElement.classList.add('dark');
          document.body.classList.add('d');
        } else {
          document.documentElement.classList.remove('dark');
          document.body.classList.remove('d');
        }
    }, [isDarkMode]);

    useEffect(() => {
        // Select all text elements on the page
        const textElements = document.querySelectorAll('h1, h2');

        // Loop through each text element
        textElements.forEach((element) => {
            ScrambleElement(element, true, false);
        });
    }, []);

    return (
        <div className={"flex flex-col min-h-screen bg-white dark:bg-neutral-900 text-slate-900 dark:text-slate-50 justify-center items-center"}>
            <Navigation dark={isDarkMode} setDark={toggleDarkMode}></Navigation>

            <div className="grid gap-8 grid-cols-270px max-w-screen-4xl md:px-6 my-8 lg:mr-32 xl:mr-56">
                <Sidebar currentTopic={currentTopic}></Sidebar>
                {content}
            </div>

            <Footer></Footer>
        </div>
    )
}