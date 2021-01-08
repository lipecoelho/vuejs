<template>
  <div class="container">
    <h1>Componente Usuário</h1>
    <p>Esse é um componente muito legal!</p>
    <p>Nome: {{ nome }}</p>
    <p>Idade: {{ idade }}</p>
    <button @click="alterarNome">Alterar nome</button>

    <hr />
    <div class="componentes">
      <app-usuario-info
        :nome="nome"
        :idade="idade"
        @nameRestarted="nome = $event.newName + $event.oldName"
        :reiniciarFn="reiniciarNome"
      />
      <app-usuario-editar :idade="idade" />
    </div>
    <br />
    <div class="row">
      <div class="col">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div class="col">
        <div class="resultTable" style="text-align: center">
          <p>
            ID: {{id}}
          </p>
          <p>
            Nome: {{name}}
          </p>
          <p>
            Age: {{idadeTable}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppUsuarioInfo from "./UsuarioInfo";
import AppUsuarioEditar from "./UsuarioEditar";

export default {
  components: { AppUsuarioInfo, AppUsuarioEditar },
  data() {
    return {
      nome: "Pedro",
      idade: 37,
    };
  },
  methods: {
    alterarNome() {
      this.nome = "Felipe";
    },
    reiniciarNome() {
      this.nome = "Pedro";
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}

.row {
  width: 100%;
  display: flex;
}
table {
  width: 100%;
}
.col {
  width: 50%;
}
</style>
