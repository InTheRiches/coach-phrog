import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';

export default function SupplementPerformance({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* Page Header */}
            <div className="flex flex-col mb-12">
                <h1 className="ml-6 mb-10 inline-block text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Supplements - Performance</h1>
                <div className={"ml-6 border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md"}>
                    <span className={"text-lg mb-2"}>Performance supplements are a type of dietary supplement that is designed to help improve athletic performance or enhance physical abilities. These supplements often contain ingredients that are believed to increase <b>energy</b>, improve <b>endurance</b>, and promote faster <b>recovery</b> after exercise.</span>
                </div>
            </div>
            {/* First Topic */}
            <Content
                id="pre-workout"
                title="Pre-Workout"
                content="Pre-workout supplements are **dietary** supplements that are taken before exercise to help improve athletic **performance**, **endurance**, and **focus**. They typically contain a combination of ingredients such as caffeine, beta-alanine, creatine, and nitric oxide precursors.-.-Caffeine is a common ingredient in pre-workout supplements and can help increase **energy** and **focus** during exercise. Beta-alanine is an amino acid that can help improve muscular **endurance** and delay **fatigue**. [/supplements/performance#creatine,Creatine] is another popular ingredient that can help increase muscle **strength** and **power**. Nitric oxide precursors such as arginine and citrulline can help improve **blood flow** to the muscles, which may increase muscle **pump** and **endurance**.-.-Pre-workout supplements are available in various forms, including powders, capsules, and drinks. They are typically taken 30-60 minutes before exercise and should be used according to the manufacturer's instructions."
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
                            It's important to note that pre-workout supplements can have side effects, especially if they contain high doses of stimulants like caffeine. These side effects may include jitters, anxiety, rapid heartbeat, and sleep disturbances. It's essential to speak with a healthcare professional before starting any new supplement regimen and to follow the recommended dosage to avoid negative side effects.
                        </div>
                    </div>
                </div>
            </div>
            <Content
                id="post-workout"
                title="Post-Workout"
                content="Post-workout supplements are dietary supplements that are taken after exercise to help support muscle recovery, repair, and growth. They typically contain a combination of ingredients such as protein, carbohydrates, and electrolytes.-.-Protein is a key ingredient in post-workout supplements as it provides the building blocks necessary for muscle repair and growth. Carbohydrates can help replenish glycogen stores in the muscles, which can be depleted after a workout. Electrolytes such as sodium, potassium, and magnesium can help replenish the minerals lost through sweat during exercise.-.-Post-workout supplements are available in various forms, including powders, drinks, and bars. They are typically consumed within 30 minutes after exercise to help maximize nutrient absorption and recovery.-.-It's important to note that post-workout supplements should not be relied upon as the sole source of nutrients for recovery. A well-balanced diet that includes a variety of nutrient-dense foods is crucial for overall health and fitness. Additionally, drinking plenty of water throughout the day can help promote hydration and aid in recovery."
                ></Content>
            <Content 
                id="bcaa-eaa"
                title="BCAA / EAA"
                content="BCAA (Branched Chain Amino Acids) and EAA (Essential Amino Acids) supplements provide vital amino acids. They are used for improving muscle endurance, recovery, and protein metabolism.-.-One of the primary benefits of BCAA + EAA supplements is promoting muscle growth. Amino acids are the building blocks of protein, which is essential for muscle growth. By providing the body with a source of amino acids, these supplements can help stimulate muscle protein synthesis, leading to increased muscle mass over time.-.-BCAA + EAA supplements can also support muscle recovery by reducing muscle damage and inflammation. Exercise can cause muscle damage, leading to soreness and fatigue. By reducing muscle damage and inflammation, these supplements can help improve overall exercise performance.-.-Another benefit of BCAA + EAA supplements is boosting energy. The amino acids in these supplements can be used by the body as an energy source during exercise, helping to delay fatigue and improve endurance during high-intensity workouts.-.-BCAA + EAA supplements can also reduce muscle breakdown by providing the body with a source of amino acids to use for energy. This can help spare muscle tissue, which is especially important for athletes who engage in intense training and competition.-.-Finally, BCAA + EAA supplements can improve immune function. Amino acids play an important role in immune function, and these supplements can help support a healthy immune system. This is especially important for athletes who may experience a weakened immune system due to intense training and competition."
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
                            While BCAA + EAA supplements can provide benefits for athletes and fitness enthusiasts, it's worth noting that a well-balanced diet that includes protein-rich foods can provide all the essential amino acids the body needs to support muscle growth and recovery.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <ContentPage currentTopic={"Supplements-Performance"} content={content}></ContentPage>
    )
}