<template lang="pug">
  section#counter {{ counter }}
    br
    button( @click="$store.commit('increment', Math.random()*10)" ) Increment
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['counter'])
}
</script>
