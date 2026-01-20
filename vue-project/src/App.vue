<template>
  <div class="min-h-screen bg-[#020617]">
    <nav class="p-5 bg-slate-900 flex gap-4">
      <RouterLink to="/" class="text-white hover:text-blue-400">หน้าหลัก</RouterLink>
      <RouterLink to="/games" class="text-white hover:text-blue-400">รายการเกม</RouterLink>
    </nav>

    <RouterView /> 
  </div>
</template>