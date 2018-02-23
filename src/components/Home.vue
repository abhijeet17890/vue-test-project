<template>
  <div>
    <header-ele></header-ele>
    <div class="padded-content">
      <div class="row margin-top-small margin-bottom-large">
        <div class="portion six-twelfths margin-top-tiny seven-twelfths-on-tab-ls whole-on-tab-pt whole-on-mobile">
          <img src="../styles/acquirer-portal/clients/axis/logo-axis_bank.svg">
        </div>
        <div class="portion two-twelfths">

        </div>
        <!--RIGHT CONTENT-->
        <div class="portion four-twelfths no-padding five-twelfths-on-tab-ls whole-on-tab-pt whole-on-mobile">
          <loginbox></loginbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderEle from './HeaderEle.vue'
import LoginBox from './LoginBox.vue'
export default {
  name: 'Home',
  components: {
    'header-ele': HeaderEle,
    'loginbox': LoginBox

  }
}
</script>
