import Navigation from '@/components/Navigation'
import Content from '@/components/Content'
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import ContentScroll from "@/components/ContentScroll";
import useDarkMode from 'use-dark-mode';
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
            <Content
                title="Trapezius"
                content={"The Trapezius is a large muscle located in the upper back and neck region. It is a triangular-shaped muscle that is divided into three heads: the upper, middle, and lower trapezius.-.-The Upper Trapezius head helps to **elevate** and **rotate** the shoulder blades upward. It is responsible for movements such as **shrugging** the shoulders and reaching the arms **overhead**. The Upper Trapezius head also helps to support the neck and head, particularly during movements that involve looking upward.-.-The Middle Trapezius head helps to **retract** the shoulder blades or pull them back. This muscle is important for maintaining **good posture** and is activated when we sit up straight or pull our shoulders back. It is also involved in movements such as **rowing or pulling** exercises.-.-The Lower Trapezius muscle helps to **depress** the shoulder blades or pull them downward. This muscle is important for stabilizing the shoulder joint during arm movements and is involved in movements such as **pushing or pressing** exercises.-.-Overall, the Trapezius muscle plays an important role in a wide range of upper body movements. Whether you're lifting weights, reaching for something overhead, or simply maintaining good posture, the different parts of the Trapezius muscle work together to keep your upper back and neck strong and mobile."}
            ></Content>
        </div>
    )

    return (
        <ContentPage content={content} currentTopic={"Muscles-Functions-Back-Traps"}></ContentPage>
    )
}