import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div class="navbar__inner">
        <Link href="#main" class="navbar__link navbar__link--line">Главная</Link>
        <Link href="#about" class="navbar__link">О платформе</Link>
        <Link href="#benefits" class="navbar__link">Преимущества</Link>
        <Link href="#spaces" class="navbar__link">Локации</Link>
        <Link href="#scale" class="navbar__link">Функционал</Link>
      </div>
      
    </nav>
  );
};

export default Navbar;
