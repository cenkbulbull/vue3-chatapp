<template>
	<form>
		<input @keypress.enter.prevent="gonder" type="text" placeholder="Mesajınızı yazın ve entera basın" v-model="mesaj">
	</form>
</template>
<script>
	import getUser from	"../composables/getUser"
	import useCollection from	"../composables/useCollection"
	import {ref} from "vue"
	export default{
		setup(){
			const {kullanici} = getUser()
			const mesaj=ref("")
			const {belgeEkle,hata}=useCollection("mesajlar")
			const gonder=async()=>{
				const chat={
					kullanici:kullanici.value.email,
					mesaj:mesaj.value,
					olusturulmaTarihi:new Date().toLocaleString('tr-TR')
				}
				await belgeEkle(chat)
				//console.log(chat)
				if (!hata.value) {
					mesaj.value=""
				}
				else{
					mesaj.value=hata.value
				}
			}

			return{mesaj,gonder}


		}
	}
</script>
<style scoped>
form {
    width: 600px;
    margin: 30px auto;
    text-align: center;
  }
  
  input {
    width: 100%;
    max-width: 100%;
    margin-bottom: 5px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 10px;
    font-family: inherit;
    outline: none;
  }
</style>