<template>
    <div>
       <h2>Child Components</h2> 
       <p>{{ cname}}</p>
       <ul>
           <li v-for="(user,key) in users" :key="key">
                <!-- {{ user.name }} -->
                 <UserList :user="user" :viewData="viewData"></UserList>
           </li>
       </ul>
       <button class="btn btn-info" @click="parentFun">Call To Parent Functions!</button>
    </div>
   
</template>

<script>
import UserList from './UserList.vue';
export default {
    components:{
        UserList,
    },
    props:{
        cname:String,
        users:Object,
        parentFun:Function
    },  
    data() {
        return {}
    },
    methods: {
        viewData(name) {
            console.log("function called from parent!" + ' ' + name);
        }
    }
}
</script>

<style scoped>

</style>
