import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';

export default function TrainingBasics({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* Page Header */}
            <div className="flex flex-col mb-12">
                <span className="text-cyan-accent mb-1 text-lg">Supplements • Muscle Gain</span>
                <span className="mb-10 inline-block text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Introduction</span>
                <div className={"border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md"}>
                    <span className={"text-lg"}>Weight lifting, also known as resistance training, is a process involving the lifting, pushing, or pulling weights or resistance devices, resulting in an increase in muscle mass and improvements in overall physical fitness.</span>
                </div>
            </div>
            {/* Topics */}
            
        </div>
    );

    return (
        <ContentPage currentTopic={"Getting Started-Introduction"} content={content}></ContentPage>
    )
}