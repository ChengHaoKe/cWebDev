// drop down and button function
function display()
{
    var input0 = document.getElementById("drop0").value;
    if (input0.length == 0)
    {
        document.getElementById("out0").innerHTML = "Nothing entered";
    }
    else document.getElementById("out0").innerHTML = input0;
}
// text box and button function
function display1()
{
    var input0 = document.getElementById("tbox0").value;
    if (input0.length == 0)
    {
        document.getElementById("out1").innerHTML = "Nothing entered";
    }
    else document.getElementById("out1").innerHTML = input0;
}
function select0()
{
    var input0 = document.getElementById("drop0").value;
    document.getElementById("select").innerHTML = input0;
}
// Using regex to check if input is ok (5 letters exact)
function check0()
{
    var input0 = document.getElementById("tbox0").value;
    var regex0 = /^[A-Za-z]{5,15}$/;
    if(regex0.test(input0)) {
        document.getElementById("eval").innerHTML = 'input is ok!'; 
        document.getElementById("eval").style.color = "gray";
    }
    else {
        document.getElementById("eval").innerHTML = 
        'please input 5 - 15 letters! (Current length is ' + input0.length + ')';
        document.getElementById("eval").style.color = "Red";
    }
}
// loop function
function loopa(){
    if([1,2,3].includes(xxxxx)){

    }
}