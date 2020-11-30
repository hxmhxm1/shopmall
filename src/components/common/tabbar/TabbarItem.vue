<template>
   <div class="tab-bar-item" @click="itemClick">
     <div v-if="!isActive"><slot name="icon"></slot></div>
     <div v-else><slot name="icon-active"></slot></div>
     <div :class="{active:isActive}"><slot name="title"></slot></div>
   </div>
</template>
<script>

export default {
    name:"TabbarItem",
    data(){
        return{
            // isActive:false
        }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    props:{
      path:String
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
      }
    }
}
</script>
<style scoped>
.tab-bar-item{
  flex:1;
  text-align: center;
  padding-bottom:5px
}
.tab-bar-item img{
  height: 25px;
  width: 25px;
   vertical-align: middle;
}
.active{
    color: red;
}
</style>