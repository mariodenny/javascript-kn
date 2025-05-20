// Array
let fruits = ["Rambutan","Salak","Jeruk","Anggur"]
console.log(`Array sebelum di pop ${fruits}`);
// Array method -> hapus,tambah, update
// pop dan shift -> pop digunakan untuk hapus elemen terakhir , shift -> hapus elemen pertama
fruits.pop()
console.log(fruits);
fruits.shift()
console.log(fruits);
fruits[0] = "Kiwi" // update nilai array
console.log(fruits);
// push -> menambah elemen array ke ujung langsung
fruits.push("Durian")
console.log(fruits);
// ES6 -> for of, foreach , for , spread
let myCats = [
    "Carr",
    "Asteroid Destroyer",
    "Solar Flare",
    "Galaxy Annihilator",
    "Tom"
]
console.log(myCats[0]);
console.log(`Panjang array my cats ${myCats.length}`);
//  Bongkar pake for
for(let i = 0; i < myCats.length; i++){
    console.log(`My cat name is ${myCats[i]}`);
}
// foreach
myCats.forEach(cat =>{
   console.log(`I have a cat name ${cat}`)
   
})
//  for of -> method baru es6
for(cat of myCats){
    console.log(cat);
}
// spread -> beserak
console.log(...myCats)

//  Kasus data
let myData = [
    {
        "nama" : "Haji Udin",
        "age" : 24,
        "hobby" : "fishing"
    },
    {
        "nama" : "Haji Udin",
        "age" : 24,
        "hobby" : "fishing"
    },
    {
        "nama" : "Haji Udin",
        "age" : 24,
        "hobby" : "fishing"
    }
]

let myOneData =  {
    "nama" : "Haji Udin",
    "age" : 24,
    "hobby" : "fishing"
}

