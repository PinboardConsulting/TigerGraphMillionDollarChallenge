
# Million Dollar Challenge

This is a repository for the TigerGraph Graph For All Million Dollar Challenge - UN Data submission. The aim of this repository is to enable anyone who wants to to create an end-to-end TigerGraph + UI solution for the storage, analysis and visualisation of a wide range of UN national and international datasets.

This README provides a guide to creating an implementation of the end-to-end solution which can store, in true related graph form, a broad set of UN Data, and present it in a user friendly web-based interface.

See DevPost submission for more details and background on the scope and goals of the solution: https://devpost.com/software/pinboard_consulting

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
4. Clone this repository
5. Open the config.py file and enter the details of TigerGraph instance (host, username, password, directory)
6. Run "Graph and Schema creation.py" 
7. Run "Load jobs for all UN Datasets.py"
8. Run "Query creation and installation.py"

## Steps to replicate UI
Please make sure the environment has nodejs 16 installed. 
1. Navigate to repository directory
2. Run command `npm install`
3. Run command `npm audit fix`
4. Run command `npm run start`
5. Go to https://localhost:4200/ to access the locally hosted website. 
