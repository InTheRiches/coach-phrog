import React, {useEffect, useState} from 'react';

const topics = [
    {
        id: 1,
        title: 'Muscles',
        subtopics: [
            { id: 1, title: 'Basics', href: '/muscles/basics' },
            { id: 2, title: 'Exercises', href: '/muscles/exercises' },
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
            {
                id: 4,
                title: 'Training',
                subtopics: [
                    { id: 1, title: 'Strength', href: '/muscles/training/strength'}, // muscle strength growth
                    { id: 2, title: 'Hypertrophy', href: '/muscles/training/hypertrophy'}, // muscle growth
                    { id: 3, title: 'Endurance', href: '/muscles/training/endurance' }, // isometric training
                    { id: 4, title: 'Power', href: '/muscles/training/power'} // rapid explosive bursts of force, plyometric training
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
        <div className="bg-gray-800 text-slate-50 h-full w-1/6 p-4 mt-26">
            {topics.map((topic) => (
                <div className="mb-2" key={topic.id}>
                    <div
                        className="flex items-center mb-2 hover:cursor-pointer"
                        onClick={() => toggleCollapse(topic)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-5 h-5 transition-all duration-100 " + (collapsed[topic.title + "-" + topic.id] ? "-scale-y-100" : "scale-y-100")}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                        <h2 className="ml-2 font-bold text-3xl">{topic.title}</h2>
                    </div>
                    {collapsed[topic.title + "-" + topic.id] && (
                        <div className="ml-2.5 border-l-1 border-slate-50">
                            {topic.subtopics.map((subtopic) => (
                                <div
                                    key={subtopic.id}
                                    className={`flex flex-col`}
                                >
                                    <div className={`${
                                        currentTopic === topic.title + "-" + subtopic.title ? 'text-red-400 text-2xl' : 'text-slate-300 text-2xl'
                                    } flex items-center transition-all duration-200 hover:cursor-pointer hover:text-slate-50 flex-row`}
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
                                        <span className={`${currentTopic === topic.title + "-" + subtopic.title ? "text-2.25xl" : "text-2xl"} ml-2`}>{subtopic.title}</span>
                                    </div>
                                    <div>
                                        {subtopic.subtopics && collapsed[subtopic.title + "-" + subtopic.id] && (
                                            <div className="ml-6.5">
                                                {subtopic.subtopics.map((subsubtopic) => (
                                                    <div
                                                        key={subsubtopic.id}
                                                        className={`${
                                                            currentTopic.split("-")[0] === topic.title && currentTopic.split("-")[1] === subtopic.title && currentTopic.split("-")[2] === subsubtopic.title ? 'text-red-400 text-2.25xl' : 'text-slate-300 text-2xl'
                                                        } flex items-center transition-all duration-200 hover:cursor-pointer hover:text-slate-50 border-l-1 border-slate-50`}
                                                        onClick={() => {
                                                            window.location.href = subsubtopic.href;
                                                        }}
                                                    >
                                                        <span className="w-4" />
                                                        <svg width="10" height="10">
                                                            <circle cx="5" cy="5" r="2" fill="#F8FAFC" />
                                                        </svg>
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
