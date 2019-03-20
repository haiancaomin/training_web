<template>
  <div class="container">
    <div class="contact">
      <h1 class="contact-title">联系我们</h1>
      <div class="contact-content">content</div>
      <div id="map"></div>
    </div>
  </div>
</template>
<script>
// import BMap from "BMap";
export default {
  data() {
    return {};
  },
  mounted() {
    this.initMap();
  },
  methods: {
    // 初始化地图
    initMap() {
      var map = new BMap.Map("map");
      var point = new BMap.Point(120.9622853521,31.9312175342);
      map.centerAndZoom(point, 18);
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker);
      marker.setAnimation(BMAP_ANIMATION_BOUNCE); 
      //添加地图类型控件
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      map.setCurrentCity("南通市"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true);

      // map.addEventListener("click", function(e) {
      //   map.clearOverlays();
      //   var lng = e.point.lng;
      //   var lat = e.point.lat;
      //   var p1 = new BMap.Point(lng, lat);
      //   var marker = new BMap.Marker(p1); // 创建标注
      //   map.addOverlay(marker); // 将标注添加到地图中
      //   $("#locationNum").text(lng + "," + lat);
      //   $("#location")
      //     .val(lng + "," + lat)
      //     .change(); //赋值并触发经纬度输入框change事件，用于表单验证
      // });
    }
  }
};
</script>
<style scoped>
.container {
  width: 1100px;
  padding: 60px 15px 15px;
  margin: 0 auto;
}
.contact {
  padding: 20px;
  background: #fff;
  margin-top: 20px;
}
.contact-title {
  font-size: 18px;
  line-height: 40px;
  border: 1px solid #e4e7ed;
  background: #e4e7ed;
  padding: 0 15px;
  border-radius: 3px;
}
.contact-content {
  padding: 20px 0;
}
#map {
  height: 450px;
}
</style>


