<script setup lang="ts">
const props = withDefaults(defineProps<{
  width: number
  height?: number
}>(), {
  width: 100,
})
</script>

<template>
  {{ props }}
</template>
