<template>
    <div class="px-3 py-4 flex items-center justify-between w-full">
        <div class="flex items-center p-0">
            <button class="rounded-full hover:bg-light p-3 flex items-center justify-center" type="button">
                <img src="../assets/pinterest-logo.png" alt="Logo" class="h-9 w-9">
            </button>
            <button v-for="item in tabItems" :key="item.key" @click="selectedTab = item.key" :class="`${selectedTab === item.key ? 'bg-dark text-white' : 'text-dark hover:bg-light'}`" class="rounded-full px-4 py-3 font-semibold">
                {{ item.name }}
            </button>
        </div>
        <div class="flex-grow relative ml-2 mr-2">
            <span class="material-icons absolute mt-3 ml-3 text-muted">search</span>
            <input class="w-full hover:bg-lightHover rounded-full bg-light py-3 pr-3 pl-10" placeholder="Search" name="" value="" type="text">
        </div>
        <div class="flex items-center">
            <button class="relative rouded-full hover:bg-light flex items-center justify-center p-3">
                <span class="material-icons text-3xl text-muted">notifications</span>
                <div class="rounded-full h-5 w-5 bg-primary text-white flex items-center justify-center absolute ml-5 mb-5">4</div>
            </button>
            <button class="relative rouded-full hover:bg-light flex items-center justify-center p-3">
                <span class="material-icons text-3xl text-muted">textsms</span>
                <div class="rounded-full h-5 w-5 bg-primary text-white flex items-center justify-center absolute ml-5 mb-5">1</div>
            </button>
            <button class="rounded-full hover:bg-light p-3 flex items-center justify-center" type="button">
                <img  src="../assets/profile.jpg" alt="Logo" class="h-9 w-9 rounded-full">
            </button>

            <button class="hover:bg-light w-6 h-6 flex items-center justify-center rounded-full mr-2" type="button">
                <span class="material-icons text-muted">expand_more</span>
            </button>
        </div>
    </div>
</template>>

<script>
export default {
    data() {
        return {
            tabItems: [
                {name: 'Home', key: 'home'},
                {name: 'Today', key: 'today'}
            ],
            selectedTab: 'home'
        }
    }
}
</script>
<style scoped>

</style>