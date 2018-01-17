import React from 'react';
import { Select, Tabs } from 'antd';
const TabPane = Tabs.TabPane;
const Option = Select.Option;
import AntTable1 from './AntTable1';
import AntTable2 from './AntTable2';
import AntTable3 from './AntTable3';
import SemanticTable1 from './SemanticTable1';
import SemanticTable2 from './SemanticTable2';
import SemanticTable3 from './SemanticTable3';
import MaterialUITable from './MaterialUITable';

// import BLueTable from './BLueTable';

class Tables extends React.Component {
  render() {
    return (
      <div>
        <h1>Tables</h1>
        <Tabs>
          <TabPane tab="ant" key="1">
            <AntTable1 />
            <AntTable2 />
            <AntTable3 />
          </TabPane>
          <TabPane tab="semantic" key="2">
            <SemanticTable1 />
            <SemanticTable2 />
            <SemanticTable3 />
          </TabPane>
          <TabPane tab="material" key="3">
            <MaterialUITable />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Tables;
