import { Especialidade } from "./types/especialidade";
import { Paciente } from "./types/paciente";
import { StatusConsulta } from "./types/statusConsulta";
import { Medico } from "./interfaces/medico";
import { Consulta } from "./interfaces/consulta";


// Especialidades
const cardiologia: Especialidade = {
  id: 1,
  nome: "Cardiologia",
};
const ortopedia: Especialidade = {
  id: 2,
  nome: "Ortopedia",
  descricao: "Tratamento de ossos e articulações",
};
const pediatria: Especialidade = {
  id: 3,
  nome: "Pediatria",
};
const odontologia: Especialidade = {
  id: 4,
  nome: "Odontologia",
};
const oftalmologia: Especialidade = {
  id: 5,
  nome: "Oftalmologia",
};
// Médicos
const medico1: Medico = {
  id: 1,
  nome: "Dr. Roberto Silva",
  crm: "CRM12345",
  especialidade: cardiologia,
  ativo: true,
};
const medico2: Medico = {
  id: 2,
  nome: "Dra. Ana Paula Costa",
  crm: "CRM54321",
  especialidade: ortopedia,
  ativo: true,
};
const medico3: Medico = {
  id: 3,
  nome: "Dr. João Mendes",
  crm: "CRM98765",
  especialidade: pediatria,
  ativo: true,
};
const medico4: Medico = {
  id: 4,
  nome: "Dr. Carlos Vanetti",
  crm: "CRM29571",
  especialidade: odontologia,
  ativo: true,
};
const medico5: Medico = {
  id: 5,
  nome: "Dr. Maria Salvação",
  crm: "CRM70928",
  especialidade: oftalmologia,
  ativo: true,
};
// Pacientes
const paciente1: Paciente = {
  id: 1,
  nome: "Carlos Andrade",
  cpf: "123.456.789-00",
  email: "carlos@email.com",
};
const paciente2: Paciente = {
  id: 2,
  nome: "Maria Silva",
  cpf: "987.654.321-00",
  email: "maria@email.com",
  telefone: "(11) 98765-4321",
};
const paciente3: Paciente = {
  id: 3,
  nome: "Pedro Santos",
  cpf: "456.789.123-00",
  email: "pedro@email.com",
};
const paciente4: Paciente = {
  id: 4,
  nome: "Carla Andrade",
  cpf: "645.867.856-00",
  email: "carla@email.com",
};
const paciente5: Paciente = {
  id: 5,
  nome: "Auro Vanetti",
  cpf: "666.133.199-00",
  email: "auro@email.com",
};

function criarConsulta(
  id: number,
  medico: Medico,
  paciente: Paciente,
  data: Date,
  valor: number
): Consulta {
  return {
    id,
    medico,
    paciente,
    data,
    valor,
    status: "agendada",
  };
}


function confirmarConsulta(consulta: Consulta): Consulta {
  return {
    ...consulta,
    status: "confirmada",
  };
}


function cancelarConsulta(consulta: Consulta): Consulta | null {
  if (consulta.status === "realizada") {
    return null;
  }
  return {
    ...consulta,
    status: "cancelada",
  };
}

function alterarStatusConsulta(consulta: Consulta,status: StatusConsulta): Consulta {
  return {
    ...consulta,
    status,
  };
}


function exibirConsulta(consulta: Consulta): string {
  const valorFormatado = consulta.valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return `
Consulta #${consulta.id}
Médico: ${consulta.medico.nome}
Paciente: ${consulta.paciente.nome}
Especialidade: ${consulta.medico.especialidade.nome}
Data: ${consulta.data.toLocaleDateString("pt-BR")}
Valor: ${valorFormatado}
Status: ${consulta.status}
`;
}


function listarConsultasPorStatus(
  consultas: Consulta[],
  status: StatusConsulta
): Consulta[] {
  return consultas.filter((consulta) => consulta.status === status);
}


function listarConsultasFuturas(consultas: Consulta[]): Consulta[] {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0); // Zera horas para comparar apenas a data
  return consultas.filter((consulta) => consulta.data >= hoje);
}


const consulta1 = criarConsulta(
  1,
  medico1,
  paciente1,
  new Date(2026, 1, 25),
  350
);
const consulta2 = criarConsulta(
  2,
  medico2,
  paciente2,
  new Date(),
  700
);
const consulta3 = criarConsulta(
  3,
  medico3,
  paciente3,
  new Date(2026, 2, 15),
  1050
);
const consulta4 = criarConsulta(
  4,
  medico4,
  paciente4,
  new Date(2026, 3, 21),
  1400
);
const consulta5 = criarConsulta(
  5,
  medico5,
  paciente5,
  new Date(2026, 4, 3), 
  1750
);

const consultas: Consulta[] = [];
consultas.push(
  consulta1,
  consulta2,
  consulta3,
  consulta4,
  consulta5
);



const consultaConfirmada1 = alterarStatusConsulta(consulta1, "realizada");
console.log("=== CONSULTA CONFIRMADA ===");
console.log(exibirConsulta(consultaConfirmada1));

const consultaConfirmada2 = alterarStatusConsulta(consulta2, "realizada");
console.log("=== CONSULTA CONFIRMADA ===");
console.log(exibirConsulta(consultaConfirmada2));

const consultaConfirmada3 = alterarStatusConsulta(consulta3, "agendada");
console.log("=== CONSULTA CONFIRMADA ===");
console.log(exibirConsulta(consultaConfirmada3));

const consultaConfirmada4 = alterarStatusConsulta(consulta4, "cancelada");
console.log("=== CONSULTA CONFIRMADA ===");
console.log(exibirConsulta(consultaConfirmada4));

const consultaConfirmada5 = confirmarConsulta(consulta5);
console.log("=== CONSULTA CONFIRMADA ===");
console.log(exibirConsulta(consultaConfirmada5));