
  function ran_function()
  {
  var ran=Math.floor((Math.random() * 1000000) + 1);
  document.getElementById("ele1").innerHTML="Refreshing the page in 5 sec..";
  document.getElementById('ele').innerHTML=ran;

    var answ={
        answer : ran 
              };

                  convert_to_json=JSON.stringify(answ);
                    //  console.log(typeof convert_to_json);

        localStorage.setItem('answ',convert_to_json);
        setTimeout("location.href ='index2.html'", 3000);
}

 


  function guess()
{
  var a=document.getElementById("ans").value;
  var data=localStorage.getItem('answ');
  //console.log(JSON.parse(data));
  var parsed_data=JSON.parse(data);
  var count=0;

if(a!='')
{
    if(parsed_data.answer==a)

  {
    count++;
    document.getElementById("show").innerHTML = count + " number of correct guesses";
localStorage.setItem('n',count);

  }
  else
  {
    alert("Incorrect guess!");
document.location.reload(false);
  }
}

else
{
  alert("Enter the answer!");
}
}
  function replay()
  {
setTimeout("location.href ='index.html'", 100);
var h=localStorage.getItem('n');
//localStorage.clear();
  }

