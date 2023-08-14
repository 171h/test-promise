<template>
  <div>
    <UButton icon="i-heroicons-x-mark" :padded="false" variant="ghost" size="2xs" class="scale-50" />
    <UiTestAccordion />
    <UiTestDefineShortcuts />
    <UiTestAlert />
    <UiTestAvatar />
    <UiTestBadge />
    <UiTestButton />
    <UiTestDropdown />
    <UiTestIcon />
    <UiTestKbd />
    <UiTestLink />
    <UiTestInput />
    <UiTestTextarea />
    <UiTestSelect />
    <UiTestSelectMenu />
    <UiTestCheckbox />
    <UiTestRadio />
    <UiTestToggle />
    <UiTestRange />
    <UiTestFormGroup />
    <UiTestForm />
    <UiTestTable />
    <UiTestVNav />
    <UiTestComPalette />
    <UiTestTabs />
    <UiTestModal />
    <UiTestSlideover />
    <UiTestPopover />
    <UiTestTooltip />
    <UiTestContextMenu />
    <UiTestNotification />
    <UNotifications color="gray">
      <template #title="{ title }">
        <span v-html="title" />
      </template>

      <template #description="{ description }">
        <span v-html="description" />
      </template>
    </UNotifications>
    <UiTestCard />
    <UiTestContainer />
    <UiTestSkeleton />
  </div>
</template>

<style>
h1 {
  text-align: left;
  font-weight: bold;
  margin-top: 1rem;
}

h1::before {
  content: '🧪';
  margin-right: 0.5rem;
}
</style>
