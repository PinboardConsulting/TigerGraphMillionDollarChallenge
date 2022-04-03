import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }

  async get_2metrics_for_allCountries(metric1:string, metric2:string, year:number) {

    const data = await (await fetch('https://corsbypass.netlify.app/.netlify/functions/api/request',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        url:`https://vdn.i.tgcloud.io:14240/restpp/query/UN_dataset/all_countries_2_metrics_1_year?met1=${metric1}&met2=${metric2}&someyear=${year}`,
        token:'7a5jspkahtgg6qdnsefojt5t232afta1'
      }),
    })).json();

    return data;
  }
}
