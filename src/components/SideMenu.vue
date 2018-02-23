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
  name: 'SideMenu',
  data: function () {
    return {
      menuOptions: [
        {
          index: 0,
          name: 'Portfolio'
        },
        {
          index: 1,
          name: 'Merchants'
        },
        {
          index: 2,
          name: 'Transaction'
        },
        {
          index: 3,
          name: 'Reports'
        }
      ]
    }
  }
}
</script>
