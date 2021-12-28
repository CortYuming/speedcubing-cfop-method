<template>
  <v-card height="100%">
    <v-card-text class="pb-sm-1">
      <div class="ext-subtitle-1">
        <v-btn
          outlined
          x-small
          :to="'?s='+category"
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
      <p class="grey--text text--darken-4 text-subtitle-1" v-html="replaceMoveHtml"/>
      <v-divider></v-divider>
      <p v-if="getMakePattern">
        make pattern <br/>
        <span class="text-subtitle-1">
          {{ getMakePattern }}
        </span>
      </p>
    </v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { CONSTANTS } from '../constants'

interface AnimCubeConf {
  colorscheme: string
  hint: number
  doublespeed: number
}

@Component
export default class CubeComponent extends Vue {
  @Prop({ type: String, default: "" }) readonly category!: string
  @Prop({ type: String, default: "" }) readonly title!: string
  @Prop({ type: String, default: "" }) readonly move!: string
  @Prop({ type: String, default: "" }) readonly makePattern!: string
  @Prop({ type: String, default: "" }) readonly initmove!: string
  @Prop({ type: Object, default: ():AnimCubeConf => ({
    // colorscheme: "wygbor", // U:w
    colorscheme: "ywgbro", // U:y
    hint: 5,
    doublespeed: 10,
  })}) readonly animCubeConf!: { [key: string]: string }

  get replaceMoveHtml():string {
    let move:string = String(this.move)

    move = move.replace('z', '__z')

    const fourMoveList:string[] = [
      "(R U R' U')",
      "(R U R')",
      "(L' U' L U)",
      "(L' U' L)",
    ]
    const fourMoveColor = 'red--text text--lighten-1'
    fourMoveList.forEach((word:string) => {
      move = move.replace(word, `<strong class="${fourMoveColor}">${word}</strong>`)
    })

    const triggerList:string[] = [
      "(U R U' R')",
      "U (R U' R')",
      "(U' L' U L)",
      "U' (L' U L)",
    ]
    const triggerColor = 'light-blue--text text--accent-3'
    triggerList.forEach((word:string) => {
      move = move.replace(word, `<strong class="${triggerColor}">${word}</strong>`)
    })

    return move
  }

  get getAnimCube3Data():string {
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
  }

  get getMakePattern():string {
    if (!this.makePattern && !this.initmove) {
      return this.reverseMove(this.move)
    }

    return this.makePattern
  }

  get getCtegoryIconName():string {
    return CONSTANTS.CATEGORY_ICON_NAMES[this.category]
  }

  reverseMove(move:string):string {
    return move.replace(/\(/g, '').replace(/\)/g, '').split(' ').map(s => {
      if (s.endsWith("'")) {
        return s.replace("'", '')
      }
      return s+"'"
    }).slice().reverse().join(' ')
  }
}
</script>
