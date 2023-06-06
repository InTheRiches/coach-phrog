import Content from '@/components/Content'
import {scroll} from "@/components/ContentScroll";
import ContentPage from '@/components/ContentPage';

export default function RepsAndSets({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* Page Header */}
            <div className="flex flex-col mb-12">
                 <span className="text-cyan-accent mb-1 text-lg">Muscles • Training • Basics</span>
                <span className="mb-10 inline-block text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight dark:text-slate-50">Reps and Sets</span>
                <div className={"border-cyan-accent border-1 flex flex-col p-4 bg-neutral-500 bg-opacity-5 rounded-md"}>
                    <span className={"text-lg"}>The basics of weight training are simple and crucial to building muscle. Understanding the basics of tracking movements and learning how to consistently perform the exercise in a repeatable manner is extremely important.</span>
                    {/*<span className={"text-lg"}>Properly training is important to making progress in the gym. Utilizing all available processes can significantly increase gains, and make the experience overall more enjoyable and rewarding. Training properly can also avoid injuries and make sure that your body is staying healthy.</span>*/}
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
        </div>
    )

    return (
        <ContentPage content={content} currentTopic={"Muscles-Training-Basics-Reps / Sets"}></ContentPage>
    )
}