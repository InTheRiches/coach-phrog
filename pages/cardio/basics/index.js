import Content from '@/components/Content'
import {scroll} from "@/components/ContentScroll";
import ContentPage from '@/components/ContentPage';
import {BackFullBodySVG, FrontFullBodySVG} from "@/components/BodySVG";
import {useRouter} from "next/router";


export default function MuscleBasics({}) {
    const router = useRouter();

    const content = (
        <div className="w-full max-w-5xl flex-col">
            <Content
                id="why-cardio"
                title="Why Cardio?"
                content='When you perform cardiovascular exercises such as running, swimming, or cycling, your heart needs to work harder to pump oxygenated blood to your muscles. This increased demand on the heart leads to adaptations, causing the heart muscle to become **stronger** and more **efficient** over time. By strengthening your heart muscle, it improves **blood circulation** and enhances your overall **cardiovascular health**. This can reduce the risk of heart disease, lower blood pressure, and improve cholesterol levels. The same is true with the lungs. The consistent demand of oxygen results in strengthening and adaptation. This can lead to stronger, more efficient lungs, increasing capacity.-.-By challenging your cardiovascular system and improving its efficiency, you can sustain physical activity for longer periods without feeling excessively tired. This extended **endurance** can be beneficial for various activities, such as sports, recreational pursuits, or daily tasks that require prolonged physical exertion.-.-Cardiovascular exercise stimulates the release of **endorphins**, often referred to as **"feel-good"** hormones. These endorphins can contribute to a sense of well-being, reduce symptoms of depression and anxiety, and help manage stress. Engaging in cardio workouts can provide a natural mood boost and help you unwind after a long day.'
            ></Content>
            It is important to note that while cardio exercises can be a great way to improve your health and fitness, they should be done in conjunction with a balanced diet and strength training program for optimal results. It is also important to consult your doctor before starting a new exercise program, particularly if you have any underlying health conditions.
        </div>
    );

    return (
        <ContentPage location={"Cardio"} title={"Basics"} description={<span className={"text-lg mb-2"}>Cardio, short for cardiovascular exercise, refers to any exercise that increases your heart rate, breathing rate, and strengthens your heart and lungs. ​​Cardio exercises are an important part of a healthy lifestyle and can provide numerous health benefits, including improved cardiovascular health, weight loss, improved mood, and reduced risk of chronic diseases.</span>} currentTopic={"Cardio-Basics"} content={content}></ContentPage>
    )
}