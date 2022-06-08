<template>
  <h1>首页123</h1>
  <div>{{ store.state.count }}</div>
  <div>{{ $store.state.foo }}</div>
</template>

<script lang="ts" setup>
import user from '@/api/user'
import { useStore } from '../../store'
const store = useStore()
console.log(store.state, user)
</script>

<style lang="scss" scoped></style>
