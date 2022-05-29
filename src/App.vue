<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <HelloWorld
    ref="helloWorldRef"
    msg="Hello Vue 3 + TypeScript + Vite"
  />
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
// 组件的模板引用类型声明
const helloWorldRef = ref<InstanceType<typeof HelloWorld> | null>(null)
onMounted(() => {
  console.log('helloWorldRef', helloWorldRef.value)
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
