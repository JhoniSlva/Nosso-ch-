const flowers =
document.querySelectorAll('.flower');

const mouseLight =
document.querySelector('.mouse-light');

document.addEventListener('mousemove',(e)=>{

  const x =
  e.clientX / window.innerWidth;

  const y =
  e.clientY / window.innerHeight;

  mouseLight.style.left =
  e.clientX + 'px';

  mouseLight.style.top =
  e.clientY + 'px';

  flowers.forEach((flower,index)=>{

    const speed =
    index === 0 ? 20 : -20;

    flower.style.transform = `
      translate(
        ${x * speed}px,
        ${y * speed}px
      )
      rotate(${x * 6}deg)
    `;

  });

});

const entrarBtn =
document.getElementById('entrarBtn');

entrarBtn.addEventListener('click',()=>{

  const nome =
  document.getElementById('nome').value;

  if(nome.trim() === '') return;

  document.body.style.transition =
  '1s';

  document.body.style.opacity = '0';

  setTimeout(()=>{

    window.location.href =
    'presentes.html?nome=' + nome;

  },1000);

});