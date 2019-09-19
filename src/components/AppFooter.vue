<template>
    <v-footer id="app-footer" v-if="$route.meta.showFooter" height="auto" color="primaryDarkGrey" class="white--text pl-2 pr-2" app>
        <v-layout justify-center row wrap>
            <v-flex text-center xs12 class="pa-2">
                <v-btn v-for="(link, index) in links" text dark class="font-weight-regular" @click="gotoPage(link.url)">{{ link.text }}</v-btn>
            </v-flex>
        </v-layout>
    </v-footer>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            links: [
                { text: 'About', url: '/about' },
                { text: 'Contact Us', url: '/contact' },
                { text: 'Support', url: '/support' },
                { text: 'Admin', url: '/admin' },
            ]
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>

</style>
