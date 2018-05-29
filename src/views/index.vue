<template>
  <div class="index">
    <Row type="flex" justify="center" align="middle">
      <Col span="8">
      <Input :value="inputValue" placeholder="城市名" style="width: 550px" @input="handleInput" clearable />
      <div style="width: 550px">
        <my-tabs v-show="tabsVisible" />
        <QueryList v-show="queryListVisible" />
      </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import { mapMutations, mapState, mapGetters } from "vuex";
import MyTabs from "../components/MyTabs";
import QueryList from "../components/QueryList";
export default {
  computed: {
    ...mapState({
      cityMaps: state => state.cityMaps,
      inputValue: state => state.inputValue
    }),
    ...mapGetters(["queryListVisible", "tabsVisible"])
  },
  methods: {
    ...mapMutations(["changeInputValue"]),
    handleInput(val) {
      this.changeInputValue({ name: val });
    }
  },
  components: {
    MyTabs,
    QueryList
  }
};
</script>