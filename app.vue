<script setup lang="ts">
import { Logger } from '@171h/log'

const props = defineProps<{
  modelValue?: boolean
}>()

const logger = new Logger('app.vue')

function test(...value: any) {
  logger.info('test:value', value)
}
</script>

<template>
  <div class="mx-10 mb-96">
    <!-- <TestTabs /> -->
    <!-- <TestStore /> -->
    <!-- <UButton variant="ghost" label="切换菜单栏" icon="i-bx-adjust" /> -->
    <!-- <UIcon name="i-bx-dock-left" /> -->
    <!-- <UButton variant="ghost" label="切换菜单栏" icon="i-heroicons-light-bulb" /> -->
    <!-- <UIcon name="i-heroicons-light-bulb" /> -->

    <!-- <TestSplitpanes /> -->
    <!-- <TailwindFlex /> -->
    <!-- <NuxtWelcome /> -->
    <!-- <Ui /> -->
    <!-- <TestEditor /> -->
    <!-- <TestFileDialog /> -->
    <!-- <TestFileSystemAccess /> -->
    <!-- <EventDemo /> -->
    <!-- <TestPickr
      theme="nano"
      class="!w-24"
      @change="test"
      @save="test"
    >
      <UInput :ui="{ wrapper: 'test-wrapper', base: 'test-base !p-0' }" type="color" />
    </TestPickr> -->
    <div class="w-32">
      <!-- <LinePicker
        @change="test"
      /> -->
      <InputSelect
        :options="[2, 1.5, 1, 0.9, 0.8, 0.66, 0.5, 0.33].map(item => ({ label: `${item * 100}%`, value: item }))"
        :model-value="{ label: '66%', value: 0.66 }"
        @change="test"
      />
    </div>
  </div>
</template>
