<template>
  <div>
    <el-container>
      <el-header>
        <!-- 导航菜单 -->
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          active-text-color="#409EFF"
          router="true"
        >
          <el-menu-item index="1" route="/index">主页</el-menu-item>
          <el-menu-item index="2" route="/user">用户管理</el-menu-item>
          <el-menu-item index="3" route="/msgs">消息中心</el-menu-item>
          <el-menu-item index="4" route="/order">订单管理</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
</style>
