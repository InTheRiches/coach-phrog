import { useState } from 'react'
import { useRouter } from 'next/router'
import Navigation from '@/components/Navigation'
import Content from '@/components/Content'
import Sidebar from "@/components/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-slate-50">
        <Navigation></Navigation>

        <div className="flex-1 flex-row max-w-screen-xl mx-auto my-8 flex">
            <Sidebar></Sidebar>
            <div className="flex-1 flex-col">
                {/* Page Header */}
                <div className="flex flex-col mb-12">
                    <span className="ml-6 mb-14 text-6xl font-bold">Muscle Basics</span>
                    <div className={"border-gray-600 border-l-8 flex flex-col"}>
                        <span className={"ml-6 text-lg mb-2"}>Muscles are a type of tissue in our bodies that allow us to move and carry out physical activities. Think of muscles like rubber bands or ropes that are attached to our bones and can contract, or shorten, to pull the bones closer together, allowing us to move our bodies.</span>
                        <span className={"ml-6 text-lg"}>For example, when you bend your arm, your bicep muscle contracts, pulling your forearm towards your shoulder. When you straighten your arm, your tricep muscle contracts, pulling your forearm away from your shoulder.</span>
                    </div>
                </div>
                {/* First Topic */}
                <Content
                    title="Muscle Activation"
                    content="Muscles are activated by signals from our nervous system, which is like the body's electrical wiring. When we want to move, our brain sends a signal through our nervous system to the muscle that needs to contract. When you want to move a muscle, your brain sends a signal to the muscle fibers. The muscle fibers are made up of tiny units called sarcomeres. These sarcomeres contain two types of filaments called actin and myosin.-.-When the muscle fibers receive the signal to contract, the myosin filaments grab onto the actin filaments and pull them towards the center of the sarcomere, which causes the sarcomere to shorten. This shortening of the sarcomere causes the whole muscle fiber to contract.-.-This process requires energy in the form of ATP, and it continues as long as the muscle is receiving the signal to contract. So, when you move a muscle, what's happening is a bunch of tiny filaments inside the muscle fibers are grabbing and pulling on each other to make the whole muscle get shorter and create movement."
                ></Content>
                <Content
                    title={"Muscle Growth"}
                    content={"When you use your muscles to perform physical activities, such as lifting weights, your muscles can get bigger and stronger. This happens because your muscles are made up of tiny fibers, and when you challenge these fibers by lifting heavy weights, it causes them to tear and break down.-.-This might sound bad, but it's actually a good thing! When these tiny fibers are damaged, it triggers a response from your body to repair and rebuild them stronger and thicker than before. This process is called muscle hypertrophy, and it's how muscles grow.-.-To support muscle growth, you need to give your body the right fuel and rest. Eating a balanced diet that includes plenty of protein is important because protein helps to repair and build new muscle fibers. Getting enough sleep and rest is also crucial because it allows your body to recover and rebuild the muscles that were damaged during exercise."}
                ></Content>
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