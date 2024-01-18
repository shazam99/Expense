import React, { useEffect } from 'react'
import * as echarts from 'echarts';

const Charts = ({data}) => {
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
                    name: 'Monthly Data',
                    type: 'pie',
                    radius: '60%',
                    data: data,
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