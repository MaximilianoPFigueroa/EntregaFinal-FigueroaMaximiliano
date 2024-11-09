const products = [
    {
        id: 1,
        name:"Campera amarilla",
        price: 94.99,
        image: "/img/campera-adidas-amarilla.jpg",
        category:"camperas",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi reprehenderit placeat voluptas quasi asperiores dolore", 
        stock: 1,
    },
    {
        id: 2,
        name:"Campera negra",
        price: 124.99,
        image:"/img/campera-adidas-negra.jpg",
        category:"camperas",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi reprehenderit placeat voluptas quasi asperiores dolore",
        stock:1,
    },
    {
        id: 3,
        name:"Campera azul",
        price: 94.99,
        image:"/img/campera-adidas-argentina-posando.jpg",
        category:"camperas",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi reprehenderit placeat voluptas quasi asperiores dolore",
        stock:1,
    },
    {
        id: 10,
        name:"Gorra bordó",
        price: 74.99,
        image:"/img/gorra-adidas-bordo.jpg",
        category:"gorras",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi reprehenderit placeat voluptas quasi asperiores dolore",
        stock:1,
    },
    {
        id: 11,
        name:"Gorra celeste",
        price: 74.99,
        image:"/img/gorra-adidas-celeste.jpg",
        category:"gorras",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi reprehenderit placeat voluptas quasi asperiores dolore",
        stock:1,
    },
    {
        id: 12,
        name:"Gorra gris",
        price: 74.99,
        image:"/img/gorra-adidas-gris.jpg",
        category:"gorras",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi reprehenderit placeat voluptas quasi asperiores dolore",
        stock:1,
    },
    {
        id: 100,
        name:"Zapatilla azul",
        price: 149.99,
        image:"/img/zapatilla-adidas-azul.jpg",
        category:"zapatillas",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi reprehenderit placeat voluptas quasi asperiores dolore",
        stock:1,
    },
    {
        id: 101,
        name:"Zapatilla blanca",
        price: 149.99,
        image:"/img/zapatilla-adidas-blanca.jpg",
        category:"zapatillas",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi reprehenderit placeat voluptas quasi asperiores dolore",
        stock:1,
    },
    {
        id: 102,
        name:"Gorra verde",
        price: 149.99,
        image:"/img/zapatilla-adidas-verde.jpg",
        category:"zapatillas",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi reprehenderit placeat voluptas quasi asperiores dolore",
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
const getProduct = (idProduct) =>{
    return new Promise ((resolve) => {
        setTimeout(() => {
            const product = products.find((product) => product.id === parseInt(idProduct) )
            resolve(product)
        }, 2000)
    })
}
export { getProducts, getProduct }