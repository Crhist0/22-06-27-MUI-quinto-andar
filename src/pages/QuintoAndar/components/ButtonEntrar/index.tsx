import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import { Box } from '@mui/material';

export default function ButtonEntrar() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button
        onMouseOver={handleClick}
        sx={{ height: '56px', borderRadius: '0px', fontWeight: 'bold' }}
        variant="outlined"
      >
        <AccountCircleOutlinedIcon
          fontSize="small"
          sx={{ marginRight: '8px' }}
        />
        Entrar
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, py: 1 }}>
          <Typography
            sx={{ mx: 2 }}
            variant="caption"
            noWrap
            color="text.secondary"
          >
            Entre para ver seus favoritos, visitas, propostas e aluguéis
          </Typography>
          <Button
            size="large"
            sx={{ mx: 2, borderRadius: '0px' }}
            variant="contained"
          >
            Entrar
          </Button>
          <Button variant="text" sx={buttonStyle}>
            <FavoriteBorderOutlinedIcon sx={{ marginRight: '8px' }} />
            Favoritos e listas
          </Button>
          <Button variant="text" sx={buttonStyle}>
            <CalendarMonthOutlinedIcon sx={{ marginRight: '8px' }} />
            Visitas agendadas
          </Button>
          <Button variant="text" sx={buttonStyle}>
            <AccountCircleOutlinedIcon sx={{ marginRight: '8px' }} />
            Propostas enviadas
          </Button>
          <Button variant="text" sx={buttonStyle}>
            <KeyOutlinedIcon sx={{ marginRight: '8px' }} />
            Contratos e boletos
          </Button>
        </Box>
      </Popover>
    </div>
  );
}

const buttonStyle = {
  display: 'flex',
  justifyContent: 'start',
  padding: '8px 16px',
};
