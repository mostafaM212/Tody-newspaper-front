<template>
    <div class=" flex select-none">
      <AdminBar/>
      <Nuxt />
    </div>
</template>

<script>
import AdminBar from "@/components/Navigation/AdminBar";
export default {
  name: "admin",
  components : {
    AdminBar
  }
}
</script>

<style scoped>

</style>
