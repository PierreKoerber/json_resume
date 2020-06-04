<template>
  <div class="volunteer">

    <section id="volunteer" class="row">
            <aside class="col-sm-3">
                <h3>volunteer</h3>
            </aside>
             <div class="col-sm-9">
                <div class="row" v-for="(v,i) in data.volunteer" :key="i">
                    <div class="col-sm-12">
                        <h4 class="strike-through">
                            <span>{{v.organization}}</span>
                            <span class="date">
                                {{v.startDate}} - {{v.endDate}}
                            </span>
                        </h4>
                        <div class="website pull-right">
                            <a :href="v.website">{{v.website}}</a>
                        </div>
                        <div class="position">
                            {{v.position}}
                        </div>
                        <div class="summary">
                            <p>{{v.summary}}</p>
                        </div>
                        <h4>Highlights</h4>
                        <ul class="highlights" v-for="(s,i) in v.highlights" :key="i">
                            <li class="bullet">{{s}}</li>
                        </ul>
                    </div>
                </div>
            </div>
    </section>
      
  </div>

</template>

<script>
export default {
  name: 'volunteer',
  
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


