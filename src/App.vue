<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="py-[5vh] h-fit flex justify-center items-center">
    <div class="w-fit h-fit">
      <img src="./components/icons/main.png" alt="" height="350" width="350">
      <h1 class="text-white text-center text-[50px] mb-[20px]">FOOD</h1>
    </div>
  </header>
  <div class="bg-gradient-to-r from-white to-gray-100 h-fit pb-[200px] pt-[120px] px-[20px] border-white rounded-tl-[200px] flex flex-col items-center">
    <RouterView />
  </div>
  <nav
    class="fixed bottom-0 w-[100%] bg-white flex justify-between items-center h-[150px] border-solid border-t-[1px] border-gray-500">
    <RouterLink to="/" class="nav-link">
      <img src="./components/icons/calculator-icon.png" width="70" alt="">
      <p>calculators</p>
    </RouterLink>
    <div class="h-[70%] w-[1px] bg-gray-500"></div>
    <RouterLink to="/table" class="nav-link">
      <img src="./components/icons/products-icon.png" width="80" alt="">
      <p>table</p>
    </RouterLink>
  </nav>
</template>
