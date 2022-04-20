
# Million Dollar Challenge

This is a repository for the TigerGraph Graph For All Million Dollar Challenge - UN Data submission. The aim of this repository is to enable anyone who wants to to create an end-to-end TigerGraph + UI solution for the storage, analysis and visualisation of a wide range of UN national and international datasets.

This README provides a guide to creating an implementation of the end-to-end solution which can store, in true related graph form, a broad set of UN Data, and present it in a user friendly web-based interface.

See DevPost submission for more details and background on the scope and goals of the solution: https://devpost.com/software/pinboard_consulting

## Files
Folder Structure
```
├── src
│     ├── app
│     │     ├── components
│     │     │     ├── chart
│     │     │     ├── graph
│     │     │     ├── map
│     │     │     ├── report
│     │     │     ├── route-builder
│     │     │     ├── side-menu
│     │     │     └── table
│     │     ├── screens
│     │     │     └── home
│     │     └── services
│     │         ├── get-data
│     │         └── routing-control
│     ├── assets
│     │     └── lib
│     └── environments
└── UN_Data_Load
    └── Batch_Load
```
## Components
The Major components with their descriptions are as follows:
1. TigerGraph Instance
2. UI build
 
## Steps to replicate TigerGraph Instance
1. Create a local instance with minimum  128GB of RAM to prevent the server from hanging when querying lots of data. (We used a VM with 16 vCPUs and 128GB RAM).
2. Have a python environment with pyTigerGraph, os and Pandas modules installed.
3. If youre using TigerGraph Server then you shouldnt need to but please check if Rest++ Authentication is turned off.   
4. Clone this repository
5. Open the "UN_Data_Load/Config.py" file and enter the details of TigerGraph instance (host, username and password) 
6. Run `python UN_Data_Load/Graph_and_Schema_creation.py` 
7. Run `python UN_Data_Load/Load_jobs_for_all_UN_Datasets.py`
8. Run `python UN_Data_Load/Query_creation_and_installation.py`

## Steps to replicate UI
1. Please install Node.js version 16
2. Navigate to git root repository directory
3. Please verify the parameters at "src/environments/environment.ts"
- For local instance you shouldnt need to edit the parameters but please verify they are correct. For cloud instance please edit the parameters as per cloud environment variables. 
4. Run command `npm install`
5. Run command `npm audit fix`
6. Run command `npm run start`
7. Go to https://localhost:4200/ to access the locally hosted website. 

## User Guide
We have added a guide for the UI interface. Please click [here](https://github.com/PinboardConsulting/TigerGraphMillionDollarChallenge/blob/main/UI_User_Guide.pdf) to access.