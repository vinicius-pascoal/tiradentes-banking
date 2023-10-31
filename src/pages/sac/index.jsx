import React, { useState } from "react";
import Accordion from "../../assets/components/accordion";

const Sac = () => {
  const [items, setItems] = useState([
    {
      title: "O que é um banco digital?",
      content:
        "Um banco digital é uma instituição financeira que oferece serviços bancários online, sem a necessidade de agências físicas. Ele permite que os clientes acessem suas contas, façam transações e controlem suas finanças por meio de aplicativos móveis e sites.",
    },
    {
      title: "Como posso garantir a segurança da minha conta bancária online?",
      content:
        "Para garantir a segurança da sua conta no Tiradentes Finance, é crucial manter suas credenciais de login confidenciais e atualizadas regularmente. Além disso, utilize as medidas de segurança adicionais oferecidas por nós, como autenticação de dois fatores e alertas de atividade suspeita para monitorar sua conta.",
    },
    {
      title:
        "Quais são os limites diários para transferências e pagamentos online?",
      content:
        "Os limites diários para transferências e pagamentos online no Tiradentes Finance são configurados de forma a atender às necessidades dos alunos universitários. Recomendamos verificar as informações específicas em seu contrato ou entrar em contato conosco para obter os limites exatos. Normalmente, as transferências bancárias podem levar de um a três dias úteis para serem processadas, dependendo do destino e do tipo de transferência.",
    },
    {
      title: "O que devo fazer se meu cartão bancário for perdido ou roubado?",
      content:
        "Se o seu cartão Tiradentes Finance for perdido ou roubado, entre em contato imediatamente com nosso serviço de atendimento ao cliente para bloquear o cartão e evitar o uso indevido. Além disso, informe-nos sobre quaisquer transações não autorizadas o mais rápido possível. Quanto às taxas associadas ao uso do cartão no exterior, elas são cuidadosamente planejadas para fornecer aos alunos universitários facilidade e conveniência financeira durante suas viagens internacionais.",
    },
    {
      title:
        "Quais são as funcionalidades disponíveis no portal de internet banking?",
      content:
        "Inscrever-se nos serviços bancários online do Tiradentes Finance é fácil e acessível para os alunos universitários. Visite nosso site e siga as instruções para se registrar. Após o registro, você terá acesso a uma variedade de funcionalidades, incluindo consultas de saldo, transferências e pagamento de contas, todos adaptados para atender às necessidades financeiras dos estudantes universitários.",
    },
    {
      title: "Quais são as opções de investimento oferecidas pelo banco?",
      content:
        "No Tiradentes Finance, reconhecemos a importância de educação financeira para os alunos universitários. Oferecemos uma variedade de opções de investimento que são acessíveis e adequadas para aqueles que estão iniciando sua jornada financeira. Para abrir uma conta de investimento, entre em contato com um de nossos consultores financeiros que se especializam em ajudar os alunos universitários a entender e escolher opções de investimento que se alinhem com seus objetivos futuros.",
    },
    {
      title:
        "Quais são as taxas de câmbio oferecidas pelo banco para transações internacionais?",
      content:
        "As taxas de câmbio oferecidas pelo Tiradentes Finance para transações internacionais foram especialmente selecionadas para atender às necessidades dos alunos universitários que participam de programas de intercâmbio ou viagens educacionais. Para comprar moeda estrangeira através do Tiradentes Finance, visite uma de nossas agências e fale com um de nossos especialistas em câmbio, que terão prazer em ajudá-lo com a transação de maneira conveniente e acessível.",
    },
    {
      title:
        "Como posso entrar em contato com o serviço de atendimento ao cliente do banco?",
      content:
        "Você pode entrar em contato com nosso serviço de atendimento ao cliente do Tiradentes Finance ligando para nosso número de suporte, que está disponível de segunda a sexta-feira, das 8h às 20h, e aos sábados das 9h às 13h. Nossos representantes terão prazer em ajudar com qualquer dúvida ou preocupação que você possa ter. Além disso, você pode enviar um e-mail para o nosso serviço de atendimento ao cliente a qualquer momento e receberá uma resposta o mais breve possível, garantindo um suporte abrangente para os alunos universitários em todas as etapas de sua jornada financeira.",
    },
  ]);

  return (
    <div class="Sac">
      <h1>PERGUNTAS FREQUENTES</h1>
      {items.map((item) => (
        <Accordion
          key={item.title}
          title={item.title}
          conteudo={item.content}
        />
      ))}
    </div>
  );
};

export default Sac;
