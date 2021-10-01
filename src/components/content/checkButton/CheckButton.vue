<template>
  <div class="item_check">
    <div class="check_box" :class="{ checked: isChecked }"></div>
  </div>
</template>
<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: Boolean
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.item_check {
  width: 1.2rem;
}
.check_box {
  position: relative;
  top: calc(50% - 7px);
  width: 18px;
  height: 18px;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid rgba(128, 128, 128, 0.4);
}

.check_box.checked {
  width: 18px;
  height: 18px;
  border-style: none;
  top: calc(50% - 0.5rem);
  background: url("~assets/img/cart/yes.svg") 0 0/100% no-repeat;
}
</style>
