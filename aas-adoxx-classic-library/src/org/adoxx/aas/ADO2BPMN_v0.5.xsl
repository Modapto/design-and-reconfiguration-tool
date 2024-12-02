<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="xml" indent="yes" />
  <xsl:template match="/">
    <xsl:variable name="modelId" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']/@id" />

    <bpmn2:definitions xmlns:xs="http://www.w3.org/2001/XMLSchema"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL"
      xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
      xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
      xmlns:di="http://www.omg.org/spec/DD/20100524/DI" targetNamespace="http://org.eclipse.bpmn2/default/process" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL http://www.omg.org/spec/BPMN/2.0/20100501/BPMN20.xsd" id="model{$modelId}">

      <xsl:for-each select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@class='Message' or @class='Message (BPMN)']">
        <bpmn2:message id="{@id}" name="{@name}" />
      </xsl:for-each>

      <xsl:if test="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@class='Pool' or @class='Pool (collapsed)' or @class='Pool (BPMN)' or @class='Pool (collapsed) (BPMN)']">
        <bpmn2:collaboration id="Collaboration_1" name="Default Collaboration">
          <bpmn2:participant id="Participant_def" name="No Pool" processRef="No_Pool" />
          <xsl:for-each select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@class='Pool' or @class='Pool (collapsed)' or @class='Pool (BPMN)' or @class='Pool (collapsed) (BPMN)']">
            <bpmn2:participant id="{@id}" name="{@name}" processRef="proc_{@id}" />
          </xsl:for-each>

          <xsl:for-each select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='CONNECTOR' or local-name()='connector'][@class='Message Flow' or @class='Message Flow (BPMN)']">
            <xsl:variable name="sourceName" select="./*[local-name()='FROM' or local-name()='from']/@instance" />
            <xsl:variable name="targetName" select="./*[local-name()='TO' or local-name()='to']/@instance" />
            <xsl:variable name="sourceId" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$sourceName]/@id" />
            <xsl:variable name="targetId" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$targetName]/@id" />
            <bpmn2:messageFlow id="{@id}" sourceRef="{$sourceId}" targetRef="{$targetId}" />
          </xsl:for-each>
        </bpmn2:collaboration>
      </xsl:if>

      <bpmn2:process id="No_Pool" name="Default Process">

        <xsl:for-each select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance']/@name">
          <xsl:variable name="instanceName" select="current()" />
          <xsl:if test="not(//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='CONNECTOR' or local-name()='connector'][@class='Is inside' and (./*[local-name()='TO' or local-name()='to']/@class='Pool' or ./*[local-name()='TO' or local-name()='to']/@class='Pool (collapsed)' or ./*[local-name()='TO' or local-name()='to']/@class='Pool (BPMN)' or ./*[local-name()='TO' or local-name()='to']/@class='Pool (collapsed) (BPMN)') and ./*[local-name()='FROM' or local-name()='from']/@instance=$instanceName])">
            <xsl:call-template name="createBPMN2Element">
              <xsl:with-param name="instanceName" select="$instanceName" />
            </xsl:call-template>
          </xsl:if>
        </xsl:for-each>

        <xsl:for-each select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='CONNECTOR' or local-name()='connector'][@class='Subsequent']">
          <xsl:variable name="connectorId" select="@id" />
          <xsl:variable name="sourceName" select="./*[local-name()='FROM' or local-name()='from']/@instance" />
          <xsl:variable name="targetName" select="./*[local-name()='TO' or local-name()='to']/@instance" />
          <xsl:variable name="sourceId" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$sourceName]/@id" />
          <xsl:variable name="targetId" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$targetName]/@id" />
          <!--check if an instance of this connector is not inside a pool-->
          <xsl:if test="not(//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='CONNECTOR' or local-name()='connector'][@class='Is inside' and ./*[local-name()='FROM' or local-name()='from']/@instance=$sourceName and (./*[local-name()='TO' or local-name()='to']/@class='Pool' or ./*[local-name()='TO' or local-name()='to']/@class='Pool (collapsed)' or ./*[local-name()='TO' or local-name()='to']/@class='Pool (BPMN)' or ./*[local-name()='TO' or local-name()='to']/@class='Pool (collapsed) (BPMN)')])">
            <bpmn2:sequenceFlow id="{$connectorId}" sourceRef="{$sourceId}" targetRef="{$targetId}" />
          </xsl:if>
        </xsl:for-each>

        <xsl:for-each select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='CONNECTOR' or local-name()='connector'][@class='Association' or @class='Association (BPMN)' or @class='has Note' or @class='Data Association' or @class='Data Association (BPMN)']">
          <xsl:variable name="connectorId" select="@id" />
          <xsl:variable name="sourceName" select="./*[local-name()='FROM' or local-name()='from']/@instance" />
          <xsl:variable name="targetName" select="./*[local-name()='TO' or local-name()='to']/@instance" />
          <xsl:variable name="sourceId" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$sourceName]/@id" />
          <xsl:variable name="targetId" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$targetName]/@id" />
          <!--check if both instances of this connector are not inside a pool-->
          <xsl:if test="not(//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='CONNECTOR' or local-name()='connector'][@class='Is inside' and ./*[local-name()='FROM' or local-name()='from']/@instance=$sourceName and (./*[local-name()='TO' or local-name()='to']/@class='Pool' or ./*[local-name()='TO' or local-name()='to']/@class='Pool (collapsed)' or ./*[local-name()='TO' or local-name()='to']/@class='Pool (BPMN)' or ./*[local-name()='TO' or local-name()='to']/@class='Pool (collapsed) (BPMN)')]) and not(//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='CONNECTOR' or local-name()='connector'][@class='Is inside' and ./*[local-name()='FROM' or local-name()='from']/@instance=$targetName and (./*[local-name()='TO' or local-name()='to']/@class='Pool' or ./*[local-name()='TO' or local-name()='to']/@class='Pool (collapsed)' or ./*[local-name()='TO' or local-name()='to']/@class='Pool (BPMN)' or ./*[local-name()='TO' or local-name()='to']/@class='Pool (collapsed) (BPMN)')])">
            <bpmn2:association id="{$connectorId}" sourceRef="{$sourceId}" targetRef="{$targetId}" />
          </xsl:if>
        </xsl:for-each>

      </bpmn2:process>

      <xsl:for-each select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@class='Pool' or @class='Pool (collapsed)' or @class='Pool (BPMN)' or @class='Pool (collapsed) (BPMN)']">
        <bpmn2:process id="proc_{@id}" name="{@name}" definitionalCollaborationRef="Collaboration_1">

          <xsl:variable name="poolName" select="@name" />
          <xsl:variable name="poolId" select="@id" />

          <xsl:if test="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='CONNECTOR' or local-name()='connector'][@class='Is inside' and (./*[local-name()='FROM' or local-name()='from']/@class='Lane' or ./*[local-name()='FROM' or local-name()='from']/@class='Lane (BPMN)') and ./*[local-name()='TO' or local-name()='to']/@instance=$poolName]">            
          <!--if this pool contain at least one lane-->
            <bpmn2:laneSet id="LaneSet_{$poolId}" name="Lane Set {$poolName}">
              <xsl:for-each select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@class='Lane' or @class='Lane (BPMN)']">
                <xsl:variable name="instanceName" select="@name" />
                <xsl:variable name="instanceId" select="@id" />
                <xsl:if test="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='CONNECTOR' or local-name()='connector'][@class='Is inside' and ./*[local-name()='FROM' or local-name()='from']/@instance=$instanceName and ./*[local-name()='TO' or local-name()='to']/@instance=$poolName]">
                  <bpmn2:lane id="{$instanceId}" name="{$instanceName}" />
                </xsl:if>
              </xsl:for-each>
            </bpmn2:laneSet>
          </xsl:if>

          <xsl:for-each select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='CONNECTOR' or local-name()='connector'][@class='Is inside' and ./*[local-name()='TO' or local-name()='to']/@instance=$poolName]/*[local-name()='FROM' or local-name()='from']/@instance">
            <xsl:call-template name="createBPMN2Element">
              <xsl:with-param name="instanceName" select="current()" />
            </xsl:call-template>
          </xsl:for-each>

          <xsl:for-each select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='CONNECTOR' or local-name()='connector'][@class='Subsequent']">
            <xsl:variable name="connectorId" select="@id" />
            <xsl:variable name="sourceName" select="./*[local-name()='FROM' or local-name()='from']/@instance" />
            <xsl:variable name="targetName" select="./*[local-name()='TO' or local-name()='to']/@instance" />
            <xsl:variable name="sourceId" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$sourceName]/@id" />
            <xsl:variable name="targetId" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$targetName]/@id" />
            <!--check if an instance of this connector is inside this pool-->
            <xsl:if test="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='CONNECTOR' or local-name()='connector'][@class='Is inside' and ./*[local-name()='FROM' or local-name()='from']/@instance=$sourceName and ./*[local-name()='TO' or local-name()='to']/@instance=$poolName]">
              <bpmn2:sequenceFlow id="{$connectorId}" sourceRef="{$sourceId}" targetRef="{$targetId}" />
            </xsl:if>
          </xsl:for-each>

          <xsl:for-each select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='CONNECTOR' or local-name()='connector'][@class='Association' or @class='Association (BPMN)' or @class='has Note' or @class='Data Association' or @class='Data Association (BPMN)']">
            <xsl:variable name="connectorId" select="@id" />
            <xsl:variable name="sourceName" select="./*[local-name()='FROM' or local-name()='from']/@instance" />
            <xsl:variable name="targetName" select="./*[local-name()='TO' or local-name()='to']/@instance" />
            <xsl:variable name="sourceId" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$sourceName]/@id" />
            <xsl:variable name="targetId" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$targetName]/@id" />
            <!--check if at least an instance of this connector is inside this pool-->
            <xsl:if test="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='CONNECTOR' or local-name()='connector'][@class='Is inside' and ./*[local-name()='FROM' or local-name()='from']/@instance=$sourceName and ./*[local-name()='TO' or local-name()='to']/@instance=$poolName] or //*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='CONNECTOR' or local-name()='connector'][@class='Is inside' and ./*[local-name()='FROM' or local-name()='from']/@instance=$targetName and ./*[local-name()='TO' or local-name()='to']/@instance=$poolName]">
              <bpmn2:association id="{$connectorId}" sourceRef="{$sourceId}" targetRef="{$targetId}" />
            </xsl:if>
          </xsl:for-each>

        </bpmn2:process>
      </xsl:for-each>

      <bpmndi:BPMNDiagram id="BPMNDiagram_1" name="Default Collaboration Diagram">
        <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="No_Pool">

          <xsl:call-template name="drawShapes">
            <xsl:with-param name="instanceList" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@class='Pool' or @class='Pool (collapsed)' or @class='Pool (BPMN)' or @class='Pool (collapsed) (BPMN)']" />
          </xsl:call-template>
          <xsl:call-template name="drawShapes">
            <xsl:with-param name="instanceList" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@class='Lane' or @class='Lane (BPMN)']" />
          </xsl:call-template>
          <xsl:call-template name="drawShapes">
            <xsl:with-param name="instanceList" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][not(@class='Pool' or @class='Pool (collapsed)' or @class='Lane' or @class='Pool (BPMN)' or @class='Pool (collapsed) (BPMN)' or @class='Lane (BPMN)')]" />
          </xsl:call-template>

          <xsl:for-each select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='CONNECTOR' or local-name()='connector'][@class!='Is inside']">
            <xsl:variable name="fromElName" select="./*[local-name()='FROM' or local-name()='from']/@instance" />
            <xsl:variable name="toElName" select="./*[local-name()='TO' or local-name()='to']/@instance" />
            <xsl:variable name="fromElId" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$fromElName]/@id" />
            <xsl:variable name="toElId" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$toElName]/@id" />

            <xsl:variable name="posFrom" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$fromElName]/*[local-name()='ATTRIBUTE' or local-name()='attribute'][@name='Position']" />
            <xsl:variable name="posTo" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$toElName]/*[local-name()='ATTRIBUTE' or local-name()='attribute'][@name='Position']" />

            <xsl:variable name="posFrom_w">
              <xsl:choose>
                <xsl:when test="contains($posFrom, 'w:')">
                  <xsl:value-of select="number(substring-before(substring-after($posFrom, 'w:'), 'cm'))*29" />
                </xsl:when>
                <xsl:otherwise>
                  <xsl:value-of select="number('36.0')" />
                </xsl:otherwise>
              </xsl:choose>
            </xsl:variable>
            <xsl:variable name="posFrom_h">
              <xsl:choose>
                <xsl:when test="contains($posFrom, 'h:')">
                  <xsl:value-of select="number(substring-before(substring-after($posFrom, 'h:'), 'cm'))*29" />
                </xsl:when>
                <xsl:otherwise>
                  <xsl:value-of select="number('36.0')" />
                </xsl:otherwise>
              </xsl:choose>
            </xsl:variable>
            <xsl:variable name="posTo_w">
              <xsl:choose>
                <xsl:when test="contains($posTo, 'w:')">
                  <xsl:value-of select="number(substring-before(substring-after($posTo, 'w:'), 'cm'))*29" />
                </xsl:when>
                <xsl:otherwise>
                  <xsl:value-of select="number('36.0')" />
                </xsl:otherwise>
              </xsl:choose>
            </xsl:variable>
            <xsl:variable name="posTo_h">
              <xsl:choose>
                <xsl:when test="contains($posTo, 'h:')">
                  <xsl:value-of select="number(substring-before(substring-after($posTo, 'h:'), 'cm'))*29" />
                </xsl:when>
                <xsl:otherwise>
                  <xsl:value-of select="number('36.0')" />
                </xsl:otherwise>
              </xsl:choose>
            </xsl:variable>

            <xsl:variable name="posFrom_x" select="(number(substring-before(substring-after($posFrom, 'x:'), 'cm'))*29) + $posFrom_w" />
            <xsl:variable name="posFrom_y" select="(number(substring-before(substring-after($posFrom, 'y:'), 'cm'))*29) + ($posFrom_h div 2)" />
            <xsl:variable name="posTo_x" select="number(substring-before(substring-after($posTo, 'x:'), 'cm'))*29" />
            <xsl:variable name="posTo_y" select="(number(substring-before(substring-after($posTo, 'y:'), 'cm'))*29) + ($posTo_h div 2)" />

            <bpmndi:BPMNEdge id="BPMNEdge_{@id}" bpmnElement="{@id}" sourceElement="BPMNShape_{$fromElId}" targetElement="BPMNShape_{$toElId}">
              <di:waypoint xsi:type="dc:Point" x="{$posFrom_x}" y="{$posFrom_y}" />
              <di:waypoint xsi:type="dc:Point" x="{$posTo_x}" y="{$posTo_y}" />
              <bpmndi:BPMNLabel id="BPMNLabel_{@id}" labelStyle="BPMNLabelStyle_1" />
            </bpmndi:BPMNEdge>
          </xsl:for-each>

        </bpmndi:BPMNPlane>
        <bpmndi:BPMNLabelStyle id="BPMNLabelStyle_1">
          <dc:Font name="arial" size="9.0" />
        </bpmndi:BPMNLabelStyle>
      </bpmndi:BPMNDiagram>

    </bpmn2:definitions>
  </xsl:template>


  <xsl:template name="drawShapes">
    <xsl:param name="instanceList" />
    <xsl:for-each select="$instanceList">
      <xsl:variable name="pos" select="./*[local-name()='ATTRIBUTE' or local-name()='attribute'][@name='Position']" />
      <xsl:variable name="pos_x" select="number(substring-before(substring-after($pos, 'x:'), 'cm'))*29" />
      <xsl:variable name="pos_y" select="number(substring-before(substring-after($pos, 'y:'), 'cm'))*29" />
      <xsl:variable name="pos_w">
        <xsl:choose>
          <xsl:when test="contains($pos, 'w:')">
            <xsl:value-of select="number(substring-before(substring-after($pos, 'w:'), 'cm'))*29" />
          </xsl:when>
          <xsl:otherwise>
            <xsl:value-of select="number('36.0')" />
          </xsl:otherwise>
        </xsl:choose>
      </xsl:variable>
      <xsl:variable name="pos_h">
        <xsl:choose>
          <xsl:when test="contains($pos, 'h:')">
            <xsl:value-of select="number(substring-before(substring-after($pos, 'h:'), 'cm'))*29" />
          </xsl:when>
          <xsl:otherwise>
            <xsl:value-of select="number('36.0')" />
          </xsl:otherwise>
        </xsl:choose>
      </xsl:variable>

      <bpmndi:BPMNShape id="BPMNShape_{@id}" bpmnElement="{@id}"
        xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI">
        <dc:Bounds height="{$pos_h}" width="{$pos_w}" x="{$pos_x}" y="{$pos_y}"
          xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" />
        <bpmndi:BPMNLabel id="BPMNLabel_{@id}" labelStyle="BPMNLabelStyle_1"
          xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI">
          <dc:Bounds height="15.0" width="68.0" x="{$pos_x}" y="{$pos_y}"
            xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
    </xsl:for-each>
  </xsl:template>


  <xsl:template name="createBPMN2Element">
    <xsl:param name="instanceName" />
    <xsl:variable name="instanceClass" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$instanceName]/@class" />
    <xsl:variable name="instanceId" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$instanceName]/@id" />

    <xsl:choose>
      <xsl:when test="$instanceClass = 'Task' or $instanceClass = 'Sub-Process' or $instanceClass = 'Cross-reference' or $instanceClass = 'Task (BPMN)' or $instanceClass = 'Sub-Process (BPMN)'">
        <xsl:call-template name="createGeneralBPMN2Element">
          <xsl:with-param name="elementName" select="$instanceName" />
          <xsl:with-param name="bpmnType" select="'task'" />
        </xsl:call-template>
      </xsl:when>
      <!--
            <xsl:when test="$instanceClass = 'Sub-Process'">
                TOFIX
            </xsl:when>
            -->
      <xsl:when test="$instanceClass = 'Start Event' or $instanceClass = 'Start Event (BPMN)'">
        <xsl:call-template name="createGeneralBPMN2Element">
          <xsl:with-param name="elementName" select="$instanceName" />
          <xsl:with-param name="bpmnType" select="'startEvent'" />
        </xsl:call-template>
      </xsl:when>
      <xsl:when test="$instanceClass = 'End Event' or $instanceClass = 'End Event (BPMN)'">
        <xsl:call-template name="createGeneralBPMN2Element">
          <xsl:with-param name="elementName" select="$instanceName" />
          <xsl:with-param name="bpmnType" select="'endEvent'" />
        </xsl:call-template>
      </xsl:when>
      <xsl:when test="$instanceClass = 'Intermediate Event (boundary)' or $instanceClass = 'Intermediate Event (boundary) (BPMN)'">
        <xsl:call-template name="createGeneralBPMN2Element">
          <xsl:with-param name="elementName" select="$instanceName" />
          <xsl:with-param name="bpmnType" select="'boundaryEvent'" />
        </xsl:call-template>
      </xsl:when>
      <xsl:when test="$instanceClass = 'Intermediate Event (sequence flow)' or $instanceClass = 'Intermediate Event (sequence flow) (BPMN)'">
        <xsl:variable name="intermediateEventType" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$instanceName]/*[local-name()='ATTRIBUTE' or local-name()='attribute'][@name='Type']" />
        <xsl:if test="$intermediateEventType = 'throwing'">
          <xsl:call-template name="createGeneralBPMN2Element">
            <xsl:with-param name="elementName" select="$instanceName" />
            <xsl:with-param name="bpmnType" select="'intermediateThrowEvent'" />
          </xsl:call-template>
        </xsl:if>
        <xsl:if test="$intermediateEventType = 'catching'">
          <xsl:call-template name="createGeneralBPMN2Element">
            <xsl:with-param name="elementName" select="$instanceName" />
            <xsl:with-param name="bpmnType" select="'intermediateCatchEvent'" />
          </xsl:call-template>
        </xsl:if>
      </xsl:when>
      <xsl:when test="$instanceClass = 'Intermediate Event (BPMN)'">
        <xsl:variable name="intermediateEventTypeS" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$instanceName]/*[local-name()='ATTRIBUTE' or local-name()='attribute'][@name='Type (sequence)']" />
        <xsl:variable name="intermediateEventTypeB" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$instanceName]/*[local-name()='ATTRIBUTE' or local-name()='attribute'][@name='Type (boundary)']" />
        <xsl:choose>
          <xsl:when test="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$instanceName]/*[local-name()='INTERREF' or local-name()='interref'][@name='Attached to']/*/@tobjname">
            <xsl:call-template name="createGeneralBPMN2Element">
              <xsl:with-param name="elementName" select="$instanceName" />
              <xsl:with-param name="bpmnType" select="'boundaryEvent'" />
            </xsl:call-template>
          </xsl:when>
          <xsl:otherwise>
            <xsl:if test="$intermediateEventTypeS = 'throwing'">
              <xsl:call-template name="createGeneralBPMN2Element">
                <xsl:with-param name="elementName" select="$instanceName" />
                <xsl:with-param name="bpmnType" select="'intermediateThrowEvent'" />
              </xsl:call-template>
            </xsl:if>
            <xsl:if test="$intermediateEventTypeS = 'catching'">
              <xsl:call-template name="createGeneralBPMN2Element">
                <xsl:with-param name="elementName" select="$instanceName" />
                <xsl:with-param name="bpmnType" select="'intermediateCatchEvent'" />
              </xsl:call-template>
            </xsl:if>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:when>
      <xsl:when test="$instanceClass = 'Exclusive Gateway' or $instanceClass = 'Exclusive Gateway (BPMN)'">
        <xsl:call-template name="createGeneralBPMN2Element">
          <xsl:with-param name="elementName" select="$instanceName" />
          <xsl:with-param name="bpmnType" select="'exclusiveGateway'" />
        </xsl:call-template>
      </xsl:when>
      <xsl:when test="$instanceClass = 'Non-exclusive Gateway' or $instanceClass = 'Non-exclusive Gateway (converging)' or $instanceClass = 'Non-exclusive Gateway (BPMN)' or $instanceClass = 'Non-exclusive Gateway (converging) (BPMN)'">
        <xsl:call-template name="createGeneralBPMN2Element">
          <xsl:with-param name="elementName" select="$instanceName" />
          <xsl:with-param name="bpmnType" select="'parallelGateway'" />
        </xsl:call-template>
      </xsl:when>
      <!--
            <xsl:when test="$instanceClass = 'Non-exclusive Gateway (converging)'">
                TOFIX?
            </xsl:when>
            -->
      <xsl:when test="$instanceClass = 'Data Object' or $instanceClass = 'Data Object (BPMN)'">
        <bpmn2:dataObject id="{$instanceId}" name="{$instanceName}"
          xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" />
      </xsl:when>
      <xsl:when test="$instanceClass = 'Text Annotation' or $instanceClass = 'Text Annotation (BPMN)' or $instanceClass = 'Note'">
        <bpmn2:textAnnotation id="{$instanceId}"
          xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL">
          <bpmn2:text xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL">
            <xsl:choose>
              <xsl:when test="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$instanceName]/*[local-name()='ATTRIBUTE' or local-name()='attribute'][@name='Text']">
                <xsl:value-of select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$instanceName]/*[local-name()='ATTRIBUTE' or local-name()='attribute'][@name='Text']" />
              </xsl:when>
              <xsl:otherwise>
                <xsl:value-of select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$instanceName]/*[local-name()='ATTRIBUTE' or local-name()='attribute'][@name='Description']" />
              </xsl:otherwise>
            </xsl:choose>
          </bpmn2:text>
        </bpmn2:textAnnotation>
      </xsl:when>
      <xsl:otherwise></xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="createGeneralBPMN2Element">
    <xsl:param name="elementName" />
    <xsl:param name="bpmnType" />

    <xsl:variable name="instanceId" select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='INSTANCE' or local-name()='instance'][@name=$elementName]/@id" />

    <xsl:element name="bpmn2:{$bpmnType}" namespace="http://www.omg.org/spec/BPMN/20100524/MODEL">
      <xsl:attribute name="id">
        <xsl:value-of select="$instanceId" />
      </xsl:attribute>
      <xsl:attribute name="name">
        <xsl:value-of select="$elementName" />
      </xsl:attribute>

      <xsl:if test="$bpmnType = 'boundaryEvent'">
        <xsl:variable name="refName" select="//*[@name=$elementName]/*[@name='Attached to']/*/@tobjname" />
        <xsl:attribute name="attachedToRef">
          <xsl:value-of select="//*[@name=$refName]/@id" />
        </xsl:attribute>
      </xsl:if>

      <xsl:for-each select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='CONNECTOR' or local-name()='connector'][@class='Subsequent' and ./*[local-name()='TO' or local-name()='to']/@instance=$elementName]/@id">
        <bpmn2:incoming xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL">
          <xsl:value-of select="current()" />
        </bpmn2:incoming>
      </xsl:for-each>
      <xsl:for-each select="//*[local-name()='MODEL' or local-name()='model'][@modeltype='Business process diagram (BPMN 2.0)' or @modeltype='Business Process Diagram (BPMN 2.0)']//*[local-name()='CONNECTOR' or local-name()='connector'][@class='Subsequent' and ./*[local-name()='FROM' or local-name()='from']/@instance=$elementName]/@id">
        <bpmn2:outgoing xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL">
          <xsl:value-of select="current()" />
        </bpmn2:outgoing>
      </xsl:for-each>
    </xsl:element>
  </xsl:template>
</xsl:stylesheet>