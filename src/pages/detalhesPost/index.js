import PostCompleto from "../../components/postCompleto";
import { Container } from "./styled";

export default function Detalhes() {
  return (
    <div>
      <Container>
        <PostCompleto
          titulo={"Passado, presente e futuro do gerenciamento de estado React"}
          data={"12 de março de 2021"}
          paragrafo={"O React foi lançado em maio de 2013. Sua mudança de paradigma foi que sua IU era uma função do seu estado. Dado algum estado do componente, o React pode determinar a aparência do seu componente. React é construído sobre a ideia de estado. No entanto, o estado tem sido uma das partes mais difíceis da construção de um aplicativo React.Vamos imaginar o gerenciamento de estado no React como um cinto de ferramentas robusto. Você usa este cinto de ferramentas há anos, adicionando lentamente novas ferramentas conforme necessário. Cada ferramenta serve a um propósito muito específico. Você não usa seu martelo para aparafusar os parafusos. Como artesão, você aprendeu a hora e o local certo para usar cada ferramenta. O gerenciamento de estado com React é um cinto de ferramentas robusto, mas nem todo mundo tem experiência anterior para saber qual ferramenta usar. Esta postagem explicará o passado, o presente e o futuro do gerenciamento de estado para ajudá-lo a tomar a decisão correta para sua equipe, projeto ou organização."}
          titulo2={"Glossário"}
          paragrafo2={
            "Antes de começarmos, é fundamental que você entenda alguns dos termos comumente usados. Estes não são os nomes canônicos. Algumas variações diferentes de cada um flutuam, mas as ideias subjacentes são as mesmas:"
          }
          lista1={
            "Estado da interface do usuário – estado usado para controlar as partes interativas de nosso aplicativo (por exemplo, alternância do modo escuro, modais)."
          }
          lista2={
            "Estado do cache do servidor – estado do servidor, que armazenamos em cache no lado do cliente para acesso rápido (por exemplo, chame uma API, armazene o resultado, use-o em vários locais)."
          }
          lista3={
            "Estado do formulário – Os vários estados diferentes de um formulário (por exemplo, carregamento, envio, desativado, validação, nova tentativa). Há também um estado de formulário controlado e não controlado."
          }
          lista4={
            "Estado da URL – Estado gerenciado pelo navegador (por exemplo, filtrar produtos, salvar em parâmetros de consulta e atualizar a página para ver os mesmos produtos filtrados)"
          }
          lista5={
            "State Machine – Um modelo explícito do seu estado ao longo do tempo (por exemplo, um semáforo vai de verde → amarelo → vermelho, mas nunca verde → vermelho)."
          }
        />
      </Container>
    </div>
  );
}
