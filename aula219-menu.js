// qd o href do link mudar a funcao abaixo sera executada
window.onhashchange = function (e) {
    // o split vai pegar a url, vai e vai colocar em um array. a posicao de
    // indice 0 vai conter a url antes do caracter # e o indice 1 vai ter o
    // texto da url apos a #
    const oldURL = e.oldURL.split("#")[1];

    // pega a nova url e pega o conteudo apos a #
    const newURL = e.newURL.split("#")[1];

    const oldMenu = document.querySelector(`.menu a[href='#${oldURL}']`);
    const newMenu = document.querySelector(`.menu a[href='#${newURL}']`);

    //Se oldLink != undefined retorna true e entra na condicional

    oldMenu && oldMenu.classList.remove('selected');
    newMenu && newMenu.classList.add('selected');

}