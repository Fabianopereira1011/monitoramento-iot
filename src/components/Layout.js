import React from 'react'

import Sidebar from './sidebar'
import Header from './header'

const Painel = (props) => {
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