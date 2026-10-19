'use strict';
const screenImage=document.getElementById('selected-screen');
const screenCaption=document.getElementById('screen-caption');
const dialog=document.getElementById('screen-dialog');
const dialogImage=document.getElementById('dialog-image');
document.querySelectorAll('.screen-tab').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.screen-tab').forEach(other=>{other.classList.remove('active');other.setAttribute('aria-pressed','false');});
  button.classList.add('active');button.setAttribute('aria-pressed','true');
  screenImage.src=button.dataset.image;screenImage.alt=button.dataset.alt;screenCaption.textContent=button.dataset.caption;
}));
document.getElementById('expand-screen').addEventListener('click',()=>{
  dialogImage.src=screenImage.src;dialogImage.alt=screenImage.alt;document.getElementById('dialog-title').textContent=screenCaption.textContent;dialog.showModal();
});
document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();}});
document.getElementById('copy-ads').addEventListener('click',async()=>{
  const status=document.getElementById('copy-status');
  try{await navigator.clipboard.writeText(document.getElementById('ads-content').textContent.trim());status.textContent='Contenido copiado.';}
  catch{status.textContent='Selecciona y copia la línea del archivo, o utiliza el enlace de descarga.';}
});
