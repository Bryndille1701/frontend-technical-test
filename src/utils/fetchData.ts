const fetchData = async <T>(req: string): Promise<T | Error> => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${req}`)
    .then((res) => {
      return res.json().catch((err) => ({ error: err }));
    })
    .catch((err) => {
      console.log(err);
      return new Error(`Erreur : ${err}`);
    });
};

export default fetchData;
