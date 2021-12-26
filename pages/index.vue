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
const cubingTextList = [
  "PLL	01Ub	M2' U' M U2' M' U' M2'	(M2' U' M U2' M' U' M2') *2",
  "PLL	02Ua	M2' U M U2 M' U M2'	(M2' U M U2 M' U M2') *2",
  "PLL	03H	M2' U' M2' U2' M2' U' M2'	M2' U' M2' U2' M2' U' M2'",
  "PLL	04Ab	x (L U' L) D2 (L' U L) D2 L2 x'	(x (L U' L) D2 (L' U L) D2 L2 x') *2",
  "PLL	05Aa	x L2' D2 (L' U' L) D2 (L' U L') x'	(x L2' D2 (L' U' L) D2 (L' U L') x') *2",
  "PLL	06T	(R U R' U') R' F R2 U' R' U' (R U R') F'	(R U R' U') R' F R2 U' R' U' (R U R') F'",
  "PLL	07Nb	(L' U R' U2 L U' R) (L' U R' U2 L U' R) U'	((L' U R' U2 L U' R) (L' U R' U2 L U' R) U') *2",
  "PLL	08Na	(R U' L U2' R' U L') (R U' L U2' R' U L') U	(R U' L U2' R' U L') (R U' L U2' R' U L') U",
  "PLL	09Z	(M2' U') (M2' U') M' (U2' M2' U2') M' U2'	(M2' U') (M2' U') M' (U2' M2' U2') M' U2'",
  "PLL	10E	x' (L' U L D') (L' U' L D) (L' U' L D') (L' U L D) x	x' (L' U L D') (L' U' L D) (L' U' L D') (L' U L D) x",
  "PLL	11V	(R' U R U') (R' f' U' R) U2' (R' U' R U') R' f R	(R' U R U') (R' f' U' R) U2' (R' U' R U') R' f R",
  "PLL	12F	R' U' F' (R U R' U') R' F R2 (U' R' U') (R U R') U R	R' U' F' (R U R' U') R' F R2 (U' R' U') (R U R') U R",
  "PLL	13Rb	R2 F R (U R U' R') F' R U2' R' U2' R U	R2 F R (U R U' R') F' R U2' R' U2' R U",
  "PLL	14Ra	(R U' R' U') (R U R D) (R' U' R D') (R' U2' R') U'	(R U' R' U') (R U R D) (R' U' R D') (R' U2' R') U'",
  "PLL	15Jb	(R U R') F' (R U R' U') R' F R2 U' R' U'	(R U R') F' (R U R' U') R' F R2 U' R' U'",
  "PLL	16Ja	(L' U' L) F (L' U' L U) L F' L2' U L U	(L' U' L) F (L' U' L U) L F' L2' U L U",
  "PLL	17Y	F (R U' R' U') (R U R') F' (R U R' U') (R' F R F')	F (R U' R' U') (R U R') F' (R U R' U') (R' F R F')",
  "PLL	18Gd	(R U R') (U' D) R2 U' R U' R' U R' U R2 D'	",
  "PLL	19Gc	R2 U' R U' R U R' U R2 (D' U) (R U' R') D	",
  "PLL	20Gb	(R' U' R) (U D') R2 U R' U R U' R U' R2 D	",
  "PLL	21Ga	R2 U R' U R' U' R U' R2 (D U') (R' U R) D'	",
];
export default {
  name: 'TopPage',
  data() {
    return {
      keywords: this.$route.query.s || '',
      cubingData: this.getCubingData()
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
    readCubingTextList(textList) {
      const values = textList.split('\t').map(s => s.trim())
      return {
        'type': values[0],
        title: values[1],
        move: values[2],
        makePattern: values[3],
      }
    },
    getCubingData() {
      return cubingTextList.map(textList => {
        return this.readCubingTextList(textList)
      })
    }
  },
}
</script>
