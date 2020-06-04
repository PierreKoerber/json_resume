<template>
  <div id="app">

      <button v-on:click="editJson=!editJson">editJson</button>

      <json :json="cv" v-if="editJson"></json>
      <resume :data="cv" v-if="!editJson"></resume>
  </div>
</template>

<script>
import myform from './components/myform.vue' ;
import resume from './components/resume.vue' ;

import json from './components/json.vue' ;
import cv from './store/resume.json' ;


export default {
  name: 'App',
  components: {
    myform,
    json,
    resume
  },
  data(){
    return{
      cv:cv,
      editJson:false
    }
  }
}
</script>

<style>

</style>
