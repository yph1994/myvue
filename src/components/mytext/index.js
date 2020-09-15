import Mytext from "./mytext.vue"
import Mytext2 from "./mytext2.vue"

Mytext.install=function (Vue) { 
    Vue.component(Mytext.name,Mytext)
    Vue.component(Mytext2.name,Mytext2)
 }
export  {Mytext2}
export default Mytext