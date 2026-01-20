<template>
  <div class="min-h-screen bg-[#020617] text-white font-sans selection:bg-blue-500">
    <main class="max-w-7xl mx-auto mt-8 px-6">
      <div class="relative overflow-hidden rounded-3xl aspect-21/9 flex items-center shadow-2xl">
        <div class="absolute inset-0 bg-cover bg-center z-0 scale-105" style="background-image: url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070');"></div>
        <div class="absolute inset-0 bg-linear-to-r from-[#020617] via-[#020617]/80 to-transparent z-10"></div>

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
