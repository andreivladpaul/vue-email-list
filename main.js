Vue.config.devtools = true;

const app = new Vue({
    el : '#app',
    
    data : {
        emailList: [],
        email: '',
        counterMail: 10

        
        
    },
    methods: {
        createEmails() {
            for(let i = 0; i < this.counterMail; i++ )
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result) => {
                this.email = result.data.response
                this.emailList.push(this.email)
                
            })
        }

    
    }, 
    mounted() {
        this.createEmails()
    }
    
   
}) 
