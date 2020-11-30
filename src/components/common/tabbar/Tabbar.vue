<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'Tabbar'
}
</script>

<style scoped>
#tab-bar{
  display:flex;
  height: 49px;
  background-color:#f6f6f6;
  position:fixed;
  left:0px;
  right:0px;
  bottom:0px;
  box-shadow:0 -3px 2px rgba(63, 44, 44, 0.05);
  font-size: 14px;
}
</style>