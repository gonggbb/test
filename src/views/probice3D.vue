<template>
        <div class="shanxi3D">
             <!-- <p>geoJSON获取地址   <a :href="href">跳转地址</a></p> -->
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
                                // href:' http://datav.aliyun.com/tools/atlas/#&lat=33.521903996156105&lng=104.29849999999999&zoom=4',
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
                               map: 'shanxi',
                               boxWidth:50,
                               boxHeight:6,
                               boxDepth:90,
                               // environment: 'auto',
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
                               },
                              // 鼠标旋转，缩放等视觉设置
                               viewControl: {// 用于鼠标的旋转，缩放等视角控制。
                                //  projection: 'orthographic',
                                //  orthographicSize: 300, //控制地图大小

                                  projection: 'perspective',// 投影方式，默认为透视投影'perspective'，也支持设置为正交投影'orthographic'。
                                  
                                  autoRotate: true,// 是否开启视角绕物体的自动旋转查看。[ default: false ]
                                  
                                  autoRotateDirection: 'cw',// 物体自传的方向。默认是 'cw' 也就是从上往下看是顺时针方向，也可以取 'ccw'，既从上往下看为逆时针方向。
                                  
                                  autoRotateSpeed: 10,// 物体自传的速度。单位为角度 / 秒，默认为10 ，也就是36秒转一圈。
                                  
                                  autoRotateAfterStill: 3,// 在鼠标静止操作后恢复自动旋转的时间间隔。在开启 autoRotate 后有效。[ default: 3 ]
                                  
                                  damping: 0,// 鼠标进行旋转，缩放等操作时的迟滞因子，在大于等于 1 的时候鼠标在停止操作后，视角仍会因为一定的惯性继续运动(旋转和缩放)。[ default: 0.8 ]
                                  
                                  rotateSensitivity: 1,// 旋转操作的灵敏度，值越大越灵敏。支持使用数组分别设置横向和纵向的旋转灵敏度。默认为1, 设置为0后无法旋转。rotateSensitivity: [1, 0]——只能横向旋转； rotateSensitivity: [0, 1]——只能纵向旋转。
                                  
                                  zoomSensitivity: 1,// 缩放操作的灵敏度，值越大越灵敏。默认为1,设置为0后无法缩放。
                                  
                                  panSensitivity: 1,// 平移操作的灵敏度，值越大越灵敏。默认为1,设置为0后无法平移。支持使用数组分别设置横向和纵向的平移灵敏度
                                  
                                  panMouseButton: 'left',// 平移操作使用的鼠标按键，支持：'left' 鼠标左键(默认);'middle' 鼠标中键 ;'right' 鼠标右键(注意：如果设置为鼠标右键则会阻止默认的右键菜单。)
                                  
                                  rotateMouseButton: 'left',// 旋转操作使用的鼠标按键，支持：'left' 鼠标左键;'middle' 鼠标中键(默认);'right' 鼠标右键(注意：如果设置为鼠标右键则会阻止默认的右键菜单。)
                                  
                                  distance: 200,// [ default: 100 ] 默认视角距离主体的距离，对于 grid3D 和 geo3D 等其它组件来说是距离中心原点的距离,对于 globe 来说是距离地球表面的距离。在 projection 为'perspective'的时候有效。
                                  
                                  minDistance: 40,// [ default: 40 ] 视角通过鼠标控制能拉近到主体的最小距离。在 projection 为'perspective'的时候有效。
                                  
                                  maxDistance: 400,// [ default: 400 ] 视角通过鼠标控制能拉远到主体的最大距离。在 projection 为'perspective'的时候有效。
                                  
                                  alpha: 40, // 视角绕 x 轴，即上下旋转的角度。配合 beta 可以控制视角的方向。[ default: 40 ]
                                  
                                  beta: 15,// 视角绕 y 轴，即左右旋转的角度。[ default: 0 ]
                                  
                                  minAlpha: -360,// 上下旋转的最小 alpha 值。即视角能旋转到达最上面的角度。[ default: 5 ]
                                  
                                  maxAlpha: 360,// 上下旋转的最大 alpha 值。即视角能旋转到达最下面的角度。[ default: 90 ]
                                  
                                  minBeta: -360,// 左右旋转的最小 beta 值。即视角能旋转到达最左的角度。[ default: -80 ]
                                  
                                  maxBeta: 360,// 左右旋转的最大 beta 值。即视角能旋转到达最右的角度。[ default: 80 ]
                                  
                                  center: [0,0,10],// 视角中心点，旋转也会围绕这个中心点旋转，默认为[0,0,0]。x,y,z
                                  
                                  animation: true,// 是否开启动画。[ default: true ]
                                  
                                  animationDurationUpdate: 1000,// 过渡动画的时长。[ default: 1000 ]
                                  
                                  animationEasingUpdate: 'cubicInOut'// 过渡动画的缓动效果。[ default: cubicInOut ]
                                  
                                  },                                  
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
                           //.getZr()是监听的是整块地图画布。
                           initEcharts.getZr().on('click', function(e) {//设置点击事件
                              //  console.log( me.$refs.container.firstElementChild)
                               let isinside = me.$refs.container.firstElementChild.style.cursor;
	                             if(me.area!==''&&isinside=="pointer"){
                                  // console.log(me.area)
                                 // query类似 get, 跳转之后页面 url后面会拼接参数,类似?id=1, 非重要性的可以这样传, 密码之类还是用params刷新页面id还在
                                 //  params类似 post, 跳转之后页面 url后面不会拼接参数 , 但是刷新页面id 会消失
                                 if(me.area=="吕梁市"){
                                    me.$router.push({name:'city3D',params: {name:me.area}})
                                 }
                               }
                           })
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