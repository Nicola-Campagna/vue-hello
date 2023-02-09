// Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.


// setting Vue Js
const setVue = Vue.createApp({
    data() {
        return {
            message: "Intro VueJs, framework di Javascript"
        }

    }
})
setVue.mount("#root")