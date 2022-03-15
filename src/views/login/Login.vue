<template>
  <div>
    <el-button type="primary" @click="login">确定</el-button>
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
