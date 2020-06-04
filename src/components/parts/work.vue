<template>
  <div class="work">

   <section id="work" class="row">
			<aside class="col-sm-3">
				<h3>Emplois</h3>
			</aside>
			<div class="col-sm-9">
				<div class="row" v-for="(w,i) in data.work" :key="i">
					<div class="col-sm-12">
						<h4 class="strike-through">
							<span>{{w.company}}</span>
							<span class="date">
								{{w.startDate}} - {{w.endDate}}
							</span>
						</h4>
						<div class="website pull-right">
							<a :href="w.website">{{w.website}}</a>
						</div>
						<div class="position">
							{{w.position}}
						</div>
						<div class="summary">
							<p>{{w.summary}}</p>
						</div>
						<h4>Highlights</h4>
						<ul class="highlights" v-for="(s,i) in w.highlights" :key="i">
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
  name: 'work',
  
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


