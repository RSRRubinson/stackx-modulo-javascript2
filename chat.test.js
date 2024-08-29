const { 
    listaMensagens, 
    adicionarMensagem, 
    formatarMensagens,
    atualizarHTML,
    commitMessageClickHandler
 } = require('./chat');

test('Validar se listaMensagens está definido como array', () => {
    expect(listaMensagens).toStrictEqual([]);
});

test('Adicionar mensagem a lista de mensagens', () => {
    adicionarMensagem('stackx', 'Olá! Sou o assistente das aulas de Javascript.');
    expect(listaMensagens).toStrictEqual([{
        "apelido": "stackx",
        "mensagem": "Olá! Sou o assistente das aulas de Javascript."
    }]);
});

test('Formatar mensagens da lista', () => {
    let messages = formatarMensagens().replace(/\s\s+/g, '')
    expect(messages).toBe(`<div class="chat-message"><span class="chat-message-apelido">stackx</span><span class="chat-message-item">Olá! Sou o assistente das aulas de Javascript.</span></div>`);   
});

test('Atualizar HTML', () => {
    document.body.innerHTML = '<div id="chat-messages"></div>';
    atualizarHTML();

    let messagesHTML = document
        .getElementById('chat-messages')
        .innerHTML
        .replace(/\s\s+/g, '');

    expect(messagesHTML).toBe(`<div class="chat-message"><span class="chat-message-apelido">stackx</span><span class="chat-message-item">Olá! Sou o assistente das aulas de Javascript.</span></div>`);
});

test('Testar o evento de click no botão', () => {
    document.body.innerHTML = `
        <div id="chat-messages"></div>
        <input type="text" id="message-input" placeholder="Digite uma mensagem..." autofocus>
    `;
    document.getElementById('message-input').value = 'Hello world!';
    commitMessageClickHandler();
    expect(listaMensagens.length).toBe(2);
    let value = document.getElementById('message-input').value;
    expect(value).toBe('');
});