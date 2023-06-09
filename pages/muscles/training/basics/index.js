import Content from '@/components/Content'
import ContentPage from "@/components/ContentPage";

export default function TrainingBasics({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* Page Header */}
            <div className="flex flex-col mb-12">
                <span className="ml-6 mb-10 inline-block text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Muscle Training - Basics</span>
                <div className={"border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md"}>
                    <span className={"text-lg"}>Properly training is important to making progress in the gym. Utilizing all available processes can significantly increase gains, and make the experience overall more enjoyable and rewarding. Training properly can also avoid injuries and make sure that your body is staying healthy.</span>
                </div>
            </div>
            <Content
                id={"range-of-motion"}
                title="Range of Motion"
                content={'Each muscle group covers a range of motion. When you push that range of motion, your muscles stretch. When you perform an exercise with a full range of motion, you are able to engage and activate more muscle fibers throughout the movement. This means that you can stimulate more muscle growth and development than if you were to perform the exercise with a limited range of motion.-.-Additionally, using a full range of motion during weight lifting can help to increase the time under tension (TUT) for your muscles. TUT refers to the amount of time that your muscles are under load during an exercise. By increasing TUT, you can increase muscle tearing and stimulate greater muscle growth and adaptation.'} // add links to where we go into more detail
            ></Content>
        </div>
    )

    return (
        <ContentPage content={content} currentTopic={"Muscles-Training-Basics"}></ContentPage>
    )
}