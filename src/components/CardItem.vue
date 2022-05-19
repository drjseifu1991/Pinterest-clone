<template>
    <div @mouseover="hover = true" @mouseleave="hover = false" class="relative">
        <img src="../assets/post 1.jpg" alt="no image" class="rounded-lg">
        <div v-if="hover" class="absolute bg-dark opacity-50 inset-0 w-full h-full rounded-lg"></div>
        <div v-if="hover" class="w-full flex flex-col justify-between">
            <div class="absolute top-0 w-full">
                <button type="button" name="button" class="absolute top-5 left-3 flex item-center">
                    <p class="font-semibold text-white">Manchester...</p>
                    <span class="material-icons text-white">expand_more</span>
                </button>
                <button class="absolute top-2 right-2 rounded-full py-2 px-4 text-white bg-primary font-semibold" type="button" name="button">
                    Save
                </button>
            </div>
            <div class="flex items-center w-full bottom-3 right-3 absolute">
                <button class="ml-auto mr-2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-dark opacity-75 hover:opacity-100" name="button" type="button">
                    <span class="material-icons text-base">ios_share</span>
                </button>
                <button class="bg-white rounded-full w-8 h-8 flex items-center justify-center text-dark opacity-75 hover:opacity-100" name="button" type="button">
                    <span class="material-icons text-base">more_horiz</span>
                </button>
            </div>
            <div class="absolute bottom-3 left-3 flex item-center">
                <button class="bg-white rounded-full  flex items-center justify-center text-dark opacity-80 hover:opacity-100 pl-1 pr-3 py-1" name="button" type="button">
                    <span class="material-icons text-dark">expand_more</span>
                    <p class="font-bold text-xs text-dark">behance.net</p>
                </button>
            </div>
        </div>
    </div>
    <div class="relative mb-10 leading-tight text-sm">
            <p class="absolute top-1 left-2 font-bold">Roll up banner</p><br/>
            <p class="absolute top-6 left-2">Dereje Seifu</p>
        </div>
</template>
<script>
    export default {
        props: ['src'],
        data() {
            return {
                hover: false
            }
        }
    }
</script>
<style scoped>

</style>