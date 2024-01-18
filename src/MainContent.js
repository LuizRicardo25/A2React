// MainContent.js
import React from 'react';

function MainContent() {
  return (
    <main>
      <section style={{ textAlign: 'justify' }}>
        {/* Conteúdo da seção */}
        <br></br><br></br><br></br><br></br>
        <center>ARQUIVOS JS E JSX</center>
      </section>
      <article style={{ textAlign: 'justify' }}>
        {/* Artigo ou post */}
        
       A diferença entre utilizar arquivos .js e .jsx em um projeto React está principalmente na convenção e na clareza do código, 
       mas tecnicamente ambos podem conter código JSX e funcionar da mesma maneira. Aqui estão as principais diferenças:
      Extensão .js:
      Universalidade: Arquivos .js são a extensão padrão para arquivos JavaScript e são reconhecidos por todos os ambientes e ferramentas de desenvolvimento JavaScript.
      Flexibilidade: Um arquivo .js pode conter não apenas JSX, mas também código JavaScript regular, como funções, classes, e módulos.
      Compatibilidade: Alguns ambientes de desenvolvimento ou ferramentas de build podem estar configurados para tratar todos os arquivos .js 
      como arquivos JavaScript puros, o que pode levar à necessidade de configuração adicional para suportar JSX.
      Extensão .jsx:
      Intenção Específica: A extensão .jsx explicitamente indica que o arquivo contém JSX, o que pode tornar o código mais legível e a intenção mais clara para outros desenvolvedores.
      Ferramentas de Desenvolvimento: Algumas configurações de ferramentas de desenvolvimento e editores de código podem fornecer realce de sintaxe aprimorado ou outras funcionalidades úteis quando detectam a extensão .jsx.
      Configuração de Build: Ferramentas como Babel ou Webpack geralmente exigem menos configuração para compilar JSX se ele estiver em um arquivo .jsx, pois essa é a convenção padrão.
      Práticas Recomendadas:
      Convenção da Comunidade: Muitos projetos React usam a extensão .jsx para arquivos que contêm JSX, pois isso torna claro que o arquivo provavelmente não é JavaScript puro e pode conter elementos específicos do React.
      Ferramentas e Linters: Alguns linters ou ferramentas de análise estática podem ser configurados para aplicar regras específicas apenas a arquivos .jsx.
      Conclusão:
Tecnicamente, você pode usar qualquer uma das extensões e ainda escrever JSX, contanto que suas ferramentas de build e transpilação estejam configuradas corretamente. A escolha entre .js e .jsx muitas vezes se resume à preferência pessoal ou da equipe, convenções do projeto, e configurações das ferramentas de desenvolvimento. No entanto, é bastante comum adotar a extensão .jsx para arquivos que contêm JSX, pois isso pode ajudar a diferenciar visualmente os componentes React de outros arquivos JavaScript no projeto.
      </article>
      {/* Mais seções/artigos conforme necessário */}
    </main>
  );
}

export default MainContent;
