import axios from 'axios'
import router from '@/router'

export default {
    state: {
        user: null,
        auth: {
            token: null
        },
        loading: false,
        error: null
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        clearError(state) {
            state.error = null
        }
    },
    actions: {
        setUser({commit}, payload) {
            commit('setUser', payload)
        },
        signUserIn({commit, getters}, payload) {
            const newUser = {
                name: payload.name
            }
            commit('setUser', newUser)
            localStorage.setItem('user', JSON.stringify(newUser))
            router.push('/')
            // commit('setLoading', true)
            // axios.post(`${process.env.VUE_APP_API_URL}/user/login`, payload)
            // .then((response) => {
            //     commit('setLoading', false)
            //     const newUser = response.data
            //     commit('setUser', newUser)
            //     localStorage.setItem('user', JSON.stringify(newUser))
            //     router.push('/')
            // })
            // .catch(error => {
            //     commit('setLoading', false)
            //     commit('setError', error)
            //     console.log(error)
            // })
        },
        signOut({commit}) {
            localStorage.clear()
            commit('setUser', null)
            commit('setError', null)
            router.push('/signin')
        },
        checkUserLocalStorage({commit, getters}) {
            const user = JSON.parse(localStorage.getItem('user'))
            if (user) {
                commit('setUser', user)
            }
        },
        clearError({commit}) {
            commit('clearError')
        }
    },
    getters: {
        user(state) {
            return state.user
        },
        token(state) {
            return state.auth.token
        },
        error(state) {
            return state.error
        },
        loading(state) {
            return state.loading
        }
    }
}
