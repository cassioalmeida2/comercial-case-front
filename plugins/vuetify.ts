// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#1971C2',
          secondary: '#E5E5E5'
        }
      },
    },
  },
  })
  app.vueApp.use(vuetify)
})