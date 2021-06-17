<template>
        <div class="echart_body">
                <!-- <div class="echartBox" ref="echartBox"></div> -->
                <div class="echartBox" ref="echartBox"></div>
                <div class="echartBar" ref="echartBar"></div>
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
                        this.echartBar()
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
                        let angle = 0;//角度，用来做简单的动画效果的
                        let value = 80.99;
                        let option = {
                        backgroundColor:"#061740",
                        title: {
                                text: '{a|'+ value +'}{c|%}',
                                x: 'center',
                                y: 'center',
                                textStyle: {
                                    rich:{
                                        a: {
                                            fontSize: 48,
                                            color: '#29EEF3'
                                        },
                                        
                                        c: {
                                            fontSize: 20,
                                            color: '#ffffff',
                                            // padding: [5,0]
                                        }
                                    }
                                }
                            },
                            // legend: {
                            //     type: "plain",
                            //     orient: "vertical",
                            //     right: 0,
                            //     top: "10%",
                            //     align: "auto",
                            //     data: [{
                            //         name: '涨价后没吃过',
                            //         icon: "circle"
                            //     }, {
                            //         name: '天天吃',
                            //         icon: "circle"
                            //     }, {
                            //         name: '三五天吃一次',
                            //         icon: "circle"
                            //     }, {
                            //         name: '半个月吃一次',
                            //         icon: "circle"
                            //     }],
                            //     textStyle: {
                            //         color: "white",
                            //         fontSize: 16,
                            //         padding: [10, 1, 10, 0]
                            //     },
                            //     selectedMode:false
                            // },
                            series: [ {
                                    name: "ring5",
                                    type: 'custom',
                                    coordinateSystem: "none",
                                    renderItem: function(params, api) {
                                        return {
                                            type: 'arc',
                                            shape: {
                                                cx: api.getWidth() / 2,
                                                cy: api.getHeight() / 2,
                                                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
                                                startAngle: (0+angle) * Math.PI / 180,
                                                endAngle: (90+angle) * Math.PI / 180
                                            },
                                            style: {
                                                stroke: "#0CD3DB",
                                                fill: "transparent",
                                                lineWidth: 1.5
                                            },
                                            silent: true
                                        };
                                    },
                                    data: [0]
                                }, {
                                    name: "ring5",
                                    type: 'custom',
                                    coordinateSystem: "none",
                                    renderItem: function(params, api) {
                                        return {
                                            type: 'arc',
                                            shape: {
                                                cx: api.getWidth() / 2,
                                                cy: api.getHeight() / 2,
                                                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
                                                startAngle: (180+angle) * Math.PI / 180,
                                                endAngle: (270+angle) * Math.PI / 180
                                            },
                                            style: {
                                                stroke: "#0CD3DB",
                                                fill: "transparent",
                                                lineWidth: 1.5
                                            },
                                            silent: true
                                        };
                                    },
                                    data: [0]
                                }, {
                                    name: "ring5",
                                    type: 'custom',
                                    coordinateSystem: "none",
                                    renderItem: function(params, api) {
                                        return {
                                            type: 'arc',
                                            shape: {
                                                cx: api.getWidth() / 2,
                                                cy: api.getHeight() / 2,
                                                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                                                startAngle: (270+-angle) * Math.PI / 180,
                                                endAngle: (40+-angle) * Math.PI / 180
                                            },
                                            style: {
                                                stroke: "#0CD3DB",
                                                fill: "transparent",
                                                lineWidth: 1.5
                                            },
                                            silent: true
                                        };
                                    },
                                    data: [0]
                                }, {
                                    name: "ring5",
                                    type: 'custom',
                                    coordinateSystem: "none",
                                    renderItem: function(params, api) {
                                        return {
                                            type: 'arc',
                                            shape: {
                                                cx: api.getWidth() / 2,
                                                cy: api.getHeight() / 2,
                                                r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                                                startAngle: (90+-angle) * Math.PI / 180,
                                                endAngle: (220+-angle) * Math.PI / 180
                                            },
                                            style: {
                                                stroke: "#0CD3DB",
                                                fill: "transparent",
                                                lineWidth: 1.5
                                            },
                                            silent: true
                                        };
                                    },
                                    data: [0]
                                }, {
                                    name: "ring5",
                                    type: 'custom',
                                    coordinateSystem: "none",
                                    renderItem: function(params, api) {
                                        let x0 = api.getWidth() / 2;
                                        let y0 = api.getHeight() / 2;
                                        let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
                                        let point = getCirlPoint(x0, y0, r, (90+-angle))
                                        return {
                                            type: 'circle',
                                            shape: {
                                                cx: point.x,
                                                cy: point.y,
                                                r: 4
                                            },
                                            style: {
                                                stroke: "#0CD3DB",//粉
                                                fill: "#0CD3DB"
                                            },
                                            silent: true
                                        };
                                    },
                                    data: [0]
                                }, {
                                    name: "ring5",  //绿点
                                    type: 'custom',
                                    coordinateSystem: "none",
                                    renderItem: function(params, api) {
                                        let x0 = api.getWidth() / 2;
                                        let y0 = api.getHeight() / 2;
                                        let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
                                        let point = getCirlPoint(x0, y0, r, (270+-angle))
                                        return {
                                            type: 'circle',
                                            shape: {
                                                cx: point.x,
                                                cy: point.y,
                                                r: 4
                                            },
                                            style: {
                                                stroke: "#0CD3DB",      //绿
                                                fill: "#0CD3DB"
                                            },
                                            silent: true
                                        };
                                    },
                                    data: [0]
                                }, {
                                    name: '',
                                    type: 'pie',
                                    radius: ['58%', '45%'],
                                    silent: true,
                                    clockwise: true,
                                    startAngle: 90,
                                    z: 0,
                                    zlevel: 0,
                                    label: {
                                        normal: {
                                            position: "center",
                        
                                        }
                                    },
                                    data: [{
                                            value: value,
                                            name: "",
                                            itemStyle: {
                                                normal: {
                                                    color: { // 完成的圆环的颜色
                                                        colorStops: [{
                                                            offset: 0,
                                                            color: '#4FADFD' // 0% 处的颜色
                                                        }, {
                                                            offset: 1,
                                                            color: '#28E8FA' // 100% 处的颜色
                                                        }]
                                                    },
                                                }
                                            }
                                        },
                                        {
                                            value: 100-value,
                                            name: "",
                                            label: {
                                                normal: {
                                                    show: false
                                                }
                                            },
                                            itemStyle: {
                                                normal: {
                                                    color: "#173164"
                                                }
                                            }
                                        }
                                    ]
                                },
                                
                                {
                                    name: "",
                                    type: "gauge",
                                    radius: "58%",
                                    center: ['50%', '50%'],
                                    startAngle: 0,
                                    endAngle: 359.9,
                                    splitNumber: 8,
                                    hoverAnimation: true,
                                    axisTick: {
                                        show: false
                                    },
                                    splitLine: {
                                        length: 60,
                                        lineStyle: {
                                            width: 5,
                                            color: "#061740"
                                        }
                                    },
                                    axisLabel: {
                                        show: false
                                    },
                                    pointer: {
                                        show: false
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            opacity: 0
                                        }
                                    },
                                    detail: {
                                        show: false
                                    },
                                    data: [{
                                        value: 0,
                                        name: ""
                                    }]
                                },
                                
                            ]
                        };
                        
                        //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
                        function getCirlPoint(x0, y0, r, angle) {
                            let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
                            let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
                            return {
                                x: x1,
                                y: y1
                            }
                        }
                        
                        function draw(){
                            angle = angle+3
                            myChart.setOption(option, true)
                           //window.requestAnimationFrame(draw);
                        }
                        
                        setInterval(function() {
                            //用setInterval做动画感觉有问题
                            draw()
                        }, 100);
                        
                        // myChart.setOption(option);  
                },
                //柱状图
                echartBar(){
                   var myChart = this.$echarts.init(this.$refs.echartBar);
                   var yList = [32, 58, 64, 75, 80, 90];
                   var xList = [2012, 2013, 2014, 2015, 2016, 2017];
                   var color = ['#CC1CAA', '#8D67FF', '#00FFFF', '#48DE13', '#FFC516', '#DC3E14', '#8E16F8'];
                   var xData = xList.map((item, index) => {
                       return {
                           value: item,
                           textStyle: {
                               color: color[index]
                           }
                       };
                   });
                   var dom = 800;
                   var barWidth = dom / 20;
                   var colors = [{
                           type: 'linear',
                           x: 0,
                           x2: 1,
                           y: 0,
                           y2: 0,
                           colorStops: [{
                               offset: 0,
                               color: '#FF3FDA'
                           }, {
                               offset: 0.5,
                               color: '#FF3FDA'
                           }, {
                               offset: 0.5,
                               color: '#CC1BAA'
                           }, {
                               offset: 1,
                               color: '#CC1BAA'
                           }]
                       },
                       {
                           type: 'linear',
                           x: 0,
                           x2: 1,
                           y: 0,
                           y2: 0,
                           colorStops: [{
                               offset: 0,
                               color: '#602CFF'
                           }, {
                               offset: 0.5,
                               color: '#602CFF'
                           }, {
                               offset: 0.5,
                               color: '#4915E6'
                           }, {
                               offset: 1,
                               color: '#4915E6'
                           }]
                       },
                       {
                           type: 'linear',
                           x: 0,
                           x2: 1,
                           y: 0,
                           y2: 0,
                           colorStops: [{
                               offset: 0,
                               color: '#00FFFF'
                           }, {
                               offset: 0.5,
                               color: '#00FFFF'
                           }, {
                               offset: 0.5,
                               color: '#11A6D0'
                           }, {
                               offset: 1,
                               color: '#11A6D0'
                           }]
                       },
                       {
                           type: 'linear',
                           x: 0,
                           x2: 1,
                           y: 0,
                           y2: 0,
                           colorStops: [{
                               offset: 0,
                               color: '#89FF5E'
                           }, {
                               offset: 0.5,
                               color: '#89FF5E'
                           }, {
                               offset: 0.5,
                               color: '#48DD12'
                           }, {
                               offset: 1,
                               color: '#48DD12'
                           }]
                       },
                       {
                           type: 'linear',
                           x: 0,
                           x2: 1,
                           y: 0,
                           y2: 0,
                           colorStops: [{
                               offset: 0,
                               color: '#FFD05C'
                           }, {
                               offset: 0.5,
                               color: '#FFD05C'
                           }, {
                               offset: 0.5,
                               color: '#DEA821'
                           }, {
                               offset: 1,
                               color: '#DEA821'
                           }]
                       },
                       {
                           type: 'linear',
                           x: 0,
                           x2: 1,
                           y: 0,
                           y2: 0,
                           colorStops: [{
                               offset: 0,
                               color: '#FF7853'
                           }, {
                               offset: 0.5,
                               color: '#FF7853'
                           }, {
                               offset: 0.5,
                               color: '#DB3E13'
                           }, {
                               offset: 1,
                               color: '#DB3E13'
                           }]
                       },
                       {
                           type: 'linear',
                           x: 0,
                           x2: 1,
                           y: 0,
                           y2: 0,
                           colorStops: [{
                               offset: 0,
                               color: '#AA48FF'
                           }, {
                               offset: 0.5,
                               color: '#AA48FF'
                           }, {
                               offset: 0.5,
                               color: '#8E15F8'
                           }, {
                               offset: 1,
                               color: '#8E15F8'
                           }]
                       }
                   ];
                  var option = {
                      backgroundColor: "#010d3a",
                       //标题
                       title: {
                           text: 'xxx历年业绩',
                           textStyle: {
                               color: '#00FFFF',
                               fontWeight: '800',
                               fontSize: `20`,
                           },
                           left: 'center',
                           top: '5%'
                       },
                       //提示框
                       tooltip: {
                           trigger: 'axis',
                           formatter: "{b} : {c}",
                           axisPointer: { // 坐标轴指示器，坐标轴触发有效
                               type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                           }
                       },
                       /**区域位置*/
                       //   grid: {
                       //       left: '10%',
                       //       right: '10%',
                       //       top: 80,
                       //       bottom: 40,
                       //     },
                       /**图例大小*/
                           //  legend: {
                           //   type: 'plain',
                           //   left: 0,
                           //   top: 20,
                           //   itemGap: 20,
                           //   itemWidth: 35,
                           //   itemHeight: 20
                           // },
                       //X轴
                       xAxis: {
                           name:'X',
                            nameTextStyle: {
                               color: '#FFFFFF',
                               padding: [0, 0, 0, 20]
                   
                             },
                           data: xData,
                           show: true,
                           type: 'category',
                           axisLine: {
                               show: true,
                               lineStyle: {
                                   color: 'rgba(255,255,255,1)',
                                    shadowColor:'rgba(255,255,255,1)',
                                   shadowOffsetX: '20',
                               },
                               symbol: ['none', 'arrow'],
                               symbolOffset: [0, 25]
                           },
                           splitLine: {
                               show: true,
                               lineStyle: {
                                   color: 'rgba(255,255,255,0.2)'
                               },
                           },
                           axisLabel: {
                               rotate: -30,
                               fontSize: 12,
                           },
                       },
                       yAxis: {
                           show: true,
                           splitNumber: 4,
                           axisLine: {
                               show: true,
                               lineStyle: {
                                   color: 'rgba(255,255,255,0.2)'
                               },
                           },
                           splitLine: {
                               show: true,
                               lineStyle: {
                                   color: 'rgba(255,255,255,0.2)'
                   
                               },
                           },
                           axisLabel: {
                               color: '#FFFFFF',
                           }
                       },
                       series: [{
                               type: 'bar',
                               barWidth: barWidth,
                               itemStyle: {
                                   normal: {
                                       color: function(params) {
                                           return colors[params.dataIndex % 7];
                                       }
                                   }
                               },
                               label: {
                                   show: true,
                                   position: [barWidth / 2, -(barWidth + 20)],
                                   color: '#ffffff',
                                   fontSize: 12,
                                   fontStyle: 'bold',
                                   align: 'center',
                               },
                               data: yList
                           },
                           {
                               z: 2,
                               type: 'pictorialBar',
                               data: yList,
                               symbol: 'diamond',
                               symbolOffset: [0, '50%'],
                               symbolSize: [barWidth, barWidth * 0.5],
                               itemStyle: {
                                   normal: {
                                       color: function(params) {
                                           return colors[params.dataIndex % 7];
                                       },
                                   }
                               },
                           },
                           {
                               z: 3,
                               type: 'pictorialBar',
                               symbolPosition: 'end',
                               data: yList,
                               symbol: 'diamond',
                               symbolOffset: [0, '-50%'],
                               symbolSize: [barWidth, barWidth * 0.5],
                               itemStyle: {
                                   normal: {
                                       borderWidth: 0,
                                       color: function(params) {
                                           return colors[params.dataIndex % 7].colorStops[0].color;
                                       },
                   
                                   }
                               },
                           },
                           {
                               z: 4,
                               type: 'pictorialBar',
                               symbolPosition: 'end',
                               data: yList,
                               symbol: 'circle',
                               symbolOffset: [0, -barWidth],
                               symbolSize: [barWidth * 0.5, barWidth * 0.5],
                               itemStyle: {
                                   normal: {
                                       borderWidth: 0,
                                       color: function(params) {
                                           return colors[params.dataIndex % 7].colorStops[0].color;
                                       },
                   
                                   }
                               },
                           },
                       ],
                   };
                            myChart.setOption(option, true)
                },
             
                },
        }
</script>

<style lang="scss" scoped>

.echart_body{
    display: flex;
}
.echartBox{
        height: 400px;
        width:50%;
        // flex:1;
        margin: 10px auto;
}
.echartBar{
       height: 400px;
        width:50%;
        // flex:1;
        margin: 10px auto;
}
</style>