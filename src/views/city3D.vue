<template>
        <div class="lvliang3D">
             <div id="echarts" ref="container"></div>
        </div>
</template>

<script>
  import lvliang from '../json/lvliang.json';
   import  'echarts-gl';
        export default {
                data() {
                        return {
                               	option: {},
                        }
                },
                methods: {
                      init() {
		           let me = this;
                           var barData = [
                             {
                               "name": "离石区",
                               "value": [
                                 111.126742,
                                 37.531343,
                                 200
                               ]
                             }
                           ];
                           this.$echarts.registerMap('lvliang', lvliang);
                           me.option = {
                             title: {
                               text: '吕梁市3D地图',
                               left: 'center',
                               top: 20,
                               textStyle: {
                                 color: "rgba(56, 29, 220, 1)"
                              },
                             },
                             legend:{
                               show:true,
                               right:10,
                               top:10
                             },
                             tooltip:{
                               show:true,
                               formatter:function(params){
                                 let value = params.data.value;
                                 return params.seriesName + ':'+ value[2];
                               }
                             },
                             geo3D: {
                               map: 'lvliang',
                               boxWidth:50,
                               boxHeight:6,
                               boxDepth:90,
                               // environment: 'auto',
                               //鼠标旋转，缩放等视觉设置
                               viewControl: {
                                 // center: [-10, 0, 10]
                               },
                               //光源的设置
                               light: {
                                 main: {
                                   intensity: 1,
                                   shadow: true,
                                   alpha:150,
                                   beta: 70
                                 },
                                 ambient: {
                                   intensity: 0
                                 }
                               },
                               //地面的背景颜色
                               groundPlane: {
                                 show: true,
                                 color:'transparent'
                               },
                               //特效设置
                               postEffect: {
                                 enable:false
                               },
                               //标签样式
                               label: {
                                 show:true,
                                 formatter:function(params){
                                   var content='',
                                     content=params.name;
                                   return content;
                                 },
                                 distance:0,
                                 textStyle:{
                                   color:'#ffffff',
                                   fontWeight : 'normal',
                                   fontSize :12,
                                   backgroundColor: 'rgba(255,255,255,0)'
                                 },
                               },
                               //地图样式 ===》地图各省市区的颜色，边界
                               itemStyle: {
                                 color:'#73a4ff',
                                 borderColor: 'rgb(62,215,213)',
                                 borderWidth: 1
                               },
                               //鼠标 hover 高亮时图形和标签的样式
                               emphasis:{
                                 label:{
                                   formatter: function (params) {
		                              	me.area = params.name;
                                  //  console.log(me.area )
		                              	return params.name;
		                              },
                                   show:true,
                                   distance:10
                                 },
                                 itemStyle: {
                                   color:'#ffa8cc',
                                 }
                               }
                   
                   
                             },
                   
                             series: [
                               {
                                 type: 'bar3D',
                                 name:'离市区',
                                 coordinateSystem: 'geo3D',
                                 itemStyle: {
                                   color: 'red',
                                   opacity: 1
                                 },
                                 emphasis:{
                                   label:{
                                     show:false,
                                   }
                                 },
                                 data: barData,
                               }
                             ]
                           };
                   
                           let initEcharts = this.$echarts.init(me.$refs.container);
                           initEcharts.setOption(me.option);
                           //.getZr()是监听的是整块地图画布。
                           initEcharts.getZr().on('click', function(e) {//设置点击事件
                               console.log( me.$refs.container.firstElementChild)
                               let isinside = me.$refs.container.firstElementChild.style.cursor;
	                             if(me.area!==''&&isinside=="pointer"){
	                             	// setmapArea(area);//setState(我用的是hooks)
                                  console.log(me.area)
	                             }
                           })
			}

		},
		created() {
		},
		mounted() {
			this.$nextTick(() => {
				                            this.init();
                                switch(this.$route.params.name){
                                    case '吕梁市': 
				                            this.init();
                                     break
                                }
			})
		},
                
        }
</script>

<style lang="scss" scoped>
.lvliang3D{
       background:#000066;
       opacity: 0.8;
}
#echarts {
		width: 100%;
		height: 500px;
	}
</style>