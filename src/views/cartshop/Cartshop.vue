/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
<template>
    <div id="cartshop">
        <table class="table">
            <thead>
                <tr class="good">
                    <th class="good"></th>
                    <th class="good">书籍名称</th>
                    <th class="good">出版日期</th>
                    <th class="good">价格</th>
                    <th class="good" >购买数量</th>
                    <th class="good">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in books" :key="index" class="goods">
                    <th class="good">{{item.id}}</th>
                    <th class="good">{{item.name}}</th>
                    <th class="good">{{item.date}}</th>
                    <th class="good">{{item.price}}</th>
                    <th class="good">
                        <button @click="decrement(index)">-</button>{{item.num}}<button @click="increment(index)">+</button>
                    </th>
                    <th class="good">
                        <button @click="remove(index)">移除</button>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name:"Cartshop",
    data() {
        return{
           books:[{
               id:1,
               name:"《算法导论1》",
               price:10.00,
               num:1,
               date:"2020-6-20"
           },{
               id:2,
               name:"《算法导论2》",
               price:10.00,
               num:1,
               date:"2020-6-20"
           },{
               id:3,
               name:"《算法导论3》",
               price:10.00,
               num:1,
               date:"2020-6-20"}
               ]
        }
    },
    methods:{
        // eslint-disable-next-line no-unused-vars
        decrement:function(index){
            console.log(index);
            if(this.books[index].num>1)
            this.books[index].num--
        },
        increment: function(index) {
        console.log(index);
        this.books[index].num++
      },
      remove:function(index){
          this.books.splice(index,1)
      }
    }
}
</script>
<style scoped>
.table{
    width: 100%;
    /* border: 1px solid #000; */
    padding:0;
    border-collapse:separate;
    border-spacing:0px;
}
.goods{
    border: 1px solid #000;
    margin:0;
    padding:0
}
</style>