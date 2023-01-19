/*Representacion declarativa se le llama a las {{}} la cuales arrojan 
el resultado de una operacion o funcion*/
const app= Vue.createApp({
   /* template: `
    <h1>Hola mundo</h1>
    <p> {{true ?'activo':'inactivo'}} </p>
    `
    se mantiene la parte de html separada del documento de js*/

    data(){
        return{
            hero: 'Bruce Wayne',
            quote: 'I\'m batman!'
        }
    },
    methods:{
        changeQuote(){
           this.hero='Maria Ponce'
        }
    }
   
})
app.mount('#myApp')

//estado del componente-data
