<template>
  <h1>details</h1>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props:['id'],
    methods: {
        ...mapActions(['getProductById'])
    },
    created(){
        this.getProductById(this.id)
    }

}
</script>

<style>

</style>