<template>
    <div class="container mx-auto mt-10 p-3 md:mt-20">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div>
                <h2 class="text-3xl md:text-4xl font-semibold">Waktu Sholat Harian <br> Masjid</h2>
            </div>
            <div class="text-sm md:text-base text-[#7B7F87]">
                Salat adalah saat pertemuan dengan Allah dan kenaikan (Mi'raj) dari mukmin terjadi. Kita semua tahu pentingnya tindakan wajib ini, dan dengan demikian, kita melakukannya tidak ingin mendalami bidang itu.
            </div>
        </div>
        <div class="grid grid-cols-1 my-8 gap-10 md:grid-cols-12">
            <PrayerTime />
            <OtherInformation />
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>