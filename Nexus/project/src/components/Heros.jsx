import React from 'react'
import { Link } from 'react-router-dom'

const Heros = () => {
  return (
    <section id="heros">
      <div className="relative isolate overflow-hidden bg-gray-900">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="pattern-grid"
              width="200"
              height="200"
              x="100%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#pattern-grid)"
          />
        </svg>

        <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>

        <div className="mt-[-50px] flex h-[90vh] items-center justify-center rounded-2xl">
          <div className="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
            <h1 className="mt-10 text-5xl font-bold tracking-tight text-white ">
            <span className="text-sky-500">"NEXUS"</span> Where <span className="text-sky-500">startup dreams</span> meet{' '}
              <span className="text-sky-500">visionary investors</span>
            </h1>
           
            <p className="mt-6 text-xl text-gray-400">
            Turn ambition into action — connect with investors who believe in bold ideas. <br />
            Your next big opportunity is just one conversation away.
            </p>
            
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <Link
                to="/signup"
                className="transform transition-transform duration-300 hover:scale-105 rounded-md bg-sky-500 px-5 py-3 text-[18px] font-semibold text-gray shadow-lg hover:text-white bg-gray focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-400"
              >
                Sign Up →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Heros
