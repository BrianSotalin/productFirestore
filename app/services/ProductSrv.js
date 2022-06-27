import {doc,setDoc} from 'firebase/firestore';

export const guardar=(producto)=>{
const productRef=doc(global.dbCon,'Productos',producto.codigo);
setDoc(productRef,producto);
}