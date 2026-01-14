<template>
  <h1 class="text-9xl text-red-500 bg-yellow-400">TEST TAILWIND</h1>
  <div class="min-h-screen bg-[#020617] text-white font-sans selection:bg-blue-500">
    <nav class="flex items-center justify-between px-8 py-4 bg-[#0f172a]/80 backdrop-blur-md sticky top-0 z-50">
      <div class="flex items-center gap-8">
        <div class="flex items-center gap-2">
          <div class="bg-blue-600 p-1.5 rounded-lg">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
          </div>
          <span class="font-bold text-xl tracking-tighter">THISGAME</span>
        </div>
        <div class="hidden md:flex gap-6 text-sm text-gray-400">
          <a href="#" class="hover:text-white transition">หน้าหลัก</a>
          <a href="#" class="hover:text-white transition">เกมออฟไลน์</a>
          <a href="#" class="hover:text-white transition">หมวดหมู่</a>
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

    <main class="max-w-7xl mx-auto mt-8 px-6">
      <div class="relative overflow-hidden rounded-3xl aspect-[21/9] flex items-center shadow-2xl">
        <div class="absolute inset-0 bg-cover bg-center z-0 scale-105" style="background-image: url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070');"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent z-10"></div>

        <div class="relative z-20 ml-16 max-w-xl space-y-6">
          <span class="bg-blue-600/20 text-blue-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/30">Welcome</span>
          <h1 class="text-7xl font-black leading-none tracking-tight">
            THISGAME <br>
            <span class="text-blue-500">STORE</span>
          </h1>
          <p class="text-gray-400 text-lg leading-relaxed">
            บริการจำหน่ายและให้เช่าไอดีเกม (Steam, Ubisoft, Epic Games, Rockstar) ราคาถูก ปลอดภัย มีแอดมินคอยดูแล ซื้อผ่านระบบอัตโนมัติ 24 ชม.
          </p>
          <div class="flex gap-4 pt-4">
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20">
              เลือกดูสินค้า
            </button>
            <button class="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3 rounded-xl font-bold transition-all">
              ช่วยเหลือ
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// คุณสามารถใส่ Logic การดึงข้อมูลเกมจาก API ตรงนี้ได้ในอนาคตครับ
</script>

<style scoped>
/* เพิ่ม Font Google เข้ามาเพื่อให้เหมือนแบบเป๊ะๆ */
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;700;900&display=swap');

:deep(body) {
  font-family: 'Kanit', sans-serif;
}
</style>
