import React, { useEffect, useState } from 'react'

import Card from './CCard'
import Middle from './Midlle' 
import Chartline from './chartLine'
import SensorWater from './sensorWater'


const Container = () => {
    const [data , setData ] = useState('Conectando. .  .');
    

    const fetchData =async () => {
            const dataApi = await fetch("https://tcc-group4.herokuapp.com/api/v8/sensors");
            const dataJson = await dataApi.json();
            
            //bellow just for test. 
            console.log("json format");
            console.log(dataJson);
            console.log("O elemento 0 :")
            console.log(dataJson[0].wateLevel);

            setData(dataJson[2].wateLevel);
            console.log(data );
    }

    useEffect(()=>{
        setInterval(() => {
            fetchData();
          }, 2000);
    },[]);

    return (
        <div className=" bg-gradient-to-b from-gray-100 to-blue-400 h-full " >
            <div className="  px-8 py-1 ">

                <p className="text-gray-500 text-lg">
                    
                </p>

                <p className="font-bold text-2xl transform -translate-y-2">
                    
                </p>

            </div>

            <div className="flex-wrap md:flex">
                <Card title="Monitoramento inteligente" balance={'Aracatuba -> sem chuva'} icon={0}/>
                <Card title="Regioes alargadas" balance={'0 ocorrencia'} icon={3}/>
                <Card title="Fluviometro" balance={'Sem conexao'} icon={2}/>
            </div>

                        {/* flex  ml-3 mt-6 space-x-6  mr-4 */}
            <div className="flex-wrap md:flex">
                <SensorWater waterLevel={2}/> 
                <Middle/>                            
            </div>
            <Chartline/>

        </div>
    )
}

export default Container