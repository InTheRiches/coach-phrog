import Sidebar from "@/components/Sidebar";
import {useEffect, useRef, useState} from "react";

export default function Testing() {
    const [buttonPosition, setButtonPosition] = useState(0)
    const buttonRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            console.log(document.documentElement.scrollHeight);
            console.log(document.documentElement.offsetHeight);

            const buttonPosition = document.documentElement.scrollHeight
            setButtonPosition(buttonPosition)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div>
            <div style={{ position: 'relative', height: '2000px' }}>
                {/* Placeholder content to make the page scrollable */}
            </div>
            <div
                ref={buttonRef}
                style={{ position: 'fixed', top: buttonPosition }}
            >
                <button>Click me</button>
            </div>
        </div>
    )
}