<script setup>
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/vue'
</script>

<template>
  <TabGroup>
    <TabList class="relative test-list-base bg-gray-100 dark:bg-gray-800 rounded-lg p-1 w-full h-10 items-center flex gap-2">
      <Tab v-slot="{ selected }" class="relative inline-flex items-center justify-center flex-shrink-0 whitespace-nowrap focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out test-list-tab-base h-8 px-3 text-sm font-medium rounded-md text-gray-900 dark:text-white">
        Tab 1 {{ selected }}
      </Tab>
      <Tab class="relative inline-flex items-center justify-center flex-shrink-0 whitespace-nowrap focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out test-list-tab-base h-8 px-3 text-sm font-medium rounded-md text-gray-900 dark:text-white">
        Tab 2
      </Tab>
      <Tab class="relative inline-flex items-center justify-center flex-shrink-0 whitespace-nowrap focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out test-list-tab-base h-8 px-3 text-sm font-medium rounded-md text-gray-900 dark:text-white">
        Tab 3
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Content 1</TabPanel>
      <TabPanel>Content 2</TabPanel>
      <TabPanel>Content 3</TabPanel>
    </TabPanels>
  </TabGroup>
</template>
