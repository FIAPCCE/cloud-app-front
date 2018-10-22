<template lang="pug">
  menu-topo
  section(id="dashboard-section", class="col-md-12")
    div(class="row")
        menu-base
        div(class="col-md-10")
            div(class="container")
                h3 
                    i(class="fa fa-th-list")
                    span  Listagem dos cursos
                if (cursos.length > 0)
                    table(class="table table-striped")
                        thead(class="thead")
                            tr
                                th(scope="col") Nome
                                th Ação
                        tbody
                            each curso in cursos
                                tr
                                    td= curso.nome
                                    td
                                        i(class="fa fa-eye") 
                                        span: a(href="/curso/"+curso._id)  ver curso
                else
                    div(class="alert alert-warning", role="alert")
                        h3 Nenhum curso cadastrdado!
                        p Por favor, cadastre um novo curso
                        a(href="/novo-curso") Novo Curso
</template>
<script>
  import MenuTopo from '@/components/MenuTopo.vue';
  import Menu from '@/components/Menu.vue';
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
