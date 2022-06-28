import { Box, Container, Grid, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function FooterQuintoAndar() {
  return (
    <Container
      maxWidth={false}
      sx={{ backgroundColor: '#F8F9F5', padding: 12 }}
    >
      <Grid container spacing={2} sx={{ marginX: 'auto', maxWidth: '1440px' }}>
        <Grid
          item
          xs={3}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Typography variant="body1" fontWeight="bold">
            Sobre nós
          </Typography>

          <Typography sx={{ cursor: 'pointer' }}>
            Conheça o QuintoAndar
          </Typography>
          <Typography sx={{ cursor: 'pointer' }}>Regiões atendidas</Typography>
          <Typography sx={{ cursor: 'pointer' }}>
            Conheça a Garantia QuintoAndar
          </Typography>
          <Typography sx={{ cursor: 'pointer' }}>Central de Ajuda</Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Typography variant="body1" fontWeight="bold">
            Produtos
          </Typography>

          <Typography sx={{ cursor: 'pointer' }}>
            Simular financiamento imobiliário
          </Typography>
          <Typography sx={{ cursor: 'pointer' }}>Indique um imóvel</Typography>
          <Typography sx={{ cursor: 'pointer' }}>
            Valor de aluguel por bairro
          </Typography>
          <Typography sx={{ cursor: 'pointer' }}>Meu Lugar</Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Typography variant="body1" fontWeight="bold">
            Trabalhe com a gente
          </Typography>

          <Typography sx={{ cursor: 'pointer' }}>Carreiras</Typography>
          <Typography sx={{ cursor: 'pointer' }}>Corretagem</Typography>
          <Typography sx={{ cursor: 'pointer' }}>Fotografia</Typography>
          <Typography sx={{ cursor: 'pointer' }}>Vistorias</Typography>
          <Typography sx={{ cursor: 'pointer' }}>
            Parceria de Reparos
          </Typography>
          <Typography sx={{ cursor: 'pointer' }}>
            Parceria com Portarias
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: 'flex',
            gap: 2,
            backgroundColor: '#2438A1',
          }}
        >
          <Box
            sx={{
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Box>
              <img
                src="https://cozy-assets.quintoandar.com.br/cozy-static/v1/latest/default/logo/QuintoAndar/inverse/complete.pt-BR.svg"
                alt="logo"
              />
            </Box>

            <Typography color="white">
              Para proporcionar uma experiência inesquecível para quem precisa
              de um lar ou anuncia com a gente, o QuintoAndar aposta em design,
              segurança e tecnologia de ponta.
            </Typography>
            <Typography
              sx={{
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Mais informações
              <ArrowForwardIcon />
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginY: 12,
          }}
        >
          <Box sx={{ display: 'flex', gap: 5 }}>
            <Typography
              noWrap
              fontWeight="bold"
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Política de privacidade
              <ArrowForwardIcon />
            </Typography>
            <Typography
              noWrap
              fontWeight="bold"
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Termos e condições de uso
              <ArrowForwardIcon />
            </Typography>
            <Typography
              noWrap
              fontWeight="bold"
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Política de cookies
              <ArrowForwardIcon />
            </Typography>
            <Typography
              noWrap
              fontWeight="bold"
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Manual de usuário
              <ArrowForwardIcon />
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 5 }}>
            <FacebookIcon sx={{ color: '#2438A1' }} />
            <InstagramIcon sx={{ color: '#2438A1' }} />
            <TwitterIcon sx={{ color: '#2438A1' }} />
            <LinkedInIcon sx={{ color: '#2438A1' }} />

            <svg
              style={{ height: '1.5rem' }}
              viewBox="0 0 24 24"
              color="#2438A1"
            >
              <path
                fill="currentColor"
                d="M3 10.39h.689l-.044-4.296 1.546 4.178h.748l1.546-4.178-.044 4.296h.69V5.25H7.11L5.566 9.567 4.02 5.25H3v5.14zm7.802.11c.93 0 1.466-.514 1.67-1.116l-.644-.169c-.125.345-.447.727-1.004.727-.638 0-1.15-.514-1.202-1.204l2.895-.008c.007-.036.014-.124.014-.235 0-1.086-.725-1.887-1.737-1.887-1.033 0-1.832.867-1.832 1.954 0 1.079.711 1.938 1.84 1.938zM9.644 8.253a1.136 1.136 0 011.143-1.094c.667 0 1.056.521 1.078 1.087l-2.221.007zm4.921 2.247c.63 0 1.129-.536 1.29-.918l-.015.808h.66V6.719h-.66v1.894c0 .727-.49 1.307-1.099 1.307-.513 0-.835-.353-.835-1.13V6.718h-.667v2.173c0 1.05.476 1.608 1.326 1.608zM3 17.942h2.762v-.593H3.698V12.75H3v5.192zm4.733.112c.625 0 1.119-.542 1.279-.928l-.015.816h.654v-3.709h-.654v1.914c0 .735-.487 1.32-1.09 1.32-.509 0-.828-.355-.828-1.142v-2.091h-.662v2.195c0 1.06.473 1.625 1.316 1.625zm4.544 1.446c.988 0 1.853-.549 1.853-1.795v-3.471h-.654l.014.778c-.203-.452-.726-.89-1.358-.89-1.003 0-1.708.898-1.708 1.959 0 .994.705 1.869 1.708 1.869.61 0 1.119-.379 1.344-.816v.504c0 .86-.552 1.298-1.2 1.298-.479 0-.944-.185-1.096-.615l-.647.17c.225.638.785 1.009 1.744 1.009zM11.1 16.08c0-.786.537-1.38 1.184-1.38.647 0 1.228.602 1.228 1.388 0 .712-.581 1.283-1.228 1.283-.654-.007-1.184-.578-1.184-1.29zm5.133 1.974c.625 0 1.032-.342 1.206-.623l-.014.511h.654v-2.321c0-1.002-.662-1.499-1.505-1.499-.879 0-1.497.482-1.627 1.068l.61.164c.124-.379.516-.69.981-.69.494 0 .887.363.887.986v.505c-.175-.164-.524-.423-1.127-.423-.763 0-1.395.438-1.395 1.15 0 .72.516 1.172 1.33 1.172zm-.647-1.165c0-.37.29-.668.858-.668.523 0 .995.238.995.609 0 .363-.443.697-.995.697-.545 0-.858-.274-.858-.638zm3.408 1.053h.654v-1.69c0-.824.356-1.403 1.054-1.403.138 0 .29.008.298.008v-.653a1.493 1.493 0 00-.298-.03c-.596 0-.952.52-1.054 1.009h-.029l.03-.95h-.655v3.71z"
              ></path>
            </svg>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            marginY: 4,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              noWrap
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              QuintoAndar Serviços Imobiliários Ltda. - CRECI-SP J24.344
              <Typography
                noWrap
                fontWeight="bold"
                sx={{
                  mx: '16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Política de privacidade
                <ArrowForwardIcon />
              </Typography>
            </Typography>

            <Typography
              noWrap
              variant="body2"
              fontWeight="bold"
              sx={{
                m: '16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Versão: 27/06/2022 17:06
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            marginY: 4,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'row-reverse', gap: 2 }}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=br.com.quintoandar.inquilinos&amp;hl=pt&amp;gl=BR"
            >
              <img
                src="https://www.quintoandar.com.br/img/landing/badge-google-play-1x.png"
                width="122px"
                height="36px"
              />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://apps.apple.com/br/app/quintoandar-im%C3%B3veis/id1109011232"
            >
              <img
                src="https://www.quintoandar.com.br/img/landing/badge-app-store-1x.png"
                width="108px"
                height="36px"
              />
            </a>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
