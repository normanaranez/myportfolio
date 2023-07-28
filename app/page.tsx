import NavBar from '@/components/navigation/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
        <NavBar />
        <h1 className="text-lg">test</h1>
    </main>
  )
}
