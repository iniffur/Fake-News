type politicalBiasCheckerData = {
    result: number
    };
    
    async function fetchBiasData(
        url:string, input:string): Promise<politicalBiasCheckerData> {
            
            const options = {
                method: "POST",
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'cache-control': 'no-store'
                  }, 
                body: `API=${process.env.BIAS_API_KEY}&Text=${input}`,
            };
            return fetch(url, options).then((response: any) => {
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json() as Promise<politicalBiasCheckerData>;
            });
        }
    
        export default fetchBiasData;