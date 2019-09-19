<template>
    <v-container fluid fill-height>
        <v-layout justify-center align-center>
            <v-flex xs12 sm6 md4>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <form @submit.prevent="onSignin">
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field id="username" name="username" label="Username" v-model="username" type="" required></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field id="password" name="password" label="Password" v-model="password" type="password" required></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12 class="text-right">
                                        <v-btn depressed dark color="primaryGreen" class="body-2" type="submit" :loading="loading">Sign In</v-btn>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                        <v-alert v-if="error" :value="true" color="error" icon="mdi-alert" transition="scale-transition" outlined>{{ error.msg }}</v-alert>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            username: '',
            password: '',
            showAlert: false
        }
    },
    methods: {
        onSignin() {
            this.$store.dispatch('signUserIn', { username: this.username, password: this.password })
        },
        onDismissAlert() {
            this.$store.dispatch('clearError')
        }
    },
    computed: {
        user() {
            return this.$store.getters.user
        },
        loading() {
            return this.$store.getters.loading
        },
        error() {
            return this.$store.getters.error
        }
    },
    watch: {
        user(value) {
            if (value !== null && value !== undefined) {
                //this.$router.push('/')
            }
        }
    }
}
</script>
