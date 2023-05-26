//variaveis do ator
let xAtor = 100;
let yAtor = 366;

let colisao = false;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 2;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()){
      yAtor += 2;
    }
  }
  if (keyIsDown(LEFT_ARROW)) {
    xAtor -= 2;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xAtor += 2;
  }
}

function voltaInicio() {
  if (yAtor < height) {
    xAtor = 370;
    meusPontos += meusPontos;      
  }
}

function verificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15) 
    if (colisao) {
        voltaAtorPosicaoInicial();
      somDaColisao.play();
    if (pontosMaiorQueZero()) {
        meusPontos = 0;
      } 
    }
  }
}

function voltaAtorPosicaoInicial() {
  yAtor = 366;
}

function marcaPonto() {
  if (yAtor < -10) {    
      meusPontos += 1;
    somDosPontos.play();
    voltaAtorPosicaoInicial();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function podeSeMover() {
  return yAtor < 366;
}





















