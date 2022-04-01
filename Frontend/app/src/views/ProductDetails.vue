<template>
  <div v-if="product">
    <div class="row">
      <div class="col-lg-6 text-center mt-5">
        <img :src="product.image" class="img-fluid">
      </div>
      <div class="col-lg-6 text-center mt-5 text-lg-start">
        <h2>{{product.name}}</h2>
        <p class="h3 text-danger">{{product.price}} SEK</p>
        <div class="mt-5">
          <p>{{product.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  props: ['id'],
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapActions(['getProductById', 'addToCart'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProductById(this.id)
  }
}
</script>

<style>

</style>