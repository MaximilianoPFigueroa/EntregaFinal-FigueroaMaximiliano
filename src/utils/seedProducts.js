import db from "../db/db.js"
import {
    addDoc,
    collection
} from "firebase/firestore"



const products = [{
        id: 1,
        name: "Campera amarilla",
        price: 94.99,
        image: ["/img/campera-adidas-amarilla.jpg", "/img/campera-adidas-amarilla-frontal.jpg", "/img/campera-adidas-amarilla-zoom.jpg"],
        category: "camperas",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi reprehenderit placeat voluptas quasi asperiores dolore",
        stock: 12,
    },
    {
        id: 2,
        name: "Campera negra",
        price: 124.99,
        image: ["/img/campera-adidas-negra.jpg", "/img/campera-adidas-negra-frontal.jpg", "/img/campera-adidas-negra-dorsal.jpg"],
        category: "camperas",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi reprehenderit placeat voluptas quasi asperiores dolore",
        stock: 17,
    },
    {
        id: 3,
        name: "Campera Argentina",
        price: 94.99,
        image: ["/img/campera-adidas-argentina-posando.jpg", "/img/campera-adidas-argentina-frente.jpg", "/img/campera-adidas-argentina-dorsal.jpg", ],
        category: "camperas",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi reprehenderit placeat voluptas quasi asperiores dolore",
        stock: 21,
    },
    {
        id: 10,
        name: "Gorra bordó",
        price: 74.99,
        image: ["/img/gorra-adidas-bordo.jpg", "/img/gorra-adidas-bordo-dorsal.jpg", "/img/gorra-adidas-bordo-abrojo.jpg"],
        category: "gorras",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi reprehenderit placeat voluptas quasi asperiores dolore",
        stock: 10,
    },
    {
        id: 11,
        name: "Gorra celeste",
        price: 74.99,
        image: ["/img/gorra-adidas-celeste.jpg", "/img/gorra-adidas-celeste-dorsal.jpg", "/img/gorra-adidas-celeste-abrojo.jpg"],
        category: "gorras",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi reprehenderit placeat voluptas quasi asperiores dolore",
        stock: 11,
    },
    {
        id: 12,
        name: "Gorra gris",
        price: 74.99,
        image: ["/img/gorra-adidas-gris.jpg", "/img/gorra-adidas-gris-dorsal.jpg", "/img/gorra-adidas-gris-marca.jpg"],
        category: "gorras",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi reprehenderit placeat voluptas quasi asperiores dolore",
        stock: 8,
    },
    {
        id: 100,
        name: "Zapatilla azul",
        price: 149.99,
        image: ["/img/zapatilla-adidas-azul.jpg", "/img/zapatilla-adidas-azul-vistasuperior.jpg", "/img/zapatilla-adidas-azul-suela.jpg", ],
        category: "zapatillas",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi reprehenderit placeat voluptas quasi asperiores dolore",
        stock: 22,
    },
    {
        id: 101,
        name: "Zapatilla blanca",
        price: 149.99,
        image: ["/img/zapatilla-adidas-blanca.jpg", "/img/zapatilla-adidas-blanca-vistasuperior.jpg", "/img/zapatilla-adidas-blanca-suela.jpg"],
        category: "zapatillas",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi reprehenderit placeat voluptas quasi asperiores dolore",
        stock: 16,
    },
    {
        id: 102,
        name: "Zapatilla verde",
        price: 149.99,
        image: ["/img/zapatilla-adidas-verde.jpg", "/img/zapatilla-adidas-verde-vistasuperior.jpg", "/img/zapatilla-adidas-verde-suela.jpg", ],
        category: "zapatillas",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi reprehenderit placeat voluptas quasi asperiores dolore",
        stock: 7,
    }

]
const seedProducts = () => {
    const productsRef = collection(db, "productos")
    products.map(({
        id,
        ...dataProduct
    }) => {
        addDoc(productsRef, dataProduct)
    })
    console.log("productos subidos")
    return
}
seedProducts()