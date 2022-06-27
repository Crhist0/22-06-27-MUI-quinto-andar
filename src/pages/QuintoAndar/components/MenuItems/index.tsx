import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type MenuItemsProps = {
  title: string;
  list?: string[];
  // list: Array<string>
};

const style = { color: 'text.primary', fontWeight: 'bold' };

export default function MenuItems(props: MenuItemsProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (props.list) {
    return (
      <div>
        <Button
          sx={style}
          id="basic-button"
          onClick={handleClick}
          onMouseOver={handleClick}
        >
          {props.title}
          <KeyboardArrowDownIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            onMouseLeave: handleClose,
          }}
        >
          {props.list.map((item) => {
            return (
              <MenuItem sx={style} onClick={handleClose}>
                {item}
              </MenuItem>
            );
          })}
        </Menu>
      </div>
    );
  }

  return (
    <Button sx={style} variant="text">
      {props.title}
    </Button>
  );
}
