const cbse=document.getElementById('cbse');
const icse=document.getElementById('icse');
const maharashtra=document.getElementById('maharashtra');
const gujurat=document.getElementById('gujurat');
const compi=document.getElementById('compi');


 function showcbse(){

    document.getElementById('div1').style.display="flex";
 document.getElementById('div2').style.display="none";
 document.getElementById('div3').style.display="none";
 document.getElementById('div4').style.display="none";
 document.getElementById('div5').style.display="none";
 cbse.style.backgroundColor="#1e80c4";
 
 icse.style.backgroundColor="#ffff";
 gujurat.style.backgroundColor="#ffff";
 maharashtra.style.backgroundColor="#ffff";
 compi.style.backgroundColor="#ffff";
 cbse.style.color="#ffff";
 icse.style.color="black";
 maharashtra.style.color="black";
 gujurat.style.color="black";
 compi.style.color="black";
}
function showicse(){
    document.getElementById('div2').style.display="flex";
    document.getElementById('div1').style.display="none";
    document.getElementById('div3').style.display="none";
    document.getElementById('div4').style.display="none";
    document.getElementById('div5').style.display="none";

    cbse.style.backgroundColor="#ffff";
 icse.style.backgroundColor="#1e80c4";
 icse.style.color="#ffff";
 gujurat.style.backgroundColor="#ffff";
 maharashtra.style.backgroundColor="#ffff";
 compi.style.backgroundColor="#ffff";
 cbse.style.color="black";
 maharashtra.style.color="black";
 gujurat.style.color="black";
 compi.style.color="black";
}
   function showmaharashtra(){
  
    document.getElementById('div3').style.display="flex";
    document.getElementById('div2').style.display="none";
    document.getElementById('div1').style.display="none";
    document.getElementById('div4').style.display="none";
    document.getElementById('div5').style.display="none";

    cbse.style.backgroundColor="#ffff";
    icse.style.backgroundColor="#ffff";
    gujurat.style.backgroundColor="#ffff";
    compi.style.backgroundColor="#ffff";
    maharashtra.style.backgroundColor="#1e80c4";
    maharashtra.style.color="#ffff";
    cbse.style.color="black";
    icse.style.color="black";
    gujurat.style.color="black";
    compi.style.color="black";
}
   function showgujurat(){
    
    document.getElementById('div4').style.display="flex";
    document.getElementById('div2').style.display="none";
    document.getElementById('div3').style.display="none";
    document.getElementById('div1').style.display="none";
    document.getElementById('div5').style.display="none";
    cbse.style.backgroundColor="#ffff";
    icse.style.backgroundColor="#ffff";
    gujurat.style.backgroundColor="#1e80c4";
    gujurat.style.color="#ffff";
    maharashtra.style.backgroundColor="#ffff";
    compi.style.backgroundColor="#ffff";
    cbse.style.color="black";
 icse.style.color="black";
 maharashtra.style.color="black";
 compi.style.color="black";
}
   function showcompi(){
   
    document.getElementById('div5').style.display="flex";
    document.getElementById('div2').style.display="none";
    document.getElementById('div3').style.display="none";
    document.getElementById('div4').style.display="none";
    document.getElementById('div1').style.display="none";

    cbse.style.backgroundColor="#ffff";
    icse.style.backgroundColor="#ffff";
    gujurat.style.backgroundColor="#ffff";
    maharashtra.style.backgroundColor="#ffff";
    compi.style.backgroundColor="#1e80c4";
    compi.style.color="#ffff";
    cbse.style.color="black";
    icse.style.color="black";
    maharashtra.style.color="black";
    gujurat.style.color="black";
    
}


cbse.addEventListener('click',showcbse);
icse.addEventListener('click',showicse);
maharashtra.addEventListener('click',showmaharashtra);
gujurat.addEventListener('click',showgujurat);
compi.addEventListener('click',showcompi);