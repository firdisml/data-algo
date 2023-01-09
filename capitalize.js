function capitalize(string){
    if(string.length < 4)
    {
        return console.log("String please enter longer string (More than 4 character)")
    }

    console.log(string.charAt(0).toUpperCase() + string.substring(1,3) + string.charAt(3).toUpperCase() + string.substring(4))
    console.log(2 < 2)
}

capitalize("kualalumpur")