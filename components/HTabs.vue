<script setup>
const items = ref([{
  label: 'Introduction',
  icon: 'i-heroicons-information-circle',
  content: 'This is the content shown for Tab1',
}, {
  label: 'Installation',
  icon: 'i-heroicons-arrow-down-tray',
  content: 'And, this is the content for Tab2',
}, {
  label: 'Theming',
  icon: 'i-heroicons-eye-dropper',
  content: 'Finally, this is the content for Tab3',
}])
const selected = ref(0)
const index = ref(1)
function add() {
  items.value.push({
    label: `New Tab${index.value}`,
    icon: 'i-heroicons-plus-circle',
    content: `New Content${index.value}`,
  })
  index.value++
  nextTick(() => {
    selected.value = items.value.length - 1
    const list = document.querySelectorAll('.test-list-base')
    list.forEach((el) => {
      el.scrollLeft = el.scrollWidth
    })
  })
}

const inputTo = ref(0)
function switchTo() {
  selected.value = inputTo.value
}
</script>

<template>
  <div class="flex">
    <UButton
      variant="solid"
      label="Switch To"
      @click="switchTo"
    />
    <UInput v-model="inputTo" />
  </div>
  <UButton
    variant="solid"
    label="Add"
    @click="add"
  />
  <UTabs
    v-model="selected"
    :ui="{
      wrapper: 'test-wrapper',
      container: 'test-container !m-0 bg-red-400',
      base: 'test-base',
      list: {
        base: 'test-list-base !inline-flex rounded-none gap-x-0.5 !p-0 overflow-x-auto overflow-y-hidden',
        marker: {
          wrapper: 'test-list-marker-wrapper',
          base: 'test-list-marker-base absolute h-0.5 z-50 rounded-none bg-primary',
        },
        tab: {
          base: 'test-list-tab-base !max-w-3xs w-fit h-full bg-gray-200 rounded-none',
          padding: 'pl-2 pr-1',
          active: 'bg-red-400',
        },
      },
    }"
    :items="items"
    class="w-full"
  >
    <template #default="{ item, index, selected }">
      <div class="flex items-center gap-2 relative truncate">
        <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />

        <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>

        <span v-if="selected" class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400" />
        <UButton
          icon="i-heroicons-x-mark"
          :padded="false"
          variant="ghost"
        />
      </div>
    </template>
  </UTabs>

  <hr>

  <UTabs
    v-model="selected"
    orientation="vertical"
    :ui="{
      wrapper: 'test-wrapper flex',
      container: 'test-container !m-0 bg-red-400',
      base: 'test-base',
      list: {
        base: 'test-list-base !inline-flex flex-col !w-fit rounded-none gap-x-0.5 !p-0',
        marker: {
          wrapper: 'test-list-marker-wrapper',
          base: 'test-list-marker-base absolute w-0.5 z-50 rounded-none bg-primary',
        },
        tab: {
          base: 'test-list-tab-base justify-start !max-w-3xs w-full bg-gray-200 rounded-none',
          padding: 'pl-2 pr-1',
          active: 'bg-red-400',
        },
      },
    }"
    :items="items"
    class="w-full"
  >
    <template #default="{ item, index, selected }">
      <div class="flex items-center gap-2 relative truncate">
        <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />

        <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>

        <span v-if="selected" class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400" />
      </div>
    </template>
  </UTabs>
</template>
