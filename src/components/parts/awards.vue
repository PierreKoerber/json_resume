<template>
  <div class="awards">

    <section id="awards" class="row">
            <aside class="col-sm-3">
                <h3>Certificats et diplômes</h3>
            </aside>
            <div class="col-sm-9">
                <div class="row">
                     <div class="col-sm-12" v-for="(a,i) in data.awards" :key="i">
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
  name: 'awards',
  
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


