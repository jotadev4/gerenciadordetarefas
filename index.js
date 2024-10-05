function addCard(button) {
    const cardText = prompt("Digite o conteúdo do cartão:");
    if (cardText && cardText.trim() !== "") { // Validação para evitar textos vazios
        const card = document.createElement("div");
        card.className = "card";
        card.textContent = cardText.trim();
        button.parentNode.insertBefore(card, button);
    } else {
        alert("O conteúdo do cartão não pode estar vazio.");
    }
}

function addList() {
    const listName = document.getElementById("newListName").value.trim();
    if (listName !== "") { // Validação para evitar listas com nome vazio
        const list = document.createElement("div");
        list.className = "list";
        list.innerHTML = `
            <h3>${listName}</h3>
            <div class="add-card" onclick="addCard(this)">Adicionar um cartão</div>
        `;
        document.getElementById("board").insertBefore(list, document.querySelector(".add-list"));
        document.getElementById("newListName").value = "";
    } else {
        alert("O nome da lista não pode estar vazio.");
    }
}
