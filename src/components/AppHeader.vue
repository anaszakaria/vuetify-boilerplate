<template lang="html">
    <v-app-bar app dense id="app-header" flat color="primaryDarkGrey" dark fixed clipped-right clipped-left clipped>
        <v-app-bar-nav-icon v-if="userIsAuthenticated" @click.stop="toggleLeftPanel"></v-app-bar-nav-icon>
        <v-toolbar-title class="display-1 pointer hidden-xs-only pointer" @click="gotoPage('/')">APP</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tooltip v-for="list in menuLists" bottom>
            <template v-slot:activator="{ on }">
                <v-btn icon v-if="userIsAuthenticated" v-on="on" @click="gotoPage(list.url)">
                    <v-icon>{{ list.icon }}</v-icon>
                </v-btn>
            </template>
            <span>{{ list.tooltipText }}</span>
        </v-tooltip>
        <v-menu v-if="userIsAuthenticated" :close-on-content-click="false" offset-y nudge-bottom="24">
            <template #activator="{ on: menu }">
                <v-tooltip bottom>
                    <template #activator="{ on: tooltip }">
                        <v-btn icon v-on="{ ...tooltip, ...menu }">
                            <v-icon>mdi-account</v-icon>
                        </v-btn>
                    </template>
                    <span>Sign Out</span>
                </v-tooltip>
            </template>
            <v-card>
                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>{{ user }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn depressed small @click="signOut">Sign Out</v-btn>
                </v-card-actions>
            </v-card>
        </v-menu>
    </v-app-bar>
</template>

<script>
import { EventBus } from '@/main'

export default {
    data() {
        return {
            menuLists: [
                { tooltipText: 'Main', icon: 'mdi-home', url: '/'}
            ]
        }
    },
    methods: {
        useEventBus() {
            EventBus.$emit('callEvent', 'payload')
        },
        signOut() {
            EventBus.$emit('hideLeftPanel')
            EventBus.$emit('hideRightPanel')
            this.$store.dispatch('signOut')
        },
        toggleLeftPanel() {
            EventBus.$emit('toggleLeftPanel')
        }
    },
    computed: {
        user() {
            return this.$store.getters.user
        }
    }
}
</script>

<style lang="scss" scoped>
.pointer {
    cursor: pointer !important;
}

.v-toolbar__extension {
    background: #eceff1 !important;
}

#app-header {
    border-bottom: 2px solid #00B1A9 !important;
    overflow: hidden !important;
}

#app-header-left {
    width: 299px;
    z-index: auto !important;
}

#pet-logo {
    margin-left: 16px;
}

@media only screen and (max-width: 660px) {
    #app-header-left {
        width: 140px !important;
    }
}
</style>
