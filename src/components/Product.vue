<template>
  <div>
    <h1>Product Components!</h1>
    <button @click="getProduct(productName)" class="btn btn-warning">
      Products!
    </button>
  </div>
</template>
<script>
export default {
  name: "Products",
  data() {
    return {
      productName: "Dell Inspiron N5050",
    };
  },
  props: {
    getProduct: Function,
  },
};
</script>
<style scoped>
</style>