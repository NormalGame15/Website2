<script setup>
  import bgImage from '/images/29b3afb604a116aab29b778e4862903a4af079ca.jpg';
  import bgImage2 from '/images/4ad9beb9066b7048e11201e1ecdcb3ae980dfe0b.jpg';

const products = [
  { id: 1, name: 'Gaming Mouse', image: '/images/5d2e889d7c1f775fa728169b075292466a6b0994.png' },
  { id: 2, name: 'Controller Gaming', image: '/images/2bee5b186c355022caf2c7883a22aecd79196a8b.png' },
  { id: 3, name: 'Gaming Keyboards', image: '/images/87f9b8db188383963e483536e60680eefcb7c17d.png' },
  { id: 4, name: 'Headphone Gaming', image: '/images/6111932fa3417234aea2c7680f0fd8d7a1ae5c95.png' },
];

const services = [
  { title: 'Shipping', desc: 'Free shipping nationwide for purchases over 2 million Kip.', icon: '🚚' },
  { title: 'Claim', desc: 'Easy product claims, within 7 days.', icon: '🔄' },
  { title: 'Faster', desc: 'Fast service Quick response 24-hour service.', icon: '🕒' },
  { title: 'Secure payment', desc: 'Secure payment with international standards.', icon: '🛡️' },
];
</script>

<template>
  <div class="bg-[#020617] text-white min-h-screen font-sans overflow-x-hidden">

    <section :style="{ backgroundImage: `url(${bgImage})` }" class="min-h-full font-sans overflow-x-hidden text-white bg-center bg-no-repeat bg-cover mx-auto px-27 py-16 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 space-y-7">
        <h1 class="text-5xl md:text-6xl font-bold text-blue-500">Gaming Gears</h1>
        <p class="text-gray-400 max-w-md leading-relaxed">
          containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <button class="bg-[#3373B1] border-slate-10 rounded-3xl p-4 flex px-10 hover:bg-[#7700A5] transition-all duration-300">Learn More</button>
      </div>
      <div class="md:w-1/2 mt-12 md:mt-1 relative flex justify-end left-12">
        <div class="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full"></div>
        <img src="/images/WhatsApp_Image_2026-01-21_at_22.19.02-removebg-preview.png" alt="Hero Image" class="relative z-10 w-full max-w-lg drop-shadow-[0_0_35px_rgba(59,130,246,0.5)]" />
      </div>
    </section>

    <section class="container mx-auto px-6 py-20">
      <h2 class="text-3xl font-bold text-center text-blue-400 mb-16">Our product</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="item in products" :key="item.id" 
          class="bg-[#0f172a] border border-slate-900 rounded-3xl p-8 flex justify-between items-center hover:border-blue-500/50 transition-all duration-300 group">
          <div class="space-y-9">
            <h3 class="text-3xl font-semibold text-blue-600 leading-tight">{{ item.name }}</h3>
            <button class="bg-[#3373B1] border-slate-10 p-8 from-purple-600 to-pink-600 px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#7700A5] hover:scale-110 transition-transform duration-500">Shop now</button>
          </div>
          <div class="w-1/2 flex justify-end left-23">
            <img :src="item.image" :alt="item.name" class="w-40 group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>

    <section class="relative min-h-full overflow-hidden font-sans text-white mx-full px-6 md:px-27 py-16 flex items-center">
      <div :style="{ backgroundImage: `url(${bgImage2})` }" class="absolute inset-0 bg-center bg-no-repeat bg-cover blur-md z-0"></div>
      <div class="absolute inset-0 bg-black/40 z-10"></div>
      <div class="container mx-auto px-6 relative z-20">
      <h2 class="text-3xl font-bold text-center text-blue-400 mb-16">Services</h2>
    
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="service in services" :key="service.title" class="bg-black/40 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-black/60 transition">
          <div class="text-4xl mb-6">{{ service.icon }}</div>
            <h4 class="text-xl font-semibold text-blue-400 mb-4">{{ service.title }}</h4>
            <p class="text-gray-500 text-sm leading-relaxed">{{ service.desc }}</p>
          </div>
        </div>

        <div class="flex justify-center mt-12">
          <button class="bg-linear-to-r from-purple-600 to-pink-600 px-10 py-2 rounded-lg text-sm font-semibold">
          Find with us
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>