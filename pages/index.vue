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
      :key="cubing.id"
      cols="12" sm="6" md="4" lg="3">
      <Cube
        :category="cubing.category"
        :title="cubing.title"
        :move="cubing.move"
        :make-pattern="cubing.makePattern"
      />
    </v-col>
  </v-row>
</template>

<script>
import {CUBING_LIST} from '~/cubingData'

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
          if (_checkKeyword(cubing, 'category', keyword) ||  _checkKeyword(cubing, 'title', keyword)) {
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
    getCubingData() {
      return CUBING_LIST.map((textList, i) => {
        const values = textList.split('\t').map(s => s.trim())
        return {
          id: i,
          category: values[0],
          title: values[1],
          move: values[2],
          makePattern: values[3],
        }
      })
    }
  },
}
</script>
