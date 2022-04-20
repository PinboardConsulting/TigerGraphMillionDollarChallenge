import pyTigerGraph as tg
from config.py import Host, Username, Password

host = Host
username = Username
password = Password

conn = tg.TigerGraphConnection(host=host, username=username, password=password)


results = conn.gsql('''
        USE GRAPH UN_Data
        CREATE QUERY gender_test(SET<VERTEX> country, SET<VERTEX> mets, SET<STRING> years, STRING gendertype, INT start_age=0, INT end_age=130) FOR GRAPH UN_Data SYNTAX V2{ 
          
  
  
          TYPEDEF TUPLE<STRING countryname, INT countrycode, STRING metricName, FLOAT MetricValue, STRING valueType, INT yearReported, INT startAge, INT endAge, STRING gendergroup, STRING metricid> testTuple;
          HeapAccum<testTuple>(100000, countryname DESC, countrycode, metricName DESC, MetricValue, valueType, yearReported ASC, startAge, endAge, gendergroup, metricid)@@test_tuple;
        
          OrAccum @or_visited;
          SetAccum<INT> @@yearsetint;
          SumAccum<FLOAT> @GenderSum;
          SetAccum<STRING> @@countrylist;
          
          @@yearsetint;
          INT code;
          STRING metname;
          STRING valuetype;
          FOREACH x in years DO
              @@yearsetint += str_to_int(x);
          END;
          allyears = {Year.*};
          met_set = {mets};
          allmets = SELECT m FROM allyears:y -(_>)- Metric:m -(_>)- met_set:t
                    WHERE m.@or_visited ==FALSE AND y.year IN @@yearsetint
                    ACCUM m.@or_visited = TRUE;
         
          IF ISEMPTY(country) THEN
                startcountry = {Country.*};
          
                countries = SELECT c from startcountry:c
                            WHERE c.@or_visited==FALSE
                            ACCUM c.@or_visited=TRUE, @@countrylist += c.name;
          
          
                 IF gendertype=="Male" THEN
          
                      FOREACH cntry in @@countrylist DO
                            FOREACH yr in @@yearsetint DO
                                  finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y
                                              WHERE y.year == yr AND s.name == cntry
                                              ACCUM code = s.code, metname = m.metric_name, valuetype = m.value_type;
          
                                  something = SELECT s FROM startcountry:s -(HAS_METRIC>)- finalmets:m -(HAS_GENDER>)- Gender:g
                                              WHERE s.name ==cntry AND g.gender == gendertype
                                              ACCUM @@test_tuple += testTuple(s.name, code, metname, m.value , valuetype, yr, start_age, end_age, "Male", m.id); 
                            END;
                      END;
                PRINT @@test_tuple;
                END;
          
        
          
                IF gendertype=="Female" THEN 
          
                      FOREACH cntry in @@countrylist DO
                            FOREACH yr in @@yearsetint DO
                                  finalmets = SELECT m FROM startcountry:s -(REV_SOUGHT_REFUGE_IN>)- allmets:m -(REPORTED_ON>)- allyears:y
                                              WHERE y.year == yr AND s.name == cntry
                                              ACCUM code = s.code, metname = m.metric_name, valuetype = m.value_type;
          
                                  something = SELECT s FROM startcountry:s -(HAS_METRIC>)- finalmets:m -(HAS_GENDER>)- Gender:g
                                              WHERE s.name ==cntry AND g.gender==gendertype
                                              ACCUM @@test_tuple += testTuple(s.name, code, metname, m.value , valuetype, yr, start_age, end_age, "Female", m.id); 
                            END;
                      END;
                PRINT @@test_tuple;
                END;
          
         ELSE
          
                startcountry = {country};
          
                countries = SELECT c from startcountry:c
                            WHERE c.@or_visited==FALSE
                           ACCUM c.@or_visited=TRUE, @@countrylist += c.name;
          
          
                 IF gendertype=="Male" THEN
          
                      FOREACH cntry in @@countrylist DO
                            FOREACH yr in @@yearsetint DO
                                  finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y
                                              WHERE y.year == yr AND s.name == cntry
                                              ACCUM code = s.code, metname = m.metric_name, valuetype = m.value_type;
          
                                  something = SELECT s FROM startcountry:s -(HAS_METRIC>)- finalmets:m -(HAS_GENDER>)- Gender:g
                                              WHERE s.name ==cntry AND g.gender == gendertype
                                              ACCUM @@test_tuple += testTuple(s.name, code, metname, m.value , valuetype, yr, start_age, end_age, "Male", m.id); 
                            END;
                      END;
                 PRINT @@test_tuple;
                 END;
          
        
          
                IF gendertype=="Female" THEN 
          
                      FOREACH cntry in @@countrylist DO
                            FOREACH yr in @@yearsetint DO
                                  finalmets = SELECT m FROM startcountry:s -(REV_SOUGHT_REFUGE_IN>)- allmets:m -(REPORTED_ON>)- allyears:y
                                              WHERE y.year == yr AND s.name == cntry
                                              ACCUM code = s.code, metname = m.metric_name, valuetype = m.value_type;
          
                                  something = SELECT s FROM startcountry:s -(HAS_METRIC>)- finalmets:m -(HAS_GENDER>)- Gender:g
                                              WHERE s.name ==cntry AND g.gender==gendertype
                                              ACCUM @@test_tuple += testTuple(s.name, code, metname, m.value , valuetype, yr, start_age, end_age, "Female", m.id); 
                            END;
                      END;
                PRINT @@test_tuple;
                END;
          
          END;
         }
  ''')
print(results)



results = conn.gsql('''
        USE GRAPH UN_Data
        CREATE QUERY refugees_test(SET<VERTEX> country, SET<VERTEX> mets, SET<STRING> years, STRING direction, INT start_age=0, INT end_age=130) FOR GRAPH UN_Data SYNTAX V2{ 
  
          TYPEDEF TUPLE<STRING countryname, INT countrycode, STRING metricName, FLOAT MetricValue, STRING valueType, INT yearReported, INT startAge, INT endAge, STRING gendergroup, STRING metricid, STRING refugeedirection> testTuple;
          HeapAccum<testTuple>(100000, countryname DESC, countrycode, metricName DESC, MetricValue, valueType, yearReported ASC, startAge, endAge, gendergroup, metricid, refugeedirection)@@test_tuple;
         
          OrAccum @or_visited;
          SetAccum<INT> @@yearsetint;
          SumAccum<FLOAT> @RefugeeSum;
          SetAccum<STRING> @@countrylist;
          
          @@yearsetint;
          INT code;
          STRING metname;
          STRING valuetype;
          FOREACH x in years DO
              @@yearsetint += str_to_int(x);
          END;
          allyears = {Year.*};
          met_set = {mets};
          allmets = SELECT m FROM allyears:y -(_>)- Metric:m -(_>)- met_set:t
                    WHERE m.@or_visited ==FALSE AND y.year IN @@yearsetint
                    ACCUM m.@or_visited = TRUE;
         
          IF ISEMPTY(country) THEN
                startcountry = {Country.*};
          
                countries = SELECT c from startcountry:c
                            WHERE c.@or_visited==FALSE
                           ACCUM c.@or_visited=TRUE, @@countrylist += c.name;
          
          
                 IF direction=="Outbound" THEN
          
                      FOREACH cntry in @@countrylist DO
                            FOREACH yr in @@yearsetint DO
                                  finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y
                                              WHERE y.year == yr AND s.name == cntry
                                              ACCUM s.@RefugeeSum += m.value, code = s.code, metname = m.metric_name, valuetype = m.value_type;
          
                                  something = SELECT s FROM startcountry:s 
                                              WHERE s.name ==cntry
                                              ACCUM @@test_tuple += testTuple(s.name, code, metname, s.@RefugeeSum, valuetype, yr, start_age, end_age, "All", "No Unique Metric ID", "Outbound"); 
                            END;
                      END;
                PRINT @@test_tuple;
                END;
          
        
          
                IF direction=="Inbound" THEN 
          
                      FOREACH cntry in @@countrylist DO
                            FOREACH yr in @@yearsetint DO
                                  finalmets = SELECT m FROM startcountry:s -(REV_SOUGHT_REFUGE_IN>)- allmets:m -(REPORTED_ON>)- allyears:y
                                              WHERE y.year == yr AND s.name == cntry
                                              ACCUM s.@RefugeeSum += m.value, code = s.code, metname = m.metric_name, valuetype = m.value_type;
          
                                  something = SELECT s FROM startcountry:s 
                                              WHERE s.name ==cntry
                                              ACCUM @@test_tuple += testTuple(s.name, code, metname, s.@RefugeeSum, valuetype, yr, start_age, end_age, "All", "No Unique Metric ID", "Inbound"); 
                            END;
                      END;
                PRINT @@test_tuple;
                END;
        
          
          ELSE
          
                startcountry = {country};
          
                countries = SELECT c from startcountry:c
                            WHERE c.@or_visited==FALSE
                           ACCUM c.@or_visited=TRUE, @@countrylist += c.name;
          
          
                 IF direction=="Outbound" THEN
          
                      FOREACH cntry in @@countrylist DO
                            FOREACH yr in @@yearsetint DO
                                  finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y
                                              WHERE y.year == yr AND s.name == cntry
                                              ACCUM s.@RefugeeSum += m.value, code = s.code, metname = m.metric_name, valuetype = m.value_type;
          
                                  something = SELECT s FROM startcountry:s 
                                              WHERE s.name ==cntry
                                              ACCUM @@test_tuple += testTuple(s.name, code, metname, s.@RefugeeSum, valuetype, yr, start_age, end_age, "All", "No Unique Metric ID", "Outbound"); 
                            END;
                      END;
                PRINT @@test_tuple;
                END;
          
        
          
                IF direction=="Inbound" THEN 
          
                      FOREACH cntry in @@countrylist DO
                            FOREACH yr in @@yearsetint DO
                                  finalmets = SELECT m FROM startcountry:s -(REV_SOUGHT_REFUGE_IN>)- allmets:m -(REPORTED_ON>)- allyears:y
                                              WHERE y.year == yr AND s.name == cntry
                                              ACCUM s.@RefugeeSum += m.value, code = s.code, metname = m.metric_name, valuetype = m.value_type;
          
                                  something = SELECT s FROM startcountry:s 
                                              WHERE s.name ==cntry
                                              ACCUM @@test_tuple += testTuple(s.name, code, metname, s.@RefugeeSum, valuetype, yr, start_age, end_age, "All", "No Unique Metric ID", "Inbound"); 
                            END;
                      END;
                PRINT @@test_tuple;
                END;
          
          END;
        
          }
  ''')
print(results)


results = conn.gsql('''
        USE GRAPH UN_Data
        CREATE QUERY currency_test(SET<VERTEX> country, SET<VERTEX> mets, SET<STRING> years, STRING convertTo) FOR GRAPH UN_Data SYNTAX V2 { 
  
          TYPEDEF TUPLE<STRING countryname, INT countrycode, STRING metricName, FLOAT MetricValue, STRING valueType, INT yearReported, STRING startAge, STRING endAge, STRING gendergroup, STRING metricid, STRING currencytype> testTuple;
          HeapAccum<testTuple>(100000, countryname DESC, countrycode, metricName DESC, MetricValue, valueType, yearReported ASC, startAge, endAge, gendergroup, metricid, currencytype)@@test_tuple;
        
          OrAccum @or_visited;
          SetAccum<INT> @@yearsetint;
          SetAccum<STRING> @@countrylist;
          
          @@yearsetint;
          INT code;
          STRING metname;
          STRING valuetype;
          FOREACH x in years DO
              @@yearsetint += str_to_int(x);
          END;
          allyears = {Year.*};
          met_set = {mets};
          allmets = SELECT m FROM allyears:y -(_>)- Metric:m -(_>)- met_set:t
                    WHERE m.@or_visited ==FALSE AND y.year IN @@yearsetint
                    ACCUM m.@or_visited = TRUE;
         
          IF ISEMPTY(country) THEN
                startcountry = {Country.*};
          
                countries = SELECT c from startcountry:c
                            WHERE c.@or_visited==FALSE
                           ACCUM c.@or_visited=TRUE, @@countrylist += c.name;
          
          
              IF convertTo=="EUR" THEN
          
                      FOREACH cntry in @@countrylist DO
                            FOREACH yr in @@yearsetint DO
                                  finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y
                                              WHERE y.year == yr AND s.name == cntry
                                              ACCUM code = s.code, metname = m.metric_name, valuetype = m.value_type;
          
                                  something2 = SELECT m FROM allyears:y -(REV_EUR_CONV_RATE_FOR_YEAR>:conv)- Currency:c -(REV_HAS_CURRENCY>)- startcountry:s -(HAS_METRIC>)- finalmets:m
                                              WHERE s.name ==cntry AND y.year==yr
                                              ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value*conv.eur_rate, valuetype, yr, "N/A", "N/A", "N/A", m.id, "EUR"); 
                            END;
                      END;
                PRINT @@test_tuple;
                END;
          
        
          
              IF convertTo=="CYN" THEN
          
                      FOREACH cntry in @@countrylist DO
                            FOREACH yr in @@yearsetint DO
                                  finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y
                                              WHERE y.year == yr AND s.name == cntry
                                              ACCUM code = s.code, metname = m.metric_name, valuetype = m.value_type;
          
                                  something2 = SELECT m FROM allyears:y -(REV_CYN_RATE_FOR_YEAR>:conv)- Currency:c -(REV_HAS_CURRENCY>)- startcountry:s -(HAS_METRIC>)- finalmets:m
                                              WHERE s.name ==cntry AND y.year==yr
                                              ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value*conv.cyn_rate, valuetype, yr, "N/A", "N/A", "N/A", m.id, "CYN"); 
                            END;
                      END;
                PRINT @@test_tuple;
                END;
          
                IF convertTo=="USD" THEN
          
                      FOREACH cntry in @@countrylist DO
                            FOREACH yr in @@yearsetint DO
                                  finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y
                                              WHERE y.year == yr AND s.name == cntry
                                              ACCUM code = s.code, metname = m.metric_name, valuetype = m.value_type;
          
                                  something2 = SELECT m FROM allyears:y -(REV_USD_CONV_RATE_FOR_YEAR>:conv)- Currency:c -(REV_HAS_CURRENCY>)- startcountry:s -(HAS_METRIC>)- finalmets:m
                                              WHERE s.name ==cntry AND y.year==yr
                                              ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value*conv.usd_rate, valuetype, yr, "N/A", "N/A", "N/A", m.id, "USD"); 
                            END;
                      END;
                PRINT @@test_tuple;
                END;
          
          ELSE
          
                startcountry = {country};
          
                countries = SELECT c from startcountry:c
                            WHERE c.@or_visited==FALSE
                           ACCUM c.@or_visited=TRUE, @@countrylist += c.name;
          
          
                IF convertTo=="EUR" THEN
          
                      FOREACH cntry in @@countrylist DO
                            FOREACH yr in @@yearsetint DO
                                  finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y
                                              WHERE y.year == yr AND s.name == cntry
                                              ACCUM code = s.code, metname = m.metric_name, valuetype = m.value_type;
          
                                  something2 = SELECT m FROM allyears:y -(REV_EUR_CONV_RATE_FOR_YEAR>:conv)- Currency:c -(REV_HAS_CURRENCY>)- startcountry:s -(HAS_METRIC>)- finalmets:m
                                              WHERE s.name ==cntry AND y.year==yr
                                              ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value*conv.eur_rate, valuetype, yr, "N/A", "N/A", "N/A", m.id, "EUR"); 
                            END;
                      END;
                PRINT @@test_tuple;
                END;
          
        
          
              IF convertTo=="CYN" THEN
          
                      FOREACH cntry in @@countrylist DO
                            FOREACH yr in @@yearsetint DO
                                  finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y
                                              WHERE y.year == yr AND s.name == cntry
                                              ACCUM code = s.code, metname = m.metric_name, valuetype = m.value_type;
          
                                  something2 = SELECT m FROM allyears:y -(REV_CYN_RATE_FOR_YEAR>:conv)- Currency:c -(REV_HAS_CURRENCY>)- startcountry:s -(HAS_METRIC>)- finalmets:m
                                              WHERE s.name ==cntry AND y.year==yr
                                              ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value*conv.cyn_rate, valuetype, yr, "N/A", "N/A", "N/A", m.id, "CYN"); 
                            END;
                      END;
                PRINT @@test_tuple;
                END;
          
                IF convertTo=="USD" THEN
          
                      FOREACH cntry in @@countrylist DO
                            FOREACH yr in @@yearsetint DO
                                  finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y
                                              WHERE y.year == yr AND s.name == cntry
                                              ACCUM code = s.code, metname = m.metric_name, valuetype = m.value_type;
          
                                  something2 = SELECT m FROM allyears:y -(REV_USD_CONV_RATE_FOR_YEAR>:conv)- Currency:c -(REV_HAS_CURRENCY>)- startcountry:s -(HAS_METRIC>)- finalmets:m
                                              WHERE s.name ==cntry AND y.year==yr
                                              ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value*conv.usd_rate, valuetype, yr, "N/A", "N/A", "N/A", m.id, "USD"); 
                            END;
                      END;
                PRINT @@test_tuple;
                END;
          
          END;

        }
  ''')
print(results)


results = conn.gsql('''
        USE GRAPH UN_Data
        CREATE QUERY generalised_query_main(SET<VERTEX> country, SET<VERTEX> mets, SET<STRING> years, SET<STRING> gender, INT startage=0, INT endage=130) FOR GRAPH UN_Data SYNTAX V2 { 
         
          TYPEDEF TUPLE<STRING countryname, INT countrycode, STRING metricName, FLOAT MetricValue, STRING valueType, INT yearReported, INT startAge, INT endAge, STRING gendergroup, VERTEX metricid> testTuple;
          HeapAccum<testTuple>(100000, countryname DESC, countrycode, metricName DESC, MetricValue, valueType, yearReported ASC, startAge, endAge, gendergroup, metricid)@@test_tuple;
          OrAccum @or_visited;
          SetAccum<STRING> @@gendsetstring;
          SetAccum<INT> @@yearsetint;
          SetAccum<VERTEX> @@gendsetvertex;
          SetAccum<VERTEX> @@yearsetvertex;
          
          allgenders = {Gender.*};
        #  gendlist = {gender};
          allyears = {Year.*};
          met_set = {mets};
          INT start_age = startage;
          INT end_age = endage;
          
          FOREACH x in years DO
             @@yearsetint += str_to_int(x);
          END;
          
          FOREACH x in gender DO  
             @@gendsetstring += x;
          END;
          
          IF ISEMPTY(country) THEN
            startcountry = {Country.*};
            IF ISEMPTY(years) THEN
              IF ISEMPTY(gender) THEN
                  IF start_age==0 AND end_age==130 THEN
                      ##No years, no gender and no age range specified
                      allmets = SELECT m FROM Metric:m -(HAS_METRIC_TYPE>)- met_set:t
                                WHERE m.@or_visited ==FALSE
                                ACCUM m.@or_visited = TRUE;
          
                      finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y
                                  ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value, m.value_type, y.year, start_age, end_age, "No gender specified", m); 
          
                  ELSE
                      ##No years, no gender specified but age range specified
                      allmets = SELECT m FROM Age_Group:a -(_>)- Metric:m -(_>)- met_set:t
                                WHERE m.@or_visited ==FALSE AND a.start_age >= startage AND a.end_age <= endage
                                ACCUM m.@or_visited = TRUE;
          
                      finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y
                                  ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value, m.value_type, y.year, start_age, end_age, "No gender specified", m);               
          
                  END;
          
          
              ELSE  
                  IF start_age==0 AND end_age==130 THEN
                      ##No years, no age range specified but gender specified
                      allmets = SELECT m FROM startcountry:s -(_>)- Metric:m -(_>)- met_set:t
                                WHERE m.@or_visited ==FALSE
                                ACCUM m.@or_visited = TRUE;
            
                      finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y -(_>)- allmets -(_>)- Gender:g
                                  WHERE g.gender IN @@gendsetstring
                                  ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value, m.value_type, y.year, start_age, end_age, g.gender, m); 
                      
          
                  ELSE
                      ##No years specified and gender & age range specified
                     allmets = SELECT m FROM Age_Group:a -(_>)- Metric:m -(_>)- met_set:t
                                WHERE m.@or_visited ==FALSE AND a.start_age >= startage AND a.end_age <= endage
                                ACCUM m.@or_visited = TRUE;
          
                      finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y -(_>)- allmets -(_>)- Gender:g 
                                  WHERE g.gender IN @@gendsetstring
                                  ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value, m.value_type, y.year, start_age, end_age, g.gender, m); 
                                 
                   END;
          
               END;
          
          ELSE
          
               IF ISEMPTY(gender) THEN
                   IF start_age==0 AND end_age==130 THEN
                      ##No gender and age range specified but years specified
                      allmets = SELECT m FROM allyears:y -(_>)- Metric:m -(_>)- met_set:t
                                WHERE m.@or_visited ==FALSE AND y.year IN @@yearsetint
                                ACCUM m.@or_visited = TRUE;
          
                      finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y
                                  WHERE y.year IN @@yearsetint
                                  ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value, m.value_type, y.year, start_age, end_age, "No gender specified", m); 
                   ELSE
                      ##No gender specified but years & age specified  
                      allmets = SELECT m FROM Age_Group:a -(_>)- Metric:m -(_>)- met_set:t
                                WHERE m.@or_visited ==FALSE AND a.start_age >= startage AND a.end_age <= endage
                                ACCUM m.@or_visited = TRUE;
          
                      finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y
                                  WHERE y.year IN @@yearsetint
                                  ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value, m.value_type, y.year, start_age, end_age, "No gender specified", m);              
          
                   END;
          
          
               ELSE  
                   IF start_age==0 AND end_age==130 THEN
                      ##No age range specified but years & gender specified            
                      allmets = SELECT m FROM allyears:y -(_>)- Metric:m -(_>)- met_set:t
                                WHERE m.@or_visited ==FALSE AND y.year IN @@yearsetint
                                ACCUM m.@or_visited = TRUE;
          
                      finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y -(_>)- allmets -(_>)- Gender:g
                                  WHERE g.gender IN @@gendsetstring AND y.year IN @@yearsetint
                                  ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value, m.value_type, y.year, start_age, end_age, g.gender, m); 
        
                   ELSE
                      ##Age range, years & gender specified     
                      allmets = SELECT m FROM Age_Group:a -(_>)- Metric:m -(_>)- met_set:t
                                WHERE m.@or_visited ==FALSE AND a.start_age >= startage AND a.end_age <= endage
                                ACCUM m.@or_visited = TRUE;
          
                      finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y -(_>)- allmets -(_>)- Gender:g
                                  WHERE g.gender IN @@gendsetstring AND y.year IN @@yearsetint
                                  ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value, m.value_type, y.year, start_age, end_age, g.gender, m); 
        
                   END;
          
               END;
          
          END;
          ELSE
            startcountry = {country};
            IF ISEMPTY(years) THEN
              IF ISEMPTY(gender) THEN
                  IF start_age==0 AND end_age==130 THEN
                      ##No years, no gender and no age range specified
                      allmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- Metric:m -(HAS_METRIC_TYPE>)- met_set:t
                                WHERE m.@or_visited ==FALSE
                                ACCUM m.@or_visited = TRUE;
          
                      finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y
                                  ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value, m.value_type, y.year, start_age, end_age, "No gender specified", m); 
          
                  ELSE
                      ##No years, no gender specified but age range specified
                      allmets = SELECT m FROM startcountry:s -(_>)- Metric:m -(_>)- met_set:t
                                WHERE m.@or_visited ==FALSE
                                ACCUM m.@or_visited = TRUE;
          
                      allmetsbyage = SELECT m FROM allmets:m -(_>)- Age_Group:a
                                     WHERE a.start_age >= startage AND a.end_age <= endage;
          
                      finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmetsbyage:m -(REPORTED_ON>)- allyears:y
                                  ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value, m.value_type, y.year, start_age, end_age, "No gender specified", m);               
          
                  END;
          
          
              ELSE  
                  IF start_age==0 AND end_age==130 THEN
                      ##No years, no age range specified but gender specified
                      allmets = SELECT m FROM startcountry:s -(_>)- Metric:m -(_>)- met_set:t
                                WHERE m.@or_visited ==FALSE
                                ACCUM m.@or_visited = TRUE;
            
                      finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y -(_>)- allmets -(_>)-                                                                     Gender:g
                                  WHERE g.gender IN @@gendsetstring
                                  ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value, m.value_type, y.year, start_age, end_age, g.gender, m); 
                      
          
                  ELSE
                      ##No years specified and gender & age range specified
                     allmets = SELECT m FROM startcountry:s -(_>)- Metric:m -(_>)- met_set:t
                                WHERE m.@or_visited ==FALSE
                                ACCUM m.@or_visited = TRUE;
          
                      allmetsbyage = SELECT m FROM allmets:m -(_>)- Age_Group:a
                                     WHERE a.start_age >= startage AND a.end_age <= endage;
          
                      finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmetsbyage:m -(REPORTED_ON>)- allyears:y -(_>)- allmetsbyage                                                             -(_>)- Gender:g 
                                  WHERE g.gender IN @@gendsetstring
                                  ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value, m.value_type, y.year, start_age, end_age, g.gender, m); 
                                 
                   END;
          
               END;
          
          ELSE
        
               IF ISEMPTY(gender) THEN
                   IF start_age==0 AND end_age==130 THEN
                      ##No gender and age range specified but years specified
                      allmets = SELECT m FROM startcountry:s -(_>)- Metric:m -(_>)- met_set:t
                                WHERE m.@or_visited ==FALSE
                                ACCUM m.@or_visited = TRUE;
          
                      finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y
                                  WHERE y.year IN @@yearsetint
                                  ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value, m.value_type, y.year, start_age, end_age, "No gender specified", m); 
                   ELSE
                      ##No gender specified but years & age specified  
                      allmets = SELECT m FROM startcountry:s -(_>)- Metric:m -(_>)- met_set:t
                                WHERE m.@or_visited ==FALSE
                                ACCUM m.@or_visited = TRUE;
          
                      metsbyage = SELECT m FROM allmets:m -(_>)- Age_Group:a
                                  WHERE a.start_age >= startage AND a.end_age <= endage;
          
                      finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- metsbyage:m -(REPORTED_ON>)- allyears:y
                                  WHERE y.year IN @@yearsetint
                                  ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value, m.value_type, y.year, start_age, end_age, "No gender specified", m);              
          
                   END;
          
          
               ELSE  
                   IF start_age==0 AND end_age==130 THEN
                      ##No age range specified but years & gender specified            
                      allmets = SELECT m FROM startcountry:s -(_>)- Metric:m -(_>)- met_set:t
                                WHERE m.@or_visited ==FALSE
                                ACCUM m.@or_visited = TRUE;
          
                      finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmets:m -(REPORTED_ON>)- allyears:y -(_>)- allmets -(_>)-                                                                    Gender:g
                                  WHERE g.gender IN @@gendsetstring AND y.year IN @@yearsetint
                                  ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value, m.value_type, y.year, start_age, end_age, g.gender, m); 
        
                   ELSE
                      ##Age range, years & gender specified     
                      allmets = SELECT m FROM startcountry:s -(_>)- Metric:m -(_>)- met_set:t
                                WHERE m.@or_visited ==FALSE
                                ACCUM m.@or_visited = TRUE;
          
                      allmetsbyage = SELECT m FROM allmets:m -(_>)- Age_Group:a
                                     WHERE a.start_age >= startage AND a.end_age <= endage;
          
                      finalmets = SELECT m FROM startcountry:s -(HAS_METRIC>)- allmetsbyage:m -(REPORTED_ON>)- allyears:y -(_>)- allmetsbyage                                                             -(_>)- Gender:g
                                  WHERE g.gender IN @@gendsetstring AND y.year IN @@yearsetint
                                  ACCUM @@test_tuple += testTuple(s.name, s.code, m.metric_name, m.value, m.value_type, y.year, start_age, end_age, g.gender, m); 
        
                   END;
          
               END;
          
          END;
          END;
          
          
          
          
          PRINT @@test_tuple;
        }
  ''')
print(results)


conn.gsql('''
  USE GRAPH UN_Data
  INSTALL QUERY gender_test
  INSTALL QUERY refugee_test
  INSTALL QUERY currency_test
  INSTALL QUERY generalised_query_main
''')