<template>
	<div class="container">
		<Navbar/>
		<ChatWindow/>
		<ChatForm/>
	</div>
</template>
<script>
	import Navbar from "../components/Navbar"
	import ChatForm from "../components/ChatForm"
	import ChatWindow from "../components/ChatWindow"
	export default{
		components:{
			Navbar,
			ChatForm,
			ChatWindow
		}
	}
</script>
<style>
	
</style>