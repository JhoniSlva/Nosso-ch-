const supabaseUrl =
'https://tyeprfwdzshjunzqdwkg.supabase.co';

const supabaseKey =
'sb_publishable_XZdunX9uP8mhSfzdUKHaHg_Za692cri';

const db =
window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

const presentes = {

  cozinha:[

    {
      nome:'Air Fryer',
      imagem:'https://images.unsplash.com/photo-1585515656973-6e8cfc2b4f84?q=80&w=800&auto=format&fit=crop'
    },

    {
      nome:'Liquidificador',
      imagem:'https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=800&auto=format&fit=crop'
    },

    {
      nome:'Microondas',
      imagem:'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?q=80&w=800&auto=format&fit=crop'
    },

    {
      nome:'Jogo de Panelas',
      imagem:'https://images.unsplash.com/photo-1584990347449-a2d4c2f9d4df?q=80&w=800&auto=format&fit=crop'
    },

    {
      nome:'Pratos',
      imagem:'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=800&auto=format&fit=crop'
    },

    {
      nome:'Talheres',
      imagem:'https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop'
    }

  ],

  quarto:[

    {
      nome:'Lençol',
      imagem:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop'
    },

    {
      nome:'Travesseiro',
      imagem:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop'
    },

    {
      nome:'Cobertor',
      imagem:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop'
    }

  ],

  sala:[

    {
      nome:'Ventilador',
      imagem:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop'
    },

    {
      nome:'Tapete',
      imagem:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop'
    },

    {
      nome:'Mesa',
      imagem:'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop'
    }

  ],

  banheiro:[

    {
      nome:'Toalhas',
      imagem:'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop'
    },

    {
      nome:'Tapete de Banheiro',
      imagem:'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop'
    }

  ],

  limpeza:[

    {
      nome:'Vassoura',
      imagem:'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=800&auto=format&fit=crop'
    },

    {
      nome:'Rodo',
      imagem:'https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=800&auto=format&fit=crop'
    }

  ]

};

const params =
new URLSearchParams(
  window.location.search
);

const nome =
params.get('nome');

document.getElementById(
  'tituloNome'
).innerText =
`Olá, ${nome}!`;

let confirmado = true;

let presenteSelecionado = null;

document
.querySelectorAll('.option')
.forEach(option=>{

  option.onclick = ()=>{

    document
    .querySelectorAll('.option')
    .forEach(el=>el.classList.remove('active'));

    option.classList.add('active');

    confirmado =
    option.dataset.value === 'true';

  };

});

async function carregarPresentes(){

  const { data } =
  await db
  .from('convidados')
  .select('presente');

  const reservados =
  data.map(item=>item.presente);

  for(const categoria in presentes){

    const grid =
    document.getElementById(categoria);

    presentes[categoria]
    .forEach(item=>{

      if(reservados.includes(item.nome))
      return;

      const div =
      document.createElement('div');

      div.classList.add('item');

      div.innerHTML = `

  <div class="image">
    <img src="${item.imagem}">
  </div>

  <div class="item-info">

    <h4>
      ${item.nome}
    </h4>

  </div>

`;

      div.onclick = ()=>{

        document
        .querySelectorAll('.item')
        .forEach(el=>el.classList.remove('selected'));

        div.classList.add('selected');

       presenteSelecionado = item.nome;

      };

      grid.appendChild(div);

    });

  }

}

carregarPresentes();

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

    alert('Erro ao confirmar');

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
          font-size:70px;
          margin-bottom:20px;
        ">
          💙
        </h1>

        <h2 style="
          font-size:42px;
          margin-bottom:20px;
        ">
          Obrigado!
        </h2>

        <p style="
          max-width:600px;
          line-height:1.8;
          color:#dcecff;
        ">
          Sua confirmação foi enviada
          com sucesso.
        </p>

      </div>

    `;

  }

};