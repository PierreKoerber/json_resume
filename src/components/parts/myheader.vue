<template>
  <div class="myheader">

<h1>test</h1>
    <header id="header">
          <div class="container">
            <div class="row">
              <div class="col-sm-9 col-sm-push-3">
                <h1>
                  {{data.basics.name}}
                </h1>
                <h2>
                  {{data.basics.label}}
                </h2>
              </div>
            </div>
          </div>
    </header>
      
  </div>

</template>

<script>
export default {
  name: 'myheader',
  
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


