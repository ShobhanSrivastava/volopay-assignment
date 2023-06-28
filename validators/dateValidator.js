function validDatetime(datetime) {
    // Create date object
    const date = new Date(datetime);
    
    // Check if date is present is not a number
    if(isNaN(date.getDate())) {
        return false;
    }

    // Return true
    return true;
}

export default validDatetime;