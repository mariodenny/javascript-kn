function sayMyName(name){
    console.log("ini datang dari function , jadi bagus bagus");
    console.log(`Hello nama saya ${name}`)
    // alert("Denny Mario")
    
}

async function shopping(items) {
    return new Promise(resolve => {
        const delay = Math.random()* 2000;
        setTimeout(()=>{
            console.log(`Belanja ${items}`)
            resolve()
        }, delay)
    })
}


function shoppingBook(book){
    console.log(`Beli ${book}`);
    
}

shoppingBook("JS Dasar")

setTimeout(() => {
    shopping("Ayam")
    shopping("Tahu")
    shopping("Telor")
}, 1000);

shoppingBook("Svelte JS")


