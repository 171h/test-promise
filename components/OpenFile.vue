<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()

const { files, onChange, open, reset } = useFileDialog({ accept: '.mddoc' })
onChange((files) => {
  // eslint-disable-next-line no-console
  console.log('files', files)
})
</script>

<template>
  <div>
    <UButton label="open file" @click="open" />
  </div>
</template>
