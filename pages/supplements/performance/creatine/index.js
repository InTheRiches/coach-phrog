import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';

export default function PerformanceBCAAs({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* Page Header */}
            <div className="flex flex-col mb-12">
                <h1 className="ml-6 mb-10 inline-block text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Creatine</h1>
                <div className={"ml-6 border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md"}>
                    <span className={"text-lg mb-2"}>Creatine is one of the most thoroughly studied and potent supplements, which can swiftly generate energy during high-intensity physical activity and enhance exercise performance. While there may be cognitive advantages linked with creatine consumption, additional research is required to confirm these findings.</span>
                </div>
            </div>
            {/* First Topic */}
            <Content
                id="why"
                title="What is Creatine?"
                content="Creatine is produced from amino acids, primarily in the liver, but also in smaller quantities in the kidneys and pancreas. It functions as a reservoir for high-energy phosphate groups in the form of phosphocreatine, which can be contributed to ADP (depleted ATP) converting into ATP, the primary energy carrier in the body. This means that Creatine can convert ADP, into energy full ATP. This function is especially significant in circumstances of high energy demands, such as intense physical or mental exertion. Creatine is abundant in animal-based meals, with meat and fish being the most common sources. It is most commonly supplemented in powder form."
            ></Content>
            <Content
                id={"when-how"}
                title={"Timing/Dosage of Consumption"}
                content={'The appropriate time and dosage of creatine consumption depend on a variety of factors, including an individual\'s body weight, physical activity, and overall health. In general, a typical creatine supplementation protocol involves an initial "loading phase" of 20-25 grams per day for 5-7 days, followed by a "maintenance phase" of 3-5 grams per day for several weeks or months. However, some individuals may choose to skip the loading phase and begin with the maintenance dose immediately. The time of consumption doesn\'t matter, but people often take it at night or in the morning.-.-'}
                ></Content>
                        <div className="ml-6">
                <div className="flex rounded-md border-1 border-sky-500 p-4 dark:bg-blue-500 dark:bg-opacity-10 text-lg text-sky-600 bg-blue-50">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                         className="mr-3 mt-1 h-5 w-5 flex-shrink-0">
                        <path fillRule="evenodd"
                              d="M19 10.5a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0zM8.25 9.75A.75.75 0 019 9h.253a1.75 1.75 0 011.709 2.13l-.46 2.066a.25.25 0 00.245.304H11a.75.75 0 010 1.5h-.253a1.75 1.75 0 01-1.709-2.13l.46-2.066a.25.25 0 00-.245-.304H9a.75.75 0 01-.75-.75zM10 7a1 1 0 100-2 1 1 0 000 2z"
                              clipRule="evenodd"/>
                    </svg>
                    <div className={"w-full"}>
                        <h4 className="font-bold">Note</h4>
                        <div className="mt-1">
                            Creatine intake should always be accompanied by adequate hydration, as it can cause an increase in water retention. Additionally, consulting with a healthcare professional or a sports nutritionist is recommended to determine the most appropriate creatine supplementation plan for an individual's needs and goals.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <ContentPage currentTopic={"Supplements-Performance-Creatine"} content={content}></ContentPage>
    )
}