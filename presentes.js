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

/* SALA */

{
nome:'Sofá',
categoria:'Sala',
imagem:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Televisão',
categoria:'Sala',
imagem:'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Painel',
categoria:'Sala',
imagem:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Almofadas',
categoria:'Sala',
imagem:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
},

/* COZINHA */

{
nome:'Fogão',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Geladeira',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Micro-ondas',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Forno Elétrico',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Air Fryer',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1585515656973-6e8cfc2b4f84?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Liquidificador',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Batedeira',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Chaleira',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Armário',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Bacias',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Porta Temperos',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Kit de Panelas',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1584990347449-a2d4c2f9d4df?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Panela de Pressão',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1584990347449-a2d4c2f9d4df?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Kit de Talheres',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Kit de Faqueiro',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Jogo de Copos',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Jogo de Pratos',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Formas de Assar',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Jogo de Xícaras',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Escorredor de Louça',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Escorredor de Macarrão',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Pano de Prato',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Colheres e Conchas',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Jarra de Suco',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Lixeira',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Cafeteira',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Jogo de Mantimentos',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Garrafas de Café',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop'
},

/* BANHEIRO */

{
nome:'Toalhas',
categoria:'Banheiro',
imagem:'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Saboneteira',
categoria:'Banheiro',
imagem:'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Porta Escova',
categoria:'Banheiro',
imagem:'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Cesto de Roupa',
categoria:'Banheiro',
imagem:'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Suporte de Toalha',
categoria:'Banheiro',
imagem:'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Tapetes',
categoria:'Banheiro',
imagem:'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop'
},

/* QUARTO */

{
nome:'Cama',
categoria:'Quarto',
imagem:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Travesseiros',
categoria:'Quarto',
imagem:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Jogos de Lençóis',
categoria:'Quarto',
imagem:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Cobertores',
categoria:'Quarto',
imagem:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Cortinas',
categoria:'Quarto',
imagem:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Guarda Roupa',
categoria:'Quarto',
imagem:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Cômoda',
categoria:'Quarto',
imagem:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Cabides',
categoria:'Quarto',
imagem:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
},

/* LAVANDERIA */

{
nome:'Máquina de Lavar',
categoria:'Lavanderia',
imagem:'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Varal',
categoria:'Lavanderia',
imagem:'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Prateleira para Produtos',
categoria:'Lavanderia',
imagem:'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Prendedores',
categoria:'Lavanderia',
imagem:'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Balde',
categoria:'Lavanderia',
imagem:'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Vassoura',
categoria:'Lavanderia',
imagem:'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Rodinho',
categoria:'Lavanderia',
imagem:'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Panos de Chão',
categoria:'Lavanderia',
imagem:'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1200&auto=format&fit=crop'
}

];
const params =
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