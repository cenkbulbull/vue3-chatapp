import {ref} from "vue"
import {auth} from "../firebase/config"
import { createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";

const hata = ref(null)

const signup=async(email,parola,kullaniciAd)=>{
	hata.value=null
	try{

		if (kullaniciAd.trim() === "") {
			throw new Error("Kullanıcı adı boş geçilemez")
		}

		const res = await createUserWithEmailAndPassword(auth, email, parola)
		/*.then(e=>{
			console.log(e)
		})*/


		if(res==""){
			throw new Error("Register gerçekleşmedi")
		}

		/*await updateProfile(res.user, {
			"displayName": kullaniciAd
		})*/

		hata.value=null
		return res

	}catch(err){
		hata.value=err.message
	}
}

const useRegister=()=>{
	return {hata,signup}
}

export default useRegister