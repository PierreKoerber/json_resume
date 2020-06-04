<template>
  <div class="profiles">

   <section id="profiles" class="row">
			<aside class="col-sm-3">
				<h3>Profiles</h3>
			</aside>
			<div class="col-sm-9">
				<div class="row">
					<div class="col-sm-6" v-for="(p,i) in data.basics.profiles" :key="i">
						<strong class="network">
							{{p.network}}
						</strong>
						<div class="username">
							<div class="url">
								<a :href="p.url">{{p.username}}</a>
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
  name: 'profiles',
  
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


