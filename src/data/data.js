const products = [
    {
        id: 1,
        name:"Campera amarilla",
        price: 94.99,
        image: "/img/campera-adidas-amarilla.jpg",
        category:"campera",
        stock: 1,
    },
    {
        id: 2,
        name:"Campera negra",
        price: 124.99,
        image:"/img/campera-adidas-negra.jpg",
        category:"campera",
        stock:1,
    },
    {
        id: 3,
        name:"Campera azul",
        price: 94.99,
        image:"/img/campera-adidas-azul.jpg",
        category:"campera",
        stock:1,
    },
    {
        id: 10,
        name:"Gorra bordó",
        price: 74.99,
        image:"/img/gorra-adidas-bordo.jpg",
        category:"gorra",
        stock:1,
    },
    {
        id: 11,
        name:"Gorra celeste",
        price: 74.99,
        image:"/img/gorra-adidas-celeste.jpg",
        category:"gorra",
        stock:1,
    },
    {
        id: 12,
        name:"Gorra gris",
        price: 74.99,
        image:"/img/gorra-adidas-gris.jpg",
        category:"gorra",
        stock:1,
    },
    {
        id: 100,
        name:"Zapatilla azul",
        price: 149.99,
        image:"/img/zapatilla-adidas-azul.jpg",
        category:"zapatilla",
        stock:1,
    },
    {
        id: 101,
        name:"Zapatilla blanca",
        price: 149.99,
        image:"/img/zapatilla-adidas-blanca.jpg",
        category:"zapatilla",
        stock:1,
    },
    {
        id: 102,
        name:"Gorra verde",
        price: 149.99,
        image:"/img/zapatilla-adidas-verde.jpg",
        category:"zapatilla",
        stock:1,
    }

]
const getProducts  = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(() =>{
            resolve(products)
        }, 2000)
    })
}
export { getProducts }