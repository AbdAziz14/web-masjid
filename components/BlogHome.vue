<template>
    <div class="bg-[#F5F9FC]">
        <div class="container mx-auto py-10 px-3 md:py-30">
            <div class="flex flex-col md:flex-row justify-between">
                <div>
                    <h2 class="font-semibold text-3xl md:text-4xl">Berita & Ilmu</h2>
                    <label class="text-sm text-gray-500" >“Menuntut ilmu itu hukumnya wajib, bagi muslim laki-laki dan muslim perempuan”</label>
                </div>
                <div class="button-other text-center md:text-left ">
                    Lihat Selebihnya
                </div>
            </div>
            <div class="mt-4">
                <carousel 
                    :nav="false" 
                    :dots="false" 
                    :loop="false" 
                    :center="false" 
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
                    <div class="item">
                        <div class="w-auto h-[250px] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1574246604907-db69e30ddb97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=673&q=80')]" >
                        </div>
                        <div class="">
                            <h1 class="text-ellipsis overflow-hidden h-[50px] font-normal">
                                Sejarah Pembangunan Ka’bah kiblat ummat muslim dunia
                            </h1>
                            <div class="truncate leading-3 text-gray-500 text-xs mt-2">
                                Sebagai tempat suci, Kabah memiliki sejarah panjang yang dimulai pada masa Nabi Ibrahim dan putranya, Nabi Ismail. Sejarah pembangunan Kabah kemudian berlanjut pada masa Nabi Muhammad SAW.
                            </div>
                            <button type="button" class="btn-blog">
                                Baca Selengkapnya
                            </button>
                        </div>
                    </div>
                    <div class="item">
                        <div class="w-auto h-[250px] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1525711857929-4272fb4a040f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')]" >
                        </div>
                        <div class="">
                            <h1 class="text-ellipsis overflow-hidden h-[52px] font-normal">
                                Kelirumologi Perang Rusia-Ukraina dari sudut pandang tafsir dan lain lain
                            </h1>
                            <div class="truncate leading-3 text-gray-500 text-xs mt-2">
                                Di samping pada hakikatnya perang an sich merupakan kekeliruan, menurut Jacques Schuster, minimal ada tiga kekeliruan tafsir terhadap konflik bersenjata antara Rusia dan Ukraina.
                            </div>
                            <button type="button" class="btn-blog">
                                Baca Selengkapnya
                            </button>
                        </div>
                    </div>
                    <div class="item">
                        <div class="w-auto h-[250px] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1623743360975-7ce773e975ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')]" >
                        </div>
                        <div class="">
                            <h1 class="text-ellipsis overflow-hidden h-[52px] font-normal">
                                Tinjauan Islam Kenapa Ibu Lebih Berhak Mengasuh Anak pada saat terjadi perceraian
                            </h1>
                            <div class="truncate h-full leading-3 text-gray-500 text-xs mt-2">
                                Mereka juga bisa melihat anak-anaknya membentuk keluarga baru, dan berharapmenimang cucu di sela waktunya.
                            </div>
                            <button type="button" class="btn-blog">
                                Baca Selengkapnya
                            </button>
                        </div>
                    </div>
                    
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
    components: { carousel },
}
</script>