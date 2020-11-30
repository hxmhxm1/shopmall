<template>
    <div id="home">
        <p>首页</p>
        {{this.$store.state.count}}
        <div>
        <button @click='add'>+</button>
        <button @click='sub'>-</button>
        </div>
        <button @click='addcount(3)'>3</button>
        {{this.$store.getters.get}}
        <div><button @click='change'>change</button></div>
    </div>
</template>
<script>
export default {
    name:"Home",
    methods:{
        add:function(){this.$store.commit('increment')},
        sub:function(){this.$store.commit('decrement')},
        addcount:function(num){this.$store.commit('addcount',num)},
        change:function(){this.$store.dispatch('change',"我是payload")}
    }
}
</script>
<style scoped>
</style>