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

{
nome:'Air Fryer',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1585515656973-6e8cfc2b4f84?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Geladeira',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Fogão',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Microondas',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Jogo de Panelas',
categoria:'Cozinha',
imagem:'https://images.unsplash.com/photo-1584990347449-a2d4c2f9d4df?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Sofá',
categoria:'Sala',
imagem:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'TV',
categoria:'Sala',
imagem:'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Mesa de Jantar',
categoria:'Sala',
imagem:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Ventilador',
categoria:'Sala',
imagem:'https://images.unsplash.com/photo-1578898886225-c7c894047899?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Lençol',
categoria:'Quarto',
imagem:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Edredom',
categoria:'Quarto',
imagem:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Guarda Roupa',
categoria:'Quarto',
imagem:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Máquina de Lavar',
categoria:'Lavanderia',
imagem:'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1200&auto=format&fit=crop'
},

{
nome:'Ferro de Passar',
categoria:'Lavanderia',
imagem:'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=1200&auto=format&fit=crop'
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

async function carregarItens(){

const { data } =
await db
.from('convidados')
.select('presente');

const reservados =
data.map(item=>item.presente);

const grid =
document.getElementById('grid');

itens.forEach(item=>{

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

}

carregarItens();

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