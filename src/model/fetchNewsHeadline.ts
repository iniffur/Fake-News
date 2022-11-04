type newsHeadlineData = {
  status: string;
  totalResults: number;
  articles: Array<{
    title: string;
    author: string;
    source: {
      Id: string;
      Name: string;
    };
    publishedAt: string;
    url: URL;
  }>;
};

async function fetchNewsHeadline(url: string): Promise<newsHeadlineData> {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<newsHeadlineData>;
  });
}

export default fetchNewsHeadline;
