
import Postagens from "../../components/postagens";
import { Container } from "./styled";

export default function Postagem() {
  return (
    <div>
      <Container>
        <Postagens
        data={'12 de março de 2021'}
        titulo={'Criando um Monorepo com espaços de trabalho Lerna & Yarn'}
        subtitulo={'In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.'}
        data2={'08 de março de 2021'}
        titulo2={'Como o Stripe cria belos sites'}
        subtitulo2={'Examinando as dicas e truques usados ​​para tornar o design do site da Stripe um degrau acima do resto.'}
        data3={'04 de março de 2021'}
        titulo3={'Passado, presente e futuro do gerenciamento de estado React'}
        subtitulo3={'Conheça a história do gerenciamento de estado no React e quais são as soluções preferidas hoje.'}
        data4={'03 de março de 2021'}
        titulo4={'Criando um Monorepo com espaços de trabalho Lerna & Yarn'}
        subtitulo4={'Neste guia, você aprenderá como criar um Monorepo para gerenciar vários pacotes com um processo compartilhado de compilação, teste e lançamento.'}
        />
      </Container>
    </div>
  );
}
