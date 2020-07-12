function novoElemento(tagName, className) {
        const elemento = document.createElement(tagName);
        elemento.className = className;
        return elemento;
}

// funcao que vai criar uma barreira
// barreira reversa é a barreira que vai estar em cima
// vamos instanciar essa funcao para ter mais de uma barreira
// essa e uma funcao construtora
function Barreira(reversa = false) {
        this.elemento = novoElemento('div', 'barreira');

        // vamos verificar se vamos add a borda ou o corpo primeiro:
        const borda = novoElemento('div', 'borda');
        const corpo = novoElemento('div', 'corpo');

        // se for reversa o corpo é add primeiro, se nao for reversa a borda e add primeiro
        this.elemento.appendChild(reversa ? corpo : borda);
        this.elemento.appendChild(reversa ? borda : corpo);

        this.setAltura = altura => corpo.style.height = `${altura}px`;
}

// const b = new Barreira(true);
// b.setAltura(200);
// document.querySelector('[wm-flappy]').appendChild(b.elemento);

// tb sera uma funcao construtora
// distancia entre as duas barreias
// qd o usamos o this em uma funcao construtora aquele atributo passa a ser visivel fora da funcao
// se eu quisesse colocar como atributo privado eu usar ao inves do this uma const, let ou var
// a distancia entre as barreiras e fixa o que varia e altura das barreiras
function ParDeBarreiras(altura, abertura, posicaoEixoX) {
        this.elemento = novoElemento('div', 'par-de-barreiras');
        this.superior = new Barreira(true);
        this.inferior = new Barreira(false);

        // o elemento q esta sendo inserido dentro da div, e o this.elemento dentro da funcao construtora barreira
        this.elemento.appendChild(this.superior.elemento);

        this.elemento.appendChild(this.inferior.elemento);

        this.sortearAbertura = () => {
                const alturaSuperior = Math.random() * (altura - abertura);
                const alturaInferior = altura - abertura - alturaSuperior;

                this.superior.setAltura(alturaSuperior);
                this.inferior.setAltura(alturaInferior);
        }

        // aqui estamos pegando a posição atual
        this.getX = () => parseInt(this.elemento.style.left.split('px')[0]);

        // aqui estamos alterando a posicao
        this.setX = x => this.elemento.style.left = `${x}px`;

        // saber a largura do meu elemento
        this.getLargura = () => this.elemento.clientWidth;

        // vamos executar a funcao sortearAbertura e a funcao setX
        this.sortearAbertura()
        this.setX(posicaoEixoX);

}

// const b = new ParDeBarreiras(700, 200, 400);
// document.querySelector('[wm-flappy]').appendChild(b.elemento);


// essa funcao e responsavel por controlar multiplas barreiras
// abertura o espaco entre as 2 barreiras

function Barreiras(alturaJogo, larguraJogo, abertura, espaco, notificarPonto) {
        this.pares = [
                // a primeira barreira vai estar na posicao onde termina o jogo 1200px, ou seja fora do jogo
                new ParDeBarreiras(alturaJogo, abertura, larguraJogo),
                new ParDeBarreiras(alturaJogo, abertura, larguraJogo + espaco),
                new ParDeBarreiras(alturaJogo, abertura, larguraJogo + espaco * 2),
                new ParDeBarreiras(alturaJogo, abertura, larguraJogo + espaco * 3),
        ]

        const deslocamento = 3;

        this.animar = () => {
                this.pares.forEach(par => {
                        par.setX(par.getX() - deslocamento);

                        // qd o elemento sair da area de jogo
                        // o getX é zero qd chega na quina esquerda do jogo
                        if (par.getX() < -par.getLargura()) {
                                // par.getX() -> é a posicao atual no eixo x
                                // espaco -> espaco entre as barreiras
                                // this.pares.length -> qtd de elementos q tem no meu array
                                // vai para o final
                                par.setX(par.getX() + espaco * this.pares.length);

                                // vamos sortear novamente uma nova barreira para que nao fique repetido
                                par.sortearAbertura();

                                const meio = largura / 2;
                                const cruzouMeio = par.getX() + deslocamento >= meio && par.getX() < meio
                                // se a variavel cruzouMeio for verdadeira, ele vai executar notificarPonto e se for falsa nao vai executar.
                                cruzouMeio && notificarPonto()

                        }
                });
        }
}

function Passaro(alturaJogo) {
        let voando = false;

        this.elemento = novoElemento('img', 'passaro');
        this.elemento.src = 'imgs/passaro.png';

        // vai pegar a posicao atual no eixo y
        this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0]);
        this.setY = y => this.elemento.style.bottom = `${y}px`;

        // qd o usuario estiver com qlq tecla pressionada, a variavel voando vai ser setada como true
        window.onkeydown = e => voando = true;
        // qd o usuario soltar a tecla, a variavel voando vai ser setada como false
        window.onkeyup = e => voando = false;

        // vai definir o qt passaro sobe ou quanto ele cai
        this.animar = () => {
                const novoY = this.getY() + (voando ?  8 : -5);
                // this.elemento.clientHeight -> é a altura do passaro
                const alturaMaxima = alturaJogo - this.elemento.clientHeight;

                // aqui nao vai deixar ele descer mais do que o chao
                if(novoY <= 0){
                        this.setY(0)
                }

                // aqui ele nao vai deixar ele subir mais do q altura do jogo
                else if (novoY >= alturaMaxima){
                        this.setY(alturaMaxima)
                }

                // aqui ele vai setar a nova posicao caso nao passe dos limites do jogo
                else{
                        this.setY(novoY);
                }
        }

        this.setY(alturaJogo / 2);


}


function Progresso(){
        this.elemento = novoElemento('span', 'progresso');

        this.atualizarPontos = pontos => {
                this.elemento.innerHTML = pontos;
        }

        
        this.atualizarPontos(0)
}

// const barreiras = new Barreiras(700, 1200, 200, 400);
// const passaro = new Passaro(700);
// const areaDoJogo = document.querySelector('[wm-flappy]');

// areaDoJogo.appendChild(passaro.elemento);
// areaDoJogo.appendChild(new Progresso().elemento);

// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento));

// // vamos botar um temporizador e chamar a funcao animar
// setInterval(() => {
//         barreiras.animar();
//         passaro.animar();
// }, 20)

function estaoSobrepostos ( elementoA, elementoB){
        // getBoundingClientRect -> retangulo associado aos elementos
        // na const a e b temos todas as dimensoes para verificar se houve colisao ou nao
        const a = elementoA.getBoundingClientRect();
        const b = elementoB.getBoundingClientRect();

        // verificar se houve sobreposicao na horizontal
        const horizontal = a.left + a.width >= b.left  /* 1ª possibilidade 1 para colisao*/
        && 
        b.left + b.width >= a.left /* 2ª possibilidade 1 para colisao*/

        const vertical = a.top + a.height >= b.top
        &&
        b.top + b.height >= a.top;

        return horizontal && vertical;
}

function colidiu(passaro, barreiras){
        let colidiu = false;

        barreiras.pares.forEach(parDeBarreiras => {
                if(!colidiu){
                        const superior = parDeBarreiras.superior.elemento;
                        const inferior = parDeBarreiras.inferior.elemento;

                        colidiu = estaoSobrepostos(passaro.elemento, superior) || estaoSobrepostos(passaro.elemento, inferior);
                }
        })

        return colidiu;
}


// essa funcao vai representar o jogo
function FlappyBird(){
        let pontos = 0;

        const areaDoJogo = document.querySelector('[wm-flappy]');
        const altura = areaDoJogo.clientHeight;  /* vamos pegar a altura da div  que é representada pela area do jogo*/
        const largura = areaDoJogo.clientWidth; /* vamos pegar a largura da div  que é representada pela area do jogo*/

        const progresso = new Progresso();
        // aqui estamos incrementando a variavel pontos antes de passa-la para a funcao
        const barreiras = new Barreiras(altura, largura, 200, 400, () => progresso.atualizarPontos(++pontos));

        const passaro = new Passaro(altura);

        areaDoJogo.appendChild(progresso.elemento);
        areaDoJogo.appendChild(passaro.elemento);
        barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento));

        this.start = () => {
                // loop do jogo
                const temporizador = setInterval(() => {
                        barreiras.animar();
                        passaro.animar();

                        if(colidiu(passaro, barreiras)){
                                clearInterval(temporizador);
                        }
                        
                }, 20)
        }
}

new FlappyBird().start();