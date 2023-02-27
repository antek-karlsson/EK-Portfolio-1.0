import eslintPlugin from 'vite-plugin-eslint';
import svgLoader from 'vite-svg-loader';
import UnpluginComponentsVite from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Ewelina Karlsson | Graphic / Web Designer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'I’m a UX/UI Designer passionate about improving the experience of others and looking for new solutions.',
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          // crossorigin: true,
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@400;500;600;700;800&display=swap',
        },
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
      ],
    },
  },
  components: [
    {
      path: '@/components/',
      pathPrefix: false,
    },
  ],
  modules: ['unplugin-icons/nuxt', '@vueuse/nuxt', 'nuxt-swiper', ['@pinia/nuxt', { autoImports: ['defineStore'] }]],
  css: ['@/assets/scss/common/index.scss'],
  vite: {
    plugins: [
      eslintPlugin({ failOnError: false }),
      svgLoader(),
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
    build: {
      target: 'esnext',
      commonjsOptions: {
        transformMixedEsModules: true,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "assets/scss/global/main.scss";',
        },
      },
    },
  },
  imports: {
    dirs: ['composables/**'],
  },
  typescript: {
    typeCheck: true,
    strict: false,
  },
});
