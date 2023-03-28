const app = Vue.createApp({
    data() {
        return{
            showBooks: true,
            books: [
                { title: "name of the wind", author: "patrick rothfuss", img: "#", isFav: true},
                { title: "the way of kings", author: "brandon sanderson", img: "#", isFav: false},
                { title: "the final empire", author: "brandon sanderson", img: "#", isFav: true},
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBook = !this.showBooks
        },
        toggleFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount("#app")