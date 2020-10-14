<template>
  <nuxt-link :to="{name : to}" class="mt-8 hover:bg-green-500 bg-green-300 rounded-lg ">
    <div class="h-48 w-48  rounded-lg flex items-center flex-col">
      <div class="text-6xl flex justify-center mt-4">
        <i :class="icon"></i>
      </div>
      <div class="mt-2 text-3xl">
        {{header}}
      </div>
      <div class="mt-2 text-3xl">
        ({{number}})
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "AdminCard",
  props : {
    to : {
      required : true ,
      type : Object
    },
    icon : {
      required : true ,
      type : String
    },
    header : {
      required : true ,
      type : String
    },
    number : {
      required : true ,
      type : String
    },
  }
}
</script>

<style scoped>

</style>
