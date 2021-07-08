import React, { useEffect, useState } from 'react';
import { getOpenGraph } from '../getOpenGraph';

export function OpengraphCard() {
  const [ogData, setOgData] = useState();

  useEffect(() => {
    const data = getOpenGraph(
      'https://www.oreilly.com/library/view/javascript-the-good/9780596517748/'
    );
    console.log('data :', data);
    setOgData(data);
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(ogData)}</pre>
    </div>
  );
}
