import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';

export default function SupplementBasics({}) {
    const content = (
        <div className="flex-1 w-full max-w-5xl flex-col">
            {/* Page Header */}
            <div className="flex flex-col mb-12">
                <h1 className="ml-6 mb-10 inline-block text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Supplements - Basics</h1>
                <div className={"ml-6 border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md"}>
                    <span className={"text-lg mb-2"}>Supplements are products that are designed to enhance physical performance throughout life, especially during exercise or athletic activities. There are several types of supplements available, each with its specific uses.</span>
                </div>
            </div>
            {/* First Topic */}
            <Content
                title="Why Supplements?"
                content="Supplements are products, typically powders, that athletes consume to enhance their body's **performance**. Supplements are a easy and convient way to get nutrients and ingrediants that might be difficult to achieve through dieting. They also can also increase muscle **strength** and **endurance**, allowing athletes to push harder during their workouts."
            ></Content>
        </div>
    );

    return (
        <ContentPage currentTopic={"Supplements-Basics"} content={content}></ContentPage>
    )
}