const supabaseUrl = 'https://tyeprfwdzshjunzqdwkg.supabase.co';

const supabaseKey = 'sb_publishable_XZdunX9uP8mhSfzdUKHaHg_Za692cri';

const supabase = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);
async function salvarConvidado() {

  const nome = document.getElementById('nome').value;

  const presente = document.getElementById('presente').value;

  const { data, error } = await supabase
    .from('convidados')
    .insert([
      {
        nome: nome,
        presente: presente,
        quantidade: 1,
        confirmado: true
      }
    ]);

  if(error){
    alert('Erro!');
    console.log(error);
  } else {
    alert('Presença confirmada!');
  }

}