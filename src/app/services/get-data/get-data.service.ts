import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }
  
  private readonly Observable_data = new BehaviorSubject(undefined);
  getData = this.Observable_data.asObservable();

  countryList:any =
  { 
  'Åland Islands': 248,
  Zimbabwe: 716,
  Zambia: 894,
  Yugoslavia: 891,
  Yemen: 887,
  'Western Sahara': 732,
  'Wallis and Futuna': 876,
  'Virgin Islands': 850,
  'Virgin Islands (British)': 92,
  'Vietnam': 704,
  'Venezuela': 862,
  Vanuatu: 548,
  Uzbekistan: 860,
  Uruguay: 858,
  'United States': 840,
  'United States Minor Outlying Islands': 581,
  'United Kingdom of Great Britain and Northern Ireland': 826,
  'United Kingdom': 784,
  Ukraine: 804,
  Uganda: 800,
  Tuvalu: 798,
  'Turks and Caicos Islands': 796,
  Turkmenistan: 795,
  Turkey: 792,
  Tunisia: 788,
  'Trinidad and Tobago': 780,
  Tonga: 776,
  Tokelau: 772,
  Togo: 768,
  'Timor-Leste': 626,
  Thailand: 764,
  'Tanzania - Mainland': 834,
  Tajikistan: 762,
  'Taiwan- Province of China': 158,
  'Syrian Arab Republic': 760,
  Switzerland: 756,
  Sweden: 752,
  'Svalbard and Jan Mayen': 744,
  Suriname: 740,
  Sudan: 729,
  'State of Palestine': 275,
  'Sri Lanka': 144,
  Spain: 724,
  'South Sudan': 728,
  'South Georgia and the South Sandwich Islands': 239,
  'South Africa': 710,
  Somalia: 706,
  'Solomon Islands': 90,
  Slovenia: 705,
  Slovakia: 703,
  'Sint Maarten (Dutch part)': 534,
  'Sint Maarten': 663,
  Singapore: 702,
  'Sierra Leone': 694,
  Seychelles: 690,
  Serbia: 688,
  Senegal: 686,
  'Saudi Arabia': 682,
  'Sao Tome and Principe': 678,
  'San Marino': 674,
  Samoa: 882,
  'Saint Vincent and the Grenadines': 670,
  'Saint Pierre and Miquelon': 666,
  'Saint Lucia': 662,
  'Saint Kitts and Nevis': 659,
  'Saint Helena- Ascension and Tristan da Cunha': 654,
  'Saint Barthélemy': 652,
  'Réunion': 638,
  Rwanda: 646,
  'Russia': 643,
  Romania: 642,
  'Republic of Moldova': 498,
  'South Korea': 410,
  Qatar: 634,
  'Puerto Rico': 630,
  Portugal: 620,
  Poland: 616,
  Pitcairn: 612,
  Philippines: 608,
  Peru: 604,
  Paraguay: 600,
  'Papua New Guinea': 598,
  Panama: 591,
Palau: 585,
  Pakistan: 586,
  Oman: 512,
  Norway: 578,
  'Northern Mariana Islands': 580,
  'North Macedonia': 807,
  'North Korea': 408,
  'Norfolk Island': 574,
  Niue: 570,
  Nigeria: 566,
  Niger: 562,
  Nicaragua: 558,
  'New Zealand': 554,
  'New Caledonia': 540,
  Netherlands: 528,
  Nepal: 524,
  Nauru: 520,
  Namibia: 516,
  Myanmar: 104,
  Mozambique: 508,
  Morocco: 504,
  Montserrat: 500,
  Montenegro: 499,
  Mongolia: 496,
  Monaco: 492,
  'Micronesia': 583,
  Mexico: 484,
  Mayotte: 175,
  Mauritius: 480,
  Mauritania: 478,
  Martinique: 474,
  'Marshall Islands': 584,
  Malta: 470,
  Mali: 466,
  Maldives: 462,
  Malaysia: 458,
  Malawi: 454,
  Madagascar: 450,
  Luxembourg: 442,
  Lithuania: 440,
  Liechtenstein: 438,
  Libya: 434,
  Liberia: 430,
  Lesotho: 426,
  Lebanon: 422,
  Latvia: 428,
  'Lao People\'s Democratic Republic': 418,
  Kyrgyzstan: 417,
  Kuwait: 414,
  Kiribati: 296,
  Kenya: 404,
  Kazakhstan: 398,
  Jordan: 400,
  Jersey: 832,
  Japan: 392,
  Jamaica: 388,
  Italy: 380,
  Israel: 376,
  'Isle of Man': 833,
  Ireland: 372,
  Iraq: 368,
  'Iran': 364,
  Indonesia: 360,
  India: 356,
  Iceland: 352,
  Hungary: 348,
  Honduras: 340,
  'Holy See': 336,
  'Heard Island and McDonald Islands': 334,
  Haiti: 332,
  Guyana: 328,
  'Guinea-Bissau': 624,
  Guinea: 324,
  Guernsey: 831,
  Guatemala: 320,
  Guam: 316,
  Guadeloupe: 312,
  Grenada: 308,
  Greenland: 304,
  Greece: 300,
  Gibraltar: 292,
  Ghana: 288,
  Germany: 276,
  Georgia: 268,
  Gambia: 270,
  Gabon: 266,
  'French Southern Territories': 260,
  'French Polynesia': 258,
  'French Guiana': 254,
  France: 250,
  Finland: 246,
  Fiji: 242,
  'Faroe Islands': 234,
  'Falkland Islands': 238,
  'European Union': 231,
  Eswatini: 748,
  Estonia: 233,
  Eritrea: 232,
  'Equatorial Guinea': 226,
  'El Salvador': 222,
  Egypt: 818,
  Ecuador: 218,
  'Dominican Republic': 214,
  Dominica: 212,
  Djibouti: 262,
  Denmark: 208,
  'Ivory Coast': 384,
  Czechia: 203,
  Cyprus: 196,
  'Curaçao': 531,
  Cuba: 192,
  Croatia: 191,
  'Costa Rica': 188,
  'Cook Islands': 184,
  'Congo- Democratic Republic of the': 180,
  Congo: 178,
  Comoros: 174,
  Colombia: 170,
  'Cocos Islands': 166,
  'Christmas Island': 162,
  'China- Macao Special Administrative Region': 446,
  'China- Hong Kong Special Administrative Region': 344,
  China: 156,
  Chile: 152,
  Chad: 148,
  'Central African Republic': 140,
  'Cayman Islands': 136,
  Canada: 124,
  Cameroon: 120,
  Cambodia: 116,
  'Cabo Verde': 132,
  Burundi: 108,
  'Burkina Faso': 854,
  Bulgaria: 100,
  'Brunei Darussalam': 96,
  'British Indian Ocean Territory': 86,
  Brazil: 76,
  'Bouvet Island': 74,
  Botswana: 72,
  'Bosnia and Herzegovina': 70,
  'Bonaire- Sint Eustatius and Saba': 535,
  'Bolivia': 68,
  Bhutan: 64,
  Bermuda: 60,
  Benin: 204,
  Belize: 84,
  Belgium: 56,
  Belarus: 112,
  Barbados: 52,
  Bangladesh: 50,
  Bahrain: 48,
  Bahamas: 44,
  Azerbaijan: 31,
  Austria: 40,
  Australia: 36,
  Aruba: 533,
  Armenia: 51,
  Argentina: 32,
  'Antigua and Barbuda': 28,
  Antarctica: 10,
  Anguilla: 660,
  Angola: 24,
  Andorra: 20,
  'American Samoa': 16,
  Algeria: 12,
  Albania: 8,
  Afghanistan: 4 
};

tableData:any = [];
tableHeader:any = [];
loadCounter = 0;
metricList =[ 'CO2',
'Final consumption expenditure - Constant',
'CH4',
'Total refugees and people in refugee-like situations assisted by UNHCR',
'PFCs',
'Refugees',
'Refugees assisted by UNHCR',
'HFCs',
'NF3',
'Gross capital formation - Constant',
'Less:  Imports of goods and services - Constant',
'N2O',
'Final consumption expenditure - current',
'Exports of goods and services - Constant',
'Homicide',
'Less:  Imports of goods and services - current',
'Exports of goods and services - current',
'GDP - Constant',
'inbound',
'Total refugees and people in refugee-like situations',
'outbound',
'Equals: GROSS DOMESTIC PRODUCT - current',
'Gross capital formation - current' ];

  selectedCountries = [];
  selectedMetices = [];
  yearRange = [2012,2013];

  token = "3lgh4lvl86t3etr038720ti11ilsnhak";
  // token = "7a5jspkahtgg6qdnsefojt5t232afta1";
  corsBypass = 'https://4be2-117-216-7-181.in.ngrok.io/request';
  metricUrl = "https://28544b4eae384c8dabf7ee5d40d80c2f.i.tgcloud.io:14240/restpp/query/UN_Data/generalised_query_main?";

  setData(data:any){
    this.Observable_data.next(data);
  }

  loadData =  this.debounce(() => {
    const _country = this.selectedCountries;
    const _metric  = this.selectedMetices;
    const _yearList = [];
    let _url = this.metricUrl;
    for(let i = this.yearRange[0]; i <= this.yearRange[1]; i++){
      _yearList.push(i);
    } 
    _country.forEach(code => _url = _url + `&country=${code}&country.type=Country`);
    _metric.forEach(metric => _url = _url + `&mets=${metric}&mets.type=Metric_Type`);
    _yearList.forEach(year => _url = _url + `&years=${year}`);
    _url = _url.replace('generalised_query_1?&', 'generalised_query_1?');

    if(_metric.length>1){
      console.log(_url);
      this.getAllData(_url);
    // this.parseData_newSchema(this.data);
    }
  });

  private async fetchData(url:String, token:String = this.token) {
    $('.loaderWrapper').fadeIn();
    this.loadCounter+=1;
    const data = await (await fetch(this.corsBypass,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({ url, token}),
    })).json();
    this.loadCounter-=1;
    if(this.loadCounter ==0){
      $('.loaderWrapper').fadeOut();
    }
    return data;
  }


  async getAllData(url:String){
      const data = await this.fetchData(url);
      this.parseData_newSchema(data);
  }
 
  debounce(cb:any, delay = 700) {
    let timeout:any;
    return (...args:any) => {
      clearTimeout(timeout) 
      timeout = setTimeout(() => {
        cb(...args)
      }, delay)
    }
  } 

  

  parseData_newSchema(data:any){
    const dataOBJ:any = {};
    data.data.results[0]["@@test_tuple"].forEach((item:any)=>{
      if(!dataOBJ[`${item.countryname}_${item.yearReported}`]){
        dataOBJ[`${item.countryname}_${item.yearReported}`] = {
          country: item.countryname,
          countryCode: item.countrycode,
          year: item.yearReported,
          data: [
            {
              metric: item.metricName,
              value: item.MetricValue,
            }
          ],
        };

        dataOBJ[`${item.countryname}_${item.yearReported}`][item.metricName] = item.MetricValue;
      } else {
        dataOBJ[`${item.countryname}_${item.yearReported}`].data.push({
          metric: item.metricName,
          value: item.MetricValue,
        });
        dataOBJ[`${item.countryname}_${item.yearReported}`][item.metricName] = item.MetricValue;
      }
    });

    this.tableData = Object.values(dataOBJ);
    this.tableHeader = [
        {name:"country"},
        {name:"year"},
    ]
    this.selectedMetices.forEach(x => {
        this.tableHeader.push({name:x});
    })

    
    this.setData({tableData:this.tableData,tableHeader:this.tableHeader});
  }
}
