import { v4 as uuidv4 } from "uuid";

export default class BookStoreService {
    data = [
        {
            id: uuidv4(),
            title: "Master and Margarita",
            author: "Michail Bulgakov",
            price: 200,
            coverImage: "https://book24.ua/upload/iblock/dff/dffeb65d1cdf8c30ce24371c16d86ea8.png"
        },
        {
            id: uuidv4(),
            title: "Odnoetaghnaja America",
            author: "Ilf and Petrov",
            price: 300,
            coverImage: "https://goodbooks.com.ua/image/cache/catalog/00000033992-500x500.jpg"
        },
        {
            id: uuidv4(),
            title: "Na dne",
            author: "Maksim Gorkiy",
            price: 400,
            coverImage: "https://zakazknig.com.ua/content/images/28/72015182659558.jpeg"
        },
    ];

    getBooks(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject("I have a trouble with data...");
                } else {
                    resolve(this.data)
                }
            }, 500);

        //     setTimeout(() => reject("I have a trouble with data..."), 500)
        // // return new Promise((resolve) => {
        // //     setTimeout(() => resolve(this.data), 500)
        });
    }
}
