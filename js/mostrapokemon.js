function mostraPokemon(url) {
  //TO-DO:
  //  1. FAZER CONSUMO DA URL RECEBIDA COMO PARAMETRO
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.send();
  xhr.onload = function(e) {
    const res = JSON.parse(xhr.response);
    populaModal(res);
    $('#modal').modal({ show: true });
    document.getElementById("button").onclick = favoritarPokemon (res.id);
    // document.getElementById("export").onclick = exportaFavoritos(res, pokemonsFavoritados);
  }
}
  //  2. TRATAR DADOS RECEBIDOS PELA URL
  //  3. CHAMAR FUNÇÃO POPULA MODAL PARA ELA ADICIONAR
  //     OS COMPONENTES HTML NO MODAL
  //  4. ABRIR MODAL (.modal) COM JAVASCRIPT
  //     (http://getbootstrap.com/docs/4.0/components/modal/#via-javascript)

// Mostrar o nome, imagem do pokemon, tipo (todos os tipos), peso, altura e id

function populaModal(res) {
  console.log(res);

  //TO-DO:
  //  1. CRIAR COMPONENTES PARA MOSTRAR NO MODAL 
  //     SEGUINDO O PADRÃO DO BOOTSTRAP
  const modal = document.getElementById('modal');
  while(modal.firstChild) {
    modal.removeChild(modal.firstChild);
  }

  let div = document.createElement('div');

  document.getElementById('modal').appendChild(div);

  const modalDialog = document.createElement('div');
  modalDialog.classList.add('modal-dialog');
  div.appendChild(modalDialog);

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modalDialog.appendChild(modalContent);

  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modal-header');
  modalContent.appendChild(modalHeader);

  const modalTitle = document.createElement('h5');
  modalTitle.classList.add('modal-title');
  modalTitle.innerHTML = res.name;
  modalHeader.appendChild(modalTitle);

  const modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');
  modalContent.appendChild(modalBody);

  const modalImage = document.createElement('div');
  modalImage.classList.add('modal-image');
  console.log(`${res.sprites.front_default}`)
  modalImage.innerHTML = "<img src=" + `${res.sprites.front_default}` + " />";
  modalContent.appendChild(modalImage);

  const modalP = document.createElement('p');
  modalP.innerHTML = `Name: ${res.name} Peso: ${res.weight} Altura: ${res.height} Id: ${res.id}`;
  modalContent.appendChild(modalP);
  for (let index = 0; index < res.types.length; index++) {
    var modalPTipo = document.createElement('p');
      let type = res.types[index].type.name;
      modalPTipo.innerHTML = `Type: ${type}`;
      modalContent.appendChild(modalPTipo);
  }

  const modalButton = document.createElement('button');
  modalButton.classList.add('btn');
  modalButton.classList.add('btn-primary');
  modalContent.appendChild(modalButton);
  modalButton.id = "button";
}

  //     (http://getbootstrap.com/docs/4.0/components/modal/#modal-components)
  //  2. LINKAR TODOS OS COMPONENTES COM O MODAL .modal
  //  3. SEMPRE QUE FECHAR O MODAL LIMPAR O CONTEUDO ADICIONADO

