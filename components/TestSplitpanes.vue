<script setup lang="ts">
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

</script>

<template>
  <h1>Test Splitpanes</h1>
  <div class="h-48">
    <splitpanes >
      <pane v-for="i in 3" :key="i">
        <div>{{ i }}</div>
      </pane>
    </splitpanes>
  </div>
</template>
<style>
.splitpanes {
  background-color: transparent;
}

.splitpanes__splitter {
  background-color: #ccc;
  position: relative;
}

.splitpanes__splitter:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 0.4s;
  background-color: rgb(128, 0, 128, 0.3);
  opacity: 0;
  z-index: 1;
}

.splitpanes__splitter:hover:before {
  opacity: 1;
}

.splitpanes--vertical>.splitpanes__splitter:before {
  right: -5px;
  height: 100%;
}

.splitpanes--horizontal>.splitpanes__splitter:before {
  bottom: -5px;
  width: 100%;
}

</style>
