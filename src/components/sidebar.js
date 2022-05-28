import React from 'react'
import ControlCameraIcon from '@mui/icons-material/ControlCamera';

const Sidebar = () => {
    return (
        <div className="md:w-3/12 w-6/12 h-screen shadow-2xl bg-white">
            <div className="flex m-7">
                <p className="text-4xl">Group</p>
                <hr/>
                <p className="text-4xl italic text-blue-700">4</p>
                <hr className='bg-blue-900 '/>
                

            </div>
            <div className="p-4 space-y-14">
                <div className="space-y-4" >
                    <h1 className="text-gray-400">Menu</h1>

                    <div className=''>
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-300 hover:text-blue-600  cursor-pointer ">
                                    <ControlCameraIcon />
                                    <a href='/sensores/iot' className="text-gray-600  " >Painel</a>
                        </div>
                    </div>
                    
                    <div className=''>
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-300 hover:text-blue-600  cursor-pointer ">
                                    <ControlCameraIcon />
                                    <a href='/sensores/iot' className="text-gray-600  " >Sensore</a>
                        </div>
                    </div>

                    <div className=''>
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-300 hover:text-blue-600  cursor-pointer ">
                                    <ControlCameraIcon />
                                    <a href='/sensores/iot' className="text-gray-600  " >Fluviometro</a>
                        </div>
                    </div>


                    <div className=''>
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-300 hover:text-blue-600  cursor-pointer ">
                                    <ControlCameraIcon />
                                    <a href='/sensores/iot' className="text-gray-600  " >Desenvolvedores</a>
                        </div>
                    </div>


                    <div className=''>
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-300 hover:text-blue-600  cursor-pointer ">
                                    <ControlCameraIcon />
                                    <a href='/sensores/iot' className="text-gray-600  " >Painel</a>
                        </div>
                    </div>

                </div>
                
                
            </div>

        </div>
    )
}

const Acoisa = () =>{
    return(
            <div className="flex p-3 bg-white text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer ">
                                <ControlCameraIcon />
                                <a href='/sensores/iot' className="text-gray-600  " >Bla bla..</a>
            </div>
    )
}


export default Sidebar
