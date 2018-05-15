<template>
  <div id="app">
    <div v-show="!printMode">
      <the-navbar />
      <router-view
        :print-mode="printMode"
        @print-section="onPrintSection"
      />
    </div>
    <div v-show="printMode">
      <div class="print-hidden">
        <button @click="print">Print</button>
        <button @click="closePrintMode">Close Print View</button>
      </div>
      <portal-target name="print-container" />
    </div>
  </div>
</template>

<script>

import TheNavbar from './components/TheNavbar'

export default {
  name: 'app',
  components: {
    TheNavbar
  },
  data () {
    return {
      printMode: false
    }
  },
  methods: {
    print() {
      window.print()
    },
    onPrintSection () {
      this.printMode = true
    },
    closePrintMode () {
      this.printMode = false
    }
  }
}
</script>

<style lang="scss">
.print-hidden {
  @media print {
    display: none;
  }
}

.screen-hidden {
  @media screen {
    display: none;
  }
}

.print-red-parragraph {
  @media print {
    color: tomato;
  }
}
</style>
