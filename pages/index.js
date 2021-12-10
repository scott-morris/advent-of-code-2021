import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  ApiOutlined,
  CalculatorOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  DesktopOutlined,
  FileOutlined,
  FileTextOutlined,
  FolderOpenOutlined,
  PieChartOutlined,
  StarOutlined,
  StarFilled,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const days = [1,2,3,4,5];
const DayMenuItem = ({day, ...rest}) => (
  <Menu.Item key={`day${day}`}>Day ${day}</Menu.Item>
)

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="0" icon={<PieChartOutlined />}>
              Overview
            </Menu.Item>
            <SubMenu key="sub1" icon={<CalendarOutlined />} title="Days">
              {/* TODO: make this data-driven */}
              <Menu.Item key="day01">Day 01</Menu.Item>
              <Menu.Item key="day02">Day 02</Menu.Item>
              <Menu.Item key="day03">Day 03</Menu.Item>
              <Menu.Item key="day04">Day 04</Menu.Item>
              <Menu.Item key="day05">Day 05</Menu.Item>
              <Menu.Item key="day06">Day 06</Menu.Item>
              <Menu.Item key="day07">Day 07</Menu.Item>
              <Menu.Item key="day08">Day 08</Menu.Item>
              <Menu.Item key="day09">Day 09</Menu.Item>
              <Menu.Item key="day10">Day 10</Menu.Item>
              {/* <Menu.Item key="day11">Day 11</Menu.Item>
              <Menu.Item key="day12">Day 12</Menu.Item>
              <Menu.Item key="day13">Day 13</Menu.Item>
              <Menu.Item key="day14">Day 14</Menu.Item>
              <Menu.Item key="day15">Day 15</Menu.Item>
              <Menu.Item key="day16">Day 16</Menu.Item>
              <Menu.Item key="day17">Day 17</Menu.Item>
              <Menu.Item key="day18">Day 18</Menu.Item>
              <Menu.Item key="day19">Day 19</Menu.Item>
              <Menu.Item key="day20">Day 20</Menu.Item>
              <Menu.Item key="day21">Day 21</Menu.Item>
              <Menu.Item key="day22">Day 22</Menu.Item>
              <Menu.Item key="day23">Day 23</Menu.Item>
              <Menu.Item key="day24">Day 24</Menu.Item>
              <Menu.Item key="day25">Day 25</Menu.Item> */}
            </SubMenu>
            <SubMenu key="sub2" icon={<ApiOutlined />} title="Helpers">
              <Menu.Item key="output" icon={<DesktopOutlined />}>display-output</Menu.Item>
              <Menu.Item key="fs" icon={<FolderOpenOutlined />}>fs-extravaganza</Menu.Item>
              <Menu.Item key="input" icon={<FileOutlined />}>get-input-file</Menu.Item>
              <Menu.Item key="math" icon={<CalculatorOutlined />}>math</Menu.Item>
              <Menu.Item key="memoize" icon={<FileTextOutlined />}>memoize</Menu.Item>
              <Menu.Item key="time" icon={<ClockCircleOutlined />}>time-execution</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

// ReactDOM.render(<SiderDemo />, document.getElementById('container'));

export default function Page() {
  return (
    <div>
      <SiderDemo />
    </div>
  );
}
