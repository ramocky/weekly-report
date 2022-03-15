<template>
  <div class="main">
    <div class="header">
      <div class="user-name">xxxxxx公司</div>
      <div class="header-left">
        <div class="header-left-item">账户设置</div>
        <div class="header-left-item">退出登录</div>
      </div>
    </div>
    <el-container class="layout-container">
      <el-aside width="200px" class="aside">
        <el-menu
          active-text-color="#E6A23C"
          background-color="rgb(238, 241, 246)"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#303133"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title><span>item one</span></template>
            <el-menu-item index="1">item one</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title><span>item one</span></template>
            <el-menu-item index="1">item one</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title><span>item one</span></template>
            <el-menu-item index="1">item one</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
    </el-container>
  </div>
</template>
<script setup></script>
<style scoped>
.layout-container {
  height: 97%;
}
.main {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.aside {
  background-color: rgb(238, 241, 246);
}
.header {
  background-color: #303133;
  display: flex;
  justify-content: space-between;
  padding: 1.5% 5%;
  height: 2%;
  align-items: center;
}
.header-left {
  display: flex;
  color: white;
}
.header-left-item {
  margin-left: 100px;
}
.user-name {
  color: #e6a23c;
}
</style>
