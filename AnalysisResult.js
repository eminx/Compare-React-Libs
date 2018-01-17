import React from 'react';
import { Row, Col, Divider } from 'antd';
import { Table, Button, Select, Tabs } from 'antd';
const TabPane = Tabs.TabPane;
const Option = Select.Option;
const { Column, ColumnGroup } = Table;
import Pie from './Charts/Pie';
import { firmitas, utilitas, venustas } from './AnalysisForAntPie';

class AnalysisResult extends React.Component {
  state = {
    scene: 'firmitas'
  }

  render() {

    return (
      <div>
        <h1>Vitrivius Analysis</h1>
        <Tabs>
          <TabPane tab="Firmitas" key="1">
          <Row>
            <Col span={11}>
            <Pie
              hasLegend
              subTitle="Support"
              // total={yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))}
              data={firmitas.support}
              // valueFormat={val => yuan(val)}
              height={248}
              width={248}
              lineWidth={4}
            />
            </Col>
            <Divider type="vertical" />
            <Col span={11}>
            <Pie
              hasLegend
              subTitle="Issues"
              // total={yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))}
              data={firmitas.issues}
              // valueFormat={val => yuan(val)}
              height={248}
              lineWidth={4}
            />
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={11}>
            <Pie
              hasLegend
              subTitle="Maintenance"
              // total={yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))}
              data={firmitas.maintenance}
              // valueFormat={val => yuan(val)}
              height={248}
              lineWidth={4}
            />
            </Col>
            <Divider type="vertical" />
            <Col span={11}>
            <Pie
              hasLegend
              subTitle="WidespreadUsage"
              // total={yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))}
              data={firmitas.widespreadUsage}
              // valueFormat={val => yuan(val)}
              height={248}
              lineWidth={4}
            />
            </Col>
            </Row>
          </TabPane>

          <TabPane tab="Utilitas" key="2">
          <Row>
            <Col span={11}>
            <Pie
              hasLegend
              subTitle="Richness"
              // total={yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))}
              data={utilitas.richness}
              // valueFormat={val => yuan(val)}
              height={248}
              lineWidth={4}
            />
            </Col>
            <Divider type="vertical" />
            <Col span={11}>
            <Pie
              hasLegend
              subTitle="Data Specific Tools"
              // total={yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))}
              data={utilitas.dataSpecificTools}
              // valueFormat={val => yuan(val)}
              height={248}
              lineWidth={4}
            />
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={11}>
            <Pie
              hasLegend
              subTitle="Comprehensiveness of Documentation"
              // total={yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))}
              data={utilitas.comprehensivenessOfDocumentation}
              // valueFormat={val => yuan(val)}
              height={248}
              lineWidth={4}
            />
            </Col>
            <Divider type="vertical" />
            <Col span={11}>
            <Pie
              hasLegend
              subTitle="Commit Frequency"
              // total={yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))}
              data={utilitas.commitFrequency}
              // valueFormat={val => yuan(val)}
              height={248}
              lineWidth={4}
            />
            </Col>
          </Row>

          <Row>
            <Pie
              hasLegend
              subTitle="Customisation"
              // total={yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))}
              data={utilitas.customisation}
              // valueFormat={val => yuan(val)}
              height={248}
              lineWidth={4}
            />
          </Row>
          </TabPane>

          <TabPane tab="Venustas" key="3">
          <Row>
            <Col span={11}>
            <Pie
              hasLegend
              subTitle="Minimum Distraction for end-users"
              // total={yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))}
              data={venustas.minimumDistractionForEndUsers}
              // valueFormat={val => yuan(val)}
              height={248}
              lineWidth={4}
            />
            </Col>
            <Divider type="vertical" />
            <Col span={11}>
            <Pie
              hasLegend
              subTitle="Venustas: Shortest Paths to Actions"
              // total={yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))}
              data={venustas.shortestPathsToActions}
              // valueFormat={val => yuan(val)}
              height={248}
              lineWidth={4}
            />
            </Col>
          </Row>
          </TabPane>
        </Tabs>
      </div>
      // <Table>
      //   <ColumnGroup title="Firmitas">
      //     <Column
      //       title="Support"
      //       dataIndex="support"
      //       key="support"
      //     />
      //     <Column
      //       title="Coverage"
      //       dataIndex="coverage"
      //       key="coverage"
      //     />
      //     <Column
      //       title="issues"
      //       dataIndex="issues"
      //       key="issues"
      //     />
      //     <Column
      //       title="maintenance"
      //       dataIndex="maintenance"
      //       key="maintenance"
      //     />
      //     <Column
      //       title="Widespread Usage"
      //       dataIndex="Widespread"
      //       key="Widespread"
      //     />
      //   </ColumnGroup>
      //
      //   <ColumnGroup title="Utilitas">
      //     <Column
      //       title="Richness of the library"
      //       dataIndex="richness"
      //       key="richness"
      //     />
      //     <Column
      //       title="Data Specific Tools"
      //       dataIndex="data-tools"
      //       key="data-tools"
      //     />
      //     <Column
      //       title="Comprehensiveness of Documentation"
      //       dataIndex="comprehensiveness"
      //       key="comprehensiveness"
      //     />
      //     <Column
      //       title="Commit Frequency"
      //       dataIndex="commit-frequency"
      //       key="commit-frequency"
      //     />
      //     <Column
      //       title="Modularity"
      //       dataIndex="modularity"
      //       key="modularity"
      //     />
      //     <Column
      //       title="Customisation"
      //       dataIndex="customisation"
      //       key="customisation"
      //     />
      //   </ColumnGroup>
      //
      //   <ColumnGroup title="Venustas">
      //     <Column
      //       title="Coherence">
      //       dataIndex="coherence"
      //       key="coherence"
      //     />
      //     <Column
      //       title="Ease of Use"
      //       dataIndex="Ease"
      //       key="ease"
      //     />
      //     <Column
      //       title="Minimum Distraction for End-users"
      //       dataIndex="minimum-distraction"
      //       key="minimum-distraction"
      //     />
      //     <Column
      //       title="Shortest Paths to Action"
      //       dataIndex="shortest"
      //       key="shortest"
      //     />
      //   </ColumnGroup>
      //
      // </Table>
    );
  }
}

export default AnalysisResult;
