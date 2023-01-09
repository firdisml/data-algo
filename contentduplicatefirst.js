function contentduplicatefirst(input){

    let map = {}

    for(let i=0; i < input.length; i++){
        if(map[input[i]] !== undefined){
            return input[i]
        }
        else{
            map[input[i]] = i
        }
    }
}

contentduplicatefirst([1,5,5,2,2,4,4,3,3])