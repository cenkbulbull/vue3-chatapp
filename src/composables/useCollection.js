import {ref} from "vue"
import {db} from "../firebase/config"
import {collection,addDoc} from "firebase/firestore"

const useCollection=(koleksiyon)=>{
	let hata=ref(null)

	const belgeEkle=async(belge)=>{
		hata.value=null

		try{
			const res = await collection(db, koleksiyon)
			addDoc(res,belge)
		}catch(err){
			hata.value="mesaj gönderilemedi"
		}
	}

	return{hata,belgeEkle}
}

export default useCollection