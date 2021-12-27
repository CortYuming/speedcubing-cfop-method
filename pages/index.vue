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
      <CubeComponent
        :category="cubing.category"
        :title="cubing.title"
        :move="cubing.move"
        :make-pattern="cubing.makePattern"
        :initmove="cubing.initmove"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import { CUBING_DATA } from '../cubingData'

interface Cubing {
  id: number
  category: string
  title: string
  move: string
  makePattern: string
  initmove: string
}
interface CubingData {
  keywords: string
  cubingData: Cubing[]
}

const getCubingData = (data: string[]): any =>  {
  return data.map((line:string, i:number): Cubing => {
    const values:any = line.split('\t').map((s:any) => (s.trim()))
    return {
      id: i,
      category: values[0],
      title: values[1],
      move: values[2],
      makePattern: values[3],
      initmove: values[4],
    }
  })
}

export default Vue.extend({
  name: 'TopPage',
  data():CubingData {
    return {
      keywords: this.$route.query && String(this.$route.query.s) || '',
      cubingData: getCubingData(CUBING_DATA)
    }
  },
  computed: {
    filterCubingData(): Cubing[] {
      const _checkKeyword = (cubing:Cubing, key:keyof Cubing, keyword:string):boolean => {
        return String(cubing[key]).toLowerCase().includes(keyword.toLowerCase().trim())
      }
      const cubingData:Cubing[] =  [] ;
      const keywords:string[] = this.$route.query.s ? String(this.$route.query.s).trim().split(' ') : [];

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
            cubingData.push(cubing)
          }
        })
      })

      return cubingData;
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
  },
})
</script>
