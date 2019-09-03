// text box functions
function jbox0()
{
    var input0 = document.getElementById("tbox0").value;
    var reg = /^[A-Za-z\s\'\-]{2,100}$/;
    if (reg.test(input0)){
        document.getElementById("span0").innerHTML = "Valid Input";
        document.getElementById("span0").style.color = "green";
    }
    else{
        document.getElementById("span0").innerHTML = "Please input 2 to 100 character first name!";
        document.getElementById("span0").style.color = "red";
    }
}

function jbox1()
{
    var input0 = document.getElementById("tbox1").value;
    var reg = /^[A-Za-z\s\'\-]{2,100}$/;
    if (reg.test(input0)){
        document.getElementById("span1").innerHTML = "Valid Input";
        document.getElementById("span1").style.color = "green";
    }
    else{
        document.getElementById("span1").innerHTML = "Please input 2 to 100 character last name!";
        document.getElementById("span1").style.color = "red";
    }
}

function jbox2()
{
    var input0 = document.getElementById("tbox2").value;
    var reg = /^[A-Za-z\s\'\-]{2,100}$/;
    if (reg.test(input0)){
        document.getElementById("span2").innerHTML = "Valid Input";
        document.getElementById("span2").style.color = "green";
    }
    else{
        document.getElementById("span2").innerHTML = "Please input 2 to 100 character Occupation!";
        document.getElementById("span2").style.color = "red";
    }
}

function jbox3()
{
    var input0 = document.getElementById("tbox3").value;
    var reg = /^[A-Za-z\s\'\-]{2,100}$/;
    if (reg.test(input0)){
        document.getElementById("span3").innerHTML = "Valid Input";
        document.getElementById("span3").style.color = "green";
    }
    else{
        document.getElementById("span3").innerHTML = "Please input 2 to 100 character Organization!";
        document.getElementById("span3").style.color = "red";
    }
}

function jbox4()
{
    var input0 = document.getElementById("tbox4").value;
    var reg = /^\d{4}-\d{3}-\d{3}$/;
    if (reg.test(input0)){
        document.getElementById("span4").innerHTML = "Valid Input";
        document.getElementById("span4").style.color = "green";
    }
    else{
        document.getElementById("span4").innerHTML = "Please input according to the pattern: xxxx-xxx-xxx";
        document.getElementById("span4").style.color = "red";
    }
}

// check box functions
function quan0()
{
    var input = document.getElementById("cbox0");
    if (input.checked == true){
        document.getElementById("cbt0").value = "1";
        document.getElementById("chspan0").style.color = "skyblue";
        document.getElementById("qu0").style.color = "skyblue";
    }
    else{
        document.getElementById("cbt0").value = "0";
        document.getElementById("chspan0").style.color = "white";
        document.getElementById("qu0").style.color = "white";
    }
}

function quan1()
{
    var input = document.getElementById("cbox1");
    if (input.checked == true){
        document.getElementById("cbt1").value = "1";
        document.getElementById("chspan1").style.color = "skyblue";
        document.getElementById("qu1").style.color = "skyblue";
    }
    else{
        document.getElementById("cbt1").value = "0";
        document.getElementById("chspan1").style.color = "white";
        document.getElementById("qu1").style.color = "white";
    }
}

function quan2()
{
    var input = document.getElementById("cbox2");
    if (input.checked == true){
        document.getElementById("cbt2").value = "1";
        document.getElementById("chspan2").style.color = "skyblue";
        document.getElementById("qu2").style.color = "skyblue";
    }
    else{
        document.getElementById("cbt2").value = "0";
        document.getElementById("chspan2").style.color = "white";
        document.getElementById("qu2").style.color = "white";
    }
}

// check checkbox if quantity changed
function inc0()
{
    var input0 = document.getElementById("cbt0").value;
    if (input0 > 0){
        document.getElementById("cbox0").checked = true;
        document.getElementById("chspan0").style.color = "skyblue";
        document.getElementById("qu0").style.color = "skyblue";
    }
    else{
        document.getElementById("cbox0").checked = false;
        document.getElementById("chspan0").style.color = "white";
        document.getElementById("qu0").style.color = "white";
    }
}

function inc1()
{
    var input0 = document.getElementById("cbt1").value;
    if (input0 > 0){
        document.getElementById("cbox1").checked = true;
        document.getElementById("chspan1").style.color = "skyblue";
        document.getElementById("qu1").style.color = "skyblue";
    }
    else{
        document.getElementById("cbox1").checked = false;
        document.getElementById("chspan1").style.color = "white";
        document.getElementById("qu1").style.color = "white";
    }
}

function inc2()
{
    var input0 = document.getElementById("cbt2").value;
    if (input0 > 0){
        document.getElementById("cbox2").checked = true;
        document.getElementById("chspan2").style.color = "skyblue";
        document.getElementById("qu2").style.color = "skyblue";
    }
    else{
        document.getElementById("cbox2").checked = false;
        document.getElementById("chspan2").style.color = "white";
        document.getElementById("qu2").style.color = "white";
    }
}

// Total order
function total()
{   
    var in0 = document.getElementById("cbt0").value;
    var in1 = document.getElementById("cbt1").value;
    var in2 = document.getElementById("cbt2").value;
    document.getElementById("order").value = in0 * 1000 + in1 * 800 + in2 * 900;
    var oall = document.getElementById("order").value;
    if (oall > 0){
        document.getElementById("order").style.color = "blue";
    }
    else{
        document.getElementById("order").style.color = "grey";
    }
}

// Method of payment
function mpay()
{
    var input0 = document.getElementById("drop0").value;
    document.getElementById("pay").innerHTML = "Selected " + input0
}

// Order Summary
function overall()
{   
    var fname = document.getElementById("tbox0").value;
    var lname = document.getElementById("tbox1").value;
    var occu = document.getElementById("tbox2").value;
    var org = document.getElementById("tbox3").value;
    var phone = document.getElementById("tbox4").value;
    var oall = document.getElementById("order").value;
    var paym = document.getElementById("drop0").value;

    var colo0 = document.getElementById("span0").style.color;
    var colo1 = document.getElementById("span1").style.color;
    var colo2 = document.getElementById("span2").style.color;
    var colo3 = document.getElementById("span3").style.color;
    var colo4 = document.getElementById("span4").style.color;

    var r0 = document.getElementById("cbt0").value;
    var r1 = document.getElementById("cbt1").value;
    var r2 = document.getElementById("cbt2").value;

    if ((colo0 == "red") || (colo1 == "red") || (colo2 == "red") || (colo3 == "red") || (colo4 == "red")){
        document.getElementById("sum0").innerHTML = 
            "Input error detected in on of the following fields: First name, Last name, Occupation, Organization \
            or Phone Number";
        document.getElementById("sum0").style.color = "red";
        document.getElementById("but0").style.display = "none";
        alert("Contact information error!");
    }
    else if ((fname.length == 0) || (lname.length == 0) || (occu.length == 0) || (org.length == 0) || 
        (phone.length == 0)){
        document.getElementById("sum0").innerHTML = "No contact information entered! Please provide contact information";
        document.getElementById("sum0").style.color = "red";
        document.getElementById("but0").style.display = "none";
        alert("Contact information not entered!");
    }
    else if (oall <= 0){
        document.getElementById("sum0").innerHTML = "No order made! Please select your order";
        document.getElementById("sum0").style.color = "grey";
        document.getElementById("but0").style.display = "none";
    }
    else{
        document.getElementById("sum0").style.color = "white";
        document.getElementById("sum0").innerHTML = "<h2>Request Summary:</h2><br>";
        document.getElementById("sum0").innerHTML += "<h4>Order Information:</h4>";
        document.getElementById("sum0").innerHTML += "<p>Statistics Services: " + r0 + "</p>";
        document.getElementById("sum0").innerHTML += "<p>Visualization Reports: " + r1 + "</p>";
        document.getElementById("sum0").innerHTML += "<p>ETL Services: " + r2 + "</p>";
        document.getElementById("sum0").innerHTML += "<p>Total: $" + oall + "</p><br>";
        document.getElementById("sum0").innerHTML += "<h4>Contact Information:</h4>";
        document.getElementById("sum0").innerHTML += "<p>Name: " + fname + " " + lname + "</p>";
        document.getElementById("sum0").innerHTML += "<p>Phone number: " + phone + "</p>";
        document.getElementById("sum0").innerHTML += "<p>Payment method: " + paym + "</p>";
        document.getElementById("but0").style.display = "block";
    }
}
