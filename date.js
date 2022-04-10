
exports.getDate = ()=>{

    let today = new Date();

    //To format how to display the date we use .toLocaleDateString("language/country","option") it takes two
    //parameters... language determine where you are and option is an oject that conatains different variables
    //and their values to format

    //First create the option object
    let options = {
      day: "numeric",
      weekday: "long",
      month: "long"
    };
    return today.toLocaleDateString("en-US",options);
}

exports.getDay = ()=>{

    let today = new Date();

    //To format how to display the date we use .toLocaleDateString("language/country","option") it takes two
    //parameters... language determine where you are and option is an oject that conatains different variables
    //and their values to format

    //First create the option object
    let options = {
      weekday: "long",
    };
    return today.toLocaleDateString("en-US",options);
}
