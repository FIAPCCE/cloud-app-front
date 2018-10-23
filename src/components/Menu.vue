<template>
  <div id="menu-dashboard" class="col-md-2 border-right bg-dark">
    <ul>
      <li>
        <router-link to="/dashboard" class="link-options">
          <i class="fa fa-th-list"></i> 
          <span> Listagem dos cursos </span>
        </router-link>
      </li>
      <li>
        <router-link to="/novo-curso" class="link-options">
          <i class="fa fa-plus"></i>
          <span> Novo Curso </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    
  }
</script>