type googleFactCheckerData = {
  claims: Array<{
    text: string;
    claimant: number;
    claimDate: string;
    claimReview: Array<{
      publisher: {
        name: string;
        site: string;
      };
      url: string;
      title: string;
      reviewDate: string;
      textualRating: string;
      languageCode: string;
    }>;
  }>;
};

async function fetchGoogleData(url: string): Promise<googleFactCheckerData> {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<googleFactCheckerData>;
  });
}

export default fetchGoogleData;
