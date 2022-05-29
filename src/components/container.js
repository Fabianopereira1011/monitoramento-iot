import React from 'react'

import Card from './Card'
import Middle from './Midlle' 
import Chartline from './chartLine'


const Container = () => {
    return (
        <div className=" bg-gradient-to-b from-gray-100 to-blue-400 h-full " >
            <div className="  px-8 py-1 ">

                <p className="text-gray-500 text-lg">
                    
                </p>

                <p className="font-bold text-2xl transform -translate-y-2">
                    
                </p>

            </div>

            <div className="flex   p-4 space-x-3">
                <Card title="Sensores IOT" balance={'0 - Conectados'} icon={0}/>
                <Card title="Fluviometro" balance={'87 mm'} icon={1}/>
                <Card title="Regioes alargadas" balance={'0 ocorrencia'} icon={3}/>
                <Card title="maps" balance={'----'} icon={2}/>
            </div>

            <div className="flex  ml-3 mt-6 space-x-6  mr-4">
                <Middle />                
            </div>

        </div>
    )
}

export default Container