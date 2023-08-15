<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()

const { isSupported, data, file, fileName, fileMIME, fileSize, fileLastModified, create, open, save, saveAs, updateData } = useFileSystemAccess({})
</script>

<template>
  <div>
    <UButton label="create" @click="create" />
    <UButton label="open" @click="open" />
    <UButton label="save" @click="save" />
    <UButton label="saveAs" @click="saveAs" />
    <UButton label="updateData" @click="updateData" />

    <div>
      <div>isSupported: {{ isSupported }}</div>
      <div>data: <input v-model="data" type="text"></div>
      <div>file: {{ file }}</div>
      <div>fileName: {{ fileName }}</div>
      <div>fileMIME: {{ fileMIME }}</div>
      <div>fileSize: {{ fileSize }}</div>
      <div>fileLastModified: {{ fileLastModified }}</div>
    </div>
  </div>
</template>
