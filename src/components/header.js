import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CropIcon from '@mui/icons-material/Crop';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import Link from 'next/link';

const Header =() => {
   return(
    <div className="flex shadow-sm bg-white  p-4 justify-between h-xl">

        <div className="flex space-x-3  ">
            <p className='text-blue-800 text-4xl bold'>Sistema de alerta de Enchente</p>
            <p className="text-gray-400">by Alunos univesp</p>
            <CropIcon className="text-gray-300" />
            <DashboardIcon className="text-gray-300" />
        </div>
        <Link href={"/api/auth/logout/"} className="hover:bg-teal-400">
            <div className="flex space-x-4 text-gray-400 mr-3">
                <AppRegistrationIcon />
                <DisabledByDefaultIcon />
                <p className="text-gray-600 font-semibold">|</p>
            </div>
        </Link>

    </div>
   )
}

export default Header