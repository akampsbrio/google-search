import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import { SearchCircleIcon, SearchIcon} from '@heroicons/react/outline'
import Google from '../components/Google'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="The DB Google Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left Header */} 
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right Header */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
           {/* Icon */}
           <ViewGridIcon className="h-7 w-10 rounded-full hover:bg-gray-100 cursor-pointer"/>
           {/* Avatar */}
           <Avatar url="/profile.png" />
        </div> 
      </header>


 
      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Google url="/google.png"/>
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500"/>
          <input type="text" className="flex-grow focus:outline-none"/>
          <MicrophoneIcon className="h-5"/>
        </div>
        <div className="flex flex-col  space-y-2 mt-8 justify-center w-1/2 sm:flex-row sm:space-y-0">
        <button className="btn">Google Search</button>
        <button className="btn">I'm Feeeling Lucky</button>
        </div>
      </form>


      {/* Footer */}
      <Footer/>
    </div>
  )
}
