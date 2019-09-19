<template>
    <section>
        <v-layout id="status-header" row class="text-center layout pl-4 app--page-header blue lighten-1">
            <v-flex xs12>
                <h3 class="pr-3 body-2 font-weight-bold white--text">{{ boardTitle | toUpperCase}}</h3>
            </v-flex>
        </v-layout>
        <v-divider></v-divider>
    </section>
</template>

<script>
export default {
    data() {
        return {
            title: 'EMERGENCY STATUS BOARD'
        }
    },
    methods: {

    },
    computed: {
        boardTitle() {
            if (this.$route.query.mode === 'exercise' && this.$route.name === 'Create Emergency') return `${this.title}: CREATE EXERCISE`
            else return `${this.title}: ${this.$route.name}`
        }
    },
    mounted() {

    }
}
</script>

<style scoped lang="scss">
#status-header {
    padding-top: 9.5px !important;
    padding-bottom: 9.5px !important;
}

</style>
