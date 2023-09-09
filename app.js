const app = Vue.createApp({
    data() {
        return {
            url: "https://www.google.com",
            showBooks: true,
            books: [ 
                { title: "a casa no mar cerúleo", author: "n k", img: "1.jpg", isFav: false},
                { title: "o mar sem estrelas", author: "erin morgestern", img: "2.jpg", isFav: true},
                { title: "o circo da noite", author: "erin morgestern", img: "3.jpg", isFav: true}
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(event) {
            console.log(event, event.type)
        },
        handleMouseMove(event) {
            this.x = event.offsetX
            this.y = event.offsetY
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    }
})

app.mount('#app')