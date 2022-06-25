import React from 'react'

const SensorWater = ({waterLevel}) => {

  const statusGradient = {
    0 : ` bg-green-100`,
    1 : ` bg-green-300`,
    2 : ` bg-yellow-500`,
    3 : ` bg-gradient-to-tr from-red-900 to-red-900 animate-ping `
  }
// ${statusGradient[waterLevel]}
  const statusColor = {
    0 : ` bg-green-100`,
    1 : ` bg-green-300`,
    2 : ` bg-yellow-500`,
    3 : ` bg-red-700 animate-ping`
  }
// ${statusColor[waterLevel]}
  const textMessage = {
    0 : `zero`,
    1 : `LOW`,
    2 : `MIDDLE`,
    3 : `HIGH`
  }

  return (
 
      <div className='text-3xl h-41 m-5 p-5 bg-gradient-to-tr from-cyan-100 to bg-slate-100'>
        <hr/>
          {waterLevel}
          <br/>
          <hr/>
          <div className={`flex 
                            flex-col 
                            items-center 
                            justify-center 
                            h-[50%] 
                            m-10 
                            border-4
                            rounded-full 
                            ${statusColor[waterLevel]}
                            `}>
            {textMessage[waterLevel]}
          </div>
 
    </div>
  )//rounded-full h-40 bg-red-500 flex flex-col items-center justify-center
}

export default SensorWater