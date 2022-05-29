import React from 'react'
//import AllOutIcon from '@material-ui/icons/AllOut';
import AllOutIcon from '@mui/icons-material/AllOut';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import AnchorIcon from '@mui/icons-material/Anchor';



const Style = "text-white text-xs"


const arrayIcon = [
                    <AllOutIcon fontSize="small" className={Style} />, 
                    <DoneAllIcon fontSize="small" className={Style} />, 
                    <ControlCameraIcon fontSize="small" className={Style} />, 
                    <AnchorIcon fontSize="small" className={Style} />
                    ]
const Color = [
                "from-indigo-500 to-blue-500", 
                "from-blue-400 to-blue-300", 
                "from-green-500 to-green-400", 
                "from-yellow-600 to-yellow-500"
            ]


const Card = ({title, icon, balance}) => {
        const gradientColor = Color[icon] ;
        const iconStatus = arrayIcon[icon];

    return (
        <div className={`transform hover:scale-110 cursor-pointer transition delay-100 w-3/12  p-2 py-4 shadow-xl  border rounded-xl bg-gradient-to-r ${gradientColor}`} >
            <div className="flex justify-between">
                <div></div>
                <div className=" w-7  h-5 flex items-center justify-center  bg-gray-300 rounded-xl m-1  bg-opacity-30">
                    {iconStatus}
                </div>
            </div>
            <p className="text-gray-200 text-xs  ">
                {title}
            </p>
            <p className="text-gray-50 text-lg  font-semibold  ">
                {balance} 
            </p>
            <p className="text-gray-300  text-sm ">
            </p>

        </div>
    )
}

export default Card
