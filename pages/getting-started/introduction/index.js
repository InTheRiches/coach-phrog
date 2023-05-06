import Navigation from '@/components/Navigation'
import Content from '@/components/Content'
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import ContentScroll from "@/components/ContentScroll";

export default function TrainingBasics({}) {
    ContentScroll();

    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-900 text-slate-900 dark:text-slate-50 justify-center items-center">
            <Navigation></Navigation>

            <div className="grid gap-8 grid-cols-270px max-w-screen-4xl md:px-6 my-8 lg:mr-32 xl:mr-56">
                <Sidebar currentTopic={"Getting Started-Introduction"}></Sidebar>
                <div className="flex-1 w-full max-w-5xl flex-col">
                    {/* Page Header */}
                    <div className="flex flex-col mb-12">
                        <span className="ml-6 mb-10 inline-block text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Getting Started - Introduction</span>
                        <div className={"ml-6 border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md"}>
                            <span className={"text-lg"}>Weight lifting, also known as resistance training, is a process involving the lifting, pushing, or pulling weights or resistance devices, resulting in an increase in muscle mass and improvements in overall physical fitness.</span>
                        </div>
                    </div>
                    {/* Topics */}
                    <Content
                        id={"reps-and-sets"}
                        title="Reps And Sets"
                        content='A repetition, or "rep" for short, is one **complete** movement of an exercise. For example, if you perform one bicep curl, that would be considered one rep of the exercise. Reps are typically numbered and tracked, and are often performed in a range of repetitions depending on the desired outcome. For example, lower reps (typically 1-5 reps) are often used for building [/muscles/training/strength,strength], while higher reps (10-15 reps or more) are used for achieving [/muscles/training/hypertrophy,hypertrophy] (muscle growth).-.-A set on the other hand is a group of **consecutive** reps performed **without rest**. For example, if you do 10 bicep curls in a row without stopping, that would be considered one set of bicep curls. The number of sets performed for each exercise will depend on your fitness goals and training program. For example, if your goal is [/muscles/training/strength,strength], you may perform fewer sets of heavier weights, while if your goal is [/muscles/training/hypertrophy,hypertrophy], you may perform more sets of lighter weights.' // TODO - Add links for those styles of training (add links elsewhere, like for the supplements and diets for the training styles)
                    ></Content>
                    <Content
                        id={"rest-times"}
                        title="Rest Times"
                        content={"Rest times are an important part of weight lifting. During rest times, your body has the opportunity to **recover** and **restore** its energy levels so that you can perform your next set with the appropriate level of **intensity**. The length of the rest time can vary based on the specific exercise being performed, your level of fitness, your goals, and the intensity of your workout.-.-During rest time, you can use techniques such as **deep breathing**, **stretching**, and **hydration** to help your body recover more quickly. It's important to use your rest time effectively to ensure that you're able to perform each set with proper **form** and **intensity**, without risking injury or **overtraining**.-.-Rest time can be a critical component of your workout, as it can impact your performance and overall results. Proper rest time can help you avoid injury and achieve your desired fitness goals more efficiently. Remember to listen to your body and adjust your rest time as necessary to optimize your workouts."}
                    ></Content>
                    <Content
                        id={"range-of-motion"}
                        title="Range of Motion"
                        content={'Each muscle group covers a range of motion. When you push that range of motion, your muscles stretch. When you perform an exercise with a full range of motion, you are able to engage and activate more muscle fibers throughout the movement. This means that you can stimulate more muscle growth and development than if you were to perform the exercise with a limited range of motion.-.-Additionally, using a full range of motion during weight lifting can help to increase the time under tension (TUT) for your muscles. TUT refers to the amount of time that your muscles are under load during an exercise. By increasing TUT, you can increase muscle tearing and stimulate greater muscle growth and adaptation.'} // add links to where we go into more detail
                    ></Content>
                    <Content
                        id={"tracking-progression"}
                        title={"Tracking Progression"}
                        content={"Tracking progress in the gym is an important part of achieving your fitness goals. By keeping track of your workouts, including your set and rep counts, you can monitor your progress, make adjustments to your routine, and stay motivated. By tracking your set and rep counts over time, you can see how your strength and endurance are improving. This can help you stay motivated, especially on days when you may not feel as strong or motivated.-.-Tracking your set and rep counts can also help you set realistic goals for yourself. For example, if you're currently doing 3 sets of 8 reps for a certain exercise, you can aim to increase that to 3 sets of 10 reps or more over time. Set goals above what you think you can do, and push yourself every set. The human body is far more capable than most people think. As you progress and increase rep counts, you can adjust the weight and continue.-.- If you're not seeing the progress you want, tracking your set and rep counts can help you identify where you might need to make adjustments to your routine. For example, if you're stuck at a certain weight or rep count, you may need to switch up your exercises or increase the intensity of your workouts.-.-There are many ways to track your set and rep counts, including using a fitness journal, a mobile app, or simply keeping track of your progress in a spreadsheet. The important thing is to find a method that works for you and to be consistent with it."}
                    ></Content>
                    <Content
                        id={"shocking-muscle"}
                        title={"Shocking the Muscle"}
                        content={"Shocking the muscle, also known as muscle confusion or muscle variation, is a technique used in weightlifting to prevent the body from adapting to a particular exercise routine. The idea behind shocking the muscle is that by performing different exercises at different rep and weight counts, you can **stimulate** muscle growth and avoid hitting a plateau in your progress.-.-The principle behind muscle shocking is rooted in the concept of the **General Adaptation Syndrome (GAS)**, which states that the body will **adapt** to a specific stressor over time, leading to a **plateau** in progress. By continually changing the exercises, sets, reps, and weight used in your workouts, you can prevent the body from fully adapting to the stressor, leading to continued muscle growth.-.-When you notice a plateau in muscle growth, you can implement these ideas. For example, if you start with a bench press warm up at 215 pounds, then a set at 275, then 3 sets at 315, you can instead perform a **drop set**, starting at 275, and going downward. This shocks the muscle by first skipping the **expected** warm up, but also performing a series of unexpected sets with no breaks. By changing the regular routine the muscle fibers scramble to adapt to the new stressor, leading to continued muscle growth."}
                    ></Content>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}