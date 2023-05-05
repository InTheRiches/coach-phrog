import React from "react";

export default function Content({title, content}) {
    const spans = content.split("-.-");

    const text = spans.map((block) => {
        return block
            .split("**")
            .map((block, index) => {
                if (index % 2 === 1) {
                    return <b key={index}>{block}</b>;
                } else {
                    const regex = /\[(.*?),([a-zA-Z]*)\]/g; // regex to match the hyperlink pattern

                    const matches = block.match(regex);

                    if (matches) {
                        let match;

                        let lastMatch = 0;

                        const matches = []

                        while ((match = regex.exec(block)) !== null) {
                            const hyperlink = match[0]; // the entire match (e.g. [/google/muscles,Google])
                            const linkUrl = match[1]; // the URL of the link (e.g. /google/muscles)
                            const linkText = match[2]; // the name of the link (e.g. Google)
                            const startIndex = match.index; // the starting index of the hyperlink in the original string
                            const endIndex = startIndex + hyperlink.length; // the ending index of the hyperlink in the original string


                            // do something with the hyperlink, like replace it with an HTML anchor tag
                            matches.push(<span>{block.substring(lastMatch, startIndex)}<a key={index} href={linkUrl} className={"text-cyan-accent hover:underline"}>{linkText}</a></span>);
                            lastMatch = endIndex;
                        }
                        matches.push(<span>{block.substring(lastMatch, block.length)}</span>)
                        return <span key={index}>{matches}</span>;
                    } else {
                        return <span key={index}>{block}</span>;
                    }
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