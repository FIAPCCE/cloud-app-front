<template>
  <section id="login-section" class="col-md-12">
    <div id="data-holder" class="col-md-6">
      <div id="form-login">
        <div class="col-md-12 title-form">
          <p>Faça o seu cadastro</p>
          <p v-if="error.length > 0" class="alert alert-danger">
            {{error}}
          </p>
        </div>
        <form v-on:submit.prevent action="/cadastro" method="post" class="col-md-12">
          <div class="form-group">
            <input v-model="nome" type="text" name="nome" class="form-control" placeholder="Nome">
          </div>
          <div class="form-group">
            <input v-model="email" type="text" name="email" class="form-control" placeholder="Email">
          </div>
          <div class="form-group">
            <input v-model="senha" type="password" name="pass" class="form-control" placeholder="Senha">
          </div>
          <router-link to="/"> fazer login </router-link>
          <div class="form-group">
            <button @click="cadastro()" class="btn btn-primary to-right"> Cadastrar </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'cadastro',
  data: () => {
    return {
      url: 'https://startup-app-back.herokuapp.com/usuario/new',
      nome: '',
      email: '',
      senha: '',
      error: ''
    }
  },
  methods: {
    cadastro: function () {
      this.error = ''

      if (this.nome === '' || this.email === '' || this.senha === '') {
        this.error = 'Informe todos os dados!'
        return false
      }

      this.$http.post(this.url, {
        nome: this.nome,
        email: this.email,
        senha: this.senha
      })
        .then((res) => this.redirect())
        .catch((err) => console.log(err))
    },
    redirect: function () {
      this.$router.push({ name: 'home', params: { cadastro: true } })
    }
  }
}
</script>
