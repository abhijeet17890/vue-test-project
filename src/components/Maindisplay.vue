<template>
  <div>
    <div class="row margin-top-tiny">
      <div class="portion whole">
          <h5>Portfolio</h5>
      </div>
    </div>
    <div class="row mode-report-holder">
      <div id="mode-widgets-box" class="box retain-layout-on-tab-ls retain-layout-on-tab-pt">
        <div class="portion one-fifth">
          <label class="text-small text-bold text-grey-60"> State </label>
          <select class="ff-select full-width" v-model="selectedState">
            <option disabled value="">Please select one</option>
            <option>Karnataka</option>
            <option>Maharashtra</option>
            <option>Andhra Pradesh</option>
          </select>
        </div>
        <div class="portion one-fifth">
          <label class="text-small text-bold text-grey-60"> Zone </label>
          <select class="ff-select full-width" v-model="selectedZone">
            <option disabled value="">Please select one</option>
            <option>Bengaluru</option>
            <option>Mysuru</option>
            <option>Mangalore</option>
          </select>
        </div>
        <div class="portion one-fifth">
          <label class="text-small text-bold text-grey-60"> MID </label>
          <input class="ff-input" v-model="mid"/>
        </div>
        <div class="portion one-fifth">
          <label class="text-small text-bold text-grey-60"> TID </label>
          <input class="ff-input" v-model="tid"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'MainDisplay',
  data: function () {
    return {
      mid: '',
      tid: '',
      selectedState: 'Karnataka',
      selectedZone: 'Bengaluru'
    }
  }
}
</script>
