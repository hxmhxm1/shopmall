import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 100,
        shuzu:[1,2,34,4,6]
    },
    mutations: {
        increment(state) { state.count++ },
        decrement(state) { state.count-- },
        addcount(state,num) {
            state.count +=num
        },
        change(state) {
            state.count=5;
        }
    },
    getters: {
        get:(state)=>{return state.shuzu.filter(s=>s>7)}
    },
    actions: {
        change(context,payload) {
            setTimeout(() => {
                context.commit('change', payload);
                console.log(payload);
            }
                , 3000)
        }
    }
})

export default store
