
export default {
    
    isLoading: state => {
        state.loading = true
        console.log('i was called', state.loading)
    },
    doneLoading: state => {
        state.loading = false
        console.log('i was called', state.loading)
    },

    getYear: (state,data) => {
        state.year = data.value
    },
}