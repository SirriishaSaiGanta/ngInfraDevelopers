import { useEffect } from 'react';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "NG Infra Developers | Construction Excellence";
    
    // Find the title element and update it
    const titleElement = document.querySelector('title[data-default]');
    if (titleElement) {
      titleElement.textContent = "NG Infra Developers | Construction Excellence";
    }
  }, []);

  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;