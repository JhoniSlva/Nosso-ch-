const flowers =
document.querySelectorAll('.flower');

document.addEventListener('mousemove',(e)=>{

  const x =
  e.clientX / window.innerWidth;

  const y =
  e.clientY / window.innerHeight;

  flowers.forEach((flower,index)=>{

    const speed =
    index === 0 ? 30 : -30;

    flower.style.transform = `
translate(
  ${x * speed}px,
  ${y * speed}px
)
rotate(${x * 8}deg)
scale(1.03)
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