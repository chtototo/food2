<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="h-[30vh] relative">
    <div class="absolute left-0 right-0 top-0 bottom-0 ml-auto mr-auto mt-auto mb-auto w-fit h-fit">
      <img src="./components/icons/icon.png" alt="" height="350" width="350" class="invert">
      <h1 class="text-white text-center text-[50px]">FOOD</h1>
    </div>
  </header>
  <div class="bg-gradient-to-r from-white to-gray-100 h-[100%] rounded-tl-[200px] flex flex-col items-center">
    <div class="grid grid-cols-2 gap-[70px] mt-[-50px]">
      <button class="nav-btn">
        <img src="./components/icons/testIcon.png" width="250" alt="">
        <p>home</p>
      </button>
      <button class="nav-btn">
        <img src="./components/icons/testIcon.png" width="250" alt="">
        <p>home</p>
      </button>
      <button class="nav-btn">
        <img src="./components/icons/testIcon.png" width="250" alt="">
        <p>home</p>
      </button>
      <button class="nav-btn">
        <img src="./components/icons/testIcon.png" width="250" alt="">
        <p>home</p>
      </button>
      <button class="nav-btn">
        <img src="./components/icons/testIcon.png" width="250" alt="">
        <p>home</p>
      </button>
      <button class="nav-btn">
        <img src="./components/icons/testIcon.png" width="250" alt="">
        <p>home</p>
      </button>
    </div>
  </div>
  <nav
    class="sticky bottom-0 w-[100%] flex justify-between px-[40px] items-center h-[150px] border-solid border-t-[1px] border-gray-500">
    <a class="nav-link active-nav-link" href="">
      <img src="./components/icons/forNavActive.png" width="90" alt="">
      <p>home</p>
    </a>
    <a class="nav-link" href="">
      <img src="./components/icons/forNav.png" width="85" alt="">
      <p>home</p>
    </a>
    <a class="nav-link" href="">
      <img src="./components/icons/forNav.png" width="85" alt="">
      <p>home</p>
    </a>
    <a class="nav-link" href="">
      <img src="./components/icons/forNav.png" width="85" alt="">
      <p>home</p>
    </a>
  </nav>
</template>
