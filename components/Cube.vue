<template>
  <v-card height="100%">
    <v-card-text class="pb-sm-1">
      <div class="ext-subtitle-1">
        {{ category }}
      </div>
    </v-card-text>
    <v-card-title class="headline font-weight-black pt-sm-1">
      {{ title}}
    </v-card-title>
    <v-card-text class="pb-sm-1">
      <div class="mx-auto" style="width:220px; height:240px">
        <script>AnimCube3("move={{move}}&initrevmove=#&hint=5&colorscheme={{ colorscheme }}")</script>
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

<script>
export default {
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
    colorscheme: {
      type: String,
      // tdfblr
      // default: "wygbor", // top:w
      default: "ywgbro", // top:y
    },
  },
  computed: {
    replaceMove() {
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
      /* return this.move.replace("R U R' U'", "<strong class=\"red--text text--lighten-1\">R U R' U'</strong>") */
      return move
    }
  }
}
</script>
