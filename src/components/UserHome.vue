<template>
  <div class="page-with-sidebar">
    <sidemenu></sidemenu>
    <div class="ff-content-container" style="paddingBottom:145px">
    </div>
    <div class="clear-both"></div>
  </div>
</template>

<script>
import Sidemenu from './SideMenu.vue'
export default {
  name: 'UserHome',
  components: {
    'sidemenu': Sidemenu
  }
}
</script>
