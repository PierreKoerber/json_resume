<template>
  <div class="education">

    <section id="education" class="row">
            <aside class="col-sm-3">
                <h3>Ecoles</h3>
            </aside>
             <div class="col-sm-9">
                <div class="row">
                    <div class="col-sm-12" v-for="(e,i) in data.education" :key="i">
                        <h4 class="strike-through">
                            <span>{{e.institution}}</span>
                            <span class="date">
                                {{e.startDate}} - {{e.endDate}}
                            </span>
                        </h4>
                        <div class="area">
                            {{e.area}}
                        </div>
                        <div class="studyType">
                            {{e.studyType}}
                        </div>
                        <h4 v-if="hasArrayAndIsNotEmpty(e)">Matières</h4>
                        <ul class="courses" v-for="(c,i) in e.courses" :key="i">
                            <li>{{c}}</li>
                        </ul>
                    </div>
                </div>
            </div>
    </section>
      
  </div>

</template>

<script>
export default {
  name: 'education',
  
  data(){
    return{
    }
  },
  methods:{
    hasArrayAndIsNotEmpty(e){
        if ( e.hasOwnProperty("courses") == false)
            return false ;
        if ( e.courses.length == 0)
            return false ;
        return true ;
    }
  },
  props: {
    data:Object
  }
}
</script>


