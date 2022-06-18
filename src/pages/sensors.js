import React, { useState , useEffect} from 'react'

const sensors = () => {
    const [data , setData ] = useState("sem sinal")

    const fetchData =async () => {
            const dataApi = await fetch("https://tcc-group4.herokuapp.com/api/v8/sensors");
            const dataJson = await dataApi[0].json();
            setData(dataJson); 
            console.log(data);
            //console.log(data );
    }

    useEffect(()=>{
        fetchData();
    },
    []);

  return (
    <div>{
        data.map( item => {return <pre> JSON.stringify( item ) </pre>})
        }</div>
  )
}

export default sensors