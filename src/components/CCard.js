import React from 'react'
//import AllOutIcon from '@material-ui/icons/AllOut';
import AllOutIcon from '@mui/icons-material/AllOut';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import AnchorIcon from '@mui/icons-material/Anchor';

const Style = "text-white text-xs"


const arrayIcon = {
                    0 : <AllOutIcon fontSize="small" className={Style} />, 
                    1 : <DoneAllIcon fontSize="small" className={Style} />, 
                    2 : <ControlCameraIcon fontSize="small" className={Style} />, 
                    3 : <AnchorIcon fontSize="small" className={Style} />
}
const Color = {
               0 : "from-indigo-600 to-blue-400", 
               1 : "from-blue-600 to-blue-300", 
               2 : "from-green-600 to-green-300", 
               3 : "from-yellow-600 to-yellow-300"
}


const Card = ({title, icon, balance}) => {
        const gradientColor = Color[icon] ;
        const iconStatus = arrayIcon[icon];

    return (
        <div className={`transform hover:scale-110 cursor-pointer transition delay-100 w-4/12 invisible md:visible p-2 py-4 shadow-xl  border rounded-xl bg-gradient-to-r ${gradientColor}`} >

            <div className="flex justify-between">
                <div></div>
                <div className=" w-7  h-3 flex items-center justify-center  bg-gray-300 rounded-xl m-1  bg-opacity-30">
                    {iconStatus}
                </div>
            </div>
            <p className="text-gray-200 text-xs">
                {title}
            </p>
            <p className="text-gray-50 text-lg  font-semibold">
                {balance} 
            </p>
            <p className="text-gray-300  text-sm ">
            </p>

        </div>
    )
}

export default Card
