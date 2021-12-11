// Libraries

import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Typography, Breadcrumb, Anchor } from 'antd';
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
  StarTwoTone,
} from '@ant-design/icons';

const { Title } = Typography;

// Dependencies

import MainMenu from './mainMenu';
import PageContent from '../content/pageContent';

// Private

const { Header, Content, Footer, Sider } = Layout;

// Public

export default function Wrapper(props) {
  const [collapsed, setCollapsed] = React.useState(false);
  const [page, setPage] = React.useState({ key: 'main', name: 'Overview' });

  const onCollapse = (collapsed) => setCollapsed(collapsed);
  const onSelect = (page) => setPage(page);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <MainMenu onSelect={onSelect} />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: '0 25px' }}
        >
          <Title style={{ padding: '3px' }}>
            <a
              href="https://github.com/scott-morris/advent-of-code-2021"
              style={{ color: 'white' }}
            >
              Advent of Code 2021
            </a>
          </Title>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {[...(page?.parents ?? []), page.name].map((crumb) => (
              <Breadcrumb.Item>{crumb}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <PageContent page={page} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Scott Morris ©2021</Footer>
      </Layout>
    </Layout>
  );
}
