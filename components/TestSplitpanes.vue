<script setup lang="ts">
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

</script>

<template>
  <h1>Test Splitpanes</h1>
  <div class="h-48">
    <splitpanes class="default-theme">
      <pane v-for="i in 3" :key="i">
        <div>{{ i }}</div>
      </pane>
    </splitpanes>
  </div>
</template>
