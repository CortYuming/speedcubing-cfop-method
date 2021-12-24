<template>
  <v-row justify="center" align="center">
    <v-col
      v-for="cubing, i in cubingData"
      :key="i"
      cols="12" sm="6" md="4" lg="3">
      <Cube
        :type="cubing.type"
        :title="cubing.title"
        :move="cubing.move"
        :make-pattern="cubing.makePattern"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      cubingData: [
        {
          'type': 'PLL',
          title: '01 Ub',
          move: "M2' U' M U2' M' U' M2'",
          makePattern: "(M2' U' M U2' M' U' M2') *2",
        },
        {
          'type': 'PLL',
          title: '02 Ua',
          move: "M2' U' M2' U' M' U2' M2' U2' M' U2",
          makePattern: "(M2' U' M2' U' M' U2' M2' U2' M' U2') *2",
        },
        {
          'type': 'PLL',
          title: '03 H',
          move: "M2' U' M2' U2' M2' U' M2'",
          makePattern: "M2' U' M2' U2' M2' U' M2'",
        },
        {
          'type': 'PLL',
          title: '04 Ab',
          move: "x (L U' L) D2 (L' U L) D2 L2 x'",
          makePattern: "(x (L U' L) D2 (L' U L) D2 L2 x') *2",
        },
      ]
    }
  }
}
</script>
