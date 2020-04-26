<template>
    <div class="container">
        <h1>Parent component</h1>
        <p>Here is a parent component</p>
        <button @click="changeName">Change Name</button>
        <span>Number : {{ num }}</span>
        <hr>
        <div class="row">
            <first-child :age='age' :userName='title' @inc-num='updateNum' />
            <second-child @ageWasEdited='age = $event' :age='age' />
        </div>   
    </div>
</template>

<script>
import FirstChild from "./FirstChild.vue"
import SecondChild from "./SecondChild.vue"
export default {
    name: 'Parent',
    components: {
        FirstChild,
        SecondChild
    },
    data : function(){
        return{
            title : 'Vue.js',
            num : 0,
            age : 27
        }
    },
    methods : {
        changeName(){
            this.title = 'React.js'
        },
        updateNum(){
            this.num +=1;
        }
    }
}
</script>

<style scoped>
    div {
        margin-top: 30px;
        padding: 20px 40px;
        background-color: #6a8d99;
        border: 1px solid #666;
    }
    div.row {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>