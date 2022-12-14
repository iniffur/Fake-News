import fetchEmotionalAnalysisData from "./fetchEmotionalAnalysisData";

class EmotionalAnalysisFormatter {
  outputEmotionalAnalysis = async (query: string) => {
    const emotionalAnalysis = await fetchEmotionalAnalysisData(
      "https://emodex-emotions-analysis.p.rapidapi.com/rapidapi/emotions",
      query
    );
    return Object.values(emotionalAnalysis.sentence).slice(0, -1);
  };

  // outputEmotionalAnalysis = () => {
  //   const emotionScoresArray = Object.values(varLampard.sentence);
  //   return emotionScoresArray.slice(0, -1);
  // };

  outputObject = async (query: string) => {
    const emotionalAnalysis = await fetchEmotionalAnalysisData(
      "https://emodex-emotions-analysis.p.rapidapi.com/rapidapi/emotions",
      query
    );
    return emotionalAnalysis.sentence;
  };
}

// const varLampard = {
//   sentence: {
//     anger: 0.305,
//     disgust: 0.115,
//     fear: 0.28,
//     joy: 0.08666666666666666,
//     love: 0.015,
//     noemo: 0.03,
//     sadness: 0.2533333333333333,
//     surprise: 0.105,
//     text: "Everton suffer more VAR agony as Frank Lampard faces obvious Anthony Gordon and Demarai Gray question",
//   },
// };

export default EmotionalAnalysisFormatter;
