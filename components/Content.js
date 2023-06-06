import React from "react";
import {useRouter} from "next/router";
import {scroll} from "@/components/ContentScroll";

export default function Content({id, title, content, bulletPoints}) {
    const spans = content.split("-.-");

    const router = useRouter();

    const handleClick = (link) => {
        // console.log(link.replace(/#.*$/, ''));
        // console.log(link.replace(/#.*$/, '') === (new URL(window.location.href).pathname.replace(/#.*$/, '')));
        // if (link.replace(/#.*$/, '') === (new URL(window.location.href).pathname.replace(/#.*$/, ''))) {
        //     router.push(link).then(() => scroll());
        //     return;
        // }
        router.push(link).then(() => scroll());
    };

    if (!bulletPoints) {
        bulletPoints = {};
    }

    const text = spans.map((block) => {
        return block
            .split("**")
            .map((block, index) => {
                if (index % 2 === 1) {
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
                            matches.push(<span key={startIndex}>{block.substring(lastMatch, startIndex)}<a key={index} onClick={() => handleClick(linkUrl)} className={"text-link-text hover:cursor-pointer"}>{linkText}</a></span>);
                            lastMatch = endIndex;
                        }
                        matches.push(block.substring(lastMatch, block.length));
                        return <b className="uline" key={index}>{matches}</b>;
                    }
                    return <b className="uline" key={index}>{block}</b>;
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
                            matches.push(<span key={startIndex}>{block.substring(lastMatch, startIndex)}<a key={index} onClick={() => handleClick(linkUrl)} className={"text-link-text hover:underline hover:cursor-pointer"}>{linkText}</a></span>);
                            lastMatch = endIndex;
                        }
                        matches.push(block.substring(lastMatch, block.length));
                        return <span key={index}>{matches}</span>;
                    } else {
                        return <span key={index}>{block}</span>;
                    }
                }
            });
    });

    const bullets = Object.values(bulletPoints).map((bullet) => {
        return bullet
            .split("**")
            .map((bullet, index) => {
                if (index % 2 === 1) {
                    return <b key={index}>{bullet}</b>;
                } else {
                    const regex = /\[(.*?),([a-zA-Z\s]*)\]/g; // regex to match the hyperlink pattern

                    const matches = bullet.match(regex);

                    if (matches) {

                        let match;

                        let lastMatch = 0;

                        const matches = []

                        while ((match = regex.exec(bullet)) !== null) {
                            const hyperlink = match[0]; // the entire match (e.g. [/google/muscles,Google])
                            const linkUrl = match[1]; // the URL of the link (e.g. /google/muscles)
                            const linkText = match[2]; // the name of the link (e.g. Google)
                            const startIndex = match.index; // the starting index of the hyperlink in the original string
                            const endIndex = startIndex + hyperlink.length; // the ending index of the hyperlink in the original string


                            // do something with the hyperlink, like replace it with an HTML anchor tag
                            matches.push(<span key={startIndex}>{bullet.substring(lastMatch, startIndex)}<a key={index} onClick={() => handleClick(linkUrl)} className={"text-cyan-accent hover:underline hover:cursor-pointer"}>{linkText}</a></span>);
                            lastMatch = endIndex;
                        }
                        matches.push(bullet.substring(lastMatch, bullet.length));
                        return <span key={index}>{matches}</span>;
                    } else {
                        return <span key={index}>{bullet}</span>;
                    }
                }
            });
    });

    return (
        <div id={id+"x"} className="mt-12">
            <div className={"flex items-center"}>
                <a onClick={() => {
                    // copy the URL to the clipboard
                    if (window.location.href.includes("#")) {
                        router.push(window.location.href.split("#")[0] + "#" + id).then(r => scroll());
                    }
                    else {
                        router.push(window.location.href + "#" + id).then(r => scroll());
                    }

                }} className={"absolute -ml-8 flex items-center opacity-0 border-0 hover:opacity-100 hover:cursor-pointer transition-opacity duration-100 bg-neutral-700 rounded-md"}>
                    <div className={"w-6 h-6 flex items-center justify-center stroke-white"}>
                        <svg width="12" height="12" fill="none" aria-hidden="true"><path d="M3.75 1v10M8.25 1v10M1 3.75h10M1 8.25h10" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                    </div>
                </a>
                <a className={"absolute -ml-14 flex items-center opacity-0 border-0 hover:opacity-100 hover:cursor-pointer transition-opacity duration-100 bg-neutral-700 rounded-md"}>
                    <div className={"w-6 h-6 p-1.25 flex items-center justify-center"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 384H256c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64H396.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V320c0 35.3-28.7 64-64 64zM64 128h96v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H256c8.8 0 16-7.2 16-16V416h48v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64z" fill={"white"}></path></svg>
                    </div>
                </a>
                <h1 id={id+"x"} className="text-3xl font-bold flex items-center">
                    {title}
                </h1>
            </div>

            <div className="flex flex-col mt-6 text-lg"> {/* border-gray-600 border-l-8 */}
                {text.map((substring, index) => (
                    <span className={`mb-6 indent-4`} key={index}>{substring}</span>
                ))}
            </div>
            <ul className="text-lg list-inside list-disc lg:grid w-full">
                {bullets.map((key, index) => (
                    <li key={index}><b>{Object.keys(bulletPoints)[index]}:</b><span> {key}</span></li>
                ))}
            </ul>
        </div>
    )
}