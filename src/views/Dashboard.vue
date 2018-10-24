<template>
  <div>
    <menu-topo></menu-topo>
    <section id="dashboard-section" class="col-md-12">
    <div class="row">
      <menu-base></menu-base>
      <div class="col-md-10">
        <div class="container">
          <h3> <i class="fa fa-th-list"></i> Entretenimentos </h3>
          <div v-if="cursos.length > 0">
            <table class="table table-striped">
              <thead class="thead">
                <tr>
                  <th scope="col"> Nome </th>
                  <th> Ação </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="curso of cursos" :key="curso.nome">
                  <td> {{curso.nome}} </td>
                  <td>
                    <i class="fa fa-eye"></i> <span> <router-link to=""> ver entretenimento </router-link> </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div v-if="!cursos.length > 0">
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
      cursos: {}
    }
  }
}
</script>
