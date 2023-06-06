import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';
import {BackUpperBodySVG, FrontUpperBodySVG} from '@/components/BodySVG';

// TODO MAKE A PAGE FOR THE BACK, THEN MAKE A FOLDER WITH SUBCATEGORIES THAT GOES INTO MORE DETAIL ON EACH OF THE MUSCLES/MUSCLE GROUPS.
export default function PecsFunction({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* Page Header */}
            <div className="flex flex-col mb-12">
                <span className="text-cyan-accent mb-1 text-lg">Muscles • Functions • Chest</span>
                <span className="mb-10 inline-block text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Anterior Deltoid (Front Delt)</span>
                <div className={"border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md"}>
                    <span className={"text-lg"}>The anterior deltoid is a muscle located at the front of the shoulder. Its main function is to flex and internally rotate the arm at the shoulder joint, allowing for movements such as raising the arm forward and inward.</span>
                </div>
            </div>
            <Content
                id={"location"}
                title="Location"
                content={"The anterior deltoid head is located at the front of the shoulder and is **one of three** heads that make up the deltoid muscle. The other two heads are the medial deltoid and the posterior deltoid. It forms part of the shoulder girdle and is positioned between the clavicle (collarbone) and the upper arm bone (humerus)."}
            ></Content>
            <div className={"p-8 flex justify-around items-center"}>
                <FrontUpperBodySVG highlighted="delts"/>
                <BackUpperBodySVG highlighted="delts"/>
            </div>
            <Content
                title="Anterior Deltoids"
                id={"anterior-deltoids"}
                content={"The anterior deltoid plays a crucial role in various upper body movements. One of its primary functions is **shoulder flexion**. When the anterior deltoid contracts, it assists in raising the arm forward, allowing you to perform actions such as reaching overhead, throwing a ball, or lifting objects in front of you. This movement is particularly important in activities that involve lifting or pushing motions in front of the body.-.-Additionally, the anterior deltoid contributes to **shoulder horizontal adduction**. This motion involves bringing the arm across the front of the body towards the midline. The anterior deltoid aids in this movement by working together with other muscles, such as the [/muscles/functions/chest/pecs,pectoralis major]. Shoulder horizontal adduction is utilized in exercises like chest flies, hugging motions, and certain swimming strokes.-.-Another function of the anterior deltoid is **internal rotation** of the arm at the shoulder joint. When the muscle contracts, it assists in turning the arm inward towards the body. This movement is involved in actions such as throwing a punch, performing a golf swing, or reaching behind the back. The anterior deltoid works **synergistically** (together) with other muscles, including the [/muscles/functions/chest/pecs,pectoralis major], to achieve this internal rotation of the arm.-.-Overall, the anterior deltoid is vital for shoulder flexion, shoulder horizontal adduction, and internal rotation of the arm. Its contributions to these movements enable a wide range of upper body actions, from basic daily tasks to sports-specific motions. Strengthening and conditioning the anterior deltoid can enhance shoulder stability, improve functional performance, and reduce the risk of certain shoulder injuries."}
            ></Content>
        </div>
    )

    return (
        <ContentPage content={content} currentTopic={"Muscles-Functions-Chest-Delts"}></ContentPage>
    )
}