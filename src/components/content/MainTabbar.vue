<template>
 <Tabbar>
      <Tabbar-item path="/home">
        <img slot="icon" src="~assets/img/tabbar/home.svg" alt="home">
        <img slot="icon-active" src="~assets/img/tabbar/home_active.svg" alt="home">
        <div slot="title">首页</div>
      </Tabbar-item>
      <Tabbar-item path="/category">
        <img slot="icon" src="~assets/img/tabbar/category.svg" alt="category">
        <img slot="icon-active" src="~assets/img/tabbar/category_active.svg" alt="category">
        <div slot="title">分类</div>
      </Tabbar-item>
      <Tabbar-item path="/cartshop">
        <img slot="icon" src="~assets/img/tabbar/shopcart.svg" alt="shopcart">
        <img slot="icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="shopcart">
        <div slot="title">购物车</div>
      </Tabbar-item>
      <Tabbar-item path="/profile">
        <img slot="icon" src="~assets/img/tabbar/profile.svg" alt="profile">
        <img slot="icon-active" src="~assets/img/tabbar/profile_active.svg" alt="profile">
        <div slot="title">我的</div>
      </Tabbar-item>
    </Tabbar>   
</template>

<script>
import Tabbar from "../common/tabbar/Tabbar";
import TabbarItem from "../common/tabbar/TabbarItem";
export default {
    name:"MainTabbar",
     components: {Tabbar,
  TabbarItem},
}
</script>

<style scoped>

</style>