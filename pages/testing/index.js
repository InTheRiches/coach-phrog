import Sidebar from "@/components/Sidebar";
import {useEffect, useRef, useState} from "react";

export default function Testing() {
    return (
        <div className={"w-1/3"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576.68 1450.47">
                <g id="svg-Layer_7" data-name="Layer 7" className={"muscle-svg"}>
                    <g>
                        <path className=""
                              d="m144.5,549.5c-2.16,37.19-13.3,76.1-31.59,108.55-3.12,5.54-6.45,10.95-9.79,16.36-4.15,6.74-8.3,13.48-12.45,20.22-8.83,14.34-16.28,26.72-18.71,43.38-7.38.7-16.45,2.67-23.66.99-3.92-.92-7.84-2.22-11.04-4.65s-4.27-3.31-4.3-7.33c-.02-2.66,1.03-8.52,2-11,5.57-14.18,9.74-27.93,15.31-42.11,5.09-12.95,10.19-25.95,13.36-39.5,2.8-11.97,4.06-24.27,7.03-36.2,3.47-13.98,9.29-27.37,17.14-39.45,2.57-3.96,6.71-8.26,9.71-11.26,4.38,9.09,7.15,20.68,7.51,30.77.08,2.34.49,6.23,1.49,7.23.55.55,3.27-1.38,3.72-2.01,4.28-5.99,8.25-9.45,13.03-13.67,7.71-6.81,12.75-13.61,20.77-18.58"/>
                        <path
                            d="m143,549.5c-1.55,26.38-7.41,52.54-16.96,77.17-4.79,12.37-10.62,24.28-17.36,35.7-7.33,12.42-15.14,24.55-22.6,36.89s-13.49,24.4-15.57,38.35l1.45-1.1c-7.18.7-14.67,2.53-21.89,1.31-3.61-.61-7.33-1.77-10.46-3.69-2-1.23-4.62-2.86-5.04-5.37-.44-2.65.16-5.56.69-8.15.66-3.23,1.93-6.2,3.08-9.28,2.94-7.86,5.62-15.82,8.43-23.73,5.56-15.68,12.4-30.93,16.82-47s5.45-32.46,10.22-48.23c2.24-7.41,5.15-14.61,8.68-21.5s7.33-13.09,12.49-18.64c1.16-1.25,2.36-2.47,3.57-3.68l-2.36-.3c2.86,5.98,4.8,12.4,6.03,18.91.62,3.27,1.04,6.57,1.22,9.89.14,2.54.13,5.26.97,7.69.31.9.77,1.96,1.76,2.27s2.03-.22,2.85-.71c2.32-1.37,3.57-3.64,5.27-5.66,4.13-4.89,9.18-8.82,13.76-13.26,5.36-5.2,10.32-10.85,16.7-14.84,1.63-1.02.13-3.62-1.51-2.59-5.32,3.34-9.74,7.75-14.15,12.18s-9.24,8.38-13.63,12.81c-2.17,2.19-4.19,4.54-6.01,7.03-.5.68-1.01,1.16-1.73,1.61-.1.06-1.13.52-1.13.55l.47.16c.47.28.59.27.37-.02.02-.18-.25-.67-.3-.87-.67-2.46-.6-5.05-.78-7.58-.22-3.03-.62-6.05-1.17-9.03-1.28-6.92-3.38-13.7-6.42-20.05-.42-.88-1.72-.94-2.36-.3-2.63,2.63-5.22,5.33-7.53,8.25s-4.35,6.27-6.24,9.58c-3.93,6.88-7.23,14.12-9.87,21.59s-4.64,15.89-6.12,24.05-2.78,17.08-4.83,25.49c-4.09,16.76-11.16,32.49-16.98,48.67-2.92,8.12-5.66,16.31-8.64,24.41-2.25,6.1-4.94,12.25-4.76,18.91.08,2.71.9,4.87,2.99,6.64,2.77,2.35,5.83,4.09,9.28,5.25s7.31,1.88,11.12,1.88,7.7-.5,11.52-.99c1.86-.24,3.72-.48,5.58-.66.6-.06,1.34-.42,1.45-1.1,1.86-12.48,7.06-23.74,13.41-34.54,7.26-12.34,15.05-24.37,22.44-36.63,13.83-22.93,24.04-47.73,30.23-73.8,3.42-14.42,5.63-29.14,6.5-43.94.11-1.93-2.89-1.92-3,0h0Z"/>
                    </g>
                    <g>
                        <path className=""
                              d="m421.6,549.91c2.16,37.19,13.3,76.1,31.59,108.55,3.12,5.54,6.45,10.95,9.79,16.36,4.15,6.74,8.3,13.48,12.45,20.22,8.83,14.34,16.28,26.72,18.71,43.38,7.38.7,16.45,2.67,23.66.99,3.92-.92,7.84-2.22,11.04-4.65s4.27-3.31,4.3-7.33c.02-2.66-1.03-8.52-2-11-5.57-14.18-9.74-27.93-15.31-42.11-5.09-12.95-10.19-25.95-13.36-39.5-2.8-11.97-4.06-24.27-7.03-36.2-3.47-13.98-9.29-27.37-17.14-39.45-2.57-3.96-6.71-8.26-9.71-11.26-4.38,9.09-7.15,20.68-7.51,30.77-.08,2.34-.49,6.23-1.49,7.23-.55.55-3.27-1.38-3.72-2.01-4.28-5.99-8.25-9.45-13.03-13.67-7.71-6.81-12.75-13.61-20.77-18.58"/>
                        <path
                            d="m420.1,549.91c1.56,26.5,7.36,52.79,16.91,77.56,4.74,12.29,10.43,24.19,17.08,35.56,7.34,12.56,15.23,24.8,22.78,37.23,3.58,5.9,7.05,11.88,9.86,18.19s4.92,13.33,5.96,20.36c.1.69.84,1.04,1.45,1.1,7.51.73,15.14,2.47,22.69,1.21,3.65-.61,7.4-1.82,10.62-3.66,2.31-1.32,5.26-3.25,6.42-5.76s.81-5.39.45-8c-.42-3.04-1.07-5.98-2.18-8.84-3.14-8.08-5.93-16.28-8.79-24.45-5.69-16.23-12.77-32.01-17.49-48.58-4.69-16.45-5.76-33.69-10.74-50.06-2.28-7.51-5.25-14.82-8.82-21.8-3.56-6.95-7.59-13.54-12.92-19.29-1.21-1.31-2.46-2.58-3.71-3.84-.64-.64-1.93-.58-2.36.3-2.69,5.63-4.65,11.6-5.95,17.71-.66,3.07-1.14,6.18-1.46,9.3-.27,2.68-.2,5.41-.63,8.07-.09.53-.19,1.06-.33,1.58-.05.17-.45.9-.41,1.05l.95-.33c-.08-.03-.15-.05-.23-.06-.12-.14-.51-.26-.67-.36-.4-.24-.8-.5-1.16-.81-.85-.74-1.44-1.81-2.14-2.7-1.04-1.33-2.14-2.61-3.29-3.84-4.16-4.45-8.97-8.23-13.29-12.52-5.01-4.97-9.84-10.12-15.86-13.89-1.64-1.03-3.15,1.57-1.51,2.59,5.67,3.56,10.23,8.42,14.94,13.11s9.78,8.61,14.16,13.43c1.07,1.18,2.09,2.39,3.06,3.66.79,1.04,1.44,2.03,2.49,2.82,1.48,1.12,3.86,2.52,5.16.41,1.23-1.98,1.32-4.85,1.44-7.11.17-3.14.39-6.25.89-9.35,1.17-7.31,3.25-14.56,6.44-21.25l-2.36.3c2.53,2.53,5.02,5.12,7.26,7.92s4.21,6.11,6.04,9.31c3.84,6.72,7.08,13.78,9.65,21.08s4.48,15.28,5.91,23.12c1.51,8.27,2.71,16.61,4.62,24.81,3.8,16.25,10.51,31.49,16.24,47.09,2.86,7.8,5.5,15.67,8.31,23.49,2.32,6.46,5.26,12.7,5.95,19.6.22,2.24.36,4.68-1.37,6.36-2.46,2.38-5.56,4.04-8.79,5.11-3.45,1.14-6.91,1.74-10.55,1.7s-7.56-.53-11.31-1.02c-1.79-.23-3.57-.46-5.37-.63l1.45,1.1c-1.85-12.43-7-23.76-13.29-34.53-7.12-12.18-14.79-24.04-22.11-36.1s-13.22-23.34-18.32-35.78c-5.04-12.3-9.11-24.99-12.21-37.91-3.45-14.38-5.68-29.03-6.55-43.79-.11-1.92-3.11-1.93-3,0h0Z"/>
                    </g>
                </g>
                <g id="svg-Layer_8" data-name="Layer 8" className={"muscle-svg"}>
                    <g>
                        <path className=""
                              d="m238.23,521.33c3.06.48,5.87-.58,8.7-1.84,5.81-2.58,11.62-5.16,17.44-7.74,3-1.33,6.05-2.69,8.48-4.89,5.03-4.54,6.51-12.52,3.55-18.62s-10.02-9.88-16.75-9.08c-2.46.29-4.83,1.13-7.27,1.55-2.56.44-5.22.43-7.65,1.35-4.66,1.76-7.47,6.56-8.92,11.33-2.77,9.11-2.03,19.52,2.42,27.94"/>
                        <path
                              d="m238.23,522.83c5.34.71,10.57-2.53,15.27-4.62,5.04-2.24,10.2-4.3,15.13-6.78,4.1-2.07,7.51-5,9.33-9.3,1.63-3.85,1.94-8.29.68-12.3-2.56-8.14-11.3-13.26-19.64-12.08-2.69.38-5.27,1.3-7.97,1.66s-5.15.49-7.55,1.56c-3.9,1.74-6.49,5.42-8.1,9.25-4.23,10.05-3.44,22.26,1.56,31.86.89,1.71,3.48.2,2.59-1.51-4.05-7.79-4.88-17.11-2.62-25.57.98-3.65,2.58-7.37,5.52-9.86,3.48-2.95,8.42-2.45,12.62-3.47,2.16-.52,4.31-1.13,6.55-1.11,1.83.02,3.63.39,5.34,1.04,3.4,1.3,6.34,3.84,8.01,7.08s1.86,7.14.85,10.61c-1.13,3.88-3.71,6.75-7.18,8.73-4.7,2.68-9.91,4.61-14.85,6.8-2.53,1.12-5.06,2.26-7.6,3.37s-5.12,2.01-7.95,1.63c-.81-.11-1.49.77-1.5,1.5,0,.9.7,1.39,1.5,1.5h0Z"/>
                    </g>
                    <g>
                        <path className=""
                              d="m275.99,519.47c-1.18-.79-3.18-1.92-4.59-1.84-1.13.07-2.22.43-3.29.8-9.17,3.13-18.18,6.72-26.99,10.75-1.91.87-3.94,1.89-4.9,3.76-.52,1-.66,2.15-.78,3.27-.47,4.42-.65,8.88-.53,13.32.06,2.01.18,4.05.78,5.97s1.73,3.74,3.42,4.82c2.48,1.58,5.68,1.33,8.58.85,7.47-1.25,14.73-3.75,21.4-7.34,2.37-1.28,4.72-2.75,6.29-4.93,1.34-1.87,2.01-4.13,2.58-6.36.43-1.67.82-3.34,1.21-5.02.42-1.78.83-3.57.88-5.4.1-4.18-2.29-8.87-4.08-12.64"/>
                        <path
                              d="m276.75,518.17c-1.69-1.11-3.69-2.21-5.77-2-2.5.25-4.96,1.39-7.31,2.23-5.08,1.82-10.12,3.78-15.09,5.88-2.46,1.04-4.91,2.11-7.34,3.21-1.95.89-4.06,1.79-5.47,3.47-1.6,1.91-1.75,4.34-1.97,6.72-.26,2.79-.4,5.59-.42,8.39-.03,4.76-.18,10.34,3.25,14.1,3.32,3.63,8.45,3.02,12.81,2.2,5.05-.95,9.96-2.48,14.69-4.5,4.23-1.81,9.14-3.91,12.08-7.6,1.75-2.2,2.58-4.89,3.27-7.57.72-2.82,1.51-5.69,1.91-8.57.76-5.54-1.79-10.55-4.1-15.41-.83-1.74-3.42-.22-2.59,1.51,1.75,3.68,3.96,7.69,3.87,11.88-.05,2.23-.69,4.44-1.2,6.6s-1,4.41-1.77,6.53c-1.52,4.15-5.11,6.23-8.86,8.13-4.08,2.06-8.36,3.69-12.78,4.89-2.19.6-4.42,1.09-6.66,1.46-1.95.32-4.07.56-5.99-.03-4.35-1.34-4.8-6.58-4.9-10.4-.06-2.47-.03-4.94.09-7.41.11-2.28.15-4.7.63-6.94.44-2.06,1.95-3.08,3.73-3.97,2.04-1.01,4.15-1.9,6.24-2.81,4.83-2.1,9.73-4.06,14.67-5.88,2.5-.92,5-1.86,7.54-2.66.98-.31,1.99-.63,3.01-.34s2.01.9,2.91,1.5c1.62,1.07,3.12-1.53,1.51-2.59h0Z"/>
                    </g>
                    <g>
                        <path className=""
                              d="m274.05,566.64c-5.5-3.22-12.86-2.72-19.02-1.1-5.62,1.48-11.12,3.4-16.45,5.72-.76.33-1.54.69-2.08,1.32-.51.6-.75,1.39-.94,2.17-1.27,5.11-1.29,10.43-1.31,15.69,0,2.81-.02,5.62.1,8.43.06,1.36.16,2.77.78,3.98,1.21,2.41,4.08,3.46,6.73,3.92,3.36.59,6.8.6,10.21.49,7.17-.22,14.78-1.11,20.36-5.61.8-.64,1.55-1.37,2.08-2.24.61-1.01.9-2.17,1.15-3.32,2.05-9.55,1.21-20.12-1.62-29.47"/>
                        <path
                              d="m274.81,565.34c-8.82-5.01-19.63-1.79-28.51,1.3-2.57.89-5.1,1.89-7.61,2.95-2.3.98-3.85,2.03-4.52,4.56-1.43,5.36-1.4,11.03-1.41,16.53,0,2.86-.04,5.73.12,8.59.13,2.28.61,4.5,2.33,6.14,3.51,3.34,9.42,3.41,13.95,3.41,4.83,0,9.78-.25,14.49-1.4,4.22-1.03,9.05-3.04,11.74-6.62,1.68-2.24,2.01-5.35,2.39-8.04.4-2.9.58-5.82.53-8.74-.1-6.02-1.08-12.02-2.8-17.79-.55-1.85-3.45-1.06-2.89.8,2.67,8.93,3.6,18.6,1.8,27.8-.45,2.3-1.02,4.12-2.87,5.65-1.56,1.28-3.4,2.29-5.28,3.01-3.88,1.48-8.04,2-12.16,2.21-4.54.23-9.51.52-13.9-.86-1.72-.54-3.4-1.51-3.97-3.32-.69-2.19-.44-4.83-.46-7.1-.04-4.98-.14-10.02.46-14.97.15-1.21.36-2.41.63-3.6.24-1.05.4-2.12,1.37-2.74,1.9-1.21,4.33-1.91,6.44-2.7,4.85-1.81,9.93-3.55,15.07-4.32,4.56-.68,9.48-.48,13.57,1.84,1.68.96,3.19-1.64,1.51-2.59h0Z"/>
                    </g>
                    <g>
                        <path className=""
                              d="m326.18,618.56c-13.26-1.35-26.38-4.05-39.1-8.03-1.51-.47-3.08-.97-4.65-.75-1.22.17-5.9,1.11-7.07,1.5-3,1-5,1-8,2-9.03,3.01-17.03,3.25-26.46,4.51-1.39.19-2.98.49-3.68,1.71-.47.82-.4,1.83-.31,2.78.89,9.64,1.8,19.33,4.32,28.68,1.65,6.12,3.98,12.04,5.66,18.15,2.15,7.86,3.21,15.98,5.14,23.89s4.84,15.8,10.14,21.99,13.34,10.46,21.44,9.62c7.19-.75,13.53-5.38,17.86-11.17s7.25-12.57,9.22-19.52c6.69-23.64,13.4-48.83,15.9-73.98"/>
                        <path
                            d="m326.18,617.06c-12.02-1.24-23.92-3.59-35.51-7.01-2.78-.82-5.68-2.14-8.63-1.72-1.59.23-3.18.58-4.75.93-1.99.44-3.92,1.09-5.92,1.5-2.71.55-5.29,1.44-7.96,2.14-5.42,1.44-10.98,2.06-16.54,2.68-2.64.3-5.58.32-8.12,1.12s-3.55,2.94-3.33,5.58c.97,11.86,2.48,23.64,6.15,35,1.86,5.75,3.82,11.44,5.14,17.35s2.26,11.93,3.65,17.84c2.35,10,6.27,20.45,14.42,27.2,3.83,3.17,8.42,5.54,13.37,6.28s9.84-.21,14.23-2.55c9.19-4.89,14.76-14.62,18.17-24.1,1.97-5.49,3.36-11.21,4.89-16.83s3.16-11.78,4.6-17.71c2.88-11.8,5.34-23.71,6.98-35.76.41-3.01.77-6.03,1.07-9.05.19-1.92-2.81-1.91-3,0-2.32,23.14-8.07,45.78-14.31,68.14-2.78,9.96-5.91,20.3-13.41,27.84-3.27,3.28-7.31,5.87-11.87,6.88s-9.44.12-13.61-1.99c-9.11-4.62-14.19-13.87-17.07-23.3-3.3-10.79-4.3-22.12-7.69-32.89-1.71-5.44-3.69-10.8-5.03-16.36s-2.16-11.27-2.79-16.97c-.31-2.84-.58-5.69-.84-8.54-.1-1.1-.43-2.5.79-3.06,1.05-.48,2.41-.5,3.53-.64,5.26-.65,10.56-1.09,15.78-2.02,2.65-.47,5.28-1.08,7.86-1.87s5.03-1.28,7.57-1.91c1.72-.43,3.4-.95,5.14-1.32s3.52-.92,5.25-.58c2.78.53,5.51,1.63,8.23,2.39s5.52,1.48,8.3,2.12c5.56,1.3,11.18,2.35,16.83,3.16,2.8.4,5.61.75,8.43,1.04,1.92.2,1.9-2.8,0-3h0Z"/>
                    </g>
                    <g>
                        <path className=""
                              d="m327.68,521.82c-3.06.48-5.87-.58-8.7-1.84-5.81-2.58-11.62-5.16-17.44-7.74-3-1.33-6.05-2.69-8.48-4.89-5.03-4.54-6.51-12.52-3.55-18.62,2.95-6.1,10.02-9.88,16.75-9.08,2.46.29,4.83,1.13,7.27,1.55,2.56.44,5.22.43,7.65,1.35,4.66,1.76,7.47,6.56,8.92,11.33,2.77,9.11,2.03,19.52-2.42,27.94"/>
                        <path
                              d="m327.68,520.32c-2.4.32-4.6-.25-6.82-1.15-2.34-.95-4.63-2.04-6.94-3.06-4.53-2.01-9.09-3.96-13.58-6.04-3.77-1.75-7.24-3.88-9.2-7.68-1.66-3.21-2.1-7.1-1.17-10.6,1.95-7.35,9.92-11.87,17.26-10.48,2.35.44,4.63,1.17,7,1.5s4.72.36,6.85,1.31c3.45,1.53,5.68,5,6.97,8.41,3.45,9.11,2.82,19.89-1.68,28.52-.89,1.71,1.7,3.23,2.59,1.51,4.55-8.75,5.46-19.23,2.69-28.69-1.19-4.08-3.22-8.16-6.62-10.83-4.09-3.2-9.47-2.82-14.29-4.01-4.53-1.12-8.84-1.41-13.24.42-3.79,1.58-7.12,4.38-9.06,8.04-4.07,7.69-1.53,17.51,5.52,22.47,2.37,1.67,5.07,2.8,7.71,3.97,2.91,1.29,5.81,2.58,8.72,3.87s5.77,2.6,8.67,3.84c2.75,1.17,5.59,2.07,8.61,1.67.81-.11,1.49-.61,1.5-1.5,0-.73-.7-1.61-1.5-1.5h0Z"/>
                    </g>
                    <g>
                        <path className=""
                              d="m289.91,519.96c1.18-.79,3.18-1.92,4.59-1.84,1.13.07,2.22.43,3.29.8,9.17,3.13,18.18,6.72,26.99,10.75,1.91.87,3.94,1.89,4.9,3.76.52,1,.66,2.15.78,3.27.47,4.42.65,8.88.53,13.32-.06,2.01-.18,4.05-.78,5.97s-1.73,3.74-3.42,4.82c-2.48,1.58-5.68,1.33-8.58.85-7.47-1.25-14.73-3.75-21.4-7.34-2.37-1.28-4.72-2.75-6.29-4.93-1.34-1.87-2.01-4.13-2.58-6.36-.43-1.67-.82-3.34-1.21-5.02-.42-1.78-.83-3.57-.88-5.4-.1-4.18,2.29-8.87,4.08-12.64"/>
                        <path
                              d="m290.67,521.25c1.63-1.08,3.13-1.91,5.1-1.4,2.23.58,4.41,1.47,6.57,2.25,4.41,1.59,8.77,3.29,13.1,5.1,2.23.93,4.44,1.89,6.64,2.88,1.73.78,3.72,1.47,5.18,2.72,1.73,1.46,1.72,3.77,1.9,5.86.21,2.46.34,4.93.37,7.4.05,4.06.53,9.61-2.63,12.74-2.95,2.93-8.09,1.53-11.64.75-4.38-.96-8.69-2.34-12.8-4.15-3.65-1.61-8.21-3.47-10.65-6.79-1.43-1.95-2.02-4.38-2.61-6.69-.62-2.46-1.3-4.96-1.7-7.47-.77-4.9,1.66-9.46,3.7-13.75.82-1.73-1.76-3.26-2.59-1.51-1.98,4.16-4.39,8.66-4.28,13.4.06,2.58.77,5.13,1.36,7.63s1.13,4.97,2.11,7.3c1.93,4.56,5.99,7.01,10.25,9.12,4.59,2.28,9.43,4.09,14.41,5.33,4.33,1.08,9.73,2.57,14.02.67,4.56-2.02,5.77-7.18,5.96-11.7.12-2.78.09-5.56-.04-8.34-.12-2.63-.19-5.41-.75-7.99-1.06-4.85-6.47-6.43-10.48-8.19-5.57-2.44-11.22-4.72-16.93-6.81-2.7-.99-5.48-2.23-8.3-2.8-2.54-.51-4.7.46-6.79,1.84-1.6,1.06-.1,3.66,1.51,2.59h0Z"/>
                    </g>
                    <g>
                        <path className=""
                              d="m291.86,567.13c5.5-3.22,12.86-2.72,19.02-1.1,5.62,1.48,11.12,3.4,16.45,5.72.76.33,1.54.69,2.08,1.32.51.6.75,1.39.94,2.17,1.27,5.11,1.29,10.43,1.31,15.69,0,2.81.02,5.62-.1,8.43-.06,1.36-.16,2.77-.78,3.98-1.21,2.41-4.08,3.46-6.73,3.92-3.36.59-6.8.6-10.21.49-7.17-.22-14.78-1.11-20.36-5.61-.8-.64-1.55-1.37-2.08-2.24-.61-1.01-.9-2.17-1.15-3.32-2.05-9.55-1.21-20.12,1.62-29.47"/>
                        <path
                              d="m292.61,568.42c7.7-4.38,17.32-1.39,25.08,1.22,2.31.78,4.59,1.63,6.84,2.55,1,.41,2.06.78,3,1.32,1.02.59,1.22,1.52,1.47,2.6,1.13,4.85,1.13,9.88,1.14,14.83,0,2.56.02,5.13-.08,7.69-.07,2.01-.12,4.15-1.85,5.48-1.49,1.15-3.49,1.57-5.31,1.84-2.52.37-5.09.41-7.63.36-4.23-.08-8.5-.31-12.61-1.37-1.97-.51-3.89-1.21-5.68-2.2-1.69-.94-3.65-2.17-4.54-3.96-1.12-2.25-1.34-5.23-1.59-7.7-.26-2.63-.33-5.28-.23-7.92.21-5.3,1.14-10.54,2.66-15.63.55-1.85-2.34-2.65-2.89-.8-2.96,9.91-4.07,21.24-1.37,31.34,1.24,4.65,5.75,7.29,10,8.87s9.14,2.1,13.78,2.29c4.96.2,10.59.46,15.23-1.6,1.92-.85,3.55-2.27,4.33-4.26.95-2.45.73-5.4.76-7.98.06-5.59.16-11.26-.64-16.81-.33-2.27-.58-5.33-2.42-6.94-.83-.73-1.86-1.13-2.87-1.56-1.27-.54-2.56-1.07-3.85-1.57-5.38-2.09-11.05-4.07-16.79-4.88-5.25-.74-10.77-.47-15.48,2.2-1.68.95-.17,3.55,1.51,2.59h0Z"/>
                    </g>
                </g>
                <g id="svg-Layer_5" data-name="Layer 5" className={"muscle-svg"}>
                    <g>
                        <path className=""
                              d="m150.57,419.62c-6.93,4.95-14.74,5.72-22.07,9.88-5.38,3.05-8.58,8.77-12,14-2.18,3.33-5.73,7.36-7.13,11.09-2.07,5.54-4.15,11.09-5.93,16.74-5.56,17.67-8.17,36.26-7.69,54.78.15,5.75.6,11.49,1.61,17.15,2.06,11.5,7.13,25.24,8.13,37.24.23,2.75,1.2,2.27,1,5,3.7-.47,4.83-3.39,7.2-6.27,6.39-7.78,14.56-13.86,21.82-20.82,10.26-9.83,18.93-21.88,22.15-35.72,1.76-7.55,1.84-15.38,2.87-23.06,1.49-11.02,4.94-21.78,5.33-32.89.59-16.66-5.75-33.45-15.3-47.12"/>
                        <path
                            d="m149.81,418.32c-5.15,3.61-11.2,5.1-16.95,7.45-2.7,1.1-5.35,2.35-7.65,4.16-2.17,1.72-3.95,3.85-5.56,6.08s-3.09,4.69-4.65,7.03-3.4,4.59-4.94,7c-1.68,2.62-2.65,5.52-3.73,8.42-1.19,3.23-2.36,6.46-3.45,9.73-4.24,12.76-6.95,26.01-8.09,39.41s-.98,26.71,1.84,39.65c1.5,6.88,3.54,13.63,5.15,20.49.8,3.39,1.52,6.82,1.95,10.28.19,1.5.16,3.11.63,4.56.36,1.09.69,1.72.63,2.92-.06,1.07,1,1.58,1.9,1.45,2.61-.4,4.39-2.03,5.93-4.07,1.77-2.35,3.58-4.59,5.62-6.72,4.46-4.65,9.43-8.77,14.22-13.07,8.84-7.93,16.88-16.97,22.07-27.75,2.65-5.51,4.44-11.32,5.34-17.37,1-6.74,1.2-13.57,2.26-20.3s2.82-13.7,3.94-20.61c1.04-6.42,1.46-12.88.76-19.36-1.52-14-7.17-27.32-15.17-38.83-1.09-1.57-3.7-.08-2.59,1.51,6.96,10.02,12.12,21.37,14.21,33.44,1.06,6.16,1.17,12.41.44,18.61-.78,6.66-2.39,13.18-3.65,19.75s-1.79,12.81-2.42,19.27-1.65,12.37-3.92,18.25c-4.15,10.76-11.51,20.08-19.8,27.96-5.04,4.8-10.48,9.17-15.47,14.03-2.39,2.32-4.72,4.74-6.74,7.39-1.65,2.16-2.92,4.54-5.83,4.98l1.9,1.45c.05-1.01-.02-1.95-.39-2.89-.44-1.11-.6-2.14-.72-3.34-.31-2.98-.82-5.93-1.43-8.86-1.28-6.1-3-12.1-4.54-18.14s-2.75-12.22-3.26-18.5c-.54-6.65-.58-13.34-.27-20,.63-13.15,2.83-26.22,6.53-38.85,1.89-6.44,4.21-12.74,6.56-19.02,1.02-2.73,2.61-5.08,4.31-7.43s3.2-4.51,4.7-6.85c1.62-2.52,3.27-5.04,5.32-7.23,2.27-2.42,4.98-4.04,8.01-5.36,6.2-2.71,12.88-4.16,18.5-8.11,1.57-1.1.07-3.7-1.51-2.59h0Z"/>
                    </g>
                    <g>
                        <path className=""
                              d="m415.01,420.08c6.93,4.95,14.74,5.72,22.07,9.88,5.38,3.05,8.58,8.77,12,14,2.18,3.33,5.73,7.36,7.13,11.09,2.07,5.54,4.15,11.09,5.93,16.74,5.56,17.67,8.17,36.26,7.69,54.78-.15,5.75-.6,11.49-1.61,17.15-2.06,11.5-7.13,25.24-8.13,37.24-.23,2.75-1.2,2.27-1,5-3.7-.47-4.83-3.39-7.2-6.27-6.39-7.78-14.56-13.86-21.82-20.82-10.26-9.83-18.93-21.88-22.15-35.72-1.76-7.55-1.84-15.38-2.87-23.06-1.49-11.02-4.94-21.78-5.33-32.89-.59-16.66,5.75-33.45,15.3-47.12"/>
                        <path
                            d="m414.25,421.38c4.99,3.5,10.84,5.11,16.46,7.27,2.72,1.05,5.54,2.26,7.83,4.11,2.11,1.7,3.83,3.83,5.37,6.04s2.95,4.6,4.5,6.85c1.64,2.36,3.46,4.6,4.95,7.07,1.6,2.66,2.51,5.69,3.57,8.59,1.16,3.15,2.28,6.32,3.32,9.52,4.06,12.53,6.64,25.53,7.65,38.67s.74,26.31-2.21,39.07c-1.56,6.75-3.55,13.39-5.08,20.15-.73,3.23-1.35,6.49-1.76,9.78-.17,1.34-.14,2.76-.63,4.04-.45,1.18-.7,2.14-.63,3.44l1.9-1.45c-2.52-.39-3.75-2.16-5.17-4.1-1.75-2.39-3.75-4.6-5.83-6.71-4.36-4.44-9.16-8.41-13.78-12.57-8.64-7.79-16.44-16.63-21.45-27.22-2.51-5.31-4.1-10.94-4.93-16.75-.94-6.59-1.15-13.25-2.19-19.83s-2.66-13.09-3.78-19.67-1.5-12.69-.85-19.08c1.39-13.61,7.05-26.59,14.8-37.75,1.1-1.59-1.49-3.09-2.59-1.51-7.17,10.31-12.52,22.14-14.58,34.58-1.05,6.3-1.22,12.64-.48,18.98.79,6.77,2.37,13.4,3.67,20.08s1.83,13.53,2.55,20.36c.66,6.31,1.81,12.48,4.18,18.39,4.45,11.09,11.96,20.68,20.59,28.83,5.17,4.88,10.72,9.34,15.78,14.34,2.41,2.38,4.72,4.87,6.71,7.62,1.71,2.35,3.52,4.44,6.54,4.9.9.14,1.95-.38,1.9-1.45s.17-1.7.54-2.69c.47-1.26.47-2.64.62-3.96.34-3.01.91-5.99,1.56-8.94,1.35-6.15,3.11-12.21,4.63-18.32,3.19-12.87,3.94-26.04,3.19-39.25-.76-13.41-3.09-26.74-6.97-39.59-1.94-6.42-4.14-12.86-6.69-19.07-1.11-2.7-2.85-5.07-4.57-7.41s-3.13-4.52-4.63-6.83c-1.69-2.61-3.46-5.21-5.63-7.45-2.28-2.36-4.97-4.04-7.95-5.38-6.3-2.83-13.17-4.26-18.9-8.28-1.58-1.11-3.08,1.49-1.51,2.59h0Z"/>
                    </g>
                </g>
                <g id="svg-Layer_2" data-name="Layer 2" className={"muscle-svg"}>
                    <g>
                        <path className=""
                              d="m193.68,357.16c1.38,4.37,2.68,9.46.13,13.27-1.45,2.17-3.89,3.45-6.22,4.63-4.54,2.31-9.08,4.61-13.61,6.92-2.24,1.14-4.49,2.28-6.46,3.83-5.63,4.4-8.41,11.52-10.02,18.48-.87,3.78-1.52,7.72-3.59,10.99-2.46,3.87-6.64,6.33-10.88,8.06s-8.73,2.9-12.82,4.99c-5.64,2.89-10.38,7.52-13.39,13.09-.66,1.22-1.27,2.52-2.36,3.37s-2.84,1.05-3.77.03c-.51-.56-.66-1.35-.78-2.1-1.87-11.87-.35-24,1.43-35.88,1.44-9.67,3.08-19.4,6.73-28.46s9.5-17.52,17.8-22.67c7.4-4.59,16.27-6.28,24.97-6.62,3.77-.15,7.56-.06,11.31-.47,5.54-.61,10.89-2.28,16.2-3.95,0,0,3.88,7.95,5.32,12.5Z"/>
                        <path
                            d="m192.24,357.56c1.14,3.62,2.63,8.24.49,11.78-1.1,1.82-3.01,2.92-4.84,3.88-2.16,1.14-4.36,2.22-6.54,3.33-4.32,2.19-8.89,4.17-12.97,6.8-3.51,2.27-6.25,5.43-8.23,9.1s-3.18,7.48-4.1,11.43c-.98,4.23-1.64,8.83-4.62,12.2-6.01,6.81-16.04,7.4-23.55,11.8-3.52,2.07-6.67,4.8-9.2,8.01-1.27,1.61-2.38,3.3-3.34,5.1-.46.86-2.17,4.2-3.58,2.77-.59-.59-.56-2.47-.65-3.21-.16-1.29-.28-2.58-.37-3.87-.17-2.5-.21-5.01-.16-7.52.1-5.04.6-10.07,1.24-15.07,2.29-17.74,4.84-37.87,17.8-51.37,6.17-6.42,14.22-9.92,22.92-11.35,4.79-.79,9.61-.81,14.45-.95s9.84-.88,14.66-2.2c2.38-.65,4.74-1.39,7.1-2.13l-1.69-.69c1.92,3.94,3.83,7.97,5.17,12.14.59,1.83,3.49,1.05,2.89-.8-1.42-4.42-3.44-8.69-5.47-12.86-.28-.57-1.1-.88-1.69-.69-5.01,1.57-10.09,3.21-15.33,3.84s-10.48.31-15.71.78c-9.38.84-18.57,3.53-25.95,9.57-15.16,12.39-18.73,32.94-21.39,51.21-1.53,10.55-2.78,21.3-1.47,31.94.25,2.04.28,4.77,2.3,5.95,1.68.98,3.85.44,5.25-.77,1.59-1.38,2.35-3.51,3.45-5.27s2.44-3.46,3.92-4.98c3.21-3.29,7.08-5.71,11.35-7.38s9.14-2.99,13.34-5.34c3.88-2.17,7.09-5.22,8.83-9.36s2.25-8.9,3.64-13.27c1.29-4.06,3.16-8.06,6.11-11.19,3.37-3.57,8.09-5.5,12.39-7.68,2.34-1.19,4.68-2.38,7.03-3.57,2.15-1.09,4.42-2.09,6.39-3.51,3.73-2.68,5.07-6.69,4.51-11.17-.27-2.14-.84-4.21-1.49-6.26-.58-1.84-3.47-1.05-2.89.8Z"/>
                    </g>
                    <path d="m188.36,347.16c1.93,0,1.93-3,0-3s-1.93,3,0,3h0Z"/>
                    <g>
                        <path className=""
                              d="m377.55,345.03c5.31,1.67,10.67,3.34,16.2,3.95,3.75.41,7.54.32,11.31.47,8.7.34,17.57,2.04,24.97,6.62,8.31,5.15,14.15,13.61,17.8,22.67s5.28,18.8,6.73,28.46c1.78,11.89,3.3,24.01,1.43,35.88-.12.75-.27,1.54-.78,2.1-.93,1.03-2.68.82-3.77-.03s-1.7-2.16-2.36-3.37c-3.01-5.58-7.75-10.21-13.39-13.09-4.09-2.09-8.57-3.26-12.82-4.99s-8.43-4.19-10.88-8.06c-2.08-3.27-2.72-7.22-3.59-10.99-1.61-6.97-4.38-14.08-10.02-18.48-1.98-1.54-4.23-2.69-6.46-3.83-4.54-2.31-9.08-4.61-13.61-6.92-2.33-1.18-4.76-2.46-6.22-4.63-2.55-3.81-1.25-8.9.13-13.27,1.44-4.55,5.32-12.5,5.32-12.5Z"/>
                        <path
                            d="m377.15,346.47c5.14,1.61,10.3,3.2,15.65,3.89s10.8.35,16.18.84c9.51.85,18.85,3.85,25.9,10.51s11.12,15.1,13.79,24.01c3.02,10.08,4.48,20.73,5.71,31.17.64,5.48,1.06,11.01.94,16.53-.06,2.78-.25,5.56-.64,8.31-.1.72-.08,2.35-.92,2.63-.93.31-1.82-.69-2.27-1.35-1.22-1.77-2.06-3.75-3.33-5.5s-2.79-3.51-4.45-5.03c-3.45-3.17-7.46-5.41-11.82-7.08-4.58-1.76-9.39-3.02-13.56-5.68-1.86-1.19-3.59-2.67-4.84-4.51-1.38-2.04-2.11-4.38-2.7-6.74-1.09-4.42-1.97-8.81-3.79-13.01-1.71-3.96-4.17-7.67-7.58-10.36-4.09-3.23-9.17-5.28-13.79-7.63-2.43-1.23-4.87-2.45-7.29-3.7-1.94-1.01-4.02-2.13-5.19-4.06-2.23-3.69-.57-8.7.71-12.44,1.11-3.24,2.55-6.38,4-9.48.31-.67.63-1.34.96-2.01.84-1.73-1.74-3.25-2.59-1.51-2.95,6.06-6.18,12.55-6.99,19.31-.27,2.24-.12,4.54.8,6.62s2.72,3.77,4.71,5.01c2.28,1.42,4.78,2.53,7.17,3.75,2.63,1.34,5.27,2.68,7.9,4.02,4.48,2.27,8.76,4.5,11.7,8.73,2.69,3.88,4.24,8.41,5.32,12.97,1.15,4.87,1.98,9.84,5.35,13.76,3.11,3.63,7.58,5.74,11.98,7.39,4.98,1.87,10.07,3.33,14.48,6.42,3.79,2.67,6.91,6.24,9.12,10.31,1.04,1.91,2.15,4.01,4.41,4.65s4.29-.41,5-2.58c.38-1.16.45-2.48.6-3.69.19-1.53.32-3.06.41-4.59.17-2.83.17-5.67.07-8.5-.22-5.75-.9-11.47-1.7-17.16s-1.62-11.19-2.76-16.72c-2.05-9.94-5.3-19.87-11.36-28.13-5.88-8.02-13.94-13.53-23.59-15.99-5.15-1.31-10.46-1.81-15.76-1.94-2.87-.07-5.75-.07-8.61-.34s-5.72-.87-8.52-1.6-5.36-1.54-8.02-2.37c-1.85-.58-2.64,2.32-.8,2.89Z"/>
                    </g>
                </g>
                <g id="svg-obliques" data-name="Obliques" onMouseEnter={handleHover} onMouseLeave={handleUnHover} onClick={() => router.push("/muscles/functions/core/obliques")}
               className={`muscle-svg ${highlighted.split(",").includes("obliques") ? "muscle-highlighted" : ""}`}>
                    <g>
                        <path className=""
                              d="m165.65,450.55c5.85,2.95,9.01,7.02,13.73,11.53,2.68,2.56,5.38,5.14,8.54,7.06,4.04,2.45,8.66,3.73,13.18,5.07,9.66,2.87,20.07,6.88,24.86,15.76,3.64,6.76,3.19,14.89,2.64,22.55-.98,13.77-1.97,27.53-2.95,41.3-.91,12.77-1.83,25.55-1.87,38.35-.07,21.39,2.31,42.7,3.74,64.03.48,7.1-.12,15.92-6.59,18.87-3.95,1.81-8.57.54-12.66-.95-6.74-2.44-13.28-5.41-19.55-8.87-6.32-3.48-9.24-6.77-14.24-10.77-2.92-2.33.3-9.32,1-13,.61-3.19,2.52-9.13,4-12,3.19-6.19,4.3-10.69,7.65-16.8,7.81-14.24,9.01-31.12,8.76-47.35-.1-6.12-.41-12.38-2.8-18.01-1.92-4.52-5.07-8.38-7.57-12.6-9-15.15-9.21-33.79-14.55-50.59-3.29-10.37-5.49-21.65-5.34-33.6"/>
                        <path
                            d="m164.9,451.84c7.35,3.78,12.2,10.8,18.54,15.92,3.41,2.76,7.19,4.66,11.34,6.07,3.83,1.3,7.75,2.29,11.57,3.64,6.57,2.33,13.47,5.69,17.41,11.7,4.75,7.25,3.86,16.38,3.27,24.59-1.4,19.57-3.02,39.14-4.1,58.73-.54,9.76-.78,19.53-.51,29.3.27,9.78.95,19.55,1.7,29.31.37,4.84.77,9.68,1.14,14.52.34,4.4.8,8.82.89,13.23.12,5.94-.88,14.63-8.27,15.55-4.31.54-8.77-1.49-12.69-3.03-4.37-1.72-8.65-3.68-12.82-5.85-3.72-1.94-7.24-4.06-10.48-6.74-1.45-1.2-2.85-2.44-4.29-3.65-1.03-.87-2.56-1.62-2.78-3.07-.43-2.91,1.08-6.12,1.81-8.88.83-3.14,1.52-6.25,2.64-9.31,1.29-3.55,3.14-6.86,4.59-10.34,1.65-3.97,3.44-7.77,5.39-11.6,7.81-15.34,8.78-33.48,8.05-50.39-.19-4.43-.68-8.94-2.18-13.14s-3.85-7.56-6.2-11.12c-4.7-7.1-7.58-14.82-9.56-23.07-1.96-8.14-3.2-16.43-5.25-24.55-1.06-4.19-2.47-8.27-3.56-12.45s-2.01-8.69-2.59-13.11-.85-9.02-.8-13.55c.02-1.93-2.98-1.93-3,0-.1,9.33,1.2,18.64,3.56,27.67,1.11,4.24,2.55,8.39,3.61,12.65s1.89,8.45,2.73,12.7c1.66,8.4,3.34,16.88,6.66,24.82,1.65,3.94,3.74,7.57,6.11,11.12,2.52,3.79,4.96,7.57,6.14,12.02s1.37,8.89,1.45,13.38.05,8.91-.19,13.35c-.47,8.82-1.79,17.67-4.85,25.99-1.56,4.22-3.86,8.04-5.71,12.13s-3.2,7.91-5.12,11.73c-1.61,3.2-2.8,6.57-3.76,10.02-.39,1.41-.65,2.85-1.02,4.26-.42,1.6-.94,3.16-1.34,4.77-.67,2.72-1.33,6.3,1.02,8.42,2.82,2.54,5.81,5.04,8.84,7.32,3.68,2.77,7.79,4.9,11.92,6.91s8.46,3.86,12.81,5.48c4.06,1.5,8.59,2.97,12.92,1.78,3.28-.9,5.87-3.32,7.26-6.38,3.2-7.02,1.79-15.42,1.23-22.82-1.52-20-3.45-40.01-3.09-60.1.36-20.04,2.26-40.06,3.69-60.05.36-5.06.73-10.12,1.09-15.18.31-4.35.59-8.75.11-13.1s-1.58-8.24-3.89-11.76c-2.01-3.06-4.71-5.57-7.74-7.6-6.53-4.38-14.16-6.29-21.55-8.64-4.39-1.39-8.45-3.23-12.01-6.2-3.27-2.73-6.21-5.82-9.23-8.82-2.82-2.8-5.85-5.33-9.4-7.15-1.71-.88-3.23,1.71-1.51,2.59h0Z"/>
                    </g>
                    <g>
                        <path className=""
                              d="m400.03,450.92c-5.85,2.95-9.01,7.02-13.73,11.53-2.68,2.56-5.38,5.14-8.54,7.06-4.04,2.45-8.66,3.73-13.18,5.07-9.66,2.87-20.07,6.88-24.86,15.76-3.64,6.76-3.19,14.89-2.64,22.55.98,13.77,1.97,27.53,2.95,41.3.91,12.77,1.83,25.55,1.87,38.35.07,21.39-2.31,42.7-3.74,64.03-.48,7.1.12,15.92,6.59,18.87,3.95,1.81,8.57.54,12.66-.95,6.74-2.44,13.28-5.41,19.55-8.87,6.32-3.48,9.24-6.77,14.24-10.77,2.92-2.33-.3-9.32-1-13-.61-3.19-2.52-9.13-4-12-3.19-6.19-4.3-10.69-7.65-16.8-7.81-14.24-9.01-31.12-8.76-47.35.1-6.12.41-12.38,2.8-18.01,1.92-4.52,5.07-8.38,7.57-12.6,9-15.15,9.21-33.79,14.55-50.59,3.29-10.37,5.49-21.65,5.34-33.6"/>
                        <path
                            d="m399.27,449.62c-7.53,3.87-12.51,10.99-18.97,16.25s-15.56,6.68-23.5,9.72c-6.85,2.62-13.63,6.38-17.65,12.74-4.7,7.45-4.14,16.64-3.54,25.06,1.43,20.06,3.11,40.13,4.19,60.21.54,10.01.74,20.02.42,30.04-.32,10.03-1.05,20.04-1.83,30.04-.39,5-.8,10.01-1.18,15.01-.32,4.17-.79,8.37-.68,12.55.17,6.54,2.18,14.38,9.42,16.21,4.36,1.1,8.87-.4,12.94-1.91,4.43-1.65,8.78-3.52,13.01-5.6s8.05-4.09,11.65-6.82c1.53-1.16,3.01-2.4,4.47-3.65s3.06-2.38,4.41-3.71c2.24-2.21,1.45-5.89.76-8.58-.77-3.01-1.52-6.05-2.37-9.04-.99-3.5-2.27-6.85-3.87-10.1-1.88-3.82-3.31-7.83-5.09-11.7s-4.09-7.78-5.61-11.95-2.62-8.55-3.39-12.94c-1.52-8.7-1.74-17.6-1.57-26.41.09-4.56.31-9.17,1.56-13.58s3.67-8.05,6.15-11.77,4.49-7.32,6.15-11.33,2.85-8.04,3.88-12.18c2.08-8.4,3.33-16.98,5.45-25.37,1.08-4.26,2.52-8.41,3.62-12.67s1.99-8.77,2.58-13.24.91-9.32.86-14c-.02-1.93-3.02-1.93-3,0,.09,9.16-1.17,18.24-3.51,27.08-1.08,4.1-2.47,8.11-3.5,12.23s-1.87,8.31-2.69,12.49c-1.61,8.13-3.19,16.34-6.27,24.07-1.58,3.97-3.68,7.65-6.04,11.2s-4.72,7.11-6.11,11.18-1.86,8.59-2.04,12.94-.18,8.81-.04,13.21c.27,8.53,1.19,17.13,3.56,25.36,1.19,4.13,2.75,8.17,4.73,11.98s3.65,7.51,5.27,11.4c1.45,3.48,3.29,6.78,4.57,10.32,1.12,3.1,1.79,6.26,2.65,9.42.73,2.68,2.23,5.9,1.71,8.73-.27,1.46-2.01,2.31-3.05,3.2-1.38,1.17-2.73,2.37-4.13,3.52-6.8,5.6-15.22,9.36-23.37,12.56-3.9,1.53-8.4,3.57-12.7,2.92-3.35-.51-5.71-2.94-6.82-6.04s-1.29-6.41-1.22-9.65c.1-4.44.56-8.88.91-13.31,1.51-19.51,3.29-39.03,2.88-58.62-.41-19.54-2.24-39.07-3.63-58.56-.36-4.98-.71-9.95-1.07-14.93-.3-4.25-.62-8.53-.27-12.79s1.4-8.05,3.68-11.46c1.98-2.96,4.76-5.31,7.78-7.16,6.6-4.04,14.08-5.63,21.3-8.11,4.22-1.45,8.03-3.43,11.47-6.27,3.24-2.67,6.15-5.72,9.13-8.68,2.74-2.73,5.61-5.18,9.07-6.96,1.72-.88.2-3.47-1.51-2.59h0Z"/>
                    </g>
                </g>
                <g id="svg-Layer_3" data-name="Layer 3" className={"muscle-svg"}>
                    <g>
                        <path className=""
                              d="m245.16,315.44c-14.9,4.33-27.72,13.92-42.2,19.5-3.83,1.48-3.84,2.61-7.46,4.56-.7.38-4.43,2.35-6,4-1.08,1.13-.41,1.78,0,3,.93,2.78,1.73,4.34,3.03,6.97,1.3,2.63.97,2.03,1.97,6.03.47,1.86,1,4,1,7,6.18-.85,9.85-1.5,15.6-3.91,2.56-1.07,5.08-2.31,7.32-3.95,2.5-1.84,4.61-4.17,6.53-6.61,5.53-7.02,9.62-15.04,13.63-23.02,1.33-2.65,2.66-5.31,3.99-7.97,3.21-6.45,6.42-12.97,8.36-19.92"/>
                        <path
                            d="m244.76,313.99c-13.01,3.83-24.35,11.44-36.56,17.1-2.84,1.31-6.02,2.2-8.67,3.86-1.87,1.18-3.54,2.57-5.49,3.64s-4.6,2.41-5.99,4.33c-.88,1.21-.62,2.34-.12,3.63.57,1.48,1.07,2.97,1.73,4.42.98,2.15,2.22,4.11,2.77,6.32.76,3.06,1.55,6.04,1.58,9.21.01,1.07.95,1.58,1.9,1.45,5.46-.76,10.67-1.84,15.78-3.98,2.76-1.16,5.46-2.48,7.85-4.29s4.37-3.93,6.2-6.23c7.7-9.65,12.87-21.08,18.34-32.06,3.2-6.43,6.34-12.93,8.3-19.85.53-1.86-2.37-2.65-2.89-.8-1.68,5.93-4.24,11.52-6.95,17.03s-5.48,11.09-8.34,16.58c-2.69,5.16-5.58,10.25-9.03,14.95-1.72,2.35-3.59,4.64-5.75,6.6s-4.51,3.33-7.06,4.52c-5.52,2.58-11.25,3.81-17.25,4.64l1.9,1.45c-.03-2.96-.66-5.75-1.35-8.61-.39-1.63-.82-3.11-1.56-4.62-1.26-2.59-2.37-5.16-3.41-7.84-.24-.62-.33-.61.06-1.06s.94-.8,1.42-1.13c.95-.66,1.95-1.26,2.96-1.83,1.84-1.03,3.5-2.17,5.2-3.4,2.37-1.71,5.34-2.52,7.99-3.71,5.91-2.64,11.57-5.79,17.29-8.8,6.42-3.38,12.96-6.57,19.94-8.62,1.85-.54,1.06-3.44-.8-2.89h0Z"/>
                    </g>
                    <g>
                        <path className=""
                              d="m320.99,315.88c14.9,4.33,27.72,13.92,42.2,19.5,3.83,1.48,3.84,2.61,7.46,4.56.7.38,5.43,3.35,7,5,1.08,1.13-.59.78-1,2-.93,2.78-1.73,4.34-3.03,6.97-1.3,2.63-.97,2.03-1.97,6.03-.47,1.86-1,4-1,7-6.18-.85-9.85-1.5-15.6-3.91-2.56-1.07-5.08-2.31-7.32-3.95-2.5-1.84-4.61-4.17-6.53-6.61-5.53-7.02-9.62-15.04-13.63-23.02-1.33-2.65-2.66-5.31-3.99-7.97-3.21-6.45-6.42-12.97-8.36-19.92"/>
                        <path
                            d="m320.6,317.32c13.17,3.88,24.6,11.74,37.03,17.34,2.72,1.22,5.76,2.05,8.19,3.79,1.72,1.24,3.46,2.36,5.25,3.49.94.59,1.87,1.21,2.78,1.85.43.3.85.6,1.27.92.39.3.89.95,1.33,1.13l.15.15c.6-1.19.63-1.6.11-1.24-.11.02-.27.18-.37.25-.55.41-.87.89-1.12,1.53-.58,1.47-1.09,2.94-1.77,4.37-.98,2.06-2.11,4.02-2.65,6.25-.79,3.25-1.6,6.42-1.63,9.78l1.9-1.45c-5.23-.73-10.27-1.72-15.17-3.73-2.58-1.06-5.14-2.31-7.39-3.98-2.39-1.77-4.4-4.05-6.23-6.37-7.37-9.36-12.32-20.51-17.59-31.11-3.09-6.2-6.1-12.45-8-19.14-.53-1.85-3.42-1.07-2.89.8,1.73,6.09,4.36,11.86,7.15,17.53s5.67,11.51,8.65,17.19c5.4,10.29,11.74,21.65,22.7,26.75,5.78,2.69,11.68,4.07,17.97,4.94.95.13,1.89-.37,1.9-1.45.03-3.1.8-5.99,1.52-8.98.48-2,1.43-3.61,2.35-5.53.66-1.39,1.27-2.8,1.79-4.25.2-.55.19-.61.58-.93.49-.4.92-.66,1.07-1.33.47-2.15-3.16-4.08-4.62-5.08-1.86-1.28-3.89-2.31-5.71-3.62-.84-.61-1.63-1.29-2.51-1.84-1.45-.91-3.07-1.45-4.64-2.09-6.47-2.65-12.6-6.06-18.77-9.33-7.02-3.71-14.17-7.28-21.81-9.54-1.86-.55-2.65,2.35-.8,2.89h0Z"/>
                    </g>
                </g>
                <g id="svg-Layer_4" data-name="Layer 4" className={"muscle-svg"}>
                    <g>
                        <path className=""
                              d="m194.36,371.21c-.57.85-1.29,1.59-2.14,2.15-12.46,8.18-23.26,9.06-30.42,21.14-3.9,6.59-3.73,15.01-7.72,21.56-.73,1.2-1.62,2.4-1.71,3.81-.15,2.39,1.99,4.18,3.55,5.99,4.11,4.75,4.93,11.43,7.45,17.18,4.2,9.56,12.94,16.22,21.34,22.43,3.36,2.49,6.75,5,10.52,6.83,3.97,1.93,8.27,3.06,12.57,4.03,14.17,3.2,28.75,4.22,43.22,3.02,4.48-.37,9.05-.91,13.2-2.66,8.04-3.39,13.69-11.03,16.61-19.24s2.27-17.24,2.67-25.95c.29-6.29.25-12.83-1-19-1.22-6.05-2.34-11.36-4.91-16.97-2.1-4.58-4.26-9.25-7.68-12.94-2.97-3.2-6.75-5.52-10.48-7.78-8.59-5.2-17.53-10.44-27.49-11.77-8.82-1.18-17.73.81-26.41,2.79-5.25,1.2-4.38.8-8.21,2.74-1.2.61-2.22,1.52-2.97,2.63h0Z"/>
                        <path
                            d="m193.06,370.46c-.94,1.34-2.35,2.12-3.72,2.95s-2.73,1.59-4.13,2.32c-2.51,1.32-5.08,2.52-7.62,3.76-4.77,2.33-9.45,4.95-13.09,8.89-1.97,2.12-3.71,4.55-4.94,7.18-1.4,2.98-2.22,6.16-3.03,9.35s-1.52,6.15-2.94,8.97-3.72,5.37-2.1,8.76c1.24,2.58,3.72,4.34,5.15,6.84,1.56,2.74,2.44,5.79,3.41,8.77s1.98,5.75,3.48,8.41,3.51,5.3,5.66,7.63c4.29,4.66,9.39,8.49,14.47,12.25,2.81,2.08,5.62,4.18,8.66,5.91s6.39,3.03,9.79,4c14.34,4.1,29.72,5.47,44.59,4.7,6.87-.36,14.17-.81,20.35-4.13,5.23-2.81,9.37-7.42,12.27-12.56,3.33-5.91,4.84-12.37,5.28-19.11.24-3.69.23-7.39.33-11.09s.3-7.24.22-10.87c-.17-7.3-1.51-14.62-3.6-21.61-.97-3.24-2.29-6.32-3.73-9.37s-3.08-6.2-5.2-8.94c-4.2-5.44-10.41-8.81-16.23-12.24s-12.15-6.79-18.85-8.59c-7.2-1.94-14.58-1.66-21.88-.43-3.68.62-7.31,1.46-10.95,2.28-1.93.44-3.87.76-5.68,1.59-2.3,1.04-4.5,2.22-5.94,4.38-1.07,1.61,1.52,3.11,2.59,1.51,1.14-1.71,3.53-2.84,5.32-3.49,2.04-.74,4.27-1.05,6.38-1.52,7.11-1.61,14.36-3.13,21.7-2.69,6.77.4,13.19,2.8,19.18,5.88,2.91,1.49,5.74,3.14,8.54,4.82s5.55,3.28,8.14,5.19c5.45,4.03,8.45,9.71,11.21,15.74s4.35,12.77,5.35,19.33c1.07,7.01.53,14.06.39,21.11s-.11,13.76-2.32,20.28c-1.83,5.4-4.91,10.51-9.15,14.35-4.8,4.36-10.79,6.04-17.12,6.68-14.23,1.44-28.71.66-42.7-2.25-6.81-1.42-13.35-3.23-19.24-7.06-5.26-3.42-10.39-7.31-15.11-11.43-4.42-3.85-8.46-8.22-11.04-13.53s-3.31-11.4-6.56-16.4c-.77-1.18-1.67-2.22-2.62-3.26-.85-.93-1.99-2.02-2.12-3.35-.14-1.44,1.02-2.72,1.71-3.9.81-1.4,1.46-2.91,2.01-4.44,2.09-5.79,2.59-12.14,5.91-17.45,2.72-4.35,6.53-7.59,10.96-10.1,4.66-2.64,9.63-4.66,14.3-7.28,2.54-1.42,5.18-2.81,6.88-5.24,1.11-1.58-1.49-3.09-2.59-1.51Z"/>
                    </g>
                    <g>
                        <path className=""
                              d="m372,371.12c.57.85,1.29,1.59,2.14,2.15,12.46,8.18,23.26,9.06,30.42,21.14,3.9,6.59,3.73,15.01,7.72,21.56.73,1.2,1.62,2.4,1.71,3.81.15,2.39-1.99,4.18-3.55,5.99-4.11,4.75-4.93,11.43-7.45,17.18-4.2,9.56-12.94,16.22-21.34,22.43-3.36,2.49-6.75,5-10.52,6.83-3.97,1.93-8.27,3.06-12.57,4.03-14.17,3.2-28.75,4.22-43.22,3.02-4.48-.37-9.05-.91-13.2-2.66-8.04-3.39-13.69-11.03-16.61-19.24-2.93-8.22-1.62-17.14-2.02-25.86-.29-6.29-.25-12.83,1-19,1.22-6.05,1.7-11.45,4.27-17.06,2.1-4.58,4.26-9.25,7.68-12.94,2.97-3.2,6.75-5.52,10.48-7.78,8.59-5.2,17.53-10.44,27.49-11.77,8.82-1.18,17.73.81,26.41,2.79,5.25,1.2,4.38.8,8.21,2.74,1.2.61,2.22,1.52,2.97,2.63h0Z"/>
                        <path
                            d="m370.71,371.88c1.77,2.52,4.58,3.96,7.23,5.43,2.38,1.32,4.83,2.51,7.29,3.69,4.49,2.17,9.1,4.34,12.83,7.73,1.96,1.79,3.64,3.84,5.02,6.11,1.65,2.71,2.58,5.72,3.37,8.77s1.41,5.89,2.47,8.72c.52,1.39,1.12,2.77,1.87,4.05.7,1.21,1.93,2.55,1.69,4.04-.2,1.26-1.28,2.3-2.1,3.2-1.03,1.13-2.02,2.28-2.82,3.58-1.51,2.43-2.48,5.17-3.37,7.88s-1.71,5.58-2.98,8.2-3.06,5.28-5.05,7.59c-3.92,4.55-8.67,8.3-13.46,11.89-5.33,3.99-10.62,7.92-17.01,10.03-6.73,2.22-13.89,3.49-20.9,4.36s-14.45,1.24-21.69,1.04c-6.63-.19-13.88-.33-20.11-2.86-5.3-2.15-9.54-6.35-12.51-11.16-3.4-5.5-5.06-11.51-5.32-17.95-.14-3.37-.03-6.74-.03-10.11,0-3.6-.24-7.19-.23-10.79.02-6.87,1.21-13.54,2.55-20.26,1.28-6.39,3.88-12.6,7.45-18.06s9.45-8.96,15.12-12.35,11.59-6.73,17.98-8.71c6.71-2.08,13.62-2.2,20.53-1.15,3.7.56,7.35,1.36,11,2.19,2,.45,4.14.74,6.06,1.47,1.74.67,4.05,1.75,5.16,3.43s3.67.1,2.59-1.51c-2.63-3.94-7.54-5.04-11.85-6.02-7.44-1.69-15.01-3.44-22.69-3.24-7.09.19-13.8,2.3-20.15,5.36-3.08,1.48-6.06,3.16-9,4.9s-6.09,3.56-8.96,5.59c-2.71,1.92-5.15,4.1-7.15,6.76s-3.66,5.87-5.12,9-2.65,6.13-3.42,9.43-1.34,6.95-2,10.42c-1.4,7.38-.94,14.7-.88,22.15.06,7.1-.53,14.38,1.44,21.3,1.64,5.78,4.78,11.35,8.97,15.67,4.52,4.66,10.23,7.34,16.61,8.36,7.28,1.17,14.81,1.35,22.17,1.14s15.06-1.04,22.47-2.42,14.25-2.91,20.51-6.52c3.08-1.78,5.94-3.92,8.79-6.04,2.49-1.85,4.97-3.72,7.36-5.69,4.91-4.05,9.54-8.67,12.63-14.3,2.99-5.44,3.71-11.84,6.88-17.16,1.45-2.44,3.97-4.19,5.08-6.82,1.44-3.4-1.01-5.91-2.41-8.81-2.81-5.82-3.1-12.51-5.97-18.32-2.48-5.03-6.55-9.13-11.25-12.11s-9.75-4.97-14.57-7.53c-1.28-.68-2.55-1.39-3.79-2.14-1.37-.83-2.78-1.61-3.72-2.95-1.1-1.57-3.7-.07-2.59,1.51Z"/>
                    </g>
                </g>
            </svg>
        </div>
    )
}