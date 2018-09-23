<style scoped>
.name-text {
  width: 70%;
  float: left;
}
.string-text {
  float: right;
  text-align: right;
}
li {
  height: 30px;
  line-height: 30px;
}
li:hover {
  color: white;
  background: #9cd9ff;
  cursor: pointer;
}
</style>

<template>
    <div>
        <ul>
            <li class="clearfix" v-for="(item,index) in getQueryList" :key="index" @click="handleClick(item)">
                <div class="name-text">{{cityMaps[item].name}}</div>
                <div class="string-text">{{cityMaps[item].string}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      cityMaps: state => state.cityMaps
    }),
    ...mapGetters(["getQueryList"])
  },
  methods: {
    ...mapMutations(["changeInputValue"]),
    handleClick(item) {
      this.changeInputValue(this.cityMaps[item]);
    }
  },
  created(){
      console.log("createdQueryList")
  },
    mounted(){
        console.log("mountedQueryList")
    }
    ,
    beforeCreate(){
        console.log("beforeCreateQueryList")
    },
};
</script>