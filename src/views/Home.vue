<template>
  <section>
    <div id="login-section" class="col-md-12">
        <div id="data-holder" class="col-md-6">
            <div id="form-login">
              <div class="container">
                <p class="text-center"> Informe o seus dados de acesso </p>
                <p v-if="error.length > 0" class="alert alert-danger">
                  {{error}}
                </p>
                <p v-if="cadastrado.length > 0" class="alert alert-success">
                  {{cadastrado}}
                </p>
                <form v-on:submit.prevent action="?" method="post">
                  <div class="form-group">
                      <input v-model="email" type="text" placeholder="Email" name="email" class="form-control">
                  </div>
                  <div class="form-group">
                    <input v-model="senha" type="password" placeholder="Senha" name="pass" class="form-control">
                  </div>
                  <router-link to="/cadastro"> novo cadastro </router-link>
                  <div class="form-group btn-holder">
                      <button @click="login()" class="btn btn-primary to-right">LOGIN</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home',
  data: function () {
    return {
      url: 'https://startup-app-back.herokuapp.com/usuario/login',
      email: '',
      senha: '',
      error: '',
      cadastrado: ''
    }
  },
  created: function () {
    if (typeof this.$route.params.cadastro !== 'undefined') {
      this.cadastrado = 'Cadastro efetuado!'
    }
  },
  methods: {
    login: function () {
      this.error = ''
      const self = this

      if (this.email === '' || this.senha === '') {
        this.error = 'Informe os dados'
        return false
      }

      this.$http.post(this.url, { email: this.email, senha: this.senha })
        .then(res => self.passport(res.data))
        .catch(err => console.log(err))
    },

    passport: function (dados) {
      if (typeof dados === 'string' && dados === '') {
        this.error = 'Usuario não existe!'
        return false
      }

      this.$router.push('dashboard')
    }
  }
}
</script>
