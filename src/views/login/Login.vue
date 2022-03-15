<template>
  <div>
    <el-row class="mb-4">
      <el-button @click="login">Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-row>
  </div>
</template>

<script setup>
import router from "@/router";
function login() {
  router.push({ path: "main" });
}
</script>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login.vue",
};
</script>

<style scoped></style>
