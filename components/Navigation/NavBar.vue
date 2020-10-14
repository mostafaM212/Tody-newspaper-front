<template>
    <div class="bg-red-800  lg:h-20 h-56 flex lg:justify-between font-serif select-none fixed w-full">
      <div class=" lg:pt-1 h-20 pl-3 flex lg:items-center ml-2 w-2/3 lg:flex-row flex-col ">
        <div class="flex flex-col mt-0">
          <div class="italic text-4xl text-red-200 hover:text-yellow-500">Today</div>
          <div class="pb-3 text-red-100 hover:text-yellow-500">
            Newspaper
          </div>
        </div>
        <div class="flex flex-between lg:flex-no-wrap lg:pt-1  flex-wrap w-full lg:ml-4 text-lg">
          <div class="w-full lg:ml-0 ml-2   text-red-200 hover:text-yellow-400">
            <nuxt-link :to="{name : 'index'}"
                        :class="{
                          'text-yellow-500':this.$route.name === 'index' || this.$route.name === 'news-id'
                          || this.$route.name === 'news-create'
                        }"
            >News</nuxt-link>
          </div>
          <div class="w-full lg:ml-0 ml-2 text-red-200 hover:text-yellow-400">
            <nuxt-link :to="{name : 'news-new'}"
                        :class="{'text-yellow-500' : this.$route.name === 'news-new' }"
            >New News</nuxt-link>
          </div>
          <div class="w-full lg:ml-0 ml-2 text-red-200 hover:text-yellow-400">
            <nuxt-link :to="{name : 'articles'}"
                       :class="{'text-yellow-500' : this.$route.name === 'articles' ||
                              this.$route.name === 'articles-id' || this.$route.name === 'articles-user'
                              || this.$route.name === 'articles-create' || this.$route.name === 'articles-id-user'
            }"
            >Articles</nuxt-link>
          </div>
          <div class="w-full lg:ml-0 ml-2 text-red-200 hover:text-yellow-400">
            <nuxt-link :to="{name : 'followus'}"
                        :class="{
                          'text-yellow-500': this.$route.name === 'followus'
                        }"
            >Follow us</nuxt-link>
          </div>
          <div class="" v-if="$auth.loggedIn">
            <div class="relative inline-block lg:text-left text-right lg:ml-0 ml-5 lg:mt-0 mt-5">
              <div>
              <span class="rounded-md shadow-sm">
                <button type="button"  v-on:click="show = !show"
                        class="inline-flex  justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-red-200 text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150" id="options-menu" aria-haspopup="true" aria-expanded="true">
                  Select
                  <!-- Heroicon name: chevron-down -->
                  <svg class="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </span>
              </div>
              <div class="origin-top-left absolute right-0 mt-2 w-56 rounded-md shadow-lg" >
                <div class="rounded-md bg-white shadow-xs "  :class="{'hidden' : show}"
                     role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <div class="py-1">
                    <nuxt-link :to="{ name : 'auth-dashboard'}"  class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Dashboard</nuxt-link>
                    <nuxt-link :to="{name : 'auth-profile'}" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Profile</nuxt-link>
                  </div>
                  <div class="border-t border-gray-100"></div>
                  <div class="py-1">
                    <nuxt-link :to="{ name : 'auth-profile-update'}"  class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Settings</nuxt-link>
                    <nuxt-link :to="{ name : 'admin'}" v-if=" this.$auth.loggedIn &&this.$auth.user.is_admin" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Admin Panel</nuxt-link>
                  </div>
                  <div class="border-t border-gray-100"></div>
                  <div class="py-1">
                    <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Share</a>
                    <a href="#" class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Add to favorites</a>
                  </div>
                  <div class="border-t border-gray-100"></div>
                  <div class="py-1">
                    <button v-on:click="logout" class="block px-4 py-2 text-sm leading-5 text-red-500 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900" role="menuitem">Logout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex lg:justify-end lg:items-center justify-center items-end  mr-5 text-xl lg:flex-row
              flex-col w-6/12 pt-2 lg:flex-no-wrap flex-wrap "
      >
       <template v-if="!$auth.loggedIn">
         <div class="w-1/4 text-red-200 hover:text-yellow-400 mr-4">
           <nuxt-link :to="{name : 'auth-login'}"
                      :class="{'text-yellow-500' : $route.name === 'auth-login'}"
           >Login</nuxt-link>
         </div>
         <div class="w-1/4 text-red-200 hover:text-yellow-400  mr-8">
           <nuxt-link :to="{name : 'auth-register'}"
              :class="{
                  'text-yellow-500': $route.name === 'auth-register'
              }"
           >Register</nuxt-link>
         </div>
       </template>
        <template v-else>
         <div class="flex lg:justify-between lg:flex-row
                    flex-col justify-end items-center mb-2 w-6/12">
           <div
             class="lg:w-2/3 hover:text-yellow-400 flex justify-end
                     items-center lg:mr-2 justify-center lg:flex-row flex-col
            ">
            <div class="w-auto h-auto flex justify-between mr-2" >
              <img :src="$auth.user.photo" class="w-12 h-12 rounded-full  hover:text-yellow-500"
                   :title="$auth.user.name">
            </div>
             <div class=" text-sm flex flex-row items-center mb-4">
               <nuxt-link :to="{name : 'auth-profile'}" class="w-full text-sm text-red-200 mt-4"
                          :class="{
                              'text-yellow-500':this.$route.name === 'auth-profile'
                          }"
               >{{$auth.user.name}}</nuxt-link>
             </div>

           </div>

         </div>
        </template>
        <div class=" flex-row text-lg text-red-200 flex justify-end ">
          {{time}}
        </div>
      </div>
    </div>
</template>

<script>
import logout from "@/mixins/logout";
import time from "@/mixins/time";
export default {
  name: "NavBar",
  data(){
    return {
      show : false
    }
  },
  methods : {

  },
  mixins : [logout , time]
}
</script>

<style >

</style>
