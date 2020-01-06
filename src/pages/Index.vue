<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div class="main">
      <input
        v-model="test"
        type="text"
        class="border-gray-500 m-5 rounded w-64 h-8 px-2"
        placeholder="vue test"
      />
      <button @click="add_list()" class="bg-blue-500 px-5 py-2 text-white">add</button>
      <p class="m-5">{{test}}</p>
      <ul class="m-5 border-t" v-for="(item,index) in test_list" :key="index">
        <li>{{item}}</li>
      </ul>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "index"
  },
  data() {
    return {
      test: "",
      test_list: []
    };
  },
  methods: {
    add_list() {
      this.test_list.push(this.test);
      this.test = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding-top: 64px;
}
</style>
