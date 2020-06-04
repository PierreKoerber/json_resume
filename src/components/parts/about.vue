<template>
  <div class="about">

    <section id="about" class="row">
            <aside class="col-sm-3">
                <h3>About</h3>
            </aside>
            <div class="col-sm-9">
                <p>{{data.basics.summary}}</p>
            </div>
    </section>
      
  </div>

</template>

<script>
export default {
  name: 'about',
  
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


