import { Link } from 'react-router-dom';

type PropsMenu = {
  items: MenuItem[];
};

type MenuItem = {
  title: string;
  link: string;
};

export default function Menu({ items }: PropsMenu) {
  return (
    <>
      <h2>Menu</h2>
      <nav>
        <ul>
          {items.map((item) => {
            return (
              <li>
                <Link to={item.link}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
