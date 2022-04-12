import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  yearRange = [2012,2018];

  token = "kjp3vg918bruhqghcben3ltndol7tje0";
  // token = "7a5jspkahtgg6qdnsefojt5t232afta1";
  corsBypass = 'https://corsbypass.netlify.app/.netlify/functions/api/request';
  metricUrl = "https://undata.i.tgcloud.io:14240/restpp/query/UN_Data_test/generalised_query_1?";

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


    this.getDataFor2metrics(_metric[0],_metric[1],_yearList[0]);
  });

  private async fetchData(url:string, token:string = this.token) {
    const data = await (await fetch(this.corsBypass,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({ url, token}),
    })).json();

    return data;
  }

  async getDataFor2metrics(metric1:string, metric2:string, year:number){
      console.log(metric1, metric2, year);
      if(metric1 && metric2 && year){
        const data = await this.fetchData(
            `https://undata.i.tgcloud.io:14240/restpp/query/UN_Data_test/all_countries_2_metrics_1_year?met1=${metric1}&met2=${metric2}&someyear=${year}`
            );
          console.log(data);
      }

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

  data = {
    "data": {
        "version": {
            "edition": "enterprise",
            "api": "v2",
            "schema": 104
        },
        "error": false,
        "message": "",
        "results": [
            {
                "@@data_tuple": [
                    {
                        "countryname": "Afghanistan",
                        "value": 20.8
                    },
                    {
                        "countryname": "Albania",
                        "value": 47.6
                    },
                    {
                        "countryname": "Algeria",
                        "value": 84.1
                    },
                    {
                        "countryname": "Andorra",
                        "value": 76.6
                    },
                    {
                        "countryname": "Angola",
                        "value": 62.2
                    },
                    {
                        "countryname": "Antigua and Barbuda",
                        "value": 75.4
                    },
                    {
                        "countryname": "Argentina",
                        "value": 69.2
                    },
                    {
                        "countryname": "Armenia",
                        "value": 41.9
                    },
                    {
                        "countryname": "Australia",
                        "value": 66.9
                    },
                    {
                        "countryname": "Austria",
                        "value": 75.6
                    },
                    {
                        "countryname": "Azerbaijan",
                        "value": 22.8
                    },
                    {
                        "countryname": "Bahamas",
                        "value": 46.1
                    },
                    {
                        "countryname": "Bahrain",
                        "value": 71.9
                    },
                    {
                        "countryname": "Bangladesh",
                        "value": 34.4
                    },
                    {
                        "countryname": "Barbados",
                        "value": 65.6
                    },
                    {
                        "countryname": "Belarus",
                        "value": 77.2
                    },
                    {
                        "countryname": "Belgium",
                        "value": 75.9
                    },
                    {
                        "countryname": "Belize",
                        "value": 64.9
                    },
                    {
                        "countryname": "Benin",
                        "value": 51.5
                    },
                    {
                        "countryname": "Bhutan",
                        "value": 83.9
                    },
                    {
                        "countryname": "Bolivia (Plurinational State of)",
                        "value": 71.8
                    },
                    {
                        "countryname": "Bosnia and Herzegovina",
                        "value": 71.2
                    },
                    {
                        "countryname": "Botswana",
                        "value": 56.4
                    },
                    {
                        "countryname": "Brazil",
                        "value": 46.4
                    },
                    {
                        "countryname": "Brunei Darussalam",
                        "value": 91.8
                    },
                    {
                        "countryname": "Bulgaria",
                        "value": 56.3
                    },
                    {
                        "countryname": "Burkina Faso",
                        "value": 54.3
                    },
                    {
                        "countryname": "Burundi",
                        "value": 59.5
                    },
                    {
                        "countryname": "Cabo Verde",
                        "value": 77.4
                    },
                    {
                        "countryname": "Cambodia",
                        "value": 24.7
                    },
                    {
                        "countryname": "Cameroon",
                        "value": 33.5
                    },
                    {
                        "countryname": "Canada",
                        "value": 70.1
                    },
                    {
                        "countryname": "Central African Republic",
                        "value": 49.7
                    },
                    {
                        "countryname": "Chad",
                        "value": 31.3
                    },
                    {
                        "countryname": "Chile",
                        "value": 48.6
                    },
                    {
                        "countryname": "China",
                        "value": 56
                    },
                    {
                        "countryname": "Colombia",
                        "value": 75.8
                    },
                    {
                        "countryname": "Comoros",
                        "value": 55.9
                    },
                    {
                        "countryname": "Congo",
                        "value": 73.9
                    },
                    {
                        "countryname": "Cook Islands",
                        "value": 91.1
                    },
                    {
                        "countryname": "Costa Rica",
                        "value": 74.6
                    },
                    {
                        "countryname": "Croatia",
                        "value": 82.3
                    },
                    {
                        "countryname": "Cuba",
                        "value": 94.2
                    },
                    {
                        "countryname": "Cyprus",
                        "value": 43.1
                    },
                    {
                        "countryname": "Czech Republic",
                        "value": 84.8
                    },
                    {
                        "countryname": "Côte dIvoire",
                        "value": 27.5
                    },
                    {
                        "countryname": "Democratic Republic of the Congo",
                        "value": 51.4
                    },
                    {
                        "countryname": "Denmark",
                        "value": 85.5
                    },
                    {
                        "countryname": "Djibouti",
                        "value": 59.7
                    },
                    {
                        "countryname": "Dominica",
                        "value": 72
                    },
                    {
                        "countryname": "Dominican Republic",
                        "value": 50.9
                    },
                    {
                        "countryname": "Ecuador",
                        "value": 44.8
                    },
                    {
                        "countryname": "Egypt",
                        "value": 39
                    },
                    {
                        "countryname": "El Salvador",
                        "value": 62.8
                    },
                    {
                        "countryname": "Equatorial Guinea",
                        "value": 54.3
                    },
                    {
                        "countryname": "Eritrea",
                        "value": 47.5
                    },
                    {
                        "countryname": "Estonia",
                        "value": 79.9
                    },
                    {
                        "countryname": "Ethiopia",
                        "value": 48.4
                    },
                    {
                        "countryname": "Ethiopia",
                        "value": 48.4
                    },
                    {
                        "countryname": "Fiji",
                        "value": 64.9
                    },
                    {
                        "countryname": "Finland",
                        "value": 75.4
                    },
                    {
                        "countryname": "France",
                        "value": 77
                    },
                    {
                        "countryname": "Gabon",
                        "value": 51.2
                    },
                    {
                        "countryname": "Gambia",
                        "value": 66
                    },
                    {
                        "countryname": "Georgia",
                        "value": 18
                    },
                    {
                        "countryname": "Germany",
                        "value": 76.3
                    },
                    {
                        "countryname": "Ghana",
                        "value": 57.1
                    },
                    {
                        "countryname": "Greece",
                        "value": 67.5
                    },
                    {
                        "countryname": "Grenada",
                        "value": 46.6
                    },
                    {
                        "countryname": "Guatemala",
                        "value": 39.5
                    },
                    {
                        "countryname": "Guinea",
                        "value": 28.1
                    },
                    {
                        "countryname": "Guinea-Bissau",
                        "value": 22.7
                    },
                    {
                        "countryname": "Guyana",
                        "value": 66.1
                    },
                    {
                        "countryname": "Haiti",
                        "value": 22.8
                    },
                    {
                        "countryname": "Honduras",
                        "value": 50.3
                    },
                    {
                        "countryname": "Hungary",
                        "value": 63.6
                    },
                    {
                        "countryname": "Iceland",
                        "value": 80.7
                    },
                    {
                        "countryname": "India",
                        "value": 33.1
                    },
                    {
                        "countryname": "Indonesia",
                        "value": 39.6
                    },
                    {
                        "countryname": "Iran (Islamic Republic of)",
                        "value": 40.4
                    },
                    {
                        "countryname": "Iraq",
                        "value": 53.6
                    },
                    {
                        "countryname": "Ireland",
                        "value": 64.5
                    },
                    {
                        "countryname": "Israel",
                        "value": 61.7
                    },
                    {
                        "countryname": "Italy",
                        "value": 78.2
                    },
                    {
                        "countryname": "Jamaica",
                        "value": 54.9
                    },
                    {
                        "countryname": "Japan",
                        "value": 82.5
                    },
                    {
                        "countryname": "Jordan",
                        "value": 63.1
                    },
                    {
                        "countryname": "Kazakhstan",
                        "value": 57.8
                    },
                    {
                        "countryname": "Kenya",
                        "value": 38.1
                    },
                    {
                        "countryname": "Kiribati",
                        "value": 82.6
                    },
                    {
                        "countryname": "Kuwait",
                        "value": 82.5
                    },
                    {
                        "countryname": "Kyrgyzstan",
                        "value": 60.1
                    },
                    {
                        "countryname": "Lao Peoples Democratic Republic",
                        "value": 51.2
                    },
                    {
                        "countryname": "Latvia",
                        "value": 56.7
                    },
                    {
                        "countryname": "Lebanon",
                        "value": 37.9
                    },
                    {
                        "countryname": "Lesotho",
                        "value": 78.6
                    },
                    {
                        "countryname": "Liberia",
                        "value": 29.8
                    },
                    {
                        "countryname": "Libya",
                        "value": 77.3
                    },
                    {
                        "countryname": "Lithuania",
                        "value": 70.8
                    },
                    {
                        "countryname": "Luxembourg",
                        "value": 84.5
                    },
                    {
                        "countryname": "Madagascar",
                        "value": 60.8
                    },
                    {
                        "countryname": "Malawi",
                        "value": 76.5
                    },
                    {
                        "countryname": "Malaysia",
                        "value": 55
                    },
                    {
                        "countryname": "Maldives",
                        "value": 45.3
                    },
                    {
                        "countryname": "Mali",
                        "value": 39
                    },
                    {
                        "countryname": "Malta",
                        "value": 65.6
                    },
                    {
                        "countryname": "Marshall Islands",
                        "value": 82.6
                    },
                    {
                        "countryname": "Mauritania",
                        "value": 63.9
                    },
                    {
                        "countryname": "Mauritius",
                        "value": 48.9
                    },
                    {
                        "countryname": "Mexico",
                        "value": 51.8
                    },
                    {
                        "countryname": "Micronesia (Federated States of)",
                        "value": 90.3
                    },
                    {
                        "countryname": "Monaco",
                        "value": 88.6
                    },
                    {
                        "countryname": "Mongolia",
                        "value": 62.8
                    },
                    {
                        "countryname": "Montenegro",
                        "value": 59.7
                    },
                    {
                        "countryname": "Morocco",
                        "value": 33.5
                    },
                    {
                        "countryname": "Mozambique",
                        "value": 44.3
                    },
                    {
                        "countryname": "Myanmar",
                        "value": 23.9
                    },
                    {
                        "countryname": "Namibia",
                        "value": 61.7
                    },
                    {
                        "countryname": "Nauru",
                        "value": 87.2
                    },
                    {
                        "countryname": "Nepal",
                        "value": 39.5
                    },
                    {
                        "countryname": "Netherlands",
                        "value": 79.8
                    },
                    {
                        "countryname": "New Zealand",
                        "value": 82.7
                    },
                    {
                        "countryname": "Nicaragua",
                        "value": 54.3
                    },
                    {
                        "countryname": "Niger",
                        "value": 39.7
                    },
                    {
                        "countryname": "Nigeria",
                        "value": 31.2
                    },
                    {
                        "countryname": "Niue",
                        "value": 98.2
                    },
                    {
                        "countryname": "Norway",
                        "value": 85.1
                    },
                    {
                        "countryname": "Oman",
                        "value": 80.4
                    },
                    {
                        "countryname": "Pakistan",
                        "value": 31.4
                    },
                    {
                        "countryname": "Palau",
                        "value": 77.1
                    },
                    {
                        "countryname": "Panama",
                        "value": 68.6
                    },
                    {
                        "countryname": "Panama",
                        "value": 68.6
                    },
                    {
                        "countryname": "Papua New Guinea",
                        "value": 83.1
                    },
                    {
                        "countryname": "Paraguay",
                        "value": 42
                    },
                    {
                        "countryname": "Peru",
                        "value": 58.9
                    },
                    {
                        "countryname": "Philippines",
                        "value": 37.7
                    },
                    {
                        "countryname": "Poland",
                        "value": 70.1
                    },
                    {
                        "countryname": "Portugal",
                        "value": 62.6
                    },
                    {
                        "countryname": "Qatar",
                        "value": 83.6
                    },
                    {
                        "countryname": "Republic of Korea",
                        "value": 54.4
                    },
                    {
                        "countryname": "Republic of Moldova",
                        "value": 45.5
                    },
                    {
                        "countryname": "Romania",
                        "value": 77.7
                    },
                    {
                        "countryname": "Russian Federation",
                        "value": 61
                    },
                    {
                        "countryname": "Rwanda",
                        "value": 57.3
                    },
                    {
                        "countryname": "Saint Kitts and Nevis",
                        "value": 39.3
                    },
                    {
                        "countryname": "Saint Lucia",
                        "value": 55.2
                    },
                    {
                        "countryname": "Saint Vincent and the Grenadines",
                        "value": 82.1
                    },
                    {
                        "countryname": "Samoa",
                        "value": 88.3
                    },
                    {
                        "countryname": "San Marino",
                        "value": 87.2
                    },
                    {
                        "countryname": "Sao Tome and Principe",
                        "value": 31.7
                    },
                    {
                        "countryname": "Saudi Arabia",
                        "value": 65.8
                    },
                    {
                        "countryname": "Senegal",
                        "value": 55.9
                    },
                    {
                        "countryname": "Serbia",
                        "value": 61.2
                    },
                    {
                        "countryname": "Seychelles",
                        "value": 93.3
                    },
                    {
                        "countryname": "Sierra Leone",
                        "value": 16.6
                    },
                    {
                        "countryname": "Singapore",
                        "value": 37.6
                    },
                    {
                        "countryname": "Slovakia",
                        "value": 70.5
                    },
                    {
                        "countryname": "Slovenia",
                        "value": 73.3
                    },
                    {
                        "countryname": "Solomon Islands",
                        "value": 96.2
                    },
                    {
                        "countryname": "South Africa",
                        "value": 47.9
                    },
                    {
                        "countryname": "South Sudan",
                        "value": 38.7
                    },
                    {
                        "countryname": "Spain",
                        "value": 73.6
                    },
                    {
                        "countryname": "Sri Lanka",
                        "value": 39.8
                    },
                    {
                        "countryname": "Sudan",
                        "value": 23.4
                    },
                    {
                        "countryname": "Sudan",
                        "value": 23.4
                    },
                    {
                        "countryname": "Suriname",
                        "value": 57
                    },
                    {
                        "countryname": "Swaziland",
                        "value": 74.1
                    },
                    {
                        "countryname": "Sweden",
                        "value": 81.7
                    },
                    {
                        "countryname": "Switzerland",
                        "value": 61.7
                    },
                    {
                        "countryname": "Syrian Arab Republic",
                        "value": 46.1
                    },
                    {
                        "countryname": "Tajikistan",
                        "value": 29.7
                    },
                    {
                        "countryname": "Thailand",
                        "value": 76.4
                    },
                    {
                        "countryname": "The former Yugoslav Republic of Macedonia",
                        "value": 64.1
                    },
                    {
                        "countryname": "Timor-Leste",
                        "value": 73.8
                    },
                    {
                        "countryname": "Togo",
                        "value": 51.4
                    },
                    {
                        "countryname": "Tonga",
                        "value": 84
                    },
                    {
                        "countryname": "Trinidad and Tobago",
                        "value": 50.4
                    },
                    {
                        "countryname": "Tunisia",
                        "value": 59
                    },
                    {
                        "countryname": "Turkey",
                        "value": 73.9
                    },
                    {
                        "countryname": "Turkmenistan",
                        "value": 63.2
                    },
                    {
                        "countryname": "Tuvalu",
                        "value": 99.9
                    },
                    {
                        "countryname": "Uganda",
                        "value": 23.9
                    },
                    {
                        "countryname": "Ukraine",
                        "value": 54.9
                    },
                    {
                        "countryname": "United Arab Emirates",
                        "value": 67.7
                    },
                    {
                        "countryname": "United Kingdom",
                        "value": 82.5
                    },
                    {
                        "countryname": "United Republic of Tanzania",
                        "value": 39.3
                    },
                    {
                        "countryname": "United States of America",
                        "value": 46.4
                    },
                    {
                        "countryname": "Uruguay",
                        "value": 67.9
                    },
                    {
                        "countryname": "Uzbekistan",
                        "value": 53.1
                    },
                    {
                        "countryname": "Vanuatu",
                        "value": 86.6
                    },
                    {
                        "countryname": "Venezuela (Bolivarian Republic of)",
                        "value": 33.7
                    },
                    {
                        "countryname": "Viet Nam",
                        "value": 42.6
                    },
                    {
                        "countryname": "Yemen",
                        "value": 27.4
                    },
                    {
                        "countryname": "Yemen",
                        "value": 27.4
                    },
                    {
                        "countryname": "Zambia",
                        "value": 64.1
                    }
                ]
            },
            {
                "@@data_tuple2": [
                    {
                        "countryname": "Afghanistan",
                        "value": 7.1
                    },
                    {
                        "countryname": "Albania",
                        "value": 9.9
                    },
                    {
                        "countryname": "Algeria",
                        "value": 9.8
                    },
                    {
                        "countryname": "Angola",
                        "value": 5.6
                    },
                    {
                        "countryname": "Antigua and Barbuda",
                        "value": 17.8
                    },
                    {
                        "countryname": "Argentina",
                        "value": 22.5
                    },
                    {
                        "countryname": "Armenia",
                        "value": 7.9
                    },
                    {
                        "countryname": "Australia",
                        "value": 17.8
                    },
                    {
                        "countryname": "Austria",
                        "value": 16.9
                    },
                    {
                        "countryname": "Azerbaijan",
                        "value": 3.9
                    },
                    {
                        "countryname": "Bahamas",
                        "value": 15.7
                    },
                    {
                        "countryname": "Bahrain",
                        "value": 9.6
                    },
                    {
                        "countryname": "Bangladesh",
                        "value": 7.7
                    },
                    {
                        "countryname": "Barbados",
                        "value": 9.9
                    },
                    {
                        "countryname": "Belarus",
                        "value": 13.2
                    },
                    {
                        "countryname": "Belgium",
                        "value": 15
                    },
                    {
                        "countryname": "Belize",
                        "value": 12.1
                    },
                    {
                        "countryname": "Benin",
                        "value": 10.3
                    },
                    {
                        "countryname": "Bhutan",
                        "value": 7
                    },
                    {
                        "countryname": "Bolivia (Plurinational State of)",
                        "value": 9.5
                    },
                    {
                        "countryname": "Bosnia and Herzegovina",
                        "value": 16.6
                    },
                    {
                        "countryname": "Botswana",
                        "value": 8.1
                    },
                    {
                        "countryname": "Brazil",
                        "value": 7.6
                    },
                    {
                        "countryname": "Brunei Darussalam",
                        "value": 6
                    },
                    {
                        "countryname": "Bulgaria",
                        "value": 11.8
                    },
                    {
                        "countryname": "Burkina Faso",
                        "value": 11.9
                    },
                    {
                        "countryname": "Burundi",
                        "value": 13.7
                    },
                    {
                        "countryname": "Cabo Verde",
                        "value": 8.8
                    },
                    {
                        "countryname": "Cambodia",
                        "value": 6.7
                    },
                    {
                        "countryname": "Cameroon",
                        "value": 8.5
                    },
                    {
                        "countryname": "Canada",
                        "value": 17.4
                    },
                    {
                        "countryname": "Central African Republic",
                        "value": 11.2
                    },
                    {
                        "countryname": "Chad",
                        "value": 3.3
                    },
                    {
                        "countryname": "Chile",
                        "value": 15.2
                    },
                    {
                        "countryname": "China",
                        "value": 12.5
                    },
                    {
                        "countryname": "Colombia",
                        "value": 18.5
                    },
                    {
                        "countryname": "Comoros",
                        "value": 9.9
                    },
                    {
                        "countryname": "Congo",
                        "value": 6.5
                    },
                    {
                        "countryname": "Cook Islands",
                        "value": 9.6
                    },
                    {
                        "countryname": "Costa Rica",
                        "value": 27.7
                    },
                    {
                        "countryname": "Croatia",
                        "value": 15.1
                    },
                    {
                        "countryname": "Cuba",
                        "value": 11.6
                    },
                    {
                        "countryname": "Cyprus",
                        "value": 6.9
                    },
                    {
                        "countryname": "Czech Republic",
                        "value": 14.6
                    },
                    {
                        "countryname": "Côte dIvoire",
                        "value": 8
                    },
                    {
                        "countryname": "Democratic Republic of the Congo",
                        "value": 12.8
                    },
                    {
                        "countryname": "Denmark",
                        "value": 16.1
                    },
                    {
                        "countryname": "Djibouti",
                        "value": 14.1
                    },
                    {
                        "countryname": "Dominica",
                        "value": 10.5
                    },
                    {
                        "countryname": "Dominican Republic",
                        "value": 14.3
                    },
                    {
                        "countryname": "Ecuador",
                        "value": 7.1
                    },
                    {
                        "countryname": "Egypt",
                        "value": 5.9
                    },
                    {
                        "countryname": "El Salvador",
                        "value": 15.5
                    },
                    {
                        "countryname": "Equatorial Guinea",
                        "value": 7
                    },
                    {
                        "countryname": "Eritrea",
                        "value": 3.6
                    },
                    {
                        "countryname": "Estonia",
                        "value": 11.7
                    },
                    {
                        "countryname": "Ethiopia",
                        "value": 11.1
                    },
                    {
                        "countryname": "Ethiopia",
                        "value": 11.1
                    },
                    {
                        "countryname": "Fiji",
                        "value": 8.9
                    },
                    {
                        "countryname": "Finland",
                        "value": 12.3
                    },
                    {
                        "countryname": "France",
                        "value": 15.9
                    },
                    {
                        "countryname": "Gabon",
                        "value": 7.2
                    },
                    {
                        "countryname": "Gambia",
                        "value": 11.2
                    },
                    {
                        "countryname": "Georgia",
                        "value": 5.2
                    },
                    {
                        "countryname": "Germany",
                        "value": 19.1
                    },
                    {
                        "countryname": "Ghana",
                        "value": 9.7
                    },
                    {
                        "countryname": "Greece",
                        "value": 11.4
                    },
                    {
                        "countryname": "Grenada",
                        "value": 9
                    },
                    {
                        "countryname": "Guatemala",
                        "value": 19.5
                    },
                    {
                        "countryname": "Guinea",
                        "value": 6.8
                    },
                    {
                        "countryname": "Guinea-Bissau",
                        "value": 7.8
                    },
                    {
                        "countryname": "Guyana",
                        "value": 13.1
                    },
                    {
                        "countryname": "Haiti",
                        "value": 5.5
                    },
                    {
                        "countryname": "Honduras",
                        "value": 11.8
                    },
                    {
                        "countryname": "Hungary",
                        "value": 10.3
                    },
                    {
                        "countryname": "Iceland",
                        "value": 15.7
                    },
                    {
                        "countryname": "India",
                        "value": 9.4
                    },
                    {
                        "countryname": "Indonesia",
                        "value": 6.9
                    },
                    {
                        "countryname": "Iran (Islamic Republic of)",
                        "value": 15.4
                    },
                    {
                        "countryname": "Iraq",
                        "value": 4.4
                    },
                    {
                        "countryname": "Ireland",
                        "value": 12.4
                    },
                    {
                        "countryname": "Israel",
                        "value": 10.4
                    },
                    {
                        "countryname": "Italy",
                        "value": 14.2
                    },
                    {
                        "countryname": "Jamaica",
                        "value": 10.7
                    },
                    {
                        "countryname": "Japan",
                        "value": 19.4
                    },
                    {
                        "countryname": "Jordan",
                        "value": 17.8
                    },
                    {
                        "countryname": "Kazakhstan",
                        "value": 10.9
                    },
                    {
                        "countryname": "Kenya",
                        "value": 5.9
                    },
                    {
                        "countryname": "Kiribati",
                        "value": 10.3
                    },
                    {
                        "countryname": "Kuwait",
                        "value": 5.6
                    },
                    {
                        "countryname": "Kyrgyzstan",
                        "value": 12.2
                    },
                    {
                        "countryname": "Lao Peoples Democratic Republic",
                        "value": 6.1
                    },
                    {
                        "countryname": "Latvia",
                        "value": 8.9
                    },
                    {
                        "countryname": "Lebanon",
                        "value": 8.9
                    },
                    {
                        "countryname": "Lesotho",
                        "value": 14.5
                    },
                    {
                        "countryname": "Liberia",
                        "value": 19.2
                    },
                    {
                        "countryname": "Libya",
                        "value": 6.9
                    },
                    {
                        "countryname": "Lithuania",
                        "value": 12.7
                    },
                    {
                        "countryname": "Luxembourg",
                        "value": 13.5
                    },
                    {
                        "countryname": "Madagascar",
                        "value": 12.8
                    },
                    {
                        "countryname": "Malawi",
                        "value": 17.8
                    },
                    {
                        "countryname": "Malaysia",
                        "value": 6.2
                    },
                    {
                        "countryname": "Maldives",
                        "value": 9.3
                    },
                    {
                        "countryname": "Mali",
                        "value": 12.5
                    },
                    {
                        "countryname": "Malta",
                        "value": 13.3
                    },
                    {
                        "countryname": "Marshall Islands",
                        "value": 24.4
                    },
                    {
                        "countryname": "Mauritania",
                        "value": 9.9
                    },
                    {
                        "countryname": "Mauritius",
                        "value": 10.1
                    },
                    {
                        "countryname": "Mexico",
                        "value": 15.8
                    },
                    {
                        "countryname": "Micronesia (Federated States of)",
                        "value": 18
                    },
                    {
                        "countryname": "Monaco",
                        "value": 18.8
                    },
                    {
                        "countryname": "Mongolia",
                        "value": 9
                    },
                    {
                        "countryname": "Montenegro",
                        "value": 10
                    },
                    {
                        "countryname": "Morocco",
                        "value": 6
                    },
                    {
                        "countryname": "Mozambique",
                        "value": 8.8
                    },
                    {
                        "countryname": "Myanmar",
                        "value": 1.5
                    },
                    {
                        "countryname": "Namibia",
                        "value": 13.9
                    },
                    {
                        "countryname": "Nauru",
                        "value": 11.5
                    },
                    {
                        "countryname": "Nepal",
                        "value": 10.4
                    },
                    {
                        "countryname": "Netherlands",
                        "value": 19.7
                    },
                    {
                        "countryname": "New Zealand",
                        "value": 20.3
                    },
                    {
                        "countryname": "Nicaragua",
                        "value": 19.7
                    },
                    {
                        "countryname": "Niger",
                        "value": 10.3
                    },
                    {
                        "countryname": "Nigeria",
                        "value": 6.7
                    },
                    {
                        "countryname": "Niue",
                        "value": 5
                    },
                    {
                        "countryname": "Norway",
                        "value": 17.8
                    },
                    {
                        "countryname": "Oman",
                        "value": 5.5
                    },
                    {
                        "countryname": "Pakistan",
                        "value": 4.7
                    },
                    {
                        "countryname": "Palau",
                        "value": 16.4
                    },
                    {
                        "countryname": "Panama",
                        "value": 12.7
                    },
                    {
                        "countryname": "Panama",
                        "value": 12.7
                    },
                    {
                        "countryname": "Papua New Guinea",
                        "value": 14
                    },
                    {
                        "countryname": "Paraguay",
                        "value": 11.2
                    },
                    {
                        "countryname": "Peru",
                        "value": 18.3
                    },
                    {
                        "countryname": "Philippines",
                        "value": 10.3
                    },
                    {
                        "countryname": "Poland",
                        "value": 11.1
                    },
                    {
                        "countryname": "Portugal",
                        "value": 12.5
                    },
                    {
                        "countryname": "Qatar",
                        "value": 5.3
                    },
                    {
                        "countryname": "Republic of Korea",
                        "value": 13.6
                    },
                    {
                        "countryname": "Republic of Moldova",
                        "value": 13.3
                    },
                    {
                        "countryname": "Romania",
                        "value": 11.3
                    },
                    {
                        "countryname": "Russian Federation",
                        "value": 10.3
                    },
                    {
                        "countryname": "Rwanda",
                        "value": 22.1
                    },
                    {
                        "countryname": "Saint Kitts and Nevis",
                        "value": 7.1
                    },
                    {
                        "countryname": "Saint Lucia",
                        "value": 10.3
                    },
                    {
                        "countryname": "Saint Vincent and the Grenadines",
                        "value": 12.5
                    },
                    {
                        "countryname": "Samoa",
                        "value": 13.5
                    },
                    {
                        "countryname": "San Marino",
                        "value": 13.1
                    },
                    {
                        "countryname": "Sao Tome and Principe",
                        "value": 5.6
                    },
                    {
                        "countryname": "Saudi Arabia",
                        "value": 5.7
                    },
                    {
                        "countryname": "Senegal",
                        "value": 9.6
                    },
                    {
                        "countryname": "Serbia",
                        "value": 13.4
                    },
                    {
                        "countryname": "Seychelles",
                        "value": 10.8
                    },
                    {
                        "countryname": "Sierra Leone",
                        "value": 12.3
                    },
                    {
                        "countryname": "Singapore",
                        "value": 11.4
                    },
                    {
                        "countryname": "Slovakia",
                        "value": 14.7
                    },
                    {
                        "countryname": "Slovenia",
                        "value": 13.1
                    },
                    {
                        "countryname": "Solomon Islands",
                        "value": 19.9
                    },
                    {
                        "countryname": "South Africa",
                        "value": 12.9
                    },
                    {
                        "countryname": "South Sudan",
                        "value": 4
                    },
                    {
                        "countryname": "Spain",
                        "value": 15
                    },
                    {
                        "countryname": "Sri Lanka",
                        "value": 6.4
                    },
                    {
                        "countryname": "Sudan",
                        "value": 10.7
                    },
                    {
                        "countryname": "Sudan",
                        "value": 10.7
                    },
                    {
                        "countryname": "Suriname",
                        "value": 11.9
                    },
                    {
                        "countryname": "Swaziland",
                        "value": 18.1
                    },
                    {
                        "countryname": "Sweden",
                        "value": 15.1
                    },
                    {
                        "countryname": "Switzerland",
                        "value": 20.6
                    },
                    {
                        "countryname": "Syrian Arab Republic",
                        "value": 5.6
                    },
                    {
                        "countryname": "Tajikistan",
                        "value": 6.8
                    },
                    {
                        "countryname": "Thailand",
                        "value": 14.2
                    },
                    {
                        "countryname": "The former Yugoslav Republic of Macedonia",
                        "value": 13.6
                    },
                    {
                        "countryname": "Timor-Leste",
                        "value": 2.6
                    },
                    {
                        "countryname": "Togo",
                        "value": 15.4
                    },
                    {
                        "countryname": "Tonga",
                        "value": 12.8
                    },
                    {
                        "countryname": "Trinidad and Tobago",
                        "value": 7.6
                    },
                    {
                        "countryname": "Tunisia",
                        "value": 13.3
                    },
                    {
                        "countryname": "Turkey",
                        "value": 12.8
                    },
                    {
                        "countryname": "Turkmenistan",
                        "value": 8.7
                    },
                    {
                        "countryname": "Tuvalu",
                        "value": 17.9
                    },
                    {
                        "countryname": "Uganda",
                        "value": 10.2
                    },
                    {
                        "countryname": "Ukraine",
                        "value": 11.5
                    },
                    {
                        "countryname": "United Arab Emirates",
                        "value": 9.3
                    },
                    {
                        "countryname": "United Kingdom",
                        "value": 16.1
                    },
                    {
                        "countryname": "United Republic of Tanzania",
                        "value": 10.3
                    },
                    {
                        "countryname": "United States of America",
                        "value": 19.9
                    },
                    {
                        "countryname": "Uruguay",
                        "value": 0
                    },
                    {
                        "countryname": "Uzbekistan",
                        "value": 9.7
                    },
                    {
                        "countryname": "Vanuatu",
                        "value": 13.6
                    },
                    {
                        "countryname": "Venezuela (Bolivarian Republic of)",
                        "value": 5.5
                    },
                    {
                        "countryname": "Viet Nam",
                        "value": 9.5
                    },
                    {
                        "countryname": "Yemen",
                        "value": 4
                    },
                    {
                        "countryname": "Yemen",
                        "value": 4
                    },
                    {
                        "countryname": "Zambia",
                        "value": 16.4
                    }
                ]
            }
        ]
    },
    "success": true
}

parsedData = [];
  parseData_oldSchema(){
    const _data:any = {};
    _data.metric1 = this.data.data.results[0]["@@data_tuple"];
    _data.metric2 = this.data.data.results[1]["@@data_tuple2"];
    _data.ObjMetric1 = {};
    _data.ObjMetric2 = {};
    _data.metric1.forEach((x:any) => _data.ObjMetric1[x.countryname] = x.value);
    _data.metric2.forEach((x:any) => _data.ObjMetric2[x.countryname] = x.value);

    const finalData:any = [];
    if(_data.metric1.length > _data.metric2.length){
      Object.entries(_data.ObjMetric1).forEach(([key,value]):any => {
        if(_data.ObjMetric2[key]){
          finalData.push({
              country: key,
              metric1: value,
              metric2: _data.ObjMetric2[key],
              x: value,
              y: _data.ObjMetric2[key],
              year:2015
            });
        }
      });
    } else {

      Object.entries(_data.ObjMetric2).forEach(([key,value]):any => {
        if(_data.ObjMetric1[key]){
          finalData.push({
              country: key,
              metric1: _data.ObjMetric1[key],
              metric2: value,
              x: _data.ObjMetric1[key],
              y: value,
              year:2015
            });
        }
      });

    }
    this.parsedData = finalData;
    this.setData(finalData);
  }

}
