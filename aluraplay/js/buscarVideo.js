import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostarVideos.js";

async function buscarVideo (evento){
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideoApi(dadosDePesquisa);
    const lista = document.querySelector("[data-lista");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    // lista.innerHTML=``;

    busca.forEach(element => { lista.appendChild(constroiCard(element.titulo, element.descricao, element.url, element.imagem))});
}

const botaoDePesquisa = document.querySelector("[data-botaoPesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento));
