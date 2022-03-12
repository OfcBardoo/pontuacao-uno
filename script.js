var rafael = { nome: "Rafael", vitorias: 0, pontos: 0 };
var daniele = { nome: "Daniele", vitorias: 0, pontos: 0 };
var kenia = { nome: "Kênia", vitorias: 0, pontos: 0 };
var alan = { nome: "Alan", vitorias: 0, pontos: 0 };
var karina = { nome: "Karina", vitorias: 0, pontos: 0 };

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3;
  return pontos;
}

rafael.pontos = calculaPontos(rafael);
daniele.pontos = calculaPontos(daniele);
kenia.pontos = calculaPontos(kenia);
alan.pontos = calculaPontos(alan);
karina.pontos = calculaPontos(karina);

var jogadores = [rafael, daniele, kenia, alan, karina];

function exibeJogadores(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadores(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadores(jogadores);
}