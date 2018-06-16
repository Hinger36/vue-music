<template>
    <div>
      <img-form></img-form>
      <songlist></songlist>
    </div>
</template>

<script>
import imgForm from './classForm.vue';
import songlist from './songlist.vue';
import { get } from '../api/api';


export default {
  
  components: {
    'img-form': imgForm,
    'songlist': songlist
  },

}
</script>

