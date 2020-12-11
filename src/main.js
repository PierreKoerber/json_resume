import Vue from 'vue' ;
import App from './App.vue' ;
import VueRouter from "vue-router" ; 
import VueMaterial from 'vue-material'

import VueDynamicForms from '@asigloo/vue-dynamic-forms';

Vue.use(VueDynamicForms);

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)

Vue.use(VueRouter) ;
 
import myform   from './components/myform.vue' ;
import myedit   from './components/resume.vue' ;
import home     from './routes/home.vue' ;


// Install BootstrapVue
//Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
//Vue.use(IconsPlugin)

const router = new VueRouter( 
    {
    routes:[
        {path:"/", name:"home", component:home},
        {path:"/edit", name:"myform", component:myform},
        {path:"/display", name:"myeditor", component: myedit}
        ]
    }
) ;

Vue.config.productionTip = false


new Vue({
    render: h => h(App),
    router
}).$mount('#app')