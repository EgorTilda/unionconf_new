import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div class="navbar__inner">
        <Link href="#" class="navbar__link navbar__link--active navbar__link--line">Главная</Link>
        <Link href="#" class="navbar__link">О платформе</Link>
        <Link href="#" class="navbar__link">Преимущества</Link>
        <Link href="#" class="navbar__link">Локации</Link>
        <Link href="#" class="navbar__link">Функционал</Link>
      </div>
      
    </nav>
  );
};

export default Navbar;
