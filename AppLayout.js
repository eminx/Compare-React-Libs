import React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
import TopMenu from './TopMenu';
import FormView from './FormView';
import SemanticForm from './SemanticForm';
import Tables from './Tables';
import Forms from './Forms';
import AnalysisResult from './AnalysisResult';

class AppLayout extends React.Component {
  state = {
    collapsed: false,
    scene: 'analysis'
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  renderContent() {
    switch (this.state.scene) {
      case 'table':
        return (<Tables />);
      case 'form':
        return (<Forms />);
      default:
        return (<AnalysisResult />);
    }
  }

  changeScene = (e) => this.setState({scene: e.key});

  render() {
    return (
      <Layout style={{height: '100%'}}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['analysis']} onClick={this.changeScene}>
            <Menu.Item key="analysis" >
              <Icon type="user" />
              <span>Analysis Results</span>
            </Menu.Item>
            <Menu.Item key="table" >
              <Icon type="user" />
              <span>Table Showcase</span>
            </Menu.Item>
            <Menu.Item key="form" >
              <Icon type="video-camera" />
              <span>Form Showcase</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{}}>
          <Header style={{ background: '#fff', padding: 15, display: 'flex', justifyContent: 'space-between' }}>
            <Icon
              style={{ fontSize: 24 }}
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle.bind(this)}
            />
            <TopMenu />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
            {this.renderContent()}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AppLayout;
