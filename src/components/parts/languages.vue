<template>
  <div class="languages">

    <section id="languages" class="row">
            <aside class="col-sm-3">
                <h3>Langues</h3>
            </aside>
            <div class="col-sm-9">
                <div class="row">
                     <div class="col-sm-12" v-for="(a,i) in data.languages" :key="i">
                      <div class="col-sm-6">
                        <div class="language">
                            <strong>{{a.language}}</strong>
                        </div>
                        <div class="fluency">
                            {{a.fluency}}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    </section>
      
  </div>

</template>

<script>
export default {
  name: 'languages',
  
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


