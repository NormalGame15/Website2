<script setup>
    import bgCImage from '/images/bgC.jpeg';
    import bgMImage from '/images/bgM.jpeg';
    import bgKImage from '/images/bgK.jpeg';
    import bgEImage from '/images/bgE.jpeg';

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
    <div class="font-lao bg-[#0d1744] text-white min-h-screen overflow-hidden">
        <section :style="{ backgroundImage: `url(${bgCImage})` }" class="relative inset-0 bg-center bg-no-repeat bg-cover z-0 pt-16 pb-16">
            <h1 class="text-4xl font-bold mb-4 pb-10 text-center ">Controller Gaming</h1>
            <div class="max-w-7xl mx-4 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                <div class="bg-white rounded-3xl p-14 flex flex-col items-center relative group ">
                    <div class="h-48 flex items-center justify-center mb-6">
                        <img src="/images/cl2-removebg-preview.png" alt="Gaming Chair" class="max-h-full object-contain hover:scale-105 transition duration-300">
                    </div>
                    <div class="text-left w-full space-y-3">
                        <h3 class="text-xs font-bold text-gray-800 line-clamp-2 uppercase">JOYSTICK HyperX CLUTCH GLADIATE - XBOX (6L366AA)</h3>
                        <p class="text-[10px] text-purple-600 font-medium text-center">ຈັດສົ່ງພາຍໃນ7ມື້</p>
                        <p class="absolute right-52 bottom-6 text-sm font-bold text-gray-900 ">฿1,190.00</p>
                        <button @click="addToCart" class="absolute right-3 bottom-5 mt-2 w-32 bg-purple-600 hover:bg-purple-700 text-white py-0.5 rounded-lg transition duration-300">Add to Cart</button>
                    </div>
                </div>

                <div class="bg-white rounded-3xl p-14 flex flex-col items-center relative group hover:">
                    <div class="h-48 flex items-center justify-center mb-6">
                        <img src="/images/cl1-removebg-preview.png" alt="Gaming Chair" class="max-h-full object-contain hover:scale-105 transition duration-300">
                    </div>
                    <div class="text-left w-full space-y-2">
                        <h3 class="text-xs font-bold text-gray-800 line-clamp-2 uppercase">JOYSTICK COOLER MASTER STORM CONTROLLER V1 (XBOX LAYOUT) (1Y)</h3>
                        <p class="text-[10px] text-purple-600 font-medium text-center">ຈັດສົ່ງພາຍໃນ7ມື້</p>
                    <p class="absolute right-52 bottom-6 text-sm font-bold text-gray-900 ">฿1,590.00</p>
                        <button @click="addToCart" class="absolute right-3 bottom-5 mt-2 w-32 bg-purple-600 hover:bg-purple-700 text-white py-0.5 rounded-lg transition duration-300">Add to Cart</button>
                    </div>
                </div>

                <div class="bg-white rounded-3xl p-14 flex flex-col items-center relative group hover:">
                    <div class="h-48 flex items-center justify-center mb-6">
                        <img src="/images/cl3-removebg-preview.png" alt="Gaming Chair" class="max-h-full object-contain hover:scale-105 transition duration-300">
                    </div>
                    <div class="text-left w-full space-y-2">
                        <h3 class="text-xs font-bold text-gray-800 line-clamp-2 uppercase">JOYSTICK (จอยสติ๊ก) ONIKUMA IRUKA GAMING WIRELESS CONTROLLER (BLACK) (2Y)</h3>
                        <p class="text-[10px] text-purple-600 font-medium text-center">ຈັດສົ່ງພາຍໃນ7ມື້</p>
                        <p class="absolute right-52 bottom-6 text-sm font-bold text-gray-900 ">฿690.00</p>
                        <button @click="addToCart" class="absolute right-3 bottom-5 mt-2 w-32 bg-purple-600 hover:bg-purple-700 text-white py-0.5 rounded-lg transition duration-300">Add to Cart</button>
                    </div>
                </div>

                <div class="bg-white rounded-3xl p-14 flex flex-col items-center relative group hover:">
                    <div class="h-48 flex items-center justify-center mb-6">
                        <img src="/images/cl4-removebg-preview.png" alt="Gaming Chair" class="max-h-full object-contain hover:scale-105 transition duration-300">
                    </div>
                    <div class="text-left w-full space-y-2">
                        <h3 class="text-xs font-bold text-gray-800 line-clamp-2 uppercase">JOYSTICK GAMESIR SUPER NOVA WIRELESS GAMEPAD (PINK) (1Y)</h3>
                        <p class="text-[10px] text-purple-600 font-medium text-center">ຈັດສົ່ງພາຍໃນ7ມື້</p>
                        <p class="absolute right-52 bottom-6 text-sm font-bold text-gray-900 ">฿1,490.00</p>
                        <button @click="addToCart" class="absolute right-3 bottom-5 mt-2 w-32 bg-purple-600 hover:bg-purple-700 text-white py-0.5 rounded-lg transition duration-300">Add to Cart</button>
                    </div>
                    
                    <button class="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:flex w-10 h-10 bg-purple-700 rounded-full items-center justify-center text-white shadow-lg z-10 hover:bg-purple-600">
                        <span class="text-xl">❯</span>
                    </button>
                </div>
            </div>
        </section>

        <section :style="{ backgroundImage: `url(${bgMImage})` }" class=" inset-0 bg-center bg-no-repeat bg-cover z-0 pt-16 pb-16">
            <h1 class="text-4xl font-bold mb-4 pb-10 text-center ">Gaming Mouse</h1>
            <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                <div class="bg-white rounded-3xl p-14 flex flex-col items-center relative group hover:">
                    <div class="h-48 flex items-center justify-center mb-6">
                        <img src="/images/m4-removebg-preview.png" alt="Gaming Chair" class="max-h-full object-contain hover:scale-105 transition duration-300">
                    </div>
                    <div class="text-left w-full space-y-3">
                        <h3 class="text-xs font-bold text-gray-800 line-clamp-2 uppercase">MOUSE (ເມົ້າ) LOGITECH G PRO-X SUPERLIGHT 2 - (WHITE)</h3>
                        <p class="text-[10px] text-purple-600 font-medium text-center">ຈັດສົ່ງພາຍໃນ7ມື້</p>
                        <p class="absolute right-52 bottom-6 text-sm font-bold text-gray-900 ">฿4,990.00</p>
                        <button @click="addToCart" class="absolute right-3 bottom-5 mt-2 w-32 bg-purple-600 hover:bg-purple-700 text-white py-0.5 rounded-lg transition duration-300">Add to Cart</button>
                    </div>
                </div>

                <div class="bg-white rounded-3xl p-14 flex flex-col items-center relative group hover:">
                    <div class="h-48 flex items-center justify-center mb-6">
                        <img src="/images/m2-removebg-preview.png" alt="Gaming Chair" class="max-h-full object-contain hover:scale-105 transition duration-300">
                    </div>
                    <div class="text-left w-full space-y-2">
                        <h3 class="text-xs font-bold text-gray-800 line-clamp-2 uppercase">MOUSE (ເມົ້າ) LOGITECH G PRO-X SUPERLIGHT 2 - (WHITE)</h3>
                        <p class="text-[10px] text-purple-600 font-medium text-center">ຈັດສົ່ງພາຍໃນ7ມື້</p>
                    <p class="absolute right-52 bottom-6 text-sm font-bold text-gray-900 ">฿3,790.00</p>
                        <button @click="addToCart" class="absolute right-3 bottom-5 mt-2 w-32 bg-purple-600 hover:bg-purple-700 text-white py-0.5 rounded-lg transition duration-300">Add to Cart</button>
                    </div>
                </div>

                <div class="bg-white rounded-3xl p-14 flex flex-col items-center relative group hover:">
                    <div class="h-48 flex items-center justify-center mb-6">
                        <img src="/images/m1-removebg-preview.png" alt="Gaming Chair" class="max-h-full object-contain hover:scale-105 transition duration-300">
                    </div>
                    <div class="text-left w-full space-y-2">
                        <h3 class="text-xs font-bold text-gray-800 line-clamp-2 uppercase">MOUSE (ເມົ້າ) LOGITECH G PRO-X SUPERLIGHT 2 - (WHITE)</h3>
                        <p class="text-[10px] text-purple-600 font-medium text-center">ຈັດສົ່ງພາຍໃນ7ມື້</p>
                        <p class="absolute right-52 bottom-6 text-sm font-bold text-gray-900 ">฿3,990.00</p>
                        <button @click="addToCart" class="absolute right-3 bottom-5 mt-2 w-32 bg-purple-600 hover:bg-purple-700 text-white py-0.5 rounded-lg transition duration-300">Add to Cart</button>
                    </div>
                </div>

                <div class="bg-white rounded-3xl p-14 flex flex-col items-center relative group hover:">
                    <div class="h-48 flex items-center justify-center mb-6">
                        <img src="/images/m3-removebg-preview.png" alt="Gaming Chair" class="max-h-full object-contain hover:scale-105 transition duration-300">
                    </div>
                    <div class="text-left w-full space-y-2">
                        <h3 class="text-xs font-bold text-gray-800 line-clamp-2 uppercase">MOUSE (ເມົ້າ) LOGITECH G PRO-X SUPERLIGHT 2 - (WHITE)</h3>
                        <p class="text-[10px] text-purple-600 font-medium text-center">ຈັດສົ່ງພາຍໃນ7ມື້</p>
                        <p class="absolute right-52 bottom-6 text-sm font-bold text-gray-900 ">฿2,990.00</p>
                        <button @click="addToCart" class="absolute right-3 bottom-5 mt-2 w-32 bg-purple-600 hover:bg-purple-700 text-white py-0.5 rounded-lg transition duration-300">Add to Cart</button>
                    </div>
                    
                    <button class="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:flex w-10 h-10 bg-purple-700 rounded-full items-center justify-center text-white shadow-lg z-10 hover:bg-purple-600">
                        <span class="text-xl">❯</span>
                    </button>
                </div>
            </div>
        </section>

        <section :style="{ backgroundImage: `url(${bgKImage})` }" class=" inset-0 bg-center bg-no-repeat bg-cover z-0 pt-16 pb-16">
            <h1 class="text-4xl font-bold mb-4 pb-10 text-center ">Keyboard Gaming</h1>
            <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                <div class="bg-white rounded-3xl p-14 flex flex-col items-center relative group hover:">
                    <div class="h-48 flex items-center justify-center mb-6">
                        <img src="/images/K1-removebg-preview.png" alt="Gaming Chair" class="max-h-full object-contain hover:scale-105 transition duration-300">
                    </div>
                    <div class="text-left w-full space-y-3">
                        <h3 class="text-xs font-bold text-gray-800 line-clamp-2 uppercase">KEYBOARD (ຄີບອດ) KZZI K75 PRO+ KNIGHT GRAY (MOMENT LINEAR SWITCH) (EN)</h3>
                        <p class="text-[10px] text-purple-600 font-medium text-center">ຈັດສົ່ງພາຍໃນ7ມື້</p>
                        <p class="absolute right-52 bottom-6 text-sm font-bold text-gray-900 ">฿4,990.00</p>
                        <button @click="addToCart" class="absolute right-3 bottom-5 mt-2 w-32 bg-purple-600 hover:bg-purple-700 text-white py-0.5 rounded-lg transition duration-300">Add to Cart</button>
                    </div>
                </div>

                <div class="bg-white rounded-3xl p-14 flex flex-col items-center relative group hover:">
                    <div class="h-48 flex items-center justify-center mb-6">
                        <img src="/images/K2-removebg-preview.png" alt="Gaming Chair" class="max-h-full object-contain hover:scale-105 transition duration-300">
                    </div>
                    <div class="text-left w-full space-y-2">
                        <h3 class="text-xs font-bold text-gray-800 line-clamp-2 uppercase">KEYBOARD (ຄີບອດ) KZZI K75 PRO+ KNIGHT GRAY (MOMENT LINEAR SWITCH) (EN)</h3>
                        <p class="text-[10px] text-purple-600 font-medium text-center">ຈັດສົ່ງພາຍໃນ7ມື້</p>
                    <p class="absolute right-52 bottom-6 text-sm font-bold text-gray-900 ">฿3,590.00</p>
                        <button @click="addToCart" class="absolute right-3 bottom-5 mt-2 w-32 bg-purple-600 hover:bg-purple-700 text-white py-0.5 rounded-lg transition duration-300">Add to Cart</button>
                    </div>
                </div>

                <div class="bg-white rounded-3xl p-14 flex flex-col items-center relative group hover:">
                    <div class="h-48 flex items-center justify-center mb-6">
                        <img src="/images/K3-removebg-preview.png" alt="Gaming Chair" class="max-h-full object-contain hover:scale-105 transition duration-300">
                    </div>
                    <div class="text-left w-full space-y-2">
                        <h3 class="text-xs font-bold text-gray-800 line-clamp-2 uppercase">KEYBOARD (ຄີບອດ) KZZI K75 PRO+ KNIGHT GRAY (MOMENT LINEAR SWITCH) (EN)</h3>
                        <p class="text-[10px] text-purple-600 font-medium text-center">ຈັດສົ່ງພາຍໃນ7ມື້</p>
                        <p class="absolute right-52 bottom-6 text-sm font-bold text-gray-900 ">฿3,290.00</p>
                        <button @click="addToCart" class="absolute right-3 bottom-5 mt-2 w-32 bg-purple-600 hover:bg-purple-700 text-white py-0.5 rounded-lg transition duration-300">Add to Cart</button>
                    </div>
                </div>

                <div class="bg-white rounded-3xl p-14 flex flex-col items-center relative group hover:">
                    <div class="h-48 flex items-center justify-center mb-6">
                        <img src="/images/K4-removebg-preview.png" alt="Gaming Chair" class="max-h-full object-contain hover:scale-105 transition duration-300">
                    </div>
                    <div class="text-left w-full space-y-2">
                        <h3 class="text-xs font-bold text-gray-800 line-clamp-2 uppercase">KEYBOARD (ຄີບອດ) KZZI K75 PRO ARCADE GAMES (ETERNITY TACTILE SWITCH)</h3>
                        <p class="text-[10px] text-purple-600 font-medium text-center">ຈັດສົ່ງພາຍໃນ7ມື້</p>
                        <p class="absolute right-52 bottom-6 text-sm font-bold text-gray-900 ">฿2,990.00</p>
                        <button @click="addToCart" class="absolute right-3 bottom-5 mt-2 w-32 bg-purple-600 hover:bg-purple-700 text-white py-0.5 rounded-lg transition duration-300">Add to Cart</button>
                    </div>
                    
                    <button class="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:flex w-10 h-10 bg-purple-700 rounded-full items-center justify-center text-white shadow-lg z-10 hover:bg-purple-600">
                        <span class="text-xl">❯</span>
                    </button>
                </div>
            </div>
        </section>

        <section :style="{ backgroundImage: `url(${bgEImage})` }" class=" inset-0 bg-center bg-no-repeat bg-cover z-0 pt-16 pb-16">
            <h1 class="text-4xl font-bold mb-4 pb-10 text-center ">Headphone Gaming</h1>
            <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                <div class="bg-white rounded-3xl p-14 flex flex-col items-center relative group hover:">
                    <div class="h-48 flex items-center justify-center mb-6">
                        <img src="/images/H3-removebg-preview.png" alt="Gaming Chair" class="max-h-full object-contain hover:scale-105 transition duration-300">
                    </div>
                    <div class="text-left w-full space-y-3">
                        <h3 class="text-xs font-bold text-gray-800 line-clamp-2 uppercase">HEADSET (ຫູຟັງ) HyperX CLOUD STINGER 2 BLACK (519T1AA)</h3>
                        <p class="text-[10px] text-purple-600 font-medium text-center">ຈັດສົ່ງພາຍໃນ7ມື້</p>
                        <p class="absolute right-52 bottom-6 text-sm font-bold text-gray-900 ">฿1,590.00</p>
                        <button @click="addToCart" class="absolute right-3 bottom-5 mt-2 w-32 bg-purple-600 hover:bg-purple-700 text-white py-0.5 rounded-lg transition duration-300">Add to Cart</button>
                    </div>
                </div>

                <div class="bg-white rounded-3xl p-14 flex flex-col items-center relative group hover:">
                    <div class="h-48 flex items-center justify-center mb-6">
                        <img src="/images/H4-removebg-preview.png" alt="Gaming Chair" class="max-h-full object-contain hover:scale-105 transition duration-300">
                    </div>
                    <div class="text-left w-full space-y-2">
                        <h3 class="text-xs font-bold text-gray-800 line-clamp-2 uppercase">HEADSET (ຫູຟັງ) KZ EDX PRO X MIC (CYAN) (3M)</h3>
                        <p class="text-[10px] text-purple-600 font-medium text-center">ຈັດສົ່ງພາຍໃນ7ມື້</p>
                        <p class="absolute right-52 bottom-6 text-sm font-bold text-gray-900 ">฿290.00</p>
                        <button @click="addToCart" class="absolute right-3 bottom-5 mt-2 w-32 bg-purple-600 hover:bg-purple-700 text-white py-0.5 rounded-lg transition duration-300">Add to Cart</button>
                    </div>
                </div>

                <div class="bg-white rounded-3xl p-14 flex flex-col items-center relative group hover:">
                    <div class="h-48 flex items-center justify-center mb-6">
                        <img src="/images/H2-removebg-preview.png" alt="Gaming Chair" class="max-h-full object-contain hover:scale-105 transition duration-300">
                    </div>
                    <div class="text-left w-full space-y-2">
                        <h3 class="text-xs font-bold text-gray-800 line-clamp-2 uppercase">HEADSET (ຫູຟັງ) CORSAIR HS55 WIRELESS WHITE (CA-9011281-AP)</h3>
                        <p class="text-[10px] text-purple-600 font-medium text-center">ຈັດສົ່ງພາຍໃນ7ມື້</p>
                    <p class="absolute right-52 bottom-6 text-sm font-bold text-gray-900 ">฿3,990.00</p>
                        <button @click="addToCart" class="absolute right-3 bottom-5 mt-2 w-32 bg-purple-600 hover:bg-purple-700 text-white py-0.5 rounded-lg transition duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div class="bg-white rounded-3xl p-14 flex flex-col items-center relative group hover:">
                    <div class="h-48 flex items-center justify-center mb-6">
                        <img src="/images/H1-removebg-preview.png" alt="Gaming Chair" class="max-h-full object-contain hover:scale-105 transition duration-300">
                    </div>
                    <div class="text-left w-full space-y-2">
                        <h3 class="text-xs font-bold text-gray-800 line-clamp-2 uppercase">HEADSET (ຫູຟັງ) CORSAIR HS55 WIRELESS WHITE (CA-9011281-AP)</h3>
                        <p class="text-[10px] text-purple-600 font-medium text-center">ຈັດສົ່ງພາຍໃນ7ມື້</p>
                        <p class="absolute right-52 bottom-6 text-sm font-bold text-gray-900 ">฿,990.00</p>
                        <button @click="addToCart" class="absolute right-3 bottom-5 mt-2 w-32 bg-purple-600 hover:bg-purple-700 text-white py-0.5 rounded-lg transition duration-300">Add to Cart</button>
                    </div>
                    
                    <button class="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:flex w-10 h-10 bg-purple-700 rounded-full items-center justify-center text-white shadow-lg z-10 hover:bg-purple-600">
                        <span class="text-xl">❯</span>
                    </button>
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

<script setup>
</script>

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