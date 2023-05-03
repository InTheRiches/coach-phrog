import Navigation from '@/components/Navigation'
import Content from '@/components/Content'
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function MuscleFunctions({}) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-800 text-slate-50">
            <Navigation></Navigation>

            <div className="flex-1 flex-row w-3/4 mx-auto my-8 flex">
                <Sidebar currentTopic={"Muscles-Functions-Back"}></Sidebar>
                <div className="flex-1 flex-col">
                    {/* Page Header */}
                    <div className="flex flex-col mb-12">
                        <span className="ml-6 mb-10 text-6xl font-bold">Muscle Functions - Back</span>
                        <div className={"ml-6 border-slate-50 border-1 flex flex-col p-4 bg-black bg-opacity-20 rounded-md"}>
                            <span className={"text-lg mb-6"}>The back muscles are a group of muscles that are located in the <b>posterior</b> part of the body and are responsible for a wide range of functions, including posture, movement, and stabilization of the spine. These muscles can be divided into two main groups: the superficial and the deep back muscles.</span>
                            <span className={"text-lg"}>Together, the back muscles work to support the spine, maintain proper alignment, and facilitate movements such as bending, twisting, and lifting. Strengthening the back muscles can help improve posture, reduce the risk of back pain and injury, and enhance overall upper body strength and mobility.</span>
                        </div>
                    </div>
                    {/* First Topic */}
                    <Content
                        title="Teres Major/Minor"
                        content="The Teres Major and Teres Minor are two muscles in your back that help you move your arms and shoulders. They are located in the upper back and are part of a group of muscles known as the rotator cuff.-.-The Teres Major muscle helps to move your arm and shoulder in a variety of ways. It can help you move your arm forward, backward, and to the side. It can also help you rotate your arm inward and outward. So, if you want to reach for something in front of you or lift something up over your head, the Teres Major muscle helps to make that movement possible.-.-The Teres Minor muscle, on the other hand, is primarily responsible for helping to rotate your arm outward. So, if you want to throw a ball or reach behind your back, the Teres Minor muscle helps you do that.-.-Overall, the Teres Major and Teres Minor muscles are important for many of the movements we make with our arms and shoulders. Whether you're reaching for something on a high shelf or throwing a ball, these muscles help to make those movements possible."
                    ></Content>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}