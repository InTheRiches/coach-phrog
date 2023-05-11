import Navigation from '@/components/Navigation'
import Content from '@/components/Content'
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import React, {useEffect} from "react";
import {useRouter} from "next/router";
import ContentScroll from "@/components/ContentScroll";
import useDarkMode from 'use-dark-mode';
import {ScrambleElement} from "@/components/Scrambler";
import topics from '/public/content.json';

export default function ContentPage({ currentTopic, content }) {
    ContentScroll();

    const router = useRouter();

    let keys = [];

    topics.forEach((topic) => {
        topic.subtopics.forEach((subtopic) => {
            if (subtopic.subtopics) {
                subtopic.subtopics.forEach((subsubtopic) => {
                    keys.push(subsubtopic.href)
                });
            }
            else {
                keys.push(subtopic.href);
            }
        });
    });

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
                <div className={"flex flex-col w-full h-full"}>
                    {content}
                    <div className={"w-full flex justify-around mt-4"}>
                        <button
                            onClick={() => {
                                const url = new URL(window.location.href);

                                const index = keys.indexOf(url.pathname);
                                if (index > 0)
                                    router.push(keys[index - 1]);
                            }}
                            className="w-12 h-12 rounded-full bg-cyan-accent text-white flex items-center justify-center transition-colors duration-150 hover:bg-cyan-accent-light"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                        <button
                            onClick={() => {
                                const url = new URL(window.location.href);

                                const index = keys.indexOf(url.pathname);
                                if (index < keys.length - 1)
                                    router.push(keys[index + 1]);
                            }}
                            className="w-12 h-12 rounded-full bg-cyan-accent text-white flex items-center justify-center transition-colors duration-150 hover:bg-cyan-accent-light focus:outline-none focus:bg-gray-700"
                        >
                            <svg
                                className="w-6 h-6 -scale-x-100"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}