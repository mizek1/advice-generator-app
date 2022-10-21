import { useEffect, useState } from 'react';
import '../styles/main.less';

export default function AdviceCard() {
  const [id, setId] = useState(0);
  const [quote, setQuote] = useState('');

  const generateNewQuote = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => {
        setId(data.slip.id);
        setQuote(data.slip.advice);
      });
  };

  useEffect(() => {
    generateNewQuote();
  }, []);

  return (
    <main>
      <h1>Advice #{id}</h1>
      <p>"{quote}"</p>
      <picture>
        <source
          srcSet="/public/pattern-divider-mobile.svg"
          media="(max-width: 800px)"
        />
        <img src="/public/pattern-divider-desktop.svg" alt="divider" />
      </picture>
      <button onClick={generateNewQuote}>
        <img src="/public/icon-dice.svg" alt="refresh" />
      </button>
    </main>
  );
}
