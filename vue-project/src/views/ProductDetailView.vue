<script setup>
    const services = [
        { title: 'Shipping', desc: 'Free shipping nationwide for purchases over 2 million Kip.', name:'Icon1', image: '/images/fa54b3a581f73988d2e2e2b906dc962f60a14eae.png' },
        { title: 'Claim', desc: 'Easy product claims, within 7 days.', name:'Icon2', image: '/images/053320bfb3449edbd09f087a1d7402b41512fb2a.png' },
        { title: 'Faster', desc: 'Fast service Quick response 24-hour service.', name:'Icon3', image: '/images/1c2318a73f2c5efd1e87ff84ac28a1ab6e44a66e.png' },
        { title: 'Secure payment', desc: 'Secure payment with international standards.', name:'Icon3', image: '/images/7558573b875da9b40cf63572e041303f0c5999b4.png'},
    ];

    import { ref } from 'vue'

    const isSuccessModalOpen = ref(false)

    const addToCart = () => {
        isSuccessModalOpen.value = true
    }


    const closeModal = () => {
        isSuccessModalOpen.value = false
    }
</script>

<template>
    <div class="min-h-screen bg-[#020617] text-white font-lao p-6">
        <div class="max-w-6xl mx-auto">
      
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        
            <div class="bg-white rounded-3xl p-10 flex items-center justify-center relative">
                <button class="absolute left-4 bg-purple-600 rounded-full p-2 text-white">←</button>
                <img src="/images/m3-removebg-preview.png" class="w-full object-contain">
                <button class="absolute right-4 bg-purple-600 rounded-full p-2 text-white">→</button>
            </div>

            <div class="flex flex-col justify-center">
                <h1 class="text-3xl font-bold uppercase mb-2">Mouse Logitech G Pro-X</h1>
                <p class="text-purple-400 mb-6">ຮັບປະກັນ 2 ປີ</p>
          
                <div class="text-3xl font-bold mb-8">฿3,990.00</div>

            <div class="flex items-center gap-4 mb-10">
                <div class="flex items-center border border-gray-600 rounded-full px-4 py-2 gap-4">
                    <button class="text-xl">-</button>
                    <span>01</span>
                    <button class="text-xl text-purple-400">+</button>
                </div>
                <button @click="addToCart" class="border border-purple-500 text-purple-500 px-6 py-3 rounded-full">ເພີ່ມໃສ່ກະຕ່າ</button>
                <button class="bg-purple-600 text-white px-8 py-3 rounded-full">ຊື້ທັນທີ</button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div v-for="service in services" :key="service.title" class="bg-black/40 backdrop-blur-md border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-black/60 transition">
                    <div class="text-4xl mb-6">
                        <img :src="service.image" :alt="service.name" class="w-40">
                    </div>
                    <h4 class="text-xl font-semibold text-blue-400 mb-4">{{ service.title }}</h4>
                    <p class="text-gray-500 text-sm leading-relaxed">{{ service.desc }}</p>
                </div>
            </div>
        </div>
    </div>  
</div>

    <div class="mt-16">
        <h2 class="text-xl font-bold italic mb-6">Product detail</h2>
            <div class="bg-[#1e293b]/50 rounded-2xl overflow-hidden">
                <table class="w-full text-sm">
                    <tbody>
                        <tr class="border-b border-gray-800">
                            <td class="p-4 text-gray-400 w-1/3">Brand</td>
                            <td class="p-4">LOGITECH</td>
                        </tr>
                        <tr class="border-b border-gray-800">
                            <td class="p-4 text-gray-400">Color</td>
                            <td class="p-4">WHITE</td>
                        </tr>
                        <tr>
                            <td class="p-4 text-gray-400">Warranty</td>
                            <td class="p-4">2 Years</td>
                        </tr>
                        <tr class="border-b border-gray-800">
                            <td class="p-4 text-gray-400 w-1/3">Connector</td>
                            <td class="p-4">3.5 mm.</td>
                        </tr>
                        <tr class="border-b border-gray-800">
                            <td class="p-4 text-gray-400">Driver Unit</td>
                            <td class="p-4">50mm.</td>
                        </tr>
                        <tr>
                            <td class="p-4 text-gray-400">Frequency Response</td>
                            <td class="p-4">20Hz - 20kHz</td>
                        </tr> 
                        <tr class="border-b border-gray-800">
                            <td class="p-4 text-gray-400 w-1/3">Sensitivity</td>
                            <td class="p-4">114dB/mW</td>
                        </tr>
                        <tr class="border-b border-gray-800">
                            <td class="p-4 text-gray-400">Input Impedance</td>
                            <td class="p-4">32 ohm</td>
                        </tr>
                        <tr>
                            <td class="p-4 text-gray-400">Mic. Frequency Response</td>
                            <td class="p-4">10Hz-10KHz</td>
                        </tr>
                        <tr class="border-b border-gray-800">
                            <td class="p-4 text-gray-400 w-1/3">Mic. Sensitivity</td>
                            <td class="p-4">-41dB(+/-3dB)</td>
                        </tr>
                        <tr class="border-b border-gray-800">
                            <td class="p-4 text-gray-400 w-1/3">Mic. Impedance</td>
                            <td class="p-4">2.2KΩ</td>
                        </tr>
                        <tr class="border-b border-gray-800">
                            <td class="p-4 text-gray-400">Cord Length</td>
                            <td class="p-4"> 1.8m</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <section class="py-16 px-10 md:px-40 bg-[#000524]">

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

    <Transition name="fade">
  <div v-if="isSuccessModalOpen" class="fixed inset-0 z-50 flex items-center justify-center px-4">
    <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="closeModal"></div>

    <div class="relative bg-white rounded-[2rem] p-10 max-w-sm w-full text-center shadow-2xl overflow-hidden animate-pop">
      
      <button @click="closeModal" class="absolute top-5 right-6 text-gray-400 hover:text-gray-600 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div class="flex justify-center mb-6">
        <div class="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      <h3 class="text-3xl font-bold text-gray-900 mb-2 font-lao">ເພີ່ມໃສ່ກະຕ່າແລ້ວ</h3>
      <p class="text-gray-500 font-lao mb-8">ສິນຄ້າໄດ້ຖືກເພີ່ມໃສ່ກະຕ່າແລ້ວ</p>

      <button @click="closeModal" class="w-full bg-[#7e00b8] hover:bg-[#6a009c] text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-200 transition-all active:scale-95 font-lao">
        ເບິ່ງກະຕ່າ
      </button>
    </div>
  </div>
</Transition>
</template>
<style scoped>
    .font-lao {
        line-height: 1.6;
    }

    .animate-pop {
    animation: modal-pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    @keyframes modal-pop {
    0% { transform: scale(0.9); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
    }

    .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
    }
    .fade-enter-from, .fade-leave-to {
    opacity: 0;
    }
</style>