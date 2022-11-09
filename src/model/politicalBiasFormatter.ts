import fetchBiasData from "./fetchPoliticalBias";

class PoliticalBiasFormatter {
  outputBiasValue = async (query: string) => {
    let biasData: any = await fetchBiasData(
      "https://api.thebipartisanpress.com/api/endpoints/beta/robert",
      query
    );
    if (biasData === null) {
      return "invalid input";
    }

    biasData = (biasData / 42) * 100;

    console.log(biasData);

    if (biasData > 100 || biasData < -100) {
      return 100;
    } else {
      return Math.round(biasData);
    }
  };
}

export default PoliticalBiasFormatter;
