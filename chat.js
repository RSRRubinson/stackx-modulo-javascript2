/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */

const listaMensagens = [];

const messageCommit = capturaElementoHtml('#message-commit');
const messageInput  = capturaElementoHtml('#message-input');

// console.log(messageInput);

function capturaElementoHtml(elemento){
  return document.querySelector(elemento);
}

function criaElementoHtml(tag){
  return document.createElement(tag);
}

function adicionaClasse(elemento, nomeClasse){
  elemento.classList.add(nomeClasse);
}

function alteraInnerText(elemento, texto){
  elemento.innerText = texto;
}

function adicionaElementoFilhoNoElementoPai(elementoPai, elementoFilho){
  elementoPai.appendChild(elementoFilho);
}

function limpaInput(elemento){
  elemento.value = "";
}

function adicionaFocus(elemento){
  elemento.focus();
}
// 
// Código desenvolvido conforme solicitado na tarefa
//
function adicionarMensagem(apelido, mensagem) {
                                                
  const estrutura = {
      apelido: String(apelido), 
      mensagem: String(mensagem),
  }
  
  listaMensagens.push(estrutura)  
  
}
/*
<div class="chat-message">
    <span class="chat-message-apelido">
        <!-- implementar apelido aqui -->
    </span>
    <span class="chat-message-item">
        <!-- implementar mensagem -->
    </span>
</div>
*/

function formatarMensagens(){
  const fragmento = document.createDocumentFragment();

  listaMensagens.forEach(
    function (item) {
     
     const chatMessageDiv = criaElementoHtml('div');
     // chatMessageDiv.classList.add('chat-message');
     adicionaClasse(chatMessageDiv,'chat-message')
     const chatMessageApelidoSpan = criaElementoHtml('span');
     
     adicionaClasse(chatMessageApelidoSpan,'chat-message-apelido');
     alteraInnerText(chatMessageApelidoSpan,item.apelido);
         
     const chatMessageItemSpan = criaElementoHtml('span');
     adicionaClasse(chatMessageItemSpan,'chat-message-item');
     alteraInnerText(chatMessageItemSpan,item.mensagem);

     adicionaElementoFilhoNoElementoPai(chatMessageDiv,chatMessageApelidoSpan);
     adicionaElementoFilhoNoElementoPai(chatMessageDiv,chatMessageItemSpan);
     adicionaElementoFilhoNoElementoPai(fragmento,chatMessageDiv);
     
    }
   
  );   
  
  return fragmento;
   
}

function atualizarHTML(){
  // const chatMessages = document.getElementById('chat-messages')
  const chatMessages = document.querySelector('#chat-messages');
  
  chatMessages.innerHTML = "";
  adicionaElementoFilhoNoElementoPai(chatMessages,formatarMensagens());
  // console.log(chatMessages);
 
}

function commitMessageClickHandler(){
  const apelido = 'DevStackX RSR > '
  const mensagem = messageInput.value.trim();
  
  if (mensagem.length === 0) {
    alert('Campo vazio, Favor preencher o Campo Mensagem!');
    limpaInput(messageInput);
    adicionaFocus(messageInput);
    return;
  }
   adicionarMensagem(apelido, mensagem);
   atualizarHTML();

   limpaInput(messageInput);
   adicionaFocus(messageInput);
   // console.log(listaMensagens);
}
 
messageCommit.addEventListener('click',commitMessageClickHandler);


// atualizarHTML();
// formatarMensagens();

// adicionarMensagem('Leo', 'teste1');
// adicionarMensagem('Rsr', 'teste2');

// console.log(listaMensagens);

// Exemplo: function minhaFuncao() { ... }

// --------------------------------
// Não remover estas linhas
// --------------------------------
// module.exports =
//{
//  listaMensagens,
//  adicionarMensagem,
//  formatarMensagens,
//  atualizarHTML,
//  commitMessageClickHandler
//};
// --------------------------------