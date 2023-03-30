function Calculate(){
    var wgt=parseInt(document.getElementById("wt").value);
    var hgt=(parseInt(document.getElementById("ht").value))/100;

    var bmi=wgt/(hgt*hgt);
    var bmi2=bmi.toFixed(2);
    document.querySelector(".op").innerHTML="Your BMI is "+bmi2;
}

