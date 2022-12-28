import {ref} from "vue"
import {db} from "../firebase/config"
import { doc, getDoc,onSnapshot,collection,orderBy,query} from "firebase/firestore";


const getCollection=(koleksiyon)=>{
	const belgeler=ref(null)
	const hata=ref(null)



	let koleksiyonRef= collection(db, koleksiyon)

	const q = query(koleksiyonRef, orderBy("olusturulmaTarihi"));

	const unsub = onSnapshot(q, (docsSnap) => {
		//console.log("Current data: ", docsSnap.data());
		let sonuclar=[]

		docsSnap.forEach((doc) => {
			sonuclar.push({...doc.data(),id:doc.id})
		})

		belgeler.value=sonuclar
		hata.value=null

	},(error)=>{
		belgeler.value=null
        hata.value='veriler çekilemedi'
	});



	return {hata,belgeler}
}

export default getCollection