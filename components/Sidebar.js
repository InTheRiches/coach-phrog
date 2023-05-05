import React, {useEffect, useState} from 'react';

const topics = [
    {
        id: 1,
        title: 'Muscles',
        subtopics: [
            { id: 1, title: 'Basics', href: '/muscles/basics' },
            {
                id: 2,
                title: 'Functions',
                subtopics: [
                    { id: 1, title: 'Back', href: '/muscles/functions/back' },
                    { id: 2, title: 'Chest', href: '/muscles/functions/chest' },
                    { id: 3, title: 'Core', href: '/muscles/functions/core' },
                    { id: 4, title: 'Legs', href: '/muscles/functions/legs' },
                ]
            },
            {
                id: 3,
                title: 'Training',
                subtopics: [
                    { id: 1, title: "Basics", href: "/muscles/training/basics"},
                    { id: 2, title: 'Strength', href: '/muscles/training/strength'}, // muscle strength growth
                    { id: 3, title: 'Hypertrophy', href: '/muscles/training/hypertrophy'}, // muscle growth
                    { id: 4, title: 'Cardio', href: '/muscles/training/cardio' }, // isometric training
                    { id: 5, title: 'Power', href: '/muscles/training/power'} // rapid explosive bursts of force, plyometric training
                ]
            }
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
    const [collapsed, setCollapsed] = useState(() => {
        const initialState = {};
        topics.forEach((topic) => {
            topic.subtopics.forEach((subtopic) => {
                if (currentTopic === topic.title + "-" + subtopic.title)
                    initialState[topic.title + "-" + subtopic.id] = true;
                else if (subtopic.subtopics) {
                    subtopic.subtopics.forEach((subsubtopic) => {
                        if (currentTopic === topic.title + "-" + subtopic.title + "-" + subsubtopic.title) {
                            initialState[subtopic.title + "-" + subtopic.id] = true;
                            initialState[topic.title + "-" + topic.id] = true;
                        }
                    });
                }
            });
        });
        return initialState;
    });

    const toggleCollapse = (topic) => {
        setCollapsed({ ...collapsed, [topic.title + "-" + topic.id]: !collapsed[topic.title + "-" + topic.id] });
    };

    return (
        <div className="bg-neutral-900 text-blue-600 p-4 mt-15"> {/* w-1/6 md:w-1/5 */}
            <button className={"hidden w-full lg:flex border-1 border-slate-200 hover:border-cyan-400 border-opacity-50 hover:border-opacity-75 items-center text-sm leading-6 text-slate-300 hover:text-slate-50 rounded-md shadow-sm py-1.5 pl-2 pr-3 mb-6 transition-all duration-100 bg-transparent"}>
                <a>Search...</a>
            </button>
            <div className="mb-4">
                <div className="flex items-center mb-2">
                    <h2 className="font-bold text-xl">Getting Started</h2>
                </div>
                <div>
                    <div className={`flex flex-col`}>
                        <div className={`${
                            currentTopic === "Getting Started-Introduction" ? 'text-cyan-400 text-2xl' : 'text-slate-300 text-2xl'
                        }} flex items-center transition-all duration-200 hover:cursor-pointer hover:text-slate-50 flex-row py-2`}>
                            <span className={`text-xl`}>Introduction</span>
                        </div>
                    </div>
                </div>
            </div>
            {topics.map((topic) => (
                <div className="mb-2" key={topic.id}>
                    <div
                        className="flex items-center mb-2 hover:cursor-pointer"
                        onClick={() => toggleCollapse(topic)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-5 h-5 transition-all duration-100 " + (collapsed[topic.title + "-" + topic.id] ? "-scale-y-100" : "scale-y-100")}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                        <h2 className="ml-4 font-bold text-xl">{topic.title}</h2>
                    </div>
                    {collapsed[topic.title + "-" + topic.id] && (
                        <div className="ml-2.5 border-l-1 border-cyan-400">
                            {topic.subtopics.map((subtopic) => (
                                <div
                                    key={subtopic.id}
                                    className={`flex flex-col`}
                                >
                                    <div className={`${
                                        currentTopic === topic.title + "-" + subtopic.title ? 'text-cyan-400 text-2xl' : 'text-slate-300 text-2xl'
                                    } flex items-center transition-all duration-200 hover:cursor-pointer hover:text-slate-50 flex-row py-2`}
                                         onClick={() => {
                                             if (subtopic.subtopics) {
                                                 toggleCollapse(subtopic);
                                             }
                                             else {
                                                 window.location.href = subtopic.href;
                                             }
                                         }
                                         }>
                                        <span className="w-4" />
                                        {subtopic.subtopics ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-5 h-5 transition-all duration-100 " + (collapsed[subtopic.title + "-" + subtopic.id] ? "-scale-y-100" : "scale-y-100")}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                            </svg>
                                        ) : (
                                            <svg width="10" height="10">
                                                <circle cx="5" cy="5" r="2" fill="#F8FAFC" />
                                            </svg>
                                        )}
                                        <span className={`${currentTopic === topic.title + "-" + subtopic.title ? "text-1xl" : "text-xl"} ml-4`}>{subtopic.title}</span>
                                    </div>
                                    <div>
                                        {subtopic.subtopics && collapsed[subtopic.title + "-" + subtopic.id] && (
                                            <div className="ml-6.5">
                                                {subtopic.subtopics.map((subsubtopic) => (
                                                    <div
                                                        key={subsubtopic.id}
                                                        className={`${
                                                            currentTopic.split("-")[0] === topic.title && currentTopic.split("-")[1] === subtopic.title && currentTopic.split("-")[2] === subsubtopic.title ? 'text-cyan-400 text-1xl' : 'text-slate-300 text-xl'
                                                        } flex items-center transition-all duration-200 hover:cursor-pointer hover:text-slate-50 border-l-1 border-cyan-400 py-2`}
                                                        onClick={() => {
                                                            window.location.href = subsubtopic.href;
                                                        }}
                                                    >
                                                        <span className="w-4" />
                                                        <svg width="10" height="10">
                                                            <circle cx="5" cy="5" r="2" fill="#F8FAFC" />
                                                        </svg>
                                                        <span className={"ml-4"}>{subsubtopic.title}</span>
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