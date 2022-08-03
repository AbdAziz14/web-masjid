<template>
    <div class="container mx-auto mb-8 p-3">
        <div class="flex flex-row justify-between items-center">
            <h2 class="font-semibold text-3xl md:text-4xl">Galeri Foto</h2>
            <div class="button-other">
                Lihat Selebihnya
            </div>
        </div>
        <!-- <div class= hidden">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div v-for="n in 3" :key="n" class="w-full h-[500px] bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1574246604907-db69e30ddb97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=673&q=80')">
                </div>
            </div>
        </div> -->
        <div class="mt-8">
            <carousel 
                :nav="false" 
                :dots="false" 
                :loop="true" 
                :center="true" 
                :margin="50" 
                :responsive="{
                    0:{
                        items:1,
                        margin:40
                    },
                    640:{
                        items:1,
                        margin:40
                    },
                    768:{
                        items:3,
                        margin:50
                    }
                }"
            >
                <img src="https://images.unsplash.com/photo-1574246604907-db69e30ddb97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=673&q=80" class="h-[500px]" style="object-fit: cover;">
                <img src="https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" class="h-[500px]" style="object-fit: cover;">
                <img src="https://images.unsplash.com/photo-1637518026117-9d1ac5e73f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" class="h-[500px]" style="object-fit: cover;">
                <img src="https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80" class="h-[500px]" style="object-fit: cover;">
                <img src="https://images.unsplash.com/photo-1649333195003-18c47d64ed18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" class="h-[500px]" style="object-fit: cover;">
                <img src="https://images.unsplash.com/photo-1569929919600-59123640bc02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" class="h-[500px]" style="object-fit: cover;">
                <img src="https://images.unsplash.com/photo-1573939705721-9fa2cdcda901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" class="h-[500px]" style="object-fit: cover;">
            </carousel>
        </div>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    components: { carousel },
}
</script>