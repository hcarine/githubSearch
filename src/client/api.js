export const getCompanyProject =(company, callback)=>{
    fetch(`https://api.github.com/orgs/${company}/repos`)
   .then(
        (response)=> response.json()
        )
            .then(data => callback(data), callback)
    }
