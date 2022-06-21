import React from 'react'
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['|', '|', '|', '|', '|', '|', '|'],
    datasets: [
        {
            label: 'maxima dia',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(220, 0, 0)',
            borderColor: 'rgba(220, 0, 0)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(220, 0, 0)',
            pointBackgroundColor: 'rgba(220, 0, 0)',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(220, 0, 0)',
            pointHoverBorderColor: 'rgba(220, 0, 0)',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: [2, 3, 3, 2, 3, 1, 2]
        },
        {
            label: 'media dia',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(67, 56, 202)',
            borderColor: 'rgba(0, 0, 202)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(120, 0, 0)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(67, 56, 202)',
            pointHoverBorderColor: 'rgba(220,0,0,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: [1, 3, 2, 1, 2, 1, 2]
        },
        {
            label: 'min dia',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(247, 220, 111 )',
            borderColor: 'rgba(247, 220, 111 )',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(247, 220, 111 )',
            pointBackgroundColor: '#fffrgba(247, 220, 111 )',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(247, 220, 111 )',
            pointHoverBorderColor: 'rgba(247, 220, 111 )',
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: [0, 1, 0, 2, 1, 2, 0]
        }
    ]
};

const Middle = () => {
    return (
        <div className=" bg-white ml-2   shadow-sm w-8/12 border rounded-xl border-gray-100">

            <div className="border-b p-3 border-gray-100">
                <p className="font-semibold  ">max-media-min por dia</p>
            </div>
            <div>
                <Line data={data} />
            </div>
        </div>
    )
}

export default Middle
