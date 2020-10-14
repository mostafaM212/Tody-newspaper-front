<template>
  <div class="flex justify-around  select-none lg:flex-row flex-col mb-2">
    <div class="flex justify-center lg:w-9/12 w-full lg:flex-row flex-col items-center
                border-dashed border-2 border-red-500 rounded-lg  mb-2"
    >
      <div class="flex flex-col justify-start w-full">
        <div class="border-b-2 border-dashed border-red-200 flex">
          <div class="h-1/3 w-1/3 m-2">
            <img :src="this.user.photo" :title="this.user.name" alt="">
          </div>
          <div class="flex flex-col ml-4 text-xl italic pt-4">
            <div class="flex">
              <label class="text-red-500">Name :</label>
              <p class="ml-4">{{this.user.name}}</p>
            </div>
            <div class="flex pt-2">
              <label class="text-red-500">Email :</label>
              <p class="ml-4">{{this.user.email}}</p>
            </div>
            <div class="flex pt-2">
              <label class="text-red-500">Phone number :</label>
              <p class="ml-4">+20{{this.user.phone}}</p>
            </div>
            <div class="flex pt-2">
              <label class="text-red-500">Country :</label>
              <p class="ml-4">Egypt</p>
            </div>
          </div>
        </div>
        <div class="p-2">
          <div class="flex pt-2 text-xl">
            <label class="text-red-500">Address :</label>
            <p class="ml-4">{{ this.user.address }}</p>
          </div>
          <div class="flex pt-2 text-xl">
            <label class="text-red-500">Registration date:</label>
            <p class="ml-4">You have joined to us on {{joined}}</p>
          </div>
          <div class="flex pt-2 text-xl">
            <label class="text-red-500">Number of your posts:</label>
            <p class="ml-4">{{ this.user.number_news}}</p>
          </div>
          <div class="flex pt-2 text-xl" v-if="this.user.number_news > 0">
            <label class="text-red-500">Your posts:</label>
            <p class="ml-4"><nuxt-link :to="{ name :'auth-dashboard'}" class="text-blue-600">Your Post</nuxt-link></p>
          </div>
          <div class="flex pt-2 text-xl text-sm italic">
            <p class="ml-4">You are new publisher on Today news paper we wish to be an important user</p>
          </div>
          <div class=" flex justify-center">
            <nuxt-link :to="{name : 'auth-profile-update'}" class=" bg-red-800 p-2 rounded-lg hover:bg-red-500">
              <i class="far fa-edit"></i>
              update
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import date from 'date-and-time';
import CategoriesList from "@/components/CategoriesList/CategoriesList";
export default {
  name: "index",
  head(){
    return {
      title : this.user.name + ' | Today'
    }
  },
  data(){
    return {
      user : null
    }
  },
  async asyncData(context){

    let res = await context.$axios.$get('/profile')


    if (context.store.getters['getCategories'].length === 0){
      let res2 = await context.$axios.$get('/categories')
      context.store.dispatch('setCategories',res2.data)
    }

    return {
      user : res.data
    }
  },
  computed : {
    joined(){
      const now = new Date(this.user.created_at)
      return date.format(now , 'YYYY/MM/DD HH:mm:ss')
    }
  },
  middleware : ['myAuth'],
  components : {
    CategoriesList
  }
}
</script>

<style scoped>

</style>
