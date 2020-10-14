<template>
  <div class=" flex flex-col select-none lg:ml-18 ml-24 w-10/12 ">
    <div class="lg:text-4xl text-2xl text-red-800 flex  italic">
      <div class="flex flex-col">
        <div class="">
          Today's
        </div>
        <div class="text-sm">
          newspaper
        </div>
      </div>
      <div class="ml-2">
        Control Panel
      </div>
    </div>
    <div class="flex  justify-around items-center lg:flex-no-wrap flex-wrap">
      <AdminCard header="Users"
                 icon="fas fa-users-cog"
                 to="admin-users"
                 :number="num_users"

      />
      <AdminCard header="Category"
                 icon="fas fa-book-reader"
                 to="admin-categories"
                 :number="num_categories"
      />
      <AdminCard header="News"
                 icon="fas fa-newspaper"
                 to="admin-news"
                 :number="num_news"
      />
      <AdminCard header="Articles"
                 icon="fas fa-scroll"
                 to="admin-articles"
                 :number="num_articles"
      />
      <AdminCard header="Messages"
                 icon="fas fa-envelope"
                 to="admin-messages"
                 :number="num_message"
      />
    </div>
    <users-list :users="users"/>
  </div>
</template>

<script>
import AdminCard from "@/components/Admin/AdminCard";
import UsersList from "@/components/Users/UsersList";
export default {
  name: "index",
  layout : 'admin',
  middleware : ['myAuth','admin'],
  head(){
    return {
      title : 'Admin | Today'
    }
  },
  data(){
      return {
        num_users : null,
        num_news : null,
        num_articles : null,
        num_categories : null,
        num_message : null,
        users : null
      }
  },
  async asyncData(context){

    let res = await context.$axios.$get('/admin')

    return {
      num_users : res.users_count ,
      num_news : res.news_count ,
      num_categories : res.categories_count ,
      num_message : res.message_count ,
      num_articles : res.articles_count,
      users : res.data
    }
  },
  components : {
    AdminCard ,
    UsersList
  }
}
</script>

<style scoped>

</style>
