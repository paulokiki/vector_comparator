let array1 = [1,2,3,4,5,4,5,7,8,9,10];
let array2 = [6,7,8,11,3];




if(array1.length !== array2.length){

for(let m = 0; m < array2.length - array1.length; m++){
array1.push(null);
}
compara(array1, array2);

console.log(array1);

}

else{
    compara(array1, array2);
}

// função comparadora de array-------------

function compara(){
    for(let i = 0; i<array1.length; i++){
for(let j = 0; j<array2.length; j++){
if(array2[j] == array1[i] ){
    console.log(`Esse nume é repetido ${array1[i]}`);
    }
console.log(`${array1[i]} e ${array2[j]}`);

}}
}