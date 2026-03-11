
let vocab=[];

async function loadVocab(){
 const res=await fetch('./assets/vocab/sat5000.v1.json');
 vocab=await res.json();
 document.getElementById('totalWords').innerText=vocab.length;
}

function generate(){
 if(!vocab.length)return;
 let out='';
 for(let i=0;i<10;i++){
  const w=vocab[Math.floor(Math.random()*vocab.length)];
  out+=`<div>${w.word} - ${w.definition||''}</div>`;
 }
 document.getElementById('wordList').innerHTML=out;
}
