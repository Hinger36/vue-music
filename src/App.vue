<template>
  <div id="app">
    <!-- <iv-form></iv-form> -->
    <v-header></v-header>
    <img-form></img-form>
    <songlist></songlist>
  </div>
</template>

<script>
// import ivForm from './components/ivForm.vue';
import imgForm from './components/classForm.vue';
import header from './components/header.vue';
import songlist from './components/songlist.vue';


export default {
  components: {
    // 'iv-form': ivForm,
    'img-form': imgForm,
    'v-header': header,
    'songlist': songlist
  },
  data () {
    return {
     
    }
  }
}
</script>

<style>

</style>


