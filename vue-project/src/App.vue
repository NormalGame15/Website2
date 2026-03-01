<script setup>
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
</script>
<template>
  <div class="min-h-screen bg-[#2d3661] text-white font-sans selection:bg-blue-500">
    <nav v-if="route.path !== '/login'" class="flex items-center justify-between px-8 py-4 bg-[#091322]/80 backdrop-blur-md sticky top-0 z-50 overflow-x-hidden">
      <div class="flex items-center gap-10">
        <div class="flex items-center gap-4">
          <RouterLink to="/">
            <img src="/images/b09d77f7dcd3d859774175ba8a23f0ba96e2fd88.png" class="relative left-10 rounded-lg p-1 w-21 h-14"/>
          </RouterLink>
        </div>
        <div class="relative gap-4">
          <input type="text" placeholder="Search..." class="relative left-10 bg-[#111b29] border border-gray-700 rounded-full px-4 py-1.5 text-sm w-70 focus:outline-none focus:border-blue-500">
        </div>
      </div>

      <div class="flex items-center gap-8">
        <div class="hidden md:flex text-sm text-gray-400 gap-8">
          <RouterLink to="/" class="text-white hover:text-blue-400" href="#">Home</RouterLink>
          <RouterLink to="/games" class="text-white hover:text-blue-400" href="#">Product Details</RouterLink>
          <RouterLink to="/gamestype" class="text-white hover:text-blue-400" href="#">About</RouterLink>
          <RouterLink to="/aboutus" class="text-white hover:text-blue-400" href="#">Contact Us</RouterLink>
        </div>
        <div class="flex  border-l border-gray-700 pl-4">
          <div class="flex ">
            <RouterLink to="/login" class="text-white" href="#">
               <button class="relative left-3 font-bold bg-[#3373B1] border-slate-10 rounded-3xl p-1.5 flex px-10 hover:opacity-90 transition transform hover:-translate-y-0.5">Log In</button>
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>


    <RouterView /> 
  </div>
  
</template>