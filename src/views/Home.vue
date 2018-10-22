<template>
  <section>
    <div id="login-section" class="col-md-12">
        <div id="data-holder" class="col-md-6">
            <div id="form-login">
                <p class="text-center"> Informe o seus dados de acesso </p>
                <div v-if="error.length > 0">
                    {{error}}
                </div>
                <form action="?" method="post">
                    <div class="container">
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
                    </div>
                </form>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data: function () {
    return {
      email: '',
      senha: '',
      error: ''
    }
  },
  methods: {
    login: function () {
      console.log(this.email);
    }
  }
}
</script>
