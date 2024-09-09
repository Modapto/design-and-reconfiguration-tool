var config = {
  links: {
    version: "1.0.8",
    policy: "true",
    library: "ADONIS_BPMS_APPLICATION_LIBRARY_40$8.1",
    context: "DUMMY_MODELTYPE_CTXDEF",

    endpointNames: {
      TO: {
        en: "To",
        de: "Zu",
        es: "To",
        fr: "To",
        pl: "To"
      },
      FROM: {
        en: "From",
        de: "Von",
        es: "From",
        fr: "From",
        pl: "From"
      }
    }
  },

  collection: {
    attrTypes: [{
      name: "ATT_KEYS_AAS",
      ID: "{8f280497-4588-4386-ad07-7af0a6c8b8c9}",
      rowsID: "{c27775bb-20ee-4796-a070-7de17621709f}",
      colsID: "{2e1accd2-3a07-4960-9da5-6ae8ab338c83}",
      localNames: {
        en: "Keys Table", de: "Keys Table", es: "Keys Table", fr: "Keys Table", pl: "Keys Table", all: "Keys Table"
      },
      cols: [{
        ID: "{a9547b15-34b3-4181-924c-62e12e360e2d}",
        name: "COL_TYPE",
        type: "ENUM", //ENUM: AnnotationRelationshipElement@AssetAdministrationShell@BasicEventElement@Blob@Capability@ConceptDescription@DataElement@Entity@EventElement@File@FragmentReference@GlobalReference@Identifiable@MultiLanguageProperty@Range@Operation@Property@Range@Referable@ReferenceElement@RelationshipElement@Submodel@SubmodelElement@SubmodelElementCollection@SubmodelElementList
        localNames: {
          en: "Type", de: "Type", es: "Type", fr: "Type", pl: "Type", all: "Type"
        }
      }, {
        ID: "{28fd0f04-18c8-4482-b60a-f1663df285fb}",
        name: "COL_VALUE",
        type: "STRING",
        localNames: {
          en: "Value", de: "Value", es: "Value", fr: "Value", pl: "Value", all: "Value"
        }
      }
      ]
    }, {
      name: "ATT_REFERENCES_AAS",
      ID: "{3aacfc5f-812c-4c0b-a50c-dea8bde821f5}",
      rowsID: "{a55ceb89-cc65-45a4-8cab-b0618a525542}",
      colsID: "{0dccce82-e564-4168-9a5a-bf1b332b8a6b}",
      localNames: {
        en: "References", de: "References", es: "References", fr: "References", pl: "References", all: "References"
      },
      cols: [{
        ID: "{9a3468f0-fc19-4bc1-b505-9e1a6a3e02df}",
        name: "COL_REFERENCE",
        relationClassName: "RC_REFERENCE_AAS",
        type: "INTERREF",
        maxTargets: 1,
        localNames: {
          en: "Reference", de: "Reference", es: "Reference", fr: "Reference", pl: "Reference", all: "Reference"
        }
      }
      ]
    }, {
      name: "ATT_SPECIFIC_ASSET_IDS_AAS",
      ID: "{5c171917-1c68-4772-b26e-0f3b6c797740}",
      rowsID: "{ef3966f7-c08c-4103-9c88-b2306ceed173}",
      colsID: "{e43080a5-115d-4a99-aacd-ae991260aef4}",
      localNames: {
        en: "Specific Asset Ids", de: "Specific Asset Ids", es: "Specific Asset Ids", fr: "Specific Asset Ids", pl: "Specific Asset Ids", all: "Specific Asset Ids"
      },
      cols: [{
        ID: "{efe43e7a-5c0f-4f15-a8e8-09d56b7fcb00}",
        name: "COL_SPECIFIC_ASSET_ID",
        relationClassName: "RC_SPECIFIC_ASSET_ID_AAS",
        type: "INTERREF",
        maxTargets: 1,
        localNames: {
          en: "Specific Asset Id", de: "Specific Asset Id", es: "Specific Asset Id", fr: "Specific Asset Id", pl: "Specific Asset Id", all: "Specific Asset Id"
        }
      }
      ]
    }, {
      name: "ATT_MULTILANGUAGE_TEXT_AAS",
      ID: "{b28fc15a-4d93-4912-b2d2-2054e03f2cb8}",
      rowsID: "{958a7f7d-bd49-43c4-b11b-78f54d6f8f06}",
      colsID: "{fc4f0044-08d7-49a1-bdd2-91082fa3bf45}",
      localNames: {
        en: "Multi-Language Text", de: "Multi-Language Text", es: "Multi-Language Text", fr: "Multi-Language Text", pl: "Multi-Language Text", all: "Multi-Language Text"
      },
      cols: [{
        ID: "{f6efb10e-3796-46a1-911c-1486513a9dc6}",
        name: "COL_LANGUAGE",
        type: "STRING",
        localNames: {
          en: "Language", de: "Language", es: "Language", fr: "Language", pl: "Language", all: "Language"
        }
      }, {
        ID: "{6bdcc742-5cb7-4c66-8ce0-37c1a84e005b}",
        name: "COL_TEXT",
        type: "STRING",
        localNames: {
          en: "Text", de: "Text", es: "Text", fr: "Text", pl: "Text", all: "Text"
        }
      }
      ]
    }, {
      name: "ATT_EXTENSIONS_AAS",
      ID: "{a1e1a74a-3f83-44ad-bf22-6638448cc15c}",
      rowsID: "{2c7b7551-a6a3-4011-821b-c135e5c28508}",
      colsID: "{193e08fd-d268-4e3d-9add-c19f35088971}",
      localNames: {
        en: "Extensions", de: "Extensions", es: "Extensions", fr: "Extensions", pl: "Extensions", all: "Extensions"
      },
      cols: [{
        ID: "{f762bca8-8a63-43e7-ac32-6b01c3cc4598}",
        name: "COL_EXTENSION",
        relationClassName: "RC_EXTENSION_AAS",
        type: "INTERREF",
        maxTargets: 1,
        localNames: {
          en: "Extension", de: "Extension", es: "Extension", fr: "Extension", pl: "Extension", all: "Extension"
        }
      }
      ]
    }, {
      name: "ATT_SUBMODEL_ELEMENTS_AAS",
      ID: "{639fb545-960d-4386-b5b7-88f9ea7a6a2a}",
      rowsID: "{0d9284d9-84bc-4ff1-aa6f-dfa6bf5459a3}",
      colsID: "{c076aebc-16ee-4dad-82a8-f06491a65fa8}",
      localNames: {
        en: "Submodel Elements", de: "Submodel Elements", es: "Submodel Elements", fr: "Submodel Elements", pl: "Submodel Elements", all: "Submodel Elements"
      },
      cols: [{
        ID: "{11cb22e5-b38a-4e60-b8db-800a7516d322}",
        name: "COL_SUBMODEL_ELEMENT",
        relationClassName: "RC_SUBMODEL_ELEMENT_AAS",
        type: "INTERREF",
        maxTargets: 1,
        localNames: {
          en: "Submodel Element", de: "Submodel Element", es: "Submodel Element", fr: "Submodel Element", pl: "Submodel Element", all: "Submodel Element"
        }
      }
      ]
    }, {
      name: "ATT_QUALIFIERS_AAS",
      ID: "{fdd9eaf2-b811-4a9f-9506-8de118817ab6}",
      rowsID: "{3197b6d7-f456-4842-9366-7725def14eb8}",
      colsID: "{af44e88b-ebbd-45e3-be87-ff2c0ad10a85}",
      localNames: {
        en: "Qualifiers", de: "Qualifiers", es: "Qualifiers", fr: "Qualifiers", pl: "Qualifiers", all: "Qualifiers"
      },
      cols: [{
        ID: "{5b6f3e68-c071-4103-b140-e51db1bf59bb}",
        name: "COL_QUALIFIER",
        relationClassName: "RC_QUALIFIER_AAS",
        type: "INTERREF",
        maxTargets: 1,
        localNames: {
          en: "Qualifier", de: "Qualifier", es: "Qualifier", fr: "Qualifier", pl: "Qualifier", all: "Qualifier"
        }
      }
      ]
    }, {
      name: "ATT_DATA_ELEMENTS_AAS",
      ID: "{d8e6550a-a4ad-417b-9570-13462302fde5}",
      rowsID: "{525d2054-db02-4d72-b431-af939558f942}",
      colsID: "{f46c7fc0-5ec9-42b5-9ce5-b90d9262b25a}",
      localNames: {
        en: "Data Elements", de: "Data Elements", es: "Data Elements", fr: "Data Elements", pl: "Data Elements", all: "Data Elements"
      },
      cols: [{
        ID: "{b951670b-81ff-4d4d-9b34-38d1eaaa264e}",
        name: "COL_DATA_ELEMENT",
        relationClassName: "RC_DATA_ELEMENT_AAS",
        type: "INTERREF",
        maxTargets: 1,
        localNames: {
          en: "Data Element", de: "Data Element", es: "Data Element", fr: "Data Element", pl: "Data Element", all: "Data Element"
        }
      }
      ]
    }, {
      name: "ATT_OPERATION_VARIABLES_AAS",
      ID: "{3087fcc9-ccdd-4455-9e4b-2e5aed377531}",
      rowsID: "{0f770a24-b9fe-4ab8-b05a-3572881d5d57}",
      colsID: "{f6a91895-4419-4870-b1e3-6a8f1c3ce08d}",
      localNames: {
        en: "Operation Variables", de: "Operation Variables", es: "Operation Variables", fr: "Operation Variables", pl: "Operation Variables", all: "Operation Variables"
      },
      cols: [{
        ID: "{ade7ae7a-007e-4a40-ad3a-45cad585d4d2}",
        name: "COL_OPERATION_VARIABLE",
        relationClassName: "RC_OPERATION_VARIABLE_AAS",
        type: "INTERREF",
        maxTargets: 1,
        localNames: {
          en: "Operation Variable", de: "Operation Variable", es: "Operation Variable", fr: "Operation Variable", pl: "Operation Variable", all: "Operation Variable"
        }
      }
      ]
    }, {
      name: "ATT_VALUE_LISTS_AAS",
      ID: "{f63c046f-47fd-4a54-a0c6-05e7104400a8}",
      rowsID: "{90545cc0-e648-42e4-900c-f34c2f6a2586}",
      colsID: "{c09421eb-5cd4-4a0b-989d-22487141ef5a}",
      localNames: {
        en: "Value Lists", de: "Value Lists", es: "Value Lists", fr: "Value Lists", pl: "Value Lists", all: "Value Lists"
      },
      cols: [{
        ID: "{dfe6fcbe-4d52-4e66-be09-cdede91ba1db}",
        name: "COL_VALUE",
        type: "STRING",
        localNames: {
          en: "Value", de: "Value", es: "Value", fr: "Value", pl: "Value", all: "Value"
        }
      }, {
        ID: "{1d54b463-6b29-4720-8f88-e5dc275ee4f6}",
        name: "COL_VALUE_ID",
        relationClassName: "RC_REFERENCE_AAS",
        type: "INTERREF",
        maxTargets: 1,
        localNames: {
          en: "Value Id", de: "Value Id", es: "Value Id", fr: "Value Id", pl: "Value Id", all: "Value Id"
        }
      }
      ]
    },


    {
      name: "ATT_DERIVED_FROM_AAS",
      ID: "{b7111544-1065-43a6-92fd-38db96960635}",
      rowsID: "{bea22a44-b7eb-4560-ab58-e113e5cbb170}",
      colsID: "{5fc14811-8e0a-4790-b12e-239764eaf2da}",
      localNames: {
        en: "Derived From", de: "Derived From", es: "Derived From", fr: "Derived From", pl: "Derived From", all: "Derived From"
      },
      maxRows: 1,
      cols: [{
        ID: "{2f998048-52bd-453d-81f1-3504270c2b8d}",
        name: "COL_DERIVED_FROM",
        relationClassName: "RC_DERIVED_FROM_AAS",
        type: "INTERREF",
        maxTargets: 1,
        localNames: {
          en: "Derived From", de: "Derived From", es: "Derived From", fr: "Derived From", pl: "Derived From", all: "Derived From"
        }
      }
      ]
    }, {
      name: "ATT_REFERENCE_AAS",
      ID: "{02e0226b-7679-4b73-9e7d-a7d9fa9ba6b7}",
      rowsID: "{88936586-f48f-4c62-91da-0852dd675df0}",
      colsID: "{48a7131d-92e4-44e7-838a-5043faf67bf3}",
      localNames: {
        en: "Reference", de: "Reference", es: "Reference", fr: "Reference", pl: "Reference", all: "Reference"
      },
      maxRows: 1,
      cols: [{
        ID: "{c085ea0b-8941-4e7b-bef1-37f75d00904c}",
        name: "COL_REFERENCE",
        relationClassName: "RC_REFERENCE_AAS",
        type: "INTERREF",
        maxTargets: 1,
        localNames: {
          en: "Reference", de: "Reference", es: "Reference", fr: "Reference", pl: "Reference", all: "Reference"
        }
      }
      ]
    }, {
      name: "ATT_OPERATION_VARIABLE_VALUE_AAS",
      ID: "{2185bfcb-9946-4582-b3b9-6e2a93281e56}",
      rowsID: "{05d4b066-5344-4c34-81ec-d1690097dafc}",
      colsID: "{7bdfab79-1880-4ba2-8492-41c1e870fc34}",
      localNames: {
        en: "Operation Variable Value", de: "Operation Variable Value", es: "Operation Variable Value", fr: "Operation Variable Value", pl: "Operation Variable Value", all: "Operation Variable Value"
      },
      maxRows: 1,
      cols: [{
        ID: "{061b325d-95fc-42d3-ae4f-f5340f66c65c}",
        name: "COL_OPERATION_VARIABLE_VALUE",
        relationClassName: "RC_OPERATION_VARIABLE_VALUE_AAS",
        type: "INTERREF",
        maxTargets: 1,
        localNames: {
          en: "Operation Variable Value", de: "Operation Variable Value", es: "Operation Variable Value", fr: "Operation Variable Value", pl: "Operation Variable Value", all: "Operation Variable Value"
        }
      }
      ]
    }, {
      name: "ATT_SPECIFIC_ASSET_ID_AAS",
      ID: "{3afabdce-ea38-4d97-969f-7baba4ca5390}",
      rowsID: "{2a47a3b6-42f9-4cd7-915a-7ff923c26f43}",
      colsID: "{1aa02224-2738-41ab-a366-cd1bbc3bb1cd}",
      localNames: {
        en: "Specific Asset Id", de: "Specific Asset Id", es: "Specific Asset Id", fr: "Specific Asset Id", pl: "Specific Asset Id", all: "Specific Asset Id"
      },
      maxRows: 1,
      cols: [{
        ID: "{1aa6dd74-7c45-4646-9cae-96444bb927bf}",
        name: "COL_SPECIFIC_ASSET_ID",
        relationClassName: "RC_SPECIFIC_ASSET_ID_AAS",
        type: "INTERREF",
        maxTargets: 1,
        localNames: {
          en: "Specific Asset Id", de: "Specific Asset Id", es: "Specific Asset Id", fr: "Specific Asset Id", pl: "Specific Asset Id", all: "Specific Asset Id"
        }
      }
      ]
    }, {
      name: "ATT_EXTENSION_AAS",
      ID: "{5e1fc946-0a9d-4232-8c53-ae7b11c2cb59}",
      rowsID: "{d1a272fb-d062-4f7d-91c9-143ffdca3223}",
      colsID: "{85c74bb6-8ef0-4e3b-8543-f661411e2efe}",
      localNames: {
        en: "Extension", de: "Extension", es: "Extension", fr: "Extension", pl: "Extension", all: "Extension"
      },
      maxRows: 1,
      cols: [{
        ID: "{1110ef41-74a7-46e0-9516-819985a4d2ff}",
        name: "COL_EXTENSION",
        relationClassName: "RC_EXTENSION_AAS",
        type: "INTERREF",
        maxTargets: 1,
        localNames: {
          en: "Extension", de: "Extension", es: "Extension", fr: "Extension", pl: "Extension", all: "Extension"
        }
      }
      ]
    }, {
      name: "ATT_SUBMODEL_ELEMENT_AAS",
      ID: "{7f6c622d-b685-47f4-9d8d-b0fa04278bbd}",
      rowsID: "{1bd5cdaf-1d4c-4cf4-9649-46a8e06a1ed6}",
      colsID: "{2be8d3c8-fd3c-4856-98b8-10348d723604}",
      localNames: {
        en: "SubModel Element", de: "SubModel Element", es: "SubModel Element", fr: "SubModel Element", pl: "SubModel Element", all: "SubModel Element"
      },
      maxRows: 1,
      cols: [{
        ID: "{0af034e9-0789-4463-b063-0f5df6e0ac9e}",
        name: "COL_SUBMODEL_ELEMENT",
        relationClassName: "RC_SUBMODEL_ELEMENT_AAS",
        type: "INTERREF",
        maxTargets: 1,
        localNames: {
          en: "SubModel Element", de: "SubModel Element", es: "SubModel Element", fr: "SubModel Element", pl: "SubModel Element", all: "SubModel Element"
        }
      }
      ]
    }, {
      name: "ATT_QUALIFIER_AAS",
      ID: "{85f79b84-0577-4bd9-9578-47630744c227}",
      rowsID: "{3d370e8f-a58f-4614-85e5-0bba0209fb7e}",
      colsID: "{b26c63b0-4cf9-4601-9734-0f66667fe91f}",
      localNames: {
        en: "Qualifier", de: "Qualifier", es: "Qualifier", fr: "Qualifier", pl: "Qualifier", all: "Qualifier"
      },
      maxRows: 1,
      cols: [{
        ID: "{057cb051-0bff-4e12-ac03-ca416d467120}",
        name: "COL_QUALIFIER",
        relationClassName: "RC_QUALIFIER_AAS",
        type: "INTERREF",
        maxTargets: 1,
        localNames: {
          en: "Qualifier", de: "Qualifier", es: "Qualifier", fr: "Qualifier", pl: "Qualifier", all: "Qualifier"
        }
      }
      ]
    }, {
      name: "ATT_DATA_ELEMENT_AAS",
      ID: "{99d65c7d-bce4-4ddf-8c87-6580fdcc1574}",
      rowsID: "{c00a23e8-644f-48ae-a01f-f429c3384fcf}",
      colsID: "{a979823f-22d3-41c9-bc68-611dab816a22}",
      localNames: {
        en: "Data Element", de: "Data Element", es: "Data Element", fr: "Data Element", pl: "Data Element", all: "Data Element"
      },
      maxRows: 1,
      cols: [{
        ID: "{3cf14b6f-41a6-493e-ad17-1f69a2f11ea2}",
        name: "COL_DATA_ELEMENT",
        relationClassName: "RC_DATA_ELEMENT_AAS",
        type: "INTERREF",
        maxTargets: 1,
        localNames: {
          en: "Data Element", de: "Data Element", es: "Data Element", fr: "Data Element", pl: "Data Element", all: "Data Element"
        }
      }
      ]
    }, {
      name: "ATT_OPERATION_VARIABLE_AAS",
      ID: "{170ee1bd-0890-4209-8785-b297a8987377}",
      rowsID: "{6afb0d92-2056-4aeb-a1fc-d9ce9b51d791}",
      colsID: "{183db658-5a0f-4f55-8060-357948996cd4}",
      localNames: {
        en: "Operation Variable", de: "Operation Variable", es: "Operation Variable", fr: "Operation Variable", pl: "Operation Variable", all: "Operation Variable"
      },
      maxRows: 1,
      cols: [{
        ID: "{9f689e84-c39b-4545-97d3-ad3e6ea6b741}",
        name: "COL_OPERATION_VARIABLE",
        relationClassName: "RC_OPERATION_VARIABLE_AAS",
        type: "INTERREF",
        maxTargets: 1,
        localNames: {
          en: "Operation Variable", de: "Operation Variable", es: "Operation Variable", fr: "Operation Variable", pl: "Operation Variable", all: "Operation Variable"
        }
      }
      ]
    }

      , {
      name: "ATT_TASK_CONNECT_SUBMODEL_AAS",
      ID: "{a1f0d255-3fac-474b-9c24-6492cba45536}",
      rowsID: "{727b5d2b-86b1-411c-a0ee-b705c1f6bfb4}",
      colsID: "{5c4eec66-ae6a-4f72-86da-dc8ac15aeaf4}",
      localNames: {
        en: "Connected AAS Submodel", de: "Connected AAS Submodel", es: "Connected AAS Submodel", fr: "Connected AAS Submodel", pl: "Connected AAS Submodel", all: "Connected AAS Submodel"
      },
      maxRows: 1,
      cols: [{
        ID: "{3e8b04b8-29c0-4358-b158-33bc230b3a44}",
        name: "COL_TASK_CONNECT_SUBMODEL_AAS",
        relationClassName: "RC_TASK_CONNECT_SUBMODEL_AAS",
        type: "INTERREF",
        maxTargets: 1,
        localNames: {
          en: "Connected AAS Submodel", de: "Connected AAS Submodel", es: "Connected AAS Submodel", fr: "Connected AAS Submodel", pl: "Connected AAS Submodel", all: "Connected AAS Submodel"
        }
      }
      ]
    }
    ],

    attributes: [{
      name: "A_TYPE_AAS",
      ID: "{dd23e20a-1279-4556-8991-939bcd22380b}",
      type: "ENUM", //ExternalReference@ModelReference
      localNames: {
        en: "Type", de: "Type", es: "Type", fr: "Type", pl: "Type", all: "Type"
      },
      defaultValue: {
        all: "v0"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_KEY_AAS",
      ID: "{9b9083fd-a9a4-4114-bf89-b4d8e4628a00}",
      type: "ATT_KEYS_AAS",
      localNames: {
        en: "Key", de: "Key", es: "Key", fr: "Key", pl: "Key", all: "Key"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_NAME_AAS",
      ID: "{9760160b-0e16-41d8-bb2b-82eb3dec57e9}",
      type: "STRING",
      localNames: {
        en: "Name", de: "Name", es: "Name", fr: "Name", pl: "Name", all: "Name"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_VALUE_TYPE_AAS",
      ID: "{d8ed9396-208c-4afe-89ca-5c6ad87b9f33}",
      type: "ENUM", //xs:string@xs:boolean@xs:decimal@xs:integer@xs:double@xs:float@xs:date@xs:time@xs:dateTime@xs:gYear@xs:gMonth@xs:gDay@xs:gYearMonth@xs:gMonthDay@xs:duration@xs:byte@xs:short@xs:int@xs:long@xs:unsignedByte@xs:unsignedShort@xs:unsignedInt@xs:unsignedLong@xs:positiveInteger@xs:nonNegativeInteger@xs:negativeInteger@xs:nonPositiveInteger@xs:hexBinary@xs:base64Binary@xs:anyURI
      localNames: {
        en: "Value Type", de: "Value Type", es: "Value Type", fr: "Value Type", pl: "Value Type", all: "Value Type"
      },
      defaultValue: {
        all: "v0"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_VALUE_AAS",
      ID: "{0f8400d3-c982-470f-9de6-c9c1713c98a4}",
      type: "STRING",
      localNames: {
        en: "Value", de: "Value", es: "Value", fr: "Value", pl: "Value", all: "Value"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_REFERS_TO_AAS",
      ID: "{89861c0d-4941-4f38-9466-ab1dec42e923}",
      type: "ATT_REFERENCES_AAS",
      localNames: {
        en: "Refer To", de: "Refer To", es: "Refer To", fr: "Refer To", pl: "Refer To", all: "Refer To"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_SUPPLEMENTAL_SEMANTIC_ID_AAS",
      ID: "{3a176ca8-a843-4d58-9062-1a0e0280e086}",
      type: "ATT_REFERENCES_AAS",
      localNames: {
        en: "Supplemental Semantic Id", de: "Supplemental Semantic Id", es: "Supplemental Semantic Id", fr: "Supplemental Semantic Id", pl: "Supplemental Semantic Id", all: "Supplemental Semantic Id"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_ASSET_KIND_AAS",
      ID: "{3d41d3d7-a0c3-4084-be9b-a30561fea13a}",
      type: "ENUM", //Type@Instance@NotApplicable
      localNames: {
        en: "Asset Kind", de: "Asset Kind", es: "Asset Kind", fr: "Asset Kind", pl: "Asset Kind", all: "Asset Kind"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_SPECIFIC_ASSET_ID_AAS",
      ID: "{f2bfc3e3-cef1-402f-9c15-32532dadc5bf}",
      type: "ATT_SPECIFIC_ASSET_IDS_AAS",
      localNames: {
        en: "Specific Asset Id", de: "Specific Asset Id", es: "Specific Asset Id", fr: "Specific Asset Id", pl: "Specific Asset Id", all: "Specific Asset Id"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_GLOBAL_ASSET_ID_AAS",
      ID: "{29f56d7f-6a60-4ad2-a767-7a9fbb5371a2}",
      type: "STRING",
      localNames: {
        en: "Global Asset Id", de: "Global Asset Id", es: "Global Asset Id", fr: "Global Asset Id", pl: "Global Asset Id", all: "Global Asset Id"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_ASSET_TYPE_AAS",
      ID: "{5dbdbed4-f0b9-43d4-8038-fbc53b8aabb7}",
      type: "STRING",
      localNames: {
        en: "Asset Type", de: "Asset Type", es: "Asset Type", fr: "Asset Type", pl: "Asset Type", all: "Asset Type"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_DEFAULT_THUMBNAIL_PATH_AAS",
      ID: "{a19255a2-87ff-434f-bd4c-94dcf2ce341b}",
      type: "STRING",
      localNames: {
        en: "Default Thumbnail Path", de: "Default Thumbnail Path", es: "Default Thumbnail Path", fr: "Default Thumbnail Path", pl: "Default Thumbnail Path", all: "Default Thumbnail Path"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_DEFAULT_THUMBNAIL_CONTENT_TYPE_AAS",
      ID: "{dc05bd3d-fc59-40e0-af64-8c4113a38d61}",
      type: "STRING",
      localNames: {
        en: "Default Thumbnail Content Type", de: "Default Thumbnail Content Type", es: "Default Thumbnail Content Type", fr: "Default Thumbnail Content Type", pl: "Default Thumbnail Content Type", all: "Default Thumbnail Content Type"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_VERSION_AAS",
      ID: "{ebf344e1-06ff-471d-ab0e-e9ca3b47030c}",
      type: "STRING",
      localNames: {
        en: "Version", de: "Version", es: "Version", fr: "Version", pl: "Version", all: "Version"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_REVISION_AAS",
      ID: "{9c7c2983-1394-4760-aa88-2a3ccfdea051}",
      type: "STRING",
      localNames: {
        en: "Revision", de: "Revision", es: "Revision", fr: "Revision", pl: "Revision", all: "Revision"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_CREATOR_AAS",
      ID: "{3c749d10-2ac2-4e75-93df-60de0a6efbdf}",
      type: "STRING",
      localNames: {
        en: "Creator", de: "Creator", es: "Creator", fr: "Creator", pl: "Creator", all: "Creator"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_TEMPLATE_ID_AAS",
      ID: "{d800f15d-fbdd-4efc-9c50-dc93207e2e02}",
      type: "STRING",
      localNames: {
        en: "Template Id", de: "Template Id", es: "Template Id", fr: "Template Id", pl: "Template Id", all: "Template Id"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_ID_AAS",
      ID: "{3fcfccac-f1b0-4e75-aa5f-3d1cfba22d4d}",
      type: "STRING",
      localNames: {
        en: "Id", de: "Id", es: "Id", fr: "Id", pl: "Id", all: "Id"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_DATA_SPECIFICATION_AAS",
      ID: "{974389e7-9a79-48a0-ac44-992a8642b0e8}",
      type: "ATT_REFERENCES_AAS",
      localNames: {
        en: "Data Specification", de: "Data Specification", es: "Data Specification", fr: "Data Specification", pl: "Data Specification", all: "Data Specification"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_ID_SHORT_AAS",
      ID: "{dcc40172-def2-4f39-a400-7f52965a7657}",
      type: "STRING",
      localNames: {
        en: "Id Short", de: "Id Short", es: "Id Short", fr: "Id Short", pl: "Id Short", all: "Id Short"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_DISPLAY_NAME_AAS",
      ID: "{f75c588d-2e25-448f-b4b8-34b1830340c4}",
      type: "ATT_MULTILANGUAGE_TEXT_AAS",
      localNames: {
        en: "Display Name", de: "Display Name", es: "Display Name", fr: "Display Name", pl: "Display Name", all: "Display Name"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_DESCRIPTION_MULTI_AAS",
      ID: "{b0ef77bf-aeb7-424a-897d-f6b2ccfa399a}",
      type: "ATT_MULTILANGUAGE_TEXT_AAS",
      localNames: {
        en: "Description", de: "Description", es: "Description", fr: "Description", pl: "Description", all: "Description"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_EXTENSION_AAS",
      ID: "{6c6ef4c2-1ea1-4dcf-bc44-6cf92368e941}",
      type: "ATT_EXTENSIONS_AAS",
      localNames: {
        en: "Extension", de: "Extension", es: "Extension", fr: "Extension", pl: "Extension", all: "Extension"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_IS_CASE_OF_AAS",
      ID: "{4085d483-6a15-4043-9cd5-f02d8aea0f5a}",
      type: "ATT_REFERENCES_AAS",
      localNames: {
        en: "Is case of", de: "Is case of", es: "Is case of", fr: "Is case of", pl: "Is case of", all: "Is case of"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_PREFERRED_NAME_AAS",
      ID: "{5555910e-a55d-4621-afba-12bab0ab0832}",
      type: "ATT_MULTILANGUAGE_TEXT_AAS",
      localNames: {
        en: "Preferred Name", de: "Preferred Name", es: "Preferred Name", fr: "Preferred Name", pl: "Preferred Name", all: "Preferred Name"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_SHORT_NAME_AAS",
      ID: "{94d9de8c-bf8a-4b3d-a811-58c8abb8e0fb}",
      type: "ATT_MULTILANGUAGE_TEXT_AAS",
      localNames: {
        en: "Short Name", de: "Short Name", es: "Short Name", fr: "Short Name", pl: "Short Name", all: "Short Name"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_UNIT_AAS",
      ID: "{e204fa7a-1221-47a8-8ca7-21a126c22fbd}",
      type: "STRING",
      localNames: {
        en: "Unit", de: "Unit", es: "Unit", fr: "Unit", pl: "Unit", all: "Unit"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_SOURCE_OF_DEFINITION_AAS",
      ID: "{c755c82b-e4c1-41f9-a086-9a1e34410bd2}",
      type: "STRING",
      localNames: {
        en: "Source of definition", de: "Source of definition", es: "Source of definition", fr: "Source of definition", pl: "Source of definition", all: "Source of definition"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_SYMBOL_AAS",
      ID: "{709cde87-d926-46a9-8678-aa8a06d47f31}",
      type: "STRING",
      localNames: {
        en: "Symbol", de: "Symbol", es: "Symbol", fr: "Symbol", pl: "Symbol", all: "Symbol"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_DATA_TYPE_AAS",
      ID: "{695e7e1e-52b4-46c6-8448-299acda59344}",
      type: "ENUM", //DATE@STRING@STRING_TRANSLATABLE@INTEGER_MEASURE@INTEGER_COUNT@INTEGER_CURRENCY@REAL_MEASURE@REAL_COUNT@REAL_CURRENCY@BOOLEAN@IRI@IRDI@RATIONAL@RATIONAL_MEASURE@TIME@TIMESTAMP@HTML@BLOB@FILE
      localNames: {
        en: "Data Type", de: "Data Type", es: "Data Type", fr: "Data Type", pl: "Data Type", all: "Data Type"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_DEFINITION_AAS",
      ID: "{eb5eeaed-24a7-4903-b142-c3de6a2ce6d5}",
      type: "ATT_MULTILANGUAGE_TEXT_AAS",
      localNames: {
        en: "Definition", de: "Definition", es: "Definition", fr: "Definition", pl: "Definition", all: "Definition"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_VALUE_FORMAT_AAS",
      ID: "{6e3ca0d7-e945-4829-b60d-91d209f82052}",
      type: "STRING",
      localNames: {
        en: "Value Format", de: "Value Format", es: "Value Format", fr: "Value Format", pl: "Value Format", all: "Value Format"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_VALUE_LIST_AAS",
      ID: "{e57e9c8e-d0e9-4a8b-83fd-f9eca0c86997}",
      type: "ATT_VALUE_LISTS_AAS",
      localNames: {
        en: "Value List", de: "Value List", es: "Value List", fr: "Value List", pl: "Value List", all: "Value List"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_MIN_AAS",
      ID: "{a57b5085-014e-43fa-b336-c2503bf9e032}",
      type: "BOOL",
      localNames: {
        en: "Min", de: "Min", es: "Min", fr: "Min", pl: "Min", all: "Min"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_MAX_AAS",
      ID: "{1ab61ad9-a64c-4a2d-99de-495909bdc401}",
      type: "BOOL",
      localNames: {
        en: "Max", de: "Max", es: "Max", fr: "Max", pl: "Max", all: "Max"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_NOM_AAS",
      ID: "{7575c4f8-d6f4-49d5-a2a8-b2906ba44c87}",
      type: "BOOL",
      localNames: {
        en: "Nom", de: "Nom", es: "Nom", fr: "Nom", pl: "Nom", all: "Nom"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_TYP_AAS",
      ID: "{5e5691d4-73a2-40c5-80e8-7def42b788cd}",
      type: "BOOL",
      localNames: {
        en: "Typ", de: "Typ", es: "Typ", fr: "Typ", pl: "Typ", all: "Typ"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_KIND_AAS",
      ID: "{e8afd510-ad87-4df9-9afd-c7bc3f619ad3}",
      type: "ENUM", //ValueQualifier@ConceptQualifier@TemplateQualifier
      localNames: {
        en: "Kind", de: "Kind", es: "Kind", fr: "Kind", pl: "Kind", all: "Kind"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_SUBMODEL_ELEMENT_AAS",
      ID: "{09e68e83-1135-49fb-ad37-57ad0c4a37dd}",
      type: "ATT_SUBMODEL_ELEMENTS_AAS",
      localNames: {
        en: "Submodel Element", de: "Submodel Element", es: "Submodel Element", fr: "Submodel Element", pl: "Submodel Element", all: "Submodel Element"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_KIND_Q_AAS",
      ID: "{e5d9e293-52fb-4c06-b08f-4384ac13f421}",
      type: "ENUM", //Template@Instance
      localNames: {
        en: "Kind", de: "Kind", es: "Kind", fr: "Kind", pl: "Kind", all: "Kind"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_QUALIFIER_AAS",
      ID: "{d59a3927-e8e5-48d9-854c-e909a025578a}",
      type: "ATT_QUALIFIERS_AAS",
      localNames: {
        en: "Qualifier", de: "Qualifier", es: "Qualifier", fr: "Qualifier", pl: "Qualifier", all: "Qualifier"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_DATA_ELEMENT_AAS",
      ID: "{b559f765-c565-4147-b18f-aa4851fe91d2}",
      type: "ATT_DATA_ELEMENTS_AAS",
      localNames: {
        en: "Data Element", de: "Data Element", es: "Data Element", fr: "Data Element", pl: "Data Element", all: "Data Element"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_VALUE_R_AAS",
      ID: "{b7ae88be-3428-4149-b64d-3670d1258b3f}",
      type: "ATT_MULTILANGUAGE_TEXT_AAS",
      localNames: {
        en: "Value", de: "Value", es: "Value", fr: "Value", pl: "Value", all: "Value"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_MIN_S_AAS",
      ID: "{cbdcd171-9595-4a92-a530-7d01da915cc5}",
      type: "STRING",
      localNames: {
        en: "Min", de: "Min", es: "Min", fr: "Min", pl: "Min", all: "Min"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_MAX_S_AAS",
      ID: "{43292596-fd7e-4b56-8bf4-e35bc94d3409}",
      type: "STRING",
      localNames: {
        en: "Max", de: "Max", es: "Max", fr: "Max", pl: "Max", all: "Max"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_CONTENT_TYPE_AAS",
      ID: "{e7a516b7-2fb0-42d1-ad7f-3f659f400e6f}",
      type: "STRING",
      localNames: {
        en: "Content Type", de: "Content Type", es: "Content Type", fr: "Content Type", pl: "Content Type", all: "Content Type"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_ORDER_RELEVANT_AAS",
      ID: "{570ad0ba-a0ad-4c94-bbdb-5e5749d23aef}",
      type: "BOOL",
      localNames: {
        en: "Order Relevant", de: "Order Relevant", es: "Order Relevant", fr: "Order Relevant", pl: "Order Relevant", all: "Order Relevant"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_TYPE_VALUE_LIST_ELEMENT_AAS",
      ID: "{63418b72-3c1b-456f-a20e-64b03e58fb61}",
      type: "ENUM", //AnnotatedRelationshipElement@BasicEventElement@Blob@Capability@DataElement@Entity@EventElement@File@MultiLanguageProperty@Operation@Property@Range@ReferenceElement@RelationshipElement@SubmodelElement@SubmodelElementCollection@SubmodelElementList
      localNames: {
        en: "Type", de: "Type", es: "Type", fr: "Type", pl: "Type", all: "Type"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_VALUE_TYPE_LIST_ELEMENT_AAS",
      ID: "{c89e5d74-9dcf-4038-a2f2-69ff96dff13f}",
      type: "ENUM", //xs:string@xs:boolean@xs:decimal@xs:integer@xs:double@xs:float@xs:date@xs:time@xs:dateTime@xs:gYear@xs:gMonth@xs:gDay@xs:gYearMonth@xs:gMonthDay@xs:duration@xs:byte@xs:short@xs:int@xs:long@xs:unsignedByte@xs:unsignedShort@xs:unsignedInt@xs:unsignedLong@xs:positiveInteger@xs:nonNegativeInteger@xs:negativeInteger@xs:nonPositiveInteger@xs:hexBinary@xs:base64Binary@xs:anyURI
      localNames: {
        en: "Value Type", de: "Value Type", es: "Value Type", fr: "Value Type", pl: "Value Type", all: "Value Type"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_VALUE_RR_AAS",
      ID: "{eddd09c7-0f16-4da7-898b-7b270f4174a1}",
      type: "ATT_SUBMODEL_ELEMENTS_AAS",
      localNames: {
        en: "Value", de: "Value", es: "Value", fr: "Value", pl: "Value", all: "Value"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_INPUT_VARIABLE_AAS",
      ID: "{93ecaeb5-0f2a-4ab9-a113-8450d72cea1a}",
      type: "ATT_OPERATION_VARIABLES_AAS",
      localNames: {
        en: "Input Variable", de: "Input Variable", es: "Input Variable", fr: "Input Variable", pl: "Input Variable", all: "Input Variable"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_OUTPUT_VARIABLE_AAS",
      ID: "{20c2c30c-42c4-45e9-b1ab-eaeb4eb78462}",
      type: "ATT_OPERATION_VARIABLES_AAS",
      localNames: {
        en: "Output Variable", de: "Output Variable", es: "Output Variable", fr: "Output Variable", pl: "Output Variable", all: "Output Variable"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_INOUTPUT_VARIABLE_AAS",
      ID: "{013350b5-a915-483e-a472-aebc16b04214}",
      type: "ATT_OPERATION_VARIABLES_AAS",
      localNames: {
        en: "Input Output Variable", de: "Input Output Variable", es: "Input Output Variable", fr: "Input Output Variable", pl: "Input Output Variable", all: "Input Output Variable"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_STATEMENT_AAS",
      ID: "{6be95586-150e-417d-aa2c-12e4408d367b}",
      type: "ATT_SUBMODEL_ELEMENTS_AAS",
      localNames: {
        en: "Statement", de: "Statement", es: "Statement", fr: "Statement", pl: "Statement", all: "Statement"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_ENTITY_TYPE_AAS",
      ID: "{89e961a7-bb83-4908-9543-fb64402d0bed}",
      type: "ENUM", //CoManagedEntity@SelfManagedEntity
      localNames: {
        en: "Entity Type", de: "Entity Type", es: "Entity Type", fr: "Entity Type", pl: "Entity Type", all: "Entity Type"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    },




    {
      name: "A_REFERRED_SEMANTIC_ID_SINGLE_AAS",
      ID: "{2c2cfbe8-86d5-40cb-b25d-967a1ba7d49d}",
      type: "ATT_REFERENCE_AAS",
      localNames: {
        en: "Referred Semantic Id", de: "Referred Semantic Id", es: "Referred Semantic Id", fr: "Referred Semantic Id", pl: "Referred Semantic Id", all: "Referred Semantic Id"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_EXTERNAL_SUBJECT_ID_SINGLE_AAS",
      ID: "{aff30588-b25f-486b-bb48-4299cbeb8aec}",
      type: "ATT_REFERENCE_AAS",
      localNames: {
        en: "External Subject Id", de: "External Subject Id", es: "External Subject Id", fr: "External Subject Id", pl: "External Subject Id", all: "External Subject Id"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_SEMANTIC_ID_SINGLE_AAS",
      ID: "{a5221f61-750c-4d8b-b05a-b6daeae56c93}",
      type: "ATT_REFERENCE_AAS",
      localNames: {
        en: "Semantic Id", de: "Semantic Id", es: "Semantic Id", fr: "Semantic Id", pl: "Semantic Id", all: "Semantic Id"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_DERIVED_FROM_SINGLE_AAS",
      ID: "{bf22d594-f244-4f6c-a2d3-2f142d84bb16}",
      type: "ATT_DERIVED_FROM_AAS",
      localNames: {
        en: "Derived from", de: "Derived from", es: "Derived from", fr: "Derived from", pl: "Derived from", all: "Derived from"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_UNIT_ID_SINGLE_AAS",
      ID: "{4be3c693-2f3a-40d6-b9eb-627d8e7874ec}",
      type: "ATT_REFERENCE_AAS",
      localNames: {
        en: "Unit Id", de: "Unit Id", es: "Unit Id", fr: "Unit Id", pl: "Unit Id", all: "Unit Id"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_VALUE_ID_SINGLE_AAS",
      ID: "{9f447a34-fee0-44e2-b814-0dc6f00d7a54}",
      type: "ATT_REFERENCE_AAS",
      localNames: {
        en: "Value Id", de: "Value Id", es: "Value Id", fr: "Value Id", pl: "Value Id", all: "Value Id"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_FIRST_SINGLE_AAS",
      ID: "{3c92cc4a-2241-4440-96cf-4b44e42e3504}",
      type: "ATT_REFERENCE_AAS",
      localNames: {
        en: "First", de: "First", es: "First", fr: "First", pl: "First", all: "First"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_SECOND_SINGLE_AAS",
      ID: "{c55e4405-d5b6-4cf2-910c-6da888a640fe}",
      type: "ATT_REFERENCE_AAS",
      localNames: {
        en: "Second", de: "Second", es: "Second", fr: "Second", pl: "Second", all: "Second"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_VALUE_SINGLE_AAS",
      ID: "{c6d7a327-6371-47fb-80e5-8c9c105a8212}",
      type: "ATT_REFERENCE_AAS",
      localNames: {
        en: "Value", de: "Value", es: "Value", fr: "Value", pl: "Value", all: "Value"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_SEMANTIC_ID_LIST_ELEMENT_SINGLE_AAS",
      ID: "{6227f811-25c6-466f-b22e-7c845fb1b1f6}",
      type: "ATT_REFERENCE_AAS",
      localNames: {
        en: "Semantic Id List Element", de: "Semantic Id List Element", es: "Semantic Id List Element", fr: "Semantic Id List Element", pl: "Semantic Id List Element", all: "Semantic Id List Element"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_OPERATION_VARIABLE_VALUE_SINGLE_AAS",
      ID: "{91de523e-d9e7-49d8-a480-57fb41e5578c}",
      type: "ATT_OPERATION_VARIABLE_VALUE_AAS",
      localNames: {
        en: "Operation Variable Value", de: "Operation Variable Value", es: "Operation Variable Value", fr: "Operation Variable Value", pl: "Operation Variable Value", all: "Operation Variable Value"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_SPECIFIC_ASSET_ID_SINGLE_AAS",
      ID: "{bd08a5f4-1036-4e92-861c-28b6ea4c6d97}",
      type: "ATT_SPECIFIC_ASSET_ID_AAS",
      localNames: {
        en: "Specific Asset Id", de: "Specific Asset Id", es: "Specific Asset Id", fr: "Specific Asset Id", pl: "Specific Asset Id", all: "Specific Asset Id"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_EXTENSION_SINGLE",
      ID: "{bb1f0976-da6f-4355-8033-c35b4cabcc20}",
      type: "ATT_EXTENSION_AAS",
      localNames: {
        en: "Extension", de: "Extension", es: "Extension", fr: "Extension", pl: "Extension", all: "Extension"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_SUBMODEL_ELEMENT_SINGLE",
      ID: "{efc2e912-5567-4283-b202-565a1777123b}",
      type: "ATT_SUBMODEL_ELEMENT_AAS",
      localNames: {
        en: "SubModel Element", de: "SubModel Element", es: "SubModel Element", fr: "SubModel Element", pl: "SubModel Element", all: "SubModel Element"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_QUALIFIER_SINGLE",
      ID: "{7b1f224d-ce51-43ef-bd0a-0787834ccf09}",
      type: "ATT_QUALIFIER_AAS",
      localNames: {
        en: "Qualifier", de: "Qualifier", es: "Qualifier", fr: "Qualifier", pl: "Qualifier", all: "Qualifier"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_DATA_ELEMENT_SINGLE",
      ID: "{3a6bd2a0-0b55-47f2-9b80-739ac6270f50}",
      type: "ATT_DATA_ELEMENT_AAS",
      localNames: {
        en: "Data Element", de: "Data Element", es: "Data Element", fr: "Data Element", pl: "Data Element", all: "Data Element"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }, {
      name: "A_OPERATION_VARIABLE_SINGLE",
      ID: "{55558e5f-a64e-4c78-ae3e-4e18c9b104b5}",
      type: "ATT_OPERATION_VARIABLE_AAS",
      localNames: {
        en: "Operation Variable", de: "Operation Variable", es: "Operation Variable", fr: "Operation Variable", pl: "Operation Variable", all: "Operation Variable"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    },

    {
      name: "A_TASK_CONNECT_SUBMODEL_AAS",
      ID: "{f37b5a17-8bc9-45f8-8d81-df22401c5ab6}",
      type: "ATT_TASK_CONNECT_SUBMODEL_AAS",
      localNames: {
        en: "Connected AAS Submodel", de: "Connected AAS Submodel", es: "Connected AAS Submodel", fr: "Connected AAS Submodel", pl: "Connected AAS Submodel", all: "Connected AAS Submodel"
      },
      classAttribute: false,
      modelContextSpecific: true,
      visible: true
    }
    ],

    modelTypes: [{
      name: "MT_AAS",
      ID: "{83c59633-6418-4685-875a-23670b7c51df}",
      localNames: {
        en: "Asset Administration Shell (AAS)", de: "Asset Administration Shell (AAS)", es: "Asset Administration Shell (AAS)", fr: "Asset Administration Shell (AAS)", pl: "Asset Administration Shell (AAS)", all: "Asset Administration Shell (AAS)"
      },
      visible: true
    }
    ],

    classes: [{
      name: "C_REFERABLE_AAS",
      ID: "{6b54e541-b1fb-4062-829a-e0494e3aa0ea}",
      localNames: {
        en: "Referable", de: "Referable", es: "Referable", fr: "Referable", pl: "Referable", all: "Referable"
      },
      superClass: "__MODELLING_CLASS__",
      isAbstract: true,
      repoClass: false,
      visible: true
    }, {
      name: "C_REFERENCE_AAS",
      ID: "{e58ce3e3-428a-4edc-8419-bfa436c2a4d8}",
      localNames: {
        en: "Reference", de: "Reference", es: "Reference", fr: "Reference", pl: "Reference", all: "Reference"
      },
      superClass: "__MODELLING_CLASS__",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_EXTENSION_AAS",
      ID: "{959a2f23-c4ed-4234-84f7-80a61ceefedb}",
      localNames: {
        en: "Extension", de: "Extension", es: "Extension", fr: "Extension", pl: "Extension", all: "Extension"
      },
      superClass: "__MODELLING_CLASS__",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_SPECIFIC_ASSET_ID_AAS",
      ID: "{2c306a7a-5e83-48d9-864a-d73a59f10cad}",
      localNames: {
        en: "Specific Asset Id", de: "Specific Asset Id", es: "Specific Asset Id", fr: "Specific Asset Id", pl: "Specific Asset Id", all: "Specific Asset Id"
      },
      superClass: "__MODELLING_CLASS__",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_ASSET_ADMINISTRATION_SHELL_AAS",
      ID: "{9bf9746e-1cf0-400f-9609-7cb405772d4a}",
      localNames: {
        en: "Asset Administration Shell", de: "Asset Administration Shell", es: "Asset Administration Shell", fr: "Asset Administration Shell", pl: "Asset Administration Shell", all: "Asset Administration Shell"
      },
      superClass: "C_REFERABLE_AAS",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_CONCEPT_DESCRIPTION_AAS",
      ID: "{f48ffcac-a5aa-40c3-b664-e128c47ea38a}",
      localNames: {
        en: "Concept Description", de: "Concept Description", es: "Concept Description", fr: "Concept Description", pl: "Concept Description", all: "Concept Description"
      },
      superClass: "__MODELLING_CLASS__",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_DATA_SPECIFICATION_AAS",
      ID: "{b56f7b85-28b5-4849-a46e-aeb50b0aa7fe}",
      localNames: {
        en: "Data Specification", de: "Data Specification", es: "Data Specification", fr: "Data Specification", pl: "Data Specification", all: "Data Specification"
      },
      superClass: "__MODELLING_CLASS__",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_QUALIFIER_AAS",
      ID: "{c60d5a31-d577-4980-8a29-948863de3f4f}",
      localNames: {
        en: "Qualifier", de: "Qualifier", es: "Qualifier", fr: "Qualifier", pl: "Qualifier", all: "Qualifier"
      },
      superClass: "__MODELLING_CLASS__",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_QUALIFIABLE_AAS",
      ID: "{2848649f-8c00-41f5-84c2-f2f6168711fd}",
      localNames: {
        en: "Qualifiable", de: "Qualifiable", es: "Qualifiable", fr: "Qualifiable", pl: "Qualifiable", all: "Qualifiable"
      },
      superClass: "C_REFERABLE_AAS",
      isAbstract: true,
      repoClass: false,
      visible: true
    }, {
      name: "C_SUBMODEL_AAS",
      ID: "{bb4c2e94-4ab3-4814-8fab-e5d6b56cdf54}",
      localNames: {
        en: "SubModel", de: "SubModel", es: "SubModel", fr: "SubModel", pl: "SubModel", all: "SubModel"
      },
      superClass: "C_QUALIFIABLE_AAS",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_SUBMODEL_ELEMENT_AAS",
      ID: "{31c707be-0c53-438b-8f3d-a4a904d0ed89}",
      localNames: {
        en: "SubModel Element", de: "SubModel Element", es: "SubModel Element", fr: "SubModel Element", pl: "SubModel Element", all: "SubModel Element"
      },
      superClass: "C_QUALIFIABLE_AAS",
      isAbstract: true,
      repoClass: false,
      visible: true
    }, {
      name: "C_RELATIONSHIP_ELEMENT_AAS",
      ID: "{ff9fb247-eeca-47a2-94d6-b6c7b5a0c247}",
      localNames: {
        en: "Relationship Element", de: "Relationship Element", es: "Relationship Element", fr: "Relationship Element", pl: "Relationship Element", all: "Relationship Element"
      },
      superClass: "C_SUBMODEL_ELEMENT_AAS",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_ANNOTATION_RELATIONSHIP_ELEMENT_AAS",
      ID: "{d3f9ce01-70e5-4e0a-b5a7-703c1594c05f}",
      localNames: {
        en: "Annotation Relationship Element", de: "Annotation Relationship Element", es: "Annotation Relationship Element", fr: "Annotation Relationship Element", pl: "Annotation Relationship Element", all: "Annotation Relationship Element"
      },
      superClass: "C_RELATIONSHIP_ELEMENT_AAS",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_DATA_ELEMENT_AAS",
      ID: "{f0f54fbb-9237-465c-a5a0-c019660176cc}",
      localNames: {
        en: "Data Element", de: "Data Element", es: "Data Element", fr: "Data Element", pl: "Data Element", all: "Data Element"
      },
      superClass: "C_SUBMODEL_ELEMENT_AAS",
      isAbstract: true,
      repoClass: false,
      visible: true
    }, {
      name: "C_PROPERTY_AAS",
      ID: "{6a517174-7f30-4bbd-a0a9-ad0fcc7e09c1}",
      localNames: {
        en: "Property", de: "Property", es: "Property", fr: "Property", pl: "Property", all: "Property"
      },
      superClass: "C_DATA_ELEMENT_AAS",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_MULTILANGUAGE_PROPERTY_AAS",
      ID: "{aafacbaf-fec1-46a0-8b76-198cbcc4a232}",
      localNames: {
        en: "Multi Language Property", de: "Multi Language Property", es: "Multi Language Property", fr: "Multi Language Property", pl: "Multi Language Property", all: "Multi Language Property"
      },
      superClass: "C_DATA_ELEMENT_AAS",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_RANGE_AAS",
      ID: "{cb230088-b146-4790-87d2-43920d1f420b}",
      localNames: {
        en: "Range", de: "Range", es: "Range", fr: "Range", pl: "Range", all: "Range"
      },
      superClass: "C_DATA_ELEMENT_AAS",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_BLOB_AAS",
      ID: "{8509374e-6a59-4501-9bac-e7e98bf3243c}",
      localNames: {
        en: "Blob", de: "Blob", es: "Blob", fr: "Blob", pl: "Blob", all: "Blob"
      },
      superClass: "C_DATA_ELEMENT_AAS",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_FILE_AAS",
      ID: "{5335b5c3-4863-467b-9784-ad48b3d23a9b}",
      localNames: {
        en: "File", de: "File", es: "File", fr: "File", pl: "File", all: "File"
      },
      superClass: "C_DATA_ELEMENT_AAS",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_REFERENCE_ELEMENT_AAS",
      ID: "{c6f77257-93c7-406a-b063-6b9c8fc08f92}",
      localNames: {
        en: "Reference Element", de: "Reference Element", es: "Reference Element", fr: "Reference Element", pl: "Reference Element", all: "Reference Element"
      },
      superClass: "C_DATA_ELEMENT_AAS",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_SUBMODEL_ELEMENT_LIST_AAS",
      ID: "{1be903fa-0179-4367-93a9-8aea204e2725}",
      localNames: {
        en: "SubModel Element List", de: "SubModel Element List", es: "SubModel Element List", fr: "SubModel Element List", pl: "SubModel Element List", all: "SubModel Element List"
      },
      superClass: "C_SUBMODEL_ELEMENT_AAS",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_CAPABILITY_AAS",
      ID: "{e29fe117-0550-44bc-8ae5-e29dcf8cc198}",
      localNames: {
        en: "Capability", de: "Capability", es: "Capability", fr: "Capability", pl: "Capability", all: "Capability"
      },
      superClass: "C_SUBMODEL_ELEMENT_AAS",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_SUBMODEL_ELEMENT_COLLECTION_AAS",
      ID: "{e11b0fe2-e474-4251-b89c-84da3691ee3d}",
      localNames: {
        en: "SubModel Element Collection", de: "SubModel Element Collection", es: "SubModel Element Collection", fr: "SubModel Element Collection", pl: "SubModel Element Collection", all: "SubModel Element Collection"
      },
      superClass: "C_SUBMODEL_ELEMENT_AAS",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_OPERATION_AAS",
      ID: "{ac51d4ac-4fbc-4917-909a-7bbbb309de35}",
      localNames: {
        en: "Operation", de: "Operation", es: "Operation", fr: "Operation", pl: "Operation", all: "Operation"
      },
      superClass: "C_SUBMODEL_ELEMENT_AAS",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_OPERATION_VARIABLE_AAS",
      ID: "{4a26134b-38d3-4316-8e88-656118fed565}",
      localNames: {
        en: "Operation Variable", de: "Operation Variable", es: "Operation Variable", fr: "Operation Variable", pl: "Operation Variable", all: "Operation Variable"
      },
      superClass: "__MODELLING_CLASS__",
      isAbstract: false,
      repoClass: false,
      visible: true
    }, {
      name: "C_ENTITY_AAS",
      ID: "{2f3329a4-86e1-43eb-98ef-409c7b1c4a1f}",
      localNames: {
        en: "Entity", de: "Entity", es: "Entity", fr: "Entity", pl: "Entity", all: "Entity"
      },
      superClass: "C_SUBMODEL_ELEMENT_AAS",
      isAbstract: false,
      repoClass: false,
      visible: true
    }
    ],

    relationClasses: [{
      name: "RC_DERIVED_FROM_AAS",
      ID: "{152625b1-6f16-4d3c-90e0-6236abe5dcba}",
      localNames: {
        en: "Derived from", de: "Derived from", es: "Derived from", fr: "Derived from", pl: "Derived from", all: "Derived from"
      },
      EPIDs: {
        TO: "{c73c6cfa-e9fc-47d3-85a1-581f8ef29510}",
        FROM: "{53f84773-c296-4ef1-bd87-b76c353fbc4e}"
      },
      repoClass: false,
      visible: true
    }, {
      name: "RC_HAS_SUBMODEL_AAS",
      ID: "{dea487c0-33ef-4fc1-9c05-3f09d53cd943}",
      localNames: {
        en: "Has SubModel", de: "Has SubModel", es: "Has SubModel", fr: "Has SubModel", pl: "Has SubModel", all: "Has SubModel"
      },
      EPIDs: {
        TO: "{c97fd990-a20b-458e-a2c2-3a7672c4bc7a}",
        FROM: "{6d90e90b-c853-4f9f-974b-3631dd34efa2}"
      },
      repoClass: false,
      visible: true
    }, {
      name: "RC_HAS_QUALIFIER_AAS",
      ID: "{2916fa5d-e7f7-4151-ae5b-4a9752aac7d9}",
      localNames: {
        en: "Has Qualifier", de: "Has Qualifier", es: "Has Qualifier", fr: "Has Qualifier", pl: "Has Qualifier", all: "Has Qualifier"
      },
      EPIDs: {
        TO: "{c4883a17-9b5b-4ca9-af45-367281b7a9e5}",
        FROM: "{d4005fc2-09d8-47a7-a50a-6a1ea5e36d7e}"
      },
      repoClass: false,
      visible: true
    }, {
      name: "RC_HAS_ELEMENT_AAS",
      ID: "{60d4de10-9612-4227-a570-23e687332075}",
      localNames: {
        en: "Has Element", de: "Has Element", es: "Has Element", fr: "Has Element", pl: "Has Element", all: "Has Element"
      },
      EPIDs: {
        TO: "{2741b007-e20d-4f21-9967-2cc8e23ca3ab}",
        FROM: "{ef157c1e-6408-4516-89d0-3436b8db4ba6}"
      },
      repoClass: false,
      visible: true
    }, {
      name: "RC_COLLECT_AAS",
      ID: "{9db14778-cc89-4a90-ae1f-cd3aa049e8ef}",
      localNames: {
        en: "Collect", de: "Collect", es: "Collect", fr: "Collect", pl: "Collect", all: "Collect"
      },
      EPIDs: {
        TO: "{0d00705f-96e1-4508-acbe-1815c44d6c6a}",
        FROM: "{4d8b1d3e-fef9-49fc-a12e-f18397f69d20}"
      },
      repoClass: false,
      visible: true
    }, {
      name: "RC_LIST_AAS",
      ID: "{81506ad4-9af2-4dd0-a978-f7c91a46a87e}",
      localNames: {
        en: "List", de: "List", es: "List", fr: "List", pl: "List", all: "List"
      },
      EPIDs: {
        TO: "{239dabc2-4614-4f04-a56f-248b8d68bc25}",
        FROM: "{6e1ff29a-5537-49fe-9758-36a5be48e35c}"
      },
      repoClass: false,
      visible: true
    }, {
      name: "RC_REFERENCE_AAS",
      ID: "{1601e472-e94a-4772-adac-d28620d8c064}",
      localNames: {
        en: "Reference", de: "Reference", es: "Reference", fr: "Reference", pl: "Reference", all: "Reference"
      },
      EPIDs: {
        TO: "{94d08c94-b390-4e05-b94a-c4f578cfeedb}",
        FROM: "{9a9637c3-1979-4806-96ce-da4b4ff408a0}"
      },
      repoClass: false,
      visible: true
    },




    {
      name: "RC_OPERATION_VARIABLE_VALUE_AAS",
      ID: "{eb0aec1b-0ea2-461c-9b9a-a9b45a7b9bd6}",
      localNames: {
        en: "Operation Variable Value", de: "Operation Variable Value", es: "Operation Variable Value", fr: "Operation Variable Value", pl: "Operation Variable Value", all: "Operation Variable Value"
      },
      EPIDs: {
        TO: "{776c012d-56f6-49c1-92cf-fdc000d96d1e}",
        FROM: "{5586539f-508b-41e1-a186-e5b20dd72a80}"
      },
      repoClass: false,
      visible: true
    }, {
      name: "RC_SPECIFIC_ASSET_ID_AAS",
      ID: "{6dbf32a9-25fa-4b78-894c-0f95deb017b3}",
      localNames: {
        en: "Specific Asset Id", de: "Specific Asset Id", es: "Specific Asset Id", fr: "Specific Asset Id", pl: "Specific Asset Id", all: "Specific Asset Id"
      },
      EPIDs: {
        TO: "{e7b64adc-9632-46d8-bcaf-38a28bd91d2a}",
        FROM: "{339396e7-ba6d-4970-b3b5-c5423da60609}"
      },
      repoClass: false,
      visible: true
    }, {
      name: "RC_EXTENSION_AAS",
      ID: "{b76596e4-1c58-4150-96fa-406b4d45783f}",
      localNames: {
        en: "Extension", de: "Extension", es: "Extension", fr: "Extension", pl: "Extension", all: "Extension"
      },
      EPIDs: {
        TO: "{88d39a42-2998-435a-bec7-dfae1308e9de}",
        FROM: "{9496042e-0c6f-46bb-8c00-7b600c729b41}"
      },
      repoClass: false,
      visible: true
    }, {
      name: "RC_SUBMODEL_ELEMENT_AAS",
      ID: "{a44d3c71-7ca7-40a4-b20c-3741ebfead4e}",
      localNames: {
        en: "SubModel Element", de: "SubModel Element", es: "SubModel Element", fr: "SubModel Element", pl: "SubModel Element", all: "SubModel Element"
      },
      EPIDs: {
        TO: "{e345ed85-a71d-46f8-9df5-b2981c01f313}",
        FROM: "{b48fa2f5-c05c-447d-abc0-ccfdde3b1eff}"
      },
      repoClass: false,
      visible: true
    }, {
      name: "RC_QUALIFIER_AAS",
      ID: "{b909b65c-d07f-4ac9-a163-ea2ea249057b}",
      localNames: {
        en: "Qualifier", de: "Qualifier", es: "Qualifier", fr: "Qualifier", pl: "Qualifier", all: "Qualifier"
      },
      EPIDs: {
        TO: "{4b8e1898-6621-4745-9270-1fefd730ea85}",
        FROM: "{5e6cb86e-b8b5-4b94-bfa8-e73e261938ee}"
      },
      repoClass: false,
      visible: true
    }, {
      name: "RC_DATA_ELEMENT_AAS",
      ID: "{87820643-1401-40d4-a7f9-32a1657ba750}",
      localNames: {
        en: "Data Element", de: "Data Element", es: "Data Element", fr: "Data Element", pl: "Data Element", all: "Data Element"
      },
      EPIDs: {
        TO: "{8caf35e6-d7db-49a2-8f88-2bc2118379a2}",
        FROM: "{2e53150d-cb43-4894-9405-86641132db39}"
      },
      repoClass: false,
      visible: true
    }, {
      name: "RC_OPERATION_VARIABLE_AAS",
      ID: "{e9f700a4-4119-4be7-9574-b9ed834abe9d}",
      localNames: {
        en: "Operation Variable", de: "Operation Variable", es: "Operation Variable", fr: "Operation Variable", pl: "Operation Variable", all: "Operation Variable"
      },
      EPIDs: {
        TO: "{76dcb057-a64b-4597-988a-4698c733a938}",
        FROM: "{e4a32154-496a-4e2d-94d2-b5c31bf927e7}"
      },
      repoClass: false,
      visible: true
    },

    {
      name: "RC_TASK_CONNECT_SUBMODEL_AAS",
      ID: "{89bdbce7-c519-4db7-a40c-2c9583440474}",
      localNames: {
        en: "Connected AAS Submodel", de: "Connected AAS Submodel", es: "Connected AAS Submodel", fr: "Connected AAS Submodel", pl: "Connected AAS Submodel", all: "Connected AAS Submodel"
      },
      EPIDs: {
        TO: "{646ceaf9-bce7-4663-b24e-279105bf4b97}",
        FROM: "{4dd89cb4-3cdf-4199-9105-49ce40e91b16}"
      },
      repoClass: false,
      visible: true
    }
    ]
  },

  assignments: {
    attributeInfos: [],

    constraints: [{
      container: [{
        ATTC: "ATT_KEYS_AAS",
        IDX: 0
      }, {
        AT: "A_TYPE_VALUE_LIST_ELEMENT_AAS"
      }
      ],
      constraint: {
        name: "v0@v1@v2@v3@v4@v5@v6@v7@v8@v9@v10@v11@v12@v13@v14@v15@v16@v17@v18@v19@v20@v21@v22@v23@v24",
        localNames: {
          en: "AnnotationRelationshipElement@AssetAdministrationShell@BasicEventElement@Blob@Capability@ConceptDescription@DataElement@Entity@EventElement@File@FragmentReference@GlobalReference@Identifiable@MultiLanguageProperty@Range@Operation@Property@Range@Referable@ReferenceElement@RelationshipElement@Submodel@SubmodelElement@SubmodelElementCollection@SubmodelElementList", de: "AnnotationRelationshipElement@AssetAdministrationShell@BasicEventElement@Blob@Capability@ConceptDescription@DataElement@Entity@EventElement@File@FragmentReference@GlobalReference@Identifiable@MultiLanguageProperty@Range@Operation@Property@Range@Referable@ReferenceElement@RelationshipElement@Submodel@SubmodelElement@SubmodelElementCollection@SubmodelElementList", es: "AnnotationRelationshipElement@AssetAdministrationShell@BasicEventElement@Blob@Capability@ConceptDescription@DataElement@Entity@EventElement@File@FragmentReference@GlobalReference@Identifiable@MultiLanguageProperty@Range@Operation@Property@Range@Referable@ReferenceElement@RelationshipElement@Submodel@SubmodelElement@SubmodelElementCollection@SubmodelElementList", fr: "AnnotationRelationshipElement@AssetAdministrationShell@BasicEventElement@Blob@Capability@ConceptDescription@DataElement@Entity@EventElement@File@FragmentReference@GlobalReference@Identifiable@MultiLanguageProperty@Range@Operation@Property@Range@Referable@ReferenceElement@RelationshipElement@Submodel@SubmodelElement@SubmodelElementCollection@SubmodelElementList", pl: "AnnotationRelationshipElement@AssetAdministrationShell@BasicEventElement@Blob@Capability@ConceptDescription@DataElement@Entity@EventElement@File@FragmentReference@GlobalReference@Identifiable@MultiLanguageProperty@Range@Operation@Property@Range@Referable@ReferenceElement@RelationshipElement@Submodel@SubmodelElement@SubmodelElementCollection@SubmodelElementList", all: "AnnotationRelationshipElement@AssetAdministrationShell@BasicEventElement@Blob@Capability@ConceptDescription@DataElement@Entity@EventElement@File@FragmentReference@GlobalReference@Identifiable@MultiLanguageProperty@Range@Operation@Property@Range@Referable@ReferenceElement@RelationshipElement@Submodel@SubmodelElement@SubmodelElementCollection@SubmodelElementList",
        }
      }
    }, {
      container: [{
        AT: "A_TYPE_AAS"
      }
      ],
      constraint: {
        name: "v0@v1",
        localNames: {
          en: "ExternalReference@ModelReference", de: "ExternalReference@ModelReference", es: "ExternalReference@ModelReference", fr: "ExternalReference@ModelReference", pl: "ExternalReference@ModelReference", all: "ExternalReference@ModelReference",
        }
      }
    }, {
      container: [{
        AT: "A_VALUE_TYPE_AAS"
      }, {
        AT: "A_VALUE_TYPE_LIST_ELEMENT_AAS"
      }
      ],
      constraint: {
        name: "v0@v1@v2@v3@v4@v5@v6@v7@v8@v9@v10@v11@v12@v13@v14@v15@v16@v17@v18@v19@v20@v21@v22@v23@v24@v25@v26@v27@v28@v29",
        localNames: {
          en: "xs:string@xs:boolean@xs:decimal@xs:integer@xs:double@xs:float@xs:date@xs:time@xs:dateTime@xs:gYear@xs:gMonth@xs:gDay@xs:gYearMonth@xs:gMonthDay@xs:duration@xs:byte@xs:short@xs:int@xs:long@xs:unsignedByte@xs:unsignedShort@xs:unsignedInt@xs:unsignedLong@xs:positiveInteger@xs:nonNegativeInteger@xs:negativeInteger@xs:nonPositiveInteger@xs:hexBinary@xs:base64Binary@xs:anyURI", de: "xs:string@xs:boolean@xs:decimal@xs:integer@xs:double@xs:float@xs:date@xs:time@xs:dateTime@xs:gYear@xs:gMonth@xs:gDay@xs:gYearMonth@xs:gMonthDay@xs:duration@xs:byte@xs:short@xs:int@xs:long@xs:unsignedByte@xs:unsignedShort@xs:unsignedInt@xs:unsignedLong@xs:positiveInteger@xs:nonNegativeInteger@xs:negativeInteger@xs:nonPositiveInteger@xs:hexBinary@xs:base64Binary@xs:anyURI", es: "xs:string@xs:boolean@xs:decimal@xs:integer@xs:double@xs:float@xs:date@xs:time@xs:dateTime@xs:gYear@xs:gMonth@xs:gDay@xs:gYearMonth@xs:gMonthDay@xs:duration@xs:byte@xs:short@xs:int@xs:long@xs:unsignedByte@xs:unsignedShort@xs:unsignedInt@xs:unsignedLong@xs:positiveInteger@xs:nonNegativeInteger@xs:negativeInteger@xs:nonPositiveInteger@xs:hexBinary@xs:base64Binary@xs:anyURI", fr: "xs:string@xs:boolean@xs:decimal@xs:integer@xs:double@xs:float@xs:date@xs:time@xs:dateTime@xs:gYear@xs:gMonth@xs:gDay@xs:gYearMonth@xs:gMonthDay@xs:duration@xs:byte@xs:short@xs:int@xs:long@xs:unsignedByte@xs:unsignedShort@xs:unsignedInt@xs:unsignedLong@xs:positiveInteger@xs:nonNegativeInteger@xs:negativeInteger@xs:nonPositiveInteger@xs:hexBinary@xs:base64Binary@xs:anyURI", pl: "xs:string@xs:boolean@xs:decimal@xs:integer@xs:double@xs:float@xs:date@xs:time@xs:dateTime@xs:gYear@xs:gMonth@xs:gDay@xs:gYearMonth@xs:gMonthDay@xs:duration@xs:byte@xs:short@xs:int@xs:long@xs:unsignedByte@xs:unsignedShort@xs:unsignedInt@xs:unsignedLong@xs:positiveInteger@xs:nonNegativeInteger@xs:negativeInteger@xs:nonPositiveInteger@xs:hexBinary@xs:base64Binary@xs:anyURI", all: "xs:string@xs:boolean@xs:decimal@xs:integer@xs:double@xs:float@xs:date@xs:time@xs:dateTime@xs:gYear@xs:gMonth@xs:gDay@xs:gYearMonth@xs:gMonthDay@xs:duration@xs:byte@xs:short@xs:int@xs:long@xs:unsignedByte@xs:unsignedShort@xs:unsignedInt@xs:unsignedLong@xs:positiveInteger@xs:nonNegativeInteger@xs:negativeInteger@xs:nonPositiveInteger@xs:hexBinary@xs:base64Binary@xs:anyURI",
        }
      }
    }, {
      container: [{
        AT: "A_ASSET_KIND_AAS"
      }
      ],
      constraint: {
        name: "v0@v1@v2",
        localNames: {
          en: "Type@Instance@NotApplicable", de: "Type@Instance@NotApplicable", es: "Type@Instance@NotApplicable", fr: "Type@Instance@NotApplicable", pl: "Type@Instance@NotApplicable", all: "Type@Instance@NotApplicable",
        }
      }
    }, {
      container: [{
        AT: "A_DATA_TYPE_AAS"
      }
      ],
      constraint: {
        name: "v0@v1@v2@v3@v4@v5@v6@v7@v8@v9@v10@v11@v12@v13@v14@v15@v16@v17@v18",
        localNames: {
          en: "DATE@STRING@STRING_TRANSLATABLE@INTEGER_MEASURE@INTEGER_COUNT@INTEGER_CURRENCY@REAL_MEASURE@REAL_COUNT@REAL_CURRENCY@BOOLEAN@IRI@IRDI@RATIONAL@RATIONAL_MEASURE@TIME@TIMESTAMP@HTML@BLOB@FILE", de: "DATE@STRING@STRING_TRANSLATABLE@INTEGER_MEASURE@INTEGER_COUNT@INTEGER_CURRENCY@REAL_MEASURE@REAL_COUNT@REAL_CURRENCY@BOOLEAN@IRI@IRDI@RATIONAL@RATIONAL_MEASURE@TIME@TIMESTAMP@HTML@BLOB@FILE", es: "DATE@STRING@STRING_TRANSLATABLE@INTEGER_MEASURE@INTEGER_COUNT@INTEGER_CURRENCY@REAL_MEASURE@REAL_COUNT@REAL_CURRENCY@BOOLEAN@IRI@IRDI@RATIONAL@RATIONAL_MEASURE@TIME@TIMESTAMP@HTML@BLOB@FILE", fr: "DATE@STRING@STRING_TRANSLATABLE@INTEGER_MEASURE@INTEGER_COUNT@INTEGER_CURRENCY@REAL_MEASURE@REAL_COUNT@REAL_CURRENCY@BOOLEAN@IRI@IRDI@RATIONAL@RATIONAL_MEASURE@TIME@TIMESTAMP@HTML@BLOB@FILE", pl: "DATE@STRING@STRING_TRANSLATABLE@INTEGER_MEASURE@INTEGER_COUNT@INTEGER_CURRENCY@REAL_MEASURE@REAL_COUNT@REAL_CURRENCY@BOOLEAN@IRI@IRDI@RATIONAL@RATIONAL_MEASURE@TIME@TIMESTAMP@HTML@BLOB@FILE", all: "DATE@STRING@STRING_TRANSLATABLE@INTEGER_MEASURE@INTEGER_COUNT@INTEGER_CURRENCY@REAL_MEASURE@REAL_COUNT@REAL_CURRENCY@BOOLEAN@IRI@IRDI@RATIONAL@RATIONAL_MEASURE@TIME@TIMESTAMP@HTML@BLOB@FILE",
        }
      }
    }, {
      container: [{
        AT: "A_KIND_AAS"
      }
      ],
      constraint: {
        name: "v0@v1@v2",
        localNames: {
          en: "ValueQualifier@ConceptQualifier@TemplateQualifier", de: "ValueQualifier@ConceptQualifier@TemplateQualifier", es: "ValueQualifier@ConceptQualifier@TemplateQualifier", fr: "ValueQualifier@ConceptQualifier@TemplateQualifier", pl: "ValueQualifier@ConceptQualifier@TemplateQualifier", all: "ValueQualifier@ConceptQualifier@TemplateQualifier",
        }
      }
    }, {
      container: [{
        AT: "A_KIND_Q_AAS"
      }
      ],
      constraint: {
        name: "v0@v1",
        localNames: {
          en: "Template@Instance", de: "Template@Instance", es: "Template@Instance", fr: "Template@Instance", pl: "Template@Instance", all: "Template@Instance",
        }
      }
    }, {
      container: [{
        AT: "A_ENTITY_TYPE_AAS"
      }
      ],
      constraint: {
        name: "v0@v1",
        localNames: {
          en: "CoManagedEntity@SelfManagedEntity", de: "CoManagedEntity@SelfManagedEntity", es: "CoManagedEntity@SelfManagedEntity", fr: "CoManagedEntity@SelfManagedEntity", pl: "CoManagedEntity@SelfManagedEntity", all: "CoManagedEntity@SelfManagedEntity",
        }
      }
    }
    ],

    attributeToObject: [{
      container: [{
        CLS: "C_REFERENCE_AAS"
      }
      ],
      items: [
        "A_TYPE_AAS",
        "A_REFERRED_SEMANTIC_ID_SINGLE_AAS",
        "A_KEY_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_EXTENSION_AAS"
      }
      ],
      items: [
        "A_NAME_AAS",
        "A_VALUE_TYPE_AAS",
        "A_VALUE_AAS",
        "A_REFERS_TO_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_SPECIFIC_ASSET_ID_AAS"
      }
      ],
      items: [
        "A_NAME_AAS",
        "A_VALUE_AAS",
        "A_EXTERNAL_SUBJECT_ID_SINGLE_AAS",
        "A_SEMANTIC_ID_SINGLE_AAS",
        "A_SUPPLEMENTAL_SEMANTIC_ID_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_ASSET_ADMINISTRATION_SHELL_AAS"
      }
      ],
      items: [
        "A_DERIVED_FROM_SINGLE_AAS",
        "A_ASSET_KIND_AAS",
        "A_SPECIFIC_ASSET_ID_AAS",
        "A_GLOBAL_ASSET_ID_AAS",
        "A_ASSET_TYPE_AAS",
        "A_DEFAULT_THUMBNAIL_PATH_AAS",
        "A_DEFAULT_THUMBNAIL_CONTENT_TYPE_AAS",
        "A_VERSION_AAS",
        "A_REVISION_AAS",
        "A_CREATOR_AAS",
        "A_TEMPLATE_ID_AAS",
        "A_ID_AAS",
        "A_DATA_SPECIFICATION_AAS",
        "A_ID_SHORT_AAS",
        "A_DISPLAY_NAME_AAS",
        "A_DESCRIPTION_MULTI_AAS",
        "A_EXTENSION_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_CONCEPT_DESCRIPTION_AAS"
      }
      ],
      items: [
        "A_VERSION_AAS",
        "A_REVISION_AAS",
        "A_CREATOR_AAS",
        "A_TEMPLATE_ID_AAS",
        "A_ID_AAS",
        "A_ID_SHORT_AAS",
        "A_DISPLAY_NAME_AAS",
        "A_DESCRIPTION_MULTI_AAS",
        "A_EXTENSION_AAS",
        "A_DATA_SPECIFICATION_AAS",
        "A_IS_CASE_OF_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_DATA_SPECIFICATION_AAS"
      }
      ],
      items: [
        "A_VERSION_AAS",
        "A_REVISION_AAS",
        "A_CREATOR_AAS",
        "A_TEMPLATE_ID_AAS",
        "A_ID_AAS",
        "A_DESCRIPTION_MULTI_AAS",
        "A_PREFERRED_NAME_AAS",
        "A_SHORT_NAME_AAS",
        "A_UNIT_AAS",
        "A_UNIT_ID_SINGLE_AAS",
        "A_SOURCE_OF_DEFINITION_AAS",
        "A_SYMBOL_AAS",
        "A_DATA_TYPE_AAS",
        "A_DEFINITION_AAS",
        "A_VALUE_FORMAT_AAS",
        "A_VALUE_LIST_AAS",
        "A_VALUE_AAS",
        "A_MIN_AAS",
        "A_MAX_AAS",
        "A_NOM_AAS",
        "A_TYP_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_QUALIFIER_AAS"
      }
      ],
      items: [
        "A_TYPE_AAS",
        "A_VALUE_TYPE_AAS",
        "A_VALUE_AAS",
        "A_VALUE_ID_SINGLE_AAS",
        "A_KIND_AAS",
        "A_SEMANTIC_ID_SINGLE_AAS",
        "A_SUPPLEMENTAL_SEMANTIC_ID_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_SUBMODEL_AAS"
      }
      ],
      items: [
        "A_SUBMODEL_ELEMENT_AAS",
        "A_KIND_Q_AAS",
        "A_DATA_SPECIFICATION_AAS",
        "A_QUALIFIER_AAS",
        "A_SEMANTIC_ID_SINGLE_AAS",
        "A_SUPPLEMENTAL_SEMANTIC_ID_AAS",
        "A_VERSION_AAS",
        "A_REVISION_AAS",
        "A_CREATOR_AAS",
        "A_TEMPLATE_ID_AAS",
        "A_ID_AAS",
        "A_ID_SHORT_AAS",
        "A_DISPLAY_NAME_AAS",
        "A_DESCRIPTION_MULTI_AAS",
        "A_EXTENSION_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_SUBMODEL_ELEMENT_AAS"
      }
      ],
      items: [
        "A_SEMANTIC_ID_SINGLE_AAS",
        "A_SUPPLEMENTAL_SEMANTIC_ID_AAS",
        "A_QUALIFIER_AAS",
        "A_ID_SHORT_AAS",
        "A_DISPLAY_NAME_AAS",
        "A_DESCRIPTION_MULTI_AAS",
        "A_DATA_SPECIFICATION_AAS",
        "A_EXTENSION_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_RELATIONSHIP_ELEMENT_AAS"
      }
      ],
      items: [
        "A_FIRST_SINGLE_AAS",
        "A_SECOND_SINGLE_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_ANNOTATION_RELATIONSHIP_ELEMENT_AAS"
      }
      ],
      items: [
        "A_DATA_ELEMENT_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_PROPERTY_AAS"
      }
      ],
      items: [
        "A_VALUE_TYPE_AAS",
        "A_VALUE_AAS",
        "A_VALUE_ID_SINGLE_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_MULTILANGUAGE_PROPERTY_AAS"
      }
      ],
      items: [
        "A_VALUE_R_AAS",
        "A_VALUE_ID_SINGLE_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_RANGE_AAS"
      }
      ],
      items: [
        "A_VALUE_TYPE_AAS",
        "A_MIN_S_AAS",
        "A_MAX_S_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_BLOB_AAS"
      }
      ],
      items: [
        "A_VALUE_AAS",
        "A_CONTENT_TYPE_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_FILE_AAS"
      }
      ],
      items: [
        "A_VALUE_AAS",
        "A_CONTENT_TYPE_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_REFERENCE_ELEMENT_AAS"
      }
      ],
      items: [
        "A_VALUE_SINGLE_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_SUBMODEL_ELEMENT_LIST_AAS"
      }
      ],
      items: [
        "A_ORDER_RELEVANT_AAS",
        "A_SEMANTIC_ID_LIST_ELEMENT_SINGLE_AAS",
        "A_TYPE_VALUE_LIST_ELEMENT_AAS",
        "A_VALUE_TYPE_LIST_ELEMENT_AAS",
        "A_VALUE_RR_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_SUBMODEL_ELEMENT_COLLECTION_AAS"
      }
      ],
      items: [
        "A_VALUE_RR_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_OPERATION_AAS"
      }
      ],
      items: [
        "A_INPUT_VARIABLE_AAS",
        "A_OUTPUT_VARIABLE_AAS",
        "A_INOUTPUT_VARIABLE_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_OPERATION_VARIABLE_AAS"
      }
      ],
      items: [
        "A_OPERATION_VARIABLE_VALUE_SINGLE_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }, {
      container: [{
        CLS: "C_ENTITY_AAS"
      }
      ],
      items: [
        "A_STATEMENT_AAS",
        "A_ENTITY_TYPE_AAS",
        "A_GLOBAL_ASSET_ID_AAS",
        "A_SPECIFIC_ASSET_ID_SINGLE_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    },

    {
      container: [{
        CLS: "C_TASK"
      }
      ],
      items: [
        "A_TASK_CONNECT_SUBMODEL_AAS"
      ],
      mode: "ADD",
      options: {
        force: true,
        retain: true
      }
    }
    ],

    classToModelType: [{
      container: [
        "MT_AAS"
      ],
      items: [
        "C_REFERABLE_AAS",
        "C_REFERENCE_AAS",
        "C_EXTENSION_AAS",
        "C_SPECIFIC_ASSET_ID_AAS",
        "C_ASSET_ADMINISTRATION_SHELL_AAS",
        "C_CONCEPT_DESCRIPTION_AAS",
        "C_DATA_SPECIFICATION_AAS",
        "C_QUALIFIER_AAS",
        "C_QUALIFIABLE_AAS",
        "C_SUBMODEL_AAS",
        "C_SUBMODEL_ELEMENT_AAS",
        "C_RELATIONSHIP_ELEMENT_AAS",
        "C_ANNOTATION_RELATIONSHIP_ELEMENT_AAS",
        "C_DATA_ELEMENT_AAS",
        "C_PROPERTY_AAS",
        "C_MULTILANGUAGE_PROPERTY_AAS",
        "C_RANGE_AAS",
        "C_BLOB_AAS",
        "C_FILE_AAS",
        "C_REFERENCE_ELEMENT_AAS",
        "C_SUBMODEL_ELEMENT_LIST_AAS",
        "C_CAPABILITY_AAS",
        "C_SUBMODEL_ELEMENT_COLLECTION_AAS",
        "C_OPERATION_AAS",
        "C_OPERATION_VARIABLE_AAS",
        "C_ENTITY_AAS",

        "RC_DERIVED_FROM_AAS",
        "RC_HAS_SUBMODEL_AAS",
        "RC_HAS_QUALIFIER_AAS",
        "RC_HAS_ELEMENT_AAS",
        "RC_COLLECT_AAS",
        "RC_LIST_AAS",
        "RC_REFERENCE_AAS",

        "RC_OPERATION_VARIABLE_VALUE_AAS",
        "RC_SPECIFIC_ASSET_ID_AAS",
        "RC_EXTENSION_AAS",
        "RC_SUBMODEL_ELEMENT_AAS",
        "RC_QUALIFIER_AAS",
        "RC_DATA_ELEMENT_AAS",
        "RC_OPERATION_VARIABLE_AAS",

        "RC_TASK_CONNECT_SUBMODEL_AAS"
      ],
      mode: "ADD"
    }, {
      container: [
        "MT_AAS"
      ],
      items: [
        "RC_REFERENCED_DOCUMENTS",
        "RC_IS_APPLICATION_OWNER",
        "RC_RESPONSIBLE_PERSON_DEPUTY",
        "RC_RESPONSIBILITY",
        "RC_ASSIGNED_INITIATIVES_R",
        "RC_ASSIGNED_CONTROL_OBJECTIVE",
        "RC_RESPONSIBLE_FOR_OQ",
        "RC_RESPONSIBLE_FOR_OQ_M",
        "RC_PREDECESSOR_OBJECT",
        "RC_CONNECTOR",
        "RC_HAS_NOTE",
        "RC_HAS_CROSS_REFERENCE",
        "RC_OWNS",
        "RC_ASSIGNED_INITIATIVES_M",
        "RC_ORWF_CONNECTED_TASK",
        "RC_HAS_PERFORMANCE_INDICATOR_M",
        "RC_MESSAGE_FLOW",
        "RC_ASSOCIATION",
        "RC_CONVERSATION_LINK",
        "RC_DATA_ASSOCIATION",
        "RC_LABELS",
        "RC_HAS_PERFORMANCE_INDICATOR"
      ],
      mode: "ADD"
    },
    {
      container: [
        "MT_BUSINESS_PROCESS_DIAGRAM_BPMN_20",
      ],
      items: [
        "RC_TASK_CONNECT_SUBMODEL_AAS"
      ],
      mode: "ADD"
    },
    {
      container: [
        "MT_ANALYSIS"
      ],
      items: [
        "C_REFERABLE_AAS",
        "C_REFERENCE_AAS",
        "C_EXTENSION_AAS",
        "C_SPECIFIC_ASSET_ID_AAS",
        "C_ASSET_ADMINISTRATION_SHELL_AAS",
        "C_CONCEPT_DESCRIPTION_AAS",
        "C_DATA_SPECIFICATION_AAS",
        "C_QUALIFIER_AAS",
        "C_QUALIFIABLE_AAS",
        "C_SUBMODEL_AAS",
        "C_SUBMODEL_ELEMENT_AAS",
        "C_RELATIONSHIP_ELEMENT_AAS",
        "C_ANNOTATION_RELATIONSHIP_ELEMENT_AAS",
        "C_DATA_ELEMENT_AAS",
        "C_PROPERTY_AAS",
        "C_MULTILANGUAGE_PROPERTY_AAS",
        "C_RANGE_AAS",
        "C_BLOB_AAS",
        "C_FILE_AAS",
        "C_REFERENCE_ELEMENT_AAS",
        "C_SUBMODEL_ELEMENT_LIST_AAS",
        "C_CAPABILITY_AAS",
        "C_SUBMODEL_ELEMENT_COLLECTION_AAS",
        "C_OPERATION_AAS",
        "C_OPERATION_VARIABLE_AAS",
        "C_ENTITY_AAS",

        "RC_DERIVED_FROM_AAS",
        "RC_HAS_SUBMODEL_AAS",
        "RC_HAS_QUALIFIER_AAS",
        "RC_HAS_ELEMENT_AAS",
        "RC_COLLECT_AAS",
        "RC_LIST_AAS",
        "RC_REFERENCE_AAS",

        "RC_OPERATION_VARIABLE_VALUE_AAS",
        "RC_SPECIFIC_ASSET_ID_AAS",
        "RC_EXTENSION_AAS",
        "RC_SUBMODEL_ELEMENT_AAS",
        "RC_QUALIFIER_AAS",
        "RC_DATA_ELEMENT_AAS",
        "RC_OPERATION_VARIABLE_AAS",

        "RC_TASK_CONNECT_SUBMODEL_AAS"
      ],
      mode: "ADD"
    }
    ],

    attributeValues: [{
      container: [{
        CLS: "C_REFERABLE_AAS"
      }, {
        CLS: "C_REFERENCE_AAS"
      }, {
        CLS: "C_EXTENSION_AAS"
      }, {
        CLS: "C_SPECIFIC_ASSET_ID_AAS"
      }, {
        CLS: "C_ASSET_ADMINISTRATION_SHELL_AAS"
      }, {
        CLS: "C_CONCEPT_DESCRIPTION_AAS"
      }, {
        CLS: "C_DATA_SPECIFICATION_AAS"
      }, {
        CLS: "C_QUALIFIER_AAS"
      }, {
        CLS: "C_QUALIFIABLE_AAS"
      }, {
        CLS: "C_SUBMODEL_AAS"
      }, {
        CLS: "C_SUBMODEL_ELEMENT_AAS"
      }, {
        CLS: "C_RELATIONSHIP_ELEMENT_AAS"
      }, {
        CLS: "C_ANNOTATION_RELATIONSHIP_ELEMENT_AAS"
      }, {
        CLS: "C_DATA_ELEMENT_AAS"
      }, {
        CLS: "C_PROPERTY_AAS"
      }, {
        CLS: "C_MULTILANGUAGE_PROPERTY_AAS"
      }, {
        CLS: "C_RANGE_AAS"
      }, {
        CLS: "C_BLOB_AAS"
      }, {
        CLS: "C_FILE_AAS"
      }, {
        CLS: "C_REFERENCE_ELEMENT_AAS"
      }, {
        CLS: "C_SUBMODEL_ELEMENT_LIST_AAS"
      }, {
        CLS: "C_CAPABILITY_AAS"
      }, {
        CLS: "C_SUBMODEL_ELEMENT_COLLECTION_AAS"
      }, {
        CLS: "C_OPERATION_AAS"
      }, {
        CLS: "C_OPERATION_VARIABLE_AAS"
      }, {
        CLS: "C_ENTITY_AAS"
      }
      ],
      attributes: ["GRAPHREP"],
      value: {
        all: "load('chrome://appl_lib/skin/global.js');var elClass=graphRep.getContext().getLibraryObjectName();var conf={C_REFERENCE_AAS:{text:'Ref',textColor:graphRep.textProp.textColor.white,fillColor:graphRep.fillColor.blue,shape:'circle'},C_EXTENSION_AAS:{text:'Ext',textColor:graphRep.textProp.textColor.white,fillColor:graphRep.fillColor.green,shape:'circle'},C_SPECIFIC_ASSET_ID_AAS:{text:'SA',textColor:graphRep.textProp.textColor.white,fillColor:graphRep.fillColor.green,shape:'circle'},C_ASSET_ADMINISTRATION_SHELL_AAS:{text:'AAS',fillColor:graphRep.fillColor.white,shape:'rect'},C_CONCEPT_DESCRIPTION_AAS:{text:'CD',textColor:graphRep.textProp.textColor.white,fillColor:graphRep.fillColor.blue,shape:'circle'},C_DATA_SPECIFICATION_AAS:{text:'DS',textColor:graphRep.textProp.textColor.white,fillColor:graphRep.fillColor.green,shape:'circle'},C_QUALIFIER_AAS:{text:'Q',textColor:graphRep.textProp.textColor.white,fillColor:graphRep.fillColor.green,shape:'circle'},C_SUBMODEL_AAS:{text:'SM',fillColor:graphRep.fillColor.white,shape:'circle'},C_RELATIONSHIP_ELEMENT_AAS:{text:'RE',fillColor:graphRep.fillColor.lightblue,shape:'ellipse'},C_ANNOTATION_RELATIONSHIP_ELEMENT_AAS:{text:'Ann RE',fillColor:graphRep.fillColor.lightblue,shape:'ellipse'},C_PROPERTY_AAS:{text:'Prop',fillColor:graphRep.fillColor.lightblue,shape:'ellipse'},C_MULTILANGUAGE_PROPERTY_AAS:{text:'ML Prop',fillColor:graphRep.fillColor.lightblue,shape:'ellipse'},C_RANGE_AAS:{text:'Range',fillColor:graphRep.fillColor.lightblue,shape:'ellipse'},C_BLOB_AAS:{text:'Blob',fillColor:graphRep.fillColor.lightblue,shape:'ellipse'},C_FILE_AAS:{text:'File',fillColor:graphRep.fillColor.lightblue,shape:'ellipse'},C_REFERENCE_ELEMENT_AAS:{text:'Ref El',fillColor:graphRep.fillColor.lightblue,shape:'ellipse'},C_SUBMODEL_ELEMENT_LIST_AAS:{text:'List',fillColor:graphRep.fillColor.lightblue,shape:'ellipse'},C_CAPABILITY_AAS:{text:'Capab',fillColor:graphRep.fillColor.lightblue,shape:'ellipse'},C_SUBMODEL_ELEMENT_COLLECTION_AAS:{text:'Set',fillColor:graphRep.fillColor.lightblue,shape:'ellipse'},C_OPERATION_AAS:{text:'Op',fillColor:graphRep.fillColor.lightblue,shape:'ellipse'},C_OPERATION_VARIABLE_AAS:{text:'OpVar',fillColor:graphRep.fillColor.lightgreen,shape:'ellipse'},C_ENTITY_AAS:{text:'Entity',fillColor:graphRep.fillColor.lightblue,shape:'ellipse'}};if(conf[elClass]){if(conf[elClass].textColor){graphRep.textProp.textColor.setColorByValue(conf[elClass].textColor);} if(conf[elClass].fillColor){graphRep.fillColor.setColorByName(conf[elClass].fillColor);} if(conf[elClass].shape=='rect'){graphRep.fillRect(-300,-300,600,400);} if(conf[elClass].shape=='ellipse'){graphRep.fillEllipse(0,-200/2,500,200);} if(conf[elClass].shape=='circle'){graphRep.fillEllipse(0,-100,300,300);} graphRep.drawText(0,0,conf[elClass].text);}else{graphRep.drawText(0,0,'MISSING IMAGE');} graphRep.textProp.textColor.setColorByValue(graphRep.textProp.textColor.black);graphRep.addAttr(0,400,'NAME');"
      }
    }, {
      container: [{
        CLS: "C_REFERENCE_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_TYPE_AAS\" ctrltype=\"{e529a151-973b-40b4-a642-0f3a76e1712b}\"/><attr name=\"A_REFERRED_SEMANTIC_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_KEY_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter></notebook>"
      }
    }, {
      container: [{
        CLS: "C_EXTENSION_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_VALUE_TYPE_AAS\" ctrltype=\"{e529a151-973b-40b4-a642-0f3a76e1712b}\"/><attr name=\"A_VALUE_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_REFERS_TO_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter></notebook>"
      }
    }, {
      container: [{
        CLS: "C_SPECIFIC_ASSET_ID_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_VALUE_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_EXTERNAL_SUBJECT_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SEMANTIC_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SUPPLEMENTAL_SEMANTIC_ID_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter></notebook>"
      }
    }, {
      container: [{
        CLS: "C_ASSET_ADMINISTRATION_SHELL_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_ID_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DERIVED_FROM_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_ID_SHORT_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DISPLAY_NAME_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_DESCRIPTION_MULTI_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{9caf136d-a55b-4a2c-80f4-c261650c766a}</text><text lang=\"en\">Asset Information</text><text lang=\"pl\">Asset Information</text><text lang=\"fr\">Asset Information</text><text lang=\"de\">Asset Information</text><text lang=\"es\">Asset Information</text></name><attr name=\"A_ASSET_KIND_AAS\" ctrltype=\"{e529a151-973b-40b4-a642-0f3a76e1712b}\"/><attr name=\"A_SPECIFIC_ASSET_ID_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_GLOBAL_ASSET_ID_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_ASSET_TYPE_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DEFAULT_THUMBNAIL_PATH_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DEFAULT_THUMBNAIL_CONTENT_TYPE_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/></chapter><chapter><name><text lang=\"all\">{cfa44c83-e99a-4021-98a1-b58d964d5afa}</text><text lang=\"en\">Administrative Information</text><text lang=\"pl\">Administrative Information</text><text lang=\"fr\">Administrative Information</text><text lang=\"de\">Administrative Information</text><text lang=\"es\">Administrative Information</text></name><attr name=\"A_VERSION_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_REVISION_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_CREATOR_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_TEMPLATE_ID_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/></chapter><chapter><name><text lang=\"all\">{d1b88328-df46-4faa-af9c-7983e016bdd3}</text><text lang=\"en\">Data Specification</text><text lang=\"pl\">Data Specification</text><text lang=\"fr\">Data Specification</text><text lang=\"de\">Data Specification</text><text lang=\"es\">Data Specification</text></name><attr name=\"A_DATA_SPECIFICATION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{a3bd59a9-652b-4579-80ee-ec9e73136bc1}</text><text lang=\"en\">Extensions</text><text lang=\"pl\">Extensions</text><text lang=\"fr\">Extensions</text><text lang=\"de\">Extensions</text><text lang=\"es\">Extensions</text></name><attr name=\"A_EXTENSION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter></notebook>"

      }
    }, {
      container: [{
        CLS: "C_CONCEPT_DESCRIPTION_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_ID_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_ID_SHORT_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DISPLAY_NAME_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_DESCRIPTION_MULTI_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_IS_CASE_OF_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{d7f03b16-0241-45ee-873a-fdb1314a6f45}</text><text lang=\"en\">Administrative Information</text><text lang=\"pl\">Administrative Information</text><text lang=\"fr\">Administrative Information</text><text lang=\"de\">Administrative Information</text><text lang=\"es\">Administrative Information</text></name><attr name=\"A_VERSION_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_REVISION_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_CREATOR_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_TEMPLATE_ID_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/></chapter><chapter><name><text lang=\"all\">{e39fe2a1-bd23-4f8d-bdad-590663beca2a}</text><text lang=\"en\">Data Specification</text><text lang=\"pl\">Data Specification</text><text lang=\"fr\">Data Specification</text><text lang=\"de\">Data Specification</text><text lang=\"es\">Data Specification</text></name><attr name=\"A_DATA_SPECIFICATION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{6a00ef0f-326a-4a14-89d7-ccdf0833fb48}</text><text lang=\"en\">Extensions</text><text lang=\"pl\">Extensions</text><text lang=\"fr\">Extensions</text><text lang=\"de\">Extensions</text><text lang=\"es\">Extensions</text></name><attr name=\"A_EXTENSION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter></notebook>"

      }
    }, {
      container: [{
        CLS: "C_DATA_SPECIFICATION_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_ID_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DESCRIPTION_MULTI_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_PREFERRED_NAME_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SHORT_NAME_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{6d5792f7-e489-4f75-a0b3-a0893bfb960d}</text><text lang=\"en\">Content</text><text lang=\"pl\">Content</text><text lang=\"fr\">Content</text><text lang=\"de\">Content</text><text lang=\"es\">Content</text></name><attr name=\"A_UNIT_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_UNIT_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SOURCE_OF_DEFINITION_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_SYMBOL_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DATA_TYPE_AAS\" ctrltype=\"{e529a151-973b-40b4-a642-0f3a76e1712b}\"/><attr name=\"A_DEFINITION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_VALUE_FORMAT_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_VALUE_LIST_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_VALUE_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/></chapter><chapter><name><text lang=\"all\">{e60aa678-3de8-4c28-a4c7-89e49053f8a9}</text><text lang=\"en\">Level Type</text><text lang=\"pl\">Level Type</text><text lang=\"fr\">Level Type</text><text lang=\"de\">Level Type</text><text lang=\"es\">Level Type</text></name><attr name=\"A_MIN_AAS\" ctrltype=\"{d080916d-b4f2-4401-9e26-911e44e9d326}\"/><attr name=\"A_MAX_AAS\" ctrltype=\"{d080916d-b4f2-4401-9e26-911e44e9d326}\"/><attr name=\"A_NOM_AAS\" ctrltype=\"{d080916d-b4f2-4401-9e26-911e44e9d326}\"/><attr name=\"A_TYP_AAS\" ctrltype=\"{d080916d-b4f2-4401-9e26-911e44e9d326}\"/></chapter><chapter><name><text lang=\"all\">{9ea72806-2d13-4145-b137-1ccc089a824c}</text><text lang=\"en\">Administrative Information</text><text lang=\"pl\">Administrative Information</text><text lang=\"fr\">Administrative Information</text><text lang=\"de\">Administrative Information</text><text lang=\"es\">Administrative Information</text></name><attr name=\"A_VERSION_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_REVISION_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_CREATOR_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_TEMPLATE_ID_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/></chapter></notebook>"

      }
    }, {
      container: [{
        CLS: "C_QUALIFIER_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_TYPE_AAS\" ctrltype=\"{e529a151-973b-40b4-a642-0f3a76e1712b}\"/><attr name=\"A_VALUE_TYPE_AAS\" ctrltype=\"{e529a151-973b-40b4-a642-0f3a76e1712b}\"/><attr name=\"A_VALUE_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_VALUE_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_KIND_AAS\" ctrltype=\"{e529a151-973b-40b4-a642-0f3a76e1712b}\"/></chapter><chapter><name><text lang=\"all\">{f1bce914-de1d-4ab7-91ae-e829a2c295ac}</text><text lang=\"en\">Semantic</text><text lang=\"pl\">Semantic</text><text lang=\"fr\">Semantic</text><text lang=\"de\">Semantic</text><text lang=\"es\">Semantic</text></name><attr name=\"A_SEMANTIC_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SUPPLEMENTAL_SEMANTIC_ID_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter></notebook>"

      }
    }, {
      container: [{
        CLS: "C_SUBMODEL_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_ID_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_SUBMODEL_ELEMENT_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_KIND_Q_AAS\" ctrltype=\"{e529a151-973b-40b4-a642-0f3a76e1712b}\"/><attr name=\"A_ID_SHORT_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DISPLAY_NAME_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_DESCRIPTION_MULTI_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{4454e344-a6e9-42a6-b290-bbc3c0dd2200}</text><text lang=\"en\">Semantic</text><text lang=\"pl\">Semantic</text><text lang=\"fr\">Semantic</text><text lang=\"de\">Semantic</text><text lang=\"es\">Semantic</text></name><attr name=\"A_QUALIFIER_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SEMANTIC_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SUPPLEMENTAL_SEMANTIC_ID_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{f2e48b31-7d3c-4853-acd5-a3e558c1b657}</text><text lang=\"en\">Administrative Information</text><text lang=\"pl\">Administrative Information</text><text lang=\"fr\">Administrative Information</text><text lang=\"de\">Administrative Information</text><text lang=\"es\">Administrative Information</text></name><attr name=\"A_VERSION_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_REVISION_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_CREATOR_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_TEMPLATE_ID_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/></chapter><chapter><name><text lang=\"all\">{33e8e2f8-ca2e-46b2-9b06-501d583c7d7d}</text><text lang=\"en\">Data Specification</text><text lang=\"pl\">Data Specification</text><text lang=\"fr\">Data Specification</text><text lang=\"de\">Data Specification</text><text lang=\"es\">Data Specification</text></name><attr name=\"A_DATA_SPECIFICATION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{60a6de17-bc40-47ed-9eb3-0069f1504455}</text><text lang=\"en\">Extensions</text><text lang=\"pl\">Extensions</text><text lang=\"fr\">Extensions</text><text lang=\"de\">Extensions</text><text lang=\"es\">Extensions</text></name><attr name=\"A_EXTENSION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter></notebook>"

      }
    }, {
      container: [{
        CLS: "C_RELATIONSHIP_ELEMENT_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_ID_SHORT_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DISPLAY_NAME_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_DESCRIPTION_MULTI_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{28559131-7f5f-471c-9a62-ab979d62dc7e}</text><text lang=\"en\">Relationship</text><text lang=\"pl\">Relationship</text><text lang=\"fr\">Relationship</text><text lang=\"de\">Relationship</text><text lang=\"es\">Relationship</text></name><attr name=\"A_FIRST_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SECOND_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{2d79a16e-94e6-457e-a446-3bda5e7fd2f1}</text><text lang=\"en\">Semantic</text><text lang=\"pl\">Semantic</text><text lang=\"fr\">Semantic</text><text lang=\"de\">Semantic</text><text lang=\"es\">Semantic</text></name><attr name=\"A_QUALIFIER_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SEMANTIC_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SUPPLEMENTAL_SEMANTIC_ID_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{c6dd0c7e-03a5-484c-8a34-cbc781d9626f}</text><text lang=\"en\">Data Specification</text><text lang=\"pl\">Data Specification</text><text lang=\"fr\">Data Specification</text><text lang=\"de\">Data Specification</text><text lang=\"es\">Data Specification</text></name><attr name=\"A_DATA_SPECIFICATION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{808be68f-41dd-4d9d-98db-3ca1563aeee7}</text><text lang=\"en\">Extensions</text><text lang=\"pl\">Extensions</text><text lang=\"fr\">Extensions</text><text lang=\"de\">Extensions</text><text lang=\"es\">Extensions</text></name><attr name=\"A_EXTENSION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter></notebook>"

      }
    }, {
      container: [{
        CLS: "C_ANNOTATION_RELATIONSHIP_ELEMENT_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_ID_SHORT_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DISPLAY_NAME_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_DESCRIPTION_MULTI_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{09e034ba-db27-46ae-80e0-0ec2243e3f4b}</text><text lang=\"en\">Relationship</text><text lang=\"pl\">Relationship</text><text lang=\"fr\">Relationship</text><text lang=\"de\">Relationship</text><text lang=\"es\">Relationship</text></name><attr name=\"A_FIRST_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SECOND_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_DATA_ELEMENT_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{f5c99d2d-953b-432a-8947-32eca58efba6}</text><text lang=\"en\">Semantic</text><text lang=\"pl\">Semantic</text><text lang=\"fr\">Semantic</text><text lang=\"de\">Semantic</text><text lang=\"es\">Semantic</text></name><attr name=\"A_QUALIFIER_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SEMANTIC_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SUPPLEMENTAL_SEMANTIC_ID_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{09e8b554-b350-471d-80ad-183846ea5350}</text><text lang=\"en\">Data Specification</text><text lang=\"pl\">Data Specification</text><text lang=\"fr\">Data Specification</text><text lang=\"de\">Data Specification</text><text lang=\"es\">Data Specification</text></name><attr name=\"A_DATA_SPECIFICATION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{60c42ffe-090f-4a07-9ce8-515d950993e2}</text><text lang=\"en\">Extensions</text><text lang=\"pl\">Extensions</text><text lang=\"fr\">Extensions</text><text lang=\"de\">Extensions</text><text lang=\"es\">Extensions</text></name><attr name=\"A_EXTENSION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter></notebook>"

      }
    }, {
      container: [{
        CLS: "C_PROPERTY_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_ID_SHORT_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DISPLAY_NAME_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_DESCRIPTION_MULTI_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{96196824-e2eb-45df-80b8-655304548857}</text><text lang=\"en\">Value</text><text lang=\"pl\">Value</text><text lang=\"fr\">Value</text><text lang=\"de\">Value</text><text lang=\"es\">Value</text></name><attr name=\"A_VALUE_TYPE_AAS\" ctrltype=\"{e529a151-973b-40b4-a642-0f3a76e1712b}\"/><attr name=\"A_VALUE_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_VALUE_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{25f491fd-e2a3-4057-9c0f-bab036929865}</text><text lang=\"en\">Semantic</text><text lang=\"pl\">Semantic</text><text lang=\"fr\">Semantic</text><text lang=\"de\">Semantic</text><text lang=\"es\">Semantic</text></name><attr name=\"A_QUALIFIER_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SEMANTIC_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SUPPLEMENTAL_SEMANTIC_ID_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{a91c5f54-4743-47e9-86bd-7dca9c482649}</text><text lang=\"en\">Data Specification</text><text lang=\"pl\">Data Specification</text><text lang=\"fr\">Data Specification</text><text lang=\"de\">Data Specification</text><text lang=\"es\">Data Specification</text></name><attr name=\"A_DATA_SPECIFICATION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{49220b17-6c67-4e46-9603-d9f04ca3c10b}</text><text lang=\"en\">Extensions</text><text lang=\"pl\">Extensions</text><text lang=\"fr\">Extensions</text><text lang=\"de\">Extensions</text><text lang=\"es\">Extensions</text></name><attr name=\"A_EXTENSION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter></notebook>"

      }
    }, {
      container: [{
        CLS: "C_MULTILANGUAGE_PROPERTY_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_ID_SHORT_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DISPLAY_NAME_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_DESCRIPTION_MULTI_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{96196824-e2eb-45df-80b8-655304548857}</text><text lang=\"en\">Value</text><text lang=\"pl\">Value</text><text lang=\"fr\">Value</text><text lang=\"de\">Value</text><text lang=\"es\">Value</text></name><attr name=\"A_VALUE_R_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_VALUE_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{25f491fd-e2a3-4057-9c0f-bab036929865}</text><text lang=\"en\">Semantic</text><text lang=\"pl\">Semantic</text><text lang=\"fr\">Semantic</text><text lang=\"de\">Semantic</text><text lang=\"es\">Semantic</text></name><attr name=\"A_QUALIFIER_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SEMANTIC_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SUPPLEMENTAL_SEMANTIC_ID_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{a91c5f54-4743-47e9-86bd-7dca9c482649}</text><text lang=\"en\">Data Specification</text><text lang=\"pl\">Data Specification</text><text lang=\"fr\">Data Specification</text><text lang=\"de\">Data Specification</text><text lang=\"es\">Data Specification</text></name><attr name=\"A_DATA_SPECIFICATION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{49220b17-6c67-4e46-9603-d9f04ca3c10b}</text><text lang=\"en\">Extensions</text><text lang=\"pl\">Extensions</text><text lang=\"fr\">Extensions</text><text lang=\"de\">Extensions</text><text lang=\"es\">Extensions</text></name><attr name=\"A_EXTENSION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter></notebook>"

      }
    }, {
      container: [{
        CLS: "C_RANGE_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_ID_SHORT_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DISPLAY_NAME_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_DESCRIPTION_MULTI_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{96196824-e2eb-45df-80b8-655304548857}</text><text lang=\"en\">Value</text><text lang=\"pl\">Value</text><text lang=\"fr\">Value</text><text lang=\"de\">Value</text><text lang=\"es\">Value</text></name><attr name=\"A_VALUE_TYPE_AAS\" ctrltype=\"{e529a151-973b-40b4-a642-0f3a76e1712b}\"/><attr name=\"A_MIN_S_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_MAX_S_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/></chapter><chapter><name><text lang=\"all\">{25f491fd-e2a3-4057-9c0f-bab036929865}</text><text lang=\"en\">Semantic</text><text lang=\"pl\">Semantic</text><text lang=\"fr\">Semantic</text><text lang=\"de\">Semantic</text><text lang=\"es\">Semantic</text></name><attr name=\"A_QUALIFIER_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SEMANTIC_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SUPPLEMENTAL_SEMANTIC_ID_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{a91c5f54-4743-47e9-86bd-7dca9c482649}</text><text lang=\"en\">Data Specification</text><text lang=\"pl\">Data Specification</text><text lang=\"fr\">Data Specification</text><text lang=\"de\">Data Specification</text><text lang=\"es\">Data Specification</text></name><attr name=\"A_DATA_SPECIFICATION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{49220b17-6c67-4e46-9603-d9f04ca3c10b}</text><text lang=\"en\">Extensions</text><text lang=\"pl\">Extensions</text><text lang=\"fr\">Extensions</text><text lang=\"de\">Extensions</text><text lang=\"es\">Extensions</text></name><attr name=\"A_EXTENSION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter></notebook>"
      }
    }, {
      container: [{
        CLS: "C_BLOB_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_ID_SHORT_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DISPLAY_NAME_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_DESCRIPTION_MULTI_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{96196824-e2eb-45df-80b8-655304548857}</text><text lang=\"en\">Value</text><text lang=\"pl\">Value</text><text lang=\"fr\">Value</text><text lang=\"de\">Value</text><text lang=\"es\">Value</text></name><attr name=\"A_VALUE_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_CONTENT_TYPE_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/></chapter><chapter><name><text lang=\"all\">{25f491fd-e2a3-4057-9c0f-bab036929865}</text><text lang=\"en\">Semantic</text><text lang=\"pl\">Semantic</text><text lang=\"fr\">Semantic</text><text lang=\"de\">Semantic</text><text lang=\"es\">Semantic</text></name><attr name=\"A_QUALIFIER_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SEMANTIC_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SUPPLEMENTAL_SEMANTIC_ID_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{a91c5f54-4743-47e9-86bd-7dca9c482649}</text><text lang=\"en\">Data Specification</text><text lang=\"pl\">Data Specification</text><text lang=\"fr\">Data Specification</text><text lang=\"de\">Data Specification</text><text lang=\"es\">Data Specification</text></name><attr name=\"A_DATA_SPECIFICATION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{49220b17-6c67-4e46-9603-d9f04ca3c10b}</text><text lang=\"en\">Extensions</text><text lang=\"pl\">Extensions</text><text lang=\"fr\">Extensions</text><text lang=\"de\">Extensions</text><text lang=\"es\">Extensions</text></name><attr name=\"A_EXTENSION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter></notebook>"

      }
    }, {
      container: [{
        CLS: "C_FILE_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_ID_SHORT_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DISPLAY_NAME_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_DESCRIPTION_MULTI_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{96196824-e2eb-45df-80b8-655304548857}</text><text lang=\"en\">Value</text><text lang=\"pl\">Value</text><text lang=\"fr\">Value</text><text lang=\"de\">Value</text><text lang=\"es\">Value</text></name><attr name=\"A_VALUE_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_CONTENT_TYPE_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/></chapter><chapter><name><text lang=\"all\">{25f491fd-e2a3-4057-9c0f-bab036929865}</text><text lang=\"en\">Semantic</text><text lang=\"pl\">Semantic</text><text lang=\"fr\">Semantic</text><text lang=\"de\">Semantic</text><text lang=\"es\">Semantic</text></name><attr name=\"A_QUALIFIER_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SEMANTIC_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SUPPLEMENTAL_SEMANTIC_ID_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{a91c5f54-4743-47e9-86bd-7dca9c482649}</text><text lang=\"en\">Data Specification</text><text lang=\"pl\">Data Specification</text><text lang=\"fr\">Data Specification</text><text lang=\"de\">Data Specification</text><text lang=\"es\">Data Specification</text></name><attr name=\"A_DATA_SPECIFICATION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{49220b17-6c67-4e46-9603-d9f04ca3c10b}</text><text lang=\"en\">Extensions</text><text lang=\"pl\">Extensions</text><text lang=\"fr\">Extensions</text><text lang=\"de\">Extensions</text><text lang=\"es\">Extensions</text></name><attr name=\"A_EXTENSION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter></notebook>"

      }
    }, {
      container: [{
        CLS: "C_REFERENCE_ELEMENT_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_ID_SHORT_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DISPLAY_NAME_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_DESCRIPTION_MULTI_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{96196824-e2eb-45df-80b8-655304548857}</text><text lang=\"en\">Reference</text><text lang=\"pl\">Reference</text><text lang=\"fr\">Reference</text><text lang=\"de\">Reference</text><text lang=\"es\">Reference</text></name><attr name=\"A_VALUE_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{25f491fd-e2a3-4057-9c0f-bab036929865}</text><text lang=\"en\">Semantic</text><text lang=\"pl\">Semantic</text><text lang=\"fr\">Semantic</text><text lang=\"de\">Semantic</text><text lang=\"es\">Semantic</text></name><attr name=\"A_QUALIFIER_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SEMANTIC_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SUPPLEMENTAL_SEMANTIC_ID_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{a91c5f54-4743-47e9-86bd-7dca9c482649}</text><text lang=\"en\">Data Specification</text><text lang=\"pl\">Data Specification</text><text lang=\"fr\">Data Specification</text><text lang=\"de\">Data Specification</text><text lang=\"es\">Data Specification</text></name><attr name=\"A_DATA_SPECIFICATION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{49220b17-6c67-4e46-9603-d9f04ca3c10b}</text><text lang=\"en\">Extensions</text><text lang=\"pl\">Extensions</text><text lang=\"fr\">Extensions</text><text lang=\"de\">Extensions</text><text lang=\"es\">Extensions</text></name><attr name=\"A_EXTENSION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter></notebook>"

      }
    }, {
      container: [{
        CLS: "C_SUBMODEL_ELEMENT_LIST_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_ID_SHORT_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DISPLAY_NAME_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_DESCRIPTION_MULTI_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{96196824-e2eb-45df-80b8-655304548857}</text><text lang=\"en\">List</text><text lang=\"pl\">List</text><text lang=\"fr\">List</text><text lang=\"de\">List</text><text lang=\"es\">List</text></name><attr name=\"A_ORDER_RELEVANT_AAS\" ctrltype=\"{d080916d-b4f2-4401-9e26-911e44e9d326}\"/><attr name=\"A_SEMANTIC_ID_LIST_ELEMENT_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_TYPE_VALUE_LIST_ELEMENT_AAS\" ctrltype=\"{e529a151-973b-40b4-a642-0f3a76e1712b}\"/><attr name=\"A_VALUE_TYPE_LIST_ELEMENT_AAS\" ctrltype=\"{e529a151-973b-40b4-a642-0f3a76e1712b}\"/><attr name=\"A_VALUE_RR_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{25f491fd-e2a3-4057-9c0f-bab036929865}</text><text lang=\"en\">Semantic</text><text lang=\"pl\">Semantic</text><text lang=\"fr\">Semantic</text><text lang=\"de\">Semantic</text><text lang=\"es\">Semantic</text></name><attr name=\"A_QUALIFIER_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SEMANTIC_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SUPPLEMENTAL_SEMANTIC_ID_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{a91c5f54-4743-47e9-86bd-7dca9c482649}</text><text lang=\"en\">Data Specification</text><text lang=\"pl\">Data Specification</text><text lang=\"fr\">Data Specification</text><text lang=\"de\">Data Specification</text><text lang=\"es\">Data Specification</text></name><attr name=\"A_DATA_SPECIFICATION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{49220b17-6c67-4e46-9603-d9f04ca3c10b}</text><text lang=\"en\">Extensions</text><text lang=\"pl\">Extensions</text><text lang=\"fr\">Extensions</text><text lang=\"de\">Extensions</text><text lang=\"es\">Extensions</text></name><attr name=\"A_EXTENSION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter></notebook>"

      }
    }, {
      container: [{
        CLS: "C_CAPABILITY_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_ID_SHORT_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DISPLAY_NAME_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_DESCRIPTION_MULTI_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{25f491fd-e2a3-4057-9c0f-bab036929865}</text><text lang=\"en\">Semantic</text><text lang=\"pl\">Semantic</text><text lang=\"fr\">Semantic</text><text lang=\"de\">Semantic</text><text lang=\"es\">Semantic</text></name><attr name=\"A_QUALIFIER_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SEMANTIC_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SUPPLEMENTAL_SEMANTIC_ID_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{a91c5f54-4743-47e9-86bd-7dca9c482649}</text><text lang=\"en\">Data Specification</text><text lang=\"pl\">Data Specification</text><text lang=\"fr\">Data Specification</text><text lang=\"de\">Data Specification</text><text lang=\"es\">Data Specification</text></name><attr name=\"A_DATA_SPECIFICATION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{49220b17-6c67-4e46-9603-d9f04ca3c10b}</text><text lang=\"en\">Extensions</text><text lang=\"pl\">Extensions</text><text lang=\"fr\">Extensions</text><text lang=\"de\">Extensions</text><text lang=\"es\">Extensions</text></name></chapter></notebook>"

      }
    }, {
      container: [{
        CLS: "C_SUBMODEL_ELEMENT_COLLECTION_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_ID_SHORT_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DISPLAY_NAME_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_DESCRIPTION_MULTI_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{96196824-e2eb-45df-80b8-655304548857}</text><text lang=\"en\">Collection</text><text lang=\"pl\">Collection</text><text lang=\"fr\">Collection</text><text lang=\"de\">Collection</text><text lang=\"es\">Collection</text></name><attr name=\"A_VALUE_RR_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{25f491fd-e2a3-4057-9c0f-bab036929865}</text><text lang=\"en\">Semantic</text><text lang=\"pl\">Semantic</text><text lang=\"fr\">Semantic</text><text lang=\"de\">Semantic</text><text lang=\"es\">Semantic</text></name><attr name=\"A_QUALIFIER_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SEMANTIC_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SUPPLEMENTAL_SEMANTIC_ID_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{a91c5f54-4743-47e9-86bd-7dca9c482649}</text><text lang=\"en\">Data Specification</text><text lang=\"pl\">Data Specification</text><text lang=\"fr\">Data Specification</text><text lang=\"de\">Data Specification</text><text lang=\"es\">Data Specification</text></name><attr name=\"A_DATA_SPECIFICATION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{49220b17-6c67-4e46-9603-d9f04ca3c10b}</text><text lang=\"en\">Extensions</text><text lang=\"pl\">Extensions</text><text lang=\"fr\">Extensions</text><text lang=\"de\">Extensions</text><text lang=\"es\">Extensions</text></name><attr name=\"A_EXTENSION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter></notebook>"

      }
    }, {
      container: [{
        CLS: "C_OPERATION_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_ID_SHORT_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DISPLAY_NAME_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_DESCRIPTION_MULTI_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{96196824-e2eb-45df-80b8-655304548857}</text><text lang=\"en\">Operation</text><text lang=\"pl\">Operation</text><text lang=\"fr\">Operation</text><text lang=\"de\">Operation</text><text lang=\"es\">Operation</text></name><attr name=\"A_INPUT_VARIABLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_OUTPUT_VARIABLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_INOUTPUT_VARIABLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{25f491fd-e2a3-4057-9c0f-bab036929865}</text><text lang=\"en\">Semantic</text><text lang=\"pl\">Semantic</text><text lang=\"fr\">Semantic</text><text lang=\"de\">Semantic</text><text lang=\"es\">Semantic</text></name><attr name=\"A_QUALIFIER_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SEMANTIC_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SUPPLEMENTAL_SEMANTIC_ID_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{a91c5f54-4743-47e9-86bd-7dca9c482649}</text><text lang=\"en\">Data Specification</text><text lang=\"pl\">Data Specification</text><text lang=\"fr\">Data Specification</text><text lang=\"de\">Data Specification</text><text lang=\"es\">Data Specification</text></name><attr name=\"A_DATA_SPECIFICATION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{49220b17-6c67-4e46-9603-d9f04ca3c10b}</text><text lang=\"en\">Extensions</text><text lang=\"pl\">Extensions</text><text lang=\"fr\">Extensions</text><text lang=\"de\">Extensions</text><text lang=\"es\">Extensions</text></name><attr name=\"A_EXTENSION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter></notebook>"

      }
    }, {
      container: [{
        CLS: "C_OPERATION_VARIABLE_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_OPERATION_VARIABLE_VALUE_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter></notebook>"

      }
    }, {
      container: [{
        CLS: "C_ENTITY_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{3699a0c7-9177-490d-b9fb-6875187c1333}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_ID_SHORT_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_DISPLAY_NAME_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_DESCRIPTION_MULTI_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{96196824-e2eb-45df-80b8-655304548857}</text><text lang=\"en\">Entity</text><text lang=\"pl\">Entity</text><text lang=\"fr\">Entity</text><text lang=\"de\">Entity</text><text lang=\"es\">Entity</text></name><attr name=\"A_STATEMENT_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_ENTITY_TYPE_AAS\" ctrltype=\"{e529a151-973b-40b4-a642-0f3a76e1712b}\"/><attr name=\"A_GLOBAL_ASSET_ID_AAS\" ctrltype=\"{e6d047b0-6a54-4cad-923a-2c5526e123a6}\"/><attr name=\"A_SPECIFIC_ASSET_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{25f491fd-e2a3-4057-9c0f-bab036929865}</text><text lang=\"en\">Semantic</text><text lang=\"pl\">Semantic</text><text lang=\"fr\">Semantic</text><text lang=\"de\">Semantic</text><text lang=\"es\">Semantic</text></name><attr name=\"A_QUALIFIER_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SEMANTIC_ID_SINGLE_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/><attr name=\"A_SUPPLEMENTAL_SEMANTIC_ID_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{a91c5f54-4743-47e9-86bd-7dca9c482649}</text><text lang=\"en\">Data Specification</text><text lang=\"pl\">Data Specification</text><text lang=\"fr\">Data Specification</text><text lang=\"de\">Data Specification</text><text lang=\"es\">Data Specification</text></name><attr name=\"A_DATA_SPECIFICATION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter><chapter><name><text lang=\"all\">{49220b17-6c67-4e46-9603-d9f04ca3c10b}</text><text lang=\"en\">Extensions</text><text lang=\"pl\">Extensions</text><text lang=\"fr\">Extensions</text><text lang=\"de\">Extensions</text><text lang=\"es\">Extensions</text></name><attr name=\"A_EXTENSION_AAS\" ctrltype=\"{04c55bdd-b430-4aca-8a9b-1cdc7f08990e}\"/></chapter></notebook>"

      }
    }, {
      container: [{
        CLS: "C_REFERABLE_AAS"
      }, {
        CLS: "C_REFERENCE_AAS"
      }, {
        CLS: "C_EXTENSION_AAS"
      }, {
        CLS: "C_SPECIFIC_ASSET_ID_AAS"
      }, {
        CLS: "C_ASSET_ADMINISTRATION_SHELL_AAS"
      }, {
        CLS: "C_CONCEPT_DESCRIPTION_AAS"
      }, {
        CLS: "C_DATA_SPECIFICATION_AAS"
      }, {
        CLS: "C_QUALIFIER_AAS"
      }, {
        CLS: "C_QUALIFIABLE_AAS"
      }, {
        CLS: "C_SUBMODEL_AAS"
      }, {
        CLS: "C_SUBMODEL_ELEMENT_AAS"
      }, {
        CLS: "C_RELATIONSHIP_ELEMENT_AAS"
      }, {
        CLS: "C_ANNOTATION_RELATIONSHIP_ELEMENT_AAS"
      }, {
        CLS: "C_DATA_ELEMENT_AAS"
      }, {
        CLS: "C_PROPERTY_AAS"
      }, {
        CLS: "C_MULTILANGUAGE_PROPERTY_AAS"
      }, {
        CLS: "C_RANGE_AAS"
      }, {
        CLS: "C_BLOB_AAS"
      }, {
        CLS: "C_FILE_AAS"
      }, {
        CLS: "C_REFERENCE_ELEMENT_AAS"
      }, {
        CLS: "C_SUBMODEL_ELEMENT_LIST_AAS"
      }, {
        CLS: "C_CAPABILITY_AAS"
      }, {
        CLS: "C_SUBMODEL_ELEMENT_COLLECTION_AAS"
      }, {
        CLS: "C_OPERATION_AAS"
      }, {
        CLS: "C_OPERATION_VARIABLE_AAS"
      }, {
        CLS: "C_ENTITY_AAS"
      }
      ],
      attributes: ["ICON_CLASS"],
      value: {
        all: "chrome://appl_lib/skin/ico_c/c_block.png"
      }
    }, {
      container: [{
        RC: "RC_DERIVED_FROM_AAS",
        EP: "FROM"
      }, {
        RC: "RC_HAS_SUBMODEL_AAS",
        EP: "FROM"
      }, {
        RC: "RC_HAS_QUALIFIER_AAS",
        EP: "FROM"
      }, {
        RC: "RC_HAS_ELEMENT_AAS",
        EP: "FROM"
      }, {
        RC: "RC_COLLECT_AAS",
        EP: "FROM"
      }, {
        RC: "RC_LIST_AAS",
        EP: "FROM"
      }, {
        RC: "RC_REFERENCE_AAS",
        EP: "FROM"
      }
        , {
        RC: "RC_OPERATION_VARIABLE_VALUE_AAS",
        EP: "FROM"
      }, {
        RC: "RC_SPECIFIC_ASSET_ID_AAS",
        EP: "FROM"
      }, {
        RC: "RC_EXTENSION_AAS",
        EP: "FROM"
      }, {
        RC: "RC_SUBMODEL_ELEMENT_AAS",
        EP: "FROM"
      }, {
        RC: "RC_QUALIFIER_AAS",
        EP: "FROM"
      }, {
        RC: "RC_DATA_ELEMENT_AAS",
        EP: "FROM"
      }, {
        RC: "RC_OPERATION_VARIABLE_AAS",
        EP: "FROM"
      },
      {
        RC: "RC_TASK_CONNECT_SUBMODEL_AAS",
        EP: "FROM"
      }
      ],
      attributes: ["GRAPHREP"],
      value: {
        all: "graphRep.pen.width=15;"
      }
    }, {
      container: [{
        RC: "RC_DERIVED_FROM_AAS",
        EP: "TO"
      }, {
        RC: "RC_HAS_SUBMODEL_AAS",
        EP: "TO"
      }, {
        RC: "RC_HAS_QUALIFIER_AAS",
        EP: "TO"
      }, {
        RC: "RC_HAS_ELEMENT_AAS",
        EP: "TO"
      }, {
        RC: "RC_COLLECT_AAS",
        EP: "TO"
      }, {
        RC: "RC_LIST_AAS",
        EP: "TO"
      }, {
        RC: "RC_REFERENCE_AAS",
        EP: "TO"
      }
        , {
        RC: "RC_OPERATION_VARIABLE_VALUE_AAS",
        EP: "TO"
      }, {
        RC: "RC_SPECIFIC_ASSET_ID_AAS",
        EP: "TO"
      }, {
        RC: "RC_EXTENSION_AAS",
        EP: "TO"
      }, {
        RC: "RC_SUBMODEL_ELEMENT_AAS",
        EP: "TO"
      }, {
        RC: "RC_QUALIFIER_AAS",
        EP: "TO"
      }, {
        RC: "RC_DATA_ELEMENT_AAS",
        EP: "TO"
      }, {
        RC: "RC_OPERATION_VARIABLE_AAS",
        EP: "TO"
      }, {
        RC: "RC_TASK_CONNECT_SUBMODEL_AAS",
        EP: "TO"
      }
      ],
      attributes: ["GRAPHREP"],
      value: {
        all: "graphRep.pen.width=15; graphRep.pen.shadowEnabled=false; graphRep.pen.style=graphRep.pen.styleSolid; graphRep.pen.color.setColorByValue(0); graphRep.fillColor.setColorByValue(graphRep.fillColor.white); graphRep.fillPolygon(6,new Array(-113,62,0,0,-113,-62));"
      }
    }, {
      container: [{
        MT: "MT_AAS"
      }
      ],
      attributes: ["WIDTH"],
      value: {
        all: "23220"
      }
    }, {
      container: [{
        MT: "MT_AAS"
      }
      ],
      attributes: ["HEIGHT"],
      value: {
        all: "13600"
      }
    }, {
      container: [{
        MT: "MT_AAS"
      }
      ],
      attributes: ["CURRENT_PAGELAYOUT"],
      value: {
        all: "{8C4EC939-3CA2-439F-BCEF-17ABA3BA1A63}"
      }
    }, {
      container: [{
        MT: "MT_AAS"
      }
      ],
      attributes: ["NOTEBOOK"],
      value: {
        all: "<?xml version=\"1.0\" encoding=\"UTF-8\"?><notebook version=\"@boc-eu.com/boc-is/ado.attributetype.notebook;1\"><chapter><name><text lang=\"all\">{df7c62d7-a27f-4591-8ec3-5a939e94a61c}</text><text lang=\"en\">General</text><text lang=\"pl\">General</text><text lang=\"fr\">General</text><text lang=\"de\">General</text><text lang=\"es\">General</text></name><attr name=\"NAME\" ctrltype=\"{73e2692b-2723-407f-aa85-d1c00fb88f64}\"/><attr name=\"A_DESCRIPTION\" ctrltype=\"{6160849c-60ff-4863-809a-1a5d0ce5c871}\"/></chapter></notebook>"
      }
    }, {
      container: [{
        MT: "MT_AAS"
      }
      ],
      attributes: ["ICON_CLASS"],
      value: {
        all: "chrome://appl_lib/skin/ico_mt/mt_business_process_bpmn.png"
      }
    }, {
      container: [{
        MT: "MT_AAS"
      }
      ],
      attributes: ["DISPLAYED_CLASSES"],
      value: {
        all: "C_REFERENCE_AAS C_EXTENSION_AAS C_SPECIFIC_ASSET_ID_AAS C_ASSET_ADMINISTRATION_SHELL_AAS C_CONCEPT_DESCRIPTION_AAS C_DATA_SPECIFICATION_AAS C_QUALIFIER_AAS C_SUBMODEL_AAS C_RELATIONSHIP_ELEMENT_AAS C_ANNOTATION_RELATIONSHIP_ELEMENT_AAS C_PROPERTY_AAS C_MULTILANGUAGE_PROPERTY_AAS C_RANGE_AAS C_BLOB_AAS C_FILE_AAS C_REFERENCE_ELEMENT_AAS C_SUBMODEL_ELEMENT_LIST_AAS C_CAPABILITY_AAS C_SUBMODEL_ELEMENT_COLLECTION_AAS C_OPERATION_AAS C_OPERATION_VARIABLE_AAS C_ENTITY_AAS RC_DERIVED_FROM_AAS RC_HAS_SUBMODEL_AAS RC_HAS_QUALIFIER_AAS RC_HAS_ELEMENT_AAS RC_COLLECT_AAS RC_LIST_AAS RC_REFERENCE_AAS"
      }
    }
    ],

    notebooks: [
      {
        container: [{ CLS: "C_TASK" }],
        items: [
          {
            mode: "ADD",
            id: "{7b0cfad3-7031-41e3-92f0-101a6467884c}",
            type: "chapter",
            localNames: {
              all: "AAS",
              en: "AAS",
              de: "AAS",
              fr: "AAS",
              pl: "AAS",
              es: "AAS"
            }
          },
          {
            mode: "ADD",
            type: "element",
            chapterID: "{7b0cfad3-7031-41e3-92f0-101a6467884c}",
            elementType: CI.IAdoCoreNotebookElement.TYPE_ATTRDEF,
            name: "A_TASK_CONNECT_SUBMODEL_AAS"

          }
        ]
      }
    ],

    targetToEndpoint: [{
      container: [{
        RC: "RC_RESPONSIBLE_FOR_OQ_M",
        EP: "FROM"
      }
      ],
      items: [
        "C_REFERABLE_AAS",
        "C_REFERENCE_AAS",
        "C_EXTENSION_AAS",
        "C_SPECIFIC_ASSET_ID_AAS",
        "C_ASSET_ADMINISTRATION_SHELL_AAS",
        "C_CONCEPT_DESCRIPTION_AAS",
        "C_DATA_SPECIFICATION_AAS",
        "C_QUALIFIER_AAS",
        "C_QUALIFIABLE_AAS",
        "C_SUBMODEL_AAS",
        "C_SUBMODEL_ELEMENT_AAS",
        "C_RELATIONSHIP_ELEMENT_AAS",
        "C_ANNOTATION_RELATIONSHIP_ELEMENT_AAS",
        "C_DATA_ELEMENT_AAS",
        "C_PROPERTY_AAS",
        "C_MULTILANGUAGE_PROPERTY_AAS",
        "C_RANGE_AAS",
        "C_BLOB_AAS",
        "C_FILE_AAS",
        "C_REFERENCE_ELEMENT_AAS",
        "C_SUBMODEL_ELEMENT_LIST_AAS",
        "C_CAPABILITY_AAS",
        "C_SUBMODEL_ELEMENT_COLLECTION_AAS",
        "C_OPERATION_AAS",
        "C_OPERATION_VARIABLE_AAS",
        "C_ENTITY_AAS"
      ],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_DERIVED_FROM_AAS",
        EP: "FROM"
      }
      ],
      items: ["C_ASSET_ADMINISTRATION_SHELL_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_DERIVED_FROM_AAS",
        EP: "TO"
      }
      ],
      items: ["C_ASSET_ADMINISTRATION_SHELL_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_HAS_SUBMODEL_AAS",
        EP: "FROM"
      }
      ],
      items: ["C_ASSET_ADMINISTRATION_SHELL_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_HAS_SUBMODEL_AAS",
        EP: "TO"
      }
      ],
      items: ["C_SUBMODEL_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_HAS_QUALIFIER_AAS",
        EP: "FROM"
      }
      ],
      items: ["C_QUALIFIABLE_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_HAS_QUALIFIER_AAS",
        EP: "TO"
      }
      ],
      items: ["C_QUALIFIER_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_HAS_ELEMENT_AAS",
        EP: "FROM"
      }
      ],
      items: ["C_SUBMODEL_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_HAS_ELEMENT_AAS",
        EP: "TO"
      }
      ],
      items: ["C_SUBMODEL_ELEMENT_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_COLLECT_AAS",
        EP: "FROM"
      }
      ],
      items: ["C_SUBMODEL_ELEMENT_COLLECTION_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_COLLECT_AAS",
        EP: "TO"
      }
      ],
      items: ["C_SUBMODEL_ELEMENT_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_LIST_AAS",
        EP: "FROM"
      }
      ],
      items: ["C_SUBMODEL_ELEMENT_LIST_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_LIST_AAS",
        EP: "TO"
      }
      ],
      items: ["C_SUBMODEL_ELEMENT_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_REFERENCE_AAS",
        EP: "FROM"
      }
      ],
      items: [
        "C_REFERABLE_AAS",
        "C_EXTENSION_AAS",
        "C_CONCEPT_DESCRIPTION_AAS",
        "C_QUALIFIER_AAS",

        "C_SUBMODEL_ELEMENT_LIST_AAS",
        "C_SPECIFIC_ASSET_ID_AAS",
        "C_ENTITY_AAS",
        "C_SUBMODEL_ELEMENT_AAS",
        "C_FILE_AAS",
        "C_PROPERTY_AAS",
        "C_BLOB_AAS",
        "C_ASSET_ADMINISTRATION_SHELL_AAS",
        "C_MULTILANGUAGE_PROPERTY_AAS",
        "C_OPERATION_AAS",
        "C_DATA_SPECIFICATION_AAS",
        "C_SUBMODEL_AAS",
        "C_REFERENCE_ELEMENT_AAS",
        "C_RANGE_AAS",
        "C_ANNOTATION_RELATIONSHIP_ELEMENT_AAS",
        "C_SUBMODEL_ELEMENT_COLLECTION_AAS",
        "C_CAPABILITY_AAS",
        "C_REFERENCE_AAS",
        "C_DATA_ELEMENT_AAS",
        "C_RELATIONSHIP_ELEMENT_AAS"
      ],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_REFERENCE_AAS",
        EP: "TO"
      }
      ],
      items: ["C_REFERENCE_AAS"],
      mode: "ADD"
    },







    {
      container: [{
        RC: "RC_OPERATION_VARIABLE_VALUE_AAS",
        EP: "FROM"
      }
      ],
      items: ["C_OPERATION_VARIABLE_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_OPERATION_VARIABLE_VALUE_AAS",
        EP: "TO"
      }
      ],
      items: ["C_SUBMODEL_ELEMENT_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_SPECIFIC_ASSET_ID_AAS",
        EP: "FROM"
      }
      ],
      items: [
        "C_ENTITY_AAS",
        "C_SPECIFIC_ASSET_ID_AAS",

        "C_ASSET_ADMINISTRATION_SHELL_AAS"
      ],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_SPECIFIC_ASSET_ID_AAS",
        EP: "TO"
      }
      ],
      items: ["C_SPECIFIC_ASSET_ID_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_EXTENSION_AAS",
        EP: "FROM"
      }
      ],
      items: [
        "C_ASSET_ADMINISTRATION_SHELL_AAS",
        "C_CONCEPT_DESCRIPTION_AAS",
        "C_SUBMODEL_AAS",
        "C_SUBMODEL_ELEMENT_AAS",

        "C_SUBMODEL_ELEMENT_LIST_AAS",
        "C_ENTITY_AAS",
        "C_FILE_AAS",
        "C_PROPERTY_AAS",
        "C_BLOB_AAS",
        "C_MULTILANGUAGE_PROPERTY_AAS",
        "C_OPERATION_AAS",
        "C_REFERENCE_ELEMENT_AAS",
        "C_RANGE_AAS",
        "C_ANNOTATION_RELATIONSHIP_ELEMENT_AAS",
        "C_SUBMODEL_ELEMENT_AAS",
        "C_CAPABILITY_AAS",
        "C_DATA_ELEMENT_AAS",
        "C_RELATIONSHIP_ELEMENT_AAS",
        "C_SUBMODEL_ELEMENT_COLLECTION_AAS"
      ],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_EXTENSION_AAS",
        EP: "TO"
      }
      ],
      items: ["C_EXTENSION_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_SUBMODEL_ELEMENT_AAS",
        EP: "FROM"
      }
      ],
      items: [
        "C_SUBMODEL_AAS",
        "C_SUBMODEL_ELEMENT_LIST_AAS",
        "C_SUBMODEL_ELEMENT_COLLECTION_AAS",
        "C_ENTITY_AAS"
      ],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_SUBMODEL_ELEMENT_AAS",
        EP: "TO"
      }
      ],
      items: ["C_SUBMODEL_ELEMENT_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_QUALIFIER_AAS",
        EP: "FROM"
      }
      ],
      items: [
        "C_SUBMODEL_AAS",
        "C_SUBMODEL_ELEMENT_AAS",
        "C_QUALIFIABLE_AAS",

        "C_SUBMODEL_ELEMENT_LIST_AAS",
        "C_ENTITY_AAS",
        "C_FILE_AAS",
        "C_PROPERTY_AAS",
        "C_BLOB_AAS",
        "C_MULTILANGUAGE_PROPERTY_AAS",
        "C_OPERATION_AAS",
        "C_REFERENCE_ELEMENT_AAS",
        "C_RANGE_AAS",
        "C_ANNOTATION_RELATIONSHIP_ELEMENT_AAS",
        "C_SUBMODEL_ELEMENT_AAS",
        "C_CAPABILITY_AAS",
        "C_DATA_ELEMENT_AAS",
        "C_RELATIONSHIP_ELEMENT_AAS",
        "C_SUBMODEL_ELEMENT_COLLECTION_AAS"
      ],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_QUALIFIER_AAS",
        EP: "TO"
      }
      ],
      items: ["C_QUALIFIER_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_DATA_ELEMENT_AAS",
        EP: "FROM"
      }
      ],
      items: ["C_ANNOTATION_RELATIONSHIP_ELEMENT_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_DATA_ELEMENT_AAS",
        EP: "TO"
      }
      ],
      items: ["C_DATA_ELEMENT_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_OPERATION_VARIABLE_AAS",
        EP: "FROM"
      }
      ],
      items: ["C_OPERATION_AAS"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_OPERATION_VARIABLE_AAS",
        EP: "TO"
      }
      ],
      items: ["C_OPERATION_VARIABLE_AAS"],
      mode: "ADD"
    },

    {
      container: [{
        RC: "RC_TASK_CONNECT_SUBMODEL_AAS",
        EP: "FROM"
      }
      ],
      items: ["C_TASK"],
      mode: "ADD"
    }, {
      container: [{
        RC: "RC_TASK_CONNECT_SUBMODEL_AAS",
        EP: "TO"
      }
      ],
      items: ["C_SUBMODEL_AAS"],
      mode: "ADD"
    }


    ]
  },

  stdAttrs: {
    modelTypes: [
      "CREATION_DATE",
      "NUMBER_OF_OBJECTS_AND_RELATIONS",
      "DISPLAYED_CLASSES",
      "AUTHOR",
      "A_DESCRIPTION",
      "WIDTH",
      "COLOURING",
      "PRINT_TEMPLATE",
      "MODEL_DIRECTION",
      "CONNECTORMARK_ALIGN",
      "CONNECTORMARK_MODE",
      "CONNECTORMARK_VISIBLE",
      "CURRENT_PAGELAYOUT",
      "GRIDENABLED",
      "SHOWGRID",
      "GRAPHREP",
      "GRIDOFFSETX",
      "GRIDOFFSETY",
      "GRIDX",
      "GRIDY",
      "HEIGHT",
      "{0de30ed5-5ed4-4071-9af7-5b72a7bffda7}", /*ICON_CLASS*/
      "{f9a0c671-68d2-4703-bb93-aa466860b06d}",
      "COMMENT",
      "LAST_VIEW_INFO",
      "DATE_OF_LAST_CHANGE",
      "LAST_EDITOR",
      "LOCKED_MOUSEACCESS_CLASSES",
      /*"MODE",*/
      "NOTEBOOK",
      "PAGEMARGIN_VISIBLE",
      "PAGENUMBER_VISIBLE",
      /*"POSITION",*/
      "POSX",
      "POSY",
      "PRINT_ORIENTATION",
      "PRINT_PAGESCOUNT_HEIGHT",
      "PRINT_PAGESCOUNT_WIDTH",
      "PRINT_SCALETYPE",
      "PRINT_ZOOMLEVEL",
      "PRINT_ZOOMLEVEL_CURRENT",
      "SCROLLPOSX",
      "SCROLLPOSY",
      "SET_MODEL_SYS_ATTRS",
      "ZOOMLEVEL",

      "MFB_RWF_STATE"
    ],

    relationClasses: {
      general: [
        "{16656faa-147a-4a46-917b-108016d56c0d}",
        "ZORDER",
        "BENDPOINTS",
        "VISIBLE",
        "CONNECTORMARK_NUMBER",
        "MOUSEACCESS_LOCKED",
        "GRAPHREP_LINE",
        "POSX",
        "POSY",
      ],
      repository: [],
      modelling: []
    },

    endpoints: {
      general: [
        "{16656faa-147a-4a46-917b-108016d56c0d}",
        "GRAPHREP"
      ]
    }
  }
};
