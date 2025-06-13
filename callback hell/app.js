function addition(val, callback) {
    callback(val + 10, false)
}
function subtraction(val, callback) {
    callback(val - 10, false)
}
function multiplication(val, callback) {
    callback(val * 10, false)
}
function division(val, callback) {
    callback(val / 10, false)
}
function modules(val, callback) {
    callback(val % 10, false)
}
addition(10, (addres, error) => {
    if (!error) {
        console.log("Addition result is :", addres);
        subtraction(addres, (subres, error) => {
            if (!error) {
                console.log("subtraction result is :", subres);
                multiplication(subres,(mulres,error)=>{
                    if(!error){
                        console.log("multiplication ressult is :",mulres );
                        division(mulres,(divres,error)=>{
                            if(!error){
                                console.log(" division result is :",divres);
                                modules(divres,(modres,error)=>{
                                    if(!error)
                                    {
                                        console.log("modules result is :",modres);
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }

})