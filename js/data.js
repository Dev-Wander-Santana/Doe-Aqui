// ONGs Database
const ongs = [
  {
    id: "abraco-animal",
    name: "Abraço Animal",
    city: "São Paulo",
    category: "Animais",
    description: "Resgate e cuidado de animais abandonados",
    fullDescription: "A ONG Abraço Animal foi fundada em 2015 com a missão de resgatar, tratar e encontrar lares amorosos para animais em situação de abandono. Atualmente cuidamos de mais de 200 animais entre cães e gatos, oferecendo alimentação, tratamento veterinário e muito amor até encontrarem uma família definitiva.",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80",
    pixKey: "abraco@animal.org.br",
    goal: 5000,
  },
  {
    id: "educacao-para-todos",
    name: "Educação Para Todos",
    city: "Rio de Janeiro",
    category: "Educação",
    description: "Promovendo educação de qualidade em comunidades carentes",
    fullDescription: "Nossa ONG trabalha há 10 anos levando educação de qualidade para crianças e jovens em comunidades carentes do Rio de Janeiro. Oferecemos reforço escolar, aulas de informática, artes e esportes, beneficiando mais de 500 alunos por ano.",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
    pixKey: "educacao@paratodos.org.br",
    goal: 8000,
  },
  {
    id: "saude-solidaria",
    name: "Saúde Solidária",
    city: "Belo Horizonte",
    category: "Saúde",
    description: "Atendimento médico gratuito para famílias carentes",
    fullDescription: "A Saúde Solidária oferece consultas médicas, exames e medicamentos gratuitos para famílias que não têm acesso ao sistema de saúde. Nosso time de voluntários atende mais de 300 famílias mensalmente.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    pixKey: "saude@solidaria.org.br",
    goal: 10000,
  },
  {
    id: "leandro sena",
    name: "leandro sena",
    city: "Bahia",
    category: "Alimentação",
    description: "Combate à fome distribuindo alimentos para famílias necessitadas",
    fullDescription: "O projeto Alimenta Vida nasceu durante a pandemia e se consolidou como uma iniciativa permanente de combate à fome. Distribuímos cestas básicas e refeições quentes para mais de 1000 famílias mensalmente.",
    image: "https://upload.wikimedia.org/wikipedia/pt/b/b4/Corinthians_simbolo.png",
    pixKey: "alimenta@vida.org.br",
    goal: 6000,
  },
];

function getOngById(id) {
  return ongs.find(ong => ong.id === id);
}

function getAllOngs() {
  return ongs;
}
