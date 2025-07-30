    const nomes = [];

    function adicionarNome() {
      const nome = document.getElementById("nomeInput").value.trim();
      if (nome) {
        nomes.push(nome);
        document.getElementById("resultado").innerText = `Nome "${nome}" adicionado com sucesso.`;
        document.getElementById("nomeInput").value = "";
      } else {
        document.getElementById("resultado").innerText = "Por favor, digite um nome válido.";
      }
    }

    function listarNomes() {
      if (nomes.length === 0) {
        document.getElementById("resultado").innerText = "Nenhum nome cadastrado.";
      } else {
        document.getElementById("resultado").innerText = "Nomes cadastrados:\n" + nomes.join(", ");
      }
    }

    function buscarNome() {
      const nomeBusca = document.getElementById("buscaInput").value.trim();
      if (nomeBusca) {
        const encontrado = nomes.includes(nomeBusca);
        document.getElementById("resultado").innerText = encontrado
          ? `O nome "${nomeBusca}" foi encontrado.`
          : `O nome "${nomeBusca}" não foi encontrado.`;
      } else {
        document.getElementById("resultado").innerText = "Por favor, digite um nome para buscar.";
      }
    }