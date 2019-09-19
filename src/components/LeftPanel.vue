<template lang="html">
    <v-navigation-drawer v-if="userIsAuthenticated" fixed v-model="leftPanel" width="299" clipped app>
        <v-list class="pt-0 pb-0" dense>
            <v-list-item-group color="primary">
                <v-list-item v-for="list in menuLists" :key="list.text" :to="list.url">
                    <v-list-item-icon>
                        <v-icon v-text="list.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-regular body-2" v-text="list.text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { EventBus } from '@/main'

export default {
    data() {
        return {
            leftPanel: true,
            menuLists: [
                { icon: 'mdi-help-rhombus', text: 'About', url: '/about' },
                { icon: 'mdi-sitemap', text: 'Contact', url: '/contact' },
                { icon: 'mdi-account-multiple', text: 'Support', url: '/support' },
                { icon: 'mdi-calendar-text', text: 'Admin', url: '/admin' }
            ]
        }
    },
    methods: {
        toggleLeftPanel() {
            this.leftPanel = !this.leftPanel
        },
        hideLeftPanel() {
            this.leftPanel = false
        }
    },
    computed: {

    },
    created() {
        EventBus.$on('toggleLeftPanel', payload => {
            this.toggleLeftPanel()
        })
        EventBus.$on('hideLeftPanel', payload => {
            this.hideLeftPanel()
        })
    }
}
</script>

<style lang="scss" scoped>

</style>
