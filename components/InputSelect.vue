<script setup lang="ts">
const props = defineProps<{
  modelValue?: string | { [key: string]: any }
  options?: string[] | { [key: string]: any }[]
  valueAttribute?: string
}>()
const emit = defineEmits<{
  (e: 'change', value: string): void
}>()

const selected = ref(typeof props.modelValue === 'object' ? props.modelValue.value : props.modelValue)
</script>

<template>
  <USelectMenu
    v-model="selected"
    :options="options"
    :value-attribute="valueAttribute"
    @update:model-value="emit('change', selected)"
  >
    <template #label>
      <UInput
        v-model="selected"
        size="2xs"
        variant="none"
        @blur="emit('change', selected)"
      />
    </template>
  </USelectMenu>
</template>
