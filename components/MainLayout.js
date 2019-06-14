import Header from './Header';
// import Footer from './Footer';
{/* <Footer /> */}

const Layout = props => (
  <section>
    <Header />
    {props.children}
  </section>
);

export default Layout;