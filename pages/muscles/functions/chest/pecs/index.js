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
                <span className="mb-10 inline-block text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Pectoralis Major (Pectorals/Pecs)</span>
                <div className={"border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md"}>
                    <span className={"text-lg"}>The pectoral muscles are large, fan shaped muscles that reside on either side of the upper chest. Both muscles have two heads, the clavicular, and the sternocostal.</span>
                </div>
            </div>
            <Content
                id={"location"}
                title="Location"
                content={"The pectoralis major is a large muscle located in the chest region of the body. It spans from the sternum (breastbone), clavicle (collarbone), and the upper ribs to the humerus (upper arm bone). It covers a significant portion of the anterior chest and is easily visible in well-developed individuals."}
            ></Content>
            <div className={"p-8 flex justify-around items-center"}>
                <FrontUpperBodySVG highlighted="pecs"/>
                <BackUpperBodySVG highlighted="pecs"/>
            </div>
            <Content
                title="Pectoralis Major"
                id={"pectoralis-major"}
                content={"The pectoralis major is a large muscle located in the chest region and is divided into two portions: the **clavicular** (upper) and **sternocostal** (lower) heads. The pectoralis major has several important functions in upper body movements.-.-**Note: A lot of fitness influencers talk about a third head, the middle head, which biologically doesn't exist. Ignore them, as it is only a waste of time and energy.**-.-Firstly, the pectoralis major is responsible for **shoulder flexion and horizontal adduction**. When the clavicular head contracts, it assists in flexing the shoulder joint, allowing you to raise your arm forward and upward. This motion is crucial for activities like throwing a ball or reaching overhead. Additionally, both the clavicular and sternocostal heads contribute to **shoulder horizontal adduction**, bringing the arm across the front of the body towards the midline. This action is involved in movements such as hugging, chest flies, and certain swimming strokes.-.-Another function of the pectoralis major is **shoulder adduction**. When both heads of the muscle contract simultaneously, they work together to bring the arm closer to the body from an abducted position. This movement is used in actions like performing push-ups, pressing weights, or holding objects close to the chest.-.-Additionally, the pectoralis major assists in **shoulder internal rotation**. When the muscle contracts, it helps rotate the arm inward towards the body. This movement is utilized in actions such as throwing a punch or reaching behind the back.-.-In summary, the primary function of the pectoralis major is to bring the elbow across the body, towards your sternum horizontally. It is also responsible for shoulder flexion, shoulder horizontal adduction, shoulder adduction, and shoulder internal rotation. Its actions are essential for various upper body movements, ranging from everyday tasks to athletic activities. Strengthening and conditioning the pectoralis major can improve upper body strength, stability, and overall functional performance."}
            ></Content>
        </div>
    )

    return (
        <ContentPage content={content} currentTopic={"Muscles-Functions-Chest-Pecs"}></ContentPage>
    )
}