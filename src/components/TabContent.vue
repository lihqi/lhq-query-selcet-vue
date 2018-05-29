<style scoped>
.letter-container {
  float: left;
  width: 50px;
  height: 26px;
  line-height: 26px;
  padding-left: 20px;
  color: red;
}
.tag-container {
  float: left;
  width: 500px;
}
</style>

<template>
    <div>
        <ul>
            <li class="clearfix" v-for="(letter,index) in letterArr" :key="index">
                <div class="letter-container"> {{letter.toUpperCase()}} </div>
                <div class="tag-container">
                    <div v-for="(item,index) in spliceCityNames(letter)" :key="index" class="ivu-tag ivu-tag-default ivu-tag-checked" @click="handleClickTag(item)">{{cityMaps[item].name}}</div>
                </div>
            </li>
        </ul>
    </div>

</template>
<script>
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
  props: ["letter"],
  data() {
    return {
      letterArr: []
    };
  },
  computed: {
    ...mapState({
      cityMaps: state => state.cityMaps
    }),
    ...mapGetters(["getCityNamesByLetter"])
  },
  methods: {
    ...mapMutations(["changeInputValue"]),
    spliceCityNames(letter) {
      let arr = this.getCityNamesByLetter(letter);
      if (arr.length > 10) {
        arr.length = 10;
      }
      return arr;
    },
    handleClickTag(item) {
      this.changeInputValue(this.cityMaps[item]);
    }
  },
  mounted() {
    this.letterArr = this.letter.split("");
  }
};
</script>