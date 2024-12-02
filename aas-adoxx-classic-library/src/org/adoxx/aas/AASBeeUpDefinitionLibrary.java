package org.adoxx.aas;
import org.adoxx.all.abstracted.ADOAllFile;
import org.adoxx.all.abstracted.ADOAttribute;
import org.adoxx.all.abstracted.ADOClass;
import org.adoxx.all.abstracted.ADORelation;
import org.adoxx.all.abstracted.factory.ADOLibFactory;
import org.adoxx.all.api.primitive.TypeIdentifier;
import org.adoxx.all.api.primitive.Val;
import org.adoxx.utils.Utils;

public class AASBeeUpDefinitionLibrary {
    
    public static void main(String[] args) {
        String libraryName = "AAS Definition v1.0.0";
        String libraryExportPath = AASBeeUpDefinitionLibrary.class.getProtectionDomain().getCodeSource().getLocation().getFile().replace("classes/", "");
        
        try {
            ADOAllFile lib = ADOLibFactory.loadFromAblFile(libraryExportPath + "..\\src\\org\\adoxx\\aas\\beeup17.abl", true);
            //ADOAllFile lib = ADOLibFactory.generateADOxxEmptyLibrary(libraryName);
            lib.getApplicationLibraryNew()

            .addRecordClass("keys", "RecordClass", new ADOAttribute[] {
                new ADOAttribute(true, "ClassAbstract", new Val(0)),
                new ADOAttribute(true, "ClassVisible", new Val(1)),
                new ADOAttribute(true, "AttrRep", new Val("NOTEBOOK\nCHAPTER \"Description\"\nATTR \"type\"\nATTR \"value\"")),
                new ADOAttribute(false, "type", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("AnnotationRelationshipElement@AssetAdministrationShell@BasicEventElement@Blob@Capability@ConceptDescription@DataElement@Entity@EventElement@File@FragmentReference@GlobalReference@Identifiable@MultiLanguageProperty@Range@Operation@Property@Range@Referable@ReferenceElement@RelationshipElement@Submodel@SubmodelElement@SubmodelElementCollection@SubmodelElementList")),
                new ADOAttribute(false, "value", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets()
            })
            .addRecordClass("references", "RecordClass", new ADOAttribute[] {
                new ADOAttribute(true, "ClassAbstract", new Val(0)),
                new ADOAttribute(true, "ClassVisible", new Val(1)),
                new ADOAttribute(true, "AttrRep", new Val("NOTEBOOK\nCHAPTER \"Description\"\nATTR \"reference\"")),
                new ADOAttribute(false, "reference", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Reference\"\n\tmax:1"))
            })
            .addRecordClass("specificAssetIds", "RecordClass", new ADOAttribute[] {
                new ADOAttribute(true, "ClassAbstract", new Val(0)),
                new ADOAttribute(true, "ClassVisible", new Val(1)),
                new ADOAttribute(true, "AttrRep", new Val("NOTEBOOK\nCHAPTER \"Description\"\nATTR \"specificAssetId\"")),
                new ADOAttribute(false, "specificAssetId", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"SpecificAssetId\"\n\tmax:1"))
            })
            .addRecordClass("multiLanguageText", "RecordClass", new ADOAttribute[] {
                new ADOAttribute(true, "ClassAbstract", new Val(0)),
                new ADOAttribute(true, "ClassVisible", new Val(1)),
                new ADOAttribute(true, "AttrRep", new Val("NOTEBOOK\nCHAPTER \"Description\"\nATTR \"language\"\nATTR \"text\"")),
                new ADOAttribute(false, "language", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets(),
                new ADOAttribute(false, "text", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets()
            })
            .addRecordClass("extensions", "RecordClass", new ADOAttribute[] {
                new ADOAttribute(true, "ClassAbstract", new Val(0)),
                new ADOAttribute(true, "ClassVisible", new Val(1)),
                new ADOAttribute(true, "AttrRep", new Val("NOTEBOOK\nCHAPTER \"Description\"\nATTR \"extension\"")),
                new ADOAttribute(false, "extension", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Extension\"\n\tmax:1"))
            })
            .addRecordClass("submodelElements", "RecordClass", new ADOAttribute[] {
                new ADOAttribute(true, "ClassAbstract", new Val(0)),
                new ADOAttribute(true, "ClassVisible", new Val(1)),
                new ADOAttribute(true, "AttrRep", new Val("NOTEBOOK\nCHAPTER \"Description\"\nATTR \"submodelElement\"")),
                new ADOAttribute(false, "submodelElement", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"RelationshipElement\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"AnnotatedRelationshipElement\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Property\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"MultiLanguageProperty\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Range\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Blob\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"File\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"ReferenceElement\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"SubmodelElementList\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"SubmodelElementCollection\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Capability\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Operation\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Entity\"\n\tmax:1"))
            })
            .addRecordClass("qualifiers", "RecordClass", new ADOAttribute[] {
                new ADOAttribute(true, "ClassAbstract", new Val(0)),
                new ADOAttribute(true, "ClassVisible", new Val(1)),
                new ADOAttribute(true, "AttrRep", new Val("NOTEBOOK\nCHAPTER \"Description\"\nATTR \"qualifier\"")),
                new ADOAttribute(false, "qualifier", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Qualifier\"\n\tmax:1"))
            })
            .addRecordClass("dataElements", "RecordClass", new ADOAttribute[] {
                new ADOAttribute(true, "ClassAbstract", new Val(0)),
                new ADOAttribute(true, "ClassVisible", new Val(1)),
                new ADOAttribute(true, "AttrRep", new Val("NOTEBOOK\nCHAPTER \"Description\"\nATTR \"dataElement\"")),
                new ADOAttribute(false, "dataElement", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Property\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"MultiLanguageProperty\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Range\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Blob\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"File\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"ReferenceElement\"\n\tmax:1"))
            })
            .addRecordClass("operationVariables", "RecordClass", new ADOAttribute[] {
                new ADOAttribute(true, "ClassAbstract", new Val(0)),
                new ADOAttribute(true, "ClassVisible", new Val(1)),
                new ADOAttribute(true, "AttrRep", new Val("NOTEBOOK\nCHAPTER \"Description\"\nATTR \"operationVariable\"")),
                new ADOAttribute(false, "operationVariable", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"OperationVariable\"\n\tmax:1"))
            })
            .addRecordClass("valueLists", "RecordClass", new ADOAttribute[] {
                new ADOAttribute(true, "ClassAbstract", new Val(0)),
                new ADOAttribute(true, "ClassVisible", new Val(1)),
                new ADOAttribute(true, "AttrRep", new Val("NOTEBOOK\nCHAPTER \"Description\"\nATTR \"value\"\nATTR \"valueId\"")),
                new ADOAttribute(false, "value", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets(),
                new ADOAttribute(false, "valueId", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Reference\"\n\tmax:1"))
            })

            .addRecordClass("Service Inputs", "RecordClass", new ADOAttribute[] {
                new ADOAttribute(true, "ClassAbstract", new Val(0)),
                new ADOAttribute(true, "ClassVisible", new Val(1)),
                new ADOAttribute(true, "AttrRep", new Val("NOTEBOOK\nCHAPTER \"Description\"\nATTR \"ID\"\nATTR \"Schema\"\nATTR \"Sample\"")),
                new ADOAttribute(false, "ID", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets(),
                new ADOAttribute(false, "Schema", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets(),
                new ADOAttribute(false, "Sample", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets(),
            })
            .addRecordClass("Output Mapping", "RecordClass", new ADOAttribute[] {
                new ADOAttribute(true, "ClassAbstract", new Val(0)),
                new ADOAttribute(true, "ClassVisible", new Val(1)),
                new ADOAttribute(true, "AttrRep", new Val("NOTEBOOK\nCHAPTER \"Description\"\nATTR \"ID\"\nATTR \"Mapping\"\n")),
                new ADOAttribute(false, "ID", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets(),
                new ADOAttribute(false, "Mapping", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets(),
            })
            .addRecordClass("REST Additional Headers", "RecordClass", new ADOAttribute[] {
                new ADOAttribute(true, "ClassAbstract", new Val(0)),
                new ADOAttribute(true, "ClassVisible", new Val(1)),
                new ADOAttribute(true, "AttrRep", new Val("NOTEBOOK\nCHAPTER \"Description\"\nATTR \"Header Name\"\nATTR \"Header Value\"")),
                new ADOAttribute(false, "Header Name", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets(),
                new ADOAttribute(false, "Header Value", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets(),
            })
            .getDynamicLibrary()
                .addClass(
                    new ADOClass("Referable", ADOClass.defaultSuperIdDynamic)
                        //.addAttribute(new ADOAttribute(false, "Description", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(1)))
                        .setClassAbrstractAttribute(1)
                )
                .addClass(
                    new ADOClass("Reference", ADOClass.defaultSuperIdDynamic)
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "type", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("ExternalReference@ModelReference")))
                        .addAttribute(new ADOAttribute(false, "referredSemanticId", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Reference\"\n\tmax:1")))
                        .addAttribute(new ADOAttribute(false, "key", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("keys")))
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nCLIP_POLY 3 x1:0.2cm y1:0.0cm x2:-0.3cm y2:0.3cm x3:-0.3cm y3:-0.3cm\nGRADIENT_RECT x:-0.7cm y:-0.7cm w:1.4cm h:1.4cm style:updiag color1:(\"white\") color2:(\"blue\")\nCLIP_OFF\nPEN w:0.05cm color:(\"royalblue\") join:miter\nFILL style:null\nPOLYGON 3 x1:0.2cm y1:0.0cm x2:-0.3cm y2:0.3cm x3:-0.3cm y3:-0.3cm\nATTR \"Name\" x:0.0cm y:0.35cm w:c:2.0cm h:t line-break:words")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"type\"\nATTR \"referredSemanticId\"\nATTR \"key\"\n")
                )
                .addClass(
                    new ADOClass("Extension", ADOClass.defaultSuperIdDynamic)
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "name", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "valueType", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("xs:string@xs:boolean@xs:decimal@xs:integer@xs:double@xs:float@xs:date@xs:time@xs:dateTime@xs:gYear@xs:gMonth@xs:gDay@xs:gYearMonth@xs:gMonthDay@xs:duration@xs:byte@xs:short@xs:int@xs:long@xs:unsignedByte@xs:unsignedShort@xs:unsignedInt@xs:unsignedLong@xs:positiveInteger@xs:nonNegativeInteger@xs:negativeInteger@xs:nonPositiveInteger@xs:hexBinary@xs:base64Binary@xs:anyURI")))
                        .addAttribute(new ADOAttribute(false, "value", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "refersTo", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("references")))
                        .addAttribute(new ADOAttribute(false, "semanticId", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Reference\"\n\tmax:1")))
                        .addAttribute(new ADOAttribute(false, "supplementalSemanticId", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("references")))
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nFILL color:green\nELLIPSE x:0.00cm y:0cm rx:1cm ry:1cm\nATTR \"Name\" x:0.00cm y:1.1cm h:t w:c:3cm line-break:words\nPEN\nFONT \"Arial\" h:30pt color:white\nTEXT \"Ext\" y:0.1cm w:c h:c")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"valueType\"\nATTR \"value\"\nATTR \"refersTo\"\nATTR \"semanticId\"\nATTR \"supplementalSemanticId\"\n")
                )
                .addClass(
                    new ADOClass("SpecificAssetId", ADOClass.defaultSuperIdDynamic)
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "name", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "value", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "externalSubjectId", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Reference\"\n\tmax:1")))
                        .addAttribute(new ADOAttribute(false, "semanticId", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Reference\"\n\tmax:1")))
                        .addAttribute(new ADOAttribute(false, "supplementalSemanticId", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("references")))
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nFILL color:green\nELLIPSE x:0.00cm y:0cm rx:1cm ry:1cm\nATTR \"Name\" x:0.00cm y:1.1cm h:t w:c:3cm line-break:words\nPEN\nFONT \"Arial\" h:30pt color:white\nTEXT \"SA\" y:0.1cm w:c h:c")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"name\"\nATTR \"value\"\nATTR \"externalSubjectId\"\nATTR \"semanticId\"\nATTR \"supplementalSemanticId\"")
                )
                .addClass(
                    new ADOClass("AssetAdministrationShell", "Referable")
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "derivedFrom", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Reference\"\n\tmax:1")))
                        .addAttribute(new ADOAttribute(false, "submodels", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("references")))
                        .addAttribute(new ADOAttribute(false, "assetKind", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("Type@Instance@NotApplicable")))
                        .addAttribute(new ADOAttribute(false, "specificAssetId", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("specificAssetIds")))
                        .addAttribute(new ADOAttribute(false, "globalAssetId", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        .addAttribute(new ADOAttribute(false, "assetType", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        .addAttribute(new ADOAttribute(false, "defaultThumbnail_path", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "defaultThumbnail_contentType", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "version", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "revision", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        //.addAttribute(new ADOAttribute(false, "creator", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        .addAttribute(new ADOAttribute(false, "creator", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Reference\"\n\tmax:1")))
                        .addAttribute(new ADOAttribute(false, "templateId", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        .addAttribute(new ADOAttribute(false, "id", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        //dataSpecification have a different mapping in the AAS schema from the documentation
                        .addAttribute(new ADOAttribute(false, "dataSpecification", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("references")))
                        .addAttribute(new ADOAttribute(false, "category", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "idShort", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "displayName", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("multiLanguageText")))
                        .addAttribute(new ADOAttribute(false, "description", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("multiLanguageText")))
                        .addAttribute(new ADOAttribute(false, "extension", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("extensions")))
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nSET text:(\"AAS\")\nAVAL name: \"Name\"\nFILL color:\"white\"\nRECTANGLE x:-1cm y:-0.5cm w:2cm h:1cm\nATTR \"Name\" x:0.00cm y:0.7cm h:t w:c:2cm line-break:words\nFONT \"Arial\" h:20pt color:black\nTEXT (text) w:c:1cm h:c line-break:words\n")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"id\"\nATTR \"derivedFrom\"\nATTR \"submodels\"\nATTR \"category\"\nATTR \"idShort\"\nATTR \"displayName\"\nATTR \"description\"\nCHAPTER \"Asset Information\"\nATTR \"assetKind\"\nATTR \"specificAssetId\"\nATTR \"globalAssetId\"\nATTR \"assetType\"\nATTR \"defaultThumbnail_path\"\nATTR \"defaultThumbnail_contentType\"\nCHAPTER \"Administrative Information\"\nATTR \"version\"\nATTR \"revision\"\nATTR \"creator\"\nATTR \"templateId\"\nCHAPTER \"Data Specification\"\nATTR \"dataSpecification\"\nCHAPTER \"Extensions\"\nATTR \"extension\"\n")
                )
                .addClass(
                    new ADOClass("ConceptDescription", ADOClass.defaultSuperIdDynamic)
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "version", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "revision", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "creator", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        .addAttribute(new ADOAttribute(false, "templateId", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        .addAttribute(new ADOAttribute(false, "id", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        .addAttribute(new ADOAttribute(false, "category", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "idShort", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "displayName", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("multiLanguageText")))
                        .addAttribute(new ADOAttribute(false, "description", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("multiLanguageText")))
                        .addAttribute(new ADOAttribute(false, "extension", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("extensions")))
                        .addAttribute(new ADOAttribute(false, "dataSpecification", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("references")))
                        .addAttribute(new ADOAttribute(false, "isCaseOf", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("references")))
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nFILL color:blue\nELLIPSE x:0.00cm y:0cm rx:1cm ry:1cm\nATTR \"Name\" x:0.00cm y:1.1cm h:t w:c:3cm line-break:words\nPEN\nFONT \"Arial\" h:30pt color:white\nTEXT \"CD\" y:0.1cm w:c h:c")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"id\"\nATTR \"category\"\nATTR \"idShort\"\nATTR \"displayName\"\nATTR \"description\"\nATTR \"isCaseOf\"\nCHAPTER \"Administrative Information\"\nATTR \"version\"\nATTR \"revision\"\nATTR \"creator\"\nATTR \"templateId\"\nCHAPTER \"Data Specification\"\nATTR \"dataSpecification\"\nCHAPTER \"Extensions\"\nATTR \"extension\"\n")
                )
                .addClass(
                    new ADOClass("DataSpecification", ADOClass.defaultSuperIdDynamic)
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "version", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "revision", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "creator", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        .addAttribute(new ADOAttribute(false, "templateId", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        .addAttribute(new ADOAttribute(false, "id", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        .addAttribute(new ADOAttribute(false, "description", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("multiLanguageText")))
                        .addAttribute(new ADOAttribute(false, "preferredName", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("multiLanguageText")))
                        .addAttribute(new ADOAttribute(false, "shortName", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("multiLanguageText")))
                        .addAttribute(new ADOAttribute(false, "unit", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "unitId", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Reference\"\n\tmax:1")))
                        .addAttribute(new ADOAttribute(false, "sourceOfDefinition", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        .addAttribute(new ADOAttribute(false, "symbol", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        .addAttribute(new ADOAttribute(false, "dataType", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("DATE@STRING@STRING_TRANSLATABLE@INTEGER_MEASURE@INTEGER_COUNT@INTEGER_CURRENCY@REAL_MEASURE@REAL_COUNT@REAL_CURRENCY@BOOLEAN@IRI@IRDI@RATIONAL@RATIONAL_MEASURE@TIME@TIMESTAMP@HTML@BLOB@FILE")))
                        .addAttribute(new ADOAttribute(false, "definition", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("multiLanguageText")))
                        .addAttribute(new ADOAttribute(false, "valueFormat", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        .addAttribute(new ADOAttribute(false, "valueList", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("valueLists")))
                        .addAttribute(new ADOAttribute(false, "value", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        .addAttribute(new ADOAttribute(false, "min", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("True@False")))
                        .addAttribute(new ADOAttribute(false, "max", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("True@False")))
                        .addAttribute(new ADOAttribute(false, "nom", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("True@False")))
                        .addAttribute(new ADOAttribute(false, "typ", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("True@False")))
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nFILL color:white\nELLIPSE x:0.00cm y:0cm rx:1cm ry:1cm\nATTR \"Name\" x:0.00cm y:1.1cm h:t w:c:3cm line-break:words\nPEN\nFONT \"Arial\" h:30pt color:black\nTEXT \"DS\" y:0.1cm w:c h:c")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"id\"\nATTR \"description\"\nCHAPTER \"Content\"\nATTR \"preferredName\"\nATTR \"shortName\"\nATTR \"unit\"\nATTR \"unitId\"\nATTR \"sourceOfDefinition\"\nATTR \"symbol\"\nATTR \"dataType\"\nATTR \"definition\"\nATTR \"valueFormat\"\nATTR \"valueList\"\nATTR \"value\"\nCHAPTER \"Level Type\"\nATTR \"min\"\nATTR \"max\"\nATTR \"nom\"\nATTR \"typ\"\nCHAPTER \"Administrative Information\"\nATTR \"version\"\nATTR \"revision\"\nATTR \"creator\"\nATTR \"templateId\"\n")
                )
                .addClass(
                    new ADOClass("Qualifier", ADOClass.defaultSuperIdDynamic)
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "type", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "valueType", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("xs:string@xs:boolean@xs:decimal@xs:integer@xs:double@xs:float@xs:date@xs:time@xs:dateTime@xs:gYear@xs:gMonth@xs:gDay@xs:gYearMonth@xs:gMonthDay@xs:duration@xs:byte@xs:short@xs:int@xs:long@xs:unsignedByte@xs:unsignedShort@xs:unsignedInt@xs:unsignedLong@xs:positiveInteger@xs:nonNegativeInteger@xs:negativeInteger@xs:nonPositiveInteger@xs:hexBinary@xs:base64Binary@xs:anyURI")))
                        .addAttribute(new ADOAttribute(false, "value", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "valueId", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Reference\"\n\tmax:1")))
                        .addAttribute(new ADOAttribute(false, "kind", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("ValueQualifier@ConceptQualifier@TemplateQualifier")))
                        .addAttribute(new ADOAttribute(false, "semanticId", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Reference\"\n\tmax:1")))
                        .addAttribute(new ADOAttribute(false, "supplementalSemanticId", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("references")))
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nFILL color:green\nELLIPSE x:0.00cm y:0cm rx:1cm ry:1cm\nATTR \"Name\" x:0.00cm y:1.1cm h:t w:c:3cm line-break:words\nPEN\nFONT \"Arial\" h:30pt color:white\nTEXT \"Q\" y:0.1cm w:c h:c")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"type\"\nATTR \"valueType\"\nATTR \"value\"\nATTR \"valueId\"\nATTR \"kind\"\nCHAPTER \"Semantic\"\nATTR \"semanticId\"\nATTR \"supplementalSemanticId\"\n")
                )
                .addClass(
                    new ADOClass("Qualifiable", "Referable")
                        .setClassAbrstractAttribute(1)
                )
                .addClass(
                    new ADOClass("Submodel", "Qualifiable")
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "submodelElement", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("submodelElements")))
                        .addAttribute(new ADOAttribute(false, "kind", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("Template@Instance")))
                        .addAttribute(new ADOAttribute(false, "dataSpecification", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("references")))
                        .addAttribute(new ADOAttribute(false, "qualifier", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("qualifiers")))
                        .addAttribute(new ADOAttribute(false, "semanticId", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Reference\"\n\tmax:1")))
                        .addAttribute(new ADOAttribute(false, "supplementalSemanticId", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("references")))
                        .addAttribute(new ADOAttribute(false, "version", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "revision", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "creator", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        .addAttribute(new ADOAttribute(false, "templateId", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        .addAttribute(new ADOAttribute(false, "id", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        .addAttribute(new ADOAttribute(false, "category", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "idShort", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "displayName", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("multiLanguageText")))
                        .addAttribute(new ADOAttribute(false, "description", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("multiLanguageText")))
                        .addAttribute(new ADOAttribute(false, "extension", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("extensions")))
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nFILL color:dodgerblue\nELLIPSE x:0.00cm y:0cm rx:1cm ry:1cm\nATTR \"Name\" x:0.00cm y:1.1cm h:t w:c:3cm line-break:words\nPEN\nFONT \"Arial\" h:30pt color:white\nTEXT \"SM\" y:0.1cm w:c h:c")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"id\"\nATTR \"submodelElement\"\nATTR \"kind\"\nATTR \"category\"\nATTR \"idShort\"\nATTR \"displayName\"\nATTR \"description\"\nCHAPTER \"Semantic\"\nATTR \"qualifier\"\nATTR \"semanticId\"\nATTR \"supplementalSemanticId\"\nCHAPTER \"Administrative Information\"\nATTR \"version\"\nATTR \"revision\"\nATTR \"creator\"\nATTR \"templateId\"\nCHAPTER \"Data Specification\"\nATTR \"dataSpecification\"\nCHAPTER \"Extensions\"\nATTR \"extension\"\n")
                )
                .addClass(
                    new ADOClass("SubmodelElement", "Qualifiable")
                        .setClassAbrstractAttribute(1)
                        .addAttribute(new ADOAttribute(false, "semanticId", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Reference\"\n\tmax:1")))
                        .addAttribute(new ADOAttribute(false, "supplementalSemanticId", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("references")))
                        .addAttribute(new ADOAttribute(false, "qualifier", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("qualifiers")))
                        .addAttribute(new ADOAttribute(false, "category", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "idShort", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "displayName", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("multiLanguageText")))
                        .addAttribute(new ADOAttribute(false, "description", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("multiLanguageText")))
                        .addAttribute(new ADOAttribute(false, "dataSpecification", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("references")))
                        .addAttribute(new ADOAttribute(false, "extension", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("extensions")))
                )
                .addClass(
                    new ADOClass("RelationshipElement", "SubmodelElement")
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "first", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Reference\"\n\tmax:1")))
                        .addAttribute(new ADOAttribute(false, "second", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Reference\"\n\tmax:1")))
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nCLIP_ELLIPSE rx:1.5cm ry:.68cm\nGRADIENT_RECT x:-1.75cm y:-0.75cm w:3.2cm h:1.5cm style:downdiag color1:(rgbval (\"lightskyblue\", 1.4)) color2:(rgbval (\"lightskyblue\", 0.7))\nFILL style:null\nPEN w:0.08cm color:(rgbval (\"lightskyblue\", 0.7)) join:miter\nCLIP_OFF\nELLIPSE rx:1.5cm ry:.65cm\nFONT color:(col)\nATTR \"Name\" y:.8cm w:c:2.8cm h:t\nFONT \"Arial\" h:20pt color:black\nTEXT \"RE\" y:0.05cm w:c h:c")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"category\"\nATTR \"idShort\"\nATTR \"displayName\"\nATTR \"description\"\nCHAPTER \"Relationship\"\nATTR \"first\"\nATTR \"second\"\nCHAPTER \"Semantic\"\nATTR \"qualifier\"\nATTR \"semanticId\"\nATTR \"supplementalSemanticId\"\nCHAPTER \"Data Specification\"\nATTR \"dataSpecification\"\nCHAPTER \"Extensions\"\nATTR \"extension\"\n")
                )
                .addClass(
                    new ADOClass("AnnotatedRelationshipElement", "RelationshipElement")
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "dataElement", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("dataElements")))
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nCLIP_ELLIPSE rx:1.5cm ry:.68cm\nGRADIENT_RECT x:-1.75cm y:-0.75cm w:3.2cm h:1.5cm style:downdiag color1:(rgbval (\"lightskyblue\", 1.4)) color2:(rgbval (\"lightskyblue\", 0.7))\nFILL style:null\nPEN w:0.08cm color:(rgbval (\"lightskyblue\", 0.7)) join:miter\nCLIP_OFF\nELLIPSE rx:1.5cm ry:.65cm\nFONT color:(col)\nATTR \"Name\" y:.8cm w:c:2.8cm h:t\nFONT \"Arial\" h:20pt color:black\nTEXT \"Ann RE\" y:0.05cm w:c h:c")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"category\"\nATTR \"idShort\"\nATTR \"displayName\"\nATTR \"description\"\nCHAPTER \"Relationship\"\nATTR \"first\"\nATTR \"second\"\nATTR \"dataElement\"\nCHAPTER \"Semantic\"\nATTR \"qualifier\"\nATTR \"semanticId\"\nATTR \"supplementalSemanticId\"\nCHAPTER \"Data Specification\"\nATTR \"dataSpecification\"\nCHAPTER \"Extensions\"\nATTR \"extension\"\n")
                )
                .addClass(
                    new ADOClass("DataElement", "SubmodelElement")
                        .setClassAbrstractAttribute(1)
                )
                .addClass(
                    new ADOClass("Property", "DataElement")
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "valueType", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("xs:string@xs:boolean@xs:decimal@xs:integer@xs:double@xs:float@xs:date@xs:time@xs:dateTime@xs:gYear@xs:gMonth@xs:gDay@xs:gYearMonth@xs:gMonthDay@xs:duration@xs:byte@xs:short@xs:int@xs:long@xs:unsignedByte@xs:unsignedShort@xs:unsignedInt@xs:unsignedLong@xs:positiveInteger@xs:nonNegativeInteger@xs:negativeInteger@xs:nonPositiveInteger@xs:hexBinary@xs:base64Binary@xs:anyURI")))
                        .addAttribute(new ADOAttribute(false, "value", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "valueId", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Reference\"\n\tmax:1")))
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nCLIP_ELLIPSE rx:1.5cm ry:.68cm\nGRADIENT_RECT x:-1.75cm y:-0.75cm w:3.2cm h:1.5cm style:downdiag color1:(rgbval (\"lightskyblue\", 1.4)) color2:(rgbval (\"lightskyblue\", 0.7))\nFILL style:null\nPEN w:0.08cm color:(rgbval (\"lightskyblue\", 0.7)) join:miter\nCLIP_OFF\nELLIPSE rx:1.5cm ry:.65cm\nFONT color:(col)\nATTR \"Name\" y:.8cm w:c:2.8cm h:t\nFONT \"Arial\" h:20pt color:black\nTEXT \"Prop\" y:0.05cm w:c h:c")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"category\"\nATTR \"idShort\"\nATTR \"displayName\"\nATTR \"description\"\nCHAPTER \"Value\"\nATTR \"valueType\"\nATTR \"value\"\nATTR \"valueId\"\nCHAPTER \"Semantic\"\nATTR \"qualifier\"\nATTR \"semanticId\"\nATTR \"supplementalSemanticId\"\nCHAPTER \"Data Specification\"\nATTR \"dataSpecification\"\nCHAPTER \"Extensions\"\nATTR \"extension\"\n")
                )
                .addClass(
                    new ADOClass("MultiLanguageProperty", "DataElement")
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "value", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("multiLanguageText")))
                        .addAttribute(new ADOAttribute(false, "valueId", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Reference\"\n\tmax:1")))
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nCLIP_ELLIPSE rx:1.5cm ry:.68cm\nGRADIENT_RECT x:-1.75cm y:-0.75cm w:3.2cm h:1.5cm style:downdiag color1:(rgbval (\"lightskyblue\", 1.4)) color2:(rgbval (\"lightskyblue\", 0.7))\nFILL style:null\nPEN w:0.08cm color:(rgbval (\"lightskyblue\", 0.7)) join:miter\nCLIP_OFF\nELLIPSE rx:1.5cm ry:.65cm\nFONT color:(col)\nATTR \"Name\" y:.8cm w:c:2.8cm h:t\nFONT \"Arial\" h:20pt color:black\nTEXT \"ML Prop\" y:0.05cm w:c h:c")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"category\"\nATTR \"idShort\"\nATTR \"displayName\"\nATTR \"description\"\nCHAPTER \"Value\"\nATTR \"value\"\nATTR \"valueId\"\nCHAPTER \"Semantic\"\nATTR \"qualifier\"\nATTR \"semanticId\"\nATTR \"supplementalSemanticId\"\nCHAPTER \"Data Specification\"\nATTR \"dataSpecification\"\nCHAPTER \"Extensions\"\nATTR \"extension\"\n")
                )
                .addClass(
                    new ADOClass("Range", "DataElement")
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "valueType", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("xs:string@xs:boolean@xs:decimal@xs:integer@xs:double@xs:float@xs:date@xs:time@xs:dateTime@xs:gYear@xs:gMonth@xs:gDay@xs:gYearMonth@xs:gMonthDay@xs:duration@xs:byte@xs:short@xs:int@xs:long@xs:unsignedByte@xs:unsignedShort@xs:unsignedInt@xs:unsignedLong@xs:positiveInteger@xs:nonNegativeInteger@xs:negativeInteger@xs:nonPositiveInteger@xs:hexBinary@xs:base64Binary@xs:anyURI")))
                        .addAttribute(new ADOAttribute(false, "min", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "max", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nCLIP_ELLIPSE rx:1.5cm ry:.68cm\nGRADIENT_RECT x:-1.75cm y:-0.75cm w:3.2cm h:1.5cm style:downdiag color1:(rgbval (\"lightskyblue\", 1.4)) color2:(rgbval (\"lightskyblue\", 0.7))\nFILL style:null\nPEN w:0.08cm color:(rgbval (\"lightskyblue\", 0.7)) join:miter\nCLIP_OFF\nELLIPSE rx:1.5cm ry:.65cm\nFONT color:(col)\nATTR \"Name\" y:.8cm w:c:2.8cm h:t\nFONT \"Arial\" h:20pt color:black\nTEXT \"Range\" y:0.05cm w:c h:c")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"category\"\nATTR \"idShort\"\nATTR \"displayName\"\nATTR \"description\"\nCHAPTER \"Value\"\nATTR \"valueType\"\nATTR \"min\"\nATTR \"max\"\nCHAPTER \"Semantic\"\nATTR \"qualifier\"\nATTR \"semanticId\"\nATTR \"supplementalSemanticId\"\nCHAPTER \"Data Specification\"\nATTR \"dataSpecification\"\nCHAPTER \"Extensions\"\nATTR \"extension\"\n")
                )
                .addClass(
                    new ADOClass("Blob", "DataElement")
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "value", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        .addAttribute(new ADOAttribute(false, "contentType", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nCLIP_ELLIPSE rx:1.5cm ry:.68cm\nGRADIENT_RECT x:-1.75cm y:-0.75cm w:3.2cm h:1.5cm style:downdiag color1:(rgbval (\"lightskyblue\", 1.4)) color2:(rgbval (\"lightskyblue\", 0.7))\nFILL style:null\nPEN w:0.08cm color:(rgbval (\"lightskyblue\", 0.7)) join:miter\nCLIP_OFF\nELLIPSE rx:1.5cm ry:.65cm\nFONT color:(col)\nATTR \"Name\" y:.8cm w:c:2.8cm h:t\nFONT \"Arial\" h:20pt color:black\nTEXT \"Blob\" y:0.05cm w:c h:c")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"category\"\nATTR \"idShort\"\nATTR \"displayName\"\nATTR \"description\"\nCHAPTER \"Value\"\nATTR \"value\"\nATTR \"contentType\"\nCHAPTER \"Semantic\"\nATTR \"qualifier\"\nATTR \"semanticId\"\nATTR \"supplementalSemanticId\"\nCHAPTER \"Data Specification\"\nATTR \"dataSpecification\"\nCHAPTER \"Extensions\"\nATTR \"extension\"\n")
                )
                .addClass(
                    new ADOClass("File", "DataElement")
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "value", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        .addAttribute(new ADOAttribute(false, "contentType", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nCLIP_ELLIPSE rx:1.5cm ry:.68cm\nGRADIENT_RECT x:-1.75cm y:-0.75cm w:3.2cm h:1.5cm style:downdiag color1:(rgbval (\"lightskyblue\", 1.4)) color2:(rgbval (\"lightskyblue\", 0.7))\nFILL style:null\nPEN w:0.08cm color:(rgbval (\"lightskyblue\", 0.7)) join:miter\nCLIP_OFF\nELLIPSE rx:1.5cm ry:.65cm\nFONT color:(col)\nATTR \"Name\" y:.8cm w:c:2.8cm h:t\nFONT \"Arial\" h:20pt color:black\nTEXT \"File\" y:0.05cm w:c h:c")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"category\"\nATTR \"idShort\"\nATTR \"displayName\"\nATTR \"description\"\nCHAPTER \"Value\"\nATTR \"value\"\nATTR \"contentType\"\nCHAPTER \"Semantic\"\nATTR \"qualifier\"\nATTR \"semanticId\"\nATTR \"supplementalSemanticId\"\nCHAPTER \"Data Specification\"\nATTR \"dataSpecification\"\nCHAPTER \"Extensions\"\nATTR \"extension\"\n")
                )
                .addClass(
                    new ADOClass("ReferenceElement", "DataElement")
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "value", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Reference\"\n\tmax:1")))
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nCLIP_ELLIPSE rx:1.5cm ry:.68cm\nGRADIENT_RECT x:-1.75cm y:-0.75cm w:3.2cm h:1.5cm style:downdiag color1:(rgbval (\"lightskyblue\", 1.4)) color2:(rgbval (\"lightskyblue\", 0.7))\nFILL style:null\nPEN w:0.08cm color:(rgbval (\"lightskyblue\", 0.7)) join:miter\nCLIP_OFF\nELLIPSE rx:1.5cm ry:.65cm\nFONT color:(col)\nATTR \"Name\" y:.8cm w:c:2.8cm h:t\nFONT \"Arial\" h:20pt color:black\nTEXT \"Ref El\" y:0.05cm w:c h:c")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"category\"\nATTR \"idShort\"\nATTR \"displayName\"\nATTR \"description\"\nCHAPTER \"Reference\"\nATTR \"value\"\nCHAPTER \"Semantic\"\nATTR \"qualifier\"\nATTR \"semanticId\"\nATTR \"supplementalSemanticId\"\nCHAPTER \"Data Specification\"\nATTR \"dataSpecification\"\nCHAPTER \"Extensions\"\nATTR \"extension\"\n")
                )
                .addClass(
                    new ADOClass("SubmodelElementList", "SubmodelElement")
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "orderRelevant", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("True@False")))
                        .addAttribute(new ADOAttribute(false, "semanticIdListElement", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Reference\"\n\tmax:1")))
                        .addAttribute(new ADOAttribute(false, "typeValueListElement", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("AnnotatedRelationshipElement@BasicEventElement@Blob@Capability@DataElement@Entity@EventElement@File@MultiLanguageProperty@Operation@Property@Range@ReferenceElement@RelationshipElement@SubmodelElement@SubmodelElementCollection@SubmodelElementList")))
                        .addAttribute(new ADOAttribute(false, "valueTypeListElement", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("xs:string@xs:boolean@xs:decimal@xs:integer@xs:double@xs:float@xs:date@xs:time@xs:dateTime@xs:gYear@xs:gMonth@xs:gDay@xs:gYearMonth@xs:gMonthDay@xs:duration@xs:byte@xs:short@xs:int@xs:long@xs:unsignedByte@xs:unsignedShort@xs:unsignedInt@xs:unsignedLong@xs:positiveInteger@xs:nonNegativeInteger@xs:negativeInteger@xs:nonPositiveInteger@xs:hexBinary@xs:base64Binary@xs:anyURI")))
                        .addAttribute(new ADOAttribute(false, "value", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("submodelElements")))
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nCLIP_ELLIPSE rx:1.5cm ry:.68cm\nGRADIENT_RECT x:-1.75cm y:-0.75cm w:3.2cm h:1.5cm style:downdiag color1:(rgbval (\"lightskyblue\", 1.4)) color2:(rgbval (\"lightskyblue\", 0.7))\nFILL style:null\nPEN w:0.08cm color:(rgbval (\"lightskyblue\", 0.7)) join:miter\nCLIP_OFF\nELLIPSE rx:1.5cm ry:.65cm\nFONT color:(col)\nATTR \"Name\" y:.8cm w:c:2.8cm h:t\nFONT \"Arial\" h:20pt color:black\nTEXT \"List\" y:0.05cm w:c h:c")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"category\"\nATTR \"idShort\"\nATTR \"displayName\"\nATTR \"description\"\nCHAPTER \"List\"\nATTR \"orderRelevant\"\nATTR \"semanticIdListElement\"\nATTR \"typeValueListElement\"\nATTR \"valueTypeListElement\"\nATTR \"value\"\nCHAPTER \"Semantic\"\nATTR \"qualifier\"\nATTR \"semanticId\"\nATTR \"supplementalSemanticId\"\nCHAPTER \"Data Specification\"\nATTR \"dataSpecification\"\nCHAPTER \"Extensions\"\nATTR \"extension\"\n")
                )
                .addClass(
                    new ADOClass("Capability", "SubmodelElement")
                        .setClassAbrstractAttribute(0)
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nCLIP_ELLIPSE rx:1.5cm ry:.68cm\nGRADIENT_RECT x:-1.75cm y:-0.75cm w:3.2cm h:1.5cm style:downdiag color1:(rgbval (\"lightskyblue\", 1.4)) color2:(rgbval (\"lightskyblue\", 0.7))\nFILL style:null\nPEN w:0.08cm color:(rgbval (\"lightskyblue\", 0.7)) join:miter\nCLIP_OFF\nELLIPSE rx:1.5cm ry:.65cm\nFONT color:(col)\nATTR \"Name\" y:.8cm w:c:2.8cm h:t\nFONT \"Arial\" h:20pt color:black\nTEXT \"Capab\" y:0.05cm w:c h:c")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"category\"\nATTR \"idShort\"\nATTR \"displayName\"\nATTR \"description\"\nCHAPTER \"Semantic\"\nATTR \"qualifier\"\nATTR \"semanticId\"\nATTR \"supplementalSemanticId\"\nCHAPTER \"Data Specification\"\nATTR \"dataSpecification\"\nCHAPTER \"Extensions\"\nATTR \"extension\"\n")
                )
                .addClass(
                    new ADOClass("SubmodelElementCollection", "SubmodelElement")
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "value", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("submodelElements")))
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nCLIP_ELLIPSE rx:1.5cm ry:.68cm\nGRADIENT_RECT x:-1.75cm y:-0.75cm w:3.2cm h:1.5cm style:downdiag color1:(rgbval (\"lightskyblue\", 1.4)) color2:(rgbval (\"lightskyblue\", 0.7))\nFILL style:null\nPEN w:0.08cm color:(rgbval (\"lightskyblue\", 0.7)) join:miter\nCLIP_OFF\nELLIPSE rx:1.5cm ry:.65cm\nFONT color:(col)\nATTR \"Name\" y:.8cm w:c:2.8cm h:t\nFONT \"Arial\" h:20pt color:black\nTEXT \"Set\" y:0.05cm w:c h:c")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"category\"\nATTR \"idShort\"\nATTR \"displayName\"\nATTR \"description\"\nCHAPTER \"Collection\"\nATTR \"value\"\nCHAPTER \"Semantic\"\nATTR \"qualifier\"\nATTR \"semanticId\"\nATTR \"supplementalSemanticId\"\nCHAPTER \"Data Specification\"\nATTR \"dataSpecification\"\nCHAPTER \"Extensions\"\nATTR \"extension\"\n")
                )
                .addClass(
                    new ADOClass("Operation", "SubmodelElement")
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "inputVariable", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("operationVariables")))
                        .addAttribute(new ADOAttribute(false, "outputVariable", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("operationVariables")))
                        .addAttribute(new ADOAttribute(false, "inoutputVariable", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("operationVariables")))
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nCLIP_ELLIPSE rx:1.5cm ry:.68cm\nGRADIENT_RECT x:-1.75cm y:-0.75cm w:3.2cm h:1.5cm style:downdiag color1:(rgbval (\"lightskyblue\", 1.4)) color2:(rgbval (\"lightskyblue\", 0.7))\nFILL style:null\nPEN w:0.08cm color:(rgbval (\"lightskyblue\", 0.7)) join:miter\nCLIP_OFF\nELLIPSE rx:1.5cm ry:.65cm\nFONT color:(col)\nATTR \"Name\" y:.8cm w:c:2.8cm h:t\nFONT \"Arial\" h:20pt color:black\nTEXT \"Op\" y:0.05cm w:c h:c")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"category\"\nATTR \"idShort\"\nATTR \"displayName\"\nATTR \"description\"\nCHAPTER \"Operation\"\nATTR \"inputVariable\"\nATTR \"outputVariable\"\nATTR \"inoutputVariable\"\nCHAPTER \"Semantic\"\nATTR \"qualifier\"\nATTR \"semanticId\"\nATTR \"supplementalSemanticId\"\nCHAPTER \"Data Specification\"\nATTR \"dataSpecification\"\nCHAPTER \"Extensions\"\nATTR \"extension\"\n")
                )
                .addClass(
                    new ADOClass("OperationVariable", ADOClass.defaultSuperIdDynamic)
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "value", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"RelationshipElement\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"AnnotatedRelationshipElement\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Property\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"MultiLanguageProperty\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Range\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Blob\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"File\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"ReferenceElement\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"SubmodelElementList\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"SubmodelElementCollection\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Capability\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Operation\"\n\tmax:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"Entity\"\n\tmax:1")))
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nCLIP_ELLIPSE rx:1.5cm ry:.68cm\nGRADIENT_RECT x:-1.75cm y:-0.75cm w:3.2cm h:1.5cm style:downdiag color1:(rgbval (\"lightgreen\", 1.4)) color2:(rgbval (\"lightgreen\", 0.7))\nFILL style:null\nPEN w:0.08cm color:(rgbval (\"lightgreen\", 0.7)) join:miter\nCLIP_OFF\nELLIPSE rx:1.5cm ry:.65cm\nFONT color:(col)\nATTR \"Name\" y:.8cm w:c:2.8cm h:t\nFONT \"Arial\" h:20pt color:black\nTEXT \"OpVar\" y:0.05cm w:c h:c")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"value\"\n")
                )
                .addClass(
                    new ADOClass("Entity", "SubmodelElement")
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "statement", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("submodelElements")))
                        .addAttribute(new ADOAttribute(false, "entityType", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("CoManagedEntity@SelfManagedEntity")))
                        .addAttribute(new ADOAttribute(false, "globalAssetId", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(0)))
                        //.addAttribute(new ADOAttribute(false, "specificAssetId", TypeIdentifier.INTERREF).addADOxxDefaultFacets().setFacetValue("AttributeInterRefDomain", new Val("REFDOMAIN max:1\nOBJREF\n\tmt:\"Asset Administration Shell Environment\"\n\tc:\"SpecificAssetId\"\n\tmax:1")))
                        .addAttribute(new ADOAttribute(false, "specificAssetId", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("specificAssetIds")))
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nCLIP_ELLIPSE rx:1.5cm ry:.68cm\nGRADIENT_RECT x:-1.75cm y:-0.75cm w:3.2cm h:1.5cm style:downdiag color1:(rgbval (\"lightskyblue\", 1.4)) color2:(rgbval (\"lightskyblue\", 0.7))\nFILL style:null\nPEN w:0.08cm color:(rgbval (\"lightskyblue\", 0.7)) join:miter\nCLIP_OFF\nELLIPSE rx:1.5cm ry:.65cm\nFONT color:(col)\nATTR \"Name\" y:.8cm w:c:2.8cm h:t\nFONT \"Arial\" h:20pt color:black\nTEXT \"Entity\" y:0.05cm w:c h:c")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"General\"\nATTR \"Name\"\nATTR \"category\"\nATTR \"idShort\"\nATTR \"displayName\"\nATTR \"description\"\nCHAPTER \"Entity\"\nATTR \"statement\"\nATTR \"entityType\"\nATTR \"globalAssetId\"\nATTR \"specificAssetId\"\nCHAPTER \"Semantic\"\nATTR \"qualifier\"\nATTR \"semanticId\"\nATTR \"supplementalSemanticId\"\nCHAPTER \"Data Specification\"\nATTR \"dataSpecification\"\nCHAPTER \"Extensions\"\nATTR \"extension\"\n")
                )

                .addRelation(
                    new ADORelation("derivedFrom", "AssetAdministrationShell", "AssetAdministrationShell")
                        .setGraphRepAttribute("GRAPHREP\nSHADOW mode:off\nPEN w:0.02cm\nEDGE\nMIDDLE\nTEXT \"derivedFrom\" x:0.00cm y:0.00cm w:c:2.00cm h:t\n\nEND\nFILL color:white\nPOLYGON 3 x1:-.4cm y1:.2cm x2:0cm y2:0cm x3:-.4cm y3:-.2cm")
                )
                .addRelation(
                    new ADORelation("hasSubmodel", "AssetAdministrationShell", "Submodel")
                        .setGraphRepAttribute("GRAPHREP\nSHADOW mode:off\nPEN w:0.02cm\nEDGE\nMIDDLE\nTEXT \"hasSubmodel\" x:0.00cm y:0.00cm w:c:2.00cm h:t\n\nEND\nFILL color:white\nPOLYGON 3 x1:-.4cm y1:.2cm x2:0cm y2:0cm x3:-.4cm y3:-.2cm")
                )
                .addRelation(
                    new ADORelation("hasQualifier", "Qualifiable", "Qualifier")
                        .setGraphRepAttribute("GRAPHREP\nSHADOW mode:off\nPEN w:0.02cm\nEDGE\nMIDDLE\nTEXT \"hasQualifier\" x:0.00cm y:0.00cm w:c:2.00cm h:t\n\nEND\nFILL color:white\nPOLYGON 3 x1:-.4cm y1:.2cm x2:0cm y2:0cm x3:-.4cm y3:-.2cm")
                )
                .addRelation(
                    new ADORelation("hasElement", "Submodel", "SubmodelElement")
                        .setGraphRepAttribute("GRAPHREP\nSHADOW mode:off\nPEN w:0.02cm\nEDGE\nMIDDLE\nTEXT \"hasElement\" x:0.00cm y:0.00cm w:c:2.00cm h:t\n\nEND\nFILL color:white\nPOLYGON 3 x1:-.4cm y1:.2cm x2:0cm y2:0cm x3:-.4cm y3:-.2cm")
                )
                .addRelation(
                    new ADORelation("collect", "SubmodelElementCollection", "SubmodelElement")
                        .setGraphRepAttribute("GRAPHREP\nSHADOW mode:off\nPEN w:0.02cm\nEDGE\nMIDDLE\nTEXT \"collect\" x:0.00cm y:0.00cm w:c:2.00cm h:t\n\nEND\nFILL color:white\nPOLYGON 3 x1:-.4cm y1:.2cm x2:0cm y2:0cm x3:-.4cm y3:-.2cm")
                )
                .addRelation(
                    new ADORelation("list", "SubmodelElementList", "SubmodelElement")
                        .setGraphRepAttribute("GRAPHREP\nSHADOW mode:off\nPEN w:0.02cm\nEDGE\nMIDDLE\nTEXT \"list\" x:0.00cm y:0.00cm w:c:2.00cm h:t\n\nEND\nFILL color:white\nPOLYGON 3 x1:-.4cm y1:.2cm x2:0cm y2:0cm x3:-.4cm y3:-.2cm")
                )
                .addRelation(
                    new ADORelation("reference", "Referable", "Reference")
                        .setGraphRepAttribute("GRAPHREP\nSHADOW mode:off\nPEN w:0.02cm\nEDGE\nMIDDLE\nTEXT \"reference\" x:0.00cm y:0.00cm w:c:2.00cm h:t\n\nEND\nFILL color:white\nPOLYGON 3 x1:-.4cm y1:.2cm x2:0cm y2:0cm x3:-.4cm y3:-.2cm")
                )


                .addClass(
                    new ADOClass("Service", ADOClass.defaultSuperIdDynamic)
                        .setClassAbrstractAttribute(1)
                        //.addAttribute(new ADOAttribute(false, "Service Type", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("FMU@Internal@External")))
                        .addAttribute(new ADOAttribute(false, "Service Inputs", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("Service Inputs")))
                        .addAttribute(new ADOAttribute(false, "Output Schema", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(1)))
                        .addAttribute(new ADOAttribute(false, "Output Mapping", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("Output Mapping")))
                )
                .addClass(
                    new ADOClass("External Service", "Service")
                        .setClassAbrstractAttribute(0)

                        .addAttribute(new ADOAttribute(false, "Method", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("GET@POST@HEAD@OPTIONS@PUT@DELETE@TRACE")))
                        .addAttribute(new ADOAttribute(false, "Method", new Val("GET")))
                        .addAttribute(new ADOAttribute(false, "Content Type", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "Additional Headers", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("REST Additional Headers")))
                        .addAttribute(new ADOAttribute(false, "Endpoint", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "Payload", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(1)))
                        
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nSET text:(\"External\")\nAVAL name: \"Name\"\nIF(name = \"\")\n FILL color:\"white\"\n RECTANGLE x:-3cm y:-1.5cm w:6cm h:3cm\n FONT \"Arial\" h:30pt color:black\n TEXT (text) w:c:5cm h:c line-break:words\nELSE\n FILL color:\"white\"\n RECTANGLE x:-1.5cm y:-0.5cm w:3cm h:1cm\n RECTANGLE x:-1.75cm y:-0.3cm w:0.5cm h:0.25cm\n RECTANGLE x:-1.75cm y:0.1cm w:0.5cm h:0.25cm\n ATTR \"Name\" x:0.00cm y:0.7cm h:t w:c:3cm line-break:words\n FONT \"Arial\" h:10pt color:black\n TEXT (text) w:c:2.4cm h:c line-break:words\nENDIF")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"Description\"\nATTR \"Name\"\nATTR \"Description\"\n\nCHAPTER \"I/O\"\nATTR \"Service Inputs\"\nATTR \"Output Schema\"\nATTR \"Output Mapping\"\n\nCHAPTER \"REST\"\nATTR \"Method\"\nATTR \"Content Type\"\nATTR \"Additional Headers\"\nATTR \"Endpoint\"\nATTR \"Payload\"")
                )
                .addClass(
                    new ADOClass("Internal Service", "Service")
                        .setClassAbrstractAttribute(0)
                        .addAttribute(new ADOAttribute(false, "Container Image", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "Container Port", TypeIdentifier.INTEGER, new Val(8080)).addADOxxDefaultFacets())

                        .addAttribute(new ADOAttribute(false, "Method", TypeIdentifier.ENUMERATION).addADOxxDefaultFacets().setFacetValue("EnumerationDomain", new Val("GET@POST@HEAD@OPTIONS@PUT@DELETE@TRACE")))
                        .addAttribute(new ADOAttribute(false, "Method", new Val("GET")))
                        .addAttribute(new ADOAttribute(false, "Content Type", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "Additional Headers", TypeIdentifier.RECORD).addADOxxDefaultFacets().setFacetValue("RecordClassName", new Val("REST Additional Headers")))
                        .addAttribute(new ADOAttribute(false, "Endpoint", TypeIdentifier.STRING, new Val("")).addADOxxDefaultFacets())
                        .addAttribute(new ADOAttribute(false, "Payload", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(1)))
                        
                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nSET text:(\"Internal\")\nAVAL name: \"Name\"\nIF(name = \"\")\n FILL color:\"white\"\n RECTANGLE x:-3cm y:-1.5cm w:6cm h:3cm\n FONT \"Arial\" h:30pt color:black\n TEXT (text) w:c:5cm h:c line-break:words\nELSE\n FILL color:\"white\"\n RECTANGLE x:-1.5cm y:-0.5cm w:3cm h:1cm\n RECTANGLE x:-1.75cm y:-0.3cm w:0.5cm h:0.25cm\n RECTANGLE x:-1.75cm y:0.1cm w:0.5cm h:0.25cm\n ATTR \"Name\" x:0.00cm y:0.7cm h:t w:c:3cm line-break:words\n FONT \"Arial\" h:10pt color:black\n TEXT (text) w:c:2.4cm h:c line-break:words\nENDIF")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"Description\"\nATTR \"Name\"\nATTR \"Description\"\n\nCHAPTER \"Container\"\nATTR \"Container Image\"\nATTR \"Container Port\"\nCHAPTER \"I/O\"\nATTR \"Service Inputs\"\nATTR \"Output Schema\"\nATTR \"Output Mapping\"\n\nCHAPTER \"REST\"\nATTR \"Method\"\nATTR \"Content Type\"\nATTR \"Additional Headers\"\nATTR \"Endpoint\"\nATTR \"Payload\"")
                )
                .addClass(
                    new ADOClass("FMU", "Service")
                        .setClassAbrstractAttribute(0)

                        .addAttribute(new ADOAttribute(false, "FMU", TypeIdentifier.LONGSTRING, new Val("")).addADOxxDefaultFacets().setFacetValue("MultiLineString", new Val(1)))

                        .setGraphRepAttribute("GRAPHREP\nSHADOW off\nSET text:(\"FMU\")\nAVAL name: \"Name\"\nIF(name = \"\")\n FILL color:\"white\"\n RECTANGLE x:-3cm y:-1.5cm w:6cm h:3cm\n FONT \"Arial\" h:30pt color:black\n TEXT (text) w:c:5cm h:c line-break:words\nELSE\n FILL color:\"white\"\n RECTANGLE x:-1.5cm y:-0.5cm w:3cm h:1cm\n RECTANGLE x:-1.75cm y:-0.3cm w:0.5cm h:0.25cm\n RECTANGLE x:-1.75cm y:0.1cm w:0.5cm h:0.25cm\n ATTR \"Name\" x:0.00cm y:0.7cm h:t w:c:3cm line-break:words\n FONT \"Arial\" h:10pt color:black\n TEXT (text) w:c:2.4cm h:c line-break:words\nENDIF")
                        .setAttrRepAttribute("NOTEBOOK\n\nCHAPTER \"Description\"\nATTR \"Name\"\nATTR \"Description\"\n\nCHAPTER \"FMU\"\nATTR \"FMU\"")
                )
                .setModi(new String(Utils.readFile(AASBeeUpDefinitionLibrary.class.getResource("Modi-beeup.attr").toURI().getPath()), "UTF-8"))
                .setExternalCoupling(new String(Utils.readFile(AASBeeUpDefinitionLibrary.class.getResource("ExternalCoupling-beeup.asc").toURI().getPath()), "UTF-8"))
            ;

            lib.getApplicationLibraryNew().addFilePath("ADO2BPMN_v0.5.asc", AASBeeUpDefinitionLibrary.class.getResource("ADO2BPMN_v0.5.asc").toURI().getPath());
            lib.getApplicationLibraryNew().addFilePath("ADO2BPMN_v0.5.xsl", AASBeeUpDefinitionLibrary.class.getResource("ADO2BPMN_v0.5.xsl").toURI().getPath());

            lib.getApplicationLibraryNew().addFilePath("aas.json", AASBeeUpDefinitionLibrary.class.getResource("aas.json").toURI().getPath());
            lib.getApplicationLibraryNew().addFilePath("AAS_Utils.asc", AASBeeUpDefinitionLibrary.class.getResource("AAS_Utils.asc").toURI().getPath());
            
            lib.generateDB("adoDBOLIVE", "eM4-EjwV-CKbRaaOSi5mGwZuErVT6v9CAKEwvRGl", "D41010EE328888ACDE410ADBABCFDC3AFF1B264E0162C5C3D0F27235E65110B8");
            if(libraryExportPath!=null && !libraryExportPath.isEmpty()) {
                lib.generateABLFile(libraryExportPath + libraryName +".abl");
                lib.generateALLFile(libraryExportPath + libraryName + ".all");
            }
            System.out.println("Completed");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}