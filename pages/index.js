import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import Navigation from '@/components/Navigation'
import Content from '@/components/Content'
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import {Scramble, ScrambleElement} from "@/components/Scrambler";
import useDarkMode from 'use-dark-mode';

export default function Layout({ children }) {

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
            ScrambleElement(element, false, true, 750);
        });
    }, []);

    return (
        <div className={`flex flex-col min-h-screen bg-white dark:bg-neutral-900 text-slate-900 dark:text-slate-50 justify-center items-center font-mono`}>
            <header className={"flex flex-col items-center w-full h-screen"}>
                <Navigation dark={isDarkMode} setDark={toggleDarkMode}></Navigation>
                <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 pl-3 pr-3">
                    <h1 className={"text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white"}>Transform your physique with expert guidance without ever paying a dollar.</h1>
                    <p className="mt-6 text-lg lg:text-2xl text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">A science based approach to <a className={"text-cyan-accent"}>building muscle</a>, <a className={"text-cyan-accent"}>losing fat</a>, and getting <a className={"text-cyan-accent"}>stronger</a>, formatted to be understood and accessible by all.</p>

                    <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm"><a
                        className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-cyan-accent dark:highlight-white/20 dark:hover:bg-cyan-accent-light"
                        href="/getting-started/introduction">Get started</a>
                        <button type="button"
                                className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"
                                 strokeLinecap="round" strokeLinejoin="round"
                                 className="flex-none text-slate-300 dark:text-slate-400" aria-hidden="true">
                                <path d="m19 19-3.5-3.5"></path>
                                <circle cx="11" cy="11" r="6"></circle>
                            </svg>
                            <span className="flex-auto">Quick search...</span><kbd className="font-sans font-semibold dark:text-slate-500"><abbr title="Control" className="no-underline text-slate-300 dark:text-slate-500">Ctrl </abbr> K</kbd>
                        </button>
                    </div>
                </div>
            </header>

            <section className="text-center max-w-7xl px-8 mt-10 sm:mt-15 md:mt-20 mb-14"><h2
                className="text-slate-900 text-4xl font-extrabold sm:text-5xl dark:text-white">Understanding the mechanics behind working out significantly increases effectiveness.</h2>
                <figure>
                    <blockquote><p className="mt-6 max-w-3xl mx-auto text-lg lg:text-xl text-slate-600 dark:text-slate-400">During my fitness journey, I realized the importance of understanding the human anatomy and the underlying science of muscle <a className={"text-cyan-accent"}>hypertrophy</a>. As my understanding of these concepts grew, so did my <a className={"text-cyan-accent"}>efficiency</a> and <a className={"text-cyan-accent"}>effectiveness</a> in the gym. By comprehending the precise mechanisms behind muscle development and how to optimize them, I found that my workouts became more <a className={"text-cyan-accent"}>gratifying</a> and <a className={"text-cyan-accent"}>productive</a>.</p></blockquote>
                    <figcaption className="mt-6 flex items-center justify-center space-x-4 text-left"><img
                        src="/_next/static/media/adam.26d0119c.jpg" alt="" className="w-14 h-14 rounded-full"
                        loading="lazy" decoding="async"></img>
                        <div>
                            <div className="text-slate-900 font-bold dark:text-white text-lg">Hayden Williams</div>
                            <div className="mt-0.5 text-lg leading-6 text-slate-600 dark:text-slate-400">Co-Founder of Surge Strength</div>
                        </div>
                    </figcaption>
                </figure>
            </section>

            <Footer></Footer>
        </div>
      )
}