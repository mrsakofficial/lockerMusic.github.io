function auth(){
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;

    if(username=="mrsak" && password=="1234")
    {
      window.location.href=("Guitar/Guitar.html")
    }
    if(username=="pisoth" && password=="1234")
    {
      window.location.href=("Guitar/Guitar.html")
    }

    else
    {
        alert("Loocker Music")
    }
}
