<template>
  <div class="  flex justify-center mt-8 flex-col ml-10">
    <div class="text-xl ">
      New Users
    </div>
    <div class=" border-2 border-green-600 border-dashed overflow-x-auto w-11/12 h-48 rounded-lg flex">
      <div class="h-32 w-40 mx-12 mt-3 flex flex-col justify-center items-center"
           v-for="user in users"
      >
        <div class=" h-24 w-24 mx-5 rounded-full">
          <img :src="user.photo" :title="user.name" class=" rounded-full">
        </div>
        <div class="text-sm">
          {{ user.name }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
name: "UsersList" ,
  props : {
    users : {
      required : true ,
      type : Array
    }
  }
}
</script>

<style scoped>

</style>
