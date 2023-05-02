import Navigation from '@/components/Navigation'
import Content from '@/components/Content'
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function MuscleFunctions({}) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-800 text-slate-50">
            <Navigation></Navigation>

            <div className="flex-1 flex-row w-full px-10v mx-auto my-8 flex">
                <Sidebar currentTopic={"Muscles-Functions-Back"}></Sidebar>
                <div className="flex-1 flex-col">
                    {/* Page Header */}
                    <div className="flex flex-col mb-12">
                        <span className="ml-6 mb-10 text-6xl font-bold">Muscle Functions - Back</span>
                        <div className={"border-gray-600 border-l-8 flex flex-col"}>
                            <span className={"ml-6 text-lg mb-2"}>The back muscles are a group of muscles that are located in the <b>posterior</b> part of the body and are responsible for a wide range of functions, including posture, movement, and stabilization of the spine. These muscles can be divided into two main groups: the superficial and the deep back muscles.</span>
                            <span className={"ml-6 text-lg"}>Together, the back muscles work to support the spine, maintain proper alignment, and facilitate movements such as bending, twisting, and lifting. Strengthening the back muscles can help improve posture, reduce the risk of back pain and injury, and enhance overall upper body strength and mobility.</span>
                        </div>
                    </div>
                    {/* First Topic */}
                    <Content
                        title="Teres Major/Minor"
                        content="The Teres Major and Teres Minor are two muscles in your back that help you move your arms and shoulders. They are located in the upper back and are part of a group of muscles known as the rotator cuff.-.-The Teres Major muscle helps to move your arm and shoulder in a variety of ways. It can help you move your arm forward, backward, and to the side. It can also help you rotate your arm inward and outward. So, if you want to reach for something in front of you or lift something up over your head, the Teres Major muscle helps to make that movement possible.-.-The Teres Minor muscle, on the other hand, is primarily responsible for helping to rotate your arm outward. So, if you want to throw a ball or reach behind your back, the Teres Minor muscle helps you do that.-.-Overall, the Teres Major and Teres Minor muscles are important for many of the movements we make with our arms and shoulders. Whether you're reaching for something on a high shelf or throwing a ball, these muscles help to make those movements possible."
                    ></Content>
                    <Content
                        title={"Muscle Growth"}
                        content={"When you use your muscles to perform physical activities, such as lifting weights, your muscles can get bigger and stronger. This happens because your muscles are made up of tiny fibers, and when you challenge these fibers by lifting heavy weights, it causes them to **tear** and break down.-.-This might sound bad, but it's actually a good thing! When these tiny fibers are damaged, it triggers a response from your body to **repair** and rebuild them **stronger** and thicker than before. This process is called muscle **hypertrophy** (hy·per·tro·phy), and it's how muscles grow.-.-To support muscle growth, you need to give your body the right fuel and rest. Eating a balanced diet that includes plenty of protein is important because protein helps to repair and build new muscle fibers. Getting enough sleep and rest is also crucial because it allows your body to recover and rebuild the muscles that were damaged during exercise."}
                    ></Content>
                    <div className="ml-6">
                        <div className="flex rounded-md bg-yellow-50 p-4 text-lg text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-3 mt-1.5 h-5 w-5 flex-shrink-0">
                                <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                            </svg>
                            <div>
                                <h4 className="font-bold">Make sure you drink enough and eat nutrient full foods, otherwise these health issues can follow:</h4>
                                <div className="mt-1">
                                    <ul className="list-inside list-disc">
                                        <li>Dehydration and thirst</li>
                                        <li>Reduced performance and endurance</li>
                                        <li>Muscle cramps and spasms</li>
                                        <li>Increased risk of heat exhaustion and heatstroke</li>
                                        <li>Impaired cognitive function and concentration</li>
                                        <li>Reduced metabolic rate and digestion</li>
                                        <li>Kidney problems</li>
                                    </ul>
                                </div>
                            </div>
                            {/* <button class="ml-auto" x-on:click="showAlert = false">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                </svg>
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}