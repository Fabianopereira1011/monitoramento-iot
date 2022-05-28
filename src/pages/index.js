import Head from 'next/head'
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import Container from '../components/container';



export default function Home() {
  return (
    <div>
    <div className="flex w-screen h-screen bg-gradient-to-tr from-transparent to to-blue-200">
          <Sidebar/>
      <div className='w-screen'>
          <Header/>
          <Container/>
      </div>

    </div>
    </div>
  )
}