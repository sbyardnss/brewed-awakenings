import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = `<ul>`

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.title}</li>`
    }

    html += "</ul>"

    return html
}




// click event

"click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("product")) {
            /*
                Extract the primary key from the id attribute of the list
                item that you clicked on. Refer back to the code you
                wrote for each list item. Note the format of the id
                attribute ("walker--2" if you clicked on the second one).
                This code splits that string apart into an array, and
                captures the "2" and assigns it to be the value of the
                `walkerId` variable.
                Splitting a string in JavaScript:
                    https://www.youtube.com/watch?v=u2ZocmM93yU
                Destructuring in JavaScript:
                    https://www.youtube.com/watch?v=UgEaJBz3bjY
            */
            const [,productId] = itemClicked.id.split("--")
            /*
                Now that you have the primary key of a walker object,
                find the whole object by iterating the walkers array.
            */
            for (const product of products) {
                /*
                    Compare the primary key of each walker to the one
                    you have. As soon as you find the right one, display
                    the window alert message.
                */
                if (product.id === parseInt(productId)) {
                    window.alert(`${product.name} costs ${product.price}`)
                }
            }
        }
}
