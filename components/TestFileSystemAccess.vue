<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
}>()

const test = useFileSystemAccess()

const fsa = useFileSystemAccess({
  dataType: 'ArrayBuffer',
  types: [
    {
      accept: { 'application/g-zip': ['.mddoc'] },
      description: 'mddoc 文件',
    },
  ],
  excludeAcceptAllOption: true,
})

const data = fsa.data
const text = computed({
  get: () => new TextDecoder().decode(data.value as ArrayBuffer),
  set: (v) => {
    data.value = new TextEncoder().encode(v)
  },
})
const u8 = computed(() => new Uint8Array(data.value as ArrayBuffer))
</script>

<template>
  <div>
    <UButton label="create" @click="fsa.create" />
    <UButton label="open" @click="fsa.open" />
    <UButton label="save" @click="fsa.save" />
    <UButton label="saveAs" @click="fsa.saveAs" />
    <UButton label="updateData" @click="fsa.updateData" />
    <UButton label="console" @click="console.dir(fsa)" />
    <UButton label="console data" @click="console.log(data)" />
    <UButton label="console u8" @click="console.log(u8)" />

    <div>
      <div>isSupported: {{ fsa.isSupported }}</div>
      <div>data: <input v-model="text" type="text"></div>
      <div>file: {{ JSON.stringify(fsa.file) }}</div>
      <div>fileName: {{ fsa.fileName }}</div>
      <div>fileMIME: {{ fsa.fileMIME }}</div>
      <div>fileSize: {{ fsa.fileSize }}</div>
      <div>fileLastModified: {{ fsa.fileLastModified }}</div>
    </div>
  </div>
</template>
