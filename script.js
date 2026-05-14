const entrarBtn = document.getElementById('entrarBtn');

entrarBtn.addEventListener('click',()=>{

  const nome = document.getElementById('nome').value;

  if(nome.trim() === ''){

    alert('Digite seu nome');

    return;
  }

  alert(`Bem-vindo(a), ${nome} 💙`);

});