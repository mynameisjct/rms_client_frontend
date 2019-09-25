<template>
    <div>
        <div v-if="loading">
            <LoadMask message="Loading UI..."/>
        </div>
        <div v-else>
            TOYOTA Cagayan de Oro, Inc. - RMS Client-side
            <b-nav>
                <b-nav-item @click="selected = 1;d()" :class="{highlight:selected === 1}">
                    <router-link to="/" ref="link1">HOME</router-link>
                </b-nav-item>
                <b-nav-item @click="selected = 2;c()" :class="{highlight:selected === 2}">
                    <router-link to="/reports" ref="link2">REPORTS</router-link>
                </b-nav-item>
            </b-nav>
            <hr/>
            <b-container>
                <router-view />
            </b-container>
        </div>
    </div>
</template>
<script>

import LoadMask from './views/utils/LoadMask.vue'
import {mapState,mapActions} from 'vuex'

    export default {
        name: 'mainApp',
        components: {
            LoadMask
        },
        data(){
            return {
                selected: 1,
            }
        },
        methods: {
            d(){
                const elem = this.$refs.link1
                
                elem.$el.click()
            },
            c(){
                const elem = this.$refs.link2

                elem.$el.click()
            },
            ...mapActions([
                'getYear'
            ])
        },
        computed: {
            ...mapState([
                'loading'
            ])
        },
        mounted(){
            this.getYear()
        }
    }
</script>
<style>
.highlight {
    border-bottom: 2px solid gray;
}
</style>