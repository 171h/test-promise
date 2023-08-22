<script setup lang="ts">
import { UnderlineType } from 'docx'

const props = withDefaults(defineProps<{
  line?: UnderlineType
}>(), {
  line: UnderlineType.NONE,
})

const emit = defineEmits<{
  (e: 'change', value: UnderlineType): void
}>()

const lines = [
  ...Object.values(UnderlineType),
]
</script>

<template>
  <USelectMenu
    :model-value="props.line"
    :options="lines"
    @update:model-value="emit('change', $event)"
  />
</template>
