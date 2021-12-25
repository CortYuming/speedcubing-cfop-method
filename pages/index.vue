<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-container>
        <v-form @submit.prevent>
          <v-row>
            <v-text-field
              v-model="keywords"
              placeholder="Search"
              hide-details="auto"
              clearable
              @keyup.enter="search"
              @click:clear="clearSearch"
            ></v-text-field>
            <v-spacer/>
          </v-row>
        </v-form>
      </v-container>
    </v-col>
    <v-col
      v-for="cubing in filterCubingData"
      :key="cubing.title"
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
  name: 'TopPage',
  data() {
    return {
      keywords: this.$route.query.s || '',
      cubingData: [
        {
          'type': 'PLL',
          title: '01Ub',
          move: "M2' U' M U2' M' U' M2'",
          makePattern: "(M2' U' M U2' M' U' M2') *2",
        },
        {
          'type': 'PLL',
          title: '02Ua',
          move: "M2' U M U2 M' U M2'",
          makePattern: "(M2' U M U2 M' U M2') *2",
        },
        {
          'type': 'PLL',
          title: '03H',
          move: "M2' U' M2' U2' M2' U' M2'",
          makePattern: "M2' U' M2' U2' M2' U' M2'",
        },
        {
          'type': 'PLL',
          title: '04Ab',
          move: "x (L U' L) D2 (L' U L) D2 L2 x'",
          makePattern: "(x (L U' L) D2 (L' U L) D2 L2 x') *2",
        },
        {
          'type': 'PLL',
          title: '05Aa',
          move: "x L2' D2 (L' U' L) D2 (L' U L') x'",
          makePattern: "(x L2' D2 (L' U' L) D2 (L' U L') x') *2",
        },
        {
          'type': 'PLL',
          title: '06T',
          move: "(R U R' U') R' F R2 U' R' U' (R U R') F'",
          makePattern: "(R U R' U') R' F R2 U' R' U' (R U R') F'",
        },
        {
          'type': 'PLL',
          title: '07Nb',
          move: "(L' U R' U2 L U' R) (L' U R' U2 L U' R) U'",
          makePattern: "((L' U R' U2 L U' R) (L' U R' U2 L U' R) U') *2",
        },
        {
          'type': 'PLL',
          title: '08Na',
          move: "(R U' L U2' R' U L') (R U' L U2' R' U L') U",
          makePattern: "(R U' L U2' R' U L') (R U' L U2' R' U L') U",
        },
        {
          'type': 'PLL',
          title: '09Z',
          move: "(M2' U') (M2' U') M' (U2' M2' U2') M' U2'",
          makePattern: "(M2' U') (M2' U') M' (U2' M2' U2') M' U2'",
        },
        {
          'type': 'PLL',
          title: '10E',
          move: "x' (L' U L D') (L' U' L D) (L' U' L D') (L' U L D) x",
          makePattern: "x' (L' U L D') (L' U' L D) (L' U' L D') (L' U L D) x",
        },
        {
          'type': 'PLL',
          title: '11V',
          move: "(R' U R U') (R' f' U' R) U2' (R' U' R U') R' f R",
          makePattern: "(R' U R U') (R' f' U' R) U2' (R' U' R U') R' f R",
        },
        {
          'type': 'PLL',
          title: '12F',
          move: "R' U' F' (R U R' U') R' F R2 (U' R' U') (R U R') U R",
          makePattern: "R' U' F' (R U R' U') R' F R2 (U' R' U') (R U R') U R",
        },
        {
          'type': 'PLL',
          title: '13Rb',
          move: "R2 F R (U R U' R') F' R U2' R' U2' R U",
          makePattern: "R2 F R (U R U' R') F' R U2' R' U2' R U",
        },
        {
          'type': 'PLL',
          title: '14Ra',
          move: "(R U' R' U') (R U R D) (R' U' R D') (R' U2' R') U'",
          makePattern: "(R U' R' U') (R U R D) (R' U' R D') (R' U2' R') U'",
        },
        {
          'type': 'PLL',
          title: '15Jb',
          move: "(R U R') F' (R U R' U') R' F R2 U' R' U'",
          makePattern: "(R U R') F' (R U R' U') R' F R2 U' R' U'",
        },
        {
          'type': 'PLL',
          title: '16Ja',
          move: "(L' U' L) F (L' U' L U) L F' L2' U L U",
          makePattern: "(L' U' L) F (L' U' L U) L F' L2' U L U",
        },
        {
          'type': 'PLL',
          title: '17Y',
          move: "F (R U' R' U') (R U R') F' (R U R' U') (R' F R F')",
          makePattern: "F (R U' R' U') (R U R') F' (R U R' U') (R' F R F')",
        },
        {
          'type': 'PLL',
          title: '18Gd',
          move: "(R U R') (U' D) R2 U' R U' R' U R' U R2 D'",
          makePattern: "",
        },
        {
          'type': 'PLL',
          title: '19Gc',
          move: "R2 U' R U' R U R' U R2 (D' U) (R U' R') D",
          makePattern: "",
        },
        {
          'type': 'PLL',
          title: '20Gb',
          move: "(R' U' R) (U D') R2 U R' U R U' R U' R2 D",
          makePattern: "",
        },
        {
          'type': 'PLL',
          title: '21Ga',
          move: "R2 U R' U R' U' R U' R2 (D U') (R' U R) D'",
          makePattern: "",
        },
      ]
    }
  },
  computed: {
    filterCubingData() {
      const _checkKeyword = (cubing, key, keyword) => {
        return cubing[key].toLowerCase().includes(keyword.toLowerCase().trim())
      }
      const cubingList =  [] ;
      const keywords = this.$route.query.s ? String(this.$route.query.s).trim().split(' ') : [];

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
  methods: {
    search() {
      if (!this.keywords || (this.keywords && !String(this.keywords).trim())) {
        this.$router.push({path: '/'})
        return
      }
      this.$router.push({path: "?s="+this.keywords})
    },
    clearSearch() {
      this.$router.push({path: '/'})
    },
  }
}
</script>
