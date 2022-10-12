const postData = async <T>(req: string, body: any): Promise<T> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${req}`, {
    method: 'POST',
    body: body,
  });
  return response.json().catch((err) => ({ error: err }));
};

export default postData;
