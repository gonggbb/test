<template>
  <div class="home">
    <HelloWorld msg="子组件"/>
    <!-- 显示标记点 -->
     <baidu-map :center="markerPoint " zoom="17" style="height:500px"  @ready="handler">
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
     </baidu-map>
      <!-- <baidu-map :center="markerPoint" zoom="17" style="height:500px">
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
       show:false
    }
  },
  mounted () {
   // this.name();
  },
  methods: {
     infoWindowClose () {
      this.show = false
    },
    infoWindowOpen () {
      this.show = true
    }
  },
}
</script>
