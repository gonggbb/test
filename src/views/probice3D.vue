<template>
        <div class="shanxi3D">
             <p>geoJSON获取地址   <a :href="href">跳转地址</a></p>
             <div id="echarts" ref="container"></div>
        </div>
</template>

<script>
  import shanJson from '../json/shanxi.json';
   import  'echarts-gl';
        export default {
                data() {
                        return {
                               	option: {},
                                        href:' http://datav.aliyun.com/tools/atlas/#&lat=33.521903996156105&lng=104.29849999999999&zoom=4',
                        }
                },
                methods: {
                      init() {
				let me = this;

                           var barData = [
                             {
                               "name": "太原市",
                               "value": [
                                 112.48699,
                                 37.94036,
                                 200
                               ]
                             }
                           ];
                           this.$echarts.registerMap('shanxi', shanJson);
                           me.option = {
                             title: {
                               text: '山西省3D地图',
                               left: 'center',
                               top: 20
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
                               map: 'shanxi',
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
                                 name:'太原市',
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
			}

		},
		created() {
		},
		mounted() {
			this.$nextTick(() => {
				this.init();
			})
		},
                
        }
</script>

<style lang="scss" scoped>
.shanxi3D{
       background:#000066;
       opacity: 0.8;
}
#echarts {
		width: 100%;
		height: 500px;
	}
</style>