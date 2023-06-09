import {useRouter} from "next/router";
import Content from "@/components/Content";
import {BackUpperBodySVG, FrontUpperBodySVG} from "@/components/BodySVG";
import ContentPage from "@/components/ContentPage";

// TODO MAKE A PAGE FOR THE BACK, THEN MAKE A FOLDER WITH SUBCATEGORIES THAT GOES INTO MORE DETAIL ON EACH OF THE MUSCLES/MUSCLE GROUPS.
export default function PecsFunction({}) {
    const router = useRouter();

    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* Page Header */}
            <div className="flex flex-col mb-12">
                <span className="text-cyan-accent mb-1 text-lg">Muscles • Functions • Back</span>
                <span className="mb-10 inline-block text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Latissimus Dorsi (Lats)</span>
                <div className={"border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md"}>
                    <span className={"text-lg"}>The latissimus dorsi, commonly referred to as the lats, is a large muscle located on the back. Its primary function is to perform shoulder extension, which involves pulling the upper arm downward and backward. The lats also assist in movements such as shoulder adduction, internal rotation, and contribute to overall back strength and stability.</span>
                </div>
            </div>
            <Content
                id={"location"}
                title="Location"
                content={"The lats are large muscles located on the sides of the upper back. They span from the lower portion of the spine, sacrum, and iliac crest, all the way up to the humerus (upper arm bone). The lats have a broad, fan-like shape that extends from the mid-back region towards the armpits, contributing to the overall musculature and structure of the back."}
            ></Content>
            <div className={"p-8 flex justify-around items-center"}>
                <FrontUpperBodySVG highlighted="lats"/>
                <BackUpperBodySVG highlighted="lats"/>
            </div>
            <Content
                title="Latissimus Dorsi"
                id={"latissimus-dorsi"}
                content={"The lats perform several important functions in the upper body. One of their primary functions is shoulder extension. When the lats contract, they pull the upper arm **downward and backward**, resulting in the movement of shoulder extension. This action is involved in various movements such as pulling objects towards the body, performing pull-ups or lat pulldowns, and executing rowing exercises. Strong and well-developed lats contribute to overall back strength and power.-.-Another key function of the lats is **shoulder adduction**. When the lats contract bilaterally, they bring the arms closer to the midline of the body from an abducted position. This movement is utilized in actions such as performing chin-ups, executing wide-grip pulldowns, or rowing movements. Shoulder adduction with the involvement of the lats allows for **efficient pulling motions** and assists in exercises that target the upper back and arms.-.-Additionally, the lats contribute to **shoulder internal rotation**. This movement involves rotating the upper arm inward towards the body. When the lats contract, they assist in initiating and controlling the internal rotation of the shoulder joint. This function is particularly relevant in actions like throwing a ball, performing swimming strokes, or executing exercises that involve rotational movements of the upper body.-.-In summary, the latissimus dorsi muscles are responsible for **shoulder extension, shoulder adduction, and assist in shoulder internal rotation**. Their functions are integral for various upper body movements, including pulling, rowing, and rotational actions. Developing strong lats through targeted exercises can enhance overall back strength, improve posture, and contribute to optimal performance in activities that require upper body pulling and rotational motions."}
            ></Content>
        </div>
    )

    return (
        <ContentPage content={content} currentTopic={"Muscles-Functions-Back-Lats"}></ContentPage>
    )
}