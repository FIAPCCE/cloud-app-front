<template>
  <div>
    <menu-topo></menu-topo>
    <section id="dashboard-section" class="col-md-12">
      <div class="row">
        <menu-base></menu-base>
        <div class="col-md-10">
          <h3> <i class="fa fa-pencil"></i> Novo Entretenimento </h3>
          <p>Cadastre os dados para um novo entretenimento</p>
          <form action="?" method="post">
            <div class="form-group">
              <input type="text" name="nome" class="form-control" placeholder="Nome do Entretenimento">
            </div>
            <div class="form-group">
              <input type="text" name="cnpj" class="form-control" placeholder="CNPJ">
            </div>
            <div class="form-group">
              <input type="text" name="endereco" class="form-control" placeholder="Endereço">
            </div>
            <div class="form-group">
              <select name="categoria" class="form-control">
                  <option value=""> Selecione uma categoria </option>
              </select>
            </div>
            <div class="form-group">
              <button class="btn btn-primary to-right"> <i class="fa fa-plus"></i> Novo Entretenimento</button>
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
