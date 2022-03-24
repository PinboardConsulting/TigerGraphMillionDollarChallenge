# Million Dollar Challenge

This is a submission for Million Dollar Challenge by TigerGraph from Pinboard Consulting. The aim of this submission is to create a TigerGraph solution for the way this data can be stored, analysed and visualised and leaverage graph technology to achieve deeper insights.

This README provides a guide to create an implementation of TigerGraph which can store, in true related graph form, all current sets of UN Data, with the long term aim of being able to update and enhance the schema with more datasets beyond the life of this hackathon and to build an interactive dashboard, where extracts, reports and analytics can be visualised using the data from TigerGraph.

## Files
Folder Structure
```
└── src
    ├── app
    │   ├── components
    │   │   ├── chart
    │   │   ├── graph
    │   │   ├── map
    │   │   ├── report
    │   │   ├── route-builder
    │   │   ├── side-menu
    │   │   └── table
    │   ├── screens
    │   │   └── home
    │   └── services
    │       ├── get-data
    │       └── routing-control
    ├── assets
    │   └── lib
    └── environments
```
## Components
The Major components with their descriptions are as follows:
1. Docker Image
2. UN Datasets csv files
3. Load Scripts
4. GSQL queries
5. Nodejs

## Steps
This section is a guide to replicate the results we produced. 
1. Start the Docker image with so and so command
2. Load the data with commands
3. Test the GSQL queries
4. Host UI server
5. Sample outputs

