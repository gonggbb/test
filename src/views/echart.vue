<template>
        <div>
                <!-- <div class="echartBox" ref="echartBox"></div> -->
                <div class="echartBox" ref="echartBox"></div>

        </div>
</template>

<script>
// import 'echarts-gl';
import  'echarts-liquidfill'
        export default {
                name:"echart",
                mounted () {
                        // this.getData()
                        this.Histogram3D()
                },
                methods: {
                //    getData(){
                //       this.$axios({
                //           method:"get",
                //           url:"https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data-gl/asset/data/flights.json",
                //           dataType:'json'
                //       }).then(res=>{
                //         let {data} =  res
                //         // var option;
                //         console.log("!!!!!!!!!!!",data)
                //         var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
                //         var myChart = this.$echarts.init(this.$refs.echartBox);
                //           function getAirportCoord(idx) {
                //               return [data.airports[idx][3], data.airports[idx][4]];
                //           }
                //           var routes = data.routes.map(function(airline) {
                //               return [
                //                   getAirportCoord(airline[1]),
                //                   getAirportCoord(airline[2])
                //               ];
                //           });
                      
                //           myChart.setOption({
                //               backgroundColor: '#000',
                //               globe: {
                //                   baseTexture: ROOT_PATH + '/data-gl/asset/world.topo.bathy.200401.jpg',
                //                   heightTexture: ROOT_PATH + '/data-gl/asset/bathymetry_bw_composite_4k.jpg',
                      
                //                   shading: 'lambert',
                      
                //                   light: {
                //                       ambient: {
                //                           intensity: 0.4
                //                       },
                //                       main: {
                //                           intensity: 0.4
                //                       }
                //                   },
                      
                //                   viewControl: {
                //                       autoRotate: false
                //                   }
                //               },
                //               series: {
                      
                //                   type: 'lines3D',
                      
                //                   coordinateSystem: 'globe',
                      
                //                   blendMode: 'lighter',
                      
                //                   lineStyle: {
                //                       width: 1,
                //                       color: 'rgb(50, 50, 150)',
                //                       opacity: 0.1
                //                   },
                      
                //                   data: routes
                //               }
                //           });
                //         // myChart.setOption(option);  
                //       }).catch(err=>{
                //         console.log(err)
                //       })
                //    },

                //柱状图
                Histogram3D(){
                             var myChart = this.$echarts.init(this.$refs.echartBox);
var option = {
    backgroundColor: '#050038',
    title: {
        text: '',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 25,
            color: 'rgb(97, 142, 205)'
        }
    },
    series: [
        {
            type: 'liquidFill',
            radius: '45%',
            center: ['50%', '50%'],
            data: [0.5, 0.5, 0.5], // data个数代表波浪数
            backgroundStyle: {
                borderWidth: 1,
                color: 'rgb(255,0,255,0.1)'
            },
            label: {
                normal: {
                    formatter: (0.5 * 100).toFixed(2) + '%',
                    textStyle: {
                        fontSize: 50
                    }
                }
            },
            outline: {
                show: false,
            }
        },
        {
            "type": "pie",
            "center": ["50%", "50%"],
            "radius": ["50%", "52%"],
            "hoverAnimation": false,
            "data": [{
                    "name": "",
                    "value": 500,
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        color: '#5886f0'
                    },
                    emphasis: {
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: '#5886f0'
                        },
                    }
                },
                { //画中间的图标
                    "name": "",
                    "value": 4,
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        color: '#ffffff',
                        "normal": {
                            "color": "#5886f0",
                            "borderColor": "#5886f0",
                            "borderWidth": 20,
                            // borderRadius: '100%'
                        },
                    },
                    label: {

                        borderRadius: '100%'
                    },
                    emphasis: {
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: '#5886f0'
                        },
                    }

                },
                { // 解决圆点过大后续部分显示明显的问题
                    "name": "",
                    "value": 4,
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        color: '#5886f0'
                    },
                    emphasis: {
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: '#5886f0'
                        },
                    }
                },
                { //画剩余的刻度圆环
                    "name": "",
                    "value": 88,
                    itemStyle: {
                        color: '#050038'
                    },
                    "label": {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    emphasis: {
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: 'rgba(255,255,255,0)'
                        },
                    }
                }
            ]
        }

    ]
}
                        myChart.setOption(option);  
                }
             
                },
        }
</script>

<style lang="scss" scoped>
.echartBox{
        height: 400px;
        width: 1000px;
        margin: 10px auto;
}
</style>