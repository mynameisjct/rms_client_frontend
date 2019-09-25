<template>
    <div>
        <div class="searchBar">
            <b-input-group prepend="Search" class="w-100">
                <b-input v-model.lazy="toSearch" placeholder="find record.."/>
            </b-input-group>
            &nbsp;&nbsp;
            <b-form-select class="w-25" :options="toLimit" :value=3 v-model="limit">
            </b-form-select>
        </div><br/>
        <DisplayTable />
    </div>
</template>
<script>
import DisplayTable from './DisplayTable.vue'
export default {
    name: 'searchbar',
    components: {
        DisplayTable
    },
    data(){
        return {
            toSearch: '',
            toLimit: {5: 'Show only 5',10: 'Show only 10', 50: 'Show only 50', 100: 'Show only 100'},
            showResults: false,
            results: [],
            limit: 10,
        }
    },
}
</script>
<style scoped>
    .searchBar {
        display: flex
    }
</style>