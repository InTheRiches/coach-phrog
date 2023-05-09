import Navigation from '@/components/Navigation'
import Content from '@/components/Content'
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import React, {useEffect} from "react";
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
        } else {
          document.documentElement.classList.remove('dark');
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
                <div className={"flex flex-col w-full h-full"}>
                    {content}
                    <button className={"rounded-3xl bg-cyan-accent hover:bg-cyan-accent-hover text-white font-bold text-sm px-4 py-2 ml-4 transition-all w-8 h-8 duration-100 flex items-center justify-center"} onClick={() => router.push('/')}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={"w-6 h-6"}>
                            <path fill={"white"} d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/>
                        </svg>
                    </button>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}