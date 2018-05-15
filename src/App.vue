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
      <the-print-banner
        @print="print"
        @close-print-mode="closePrintMode"
      />
      <div class="screen-hidden">
        <portal-target name="print-container" />
      </div>
    </div>
  </div>
</template>

<script>

import ThePrintBanner from './components/ThePrintBanner'
import TheNavbar from './components/TheNavbar'

export default {
  name: 'app',
  components: {
    TheNavbar,
    ThePrintBanner
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
      // Use nextTick to ensure dom nodes are updated!
      this.$nextTick(()  => {
        this.$nextTick(()  => {
          this.print()
        })
      })
    },
    closePrintMode () {
      this.printMode = false
    }
  }
}
</script>

<style lang="scss">
/*
  !important statments are just optional,
  but you know, since these are utility classes makes sense to apply it
*/

.print-hidden {
  @media print {
    display: none !important;
  }
}

.screen-hidden {
  @media screen {
    display: none !important;
  }
}

.print-red-parragraph {
  @media print {
    color: tomato;
  }
}
</style>
