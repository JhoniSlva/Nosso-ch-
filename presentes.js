const supabaseUrl =
'https://tyeprfwdzshjunzqdwkg.supabase.co';

const supabaseKey =
'sb_publishable_XZdunX9uP8mhSfzdUKHaHg_Za692cri';

const db =
window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

const itens = [

/* COZINHA */

{
nome:'Fogão',
categoria:'Cozinha',
imagem:'cozinha/fogão.jpeg'
},

{
nome:'Batedeira',
categoria:'Cozinha',
imagem:'cozinha/batedeira.jpeg'
},

{
nome:'Jogo de Mantimentos',
categoria:'Cozinha',
imagem:'cozinha/potes.jpeg'
},

{
nome:'Jogo de Copos',
categoria:'Cozinha',
imagem:'cozinha/copos2.jpeg'
},

{
nome:'Jogo de Xícaras',
categoria:'Cozinha',
imagem:'cozinha/copos.jpeg'
},

{
nome:'Kit de Panelas',
categoria:'Cozinha',
imagem:'cozinha/panelas.jpeg'
},

{
nome:'Kit Talheres',
categoria:'Cozinha',
imagem:'cozinha/talheres.jpeg'
},

{
nome:'Chaleira',
categoria:'Cozinha',
imagem:'https://http2.mlstatic.com/D_NQ_NP_2X_842078-MLB107572614544_032026-F.webp'
},

{
nome:'Panela de Pressão',
categoria:'Cozinha',
imagem:'cozinha/paneladepressao.jpeg'
},

{
nome:'Jogo de Jantar',
categoria:'Cozinha',
imagem:'cozinha/pratos.jpeg'
},

{
nome:'Micro-ondas',
categoria:'Cozinha',
imagem:'cozinha/microondas.jpeg'
},

{
nome:'Air Fryer',
categoria:'Cozinha',
imagem:'cozinha/airfryer.jpeg'
},

{
nome:'Forno Elétrico',
categoria:'Cozinha',
imagem:'cozinha/forno.jpeg'
},

{
nome:'Garrafa de Café',
categoria:'Cozinha',
imagem:'cozinha/cafeteira2.jpeg'
},

{
nome:'Cafeteira',
categoria:'Cozinha',
imagem:'cozinha/cafeteira.jpeg'
},

{
nome:'Liquidificador',
categoria:'Cozinha',
imagem:'cozinha/liquidificador.jpeg'
},
{
nome:'Lixeira',
categoria:'Cozinha',
imagem:'cozinha/lixeira1.jpeg'
},

/* SALA */

{
nome:'Sofá',
categoria:'Sala',
imagem:'sala/sofa.jpeg'
},

{
nome:'Painel',
categoria:'Sala',
imagem:'sala/painel.jpeg'
},

/* BANHEIRO */

{
nome:'Kit Toalhas',
categoria:'Banheiro',
imagem:'banheiro/toalha.jpeg'
},

{
nome:'Lixeira Inox',
categoria:'Banheiro',
imagem:'banheiro/lixeira.jpeg'
},

/* QUARTO */

{
nome:'Cama',
categoria:'Quarto',
imagem:'quarto/cama.jpeg'
},

{
nome:'Jogo de Lençóis',
categoria:'Quarto',
imagem:'quarto/lençol.jpeg'
},

{
nome:'Travesseiro',
categoria:'Quarto',
imagem:'quarto/travesseiro.jpeg'
},

{
nome:'Cobertas',
categoria:'Quarto',
imagem:'quarto/cobertas.jpeg'
},

{
nome:'Guarda Roupas',
categoria:'Quarto',
imagem:'quarto/quardaroupa.jpeg'
},

{
nome:'Cortinas',
categoria:'Quarto',
imagem:'quarto/cortina.jpeg'
},

/* LAVANDERIA */

{
nome:'Máquina de Lavar',
categoria:'Lavanderia',
imagem:'lavanderia/maquina.jpeg'
}

];const params =
new URLSearchParams(
window.location.search
);

const nome =
params.get('nome');

document
.getElementById('tituloNome')
.innerText =
`Olá, ${nome}!`;

let confirmado = true;

let presenteSelecionado = null;

document
.querySelectorAll('.confirm-card')
.forEach(card=>{

card.onclick = ()=>{

document
.querySelectorAll('.confirm-card')
.forEach(el=>el.classList.remove('active'));

card.classList.add('active');

confirmado =
card.dataset.value === 'true';

};

});

const gridContainer =
document.getElementById('gridContainer');

const tabs =
document.querySelectorAll('.tab');

let reservados = [];

async function carregarReservados(){

  const { data } =
  await db
  .from('convidados')
  .select('presente');

  reservados =
  data.map(item=>item.presente);

  renderizarItens('todos');

}

function renderizarItens(categoria){

  gridContainer.innerHTML = '';

  const categorias =
  categoria === 'todos'
  ? [...new Set(itens.map(i=>i.categoria))]
  : [categoria];

  categorias.forEach(cat=>{

    const section =
    document.createElement('div');

    section.classList.add('category-section');

    section.innerHTML = `
      <h2 class="category-title">
        ${cat}
      </h2>

      <div class="items-grid"></div>
    `;

    const grid =
    section.querySelector('.items-grid');

    itens
    .filter(item=>item.categoria === cat)
    .forEach(item=>{

      if(reservados.includes(item.nome))
      return;

      const div =
      document.createElement('div');

      div.classList.add('item');

      div.innerHTML = `

        <div class="item-image">
          <img src="${item.imagem}">
        </div>

        <div class="item-info">

          <div class="item-category">
            ${item.categoria}
          </div>

          <div class="item-name">
            ${item.nome}
          </div>

        </div>

      `;

      div.onclick = ()=>{

        document
        .querySelectorAll('.item')
        .forEach(el=>el.classList.remove('selected'));

        div.classList.add('selected');

        presenteSelecionado =
        item.nome;
        document
.getElementById(
'presenteSelecionadoText'
)
.innerText =
`🎁 ${item.nome}`;

      };

      grid.appendChild(div);

    });

    gridContainer.appendChild(section);

  });

}

tabs.forEach(tab=>{

  tab.onclick = ()=>{

    tabs.forEach(t=>
      t.classList.remove('active')
    );

    tab.classList.add('active');

    renderizarItens(
      tab.dataset.category
    );

  };

});

carregarReservados();
document
.getElementById('confirmarBtn')
.onclick = async ()=>{

if(confirmado && !presenteSelecionado){

alert('Escolha um presente');

return;

}

const { error } =
await db
.from('convidados')
.insert([
{
nome:nome,
presente:presenteSelecionado,
confirmado:confirmado
}
]);

if(error){

console.log(error);

}else{

document.body.innerHTML = `

<div style="
min-height:100vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
text-align:center;
padding:30px;
font-family:Poppins;
color:white;
background:linear-gradient(135deg,#020817,#0b2340);
">

<h1 style="
font-size:80px;
margin-bottom:20px;
">
💙
</h1>

<h2 style="
font-size:52px;
margin-bottom:20px;
">
Obrigado!
</h2>

<p style="
max-width:700px;
line-height:1.8;
font-size:20px;
color:#dcecff;
">
Sua confirmação foi enviada
com sucesso.
</p>

</div>

`;

}

};