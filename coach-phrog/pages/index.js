import { useState } from 'react'
import { useRouter } from 'next/router'
import Navigation from '@/components/Navigation'
import Content from '@/components/Content'

export default function Layout({ children }) {
  const router = useRouter()
  const [searchText, setSearchText] = useState('')

  function handleSearch(e) {
    e.preventDefault()
    router.push(`/search?q=${searchText}`)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-slate-50">
        <Navigation></Navigation>

        <div className="flex-1 flex-col container mx-auto my-8 flex">
            {/* Page Header */}
            <span className="ml-6 mb-14 text-6xl font-bold">Muscle Basics</span>
            <span>Muscles are a type of tissue in our bodies that allow us to move and carry out physical activities. Think of muscles like rubber bands or ropes that are attached to our bones and can contract, or shorten, to pull the bones closer together, allowing us to move our bodies.-.-For example, when you bend your arm, your bicep muscle contracts, pulling your forearm towards your shoulder. When you straighten your arm, your tricep muscle contracts, pulling your forearm away from your shoulder.</span>
            {/* First Topic */}
            <Content title="Muscle Activation" content="Testing"></Content>
        </div>

        <footer className="bg-white shadow-sm text-gray-600 py-4">
            <div className="container text-center">
            <p>&copy; 2023 My Workout Database. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}