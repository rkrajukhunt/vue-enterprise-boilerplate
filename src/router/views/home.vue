<script>
import appConfig from "@src/app.config";
import Layout from "@layouts/main.vue";
export default {
  page: {
    title: "Home",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout }
};
</script>

<template>
  <Layout>
    <h1>{{ $t('hello') }}</h1>
  </Layout>
</template>
