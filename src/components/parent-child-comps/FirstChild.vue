<template>
    <div class="col-md-s6">
        <h1>First child component</h1>
        <p>Here is a first child component description</p>
        <p>User Name : {{ userName }} </p>
        <p>Reversed User Name : {{ reverseName() }}</p>
        <button @click='incNum'>Increase Num</button>
        <br>
        <p>Kullanici yasi : {{ age }}</p>
    </div>
</template>

<script>
export default {
    name: 'FirstChild',
    props : {
        userName : {
            type: String,
            default : 'Vue js components'
        },
        age : String
    },
    methods: {
        reverseName(){
            return this.userName.split('').reverse().join('');
        },
        incNum(){
            return this.$emit('inc-num', 100);
        }
    }
}
</script>

<style scoped>
    div{
        background-color: lightcoral;
        padding: 20px;
        border: 1px solid #666;
        display: inline-block;
    }
</style>