<template>
  <h1 ref="titleRef">
    {{ props.msg }}
  </h1>
  <p>
    Recommended IDE setup:
    <a
      href="https://code.visualstudio.com/"
      target="_blank"
    >VS Code</a>
    +
    <a
      href="https://github.com/johnsoncodehk/volar"
      target="_blank"
    >Volar</a>
  </p>
  <p>See <code>README.md</code> for more information.</p>
  <p>
    <a
      href="https://vitejs.dev/guide/features.html"
      target="_blank"
    >
      Vite Docs
    </a>
    |
    <a
      href="https://v3.vuejs.org/"
      target="_blank"
    >Vue 3 Docs</a>
  </p>
  <button
    type="button"
    @click="count++"
  >
    count is: {{ count }}
  </button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup lang="ts">
import { onMounted, PropType, ref } from 'vue'

interface User {
  name: String,
  age: Number
}

const props = defineProps({
  msg: {
    type: String,
    default: ''
  },
  userObj: {
    type: Object as PropType<User>,
    default: () => {} // 提供一个默认值或者定义成必填项
  }
})

const count = ref(0)
const foo = ref<{a:Number, b: String} | null>(null)
foo.value = {
  a: 1,
  b: ''
}
const titleRef = ref<HTMLHeadElement|null>(null)

onMounted(() => {
  console.log('titleRef', titleRef.value)
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
