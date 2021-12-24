<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-text-field
        v-model="keywords"
        label="Search"
        hide-details="auto"
        clearable
      ></v-text-field>
    </v-col>
    <v-col
      v-for="cubing, i in filterCubingData"
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

<script lang="ts">
export default {
  name: 'IndexPage',
  data () {
    return {
      keywords: this.$route.query.s || '',
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
  },
  computed: {
    filterCubingData(): Array {
      const _checkKeyword = (cubing, key, keyword): bool => {
        return cubing[key].toLowerCase().includes(keyword.toLowerCase().trim())
      }
      const cubingList = [];
      const keywords = this.keywords ? this.keywords.trim().split(' ') : '';

      if (!keywords.length) {
        return this.cubingData;
      }

      this.cubingData.forEach(cubing => {
        const isHitList = []
        keywords.forEach(keyword => {
          if (_checkKeyword(cubing, 'type', keyword) ||  _checkKeyword(cubing, 'title', keyword)) {
            isHitList.push(true)
          }
          if (keywords.length === isHitList.length) {
            cubingList.push(cubing)
          }
        })
      })

      return cubingList;
    },
  },
}
</script>
