import Head from 'next/head'
import Sidebar from '../components/sidebar';
import Header from '../components/header';



export default function Home() {
  return (
    <div>
    <div className="flex w-screen h-screen bg-gradient-to-tr from-transparent to to-blue-200">
          <Sidebar/>
      <div className='w-screen'>
          <Header/>
      </div>

    </div>
    </div>
  )
}