<template>
    <div @mouseover="hover = true" @mouseleave="hover = false" class="relative">
        <img v-bind:src="src" alt="no image" class="rounded-lg">
        <div v-if="hover" class="absolute bg-dark opacity-50 inset-8 w-full rounded-lg"></div>
        <div v-if="hover" class="absolute top-0 w-full flex flex-col justify-between p-3">
            <div class="flex items-center justify-between">
                <button type="button" name="button" class="flex item-center">
                    <p class="font-semibold text-white">UI</p>
                    <span class="material-icons text-white">expand_more</span>
                </button>
                <button class="rounded-full py-3 px-5 text-white bg-primary font-semibold" type="button" name="button">
                    Save
                </button>
            </div>
            <div class="flex items-center w-full">
                <button class="ml-auto mr-2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-dark opacity-75 hover:opacity-100" name="button" type="button">
                    <span class="material-icons text-base">ios_share</span>
                </button>
                <button class="bg-white rounded-full w-8 h-8 flex items-center justify-center text-dark opacity-75 hover:opacity-100" name="button" type="button">
                    <span class="material-icons text-base">more_horiz</span>
                </button>
            </div>
        </div>
        <div>

        </div>
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