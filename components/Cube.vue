<template>
  <v-card height="100%">
    <v-card-text class="pb-sm-1">
      <div class="ext-subtitle-1">
        {{ type }}
      </div>
    </v-card-text>
    <v-card-title class="headline font-weight-black pt-sm-1">
      {{ title}}
    </v-card-title>
    <v-card-text class="pb-sm-1">
      <div class="mx-auto" style="width:220px; height:240px">
        <script>AnimCube3("move={{move}}&initrevmove=#&hint=5&colorscheme=wygbor")</script>
      </div>
    </v-card-text>
    <v-card-subtitle>
      <p class="grey--text text--darken-4">
        {{ move }}
      </p>
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
    "type": {
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
  },
}
</script>
