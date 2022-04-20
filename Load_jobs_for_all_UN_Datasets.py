import pyTigerGraph as tg
import pandas as pd
import os
from config.py import Host, Username, Password, Directory

host = Host
username = Username
password = Password
folderlocation = Directory

conn = tg.TigerGraphConnection(host=host, username=username, password=password)


### Region & Currency Data ###
directory = folderlocation +'/Currency_and_Country_Codes.csv'
temp_df = pd.read_csv(directory)
temp_df.to_csv('test_data.csv', header=None, index=False)

print(conn.gsql('''
USE GRAPH UN_Data
DROP JOB load_test1
create loading job load_test1 for graph UN_Data {
    define filename file1;
      
    load file1 to vertex Country values($2,$0) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Region values($5,$3) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Subregion values($6,$4) USING SEPARATOR=",", EOL="\n";    
    load file1 to vertex Currency values($9) USING SEPARATOR=",", EOL="\n";
    
    load file1 to edge IN_SUBREGION values($2 Country, $6 Subregion) USING SEPARATOR=",", EOL="\n";
    load file1 to edge IN_REGION values($2 Country, $5 Region) USING SEPARATOR=",", EOL="\n";
    load file1 to edge IN_REGION values($6 Subregion, $5 Region) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_CURRENCY values($2 Country, $9 Currency) USING SEPARATOR=",", EOL="\n";
    
}
'''
))

results = conn.uploadFile('test_data.csv', fileTag="file1", jobName="load_test1")#.format(c=counter))
print("Job completed!")        


        
### Base year ###
directory = folderlocation+'/Base_Year1000.csv'
temp_df = pd.read_csv(directory)
temp_df.to_csv('test_data.csv', header=None, index=False)

print(conn.gsql('''
USE GRAPH UN_Data
DROP JOB load_test1
create loading job load_test1 for graph UN_Data {
    define filename file1;
        
    load file1 to vertex Base_Year values($1,_) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Metric values($0,$2,$3,$4) USING SEPARATOR=",", EOL="\n";
    
    load file1 to edge HAS_BASE_YEAR values($0 Metric, $1 Base_Year) USING SEPARATOR=",", EOL="\n";
    
}
'''
))
results = conn.uploadFile('test_data.csv', fileTag="file1", jobName="load_test1")#.format(c=counter))
print("Job completed!")          
        
        
### Currency conversion data ###
directory = folderlocation+'/exchange_rate_EUR.csv'
temp_df = pd.read_csv(directory)
temp_df.to_csv('test_data.csv', header=None, index=False)

print(conn.gsql('''
USE GRAPH UN_Data
DROP JOB load_test1
create loading job load_test1 for graph UN_Data {
    define filename file1;
    
    load file1 to vertex Year values($1,_) USING SEPARATOR=",", EOL="\n";
    
    load file1 to edge EUR_CONV_RATE_FOR_YEAR values($3 Currency, $1 Year, $5) USING SEPARATOR=",", EOL="\n";
    
}
'''
))
results = conn.uploadFile('test_data.csv', fileTag="file1", jobName="load_test1")#.format(c=counter))
print("Job completed!")          
        

directory = folderlocation+'/exchange_rate_USD.csv'
temp_df = pd.read_csv(directory)
temp_df.to_csv('test_data.csv', header=None, index=False)

print(conn.gsql('''
USE GRAPH UN_Data
DROP JOB load_test1
create loading job load_test1 for graph UN_Data {
    define filename file1;
    
    load file1 to vertex Year values($1,_) USING SEPARATOR=",", EOL="\n";
     
    load file1 to edge USD_CONV_RATE_FOR_YEAR values($3 Currency, $1 Year, $5) USING SEPARATOR=",", EOL="\n";
    
}
'''
))
results = conn.uploadFile('test_data.csv', fileTag="file1", jobName="load_test1")#.format(c=counter))
print("Job completed!")          
        

directory = folderlocation+'/exchange_rate_CNY.csv'
temp_df = pd.read_csv(directory)
temp_df.to_csv('test_data.csv', header=None, index=False)

print(conn.gsql('''
USE GRAPH UN_Data
DROP JOB load_test1
create loading job load_test1 for graph UN_Data {
    define filename file1;
    
    load file1 to vertex Year values($1,_) USING SEPARATOR=",", EOL="\n";
     
    load file1 to edge CYN_CONV_RATE_FOR_YEAR values($3 Currency, $1 Year, $5) USING SEPARATOR=",", EOL="\n";
    
}
'''
))
results = conn.uploadFile('test_data.csv', fileTag="file1", jobName="load_test1")#.format(c=counter))
print("Job completed!")          
        



### FOR MAX'S DATA!!! ###
directory = folderlocation+'/Current1000CSV.csv'
temp_df = pd.read_csv(directory)
temp_df.to_csv('test_data.csv', header=None, index=False)

print(conn.gsql('''
USE GRAPH UN_Data
DROP JOB load_test1
create loading job load_test1 for graph UN_Data {
    define filename file1;
    
    
    load file1 to vertex Country values($1,$2) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Metric values($0,$9,$10,$4) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Year values($5,_) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Age_Group values($14,$15,$16) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Gender values($11) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Metric_Type values($12) USING SEPARATOR=",", EOL="\n";
    
    
    
    load file1 to edge HAS_METRIC values($1 Country, $0 Metric) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_METRIC_TYPE values($0 Metric, $12 Metric_Type) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_GENDER values($0 Metric, $11 Gender) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_AGE_GROUP values($0 Metric, $14 Age_Group) USING SEPARATOR=",", EOL="\n";
    load file1 to edge REPORTED_ON values($0 Metric, $5 Year) USING SEPARATOR=",", EOL="\n";
    
    
}
'''
))

results = conn.uploadFile('test_data.csv', fileTag="file1", jobName="load_test1")#.format(c=counter))
print("Job completed!")


        
directory = folderlocation+'/Constant1000.csv'
temp_df = pd.read_csv(directory)
temp_df.to_csv('test_data.csv', header=None, index=False)

print(conn.gsql('''
USE GRAPH UN_Data
DROP JOB load_test1
create loading job load_test1 for graph UN_Data {
    define filename file1;
    
    
    load file1 to vertex Country values($1,$2) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Metric values($0,$10,$11,$4) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Year values($5,_) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Age_Group values($15,$16,$17) USING SEPARATOR=",",  EOL="\n";
    load file1 to vertex Gender values($12) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Metric_Type values($13) USING SEPARATOR=",", EOL="\n";
    
    
    
    load file1 to edge HAS_METRIC values($1 Country, $0 Metric) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_METRIC_TYPE values($0 Metric, $13 Metric_Type) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_GENDER values($0 Metric, $12 Gender) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_AGE_GROUP values($0 Metric, $15 Age_Group) USING SEPARATOR=",", EOL="\n";
    load file1 to edge REPORTED_ON values($0 Metric, $5 Year) USING SEPARATOR=",", EOL="\n";
    
    
}
'''
))

results = conn.uploadFile('test_data.csv', fileTag="file1", jobName="load_test1")#.format(c=counter))
print("Job completed!")


                
### FOR TONY'S DATA ###

directory = folderlocation+'/Pollutant.csv'
temp_df = pd.read_csv(directory)
temp_df.to_csv('test_data.csv', header=None, index=False)

print(conn.gsql('''
USE GRAPH UN_Data
DROP JOB load_test1
create loading job load_test1 for graph UN_Data {
    define filename file1;
    
    
    load file1 to vertex Country values($2,$1) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Metric values($0,$7,$10,$11) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Year values($4,_) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Age_Group values($13,$14,$15) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Gender values($9) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Metric_Type values($8) USING SEPARATOR=",", EOL="\n";
    
    
    
    load file1 to edge HAS_METRIC values($2 Country, $0 Metric) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_METRIC_TYPE values($0 Metric, $8 Metric_Type) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_GENDER values($0 Metric, $9 Gender) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_AGE_GROUP values($0 Metric, $13 Age_Group) USING SEPARATOR=",", EOL="\n";
    load file1 to edge REPORTED_ON values($0 Metric, $4 Year) USING SEPARATOR=",", EOL="\n";
    
    
}
'''
))
results = conn.uploadFile('test_data.csv', fileTag="file1", jobName="load_test1")#.format(c=counter))
print("Job completed!")        
        


directory = folderlocation+'/Tourism.csv'
temp_df = pd.read_csv(directory)
temp_df.to_csv('test_data.csv', header=None, index=False)

print(conn.gsql('''
USE GRAPH UN_Data
DROP JOB load_test1
create loading job load_test1 for graph UN_Data{
    define filename file1;
    
    

    load file1 to vertex Metric values($0,$5,$10,$11) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Year values($6,_) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Age_Group values($13,$14,$15) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Gender values($9) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Metric_Type values($8) USING SEPARATOR=",", EOL="\n";
    
    
    
    load file1 to edge HAS_METRIC values($2 Country, $0 Metric) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_METRIC_TYPE values($0 Metric, $8 Metric_Type) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_GENDER values($0 Metric, $9 Gender) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_AGE_GROUP values($0 Metric, $13 Age_Group) USING SEPARATOR=",", EOL="\n";
    load file1 to edge REPORTED_ON values($0 Metric, $6 Year) USING SEPARATOR=",", EOL="\n";
    
    
}
'''
))
results = conn.uploadFile('test_data.csv', fileTag="file1", jobName="load_test1")#.format(c=counter))
print("Job completed!")        
        


        

### FOR JANE'S DATA!!! ###

directory = folderlocation+'/Crime_Metric.csv'
temp_df = pd.read_csv(directory)
temp_df.to_csv('test_data.csv', header=None, index=False)

print(conn.gsql('''
USE GRAPH UN_Data
DROP JOB load_test1
create loading job load_test1 for graph UN_Data {
    define filename file1;
    
    
    load file1 to vertex Country values($5,$7) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Metric values($4,$3,$12,$6) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Year values($1,_) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Age_Group values($15,$16,$17) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Gender values($0) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Metric_Type values($13) USING SEPARATOR=",", EOL="\n";
    
    
    
    load file1 to edge HAS_METRIC values($5 Country, $4 Metric) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_METRIC_TYPE values($4 Metric, $13 Metric_Type) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_GENDER values($4 Metric, $0 Gender) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_AGE_GROUP values($4 Metric, $15 Age_Group) USING SEPARATOR=",", EOL="\n";
    load file1 to edge REPORTED_ON values($4 Metric, $1 Year) USING SEPARATOR=",", EOL="\n";
    
    
}
'''
))
results = conn.uploadFile('test_data.csv', fileTag="file1", jobName="load_test1")#.format(c=counter))
print("Job completed!")        
        
        
        

directory = folderlocation+'/Refugee_Metric.csv'
temp_df = pd.read_csv(directory)
temp_df.to_csv('test_data.csv', header=None, index=False)

print(conn.gsql('''
USE GRAPH UN_Data
DROP JOB load_test1
create loading job load_test1 for graph UN_Data {
    define filename file1;
    
    
    load file1 to vertex Metric values($0,$6,$10,$7) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Year values($5,_) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Age_Group values($13,$14,$15) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Gender values($9) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Metric_Type values($7) USING SEPARATOR=",", EOL="\n";
    
    
    
    load file1 to edge HAS_METRIC values($2 Country, $0 Metric) USING SEPARATOR=",", EOL="\n";
    load file1 to edge SOUGHT_REFUGE_IN values($0 Metric, $1 Country) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_METRIC_TYPE values($0 Metric, $7 Metric_Type) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_GENDER values($0 Metric, $9 Gender) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_AGE_GROUP values($0 Metric, $13 Age_Group) USING SEPARATOR=",", EOL="\n";
    load file1 to edge REPORTED_ON values($0 Metric, $5 Year) USING SEPARATOR=",", EOL="\n";
    
    
}
'''
))
results = conn.uploadFile('test_data.csv', fileTag="file1", jobName="load_test1")#.format(c=counter))
print("Job completed!")        
        
        

                



      ##megadeath##
      
     
directory = folderlocation+'/Megadeath_1704.csv'
temp_df = pd.read_csv(directory)
temp_df.to_csv('test_data.csv', header=None, index=False)

print(conn.gsql('''
USE GRAPH UN_Data
DROP JOB load_test1
create loading job load_test1 for graph UN_Data {
    define filename file1;
    
    
    load file1 to vertex Country values($2,$1) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Metric values($10,$7,"Absolute",$6) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Year values($3,_) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Age_Group values($5,$8,$9) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Gender values($4) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Metric_Type values($6) USING SEPARATOR=",", EOL="\n";
    
    
    
    load file1 to edge HAS_METRIC values($2 Country, $10 Metric) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_METRIC_TYPE values($10 Metric, $6 Metric_Type) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_GENDER values($10 Metric, $4 Gender) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_AGE_GROUP values($10 Metric, $5 Age_Group) USING SEPARATOR=",", EOL="\n";
    load file1 to edge REPORTED_ON values($10 Metric, $3 Year) USING SEPARATOR=",", EOL="\n";
    
    
}
'''
))
results = conn.uploadFile('test_data.csv', fileTag="file1", jobName="load_test1")#.format(c=counter))
print("Job completed!")        
         

### FOR NAMAN'S DATA!!! ###

      ##crop data##
      
directory = folderlocation+'/Crop_Metric_1804_(1).csv'
temp_df = pd.read_csv(directory)
temp_df.to_csv('test_data.csv', header=None, index=False)

print(conn.gsql('''
USE GRAPH UN_Data
DROP JOB load_test1
create loading job load_test1 for graph UN_Data {
    define filename file1;
    
    
    load file1 to vertex Country values($1,$0) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Metric values($13,$6,$5,$7) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Year values($3,_) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Age_Group values($10,$11,$12) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Gender values($8) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Metric_Type values($7) USING SEPARATOR=",", EOL="\n";
    
    
    
    load file1 to edge HAS_METRIC values($1 Country, $13 Metric) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_METRIC_TYPE values($13 Metric, $7 Metric_Type) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_GENDER values($13 Metric, $8 Gender) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_AGE_GROUP values($13 Metric, $10 Age_Group) USING SEPARATOR=",", EOL="\n";
    load file1 to edge REPORTED_ON values($13 Metric, $3 Year) USING SEPARATOR=",", EOL="\n";
    
    
}
'''
))
results = conn.uploadFile('test_data.csv', fileTag="file1", jobName="load_test1")#.format(c=counter))
print("Job completed!")        
        


      
      
      
       
directory = folderlocation+'/Crop_Metric_1804_(2).csv'
temp_df = pd.read_csv(directory)
temp_df.to_csv('test_data.csv', header=None, index=False)

print(conn.gsql('''
USE GRAPH UN_Data
DROP JOB load_test1
create loading job load_test1 for graph UN_Data {
    define filename file1;
    
    
    load file1 to vertex Country values($1,$0) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Metric values($13,$6,$5,$7) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Year values($3,_) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Age_Group values($10,$11,$12) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Gender values($8) USING SEPARATOR=",", EOL="\n";
    load file1 to vertex Metric_Type values($7) USING SEPARATOR=",", EOL="\n";
    
    
    
    load file1 to edge HAS_METRIC values($1 Country, $13 Metric) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_METRIC_TYPE values($13 Metric, $7 Metric_Type) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_GENDER values($13 Metric, $8 Gender) USING SEPARATOR=",", EOL="\n";
    load file1 to edge HAS_AGE_GROUP values($13 Metric, $10 Age_Group) USING SEPARATOR=",", EOL="\n";
    load file1 to edge REPORTED_ON values($13 Metric, $3 Year) USING SEPARATOR=",", EOL="\n";
    
    
}
'''
))
results = conn.uploadFile('test_data.csv', fileTag="file1", jobName="load_test1")#.format(c=counter))
print("Job completed!")        
        

           
      


''' DIRECTORY TO BULK LOAD FILES FROM - SPECIFY YOUR DIRECTORY HERE '''
directory = folderlocation +'/Batch Load'

''' COUNTER USED IN LOAD JOB NAME CREATION '''
counter = 0

''' LOOP THROUGH ALL FILES IN DIRECTORY TO LOAD SEQUENTIALLY '''
for filename in os.listdir(directory):
    
    ''' F IS THE DIRECTORY + CURRENT FILENAME '''
    f = os.path.join(directory, filename)
    
    if os.path.isfile(f):
        #print(f)
        
        ''' UPDATE COUNTER FOR EACH ITERATION '''
        counter+=1
        
        ''' LOADS CSV FILE FOR CURRENT LOOP '''
        temp_df = pd.read_csv(f)   
        
            
        ''' TEMPORALILY SAVES CSV FILE WITHOUT HEADER AS LOADING JOB WOULD ADD 
        HEADER TO THE GRAPH DESPITE SPECIFYING HEADER=TRUE IN THE LOADING JOB TEXT '''    
        temp_df.to_csv('test_data.csv', header=None, index=False)
        #temp_df.to_csv('test_data.csv')
        
        
        print(conn.gsql('''                
        USE GRAPH UN_Data
        DROP JOB load_test1
        create loading job load_test1 for graph UN_Data {
            define filename file1;
            
            
          
            load file1 to vertex Metric values($8,$3,$5,$4) USING SEPARATOR=",", EOL="\n";
            load file1 to vertex Year values($2,_) USING SEPARATOR=",", EOL="\n";
            load file1 to vertex Age_Group values($6,$9,$10) USING SEPARATOR=",", EOL="\n";
            load file1 to vertex Gender values($7) USING SEPARATOR=",", EOL="\n";
            load file1 to vertex Metric_Type values($4) USING SEPARATOR=",", EOL="\n";
            
            
            
            load file1 to edge HAS_METRIC values($11 Country, $8 Metric) USING SEPARATOR=",", EOL="\n";
            load file1 to edge HAS_METRIC_TYPE values($8 Metric, $4 MetricType) USING SEPARATOR=",", EOL="\n";
            load file1 to edge HAS_GENDER values($8 Metric, $7 Gender) USING SEPARATOR=",", EOL="\n";
            load file1 to edge HAS_AGE_GROUP values($8 Metric, $6 AgeGroup) USING SEPARATOR=",", EOL="\n";
            load file1 to edge REPORTED_ON values($8 Metric, $2 Year) USING SEPARATOR=",", EOL="\n";
            
            
        }
        '''))

        
        ''' RUNS THE LOADING JOB FOR THE CURRENT CSV OF THE LOOP AND PRINTS THE RESULTS OF THE LOAD JOB 
        REMOVE THE HASTAG OF THE PRINT LINE IF YOU WISH TO SEE THE OUTPUT '''
        results = conn.uploadFile('test_data.csv', fileTag="file1", jobName="load_test1")
       # print(results)
        
        ''' PRINT STATEMENT TO SHOW PROGRESS OF JOBS RUN FOR LOOP '''
        print("JOB {c}/{t} COMPLETED!".format(c=counter, t=len(os.listdir(directory))) )






