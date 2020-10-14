<template>
  <div class="flex justify-between lg:flex-row flex-col w-full">
    <div class="ml-24 flex flex-col lg:w-7/12 w-10/12  w-8/12 mt-5 border-2 border-red-500 border-dashed rounded-lg">
      <div class="flex justify-between border-b-2 border-red-500 border-dashed bg-blue-800 rounded-lg">
        <div class="text-2xl text-red-300 flex flex-col ml-2 ">
          <div class="text-4xl text-red-600 italic">Today</div>
          <div class="text-sm text-green-300 ">newspaper</div>
        </div>
        <div class="flex items-center ">
          <button class="bg-blue-300 rounded-lg p-2 hover:bg-red-500 text-red-500 " v-on:click="clear">
            <i class="fas fa-broom hover:text-yellow-500"></i>
          </button>
        </div>
        <div class="lg:text-2xl text-sm text-green-300 mr-2 mt-4">Latest Messages</div>
      </div>
      <div class=" flex justify-start flex-wrap w-full p-2 rounded-lg overflow-y-auto"
           v-if="messages.length > 0">
        <show-message v-for="message in messages"
                      :key="message.id"
                      :message="message"
        />
      </div>
      <div class="text-4xl text-gray-500 flex justify-center items-center" v-else>
        There are no Messages yet.
      </div>
    </div>
    <div class="flex flex-col p-2 lg:ml-2 ml-24 lg:w-4/12 w-10/12">
      <create-news-button />
      <CategoriesList />
    </div>
  </div>
</template>

<script>
import createNewsButton from "@/components/News/createNewsButton";
import CategoriesList from "@/components/CategoriesList/CategoriesList";
import ShowMessage from "@/components/Message/ShowMessage";
export default {
name: "index",
  layout : 'admin',
  middleware : ['myAuth','admin'],
  head(){
    return {
      title : 'Messages | Today'
    }
  },
  components : {
    CategoriesList,
    createNewsButton,
    ShowMessage
  },
  data(){
    return {
      messages : []
    }
  },
  async asyncData(context){
    let res = await context.$axios.$get('/messages')

    if (!context.store.getters['getCategories'].length){
      let res2 = await context.$axios.$get('/categories')

      context.store.dispatch('setCategories',res2.data)
    }

    return {
      messages : res.data
    }
  },
  methods : {
    async clear(){
      let res = await this.$axios.$delete('/admin/messages').then(res =>{
        window.alert('all messages is deleted successfully')
        this.$router.back()
      }).catch(e =>{
        console.log(e.response.data)
      })
    }
  }
}
</script>

<style scoped>

</style>
