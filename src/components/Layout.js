import React from 'react'

import Sidebar from './sidebar'
import Header from './header'

import Link from 'next/link'
import LoggingComponent from './loggingComponent'


const Painel = (props) => {

  //if (isLoading) return <div>Loading...</div>;
  //  if (error) return <div>{error.message}</div>;
  
  //if(user)
   
  return (
     <div>
        <div className="flex w-screen h-screen bg-gradient-to-tr from-transparent to to-blue-200">
          <Sidebar/>
                <div className='w-screen'>
                        <Header/>
                        {props.children}
                </div>
        </div>
      </div>
  )

  }

export default Painel