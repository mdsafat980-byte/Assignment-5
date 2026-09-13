import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologyList from './components/TechnologyList';
import Footer from './components/Footer';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch('./data/technologies.json');

        if (!response.ok) {
          throw new Error('Failed to load technologies data');
        }

        const data = await response.json();
        setTechnologies(data);
      } catch (error) {
        toast.error('Unable to load technologies right now. Please refresh the page.');
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const addTechnology = (technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warn(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((currentStack) => [...currentStack, technology]);
    toast.success(`${technology.name} added to your stack.`);
  };

  const removeTechnology = (technologyId) => {
    const removedTechnology = stack.find((item) => item.id === technologyId);

    if (!removedTechnology) {
      return;
    }

    setStack((currentStack) => currentStack.filter((item) => item.id !== technologyId));
    toast.info(`${removedTechnology.name} removed from your stack.`);
  };

  const removeAll = () => {
    if (stack.length === 0) {
      toast.warn('Your stack is already empty.');
      return;
    }

    setStack([]);
    toast.info('All technologies removed from your stack.');
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <TechnologyList
          technologies={technologies}
          stack={stack}
          loading={loading}
          onAddTechnology={addTechnology}
          onRemoveTechnology={removeTechnology}
          onRemoveAll={removeAll}
        />
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;
