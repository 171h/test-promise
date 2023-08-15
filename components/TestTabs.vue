<script setup>
import { ref } from 'vue'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'

const selectedTab = ref(0)

function changeTab(index) {
  selectedTab.value = index
}
</script>

<template>
  <UButton label="Select second tab" @click="() => selectedTab = 1" />
  <UButton label="Select thrid tab" @click="() => selectedTab = 2" />
  <TabGroup :selected-index="selectedTab" @change="changeTab">
    <TabList>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Content 1</TabPanel>
      <TabPanel>Content 2</TabPanel>
      <TabPanel>Content 3</TabPanel>
    </TabPanels>
  </TabGroup>
</template>
