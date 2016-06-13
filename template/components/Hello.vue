<style lang="stylus">
  h1
    color: #00B7FF
</style>

<template lang="pug">
  .hello
    h1 \{{ msg }}
    p Welcome to \{{ msg }}
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Express'
      }
    }
  }
</script>
