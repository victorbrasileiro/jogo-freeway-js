//variaveis do placar do jogo
let meusPontos = 0;

function incluiPontos() {
  stroke(255);
  textSize(16);
  textAlign(CENTER);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  //sugestao do professor text(meusPontos, width / 5, 60);
  text(meusPontos, 170, 25);

}
