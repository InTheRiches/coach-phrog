import {useRouter} from "next/router";
import {useEffect} from "react";

export default function ContentScroll() {

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            console.log(`The hash changed to: ${hash}`);
            // Do something with the new hash, such as scrolling to an element with that ID
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    useEffect(() => {
        // Get the scroll position from localStorage, or default to 0
        const scrollHREF = localStorage.getItem('lastHREF') || "";
        if (window.location.href == scrollHREF) {
            const scrollPosition = Number(localStorage.getItem('scrollPosition')) || 0;

            // Scroll to the stored position
            window.scrollTo(0, scrollPosition);
        }

        // Save the current scroll position to localStorage on unload
        const handleUnload = () => {
            localStorage.setItem('scrollPosition', window.scrollY.toString());
            localStorage.setItem('lastHREF', window.location.href);
        };

        window.addEventListener('beforeunload', handleUnload);

        // Get the ID of the section to scroll to from the URL fragment identifier
        scroll();

        return () => {
            window.removeEventListener('beforeunload', handleUnload);
        };
    }, []);
}

export function scroll() {
    const hash = window.location.hash.substr(1);
    if (!hash) {
        return;
    }

    // Find the section element and scroll to it
    const section = document.getElementById(hash + "x");
    if (section) {
        const nav = document.getElementById('navigation');
        const navHeight = nav.getBoundingClientRect().height;
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth',
        });
    }
}