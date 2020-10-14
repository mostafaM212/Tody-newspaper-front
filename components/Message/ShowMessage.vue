<template>
  <div class="w-full flex flex-col  h-24 bg-gray-400 p-2 m-2
       rounded-lg hover:bg-gray-200 cursor-pointer"
       v-on:click="show = !show"
       :class="{'h-auto ':show , 'justify-center' : !show}"
  >
    <div class=" flex justify-between lg:flex-no-wrap flex-wrap  lg:flex-row flex-col items-center ">
      <div class="flex lg:w-auto w-32 overflow-x-auto">
        {{message.email}}
      </div>
      <div class="">
        {{ message.name }}
      </div>
      <div class="text-sm bg-gray-500 rounded-full p-2" v-if="!show">
        {{ message.created_at }}
      </div>
      <div class="text-sm  rounded-full p-2" v-else>
        <button class="text-red-500 text-xl" title="delete" v-on:click="delMessage">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
    <div class="flex flex-col mt-4" v-if="show">
      <div class="border-dashed border-t-2 border-gray-500 flex">
        <div class="">message  </div>
        <div class="ml-2">{{message.message}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowMessage",
  data(){
    return {
      show : false
    }
  },
  props : {
    message : {
      required : true ,
      type : Object
    }
  },
  methods : {
    async delMessage(){
      await this.$axios.$delete('messages/'+this.message.id).then(res => {
        window.alert('The message is deleted successfully.')
      }).catch(e => {
        console.log(e.response.data)
      })

    }
  }
}
</script>

<style scoped>

</style>
