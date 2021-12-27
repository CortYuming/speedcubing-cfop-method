<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :href="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
  import { CONSTANTS } from '../constants'

export default {
  name: 'DefaultLayout',
  data() {
    return {
      title: 'Speedcubing CFOP Method',
      clipped: false,
      drawer: false,
      fixed: false,
      theme: false,
      items: [
        {
          icon: CONSTANTS.CATEGORY_ICON_NAMES.ALL,
          title: 'All',
          to: '/',
        },
        {
          icon: CONSTANTS.CATEGORY_ICON_NAMES.PLL,
          title: 'PLL',
          to: '?s=PLL',
        },
        {
          icon: CONSTANTS.CATEGORY_ICON_NAMES.OLL,
          title: 'OLL',
          to: '?s=OLL',
        },
        {
          icon: CONSTANTS.CATEGORY_ICON_NAMES.F2L,
          title: 'F2L',
          to: '?s=F2L',
        },
        {
          icon: CONSTANTS.CATEGORY_ICON_NAMES.CROSS,
          title: 'CROSS',
          to: '?s=CROSS',
        },
      ],
      miniVariant: false,
    }
  },
}
</script>
