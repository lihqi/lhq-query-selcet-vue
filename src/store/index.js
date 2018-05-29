import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import { data } from "./city";
// 上网找的接口数据
let cities = [data.xml.c.d];

let cityMaps = {};
cities.forEach(city => {
  city.forEach(item => {
    cityMaps[item["-d1"]] = {
      id: item["-d1"],
      name: item["-d2"],
      string: item["-d3"]
    };
  });
});
const store = new Vuex.Store({
  state: {
    //输入框的值
    inputValue: "",
    // 所有城市的映射对象
    cityMaps
  },
  getters: {
    getCityNamesByLetter: state => letter => {
      const { cityMaps } = state;
      let cityNames = [];
      Object.keys(cityMaps).forEach(item => {
        if (
          cityMaps[item].name.indexOf(letter) > -1 ||
          cityMaps[item].string.indexOf(letter.toUpperCase()) > -1 ||
          cityMaps[item].string.indexOf(letter.toLowerCase()) > -1
        ) {
          //数据太大了 取前50个
          if (cityNames.length < 51) {
            cityNames.push(cityMaps[item].id);
          }
        }
      });
      return cityNames;
    },
    getQueryList: (state, getters) => {
      const { cityMaps, inputValue } = state;
      const { getCityNamesByLetter } = getters;
      return getCityNamesByLetter(inputValue);
    },
    // 显示 模糊查询  还是  字母分组
    queryListVisible: state => {
      return !!state.inputValue;
    },
    tabsVisible: state => {
      return !state.inputValue;
    }
  },
  mutations: {
    changeInputValue(state, payload) {
      const { name } = payload;
      state.inputValue = name;
    }
  }
});
export default store;
