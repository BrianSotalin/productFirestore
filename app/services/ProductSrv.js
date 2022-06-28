
import {doc,setDoc,collection,getDocs} from 'firebase/firestore';

export const guardar=(producto)=>{
const productRef=doc(global.dbCon,'Productos',producto.codigo);
setDoc(productRef,producto);
};
export const consulta = async (fnSetProducts) => {
   const productRef=collection(global.dbCon,'Productos');
   const productSnap= await getDocs(productRef);
   let arrayProducts=[];   
   productSnap.forEach((documento) => {
    console.log('Productos registrados',documento.data());
    arrayProducts.push(documento.data());
   });
  fnSetProducts(arrayProducts);
}