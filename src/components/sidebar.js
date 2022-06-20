import React from 'react'
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className="md:w-3/12 w-2/12 h-screen shadow-2xl bg-white">
            <div className="flex m-7">
                <p className="text-lg md:text-4xl">Group</p>
                <hr/>
                <p className="text-lg md:text-4xl italic text-blue-700">4</p>
                <hr className='bg-blue-900 '/>
                

            </div>
            <div className="p-4 space-y-14">
                <div className="space-y-4" >
                    <h1 className="text-gray-400">Menu</h1>

                    <Link href='/' >
                    <div className=''>
                        <div className="pt-8 flex p-3 text-gray-700  md:space-x-4 0 hover:bg-gray-300 hover:text-blue-600  cursor-pointer ">
                                    <ControlCameraIcon />
                                    <div className="text-gray-600  " >Painel</div>
                        </div>
                    </div>
                    </Link>


                    <Link href='/about' >
                    <div className=''>
                        <div className="pt-8 flex p-3 text-gray-700  md:space-x-4 0 hover:bg-gray-300 hover:text-blue-600  cursor-pointer ">
                                    <ControlCameraIcon />
                                    <div className="text-gray-600  " >Desenvolvedores</div>
                        </div>
                    </div>
                    </Link>

                    <Link href='/api/auth/logout'>
                    <div className=''>
                        <div className="pt-8 flex p-3 text-gray-700  md:space-x-4 0 hover:bg-gray-300 hover:text-blue-600  cursor-pointer ">
                            <DisabledByDefaultIcon />
                        <div className="text-gray-600  " >Logout</div>
                        </div>
                    </div>
                    </Link>



                </div>
                
                
            </div>

        </div>
    )
}

const Acoisa = ({title, }) =>{
    return(
        <div className=''>
        <div className="pt-8 flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-300 hover:text-blue-600  cursor-pointer ">
                    <ControlCameraIcon />
                    <Link href='/about' className="text-gray-600  " >{title}</Link>
        </div>
    </div>
    )
}


export default Sidebar
