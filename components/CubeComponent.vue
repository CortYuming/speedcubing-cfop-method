<template>
  <v-card height="100%">
    <v-card-text class="pb-sm-1">
      <div class="ext-subtitle-1">
        <v-btn
          outlined
          x-small
          :href="'?s='+category"
        >
          <v-icon left small>{{ getCtegoryIconName }}</v-icon>
          {{ category }}
        </v-btn>
      </div>
    </v-card-text>
    <v-card-title class="headline font-weight-black pt-sm-1">
      {{ title}}
    </v-card-title>
    <v-card-text class="pb-sm-1">
      <div class="mx-auto" style="width:220px; height:240px">
        <script>AnimCube3("{{ getAnimCube3Data }}")</script>
      </div>
    </v-card-text>
    <v-card-subtitle>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p class="grey--text text--darken-4" v-html="replaceMoveHtml"/>
      <v-divider></v-divider>
      <p v-if="getMakePattern">
        make pattern <br/>
        <span>
          {{ getMakePattern }}
        </span>
      </p>
    </v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

import { CONSTANTS } from '../constants'

interface AnimCubeConf {
  colorscheme: string
  hint: number
  doublespeed: number
}

export default Vue.extend({
  props: {
    category: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    move: {
      type: String,
      default: "",
    },
    makePattern: {
      type: String,
      default: "",
    },
    initmove: {
      type: String,
      default: "",
    },
    animCubeConf: {
     type: Object,
     default: ():AnimCubeConf => ({
       // colorscheme: "wygbor", // U:w
       colorscheme: "ywgbro", // U:y
       hint: 5,
       doublespeed: 10,
     })
    },
  },
  computed: {
    replaceMoveHtml():string {
      let move:string = String(this.move)
      const replaceStrongList:string[] = [
        "(R U R' U')",
        "(R U R')",
        "(L' U' L U)",
        "(L' U' L)",
      ]

      move = move.replace('z', '__z')

      replaceStrongList.forEach((word:string) => {
        move = move.replace(word, `<strong class="red--text text--lighten-1">${word}</strong>`)
      })
      return move
    },
    getAnimCube3Data():string {
      let move:string = this.move
      let initmove:string = this.initmove
      const replaceStrs: { [key: string]: string } = {
        'z': '__y',
        'y': '__z',
        '__z': 'z',
        '__y': 'y',

      }

      if (move.includes('z') || move.includes('y')) {
        Object.keys(replaceStrs).forEach((k:string) => {
          move = move.replace(k, replaceStrs[k])
        })
      }

      if (!this.makePattern && !this.initmove) {
        initmove = this.reverseMove(move)
      } else if (initmove.includes('z') || initmove.includes('y')) {
        Object.keys(replaceStrs).forEach(k => {
          initmove = initmove.replace(k, replaceStrs[k])
        })
      }

      const initrevmoveOrInitmove = this.initmove === "" ? 'initrevmove=#' : `initmove=${initmove}`
      return `move=${move}&${initrevmoveOrInitmove }&colorscheme=${this.animCubeConf.colorscheme}&hint=${this.animCubeConf.hint}&doublespeed=${this.animCubeConf.doublespeed}`
    },
    getMakePattern():string {
      if (!this.makePattern && !this.initmove) {
        return this.reverseMove(this.move)
      }

      return this.makePattern
    },
    getCtegoryIconName():string {

      return CONSTANTS.CATEGORY_ICON_NAMES[this.category]
    }
  },
  methods: {
    reverseMove(move:string):string {
      return move.replace(/\(/g, '').replace(/\)/g, '').split(' ').map(s => {
        if (s.endsWith("'")) {
          return s.replace("'", '')
        }
        return s+"'"
      }).slice().reverse().join(' ')
    },
  },
})
</script>
