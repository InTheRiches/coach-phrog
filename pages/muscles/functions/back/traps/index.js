import Content from '@/components/Content'
import {UpperBodySVG} from '@/components/BodySVG';
import ContentPage from '@/components/ContentPage';

// TODO MAKE A PAGE FOR THE BACK, THEN MAKE A FOLDER WITH SUBCATEGORIES THAT GOES INTO MORE DETAIL ON EACH OF THE MUSCLES/MUSCLE GROUPS.
export default function TrapsFunction({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* Page Header */}
            <div className="flex flex-col mb-12">
                 <h1 className="mb-10 inline-block text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Back - Trapezius</h1>
                <div className={"border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md"}>
                    <span className={"text-lg mb-6"}>The back muscles are a group of muscles that are located in the <b>posterior</b> part of the body and are responsible for a wide range of functions, including posture, movement, and stabilization of the spine. These muscles can be divided into two main groups: the superficial and the deep back muscles.</span>
                    <span className={"text-lg"}>Together, the back muscles work to support the spine, maintain proper alignment, and facilitate movements such as bending, twisting, and lifting. Strengthening the back muscles can help improve posture, reduce the risk of back pain and injury, and enhance overall upper body strength and mobility.</span>
                </div>
            </div>
            <div id={"locationx"} className="mt-12">
                <div className={"flex items-center"}>
                    <a onClick={() => {
                        // copy the URL to the clipboard
                        if (window.location.href.includes("#")) {
                            router.push(window.location.href.split("#")[0] + "#locationx").then(r => scroll());
                        }
                        else {
                            router.push(window.location.href + "#locationx").then(r => scroll());
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
                    <h1 className="text-3xl font-bold flex items-center">
                        Location
                    </h1>
                </div>
                <div className="flex flex-col mt-8 text-lg"> {/* border-gray-600 border-l-8 */}
                    <span className="indent-4">The Trapezius is a large muscle located in the upper back and neck region. It is a triangular-shaped muscle that is divided into three heads: the upper, middle, and lower trapezius.</span>
                </div>
            </div>
            <UpperBodySVG highlighted="traps"/>
            <Content
                title="Trapezius"
                content={"The Upper Trapezius head helps to **elevate** and **rotate** the shoulder blades upward. It is responsible for movements such as **shrugging** the shoulders and reaching the arms **overhead**. The Upper Trapezius head also helps to support the neck and head, particularly during movements that involve looking upward.-.-The Middle Trapezius head helps to **retract** the shoulder blades or pull them back. This muscle is important for maintaining **good posture** and is activated when we sit up straight or pull our shoulders back. It is also involved in movements such as **rowing or pulling** exercises.-.-The Lower Trapezius muscle helps to **depress** the shoulder blades or pull them downward. This muscle is important for stabilizing the shoulder joint during arm movements and is involved in movements such as **pushing or pressing** exercises.-.-Overall, the Trapezius muscle plays an important role in a wide range of upper body movements. Whether you're lifting weights, reaching for something overhead, or simply maintaining good posture, the different parts of the Trapezius muscle work together to keep your upper back and neck strong and mobile."}
            ></Content>
        </div>
    )

    return (
        <ContentPage content={content} currentTopic={"Muscles-Functions-Back-Traps"}></ContentPage>
    )
}