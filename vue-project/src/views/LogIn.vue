<script setup>
import dashboardImg from '/images/a-game-controller-is-shown-in-front-of-a-computer-photo.jpg';
</script>

<template>
  <div class="flex flex-col md:flex-row min-h-screen w-full bg-white font-sans overflow-hidden">
    
    <div class="hidden md:flex md:w-1/2 bg-[#1a0b4b] relative items-center justify-center p-12 overflow-hidden">
      <div class="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div class="relative z-10 text-center max-w-lg">
        <div class="mb-8 flex justify-center">
            <div class="text-white text-3xl font-bold flex items-center gap-2">
                <span class="relative top-2 text-pink-500 w-20 h-20"><img src="/images/b09d77f7dcd3d859774175ba8a23f0ba96e2fd88.png" alt=""></span> KTECN COMPANY
            </div>
        </div>
        
        <div class="relative group">
            <div class="absolute -inset-1 bg-linear-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25"></div>
            <img :src="dashboardImg" alt="Dashboard" class="relative rounded-lg shadow-2xl border border-white/10" />
        </div>

        <div class="mt-12 space-y-4">
          <h2 class="text-3xl font-bold text-white">Easy to use Dashboard</h2>
          <p class="text-gray-400 text-sm leading-relaxed">
            Choose the best of product/services and get a bare metal server at the lowest prices.
          </p>
        </div>

        <div class="flex justify-center gap-2 mt-8">
            <div class="w-8 h-1 bg-purple-500 rounded-full"></div>
            <div class="w-2 h-1 bg-gray-600 rounded-full"></div>
            <div class="w-2 h-1 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </div>

    <div class="flex-1 flex items-center justify-center p-8 md:p-16">
      <div class="w-full max-w-md space-y-8">
        <div class="text-center mb-8">
          <h1 class="text-2xl font-bold text-slate-900">Create Your Account</h1>
        </div>

        <button class="w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition font-medium text-slate-700">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="w-5 h-5" alt="Google">
          Sign Up with Google
        </button>

        <div class="relative flex items-center">
          <div class="grow border-t border-gray-100"></div>
          <span class="shrink mx-4 text-gray-400 text-sm">OR</span>
          <div class="grow border-t border-gray-100"></div>
        </div>

        <form @submit.prevent class="space-y-5 text-black">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
            <input type="text" placeholder="Enter your name" 
              class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-hidden transition">
          </div>
          
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-2">Your Email</label>
            <input type="email" placeholder="example@mail.com" 
              class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-hidden transition">
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-2">Password</label>
            <div class="relative">
                <input type="password" placeholder="At least 8 characters" 
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-hidden transition">
                <button class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                    <img src="/images/vecteezy_eye-icon-set-hidden-icon-visible-invisible-icon-look-and_22782493-removebg-preview.png" class="relative top-3 w-7 h-6 opacity-45"></img>
                </button>
            </div>
            <p class="mt-2 text-xs text-gray-400">Must be 8 characters at least</p>
          </div>

          <div class="flex items-center gap-3">
            <input type="checkbox" id="terms" class="w-4 h-4 rounded-sm border-gray-300 text-indigo-600">
            <label for="terms" class="text-sm text-gray-500">
              I agree to the <a href="#" class="text-indigo-600 font-semibold hover:underline">Terms & Conditions</a>
            </label>
          </div>
        </form>
        <div>
          <RouterLink to="/">
            <button class="w-full bg-linear-to-r bg-indigo-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-indigo-200 hover:opacity-90 transition transform hover:-translate-y-0.5">Register</button>
          </RouterLink>
          
        </div>
        <p class="text-center text-sm text-gray-500 mt-8">
          Already have an account? 
          <a href="#" class="text-indigo-600 font-bold hover:underline">Sign In</a>
        </p>
      </div>
    </div>
  </div>
</template>