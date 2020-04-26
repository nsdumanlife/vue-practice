<template>
    <div class="col-md-s6">
        <h1>Second child component</h1>
        <p>Here is a second child component description</p>
        <p>User age : {{ age }}</p>
        <button @click='changeAge'>Change age </button>
    </div>
</template>

<script>
export default {
    name: 'SecondChild',
    props : ['age'],
    methods : {
        changeAge(){
            this.age=30
            this.$emit('ageWasEdited',this.age)
        }
    }
}
</script>
<style scoped>
div {
    background-color: lightgoldenrodyellow;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
}
</style>