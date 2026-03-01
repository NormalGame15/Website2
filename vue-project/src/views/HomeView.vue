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
  { title: 'Shipping', desc: 'Free shipping nationwide for purchases over 2 million Kip.', name:'Icon1', image: '/images/fa54b3a581f73988d2e2e2b906dc962f60a14eae.png' },
  { title: 'Claim', desc: 'Easy product claims, within 7 days.', name:'Icon2', image: '/images/053320bfb3449edbd09f087a1d7402b41512fb2a.png' },
  { title: 'Faster', desc: 'Fast service Quick response 24-hour service.', name:'Icon3', image: '/images/1c2318a73f2c5efd1e87ff84ac28a1ab6e44a66e.png' },
  { title: 'Secure payment', desc: 'Secure payment with international standards.', name:'Icon3', image: '/images/7558573b875da9b40cf63572e041303f0c5999b4.png'},
];
</script>

<template>
  <div class="bg-[#0d1744] text-white min-h-screen font-sans overflow-x-hidden">
    <section :style="{ backgroundImage: `url(${bgImage})` }" class="min-h-full font-sans overflow-x-hidden text-white bg-center bg-no-repeat bg-cover mx-auto px-27 py-16 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 space-y-7">
        <h1 class="relative text-5xl md:text-6xl font-bold text-blue-500 bottom-12 left-20">Gaming Gears</h1>
        <p class="relative text-gray-400 max-w-md leading-relaxed left-12 bottom-12">
          containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <button class="relative left-32 bottom-7 font-bold bg-[#3373B1] border-slate-10 rounded-3xl p-4 flex px-10 hover:bg-[#7700A5] transition-all duration-300">Learn More</button>
      </div>
      <div class="md:w-1/2 mt-12 md:mt-1 relative flex justify-end left-15">
        <div class="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full"></div>
        <img src="/images/WhatsApp_Image_2026-01-21_at_22.19.02-removebg-preview.png" alt="Hero Image" class="relative z-10 w-full max-w-lg drop-shadow-[0_0_35px_rgba(59,130,246,0.5)]" />
      </div>
    </section>

    <section class="container mx-auto px-6 py-20 overflow-x-hidden">
      <h2 class="text-3xl font-bold text-center text-blue-400 mb-16">Our product</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="item in products" :key="item.id" 
          class="bg-[#0f172a] border border-slate-900 rounded-3xl p-8 flex justify-between items-center hover:border-blue-500/50 transition-all duration-300 group">
          <div class="space-y-9">
            <h3 class="text-3xl font-semibold text-blue-600 leading-tight p-2 md:w-1/0 space-y-3">{{ item.name }}</h3>
            <RouterLink to="/games">
              <button class="bg-[#ffffff] items-center justify-center border-slate-10 p-10 text-black from-purple-600 to-pink-600 px-10 py-2 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-[#3373B1] hover:text-white hover:scale-110 transition-transform duration-500">
                <img src="/images/6207f15b3c5cd8af3ac23f5ca07bf078aba1c333.png" class="relative right-5 top-2.5 w-5 h-5"> <p class="relative left-2 bottom-2  ">Buy Now</p>
              </button>
            </RouterLink>
            
          </div>
          <div class="w-1/2 flex justify-end left-23">
            <img :src="item.image" :alt="item.name" class="w-40 group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-10 md:px-40 bg-[#000524]">
      <div class="bg-white text-center rounded-xl py-8 px-10 mb-16 shadow-lg shadow-white/5 font-sans">
        <h1 class="text-black mb-7 font-bold">Products from leading brands</h1>
        <div class="flex flex-wrap justify-between shadow-white/5">
          <img src="/images/acer.jpeg" alt="Acer" class="h-6 opacity-80 hover:opacity-100 transition">
          <img src="/images/nubwo.jpeg" alt="NUBWO" class="h-6 opacity-80">
          <img src="/images/lenovo.jpeg" alt="Lenovo" class="h-6 opacity-80">
          <img src="/images/asus.jpeg" alt="ASUS" class="h-5 opacity-80">
          <img src="/images/nzxt.jpeg" alt="NZXT" class="h-6 opacity-80">
          <img src="/images/lg.jpeg" alt="LG" class="h-8 opacity-80">
          <img src="/images/razer.jpeg" alt="Razer" class="h-8 opacity-80">
          <img src="/images/msi.jpeg" alt="Msi" class="h-8 opacity-80">
          <img src="/images/anda-seaT.jpeg" alt="Anda seaT" class="h-8 opacity-80">
          <img src="/images/LOGA.jpeg" alt="Razer" class="h-8 opacity-80">
          <img src="/images/ERGONOZ.jpeg" alt="Razer" class="h-8 opacity-80">
          <img src="/images/Mega.jpeg" alt="Razer" class="h-8 opacity-80">
        </div>
        
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        
        <button class="absolute -left-24 top-1/2 -translate-y-1/2 hidden lg:flex w-10 h-10 bg-purple-700 rounded-full items-center justify-center text-white shadow-lg z-10 hover:bg-purple-600">
          <span class="text-xl">❮</span>
        </button>

        <div class="bg-white rounded-3xl p-6 flex flex-col items-center relative group hover:">
          <div class="absolute left-0 top-1 w-24 h-24 ">
            <img src="/images/sold-removebg-preview.png" alt="">
          </div>
          <div class="h-48 flex items-center justify-center mb-6">
            <img src="/images/ch-removebg-preview.png" alt="Gaming Chair" class="max-h-full object-contain hover:scale-105 transition duration-300">
          </div>
          <div class="text-left w-full space-y-2">
            <h3 class="text-xs font-bold text-gray-800 line-clamp-2 uppercase">GAMING CHAIR | ANDA SEAT KAISER 4 6D SERIES</h3>
            <p class="text-[10px] text-purple-600 font-medium text-center">ຈັດສົ່ງພາຍໃນ7ມື້</p>
            <p class="text-sm font-bold text-gray-900">฿4,990.00</p>
          </div>
        </div>

        <div class="bg-white rounded-3xl p-6 flex flex-col items-center relative group">
          <div class="absolute left-0 top-1 w-24 h-24 ">
            <img src="/images/sold-removebg-preview.png" alt="">
          </div>
          <div class="h-48 flex items-center justify-center mb-6 text-blue-500 text-6xl">
            <img src="/images/hp-removebg-preview.png" alt="Gaming Chair" class="max-h-full object-contain hover:scale-105 transition duration-300">
          </div>
          <div class="text-left w-full space-y-2">
            <h3 class="text-xs font-bold text-gray-800 line-clamp-2 uppercase">HEADSET (หูฟัง) KZ EDX PRO X MIC (CYAN)</h3>
            <p class="text-[10px] text-purple-600 font-medium text-center">ຈັດສົ່ງພາຍໃນ7ມື້</p>
            <p class="text-sm font-bold text-gray-900">฿290.00</p>
          </div>
        </div>

        <RouterLink to="/productdetail">
          <div class="bg-white rounded-3xl p-6 flex flex-col items-center relative group">
            <div class="absolute left-0 top-1 w-24 h-24 ">
              <img src="/images/sold-removebg-preview.png" alt="">
            </div>
            <div class="h-48 flex items-center justify-center mb-6 text-gray-400 text-6xl">
              <img src="/images/M-removebg-preview.png" alt="Gaming Chair" class="max-h-full object-contain hover:scale-105 transition duration-300">
            </div>
            <div class="text-left w-full space-y-2">
              <h3 class="text-xs font-bold text-gray-800 line-clamp-2 uppercase">MOUSE (เมาส์) LOGITECH G PRO X SUPERLIGHT 2</h3>
              <p class="text-[10px] text-purple-600 font-medium text-center">ຈັດສົ່ງພາຍໃນ7ມື້</p>
              <p class="text-sm font-bold text-gray-900">฿3,990.00</p>
            </div>
          </div>
        </RouterLink>
        

        <div class="bg-white rounded-3xl p-6 flex flex-col items-center relative group">
          <div class="absolute left-0 top-1 w-24 h-24 ">
            <img src="/images/sold-removebg-preview.png" alt="">
          </div>
          <div class="h-48 flex items-center justify-center mb-6 text-blue-400 text-6xl">
            <img src="/images/kb-removebg-preview.png" alt="Gaming Chair" class="max-h-full object-contain hover:scale-105 transition duration-300">
          </div>
          <div class="text-left w-full space-y-2">
            <h3 class="text-xs font-bold text-gray-800 line-clamp-2 uppercase">KEYBOARD (คีย์บอร์ด) KZZI K75 PRO ARCADE</h3>
            <p class="text-[10px] text-purple-600 font-medium text-center">ຈັດສົ່ງພາຍໃນ7ມື້</p>
            <p class="text-sm font-bold text-gray-900">฿2,999.00</p>
          </div>
        </div>

          <button class="absolute -right-24 top-1/2 -translate-y-1/2 hidden lg:flex w-10 h-10 bg-purple-700 rounded-full items-center justify-center text-white shadow-lg z-10 hover:bg-purple-600">
            <span class="text-xl">❯</span>
          </button>
        
      </div>
    </section>

    <section class="relative min-h-full overflow-hidden font-sans text-white mx-full px-6 md:px-27 py-16 flex items-center overflow-x-hidden">
      <div :style="{ backgroundImage: `url(${bgImage2})` }" class="absolute inset-0 bg-center bg-no-repeat bg-cover blur-md z-0"></div>
      <div class="absolute inset-0 bg-black/40 z-10"></div>
      <div class="container mx-auto px-6 relative z-20">
      <h2 class="text-3xl font-bold text-center text-blue-400 mb-16">Services</h2>
    
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="service in services" :key="service.title" class="bg-black/40 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-black/60 transition">
          <div class="text-4xl mb-6">
            <img :src="service.image" :alt="service.name" class="w-40">
          </div>
          <h4 class="text-xl font-semibold text-blue-400 mb-4">{{ service.title }}</h4>
          <p class="text-gray-500 text-sm leading-relaxed">{{ service.desc }}</p>
          </div>
        </div>

        <div class="flex justify-center mt-12">
          <button class="bg-[#3373B1] text-white px-10 py-2 rounded-lg text-sm font-semibold hover:bg-[#7700A5] hover:text-black hover:font-bold">Find with us</button>
        </div>
      </div>
    </section>

    <footer class="bg-[#000524] text-gray-400 py-16 px-8 md:px-20 border-t border-white/5">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
    
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-3">
            <div>
              <img src="/images/b09d77f7dcd3d859774175ba8a23f0ba96e2fd88.png" alt="Logo" class="w-105 h-105 opacity-90">
            </div>
          </div>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-6 text-lg">Customer Service</h3>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:text-blue-400 transition">Shipping Information</a></li>
            <li><a href="#" class="hover:text-blue-400 transition">Product Warranty</a></li>
            <li><a href="#" class="hover:text-blue-400 transition">Order Cancellation</a></li>
            <li><a href="#" class="hover:text-blue-400 transition">Returns & Refunds</a></li>
            <li><a href="#" class="hover:text-blue-400 transition">Track Your Order</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-6 text-lg">Company</h3>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:text-blue-400 transition">About Us</a></li>
            <li><a href="#" class="hover:text-blue-400 transition">Terms and Conditions</a></li>
            <li><a href="#" class="hover:text-blue-400 transition">Privacy Policy</a></li>
        </ul>
        </div>

        <div class="space-y-4">
          <h3 class="text-white font-semibold mb-6 text-lg">Contact Information</h3>
          <div class="text-sm space-y-3">
            <p>Vientiane prefecture<br>Ban DongDok, Laos</p>
            <p>Phone: <span class="text-white">+856 2054281231</span></p>
            <p>Email: <span class="text-white">khamhoung@gmail.com</span></p>
          </div>

          <div class="flex gap-4 pt-4">
            <a href="#" class="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition duration-300">
              <img src="https://www.svgrepo.com/show/521654/facebook.svg" class="w-5 h-5" alt="Facebook">
            </a>
            <a href="#" class="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-pink-600 hover:scale-110 transition duration-300">
              <img src="https://www.svgrepo.com/show/521711/instagram.svg" class="w-5 h-5" alt="Instagram">
            </a>
            <a href="#" class="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-600 hover:scale-110 transition duration-300">
              <img src="https://www.svgrepo.com/show/521936/youtube.svg" class="w-5 h-5" alt="YouTube">
            </a>
          </div>
        </div>
      </div>

      <div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
        © 2026 K TECH COMPANY. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<style scoped>

</style>