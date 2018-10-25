<template>
  <div>
    <menu-topo></menu-topo>
    <section id="dashboard-section" class="col-md-12">
      <div class="row">
        <menu-base></menu-base>
        <div class="col-md-10">
          <h3> <i class="fa fa-pencil"></i> Novo Entretenimento </h3>
          <p>Cadastre os dados para um novo entretenimento</p>
          <p v-if="error.length > 0" class="alert alert-danger"> {{error}} </p>
          <form v-on:submit.prevent action="?" method="post">
            <div class="form-group">
              <input v-model="nome" type="text" name="nome" class="form-control" placeholder="Nome do Entretenimento">
            </div>
            <div class="form-group">
              <input v-model="cnpj" type="text" name="cnpj" class="form-control" placeholder="CNPJ">
            </div>
            <div class="form-group">
              <input v-model="endereco" type="text" name="endereco" class="form-control" placeholder="Endereço">
            </div>
            <div class="form-group">
              <select v-model="categoria" name="categoria" class="form-control">
                  <option value=""> Selecione uma categoria </option>
                  <option value="Diversão"> Diversão </option>
                  <option value="Musica"> Musica </option>
                  <option value="Filmes"> Filmes </option>
                  <option value="Tecnologia"> Tecnologia </option>
                  <option value="Trip"> Trip </option>
                  <option value="Educacional"> Educacional </option>
              </select>
            </div>
            <div class="form-group">
              <button @click="cadastro" class="btn btn-primary to-right"> <i class="fa fa-plus"></i> Novo Entretenimento</button>
            </div>
          </form>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import MenuTopo from '@/components/MenuTopo.vue'
import Menu from '@/components/Menu.vue'
export default {
  components: {
    'menu-topo': MenuTopo,
    'menu-base': Menu
  },
  data: function () {
    return {
      url: 'http://localhost:4000/entretenimento/new',
      nome: '',
      cnpj: '',
      endereco: '',
      categoria: '',
      error: ''
    }
  },
  methods: {
    cadastro: function () {
      const self = this

      if (self.nome === '' || self.cnpj === '' || self.endereco === '' || self.categoria === '') {
        self.error = 'Por favor, informe todos os dados!'
        return false
      }

      self.$http.post(self.url, {
        nome: self.nome,
        cnpj: self.cnpj,
        endereco: self.endereco,
        categoria: self.categoria
      })
        .then(res => self.redirect())
        .catch(err => console.log(err))
    },
    redirect: function () {
      this.$router.push({ name: 'dashboard', params: { cadastro: true } })
    }
  }
}
</script>
