<template>
  <ul
    class="drop-list bg-gray-300 text-gray-800 shadow-lg my-2 py-3 rounded absolute top-24 right-0 min-w-full z-30"
  >
    <slot></slot>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter {
  transform: translateY(10%);
  opacity: 0;
}
.fade-leave-to {
  transform: translateY(10%);
  opacity: 0;
}
</style>