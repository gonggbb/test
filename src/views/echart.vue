<template>
        <div>
                <div class="echartBox" ref="echartBox"></div>
                echart
        </div>
</template>

<script>
// import 'echarts-gl';
        export default {
                name:"echart",
                mounted () {
                        // console.log("this",this.$echarts,)
                        // setTimeout(() => {
                        // }, 200);
                        this.getData()
                },
                methods: {
                   getData(){
                      this.$axios({
                          method:"get",
                          url:"https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data-gl/asset/data/flights.json",
                          dataType:'json'
                      }).then(res=>{
                        let {data} =  res
                        // var option;
                        console.log("!!!!!!!!!!!",data)
                        var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
                        var myChart = this.$echarts.init(this.$refs.echartBox);
                          function getAirportCoord(idx) {
                              return [data.airports[idx][3], data.airports[idx][4]];
                          }
                          var routes = data.routes.map(function(airline) {
                              return [
                                  getAirportCoord(airline[1]),
                                  getAirportCoord(airline[2])
                              ];
                          });
                      
                          myChart.setOption({
                              backgroundColor: '#000',
                              globe: {
                                  baseTexture: ROOT_PATH + '/data-gl/asset/world.topo.bathy.200401.jpg',
                                  heightTexture: ROOT_PATH + '/data-gl/asset/bathymetry_bw_composite_4k.jpg',
                      
                                  shading: 'lambert',
                      
                                  light: {
                                      ambient: {
                                          intensity: 0.4
                                      },
                                      main: {
                                          intensity: 0.4
                                      }
                                  },
                      
                                  viewControl: {
                                      autoRotate: false
                                  }
                              },
                              series: {
                      
                                  type: 'lines3D',
                      
                                  coordinateSystem: 'globe',
                      
                                  blendMode: 'lighter',
                      
                                  lineStyle: {
                                      width: 1,
                                      color: 'rgb(50, 50, 150)',
                                      opacity: 0.1
                                  },
                      
                                  data: routes
                              }
                          });
                        // myChart.setOption(option);  
                      }).catch(err=>{
                        console.log(err)
                      })
                   },
                 name() {
                      var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
                //       var chartDom = document.getElementById('main');
                        console.log("！！！！！！！！！！！",this.$refs.echartBox,)
                      var option;
                      $.getJSON(ROOT_PATH + '/data-gl/asset/data/flights.json', function(data) {
                          var myChart = this.$echarts.init(this.$refs.echartBox);
                          function getAirportCoord(idx) {
                              return [data.airports[idx][3], data.airports[idx][4]];
                          }
                          var routes = data.routes.map(function(airline) {
                              return [
                                  getAirportCoord(airline[1]),
                                  getAirportCoord(airline[2])
                              ];
                          });
                      
                          myChart.setOption({
                              backgroundColor: '#000',
                              globe: {
                                  baseTexture: ROOT_PATH + '/data-gl/asset/world.topo.bathy.200401.jpg',
                                  heightTexture: ROOT_PATH + '/data-gl/asset/bathymetry_bw_composite_4k.jpg',
                      
                                  shading: 'lambert',
                      
                                  light: {
                                      ambient: {
                                          intensity: 0.4
                                      },
                                      main: {
                                          intensity: 0.4
                                      }
                                  },
                      
                                  viewControl: {
                                      autoRotate: false
                                  }
                              },
                              series: {
                      
                                  type: 'lines3D',
                      
                                  coordinateSystem: 'globe',
                      
                                  blendMode: 'lighter',
                      
                                  lineStyle: {
                                      width: 1,
                                      color: 'rgb(50, 50, 150)',
                                      opacity: 0.1
                                  },
                      
                                  data: routes
                              }
                          });
                     });
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