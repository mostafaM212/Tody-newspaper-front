<template>
  <div class="bg-red-100 ">
    <NavBar/>
   <div class="flex justify-between">
     <Nuxt class="lg:w-9/12 w-screen mt-20 " />
     <RightNav class="invisible sm:invisible md:invisible lg:visible xl:visible" />
   </div>
    <Footer class="" />
  </div>
</template>

<script>
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Navigation/Footer";
import RightNav from "@/components/Navigation/RightNav";
  export default {
    components : {
      RightNav,
      NavBar,
      Footer
    }
  }
</script>
<style>

</style>
