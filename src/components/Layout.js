import React from 'react'

import Sidebar from './sidebar'
import Header from './header'
import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link'
import LoggingComponent from './loggingComponent'

const Painel = (props) => {
  const {user , error , isLoading} = useUser();

  if (isLoading) return <div>Loading...</div>;
  //  if (error) return <div>{error.message}</div>;
  
  if(!user) return <LoggingComponent/>
  return (
     user && <div>
        <div className="flex w-screen h-screen bg-gradient-to-tr from-transparent to to-blue-200">
          <Sidebar/>
                <div className='w-screen'>
                        <Header/>
                        {props.children}
                </div>
        </div>
      </div>
  )
  if(!user) return <LoggingComponent/>
   
}



export default Painel