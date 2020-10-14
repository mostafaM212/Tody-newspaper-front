<template>
  <div class=" w-full mt-20
  px-4 py-2 flex justify-around lg:flex-no-wrap flex-wrap border-2 border-dashed border-red-500 rounded-lg">
    <div class=" flex flex-col">
      <div class="text-xl ">
        Select Category
      </div>
      <div class="mt-2 rounded-lg w-full">
        <form action="">
          <select name="category" id="category" v-model="form.category_id"
                  class="rounded-lg w-full p-2 ">
            <option :value="category.uuid" v-for="category in categories" class="flex justify-center">{{category.name}}</option>
          </select>
        </form>
      </div>
      <div class="text-lg mt-4 mb-2 text-red-400">
        show the news inside that category.
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "CategoriesList",
  data(){
    return {
      form : {
        category_id: null
      }
    }
  },
  computed : {
    categories(){
      return this.$store.getters['getCategories']
    }
  },
  watch : {
    'form.category_id'(value){
      this.$router.push({ name : 'Categories-id' , params : {id : value}})
    }
  }
}
</script>

<style scoped>

</style>
