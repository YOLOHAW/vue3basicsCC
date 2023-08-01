const app=Vue.createApp({
    // {template:"<h1>Hello World</h1>"}
    data() {
        return {
            books:[
                {
            title:"I never do anything without a plan",
            author:"thomas",
            age:20,
            img:"images/php.png",
            isFav:false
                },
                {
            title:"I Love You",
            author:"MaxWell",
            age:22,
            img:"images/javascript.png",
            isFav:true
            
                },
                {
            title:"Programming is good",
            author:"Random Genius",
            age:77,
            img:"images/mysql.png",
            isFav:true
                }
            ],
            showBook:true  ,
            link:"https://www.github.com",
            age:20,
            name:"Htet Aung Win"
        }
    },
    methods:{
        IncreaseAge(){
            this.age++
        },
        mouseoverHandler(event,data){
            console.log("mover is over me",event.type,data);
        },
        mouseleaveHandler(){
            console.log("mouse left me");
        },
        mousedoubleClicked(){
            console.log("mouse double clicked me");
        },
        favBookhandler(book){
            book.isFav=!book.isFav
        }
    },
    showBook:true,
    computed:{
        filteredBooks(){
            return this.books.filter(book=>{
                return book.isFav==true
            })
        }
    }
});

app.mount("#app")