import Image from "next/image"
import { Particles } from "./Components/Particles"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <Particles className="absolute inset-0" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            Welcome to NeoVibe
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">Experience reality reimagined</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Enter the NeoVibe
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      <section id="experiences" className="w-full py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Immersive Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Adventure", "Education", "Creativity"].map((exp, index) => (
              <div
                key={exp}
                className="bg-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
              >
                <Image
                  src={`/images/${exp.toLowerCase()}.jpg`}
                  alt={exp}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">{exp}</h3>
                <p className="text-gray-400">
                  Explore new worlds and push the boundaries of {exp.toLowerCase()} in virtual reality.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="w-full py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Cutting-edge Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">NeuroSync Interface</h3>
              <p className="text-gray-400 mb-4">
                Our proprietary NeuroSync technology creates a seamless connection between your mind and the virtual
                world, offering unparalleled immersion and responsiveness.
              </p>
              <ul className="list-disc list-inside text-gray-400">
                <li>Ultra-low latency response</li>
                <li>Adaptive neural feedback</li>
                <li>Emotion-driven environment interaction</li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full animate-pulse"></div>
              <Image
                src="/images/Cutting-edge.jpg"
                alt="NeuroSync Technology"
                width={400}
                height={400}
                className="relative z-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            About NeoVibe
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            At NeoVibe, we're not just creating virtual reality experiences; we're sculpting the future of human
            interaction and exploration. Our team of visionaries, engineers, and artists work tirelessly to push the
            boundaries of what's possible in the digital realm.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Join Our Team
          </button>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  )
}

