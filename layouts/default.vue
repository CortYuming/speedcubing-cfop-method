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
          :to="item.to"
          router
          exact
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
            <v-list>
              <v-list-item
                v-for="(subItem, i) in item.subItems"
                :key="i"
                :to="subItem.to"
                router
                exact
              >
                <v-list-item-content>
                  <v-list-item-title v-text="subItem.title" />
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider class="mt-6"/>

      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <v-icon>mdi-vector-link</v-icon>
              Reference Links
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          :href="link.to"
          router
          exact
          target="_blank"
        >
          <v-list-item-icon>
            <v-icon>mdi-circle-medium</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="link.title" />
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>mdi-open-in-new</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>

      <v-divider class="mt-6"/>

      <v-list>
        <v-list-item
          href="https://github.com/CortYuming/speedcubing-cfop-method"
          router
          exact
          target="_blank"
        >
          <v-list-item-icon>
            <v-icon>mdi-github</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            CortYuming/speedcubing-cfop-method
          </v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-open-in-new</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="name" />
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
import { Component, Vue } from 'nuxt-property-decorator';
import { CONSTANTS } from '../constants'

@Component
export default class DefaultComponent extends Vue {
  name = 'Speedcubing CFOP Method'
    clipped =  false
    drawer = false
    fixed = false
    theme = false
    items = [
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
        subItems: [
          {
            title: 'Up',
            to: '?s=F2L White Sticker Faces Up',
          },
          {
            title: 'Side/Front:different',
            to: '?s=F2L White Sticker Faces Side/Front:different',
          },
          {
            title: 'Side/Front:same',
            to: '?s=F2L White Sticker Faces Side/Front:same',
          },
          {
            title: 'Edge in the slot',
            to: '?s=F2L Edge in the slot',
          },
          {
            title: 'Corner in the slot',
            to: '?s=F2L Corner in the slot',
          },
          {
            title: 'Both pieces are in the correct slot',
            to: '?s=F2L Both pieces are in the correct slot',
          },
          {
            title: 'Faces Up',
            to: '?s=F2L White Sticker Faces Up',
          },
          {
            title: 'Side/Front',
            to: '?s=F2L White Sticker Faces Side/Front',
          },
          {
            title: 'Corner In The Right Slot',
            to: '?s=F2L Corner In The Right Slot',
          },
          {
            title: 'Corner In The Left Slot',
            to: '?s=F2L Corner In The Left Slot',
          },
          {
            title: 'Corner In The Opposite Slot',
            to: '?s=F2L Corner In The Opposite Slot',
          },
          {
            title: 'Corner Is Solved',
            to: '?s=F2L Corner Is Solved',
          },
          {
            title: 'Pair In The Wrong Slot',
            to: '?s=F2L Pair In The Wrong Slot',
          },
          {
            title: 'Flipped Edge & Corner In Adjacent Slot',
            to: '?s=F2L Flipped Edge & Corner In Adjacent Slot',
          },
          {
            title: 'Other Easy Cases',
            to: '?s=F2L Other Easy Cases',
          },
        ],
      },
      {
        icon: CONSTANTS.CATEGORY_ICON_NAMES.CROSS,
        title: 'CROSS',
        to: '?s=CROSS',
      },
    ]
    links= [
      {
        title: 'AnimCubeJS',
        to: 'https://cubing.github.io/AnimCubeJS/animcubejs.html',
      },
      {
        title: 'J Perm - YouTube',
        to: 'https://www.youtube.com/channel/UCqTVfT9JQqhA6_Hi_h_h97Q',
      }
    ]
  miniVariant = false
}
</script>
