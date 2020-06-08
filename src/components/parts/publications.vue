<template>
  <div class="publications">

    <section id="publications" class="row">
            <aside class="col-sm-3">
                <h3>Publications</h3>
            </aside>
            <div class="col-sm-9">
                <div class="row">
                     <div class="col-sm-12" v-for="(a,i) in data.publications" :key="i">
                        <h4 class="strike-through">
                            <span>{{a.title}}</span>
                        </h4>
                        <div class="date pull-right">
                            <em>Date</em>
                            {{a.date}}
                        </div>
                        <div class="awarder">
                            <em>Par</em>
                            <strong>{{a.awarder}}</strong>
                        </div>
                        <div class="summary">
                            {{a.summary}}
                        </div>
                    </div>
                </div>
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


