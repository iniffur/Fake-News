import fetchBiasData from "./fetchPoliticalBias";


class PoliticalBiasFormatter {
    outputBiasValue = async (query: string) => {
        const biasData: any = await fetchBiasData("https://api.thebipartisanpress.com/api/endpoints/beta/robert", query);
        if (biasData === null) {
return "invalid input"
        } if (query.length <= 50) {return biasData * 17}
        else if (query.length <= 150) {return biasData * 10}
        else if (query.length <= 300) {return biasData * 5}
        else {return biasData}}
}

export default PoliticalBiasFormatter;
