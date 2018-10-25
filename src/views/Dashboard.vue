<template>
  <div>
    <menu-topo></menu-topo>
    <section id="dashboard-section" class="col-md-12">
    <div class="row">
      <menu-base></menu-base>
      <div class="col-md-10">
        <div class="container">
          <h3> <i class="fa fa-th-list"></i> Entretenimentos </h3>
          <div v-if="entretenimentos.length > 0">
            <p v-if="message.length > 0" class="alert alert-success"> {{message}} </p>
            <table class="table table-striped">
              <thead class="thead">
                <tr>
                  <th scope="col"> Nome </th>
                  <th scope="col"> CNPJ </th>
                  <th scope="col"> Endereco </th>
                  <th scope="col"> Categoria </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="entretenimento of entretenimentos" :key="entretenimento.nome">
                  <td> {{entretenimento.nome}} </td>
                  <td> {{entretenimento.cnpj}} </td>
                  <td> {{entretenimento.endereco}} </td>
                  <td> {{entretenimento.categoria}} </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-if="!entretenimentos.length > 0">
            <h3> Nenhum curso cadastrado! </h3>
            <p> Por favor, cadastre um novo Entretenimentos </p>
            <router-link to="/novo-entretenimento"> Novo Entretenimentos </router-link>
          </div>
        </div>
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
      url: 'https://startup-app-back.herokuapp.com/entretenimentos',
      entretenimentos: {},
      message: ''
    }
  },

  created: function () {
    console.log(this.$route.params)
    if (typeof this.$route.params.cadastro !== 'undefined') {
      this.message = 'Cadastro efetuado com sucesso!'
    }

    this.getEntretenimentos()
  },

  methods: {
    getEntretenimentos: function () {
      const self = this
      self.$http.get(self.url)
        .then(res => { self.entretenimentos = res.data })
        .catch(err => console.log(err))
    }
  }
}
</script>
