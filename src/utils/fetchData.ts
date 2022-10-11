const fetchData = async <T>(req: string): Promise<T> => {
  const response = await fetch(`${process.env.API_URL}${req}`);
  return response.json().catch((err) => ({ error: err }));
};

export default fetchData;
