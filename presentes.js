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
    'Air Fryer',
    'Liquidificador',
    'Microondas',
    'Jogo de Panelas',
    'Talheres',
    'Pratos'
  ],

  quarto:[
    'Travesseiro',
    'Cobertor',
    'Lençol',
    'Edredom'
  ],

  sala:[
    'Ventilador',
    'Tapete',
    'Mesa',
    'Cadeiras'
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

      if(reservados.includes(item))
      return;

      const div =
      document.createElement('div');

      div.classList.add('item');

      div.innerText = item;

      div.onclick = ()=>{

        document
        .querySelectorAll('.item')
        .forEach(el=>el.classList.remove('selected'));

        div.classList.add('selected');

        presenteSelecionado = item;

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