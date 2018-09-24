<style>
    .clearfix:after {
        clear: both;
        content: "";
        height: 0;
    }

    ul {
        list-style: none;
    }
</style>

<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
    import {mapMutations} from "vuex";

    export default {
        data() {
            return {};
        },
        mounted() {
            console.log('mountedApp')
            window.removeEventListener('click', this.visibleListener)
            window.addEventListener('click', this.visibleListener)
        },
        created() {
            console.log('createdAp[p')
        },
        beforeDestroy() {
        },


        methods: {
            ...mapMutations(["visibleHandler"]),
            visibleListener(e) {
                let queryCity = document.getElementById("queryCity")
                if (queryCity) {
                    // console.log(queryCity.contains(e.target))
                    this.visibleHandler(queryCity.contains(e.target))
                }
            }
        }
    }
</script>