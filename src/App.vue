<template>
  <div id="app">

      <mymenu></mymenu>


      <router-view object="cv"></router-view>


  </div>
</template>

<script>
import json from './components/json.vue' ;
import cv from './store/resume.json' ;
import mymenu from './components/mymenu.vue' ;

import mymodal from './modal/mymodal'

import { FormField } from '@asigloo/vue-dynamic-forms';

export default {
  name: 'App',
  data: function () {
    return {
      count: 0,
      show:false
    }
  },
  components: {
    mymenu
  },
  methods:{
    guess() {
       this.show =true ;
    } 
  }
}
</script>

<style>
#app{
  margin-left:20px ;
  margin-top:20px ;
}
</style>
