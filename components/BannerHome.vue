<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-1 lg:gap-1">
        <div class="order-last md:order-first lg:order-first my-auto">
            <div class="bg-[#97DBAE] p-1 text-[10px] w-fit rounded-full flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="#0B8457" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="mx-2 font-light">Jl. Gatot Subroto GG.Serindit 1</span>
            </div>
            <h1 class="text-6xl font-bold">Masjid <br> Dato Muhammad <br> Al-Jufrie</h1>
            <div class="font-light text-[#808080] lg:w-[50%]">
                Masjid dari ummat untuk ummat yang berfungsi sebagai tempat ibadah yang menyediakan berbagai fasilitas dan melaksanakan berbagai kegiatan keagamaan
            </div>
            <div class="mt-2">
                <button class="btn-secondary font-semibold px-12" type="button">
                    Cek Masjid
                </button>
            </div>
        </div>
        <div class="order-first md:order-last lg:order-last">
            <div class="w-auto h-[80vh] bg-no-repeat bg-cover bg-top rounded-tr-[20px] rounded-bl-[20px]" :style="{'background-image': `url(${require('@/static/home/masjidreal.jpeg')})`}">
            </div>
            <!-- <img src="~/static/home/banner.png" class="image-banner" alt="Masjid"> -->
        </div>
    </div>
</template>