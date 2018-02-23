<template>
  <div class="ff-sidebar-container">
    <nav class="ff-sidebar">
      <a id="sidebar-logo"><img id="logo-big" src="../styles/acquirer-portal/clients/axis/logo-axis_bank.svg" /></a>
      <ul>
        <li   v-for="option in menuOptions" :key="option.index">
          <a to="#0">{{option.name}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'InputEle',
    data: function () {
      return {
        menuOptions: [
          {
            index: 0,
            name: 'portfolio'
          },
          {
            index: 1,
            name: 'merchants'
          },
          {
            index: 2,
            name: 'transaction'
          },
          {
            index: 3,
            name: 'reports'
          }
        ]
      }
    }
  }
</script>
