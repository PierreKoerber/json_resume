<template>
  <div class="hello">

    <div style="float:left">
        <div v-for="(f,i) in fields" :key="i">
            <div :style="getmargin(f)" >
                {{f.name}}:
                <input  v-model="f.value" @change="update(f)">
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import { required, minLength, between } from 'vuelidate/lib/validators'
import cv from '../store/cv.json' ;

export default {
  name: 'myform',

  data(){
    return{
      cv:cv,
      fields:[]
    }
  },
  mounted(){
      this.flattenjson(this.cv, "", 0, this.fields) ;
  },
  methods:{
    update(f){
      this.updatejson(this.cv, "", f.model, f.value)
    },
    getmargin(f){
        var px = f.level * 200 ;
        return "margin-left:" + px +"px" ;
    },
    isscalar(obj){
        if(typeof(obj) == "object")
            return false ;
        if(typeof(obj)=="array")
            return false ;
        return true ;
    },
    updatejson(obj, fathername, property, value){
       for (var prop in obj) {
          var model = (fathername == "") ? "": fathername + "."  ;
          if(this.isscalar(obj[prop])){
            var key =   model + prop  ;
              if (key == property){
                //console.log(prop, key, property, obj[prop],value)
                //console.log("update value ", obj[prop],value)
                obj[prop] = value ;
              }
          }
          else{
              this.updatejson(obj[prop], model + prop, property, value) ;
          }
       }
    },
    flattenjson(obj, fathername, level,fields){
     
      for (var prop in obj) {
       
          var model = (fathername == "") ? "": fathername + "."  ;
          var f = {
              name:prop,
              value:obj[prop],
              type:typeof(obj[prop]),
              model:model + prop,
              level:level
          } ;
         
          if(this.isscalar(obj[prop])){
              fields.push(f) ;
          }
          else{
              this.flattenjson(obj[prop], model + prop, level+1,fields) ;
          }

          
      }
    }
  },
  props: {
    msg: String
  },
  computed:{
    xfields(){
    
      var fields = [] ;
      for (var prop in this.cv) {
          var f = {
              name:prop,
              value:this.cv[prop],
              type:typeof(this.cv[prop])
          } ;
          fields.push(f) ;
      }
      return fields ;


    }
  }
}
</script>


<style scoped>

</style>
