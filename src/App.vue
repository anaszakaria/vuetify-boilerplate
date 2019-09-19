<template>
    <v-app>
        <!-- APP HEADER -->
        <app-header></app-header>

        <!-- LEFT PANEL -->
        <left-panel></left-panel>

        <!-- CONTENT -->
        <v-content>
            <transition name="slide">
                <router-view></router-view>
            </transition>
        </v-content>

        <!-- APP FOOTER -->
        <app-footer></app-footer>
    </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import LeftPanel from '@/components/LeftPanel'
import AppFooter from '@/components/AppFooter'

export default {
    components: {
        'app-header': AppHeader,
        'left-panel': LeftPanel,
        'app-footer': AppFooter
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss">
@import "~scss/main";
</style>
