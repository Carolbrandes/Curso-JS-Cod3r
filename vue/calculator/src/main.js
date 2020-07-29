// o build procura o arquivo main.js
import Vue from 'vue'
import App from './App'

new Vue({
    // aqui ele esta criando um elemento e jogando na div com id app
    render: h => h(App)
    // ou
    // render(createElement){
    //     return createElement(App)
    // }
}).$mount("#app")