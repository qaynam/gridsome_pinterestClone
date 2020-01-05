<template>
  <div class="dropdown inline-block relative border-50 rounded-full focus:bg-gray-400 items-center">
    <button
      class="block bg-transparent text-center px-3 py-1 mr-2 border-50 rounded-full hover:bg-gray-400 focus:outline-none"
      @click="drop_list_collapse = !drop_list_collapse"
    >
      <slot name="title"></slot>
      <span v-if="html" :class="{ 'font-bold' : bold }" v-html="name"></span>
      <span v-if="!html" :class="{ 'font-bold' : bold }">{{ name }}</span>
    </button>
    <transition name="fade">
      <slot v-if="!drop_list_collapse"></slot>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String
    },
    bold: {
      type: Boolean,
      default: false
    },
    html: {
      type: Boolean,
      default: false
    }
  },
  // mounted() {
  //   this.bold = this.Bold;
  // },
  data() {
    return {
      drop_list_collapse: true,
      Bold: Boolean
    };
  }
};
</script>

<style lang="scss" scoped>
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