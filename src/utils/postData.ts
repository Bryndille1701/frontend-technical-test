const postData = async <T>(req: string, body: any): Promise<T | Error> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${req}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json().catch((err) => ({ error: err }));
};

export default postData;
