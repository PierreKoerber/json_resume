<template>

<div class="container">

<h1>resume</h1>
  <div class="row">
    <div class="col-2 bg-secondary">
     
    </div>
    <div class="col-10">
		<myheader :data="data"></myheader>
		<contact :data="data"></contact>
		<about :data="data"></about>
		<profiles :data="data"></profiles>
		<work :data="data"></work>
		<volunteer :data="data"></volunteer>
		<education :data="data"></education>
		<awards :data="data"></awards>
		<publications :data="data"></publications>
		<skills :data="data"></skills>
		<languages :data="data"></languages>
		<interests :data="data"></interests>
		<references :data="data"></references>
    </div>
  </div>
 
</div>
 

</template>

<script>
import myheader from './parts/myheader.vue' ;
import contact from './parts/contact.vue' ;
import about from './parts/about.vue' ;
import profiles from './parts/profiles.vue' ;
import work from './parts/work.vue' ;
import volunteer from './parts/volunteer.vue' ;
import education from './parts/education.vue' ;
import awards from './parts/awards.vue' ;
import publications from './parts/publications.vue' ;
import skills from './parts/skills.vue'  ;
import languages from './parts/languages.vue' ;
import interests from './parts/interests.vue' ;
import references from './parts/references.vue' ;

import cv from '../store/resume-pierre.json' ;


export default {
  name: 'resume',
  components:{
	  myheader,
	  contact,
	  about,
	  profiles,
	  work,
	  volunteer,
	  education,
	  awards,
	  publications,
	  skills,
	  languages,
	  interests,
	  references
  },
  data : function(){
    return{
		data:cv
    }
  },
  methods:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
</style>
