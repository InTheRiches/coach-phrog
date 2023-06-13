import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';

export default function TrainingBasics({}) {
    const content = (
        <div className="w-full max-w-5xl flex-col">
            {/* Topics */}
            <Content
                id={"getting-started"}
                title={"Getting Started"}
                content={"Welcome to the world of weightlifting! Whether you're a beginner looking to enhance your physical fitness or an experienced lifter seeking to fine-tune your technique, this guide aims to provide you with a solid foundation and general information to help you on your weightlifting journey. In addition to understanding the technical aspects of lifting, it's essential to grasp the broader concepts that contribute to a successful and enjoyable workout experience."}
                ></Content>
            <Content
                id={"consistency"}
                title={"Embrace Consistency"}
                content={"One of the most critical factors in achieving your weightlifting goals is consistency. Establishing a regular routine and sticking to it will yield better results than sporadic or infrequent workouts. Commit to a specific schedule and make it a priority to get to the gym regularly. Whether it's early morning, during lunch breaks, or after work, find a time that suits you best and strive to make it a habit.-.-Consistency is key, and will provide far better benefits than perfect form or fancy, expensive supplements. Just getting to the gym is the hard part. Once you're there, you're already ahead of 81% of the population. Even if you're not feeling your best, or you're not in the mood to lift, just show up. You'll be surprised at how much better you'll feel once you get started."}
                ></Content>
            <Content
                id={"progress"}
                title={"Progress not Perfection"}
                content={"When starting out, it's common to feel overwhelmed by the idea of achieving perfect efficiency and flawless form. While proper technique is crucial for long-term success and injury prevention, don't let the pursuit of perfection hinder your progress. Instead, focus on incremental improvements over time. Celebrate your accomplishments, no matter how small, and appreciate the journey towards mastery.-.-Things will come to you eventually, and you'll be surprised at how quickly you'll improve. This doesn't mean you should ignore proper form and technique. If you are new a machine, make sure to read the instructions and ask for help if you're unsure. If you're using free weights, start with light weights and focus on your form. Then proceed with a higher, more challenging weight."}
                ></Content>
            <Content
                title={"Realistic Goals and Expectations"}
                id={"goals"}
                content={`The internet is filled with "6 minute 6 pack" videos that promise amazing results with little commitment. Unfortunately that isn't how weightlifting works. Understanding that you won't look like Dwayne Johnson after your first few workouts is important. It takes time to build an aesthetic physique, and you should set realistic expectations of yourself. The average person cannot achieve the body of Alex Eubank or David Laid. The commitment it takes to develop that body, not even mentioning the genetics that are in play, makes it unrealistic to achieve that physique.-.-Establishing clear and achievable goals is vital for motivation and tracking your progress. Set both short-term and long-term objectives, such as increasing the amount of weight lifted, improving endurance, or achieving specific body composition goals. Regularly assess your progress, keep a workout log, and celebrate milestones along the way to maintain your motivation and drive.`}
                ></Content>

        </div>
    );

    return (
        <ContentPage location={"Getting Started"} title={"Introduction"} description={<span className={"text-lg"}>Weight lifting, also known as resistance training, is a process involving the lifting, pushing, or pulling weights or resistance devices, resulting in an increase in muscle mass and improvements in overall physical fitness.</span>} currentTopic={"Getting Started-Introduction"} content={content}></ContentPage>
    )
}