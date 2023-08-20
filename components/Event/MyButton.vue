<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
  count?: number
}>()
defineEmits<{
  (e: 'increaseBy', value: string): void
}>()
</script>

<template>
  <div>
    <h2>MyButton-count: {{ count }}</h2>
    <button @click="$emit('increaseBy', 1)">
      Increate by 1
    </button>
  </div>
</template>
