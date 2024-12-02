# AAS ADOxx Classic Library

The project contain the Java code to generate the AAS ADOxx Model Library
The library follow the [ASS standard metamodel specification v3.0.7](https://github.com/admin-shell-io/aas-specs/releases/tag/V3.0.7)

## Build instructions

1) Download the [ADOXX_ALL_API_PUBLIC](https://git.boc-group.eu/adoxx/adoxx_all_api_public) and build with Maven install 
2) Execute the Java class org.adoxx.aas.AASDefinitionLibrary
3) The AAS Definition v1.0.0.abl will be generated in the "target" folder

## Usage instructions
1) Download and install [ADOxx](https://adoxx.org/)
2) Import the built AAS library in the ADOxx following the instructions at https://www.adoxx.org/live/import_new_application_library 
3) Start your modelling environment following the instruction in the [Getting Started manual](https://adoxx.org/documentation/01_getting_started/04_start_adoxx.html#starting-the-modelling-toolkit)

## Useful links:
- [Official Documents](https://industrialdigitaltwin.org/en/content-hub/downloads)
- [Existing ASS Templates](https://industrialdigitaltwin.org/en/content-hub/submodels)
- [JSON Mapping] (https://github.com/admin-shell-io/aas-specs/tree/master/schemas/json)