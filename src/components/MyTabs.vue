<template>
    <Tabs type="card" :animated="false" >
        <TabPane v-for="(letter,index) in allLettersArr" :key="index" :label="letter.toUpperCase()">
        <tab-content :letter="letter"/>
        </TabPane>
    </Tabs>
</template>
<script>
import TabContent from "./TabContent";
export default {
  data() {
    return {
      allLettersArr: ["abcde", "fghj", "klmnp", "qrstw", "xyz"]
    };
  },
  components: {
    TabContent
  }
};
</script>