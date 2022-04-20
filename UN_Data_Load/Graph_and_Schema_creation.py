import pyTigerGraph as tg
from Config import Host, Username, Password


host = Host
username = Username
password = Password

conn = tg.TigerGraphConnection(host=host, username=username, password=password)



print(conn.gsql('''

CREATE GRAPH UN_Data ()
                
USE GRAPH UN_Data

CREATE SCHEMA_CHANGE JOB UN_Schema FOR GRAPH UN_Data {
    
    ADD VERTEX Region (PRIMARY_ID id INT, name STRING) WITH primary_id_as_attribute="TRUE";
    ADD VERTEX Subregion (PRIMARY_ID id INT, name STRING) WITH primary_id_as_attribute="TRUE";
    ADD VERTEX Country  (PRIMARY_ID code INT, name STRING) WITH primary_id_as_attribute="TRUE";
    ADD VERTEX Gender (PRIMARY_ID gender STRING) WITH primary_id_as_attribute="TRUE";
    ADD VERTEX Age_Group (PRIMARY_ID id STRING, start_age FLOAT, end_age FLOAT) WITH primary_id_as_attribute="TRUE";
    ADD VERTEX Metric_Type (PRIMARY_ID id STRING) WITH primary_id_as_attribute="TRUE";
    ADD VERTEX Metric (PRIMARY_ID id STRING, value FLOAT, value_type STRING, metric_name STRING) WITH primary_id_as_attribute="TRUE";
    ADD VERTEX Metric_Category (PRIMARY_ID id STRING) WITH primary_id_as_attribute="TRUE";
    ADD VERTEX Year (PRIMARY_ID year INT, year_datetime DATETIME) WITH primary_id_as_attribute="TRUE";
    ADD VERTEX Base_Year (PRIMARY_ID year INT, year_datetime DATETIME) WITH primary_id_as_attribute="TRUE";
    ADD VERTEX School_Level (PRIMARY_ID id STRING) WITH primary_id_as_attribute="TRUE";
    ADD VERTEX Currency (PRIMARY_ID id STRING) WITH primary_id_as_attribute="TRUE";


    ADD DIRECTED EDGE IN_REGION (FROM Country|Subregion, TO Region) WITH REVERSE_EDGE="REV_IN_REGION";
    ADD DIRECTED EDGE IN_SUBREGION (FROM Country, TO Subregion) WITH REVERSE_EDGE="REV_IN_SUBREGION";
    ADD DIRECTED EDGE HAS_METRIC (FROM Country, TO Metric) WITH REVERSE_EDGE="REV_HAS_METRIC";
    ADD DIRECTED EDGE HAS_CURRENCY (FROM Country, TO Currency) WITH REVERSE_EDGE="REV_HAS_CURRENCY";

    ADD DIRECTED EDGE HAS_GENDER (FROM Metric, TO Gender) WITH REVERSE_EDGE="REV_HAS_GENDER";
    ADD DIRECTED EDGE HAS_AGE_GROUP (FROM Metric, To Age_Group) WITH REVERSE_EDGE="REV_HAS_AGE_GROUP";
    ADD DIRECTED EDGE HAS_METRIC_TYPE (FROM Metric, TO Metric_Type) WITH REVERSE_EDGE="REV_HAS_METRIC_TYPE";
    ADD DIRECTED EDGE REPORTED_ON (FROM Metric, TO Year) WITH REVERSE_EDGE="REV_REPORTED_ON";
    ADD DIRECTED EDGE HAS_BASE_YEAR (FROM Metric, To Base_Year) WITH REVERSE_EDGE="REV_HAS_BASE_YEAR";
    ADD DIRECTED EDGE SOUGHT_REFUGE_IN (FROM Metric, To Country) WITH REVERSE_EDGE="REV_SOUGHT_REFUGE_IN";
    ADD DIRECTED EDGE HAS_SCHOOL_LEVEL (FROM Metric, To School_Level) WITH REVERSE_EDGE="REV_HAS_SCHOOL_LEVEL";

    ADD DIRECTED EDGE HAS_METRIC_CATEGORY (FROM Metric_Type, To Metric_Category) WITH REVERSE_EDGE="REV_HAS_METRIC_CATEGORY";

    ADD DIRECTED EDGE EUR_CONV_RATE_FOR_YEAR (FROM Currency, TO Year, eur_rate FLOAT) WITH REVERSE_EDGE="REV_EUR_CONV_RATE_FOR_YEAR";
    ADD DIRECTED EDGE USD_CONV_RATE_FOR_YEAR (FROM Currency, TO Year, usd_rate FLOAT) WITH REVERSE_EDGE="REV_USD_CONV_RATE_FOR_YEAR";
    ADD DIRECTED EDGE CYN_CONV_RATE_FOR_YEAR (FROM Currency, TO Year, cyn_rate FLOAT) WITH REVERSE_EDGE="REV_CYN_RATE_FOR_YEAR";
    
}


RUN SCHEMA_CHANGE JOB UN_Schema
'''))

