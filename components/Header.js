import Link from 'next/link';

const Header = () => (
  <header>
    <Link href="/">
      <a title="home">Home</a>
    </Link>
    <Link href="/about">
      <a title="about">About</a>
    </Link>
  </header>
);

export default Header;
