// no momento da declaracao ela já invocada
// foge do escopo global
// td que for criado dentro da funcao e escopo local, ou seja se vc criar um var, let e const so sera acessivel dentro da funcao.
//IIFS = imediately invoked function expression 

(function(){
        console.log('será executado na hora!')
        console.log('Foge do escopo mais abrangente!')
})()
