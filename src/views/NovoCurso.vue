<template>
  <div>
    <menu-topo></menu-topo>
    <section id="dashboard-section" class="col-md-12">
      <div class="row">
        <menu-base></menu-base>
        <div class="col-md-10">
          <h3> Novo Curso </h3>
          <p>Cadastre os dados para um novo curso</p>
          <form action="?" method="post">
            <div class="form-group">
              <input type="text" name="nome" class="form-control" placeholder="Nome do curso">
            </div>
            <div class="form-group">
              <input type="text" name="ch" class="form-control" placeholder="Carga Horaria">
            </div>
            <div class="form-group">
              <select name="categoria" class="form-control">
                  <option value=""> Selecione uma categoria </option>
              </select>
            </div>
            <div class="form-group">
              <textarea name="descricao" cols="30" rows="10" class="form-control" placeholder="Descrição do curso"></textarea>
            </div>
            <div class="form-group">
              <button class="btn btn-primary to-right">Novo Curso</button>
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
      cursos: {}
    }
  }
}
</script>
