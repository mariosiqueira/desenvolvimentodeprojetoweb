function toArray(intervaloInferior, intervaloSuperior){
   let array = [];
   for(i = intervaloInferior; i <= intervaloSuperior; i++){
       array.push(i);
   }
   return array;
}

console.log(toArray(5,9));