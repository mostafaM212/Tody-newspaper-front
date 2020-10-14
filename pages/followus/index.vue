<template>
<div class="h-full flex flex-col select-none">
    <div class="h-56 bg-red-800 mx-5 my-2 rounded-lg   flex justify-center items-center flex-col pt-5">
      <div class="text-5xl ml-8 text-red-200 flex lg:flex-row flex-col ">
        Follow us
      </div>
      <div class="">
        <p class="ml-5 text-xl mt-4 text-yellow-500">You can follow us in following websites</p>
      </div>
      <div class="mr-2 flex justify-around w-1/3 lg:flex-no-wrap flex-wrap ">
        <div class=" text-4xl ">
          <a href="">
            <i class="fab fa-twitter-square text-red-200"></i>
          </a>
        </div>
        <div class=" text-4xl">
          <a href="https://www.facebook.com/Prophet.lov/">
            <i class="fab fa-facebook-square text-red-200"></i>
          </a>
        </div>
        <div class=" text-4xl">
          <a href="https://www.instagram.com/mostafa_fswd/">
            <i class="fab fa-instagram text-red-200"></i>
          </a>
        </div>
        <div class="text-4xl">
          <a href="https://myaccount.google.com/?utm_source=OGB&tab=mk&utm_medium=act&gar=1">
            <i class="fab fa-google text-red-200"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="flex flex-col mx-5 my-5">
      <div class="">
        <div class="text-4xl text-red-500">Today's Plan</div>
        <div class="text-lg border-2 border-dashed border-red-200 rounded-lg p-4">
          Use this newspaper report resource to help your pupils structure their news stories.
          This pack includes a prompt sheet, which is designed to encourage children to map
          out their ideas into sections before writing their newspaper reports.
          Once they've done this, pupils can move on to the second worksheet - the writing activity.
          It invites pupils to expand on their plan and write more freely.
          Why not try this newspaper report outline in your next English class?
          You could display the best efforts in your reading corner as further encouragement for your young reporters.
        </div>
      </div>
      <div class="">
        <div class="text-4xl text-red-500">Today's Goals</div>
        <div class="text-lg border-2 border-dashed border-red-200 rounded-lg p-4">
          In your paper's fast-paced world, you are focused on several special sections, events and initiatives to help
          you reach your goals of revenue growth, audience engagement, increasing pageviews, growing your social media
          following and building an email database amongst a slew of others.
          Promotions and interactive content are key to meeting and succeeding all of your paper's goals. The versatility
          of these engagement campaigns means each one has the ability to achieve a number of great outcomes for you.
          But while they're all powerful, different campaigns excel in different areas.
          Below, I've put together a list of seven goals you are probably working toward and the promotions and
          interactive content I'd recommend to achieve (or even surpass!) that goal.
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center flex-col">
      <div class="text-4xl text-red-500">Add your Comment</div>
      <div
        class="text-lg border-2 border-dashed border-red-200 rounded-lg p-4 lg:w-1/2 w-auto flex justify-center items-center flex-col"
      >
        <form v-on:submit.prevent="sendMessage">
          <div class="flex justify-between w-64">
            <div class="flex flex-col mr-10">
              <label for="fristname"
                     :class="{
                       'text-red-500' : this.errors['fname']
                     }"
              >First Name</label>
              <input type="text" name="fristname" id="fristname"
                     class="w-24 rounded-lg border-2 border-dashed border-red-200"
                     v-model="form.fname"
                     :class="{
                       'border-red-500 border-dotted' : this.errors['fname']
                     }"
              >
              <p class="text-sm text-red-500" v-if="errors['fname']">{{ errors['fname'][0] }}</p>
            </div>
            <div class="flex flex-col">
              <label for="lastname"
                     :class="{
                       'text-red-500' : this.errors['lname']
                     }"
              >Last Name</label>
              <input type="text" name="lastname" id="lastname"
                     class="w-24 rounded-lg border-2 border-dashed border-red-200"
                     v-model="form.lname"
                     :class="{
                       'border-red-500 border-dotted' : this.errors['lname']
                     }"
              >
              <p class="text-sm text-red-500" v-if="errors['lname']">{{ errors['lname'][0] }}</p>
            </div>
          </div>
          <div class="flex flex-col w-full mt-4 ">
            <label for="email"
                   :class="{
                       'text-red-500' : this.errors['email']
                     }"
            >Email</label>
            <input type="email" name="email" id="email"
                   class=" rounded-lg border-2 border-dashed border-red-200"
                   v-model="form.email"
                   :class="{
                       'border-red-500 border-dotted' : this.errors['email']
                     }"
            >
            <p class="text-sm text-red-500" v-if="errors['email']">{{ errors['email'][0] }}</p>
          </div>
          <div class="flex flex-col w-full mt-4 ">
            <label for="message"
                   :class="{
                       'text-red-500' : this.errors['message']
                     }"
            >Message</label>
            <textarea class="rounded-lg border-2 border-dashed border-red-200" id="message"
                      v-model="form.message"
                      :class="{
                       'border-red-500 border-dotted' : this.errors['message']
                     }"
            ></textarea>
            <p class="text-sm text-red-500" v-if="errors['message']">{{ errors['message'][0] }}</p>
          </div>
          <div class="rounded-lg flex justify-center mt-2 ">
            <button type="submit" class="bg-red-800 rounded-lg p-2">send</button>
          </div>
        </form>
      </div>
    </div>
</div>
</template>

<script>
export default {
name: "index",
  head(){
    return {
      title : 'Follow us | Today'
    }
  },
  data(){
    return {
      form : {
        fname : null ,
        lname : null ,
        email : null,
        message : null
      },
      errors : []
    }
  },
  methods : {
    async sendMessage(){
      let res = await this.$axios.$post('messages',this.form).then(res => {
        window.alert('the message has been sent successfully.')
      }).catch(e => {
        this.errors = e.response.data
      })
      setTimeout(()=>{
        this.errors = []
      },5000)
    }
  }
}
</script>

<style scoped>

</style>
