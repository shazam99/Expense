import React, { useEffect } from 'react'
import * as echarts from 'echarts';

const Charts = () => {
    useEffect(() => {
        var chartDom = document.getElementById('mainc');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            tooltip: {
                trigger: 'item'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 51.72,   name: 'Rent' },
                        { value: 34.48, name: 'Food' },
                        { value: 3.44, name: 'Travel' },
                        { value: 10.34, name: 'Online' },
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        option && myChart.setOption(option);
        return () => { myChart.dispose() };
    })
    return (
        <div id='mainc' style={{ width: '100%', height: '100%' }} ></div>
    );

}

export default Charts