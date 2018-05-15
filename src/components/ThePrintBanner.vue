<template>
  <div class="print-banner print-hidden">
    <div>
      <h2>You are in a print mode now!</h2>
      <div class="mock-image"></div>
      <h4>Caveat of this method: is necessary to show this view</h4>
    </div>
    <div>
      <button @click="$emit('print')">Print Again</button>
      <button @click="$emit('close-print-mode')">Return to Application</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'the-print-banner'
}
</script>

<style lang="scss" scoped>
$mock-image-size: 160px;

.mock-image {
  display: inline-block;
  width: $mock-image-size;
  height: $mock-image-size;
  border-radius: 50%;
  background-color: #333333;
}

.print-banner {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
</style>
