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
                <span className="mb-10 inline-block text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Posterior Deltoid (Rear Delt)</span>
                <div className={"border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md"}>
                    <span className={"text-lg"}>The rear deltoid, also known as the posterior deltoid, is a muscle located at the back of the shoulder. It plays a crucial role in various upper body movements and contributes to overall shoulder strength and stability.</span>
                </div>
            </div>
            <Content
                id={"location"}
                title="Location"
                content={"The rear deltoids are located at the back of the shoulder. They are situated on the posterior aspect of the deltoid muscle group and specifically occupy the region behind the shoulder joint. When well-developed, the rear deltoids give the shoulders a rounded appearance from the back."}
            ></Content>
            <div className={"p-8 flex justify-around items-center"}>
                <FrontUpperBodySVG highlighted="rear-delt"/>
                <BackUpperBodySVG highlighted="rear-delt"/>
            </div>
            <Content
                title="Posterior Deltoid"
                id={"posterior-deltoid"}
                content={"The primary function of the rear deltoid is **shoulder extension**. When the rear deltoid contracts, it pulls the upper arm backward, resulting in the movement of shoulder extension. This action is involved in movements such as pulling exercises, rowing motions, and any activity that requires pulling the arms behind the body. The rear deltoid works **together** with other muscles, such as the [/muscles/functions/back/lats,lats] and [/muscles/functions/back/rhomboids,rhomboids], to perform efficient and controlled shoulder extension.-.-Additionally, the rear deltoid assists in **shoulder horizontal abduction**. This movement involves moving the arms away from the midline of the body in a horizontal plane. When the rear deltoid contracts, it helps initiate and control the movement of shoulder horizontal abduction. This function is relevant in actions like performing reverse fly exercises, executing wide-grip rowing movements, or any movement that requires bringing the arms **outward** from the midline.-.-Furthermore, the rear deltoid contributes to **shoulder external rotation**. When the muscle contracts, it assists in rotating the upper arm outward away from the body. This movement is utilized in actions such as throwing a ball, performing certain swimming strokes, or executing exercises that involve external rotation of the shoulder joint.-.-In summary, the rear deltoid is responsible for **shoulder extension, shoulder horizontal abduction, and assists in shoulder external rotation**. Its functions are essential for various upper body movements that involve pulling, rowing, and outward arm motions. Strengthening and conditioning the rear deltoid can improve overall shoulder stability, enhance posture, and contribute to optimal performance in activities that require upper body pulling and rotational movements."}
            ></Content>
        </div>
    )

    return (
        <ContentPage content={content} currentTopic={"Muscles-Functions-Back-Rear Delt"}></ContentPage>
    )
}