<template>
  <div class="home container">
    <div v-if="uyeMi">
      <Login @login="chatBasla"/>
      <p>Üye olmak için <span @click="uyeMi=false">Üye Ol</span> sayfasına gidiniz. </p>
    </div>
    <div v-else>
      <Register @register="chatBasla"/>
      <p>Giriş yapmak için <span @click="uyeMi=true">Giriş</span> sayfasına gidiniz. </p>
    </div>
  </div>
</template>

<script scoped>
  import Register from "../components/Register"
  import Login from "../components/Login"
  import {ref} from "vue"
  import {useRouter} from "vue-router"
  export default {
    components:{
      Register,
      Login
    },
    setup(){
      const uyeMi=ref(true)
      const router = useRouter()
      const chatBasla=()=>{
        router.push({name:"ChatOda"})
      }

      return{uyeMi,chatBasla}
    }
  }
</script>
<style>
  .home{
    text-align: left;
    padding: 20px 50px;
  }
</style>