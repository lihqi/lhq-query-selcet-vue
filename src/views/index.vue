<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="8" id="queryCity">
                <Input :value="inputValue" placeholder="城市名" style="width: 550px" @input="handleInput" clearable/>
                <div style="width: 550px" v-show="visible">
                    <my-tabs v-show="tabsVisible"/>
                    <QueryList v-show="queryListVisible"/>
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    import {mapMutations, mapState, mapGetters} from "vuex";
    import MyTabs from "../components/MyTabs";
    import QueryList from "../components/QueryList";

    export default {
        computed: {
            ...mapState({
                cityMaps: state => state.cityMaps,
                inputValue: state => state.inputValue,
                visible: state => state.visible
            }),
            ...mapGetters(["queryListVisible", "tabsVisible"])
        },
        methods: {
            ...mapMutations(["changeInputValue"]),
            handleInput(val) {
                this.changeInputValue({name: val});
            }
        },
        mounted() {
            console.log('mounted')

        },
        created() {
            console.log('created')
        },
        components: {
            MyTabs,
            QueryList
        }
    };
</script>