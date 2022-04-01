import axios from 'axios'

export default {
    state: {
        products: [],
        product: null
    },
    getters: {
        products: state => state.products
    },
    mutations: {
        SET_PRODUCTS: (state, products) => {
          state.products = products
        },
        SET_PRODUCT: (state, product) => {
          state.product = product
        }
      },
    actions: {
        getProducts: async ({commit}) => {
            const res = await axios.get('http://localhost:9999/api/products')
            commit('SET_PRODUCTS', res.data)
        },
        getProductById: async ({commit}, id) => {
            const res = await axios.get('products/' + id)
            commit('SET_PRODUCT', res.data)
        }
    }
  }