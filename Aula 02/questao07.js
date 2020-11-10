var arrayOfObjects = [{ "id": 28, "Title": "Sweden" }, {
    "id": 56, "Title": "USA" }, { "id": 89, "Title":
    "England" }, {"id": 19, "Title": "Brazil"}, {"id": 40,
    "Title": "India"}, {"id": 22, "Title": "Australia"}];

function ordernarId(obj1, obj2){
    return obj1.id - obj2.id;
}

console.log('################################');
console.log('Impressão do Array Original:');
console.log(arrayOfObjects);
console.log('################################\n');
arrayOfObjects.sort(ordernarId);
console.log('################################');
console.log('Impressão Ordenada:');
arrayOfObjects.forEach(obj => console.log(obj.Title));
console.log('################################');