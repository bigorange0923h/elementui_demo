<!-- 首页 -->
<template>
  <div>
    <el-carousel indicator-position="outside" type="card" height="800px">
      <el-carousel-item v-for="item in banners" :key="item">
        <img :src="item" style="width: 100%; height: 100%" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      activeIndex: "1",
      banners: [
        require("../assets/indexImgs/1.jpg"),
        require("../assets/indexImgs/2.jpg"),
        require("../assets/indexImgs/3.jpg"),
        require("../assets/indexImgs/4.jpg"),
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  components: {},
  created() {},
};
</script>

<style  scoped>
</style>
