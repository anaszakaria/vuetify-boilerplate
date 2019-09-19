export default {
    data() {
        return {

        }
    },
    methods: {
        gotoPage(url) {
            this.$router.push({ path: url })
        },
        getImgURL(img) {
            return require('img/' + img)
        },
        stringToList(val) {
            if (val == null) return ''
            else return val.split('\n')
        },
    },
    computed: {
        userIsAuthenticated() {
            return this.$store.getters.user !== null && this.$store.getters.user !== undefined
        }
    },
}
