import {
  Box,
  Button,
  Container,
  styled,
  SxProps,
  Typography,
} from '@mui/material';
import { CSSProperties } from 'react';
import ButtonEntrar from '../ButtonEntrar';
import FooterQuintoAndar from '../FooterQuintoAndar';
import MenuItems from '../MenuItems';

const StyledHeaderQuintoAndar = styled(Container)`
  /* background-color: red; */
  height: 96px;
  padding: 0px 48px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// type StyledHeaderQuintoAndarProps = {
//   sx?: SxProps;
// };

// const StyledHeaderQuintoAndar = styled(Container)(
//   (props: StyledHeaderQuintoAndarProps) => ({
//     height: '96px',
//     padding: '0px 48px !important',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     ...(props.sx as CSSProperties),
//   })
// );

// const StyledHeaderQuintoAndarAlternativo = styled(Container)({
//     backgroundColor: 'red'
// });

export default function HeaderQuintoAndar() {
  return (
    <>
      <StyledHeaderQuintoAndar maxWidth={false}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <img
            style={{ height: 'fit-content' }}
            src="https://cozy-assets.quintoandar.com.br/cozy-static/v1/latest/default/cobranded-logo/default/complete.pt-BR.svg"
            alt="logo"
          />
          <MenuItems
            title="Buscar Imóveis"
            list={[
              'Imóveis para alugar',
              'Imóveis para comprar',
              'Selecionados para alugar',
              'Selecionados para comprar',
            ]}
          />
          <MenuItems
            title="Para proprietários"
            list={[
              'Anunciar imóvel para alugar',
              'Anunciar imóvel para vender',
              'Área do proprietário',
              'Repasses',
            ]}
          />
          <MenuItems title="para imobiliarias" />
          <MenuItems title="indicar imóveis" />
          <MenuItems
            title="Sobre"
            list={[
              'Sobre o QuintoAndar',
              'Conteúdos',
              'Ferramentas',
              'Dados e Índices',
              'Guias',
            ]}
          />
          <MenuItems title="ajuda" />
        </Box>
        <Box>
          <ButtonEntrar />
        </Box>
      </StyledHeaderQuintoAndar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '60vh',
          backgroundImage:
            'url(https://www.quintoandar.com.br/_next/image?url=https%3A%2F%2Fquintoandar.com.br%2Fimg%2Flanding%2Freb%2Fnew_Hero-Image.png&w=1920&q=80)',
        }}
      >
        <Typography variant="h1" color="white" fontWeight="bold">
          CONTEÚDO DO SITE AQUI
        </Typography>
      </Box>
      <FooterQuintoAndar />
    </>
  );
}
