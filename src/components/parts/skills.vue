<template>
  <div class="skills">

    <section id="skills" class="row">
            <aside class="col-sm-3">
                <h3>Connaissances</h3>
            </aside>
            <div class="col-sm-9">
                <div class="row">
                     <div class="col-sm-12" v-for="(a,i) in data.skills" :key="i">
                         <div class="col-sm-6">
                        <div class="name">
                            <h4>{{a.name}}</h4>
                        </div>
                        <ul class="keywords" v-for="(s,i) in a.keywords" :key="i">
                            <li>{{s}}</li>
                         </ul>
                    </div>
                    </div>
                </div>
            </div>
    </section>
      
  </div>

</template>

<script>
export default {
  name: 'skills',
  
  data(){
    return{
    }
  },
  methods:{
   
  },
  props: {
    data:Object
  }
}
</script>


