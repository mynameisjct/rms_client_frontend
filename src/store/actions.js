import * as common from './api/queries/Common' 

export default {
    getYear({commit}){

        let years = []
        commit('isLoading')

        common.getYear()
        .then(res => res.json())
        .then((res) => {
            
            if(res.length > 0){
                res.forEach(element => {
                    years.push(element.year)
                });
                commit('getYear', years)
            }
           
        })
        .then(() => {
            console.log('request completed')
            commit('doneLoading')
        })
        .catch((ex) => {
            console.log('error encountered: ',ex)
        })
    },
}