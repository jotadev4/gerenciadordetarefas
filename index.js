function addCard(button) {
    const cardText = prompt("Digite o conteúdo do cartão:");
    if (cardText) {
        const card = document.createElement("div");
        card.className = "card";
        card.textContent = cardText;
        button.parentNode.insertBefore(card, button);
    }
}

function addList() {
    const listName = document.getElementById("novalista").value;
    if (listName) {
        const list = document.createElement("div");
        list.className = "list";
        list.innerHTML = `
            <h3>${listName}</h3>
            <div class="add-card" onclick="addCard(this)">Adicionar um cartão</div>
        `;
        document.getElementById("board").insertBefore(list, document.querySelector(".add-list"));
        document.getElementById("newListName").value = "";
    }
}
