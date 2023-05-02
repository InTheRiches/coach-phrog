import React, { useState } from 'react';

const topics = [
    {
        id: 1,
        title: 'Muscles',
        subtopics: [
            { id: 1, title: 'Basics', href: '/muscles/basics' },
            { id: 2, title: 'Functions', href: '/muscles/functions' },
            { id: 3, title: 'Exercises', href: '/muscles/exercises' },
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
            { id: 1, title: 'Rest Set Periods' },
            { id: 2, title: 'Rest Days' },
            { id: 3, title: 'Active Recovery' },
            { id: 4, title: 'Sleep'}
        ],
    },
    {
        id: 3,
        title: 'Diet',
        subtopics: [
            { id: 1, title: 'Basics' },
            { id: 2, title: 'Cutting' },
            { id: 3, title: 'Bulking' },
        ],
    },
    {
        id: 4,
        title: 'Supplements',
        subtopics: [
            { id: 1, title: 'Basics' },
            { id: 2, title: 'Weight Loss' },
            { id: 3, title: 'Muscle Gain' },
            { id: 4, title: 'Performance' },
            { id: 5, title: 'Recovery' },
        ],
    }

];

function Sidebar({ currentTopic }) {
    const [collapsed, setCollapsed] = useState({});
    const toggleCollapse = (topic) => {
        setCollapsed({ ...collapsed, [topic.title + "-" + topic.id]: !collapsed[topic.title + "-" + topic.id] });
    };
    return (
        <div className="bg-gray-800 text-slate-50 h-full w-64 p-4 mt-26">
            {topics.map((topic) => (
                <div className="mb-2" key={topic.id}>
                    <div
                        className="flex items-center mb-2 hover:cursor-pointer"
                        onClick={() => toggleCollapse(topic)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-5 h-5 transition-all duration-100 " + (collapsed[topic.title + "-" + topic.id] ? "-scale-y-100" : "scale-y-100")}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                        <h2 className="ml-2 font-bold text-xl">{topic.title}</h2>
                    </div>
                    {collapsed[topic.title + "-" + topic.id] && (
                        <div className="ml-2.5 border-l-1 border-slate-50">
                            {topic.subtopics.map((subtopic) => (
                                <div
                                    key={subtopic.id}
                                    className={`flex flex-col`}
                                    onClick={() => toggleCollapse(subtopic)}
                                >
                                    <div className={`${
                                        currentTopic === topic.title + "-" + subtopic.title ? 'text-red-400 text-xl' : 'text-slate-300 text-xl'
                                    } flex items-center transition-all duration-200 hover:cursor-pointer hover:text-slate-50 flex-row`}>
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
                                        <span className={`${currentTopic === topic.title + "-" + subtopic.title ? "scale-110 ml-2.5" : "ml-2"} `}>{subtopic.title}</span>
                                    </div>
                                    <div>
                                        {subtopic.subtopics && collapsed[subtopic.title + "-" + subtopic.id] && (
                                            <div className="ml-6.5">
                                                {subtopic.subtopics.map((subsubtopic) => (
                                                    <div
                                                        key={subsubtopic.id}
                                                        className={`${
                                                            currentTopic.split("-")[0] === topic.title && currentTopic.split("-")[1] === subtopic.title && currentTopic.split("-")[2] === subsubtopic.title ? 'text-slate-50 text-xl scale-105' : 'text-slate-300 text-xl'
                                                        } flex items-center transition-all duration-200 hover:cursor-pointer hover:text-slate-50 border-l-1 border-slate-50`}
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