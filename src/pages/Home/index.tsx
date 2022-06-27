import Menu from '../../components/Menu';
import Pessoa from '../../components/Pessoa';
import Logo from '../../assets/images/logo-dark.png';
export default function Home() {
  const links = [
    {
      link: '/',
      title: 'Home',
    },
    {
      link: '/test',
      title: 'Teste',
    },
    {
      link: '/deivid',
      title: 'Deivid',
    },
    {
      link: '/quintoandar',
      title: 'Quinto Andar',
    },
  ];
  return (
    <>
      <h1>Home</h1>
      <img src={Logo} alt="Logo" />
      <Menu items={links} />
      <Pessoa nome="Fulano" idade={99}>
        <Pessoa nome="Vini" idade={18} cidade="Sapiranga" />
        <hr />
      </Pessoa>
    </>
  );
}
