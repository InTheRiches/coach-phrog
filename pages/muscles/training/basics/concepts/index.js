import Content from '@/components/Content'
import {scroll} from "@/components/ContentScroll";
import ContentPage from '@/components/ContentPage';

export default function Concepts({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* Page Header */}
            <div className="flex flex-col mb-12">
                <span className="text-cyan-accent mb-1 text-lg">Muscles • Training • Basics</span>
                <span className="mb-10 inline-block text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Concepts</span>
                <div className={"border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md"}>
                    <span className={"text-lg"}>Weight lifting may seem complicated at first, especially with all the various terminology and concepts thrown around. Despite the initial reaction, these ideas are actually very simple. By breaking them down into their basics, you can fully grasp the concepts and utilize what they have to offer.</span>
                </div>
            </div>
            {/* Topics */}
            <Content
                id={"Volume"}
                title={"Volume"}
                content={"**Volume**, in the context of exercise, refers to the total amount of work performed during a workout. It is a combination of the number of sets, repetitions, and weight or resistance used in an exercise. Calculating volume helps you quantify the overall workload you're subjecting your muscles to, which can be useful for tracking progress and designing **effective** training programs.-.-To calculate volume, multiply the number of sets by the number of repetitions performed in each set, and then multiply that by the weight used. The formula for volume is:-.-`Volume = Sets × Repetitions × Weight`-.-For example, if you perform 3 sets of 10 repetitions of bench press with a weight of 50 pounds, the volume would be:-.-`Volume = 3 sets × 10 reps × 50 pounds = 1500 pounds`-.-Calculating volume can help you track your progress over time. By gradually increasing the volume, either by adding more sets, repetitions, or weight, you can apply the principle of progressive overload and stimulate muscle growth and adaptation. However, it's important to progress gradually and listen to your body to avoid overtraining and injuries."}
            ></Content>
            <Content
                id={"progressive-overload"}
                title={"Progressive Overload"}
                content={"Progressive overload is a principle in exercise that involves gradually increasing the demands on your muscles to promote **growth** and **improvement**. By consistantly increasing demand on your muscles, they are forced to adapt and grow. -.-The most basic way to apply progressive overload is by increasing [/muscles/training/basics/concepts#Volume,volume]. This can be done by increasing the number of sets, repetitions, or weight used in an exercise. Every workout you should strive to increase volume in one of those 3 ways. This continually pressures the muscles to grow, and is the most effective way to build muscle. There are other pathways to take, including rest times and workout frequency. However, these do not always lead to muscle growth, and may end up causing overtraining and injury. Make sure to listen to your body, and progress gradually."}
                ></Content>
            <Content
                id={"tracking-progression"}
                title={"Tracking Progression"}
                content={"Tracking progress in the gym is an important part of achieving your fitness goals. By keeping track of your workouts, including your set and rep counts, you can monitor your progress, make adjustments to your routine, and stay **motivated**. By tracking your set and rep counts over time, you can see how your strength and endurance are improving. This can help you stay motivated, especially on days when you may not feel as strong or motivated.-.-Tracking your set and rep counts can also help you set realistic goals for yourself. For example, if you're currently doing 3 sets of 8 reps for a certain exercise, you can aim to increase that to 3 sets of 10 reps or more over time. Set goals above what you think you can do, and push yourself every set. The human body is far more capable than most people think. As you progress and increase rep counts, you can adjust the weight and continue.-.- If you're not seeing the progress you want, tracking your set and rep counts can help you identify where you might need to make adjustments to your routine. For example, if you're stuck at a certain weight or rep count, you may want to apply **shocking techniques** to reset your body (explained below).-.-There are many ways to track your set and rep counts, including using a fitness journal, a mobile app, or simply keeping track of your progress in a spreadsheet. The important thing is to find a method that works for you and to be consistent with it."}
            ></Content>
            <Content
                id={"shocking-muscle"}
                title={"Shocking the Muscle"}
                content={"Shocking the muscle, also known as muscle confusion or muscle variation, is a technique used in weightlifting to prevent the body from adapting to a particular exercise routine. The idea behind shocking the muscle is that by performing different exercises at different rep and weight counts, you can **stimulate** muscle growth and avoid hitting a plateau in your progress.-.-The principle behind muscle shocking is rooted in the concept of the **General Adaptation Syndrome (GAS)**, which states that the body will **adapt** to a specific stressor over time, leading to a **plateau** in progress. Because survival is driven by energy expenditure, your body is designed to adapt and decrease energy usage. It tries to be as efficient as possible, and by repeating an exercise over time (since it consumes a lot of energy), the muscles adapt and stop growing. By continually changing the exercises, sets, reps, and weight used in your workouts, you can prevent the body from fully adapting to the stressor, leading to continued muscle growth.-.-When you notice a plateau in muscle growth, you can implement these ideas. For example, if you start with a bench press warm up at 215 pounds, then a set at 275, then 3 sets at 315, you can instead perform a **drop set**, starting at 275, and going downward. This shocks the muscle by first skipping the **expected** warm up, but also performing a series of unexpected sets with no breaks. By changing the regular routine the muscle fibers scramble to adapt to the new stressor, leading to continued muscle growth."}
            ></Content>
            <Content
                id={"terminology"}
                title={"Terminology"}
                bulletPoints={{
                    "Repetition": "A repetition, or rep, is a single movement of an exercise. For example, a single push up is one repetition.",
                    "Set": "A set is a group of repetitions. For example, 3 sets of 10 push ups is 30 total repetitions.",
                    "Weight": "Weight refers to the amount of resistance used in an exercise. This can be in the form of dumbbells, barbells, or even body weight.",
                    "Volume": "Volume refers to the total amount of work performed during a workout. It is a combination of the number of sets, repetitions, and weight or resistance used in an exercise.",
                    "1RM": "1RM, or one rep max, is the maximum amount of weight you can lift for a single repetition of an exercise. It is used to determine the amount of weight you should use for a given exercise."
                }}
            ></Content>
        </div>
    )

    return (
        <ContentPage content={content} currentTopic={"Muscles-Training-Basics-Concepts"}></ContentPage>
    )
}