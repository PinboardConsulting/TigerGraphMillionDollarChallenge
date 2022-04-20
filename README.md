
# Million Dollar Challenge

This is a submission for Million Dollar Challenge by TigerGraph from Pinboard Consulting. The aim of this submission is to create a TigerGraph solution for the way this data can be stored, analysed and visualised and leaverage graph technology to achieve deeper insights.

This README provides a guide to create an implementation of TigerGraph which can store, in true related graph form, all current sets of UN Data, with the long term aim of being able to update and enhance the schema with more datasets beyond the life of this hackathon and to build an interactive dashboard, where extracts, reports and analytics can be visualised using the data from TigerGraph.

## Files
Folder Structure
```
.
├── src
    ├── app
        ├── components
            ├── chart
            ├── graph
            ├── map
            ├── report
            ├── route-builder
            ├── side-menu
            └── table
        ├── screens
            └── home
        └── services
            ├── get-data
            └── routing-control
    ├── assets
        └── lib
    └── environments
└── UN_DATA_LOAD
    ├── Batch Load
    └── UN Data Load
        └── Batch Load
```
## Components
The Major components with their descriptions are as follows:
1. TigerGraph Instance
2. UI build
 
## Steps to replicate TigerGraph Instance
1. Create a local instance with minimum  128GB of RAM to prevent the server from hanging when querying lots of data. (We used a VM with 16 vCPUs and 128GB RAM).
2. Have a python environment with pyTigerGraph, os and Pandas modules installed.
3. Disable REST++ Authentication 
4. Open the config.py file and enter the details of TigerGraph instance (host, username, password, directory)
5. Run "Graph and Schema creation.py" 
6. Run "Load jobs for all UN Datasets.py"
7. Run "Query creation and installation.py"

## Steps to replicate UI
Please make sure the environment has nodejs 16 installed. 
1. Run command `npm run start`
2. Go to https://localhost:4200/ to access the locally hosted website. 