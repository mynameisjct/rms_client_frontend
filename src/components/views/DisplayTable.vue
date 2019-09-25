<template>
    <div>
        <!-- just add selectable on space provided below -->
        <b-table 
            class="customtable"
            striped hover dark
            sticky-header="true"
            outlined
            ref="selectableTable"
            
            :items="items" 
            :fields="fields" 
            select-mode="single"
            selected-variant="active"
            @row-selected="onRowSelected"
            responsive='sm'
            :busy="isBusy"
        >
            <template v-slot:table-busy>
                <div class="text-center text-danger my-2">
                    <b-spinner class="align-middle"></b-spinner>
                </div>
            </template>

            <!-- UNCOMMENT BELOW IF DECIDED TO ADD SELECT FEATURE -->

             <!-- <template v-slot:cell(selected)="{rowSelected}">
                <template v-if="rowSelected">
                    <span aria-hidden="true"> &check;</span>
                    <span class="sr-only">Selected</span>
                </template>
                <template v-else>
                    <span aria-hidden="true"> &nbsp;</span>
                    <span class="sr-only">Not Selected</span>
                </template>
            </template> -->

        <!-- FOR THE MEAN TIME, USE PENDING ONLY -->
            <template v-slot:cell(pending_incidents)="data">
                <router-link :to="`/profile/${data.value}`">{{data.value}}</router-link>
            </template>
            <template v-slot:table-caption>
                {{footerMessage}}
            </template>
        </b-table>
    </div>
</template>
<script>
export default {
    name: 'displaytable',
    props: [
        'fieldsS',
        'itemsS'
    ],
    data(){
        return {
            items: [
                {'dealer_branch': 'TCO','RTR_entries': 1300,'hardware_incidents': 1000,'software_incidents': 299,'other_incidents':0,'pending_incidents': 1,'latest_RTR_entry': 1300},
                {'dealer_branch': 'TBT','RTR_entries': 1300,'hardware_incidents': 1000,'software_incidents': 299,'other_incidents':0,'pending_incidents': 1,'latest_RTR_entry': 1300},
                {'dealer_branch': 'TZC','RTR_entries': 1300,'hardware_incidents': 1000,'software_incidents': 299,'other_incidents':0,'pending_incidents': 1,'latest_RTR_entry': 1300},
                {'dealer_branch': 'TCO','RTR_entries': 1300,'hardware_incidents': 1000,'software_incidents': 299,'other_incidents':0,'pending_incidents': 1,'latest_RTR_entry': 1300},
   ],
            fields: [
                // 'selected',
                'dealer_branch',
                'RTR_entries',
                'hardware_incidents',
                'software_incidents',
                'other_incidents',
                'pending_incidents',
                'latest_RTR_entry'
            ],
            selected: [],
            isBusy: false,
            footerMessage: 'Total Records: 1000'
        }
    },
    methods: {
        onRowSelected(value){
            this.selected = value
            console.log(this.selected)
        },
        clearSelected(){
            this.$refs.selectableTable.clearSelected()
        }
    }
}
</script>
<style scoped>
    .customtable {
        max-height: 400px;
        overflow-y: auto;
    }
</style>