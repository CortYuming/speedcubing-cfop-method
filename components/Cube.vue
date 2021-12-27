<template>
  <v-card height="100%">
    <v-card-text class="pb-sm-1">
      <div class="ext-subtitle-1">
        <v-chip outlined label>
          {{ category }}
        </v-chip>
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
      <p class="grey--text text--darken-4" v-html="replaceMove"/>
      <v-divider></v-divider>
      <p v-if="makePattern">
        make pattern <br/>
        <span>
          {{ makePattern }}
        </span>
      </p>
    </v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

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
    replaceMove():string {
      let move = this.move
      const replaceStrongList = [
        "(R U R' U')",
        "(R U R')",
        "(L' U' L U)",
        "(L' U' L)",
      ]

      replaceStrongList.forEach(word => {
        move = move.replace(word, `<strong class="red--text text--lighten-1">${word}</strong>`)
      })
      return move
    },
    getAnimCube3Data():string {
      const initrevmoveOrInitmove = this.initmove === "" ? 'initrevmove=#' : `initmove=${this.initmove}`
      return `move=${this.move}&${initrevmoveOrInitmove }&colorscheme=${this.animCubeConf.colorscheme}&hint=${this.animCubeConf.hint}&doublespeed=${this.animCubeConf.doublespeed}`
    },
  }
})
</script>
