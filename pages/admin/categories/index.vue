<template>
  <div class="ml-24 flex flex-col items-center h-full w-11/12">
    <div class="text-4xl mt-5 text-blue-500">
      All Categories
    </div>
    <div class="mt-5">
      <input type="text" class="p-2 rounded-lg border-2 border-dashed border-blue-400" placeholder="search"
              v-model.lazy="search"
      >
    </div>
    <div class="mt-10 h-20 lg:w-7/12 w-11/12 bg-blue-300 rounded-lg p-4
     flex items-center justify-between pl-4 text-sm lg:text-xl hover:bg-blue-200 cursor-pointer"
         v-for="category in myCat" :key="category.uuid"

    >
      <div class="w-10/12" v-on:click="go(category)">
        {{ category.name }}
      </div>
      <div class="flex">
        <nuxt-link :to="{ name : 'admin-categories-id' , params : {id : category.uuid}}" title="edit"
                   class="bg-green-500 rounded-lg hover:bg-green-300 p-2 mr-2 flex items-center justify-center">
          <i class="far fa-edit"></i>
        </nuxt-link>
        <button title="delete"
                v-on:click="del(category)"
          class="bg-red-500 rounded-lg hover:bg-red-300 p-2 mr-2 flex items-center justify-center">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "index",
  head(){
    return {
      title : 'Categories | Today'
    }
  },
  layout : 'admin',
  middleware : ['myAuth','admin'],
  data(){
    return  {
      categories : [],
      search : this.$route.query.search ? this.$route.query.search : null ,
      result : []
    }
  },
  async asyncData(context){
    let res = await context.$axios.$get('/categories')
  return {
    categories : res.data
  }
  },
  watch : {
    'search'(value){
      this.$router.push('/admin/categories?search='+value)
      this.categories.filter(category => {
        if (category.name === value){
          this.result.push(category)
        }
      })
      if (value === ''){
        this.result = []
      }
    }
  },
  computed : {
    myCat(){
      if (this.result.length > 0){
        return this.result
      }
      return this.categories
    }
  },
  methods : {
    go(category){
      this.$router.push({name : 'Categories-id' , params : { id : category.uuid}})
    },
    async del(category){
     if (window.confirm('Do you want to delete '+ category.name + ' category ?')){
       let res = await this.$axios.$delete('/categories/'+ category.uuid).then(res => {
         window.alert(category.name + ' is deleted successfully.')
         this.categories = this.categories.filter(cat => {
           return cat.uuid !== category.uuid
         })
       })
     }
    }
  }
}
</script>

<style scoped>

</style>
