function mensage(mensagem) {
  const feedback = document.getElementById("feedback");
  feedback.textContent = mensagem;
}

const personagens = [
  {
    nome: "Grimm",
    class: "Especilista de combate",
    race: "Humano",
    campanha: "Cascata",
  },
  {
    nome: "Ashura",
    class: "Artezão",
    race: "Kishin",
    campanha: "3 lados de um triângulo",
  },
];

const form = document.getElementById("form");

function renderTable() {
  const table = document.getElementById("characterTable");
  table.innerHTML = "";
  personagens.forEach(function (personagem) {
    const linha = document.createElement("tr");

    const tdNome = document.createElement("td");
    const tdClass = document.createElement("td");
    const tdRace = document.createElement("td");
    const tdCampaign = document.createElement("td");
    const tdAcoes = document.createElement("td");

    tdNome.textContent = personagem.nome;
    tdClass.textContent = personagem.class;
    tdRace.textContent = personagem.race;
    tdCampaign.textContent = personagem.campanha;

    const divActions = document.createElement("div");
    divActions.className = "actions";

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.className = "btn-editar";
    btnEditar.type = "button";

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.className = "btn-excluir";
    btnExcluir.type = "button";

    divActions.appendChild(btnEditar);
    divActions.appendChild(btnExcluir);

    tdAcoes.appendChild(divActions);

    linha.appendChild(tdNome);
    linha.appendChild(tdClass);
    linha.appendChild(tdRace);
    linha.appendChild(tdCampaign);
    linha.appendChild(tdAcoes);

    table.appendChild(linha);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim(); // .value.trim() remove os espaços em brando do inicio e do final.
  const classe = document.getElementById("class").value.trim();
  const race = document.getElementById("race").value.trim();
  const campanha = document.getElementById("campaign").value.trim();

  if (name === "" || classe === "" || race === "" || campanha === "") {
    mensage("Por favor, preencha todos os campos.");
    return;
  }
  const personagem = {
    nome: name,
    class: classe,
    race: race,
    campanha: campanha,
  };

  personagens.push(personagem);

  renderTable();

  mensage("Salvo com sucesso!");
  form.reset();
});
renderTable();
