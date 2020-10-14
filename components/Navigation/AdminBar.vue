<template>
  <div class="bg-blue-800 flex flex-col lg:h-screen h-full  fixed"
       :class="{
          'lg:w-1/6': this.task
       }"
  >
    <div class="flex justify-between mx-2 my-2">
      <div class="mr-2">
        <img :src="this.$auth.user.photo" alt="" class="h-12 w-12 rounded-full relative">
      </div>
      <div class="mt-2 pr-2" v-if="task">
        {{this.$auth.user.name}}
      </div>
      <div class="mt-2 text-xl">
        <button v-on:click="task = !task"><i class="fas fa-bars"
                :class="{'text-red-800':task}"
        ></i></button>
      </div>
    </div>
    <div class="ml-3" v-if="task"

    >
      <div class="mt-6 text-3xl mb-6 ">
        <nuxt-link :to="{name : 'admin-users'}" class="w-full hover:text-red-800 flex" title="users"
                   :class="{
          'text-red-800': this.$route.name ==='admin-users'
        }"
        >
          <i class="fas fa-users-cog"

          ></i>
          <div class="text-xl ml-2">
            Users Settings
          </div>
        </nuxt-link>
      </div>

      <div class="mt-6 text-3xl mb-6 ">
        <nuxt-link :to="{name : 'admin-categories'}" class="w-full hover:text-red-800 flex" title="categories"
                   :class="{
          'text-red-800': this.$route.name ==='admin-categories' || this.$route.name ==='admin-categories-id'
        }"
        >
          <i class="fas fa-book-reader"></i>
          <div class="text-xl ml-2">
            Category Settings
          </div>
        </nuxt-link>
      </div>
      <div class="mt-6 text-3xl  mb-6">
        <nuxt-link :to="{name : 'admin-news'}" class="w-full hover:text-red-800 flex"
                   title="news"
                   :class="{
          'text-red-800': this.$route.name ==='admin-news'
        }"
        >
          <i class="fas fa-newspaper"></i>
          <div class="text-xl ml-2">
            News Settings
          </div>
        </nuxt-link>
      </div>
      <div class="mt-6 text-3xl  mb-6">
        <nuxt-link :to="{name : 'admin-articles'}" class="w-full hover:text-red-800 flex"
                   title="news"
                   :class="{
          'text-red-800': this.$route.name ==='admin-articles'
        }"
        >
          <i class="fas fa-scroll"></i>
          <div class="text-xl ml-2">
            Articles Settings
          </div>
        </nuxt-link>
      </div>
      <div class="mt-6 text-3xl mb-6 ">
        <nuxt-link :to="{name : 'admin-messages'}" class="w-full hover:text-red-800 flex" title="messages">
          <i class="fas fa-envelope"></i>
          <p v-if="this.$auth.user.messages > 0"
             class="bg-red-500 rounded-lg text-sm h-4 w-4 flex justify-center items-center text-white"
          >{{ this.$auth.user.messages }}</p>
          <div class="text-xl ml-2">
            Messages
          </div>
        </nuxt-link>
      </div>
      <div class="mt-6 text-3xl mb-6 ">
        <nuxt-link :to="{name : 'index'}" class="w-full hover:text-red-800 flex" title="back">
          <i class="fas fa-arrow-left"></i>
          <div class="text-xl ml-2">
            Back
          </div>
        </nuxt-link>
      </div>
      <div class="mt-6 text-3xl  mb-6">
        <nuxt-link :to="{name : 'admin'}" class="w-full hover:text-red-800 flex" title="settings">
          <i class="fas fa-cog"></i>
          <div class="text-xl ml-2">
            Site Settings
          </div>
        </nuxt-link>
      </div>
      <div class="mt-6 text-3xl  mb-6">
        <button v-on:click="logout"  class="w-full hover:text-red-800 flex" title="settings">
          <i class="fas fa-sign-out-alt"></i>
          <div class="text-xl ml-2">
            Logout
          </div>
        </button>
      </div>
    </div>
    <div class="flex flex-col items-center" v-else>
      <div class="mt-4 text-3xl  ">
        <nuxt-link :to="{name : 'admin-users'}" class="w-full hover:text-red-800" title="users"
                   :class="{
          'text-red-800': this.$route.name ==='admin-users'
        }"
        >
          <i class="fas fa-users-cog"></i>
        </nuxt-link>
      </div>
      <div class="mt-4 text-3xl  ">
        <nuxt-link :to="{name : 'admin-categories'}" class="w-full hover:text-red-800" title="categories"
                   :class="{
          'text-red-800': this.$route.name ==='admin-categories' || this.$route.name ==='admin-categories-id'
        }"
        >
          <i class="fas fa-book-reader"></i>
        </nuxt-link>
      </div>
      <div class="mt-4 text-3xl  ">
        <nuxt-link :to="{name : 'admin-news'}" class="w-full hover:text-red-800" title="news"
                   :class="{
          'text-red-800': this.$route.name ==='admin-news'
        }"
        >
          <i class="fas fa-newspaper"></i>
        </nuxt-link>
      </div>
      <div class="mt-4 text-3xl  ">
        <nuxt-link :to="{name : 'admin-articles'}" class="w-full hover:text-red-800" title="articles"
                   :class="{
          'text-red-800': this.$route.name ==='admin-articles'
        }"
        >
          <i class="fas fa-scroll"></i>
        </nuxt-link>
      </div>
      <div class="mt-4 text-3xl  ">
        <nuxt-link :to="{name : 'admin-messages'}" class="w-full hover:text-red-800 flex" title="messages">
          <i class="fas fa-envelope"></i>
          <p v-if="this.$auth.user.messages > 0"
             class="bg-red-500 rounded-lg text-sm h-4 w-4 flex justify-center items-center text-white"
          >{{ this.$auth.user.messages }}</p>
        </nuxt-link>
      </div>
      <div class="mt-4 text-3xl  ">
        <nuxt-link :to="{name : 'index'}" class="w-full hover:text-red-800" title="back">
          <i class="fas fa-arrow-left"></i>
        </nuxt-link>
      </div>
      <div class="mt-4 text-3xl  ">
        <nuxt-link :to="{name : 'admin'}" class="w-full hover:text-red-800 flex" title="settings">
          <i class="fas fa-cog"></i>
        </nuxt-link>
      </div>
      <div class="mt-4 text-3xl  ">
        <button v-on:click="logout"  class="w-full hover:text-red-800" title="logout">
          <i class="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import logout from "@/mixins/logout";
export default {
name: "AdminBar",
  data(){
    return {
      task : false
    }
  },
  mixins : [logout]
}
</script>

<style scoped>

</style>
