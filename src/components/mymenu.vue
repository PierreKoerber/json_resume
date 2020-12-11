<template>
  <div class="mymenu">
      
      <ul>
        <li v-for="(r,i) in routes" :key="i">           
            <router-link :to="r.path">{{r.name}}</router-link>
        </li>
      </ul>
      
  </div>
</template>

<script>

import { required, minLength, between } from 'vuelidate/lib/validators'
import cv from '../store/cv.json' ;

export default {
  name: 'mymenu',

  data(){
    return{
     
    }
  },
  mounted(){
      
  },
  methods:{
   
  },
 
  computed:{
    routes(){
      return this.$router.options.routes ;
    }
  }
}
</script>


<style>

ul
{
    list-style-type:none;
    padding:0px;
    margin:0px;
}
li
{
   display:inline;
    padding-left:14px;
}
</style>
