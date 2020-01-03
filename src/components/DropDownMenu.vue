<template>
  <div class="dropdown inline-block border-50 rounded-full px-3 py-1 mr-2 hover:bg-gray-400">
    <!-- <button class="block">{{ status }}</button> -->
    <!-- <h1>hahahah</h1> -->
    <slot>
      <ul class="drop-list">
        <li v-for="(item,id) in items" v-bind:key="id" class="drop-item">
          <a href="#"></a>
        </li>
      </ul>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    status: String,
    items: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  computed() {
    this.drop_items = ["<a href='"];
  },
  data() {
    return {
      drop_items: []
    };
  }
};
</script>

<style scoped>
</style>