<template>
  <div class="home">
    <HelloWorld msg="子组件"/>
    <!-- 显示标记点 -->
     <baidu-map :center="markerPoint " :zoom="zoom" style="height:500px"   :scroll-wheel-zoom="true"
          @ready="mapHandler">
          <bm-marker :position="markerPoint" :dragging="true" @click="infoWindowOpen">
            <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen" style="font-size:13px">
               山西省太原市<br><br>
               地址：太原市
            </bm-info-window>
        </bm-marker>
        <!-- 地图;类型 -->
        <bm-map-type
        :map-types="['BMAP_HYBRID_MAP','BMAP_NORMAL_MAP']"
        anchor="BMAP_ANCHOR_TOP_RIGHT">
        </bm-map-type>
        <!-- 城市 搜索 列表 -->
        <bm-city-list anchor="BMAP_ANCHOR_TOP_RIGHT" :offset="{width:100,height:10}"></bm-city-list>
        <!-- 定位 -->
          <bm-geolocation
            anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
            :showAddressBar="true"
            :autoLocation="true"
          ></bm-geolocation>
       <div v-for="marker in markers" :key="marker.lng">
        <bm-marker :position="{lng: marker.lng, lat: marker.lat}" @click="markerClick(marker)">
        </bm-marker>
         <!-- 名字 -->
        <bm-label
          :content="marker.content"
          :offset="{width:-55,height:-65}"
          :position="{lng: marker.lng, lat: marker.lat}"
          :labelStyle="{border:'1px solid #6ea4cd', padding:'8px',fontWeight: '600',fontSize:'14px',cursor: 'pointer'}"
          :title="marker.content"
          @click="markerClick(marker)"
        />
      </div>
     </baidu-map>
      <!-- <baidu-map :center="{lng:112.59328, lat:37.867542}" :zoom="17" style="height:500px">
     </baidu-map> -->
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
       markerPoint:{lng:112.59328, lat:37.867542},
       show:false,
       markers:[],
       zoom:17
    }
  },
  mounted () {
   // this.name();
      this.markers = [{
        lng: 116.404,
        lat: 39.915,
        content:"TCL液晶产业园"
      }, {
        lng: 115.504,
        lat: 39.915,
        content:"TCL产业园"
      },
    {lng:112.59328, lat:37.867542,content:"太原站"}]
  },
  methods: {
     infoWindowClose () {
      this.show = false
    },
    infoWindowOpen () {
      this.show = true
    },
    //自动获取room层级

    mapHandler({BMap, map}){
        //  console.log("!!!!!!",BMap,map)
        // 自动获取展示的比例,点渲染出来
        var view = map.getViewport(eval(this.markers))  
        //  console.log("222222",view)
        // this.markers 是我们知道的经纬度。可以有多个。全部以数组形式放在里面。
        this.zoom = view.zoom;
        this.center = view.center;
    },
    markerClick(e){
      console.log(e)
    }
  },
}
</script>
