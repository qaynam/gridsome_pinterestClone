<template>
  <li class="drop-item px-3 py-2 hover:bg-white">
    <a :href="to">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    to: {
      type: String
    }
  }
};
</script>

<style scoped>
</style>