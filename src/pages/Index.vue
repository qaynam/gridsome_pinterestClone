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
      <p class="m-5">{{test}}</p>
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
      test: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding-top: 64px;
}
</style>
