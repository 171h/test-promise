<script setup lang="ts">
const count = ref(0)
</script>

<template>
  <div>
    Demo-count: {{ count }}
  </div>
  <EventMyButton :count="count" @increaseBy="count += $event" />
</template>
