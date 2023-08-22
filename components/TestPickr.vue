<script setup lang="ts">
import Pickr from '@simonwep/pickr'

import '@simonwep/pickr/dist/themes/classic.min.css'
import '@simonwep/pickr/dist/themes/monolith.min.css'
import '@simonwep/pickr/dist/themes/nano.min.css'

interface Props {
  theme?: Pickr.Theme
  width?: string
  height?: string
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'monolith',
})

const emit = defineEmits<{
  (e: 'init', instance: Pickr): void
  (e: 'hide', instance: Pickr): void
  (e: 'show', color: Pickr.HSVaColor, instance: Pickr): void
  (e: 'save', color: Pickr.HSVaColor, instance: Pickr): void
  (e: 'clear', instance: Pickr): void
  (e: 'change', color: Pickr.HSVaColor, source: string, instance: Pickr): void
  (e: 'changestop', source: string, instance: Pickr): void
  (e: 'cancel', instance: Pickr): void
  (e: 'swatchselect', color: Pickr.HSVaColor, instance: Pickr): void
}>()

const pickrRef = ref()
const pickr = ref<Pickr>()

function show() {
  pickr.value?.show()
}

onNuxtReady(() => {
  if (!pickr.value) {
    pickr.value = Pickr.create({
      el: pickrRef.value,
      theme: props.theme,
      default: '#000000',

      swatches: [
        '#000000',
        '#ffffff',
        '#E7E6E6',
        '#44546A',
        '#4472C4',
        '#ED7D31',
        '#A5A5A5',
        '#FFC000',
        '#5B9BD5',
        '#70AD47',
      ],

      components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
          hex: true,
          rgba: true,
          // hsla: true,
          // hsva: true,
          // cmyk: true,
          input: true,
          // clear: true,
          save: true,
          cancel: true,
        },
      },
      position: 'bottom-middle',
      useAsButton: false,
      inline: false,
      lockOpacity: true,
      i18n: {
        'btn:save': '确定',
        'btn:clear': '清除',
        'btn:cancel': '取消',
      },
    })
  }

  pickr.value.on('init', (instance: Pickr) => {
    emit('init', instance)
  }).on('hide', (instance: Pickr) => {
    emit('hide', instance)
  }).on('show', (color: Pickr.HSVaColor, instance: Pickr) => {
    emit('show', color, instance)
  }).on('save', (color: Pickr.HSVaColor, instance: Pickr) => {
    emit('save', color, instance)
  }).on('clear', (instance: any) => {
    emit('clear', instance)
  }).on('change', (color: Pickr.HSVaColor, source: any, instance: Pickr) => {
    emit('change', color, source, instance)
  }).on('changestop', (source: any, instance: Pickr) => {
    emit('changestop', source, instance)
  }).on('cancel', (instance: Pickr) => {
    emit('cancel', instance)
  }).on('swatchselect', (color: Pickr.HSVaColor, instance: Pickr) => {
    emit('swatchselect', color, instance)
  })
})
</script>

<template>
  <div class="inline w-fit" @click.prevent="show">
    <slot />
    <div ref="pickrRef" />
  </div>
</template>

<style>
.pickr {
  display: inline-block;
}
.pickr .pcr-button {
  padding: 0 !important;
  width: 32px;
  height: 32px;
  background-color: transparent;

  display: none;
}
.pcr-app .pcr-interaction {
  justify-content: space-around;
  gap: 5px;
}
</style>
