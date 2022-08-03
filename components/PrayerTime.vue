<template>
    <div class="col-span-8">
        <h3 class="font-medium text-2xl">Ahad,  5 Agustus 2022 <span class="text-yellow-other text-xl block md:inline">( 9 Muharam 1444)</span></h3>
        <div class="card-primary">
            <div class="px-6 flex flex-row justify-between">
                <label class="text-green-primary font-semibold text-xl">Waktu Sholat</label>
                <label class="text-green-primary font-semibold text-xl mr-6">Jam</label>
            </div>
            <div v-for="n in 7" :key="n">
                <div class="card-primary flex flex-row items-center justify-between" :class="{ ['bg-green-other text-white'] : n === 4 }">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                        </svg>
                        <h4 class="ml-3 font-semibold text-[1.2em] md:text-[1.3em] capitalize">maghrib</h4>
                    </div>
                    <div>
                        <h4 class="font-semibold md:text-[1em]">{{ n+12 }}:24 (WITA) </h4>
                    </div>
                </div>
            </div>
            <div class="my-2 p-3 text-sm text-gray-500">
                *Hanya untuk kota samarinda dan sekitarnya
            </div>
        </div>
    </div>
</template>