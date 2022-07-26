

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '1f6c774280mshbd3b108dbe1033bp176a90jsndf0ae21c8e8e'
	
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';


const createRequest = (url) => ({ url, headers: cryptoApiHeaders});

export const cryptoNewsApi = createApi({

    reducerPath: 'cryptoNewsApi', 
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
    getCryptoNews: builder.query({
        query: (newsCategory, count) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
       
    })
})

});

export const {
    useGetCryptoNewsQuery,

}= cryptoNewsApi;