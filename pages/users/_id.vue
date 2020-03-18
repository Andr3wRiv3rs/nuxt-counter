<template lang="pug">
  section id: {{ $route.params.id }}
    br
    nuxt-link( to="/" ) Home
</template>

<script>
export default {
  layout: 'users'
  // async fetch () {
  //   const user = await axios(`/users/${this.$route.params.id}`)
  //   // eslint-disable-next-line no-console
  //   console.log(user)
  // }
}
</script>
