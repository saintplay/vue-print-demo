<template>
  <div>
    <div>
      <h1>Payments Path</h1>
      <div class="mock-large-content"></div>
      <div class="mock-large-content-2"></div>
      <div class="rightbar">
        <button @click="$emit('print-section')">Print Payments</button>
        <portal to="print-container" :disabled="isPrintPortalDisabled">
          <p>
            I want to print this section, which is part of the component. Only the content inside this rightbar component
          </p>
          <!-- // The only reason I made this list to repeat is to check if the content split in two pages or more! -->
          <div v-for="i in repeatTimes" :key="i">
            <p>
              <strong>{{ i }}:  You should be able to see this message  {{ repeatTimes }} times</strong>
            </p>
            <p>
              Obviously I don't wanna print the layout like the navbar, sidebar, etc.
            </p>
            <p class="print-red-parragraph">
              Custom styles only triggered in print media, like the color red of this parragraph.
            </p>
            <p class="print-hidden">
              I want to show elements only in the screen media
            </p>
            <p class="screen-hidden">
              I want to show elements only in the print media
            </p>
          </div>
        </portal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'payments-page',
  props: {
    printMode: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      repeatTimes: 10
    }
  },
  computed: {
    isPrintPortalDisabled () {
      return !this.printMode
    }
  }
}
</script>

<style lang="scss" scoped>
.mock-large-content {
  width: 70%;
  height: 500px;
  background-color: #333333;
}
.mock-large-content-2 {
  width: 70%;
  height: 200px;
  margin-top: 20px;
  background-color: #3c75d1;
}

.rightbar {
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 30%;
  padding: 12px 16px;
  overflow-y: scroll;
  box-sizing: border-box;
}
</style>
