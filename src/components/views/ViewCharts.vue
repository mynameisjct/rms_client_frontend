<template>
    <div>
        <div id="comboheader">
            Year &nbsp;
            <b-form-select class="w-25" :options="years" :value=2019 v-model="selectedYear" > <!-- @onchange -->
            </b-form-select>
            Branch &nbsp;
            <b-form-select class="w-25" :options="branches" :value="TCO" v-model="selectedBranch">
            </b-form-select>      
        </div>
        <hr/>
        <div id="chartcontents">
            <Charts :chartData="rtrEntries"/>
            <Charts :chartData="hardwareIncidents"/>
            <Charts :chartData="softwareIncidents"/>
            <Charts :chartData="otherIncidents"/>
            <!-- <b-card>
                <Charts :chartData="rtrEntries"/>
            </b-card>
            <b-card>
                <Charts :chartData="hardwareIncidents"/>
            </b-card>
            <b-card>
                <Charts :chartData="softwareIncidents"/>
            </b-card> -->
        </div>
    </div>
</template>
<script>

import Charts from './utils/Charts.vue'
import {mapState} from 'vuex'

export default {
    name: 'chartscontent',
    components: {
        Charts
    },
    data(){
        return {
            totalRtr: 0,
            latestRtr: 1379,
            rtrEntries: {
                jan: 0,
                feb: 0,
                mar: 0,
                apr: 0,
                may: 0,
                jun: 0,
                jul: 0,
                aug: 0,
                sep: 0,
                oct: 0,
                nov: 0,
                dec: 0,
                title: "RTR Entries",
                label: "Incidents"
            },
            hardwareIncidents: {
                jan: 0,
                feb: 0,
                mar: 0,
                apr: 0,
                may: 0,
                jun: 0,
                jul: 0,
                aug: 0,
                sep: 0,
                oct: 0,
                nov: 0,
                dec: 0,
                title: "Hardware Incidents",
                label: "Incidents"
            },
            softwareIncidents: {
                jan: 0,
                feb: 0,
                mar: 0,
                apr: 0,
                may: 0,
                jun: 0,
                jul: 0,
                aug: 0,
                sep: 0,
                oct: 0,
                nov: 0,
                dec: 0,
                title: "Software Incidents",
                label: "Incidents"
            },
            otherIncidents: {
                jan: 0,
                feb: 0,
                mar: 0,
                apr: 0,
                may: 0,
                jun: 0,
                jul: 0,
                aug: 0,
                sep: 0,
                oct: 0,
                nov: 0,
                dec: 0,
                title: "Other Incidents",
                label: "Incidents"
            },
            years: [2014,2015,2016,2017,2018,2019,2020,2021],
            // years: this.year,
            branches: {"TCO":"TCO","TBT":"TBT","TZC":"TZC","TIC":"TIC","TVC":"TVC","OAC":"DAC"},
            selectedBranch: "TCO",
            selectedYear: 2019,
        }
    },
    computed: {
        ...mapState([
            'year'
        ])
    }
}
</script>
<style scoped>
    #chartcontents{
        padding: 10px;
        display: flex;
        flex-flow: row;
        justify-content: space-evenly;
        width: 1000px;
        flex-wrap: wrap;
    }

    #comboheader {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
</style>