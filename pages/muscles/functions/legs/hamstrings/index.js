import Content from '@/components/Content'
import ContentPage from '@/components/ContentPage';
import {BackFullBodySVG, BackUpperBodySVG, FrontFullBodySVG, FrontUpperBodySVG} from '@/components/BodySVG';
import {scroll} from "@/components/ContentScroll";
import React from "react";


export default function QuadsFunction({}) {
    const content = (
        <div className="flex-col">
            <Content
                id={"location"}
                title="Location"
                content={"The hamstring muscles are located on the **posterior** (back) part of the thigh. They run along the back of the femur bone, starting from the hip and extending down to the knee joint. The hamstring muscles are positioned on the inner and outer sides of the back of the thigh and are easily palpable when flexing or extending the leg."}
            ></Content>
            <div className={"p-8 flex justify-around items-center"}>
                <FrontFullBodySVG highlighted="hamstrings"/>
                <BackFullBodySVG highlighted="hamstrings"/>
            </div>
            <Content
                title="Hamstrings"
                id={"hamstrings"}
                content={"The hamstring muscles serve crucial purposes in lower body movement, stability, and overall functional strength. Here are some key aspects of their function and purpose:-.-Firstly, the primary purpose of the hamstrings is **knee flexion**. Composed of three muscles - the **biceps femoris, semitendinosus, and semimembranosus** - the hamstrings work together to bend the knee joint. This action is essential for movements such as walking, running, and squatting. The hamstrings generate the force required to flex the knee, allowing individuals to perform these activities with strength and control.-.-Secondly, the hamstrings play a significant role in **hip extension**. They assist in extending the hip joint, enabling movements such as running, jumping, and climbing. The hamstrings work in conjunction with the [/muscles/functions/legs/glutes,gluteal muscles] to produce force and power during activities that involve hip extension. Strong hamstrings contribute to proper hip mechanics and support overall lower body strength and function.-.-The hamstrings are an interesting muscle. They do not **anchor** at the hips, and actually attach in **both directions**. They have tendons extending to the knees as well as the spine, allowing for control over both directions. This means that by both curling your leg and leaning forward your hamstrings are being activated.-.-Additionally, the hamstrings contribute to lower body **stability and balance**. They provide support to the knee joint and assist in maintaining proper alignment during weight-bearing activities. By strengthening the hamstrings, individuals can improve stability and reduce the risk of knee injuries. Well-developed hamstrings also play a role in stabilizing the **pelvis** and supporting overall lower body stability.-.-Furthermore, the hamstrings are involved in **deceleration** and **eccentric control**. These muscles help to slow down and control movements, especially during activities that involve quick changes in direction or sudden stops. The hamstrings act as important stabilizers to prevent excessive stress on the knee joint and maintain control during movements that require rapid deceleration.-.-In summary, the hamstrings have crucial purposes related to **knee flexion, hip extension, lower body stability, and eccentric control**. They are responsible for bending the knee, extending the hip, supporting knee stability, and providing control during deceleration. Strengthening and conditioning the hamstrings can enhance performance in various physical activities, improve lower body stability and balance, and support overall functional movement."}
            ></Content>
        </div>
    )

    return (
        <ContentPage location="Muscles • Functions • Legs" title="Hamstrings" description={<span className={"text-lg"}>The hamstring refers to a group of muscles located on the back of the thigh. It consists of three muscles: the biceps femoris, semitendinosus, and semimembranosus. The hamstring muscles are responsible for flexing the knee joint, extending the hip joint, and playing a significant role in activities such as running, jumping, and bending the knee.</span>} content={content} currentTopic={"Muscles-Functions-Legs-Hamstrings"}></ContentPage>
    )
}