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
    index === 0 ? 30 : -30;

    flower.style.transform = `
      translate(
        ${x * speed}px,
        ${y * speed}px
      )
      rotate(${x * 10}deg)
    `;

  });

});