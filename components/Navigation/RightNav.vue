<template>
  <div class=" mt-2 fixed right-0 mr-4 w-3/12 " >
    <div class="">
      <CategoriesList />
    </div>
    <div class="mt-5">
      <Advertisment />
    </div>
  </div>
</template>

<script>
import CategoriesList from "@/components/CategoriesList/CategoriesList";
import Advertisment from "@/components/Advertisment/Advertisment";
export default {
name: "RightNav",
  components : {
  CategoriesList ,
    Advertisment
  }
}
</script>

<style scoped>

</style>
