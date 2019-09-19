import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#3f51b5',
                secondary: '#b0bec5',
                primaryDarkGrey: '#263238',
                primaryGreen: '#00B1A9',
                secondaryLightGrey: '#eceff1',
                secondaryLightBlue: '#94BDE5',
                accentPurple1: '#615E9A',
                accentPurple2: '#68468B',
                accentPurple3: '#402B53',
                accentGreen: '#3A5441',
                accentLime: '#D4D652',
                accentOrange: '#F2B02F',
                neutral: '#CDB686',
                highlight: '#D9272C',
                accent: '#8c9eff',
                error: '#b71c1c',
                pdf: '#b70f0a',
                excel: '#217346'
            },
            dark: {

            }
        },
    },
    icons: {
        iconfont: 'mdi',
    }
})
