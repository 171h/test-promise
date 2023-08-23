<script setup lang="ts">
const props = defineProps<{
  modelValue?: string | { [key: string]: any }
  options?: string[] | { [key: string]: any }[]
}>()
const emit = defineEmits<{
  (e: 'change', value: string): void
}>()

const value = computed(() => {
  if (typeof props.modelValue === 'string')
    return props.modelValue

  if (typeof props.modelValue === 'object')
    return props.modelValue.label

  return ''
})
</script>

<template>
  <USelectMenu
    :options="options"
    value-attribute="value"
    @update:model-value="emit('change', $event)"
  >
    <UInput
      :value="value"
      type="text"
      @blur="emit('change', $event.target.value)"
    />
  </USelectMenu>
</template>
