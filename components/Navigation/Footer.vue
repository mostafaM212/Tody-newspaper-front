<template>
  <div class="bg-red-800 flex mb-0  flex-col justify-center items-center h-40 mt-5 ">
    <div class="h-3/4 flex flex-col mb-4 text-red-200 mt-2 items-between lg:flex-no-wrap flex-wrap">
     <div class="flex justify-between">
       <div class=" lg:text-4xl text-2xl mx-8">
         <a href="" class="hover:text-yellow-500">
           <i class="fab fa-twitter-square"></i>
         </a>
       </div>
       <div class=" lg:text-4xl text-2xl mx-8" >
         <a href="https://www.facebook.com/Prophet.lov/" class="hover:text-yellow-500">
           <i class="fab fa-facebook-square"></i>
         </a>
       </div>
       <div class=" lg:text-4xl text-2xl mx-8">
         <a href="https://www.instagram.com/mostafa_fswd/" class="hover:text-yellow-500">
           <i class="fab fa-instagram"></i>
         </a>
       </div>
       <div class="lg:text-4xl text-2xl mx-8">
         <a href="https://myaccount.google.com/?utm_source=OGB&tab=mk&utm_medium=act&gar=1" class="hover:text-yellow-500">
           <i class="fab fa-google"></i>
         </a>
       </div>
     </div>
      <div class="text-yellow-500 lg:tracking-widest font-center flex justify-center lg:font-bold font-serif lg:mt-5 mt-2 ">
        FOLLOW US ON DIFFERENT WEBSITES
      </div>
      <div class="flex justify-center">
        <nuxt-link :to="{name : 'index'}" class="mx-2">Contact</nuxt-link> |
        <nuxt-link :to="{name : 'index'}" class="mx-2">Publish</nuxt-link> |
        <nuxt-link :to="{name : 'index'}" class="mx-2">Truth</nuxt-link> |
        <nuxt-link :to="{name : 'index'}" class="mx-2">Fast</nuxt-link>
      </div>
    </div>
    <div class="bg-red-800 text-red-200 w-full mx-5 h-auto flex justify-around lg:flex-row flex-col" >
      <div class="italic">
        © 2019-2022 Mostafa  All Rights Reserved
      </div>
      <div class="">
        Produced By Mostafa Web Development Company
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Footer"
}
</script>

<style scoped>

</style>
