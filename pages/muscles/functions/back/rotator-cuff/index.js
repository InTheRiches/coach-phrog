import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';
import {BackUpperBodySVG, FrontUpperBodySVG} from '@/components/BodySVG';
import React from "react";
import {scroll} from "@/components/ContentScroll";
import {useRouter} from "next/router";

// TODO MAKE A PAGE FOR THE BACK, THEN MAKE A FOLDER WITH SUBCATEGORIES THAT GOES INTO MORE DETAIL ON EACH OF THE MUSCLES/MUSCLE GROUPS.
export default function PecsFunction({}) {
    const router = useRouter();

    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* Page Header */}
            <div className="flex flex-col mb-12">
                <span className="text-cyan-accent mb-1 text-lg">Muscles • Functions • Back</span>
                <span className="mb-10 inline-block text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Rotator Cuff</span>
                <div className={"border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md"}>
                    <span className={"text-lg"}>The rotator cuff is a group of four muscles and their tendons that surround the shoulder joint. It includes the supraspinatus, <a onClick={() => router.push("/muscles/functions/back/infraspinatus").then(() => scroll())} className={"text-link-text hover:underline hover:cursor-pointer"}>infraspinatus</a>, <a onClick={() => router.push("/muscles/functions/back/teres").then(() => scroll())} className={"text-link-text hover:underline hover:cursor-pointer"}>teres minor</a>, and subscapularis. The primary function of the rotator cuff is to provide stability to the shoulder, facilitate smooth and controlled movements, and help maintain proper alignment of the humeral head within the shoulder socket. The rotator cuff plays a crucial role in preventing dislocations.</span>
                </div>
            </div>
            <Content
                id={"location"}
                title="Location"
                content={"The rotator cuff is a group of muscles and tendons located in the shoulder joint. It consists of four main muscles: the supraspinatus, [/muscles/functions/back/infraspinatus,infraspinatus], [/muscles/functions/back/teres,teres minor], and subscapularis. These muscles surround the head of the humerus (upper arm bone) and work together to stabilize and control the movement of the shoulder, providing strength and support during arm movements."}
            ></Content>
            <div className={"p-8 flex justify-around items-center"}>
                <FrontUpperBodySVG highlighted="delts"/>
                <BackUpperBodySVG highlighted="rear-delts,teres,infraspinatus"/>
            </div>
            <Content
                title="Rotator Cuff"
                id={"rotator-cuff"}
                content={"The rotator cuff serves several crucial functions in the shoulder joint, working together to provide stability, control, and facilitate movement.-.-One of the main functions of the rotator cuff is to **stabilize** the shoulder joint. The muscles and tendons of the rotator cuff help hold the head of the humerus (upper arm bone) securely within the shallow socket of the scapula (shoulder blade). This stability is vital for maintaining proper alignment of the joint during various movements, preventing excessive translation or **dislocation** of the humeral head. The rotator cuff acts as a dynamic stabilizer, particularly during overhead movements and activities that require a wide range of shoulder motion, such as throwing, reaching, or lifting weights.-.-The rotator cuff muscles also play a crucial role in controlling the movement of the shoulder joint. They work together to initiate and control the fine-tuned motions of the shoulder, allowing for **precise movements and adjustments**. The coordinated action of the rotator cuff muscles helps maintain proper muscle balance and force distribution around the shoulder joint, preventing impingement or excessive stress on other structures. This control is particularly important during movements like abduction (lifting the arm sideways), external rotation, and internal rotation of the shoulder.-.-Additionally, the rotator cuff muscles contribute to the dynamic stabilization of the humeral head (end of humerus bone) during arm movements. They generate forces that help **center and hold** the humeral head within the glenoid cavity, enhancing joint strength and optimizing the efficiency of muscle contractions. This function is crucial in activities that involve repetitive or forceful arm movements, where the rotator cuff provides dynamic support and protection to the shoulder joint.-.-In summary, the rotator cuff serves important functions in stabilizing the shoulder joint, controlling movement, and providing dynamic stabilization. By working together, these muscles enhance shoulder stability, promote precise and controlled motions, and protect the joint during various activities. Proper conditioning, strengthening, and flexibility of the rotator cuff are essential for maintaining shoulder health, preventing injuries, and optimizing performance in tasks involving the upper extremities."}
            ></Content>
        </div>
    )

    return (
        <ContentPage content={content} currentTopic={"Muscles-Functions-Back-Rotator Cuff"}></ContentPage>
    )
}