<script setup>
import { ref } from 'vue'

    const isSuccessModalOpen = ref(false)

    const addToCart = () => {
        isSuccessModalOpen.value = true
    }


    const closeModal = () => {
        isSuccessModalOpen.value = false
    }

const cartItems = ref([
  {
    id: 1,
    name: 'MOUSE (ເມົ້າ) LOGITECH G PRO-X SUPERLIGHT 2 - (WHITE)',
    brand: 'Logitech',
    sku: 'SKU-07059',
    price: '3,728.97',
    quantity: 1,
    image: '/images/m3-removebg-preview.png' // เปลี่ยน path รูปให้ตรงกับของคุณ
  },
  {
    id: 2,
    name: 'KEYBOARD (ຄີບອດ) KZZI K75 PRO ARCADE GAMES (ETERNITY TACTILE SWITCH)',
    brand: 'KZZI',
    sku: 'SKU-07060',
    price: '2,900.00',
    quantity: 1,
    image: '/images/K4-removebg-preview.png'
  },
  {
    id: 3,
    name: 'HEADSET (ຫູຟັງ) KZ EDX PRO X MIC (CYAN) (3M)',
    brand: 'KZ',
    sku: 'SKU-07061',
    price: '290.00',
    quantity: 1,
    image: '/images/H4-removebg-preview.png'
  }
])
</script>

<template>
  <div class="min-h-screen bg-[#020617] text-black font-lao py-12 px-4 md:px-10">
    <div class="max-w-6xl mx-auto border-t border-b border-gray-800 py-10">
      
      <div class="flex flex-col lg:flex-row gap-8">
        
        <div class="flex-1 space-y-4">
          <div v-for="item in cartItems" :key="item.id" class="bg-white rounded-3xl p-6 flex items-center gap-6 relative">
            
            <img :src="item.image" class="w-24 h-24 object-contain" alt="Product">
            
            <div class="flex-1">
              <h3 class="text-xs md:text-sm font-bold uppercase mb-2">{{ item.name }}</h3>
              <div class="text-[10px] text-gray-500 flex gap-4">
                <span>ແບຣນ: {{ item.brand }}</span>
                <span>ລະຫັດສິນຄ້າ: {{ item.sku }}</span>
              </div>
            </div>

            <div class="flex flex-col items-end gap-4 mr-8">
              <div class="font-bold text-sm">฿{{ item.price }}</div>
              <div class="flex items-center gap-3 text-[#7e00b8]">
                <button class="w-6 h-6 rounded-full border-2 border-[#7e00b8] flex items-center justify-center font-bold pb-0.5">+</button>
                <span class="font-bold text-black">0{{ item.quantity }}</span>
                <button class="w-6 h-6 rounded-full border-2 border-[#7e00b8] flex items-center justify-center font-bold pb-0.5">-</button>
              </div>
            </div>

            <button class="absolute right-6 top-1/2 -translate-y-1/2 text-black hover:text-red-500 text-xl font-bold">
              ✕
            </button>
          </div>
        </div>

        <div class="w-full lg:w-[350px]">
          <div class="bg-white rounded-3xl p-8">
            <h2 class="text-lg font-bold mb-6">ຍອດລວມທັງໝົດ</h2>
            
            <div class="space-y-3 text-sm text-gray-600 border-b pb-6 mb-6">
              <div class="flex justify-between">
                <span>ຄ່າຈັດສົ່ງ:</span>
                <span>฿0.00</span>
              </div>
              <div class="flex justify-between">
                <span>ລາຄາກ່ອນອາກອນ:</span>
                <span>฿6,918.00</span>
              </div>
              <div class="flex justify-between">
                <span>ພາສີ VAT 7%:</span>
                <span>฿475.48</span>
              </div>
            </div>

            <div class="flex justify-between items-center font-bold text-lg mb-8">
              <span>ຍອດລວມ(+ພາສີ)</span>
              <span>฿7,268.00</span>
            </div>

            <div class="space-y-2 text-[10px] text-gray-500 mb-8">
              <p>• ສົ່ງຟຣີເມື່ອຊື້ສິນຄ້າຄົບ 20,000,000 ກີບ</p>
              <p>• ບໍລິການຈັດສົ່ງພາຍໃນ 24 ຊົ່ວໂມງ</p>
              <p>• ສາມາດປ່ຽນຄືນສິນຄ້າໄດ້ພາຍໃນ 7 ວັນ</p>
            </div>

            <button @click="addToCart" class="w-full bg-[#7e00b8] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-purple-800 transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                ຈ່າຍເງິນ
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
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

                <h3 class="text-3xl font-bold text-gray-900 mb-2 font-lao">ຈ່າຍເງິນສຳເລັດ</h3>
                <p class="text-gray-500 font-lao mb-8">ການຊຳລະເງິນຂອງທ່ານສຳເລັດເເລ້ວ ຂອບໃຈທີ່ອຸດຫນູນ</p>

                <button @click="closeModal" class="w-full bg-[#7e00b8] hover:bg-[#6a009c] text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-200 transition-all active:scale-95 font-lao">
                    ຊື້ສິນຄ້າອື່ນອີກ
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