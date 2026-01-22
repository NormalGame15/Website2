<template>
  <div class="min-h-screen bg-[#2d3661] text-white font-sans selection:bg-blue-500">
    <nav class="flex items-center justify-between px-8 py-4 bg-[#091322]/80 backdrop-blur-md sticky top-0 z-50 overflow-x-hidden">
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
        <div class="flex items-center gap-2 border-l border-gray-700 pl-4">
          <div class="text-right">
            <p class="text-xs text-gray-400">guest1768305543113</p>
            <p class="text-[10px] text-blue-400">Member</p>
          </div>
          <div class="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
          </div>
        </div>
      </div>
    </nav>

    <RouterView /> 
  </div>
</template>