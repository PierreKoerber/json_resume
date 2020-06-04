<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div v-for="(f,i) in fields" :key="i" style="margin-left=10px">
        <div style="margin-left=10px" >
            {{f.name}}
            <input  v-model="f.value">
            {{f.model}}
            {{f.level}}
            {{getmargin(f)}}
        </div>
    </div>
 

  </div>
</template>

<script>

export default {
  name: 'node',
  
  data(){
    return{
     
    }
  },
  mounted(){
      
     
  },
  methods:{
    
  },
  props: {
    label:String,
    value:String
  }
}
</script>


<style scoped>

</style>
