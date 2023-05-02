import Navigation from '@/components/Navigation'
import Content from '@/components/Content'
import Sidebar from "@/components/Sidebar";

export default function MuscleBasics({}) {
    return (
        <div className="flex flex-col min-h-screen bg-gray-800 text-slate-50">
            <Navigation></Navigation>

            <div className="flex-1 flex-row w-full px-10v mx-auto my-8 flex">
                <Sidebar currentTopic={"Muscles-Basics"}></Sidebar>
                <div className="flex-1 flex-col">
                    {/* Page Header */}
                    <div className="flex flex-col mb-12">
                        <span className="ml-6 mb-10 text-6xl font-bold">Muscle Basics</span>
                        <div className={"border-gray-600 border-l-8 flex flex-col"}>
                            <span className={"ml-6 text-lg mb-2"}>Muscles are a type of tissue in our bodies that allow us to <b>move</b> and <b>carry</b> out physical activities. Think of muscles like rubber bands or ropes that are attached to our bones and can <b>contract</b>, or shorten, to pull the bones closer together, allowing us to move our bodies.</span>
                            <span className={"ml-6 text-lg"}>For example, when you bend your arm, your bicep muscle contracts, pulling your forearm towards your shoulder. When you straighten your arm, your tricep muscle contracts, pulling your forearm away from your shoulder.</span>
                        </div>
                    </div>
                    {/* First Topic */}
                    <Content
                        title="Muscle Activation"
                        content="Muscles are activated by signals from our nervous system, which is like the body's electrical wiring. When we want to move, our brain sends a signal through our nervous system to the muscle that needs to **contract**. When you want to move a muscle, your brain sends a signal to the muscle fibers. The muscle fibers are made up of tiny units called sarcomeres. These sarcomeres contain two types of filaments called actin and myosin.-.-When the muscle fibers receive the signal to contract, the myosin filaments grab onto the actin filaments and pull them towards the center of the sarcomere, which causes the sarcomere to shorten. This shortening of the sarcomere causes the whole muscle fiber to contract.-.-This process requires energy in the form of ATP, and it continues as long as the muscle is receiving the signal to contract. So, when you move a muscle, the tiny filaments inside the muscle fibers are grabbing and pulling on each other to make the whole muscle get shorter and create movement."
                    ></Content>
                    <Content
                        title={"Muscle Growth"}
                        content={"When you use your muscles to perform physical activities, such as lifting weights, your muscles can get bigger and stronger. This happens because your muscles are made up of tiny fibers, and when you challenge these fibers by lifting heavy weights, it causes them to **tear** and break down.-.-This might sound bad, but it's actually a good thing! When these tiny fibers are damaged, it triggers a response from your body to **repair** and rebuild them **stronger** and thicker than before. This process is called muscle **hypertrophy** (hy·per·tro·phy), and it's how muscles grow.-.-To support muscle growth, you need to give your body the right fuel and rest. Eating a balanced diet that includes plenty of protein is important because protein helps to repair and build new muscle fibers. Getting enough sleep and rest is also crucial because it allows your body to recover and rebuild the muscles that were damaged during exercise."}
                    ></Content>
                    <div className="ml-6">
                        <div class="flex rounded-md bg-yellow-50 p-4 text-sm text-yellow-500" x-cloak x-show="showAlert" x-data="{ showAlert: true }">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-3 mt-1.5 h-5 w-5 flex-shrink-0">
                                <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                            </svg>
                            <div>
                                <h4 class="font-bold">Make sure you drink enough and eat nutrient full foods, otherwise these health issues can follow:</h4>
                                <div class="mt-1">
                                    <ul class="list-inside list-disc">
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

            <footer className="bg-gray-800 bg-opacity-50 bg-blur-sm text-slate-50 py-4">
                <div className="container text-center">
                    <p>&copy; 2023 My Workout Database. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}