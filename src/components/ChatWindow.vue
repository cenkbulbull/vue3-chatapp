<template>
	<div class="chat-window">
		<div v-if="hata">{{hata}}</div>
		<div v-if="belgeler" class="messages" ref="mesajlar">
			<div v-for="belge in belgeler" :key="belge.id" class="single">
				<!--<span class="created-at"></span>-->
				<span class="name">{{belge.kullanici}} :</span>
				<span style="text-decoration: none;font-size: 14px">{{belge.mesaj}}</span>
			</div>
		</div>
	</div>
</template>
<script>
	import getCollection from '../composables/getCollection';
	import {ref,onUpdated} from "vue"
	export default{
		setup(){
			const {hata,belgeler} =getCollection('mesajlar');


			const mesajlar=ref(null)
			onUpdated(() => {
				mesajlar.value.scrollTop=mesajlar.value.scrollHeight;
			})

			return{hata,belgeler,mesajlar}
		}
	}
</script>
<style>
	
</style>