export const getOpenGraph = async (url) => {
  const res = await fetch(url, {
    method: 'HEAD',
    mode: 'no-cors',
  });
  const json = await res.text();
  console.log('json :', json);
  return json;
};
