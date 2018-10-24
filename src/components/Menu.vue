<template>
  <div id="menu-dashboard" class="col-md-2 border-right bg-dark">
    <ul>
      <li>
        <router-link to="/dashboard" class="link-options">
          <i class="fa fa-th-list"></i>
          <span> Entretenimentos </span>
        </router-link>
      </li>
      <li>
        <router-link to="/novo-entretenimento" class="link-options">
          <i class="fa fa-plus"></i>
          <span> Novo Entretenimento </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>
