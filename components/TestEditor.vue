<script setup lang="ts">
import { Pane, Splitpanes } from 'splitpanes'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

const show = ref({
  editor: true,
  renderer: true,
})

const mdStr = ref('1234')

// editor init =============================
const container = ref<HTMLDivElement>()
let editor: monaco.editor.IStandaloneCodeEditor
// editor config
const theme = ref('vs') // 'vs-dark'
const readOnly = ref(false)

onNuxtReady(() => {
  // scroll sync
  // scrollSync.value = new ScrollSync({
  //   relative: true, // [Boolean] Default value, allow to be empty.
  //   x: false,
  //   doms: document.querySelectorAll('.scroll-container') as unknown as HTMLElement[], // [Array] These elements must set scroll attributes.
  // })

  editor = monaco.editor.create(document.getElementById('editor-container') as HTMLDivElement, {
    value: mdStr.value as string,
    language: 'markdown',
    // theme: theme.value,
    automaticLayout: true,
    // readOnly: readOnly.value,
    // roundedSelection: false,
  })
  // editor.onDidChangeModelContent(async () => {
  //   const newStr = editor?.getModel()?.getValue() as string
  //   mdStr.value = newStr
  // })
})
</script>

<template>
  <div>
    <div id="editor-container" ref="container" class="h-full w-full" />
  </div>
</template>
