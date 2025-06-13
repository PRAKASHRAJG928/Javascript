let otp_container = document.getElementsByClassName ("otp_container")
console.log(otp_container);


function generateOTP() {
    let otp = Math.floor(Math.random() * (9999 - 1000) + 1000)
    alert(`otp created successfully ! ${otp}`)

    let final_otp = otp.toString().split('')
    console.log(final_otp);

    setTimeout(()=>{
        otp_container[0].innerHTML = final_otp[0]
    },500)  

    setTimeout(()=>{
        otp_container[1].innerHTML = final_otp[1]
    },1000)
    setTimeout(()=>{
        otp_container[2].innerHTML = final_otp[2]
    },1500)
    setTimeout(()=>{
        otp_container[3].innerHTML = final_otp[3]
    },2000)

}
