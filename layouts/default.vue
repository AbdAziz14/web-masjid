<template>
    <div>
        <div class="w-full h-[100px]">
            <div class="m-0 flex flex-row items-center justify-around p-3">
                <div class="">
                    <img src="@/static/logo.png" class="w-[80px]" alt="">
                </div>
                <div class="flex flex-row gap-10 text-[1.2rem]">
                    <div class="font-bold">Home</div>
                    <div>Tentang Kami</div>
                    <div>Event</div>
                    <div>Berita</div>
                </div>
                <div class="">
                    <button type="button" class="btn-primary">
                        Get Involved
                    </button>
                </div>
            </div>
        </div>
        <div>
            <Nuxt />
        </div>
    </div>
</template>