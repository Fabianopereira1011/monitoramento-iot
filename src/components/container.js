import React, { useEffect, useState } from 'react'

import Card from './CCard'
import Middle from './Midlle' 
import Chartline from './chartLine'
import SensorWater from './sensorWater'
import { info } from 'autoprefixer'


const Container = () => {
    const [data , setData ] = useState();
    const [aguaNivel , setAguaNivel]=useState();
    const [previsaoChuva , setPrevisaoChuva ]=useState();
    const [fluviometro , setFluviometro ]=useState();
    

    const fetchData =async () => {
            const dataApi = await fetch("https://tcc-group4.herokuapp.com/api/v8/sensors");
            //const dataApi = await fetch("http://localhost:8080/api/v8/sensors");
            const dataJson = await dataApi.json();
            console.log(data);
            setData(dataJson);
            /**/
            //setData(dataJson[0].wateLevel);
            /*
            console.log("dados da api.");
            console.log(aguaNivel);
            console.log(previsaoChuva);
            console.log(fluviometro);
            */
    }

    useEffect(()=>{
        /**/
        setInterval(() => {
            fetchData();
          }, 1500);
    },[]);

    return (
        <div className=" bg-gradient-to-b from-gray-100 to-blue-400 h-full " >
            <div className="  px-8 py-1 ">

                <p className="text-gray-500 text-lg">
                    
                </p>

                <p className="font-bold text-2xl transform -translate-y-2">
                    
                </p>

            </div>

           { data ?  
           <div className="flex-wrap md:flex">
                {/* <Card title="Monitoramento inteligente" balance={data[0].id} icon={0}/>
                <Card title="Regioes alargadas" balance={'0 ocorrencia'} icon={3}/>
                <Card title="Fluviometro" balance={data[1].id} icon={2}/> */}
                {data.map((element, index) => {			
                    if(element.id == "fluviometro"){
                        return <Card key={element.id} title="Fluviometro" balance={element.fluviometro} icon={1}/>;
                        };
                })}

                {data.map((element, index) => {			
                    if(element.id == "previsao_inteligente"){
                        return <Card key={element.id} title="Prev. intelig." balance={element.chuvaPrevisao} icon={2}/>;
                        };
                })}

                <Card title="Regioes alargadas" balance={'0 ocorrencia'} icon={3}/>
   

            </div> : <h1>Carregando...</h1>}

                        {/* flex  ml-3 mt-6 space-x-6  mr-4 */}
            <div className="flex-wrap md:flex">
                {data ?
                data.map((element, index) => {	
                    
                    if(element.id == "sensorAgua"){
                        return <SensorWater key={element.id} waterLevel={element.wateLevel}/>;
                        };
                }): ""
            }
                <Middle/>                            
            </div>
            <Chartline/>

        </div>
    )
}

export default Container