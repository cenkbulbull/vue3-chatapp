import {ref} from "vue"
import {auth} from "../firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth";

const hata = ref(null)

const login=async(email,parola)=>{
	hata.value=null
	try{

		const res = await signInWithEmailAndPassword(auth, email, parola)
		/*.then(e=>{
			console.log(e)
		})*/


		if(res==""){
			throw new Error("Giriş gerçekleşmedi")
		}

		hata.value=null
		return res

	}catch(err){
		hata.value=err.message
	}
}

const useLogin=()=>{
	return {hata,login}
}

export default useLogin