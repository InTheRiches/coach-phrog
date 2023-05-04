import React from "react";

export default function Content({title, content}) {
    const spans = content.split("-.-");

    const text = spans.map((block) => {
        return block.split("**").map((block, index) => {
            if (index % 2 === 1) {
                return <b key={index}>{block}</b>;
            } else {
                return <span key={index}>{block}</span>
            }
        });
    });

    return (
        <div className="mt-12">
            <span className="ml-6 text-3xl font-bold">{title}</span>
            <div className="flex flex-col mt-8"> {/* border-gray-600 border-l-8 */}
                {text.map((substring, index) => (
                    <span className="ml-6 text-lg mb-6" key={index}>{substring}</span>
                ))}
            </div>
        </div>
    )
}