import Home from '../components/Home';
import Main from '../components/Main';
import Bot from '../components/Bot';

export default function Index() {
  return (
    <React.Fragment>
    <Bot/>
      <Home/>
      <Main/>
    </React.Fragment>
  );
}