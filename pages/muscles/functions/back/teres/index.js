import Content from '@/components/Content'
import {BackUpperBodySVG, FrontUpperBodySVG} from '@/components/BodySVG';
import ContentPage from '@/components/ContentPage';
import { useRouter } from 'next/router';

// TODO MAKE A PAGE FOR THE BACK, THEN MAKE A FOLDER WITH SUBCATEGORIES THAT GOES INTO MORE DETAIL ON EACH OF THE MUSCLES/MUSCLE GROUPS.
export default function TrapsFunction({}) {
    const router = useRouter();

    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* Page Header */}
            <div className="flex flex-col mb-12">
                <span className="text-cyan-accent mb-1 text-lg">Muscles • Functions • Back</span>
                <span className="mb-10 inline-block text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Teres Major/Minor</span>
                <div className={"border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md"}>
                    <span className={"text-lg mb-6"}>The teres major and teres minor are two separate muscles located in the back of the upper body, specifically in the shoulder region. The teres major muscle is a thick, triangular muscle that originates on the lower part of the scapula (shoulder blade) and inserts into the upper part of the humerus (upper arm bone). It assists in the rotation and movement of the scapula.</span>
                    <span className={"text-lg"}>The teres minor muscle is a small, elongated muscle located just below the teres major. It originates on the lateral border of the scapula and inserts into the greater tubercle of the humerus. Its primary function is rotation of the scapula, but also helps stabilize.</span>
                </div>
            </div>
            <Content
                id={"location"}
                title="Location"
                content={"The teres major/minor are located in the upper back, specifically in the shoulder region. The teres major is a thick, triangular muscle that originates on the lower part of the scapula (shoulder blade) and inserts into the upper part of the humerus (upper arm bone). The teres minor is a small, elongated muscle located just below the teres major. It originates on the lateral border of the scapula and inserts into the greater tubercle of the humerus."}
            ></Content>

            <div className={"p-8 flex justify-around items-center"}>
                <FrontUpperBodySVG highlighted="teres"/>
                <BackUpperBodySVG highlighted="teres"/>
            </div>
            <Content
                title="Teres Major/Minor"
                id={"teres"}
                content={"The teres major and teres minor muscles are responsible for the rotation and movement of the scapula. The teres major muscle assists in shoulder extension, medial rotation, and adduction, while the teres minor muscle primarily contributes to lateral rotation and shoulder joint stabilization. Together, they play essential roles in various shoulder movements and provide stability to the shoulder joint.-.-**Teres Major:** The teres major's primary function is to extend the shoulder joint, essentially abduction, which means pulling the arm towards the midline of the body. This can be seen when pulling your arm downward, after raising it to the side of your body. The teres major also assists in inward rotation of the shoulder, like when you reach behind yourself (medial rotation).-.-**Teres Minor:** The teres minor's primary role is to externally rotate the shoulder blade, as in throwing a ball or reaching the arm out to the side and rotating it outwardly. The teres minor, along with other muscles of the rotator cuff, contributes to the stabilization of the shoulder joint during movements. It helps prevent excessive movement or dislocation of the shoulder joint."}
            ></Content>
        </div>
    )

    return (
        <ContentPage content={content} currentTopic={"Muscles-Functions-Back-Teres"}></ContentPage>
    )
}