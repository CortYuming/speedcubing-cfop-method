<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/">Home </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class ErrorComponent extends Vue {
  @Prop({ type: Object, default: null }) readonly error!: {statusCode: number}

  name = 'EmptyLayout'
  layout = 'empty'

  pageNotFound = '404 Not Found'
  otherError = 'An error occurred'

  public head() {
    const title =
      this.error && this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
