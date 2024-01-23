const { createApp } = Vue


createApp({
    data() {
        return {
            url:"https://valentinmotta.pythonanywhere.com/productos",
            error: false,
            datos:{}
                                   
        }    
    },
    methods:{
         fetchData(url){
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.datos=data
                });
         }   



    },
    created(){
        this.fetchData(this.url)
    }
    
}).mount('#app')