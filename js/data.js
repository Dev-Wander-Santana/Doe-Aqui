// ONGs Database
const ongs = [
  {
    id: "Centro-Cultural-de-Capoeira-Lendario-de-Palmares",
    name: "Centro Cultural de Capoeira Lendário de Palmares",
    city: "Serrinha",
    category: "Cultura",
    description: "Aulas de capoeira e promoção da cultura afro-brasileira",
    fullDescription: "O Centro Cultural de Capoeira Lendário de Palmares, fundado em 2009, é um espaço dedicado à preservação e promoção da capoeira e da cultura afro-brasileira. Sua sede, a Casa de Taipa, localizada em um bairro historicamente negro, funciona como ponto de encontro para pessoas de todas as idades, promovendo atividades culturais, esportivas, educacionais e ambientais. O centro busca valorizar as tradições da capoeira, entendida como um movimento de origem negra, ao mesmo tempo em que incentiva seu desenvolvimento. O fundador, Mestre Júnior (Diomedes Gomes de Almeida Junior), iniciou na capoeira em 1986, ainda criança, e mantém até hoje o compromisso com a história e a expansão da arte.",
    image: "https://capoeira.iphan.gov.br/userfile/1499343711.jpg",
    pixKey: "capoeiralendario@gmail.com",
    goal: 5000,
  },
  {
    id: "grupo-garras",
    name: "Grupo Garras",
    city: "Serrinha",
    category: "animais",
    description: "🐶 ABRIGO DE ANIMAIS #ajudeasalvarvidas ",
    fullDescription: "O Grupo Garras é um abrigo que resgata, cuida e encontra lares para animais abandonados e maltratados. Com a ajuda de voluntários e doações, conseguimos oferecer cuidados veterinários, alimentação e um ambiente seguro para diversos animais.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-4070srn0miR3OqVC0mFqHs5xeQuFJAMDQ&s",
    pixKey: "grupogarras@gmail.com",
    goal: 10000,
  },
  {
    id: "Pescadores-do-bem",
    name: "Pescadores do Bem",
    city: "Serrinha",
    category: "Doação",
    description: "FALTA A ONG MANDAR",
    fullDescription: "FALTA A ONG MANDAR",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhLViqb863N3G-e2hVorOqUJ1hrFGCl2PLE0tuuf9BrGwx8Y_YrMSlZnmtFBcKvkrj4qU&usqp=CAU",
    pixKey: "pescadoresdobemsha@gmail.com",
    goal: 10000,
  },
  {
    id: "todos-pela-educacao",
    name: "Todos Pela Educação",
    city: "Bahia",
    category: "Educação",
    description: "Organização da sociedade civil com um único objetivo: mudar para valer a qualidade da Educação Básica no Brasil",
    fullDescription: "O Todos Pela Educação é uma organização da sociedade civil fundada em 2006, dedicada a melhorar de forma efetiva a qualidade da Educação Básica no Brasil. A entidade produz conhecimento, articula políticas públicas, monitora indicadores educacionais e mobiliza lideranças. Defende que uma educação de qualidade deve garantir o desenvolvimento pleno, a cidadania e a preparação para o trabalho. As doações recebidas sustentam a instituição e permitem a continuidade de suas ações em prol de uma escola pública de qualidade para todos.",
    image: "https://todospelaeducacao.org.br/wordpress/wp-content/uploads/2025/02/logo-tpe2.png",
    pixKey: "todospelaeducação@gmail.org.br",
    goal: 6000,
  },
];

function getOngById(id) {
  return ongs.find(ong => ong.id === id);
}

function getAllOngs() {
  return ongs;
}

