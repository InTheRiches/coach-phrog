import React, {useEffect, useState} from 'react';
import {ScrambleElement} from "@/components/Scrambler";
import {useRouter} from "next/router";

const topics = [
    {
        id: 1,
        title: 'Muscles',
        subtopics: [
            { id: 1, title: 'Basics', href: '/muscles/basics' },
            {
                id: 2,
                title: 'Training',
                subtopics: [
                    { id: 1, title: "Basics", href: "/muscles/training/basics"},
                    { id: 2, title: 'Strength', href: '/muscles/training/strength'}, // muscle strength growth
                    { id: 3, title: 'Hypertrophy', href: '/muscles/training/hypertrophy'}, // muscle growth
                    { id: 4, title: 'Cardio', href: '/muscles/training/cardio' }, // isometric training
                    { id: 5, title: 'Power', href: '/muscles/training/power'} // rapid explosive bursts of force, plyometric training
                ]
            },
            {
                id: 3,
                title: 'Functions',
                subtopics: [
                    { id: 1, title: 'Back', href: '/muscles/functions/back' },
                    { id: 2, title: 'Chest', href: '/muscles/functions/chest' },
                    { id: 3, title: 'Core', href: '/muscles/functions/core' },
                    { id: 4, title: 'Legs', href: '/muscles/functions/legs' },
                ]
            },
        ],
    },
    {
        id: 2,
        title: 'Recovery',
        subtopics: [
            { id: 1, title: 'Rest Set Periods', href: '/recovery/rest-set-periods' },
            { id: 2, title: 'Rest Days', href: '/recovery/rest-days' },
            { id: 3, title: 'Active Recovery', href: '/recovery/active-recovery' },
            { id: 4, title: 'Sleep', href: '/recovery/sleep' },
        ],
    },
    {
        id: 3,
        title: 'Diet',
        subtopics: [
            { id: 1, title: 'Basics', href: '/diet/basics' },
            { id: 2, title: 'Cutting', href: '/diet/cutting' },
            { id: 3, title: 'Bulking', href: '/diet/bulking' },
        ],
    },
    {
        id: 4,
        title: 'Supplements',
        subtopics: [
            { id: 1, title: 'Basics', href: '/supplements/basics' },
            { id: 2, title: 'Weight Loss', href: '/supplements/weight-loss' },
            { id: 3, title: 'Muscle Gain', href: '/supplements/muscle-gain' },
            { id: 4, title: 'Performance', href: '/supplements/performance' },
            { id: 5, title: 'Recovery', href: '/supplements/recovery' },
        ],
    }

];
function Sidebar({ currentTopic }) {
    const [loaded, setLoaded] = useState(false);
    const router = useRouter();

    const [collapsed, setCollapsed] = useState(() => {
        const initialState = {};
        topics.forEach((topic) => {
            topic.subtopics.forEach((subtopic) => {
                if (
                    currentTopic ===
                    topic.title + "-" + subtopic.title
                )
                    initialState[
                    topic.title + "-" + subtopic.id
                        ] = true;
                else if (subtopic.subtopics) {
                    subtopic.subtopics.forEach((subsubtopic) => {
                        if (
                            currentTopic ===
                            topic.title +
                            "-" +
                            subtopic.title +
                            "-" +
                            subsubtopic.title
                        ) {
                            initialState[
                            subtopic.title + "-" + subtopic.id
                                ] = true;
                            initialState[
                            topic.title + "-" + topic.id
                                ] = true;
                        }
                    });
                }
            });
        });
        return initialState;
    });

    useEffect(() => {
        // retrieve the state of the menus from LocalStorage
        const storedState = window.localStorage.getItem(
            "sidebar-collapsed-state"
        );
        if (storedState) {
            setCollapsed(JSON.parse(storedState));
        }
        setLoaded(true);
    }, []);

    useEffect(() => {
        const textElements = document.querySelectorAll('.font-bold.text-xl');

        // Loop through each text element
        textElements.forEach((element) => {
            ScrambleElement(element, true, false);
        });
    }, [loaded]);

    const toggleCollapse = (topic) => {
        const newValue = !collapsed[topic.title + "-" + topic.id];

        setCollapsed({ ...collapsed, [topic.title + "-" + topic.id]: newValue });

        // save the new state to LocalStorage
        window.localStorage.setItem(
            "sidebar-collapsed-state",
            JSON.stringify({ ...collapsed, [topic.title + "-" + topic.id]: newValue })
        );
    };

    return (
        <div className="bg-white dark:bg-neutral-900 p-4 mt-15 text-neutral-900 dark:text-slate-50"> {/* w-1/6 md:w-1/5 */}
            <button className={"hidden w-full lg:flex border-1 border-slate-200 hover:border-cyan-accent border-opacity-50 hover:border-opacity-75 items-center text-sm leading-6 text-neutral-700 dark:text-slate-300 hover:dark:text-slate-50 hover:text-neutral-900 rounded-md shadow-sm py-1.5 pl-2 pr-3 mb-6 transition-all duration-100 bg-transparent"}>
                <a>Search...</a>
            </button>
            <div className="mb-4 text-neutral-900 dark:text-slate-50">
                <div className="flex items-center mb-2">
                    <h2 className="font-bold text-xl">Getting Started</h2>
                </div>
                <div>
                    <div className={`flex flex-col`}>
                        <div className={`${
                            currentTopic === "Getting Started-Introduction" ? 'text-cyan-accent border-cyan-accent' : 'text-neutral-700 dark:text-slate-300 border-neutral-200 dark:border-neutral-700'
                        } flex border-l-1 items-center flex-row py-2`}
                        onClick={() => router.push("/getting-started/introduction")}>
                            <span className={`text-xl ml-6 hover:cursor-pointer hover:text-cyan-accent transition-all duration-200`}>Introduction</span>
                        </div>
                    </div>
                </div>
            </div>
            {loaded && topics.map((topic) => (
                <div className="mb-2" key={topic.id}>
                    <div
                        className="flex items-center mb-2 hover:cursor-pointer justify-between"
                        onClick={() => toggleCollapse(topic)}
                    >
                        <h2 className="font-bold text-xl">{topic.title}</h2>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-5 h-5 transition-all duration-100 " + (collapsed[topic.title + "-" + topic.id] ? "-scale-y-100" : "scale-y-100")}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                    </div>
                    {collapsed[topic.title + "-" + topic.id] && (
                        <div className="">
                            {topic.subtopics.map((subtopic) => (
                                <div
                                    key={subtopic.id}
                                    className={`flex flex-col ${subtopic.subtopics ? 'border-l-1 border-neutral-200 dark:border-neutral-700' : ''}`}
                                >
                                    <div className={`${
                                        currentTopic === topic.title + "-" + subtopic.title ? 'text-cyan-accent border-cyan-accent' : 'text-neutral-700 dark:text-slate-300 border-neutral-200 dark:border-neutral-700'
                                    } ${subtopic.subtopics ? "" : "border-l-1"} flex items-center text-2xl transition-all duration-200 hover:cursor-pointer hover:text-cyan-accent flex-row py-1 justify-between`}
                                         onClick={() => {
                                             if (subtopic.subtopics) {
                                                 toggleCollapse(subtopic);
                                             }
                                             else {
                                                router.push(subtopic.href);
                                             }
                                         }}>

                                        <a className={`text-xl ml-6`}>{subtopic.title}</a>

                                        {subtopic.subtopics && (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-5 h-5 transition-transform duration-100" + (collapsed[subtopic.title + "-" + subtopic.id] ? "-scale-y-100" : "scale-y-100")}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                            </svg>
                                        )}
                                    </div>
                                    <div>
                                        {subtopic.subtopics && collapsed[subtopic.title + "-" + subtopic.id] && (
                                            <div className="ml-6.5">
                                                {subtopic.subtopics.map((subsubtopic) => (
                                                    <div
                                                        key={subsubtopic.id}
                                                        className={`${
                                                            currentTopic.split("-")[0] === topic.title && currentTopic.split("-")[1] === subtopic.title && currentTopic.split("-")[2] === subsubtopic.title ? 'text-cyan-accent border-cyan-accent' : 'text-neutral-700 dark:text-slate-300 border-neutral-200 dark:border-neutral-700'
                                                        } flex items-center transition-all duration-200 hover:cursor-pointer hover:text-cyan-accent border-l-1  py-1 text-xl`}
                                                        onClick={() => {
                                                            router.push(subsubtopic.href);
                                                        }}
                                                    >
                                                        <span className="w-4" />
                                                        <span className={"ml-2"}>{subsubtopic.title}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
