<template>
  <div class="min-h-screen bg-[#020617]">
    <nav class="flex items-center justify-between px-8 py-4 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50">
      <div class="flex items-center gap-8">
        <div class="flex items-center gap-2">
          <div class="bg-blue-600 p-1.5 rounded-lg">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
          </div>
          <span class="font-bold text-xl tracking-tighter text-white">THISGAME</span>
        </div>
        <div class="hidden md:flex gap-6 text-sm text-gray-400">
          <RouterLink to="/" class="text-white hover:text-blue-400" href="#">หน้าหลัก</RouterLink>
          <RouterLink to="/games" class="text-white hover:text-blue-400" href="#">รายการเกม</RouterLink>
          <RouterLink to="/gametype" class="text-white hover:text-blue-400" href="#">หมวดหมู่</RouterLink>
          <a href="#" class="hover:text-white transition">ช่วยเหลือ</a>
          <a href="#" class="hover:text-white transition">ติดต่อเรา</a>
        </div>
      </div>
      
      <div class="flex items-center gap-4">
        <div class="relative">
          <input type="text" placeholder="ค้นหาเกม..." class="bg-[#1e293b] border border-gray-700 rounded-full px-4 py-1.5 text-sm w-64 focus:outline-none focus:border-blue-500">
        </div>
        <button class="p-2 hover:bg-gray-800 rounded-full"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg></button>
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