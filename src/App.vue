<template>
  <div>
    <NavbarComponent/>
    <router-view/>
  </div>
  
</template>

<script>
import FooterComponent from './components/FooterComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue';

export default {
  name: "App",
  components: {
    FooterComponent,
    NavbarComponent
  },
  data(){
    return{

    }
  }
}
</script>

<style>

</style>
