
function login(){
 const u=document.getElementById('user').value.trim();
 const p=document.getElementById('pass').value;
 if(u==='Allisa' && p==='1234'){
   document.getElementById('loginOverlay').style.display='none';
   loadVocab();
 }else{
   document.getElementById('loginError').innerText='Wrong username or password';
 }
}
