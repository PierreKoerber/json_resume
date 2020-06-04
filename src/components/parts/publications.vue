<template>
  <div class="publications">

    <section id="publications" class="row">
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
  name: 'publications',
  
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


