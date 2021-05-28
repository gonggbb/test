<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted () {
    this.name();
  },
  methods: {
    name() {
      console.log("rocess.env.BASE_URL",this.rocess.env.BASE_URL)
    }
  },
}
</script>
