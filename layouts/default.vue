<template>
    <div>
        <nav class="w-full h-[100px]">
            <div class="container mx-auto flex flex-row items-center justify-between p-3">
                <div class="">
                    <img src="@/static/logo.png" class="w-[80px]" alt="">
                </div>
                <div class="hidden md:flex md:flex-row md:gap-10 md:text-[1.2rem]">
                    <div class="font-bold">Home</div>
                    <div>Tentang Kami</div>
                    <div>Event</div>
                    <div>Berita</div>
                </div>
                <div class="hidden md:block">
                    <button type="button" class="btn-primary">
                        Get Involved
                    </button>
                </div>
                <div class="md:hidden">
                    <button class="humburger-button" type="button" @click="drawer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#1DA599" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>  

                <transition
                    enter-class="opacity-0"
                    enter-active-class="ease-out transition-medium"
                    enter-to-class="opacity-100"
                    leave-class="opacity-100"
                    leave-active-class="ease-out transition-medium"
                    leave-to-class="opacity-0"
                >
                    <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
                        <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
                    </div>
                </transition>

                <aside class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
                    
                    <div class="close">
                        <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
                            <svg 
                            class="w-6 h-6"
                            fill="none" stroke-linecap="round" 
                            stroke-linejoin="round" stroke-width="2"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    <span @click="isOpen = false" class="flex w-full items-center p-4 border-b">
                        <img src="@/static/logo.png" class="w-[80px] m-auto" alt="" />
                    </span>

                    <ul class="divide-y font-sans">
                        <li>
                            <a href="#" @click="isOpen = false" class="my-4 inline-block">Home</a>
                        </li>
                        <li>
                            <a href="#" @click="isOpen = false" class="my-4 inline-block">Tentang Kami</a>
                        </li>
                        <li>
                            <a href="#" @click="isOpen = false" class="my-4 inline-block">Event</a>
                        </li>
                        <li>
                            <a href="#" @click="isOpen = false" class="my-4 inline-block">Berita</a>
                        </li>
                        <li>
                            <button type="button" class="btn-primary my-4 w-full">
                                Get Involved
                            </button>
                        </li>
                    </ul>
                </aside>


            </div>
        </nav>
        <div>
            <Nuxt />
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  }
};
</script>