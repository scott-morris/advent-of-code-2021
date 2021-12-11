// Libraries

import React from 'react';
import { Menu } from 'antd';
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

// Private

const { SubMenu } = Menu;

const days = [
  { key: 'day01', name: 'Day 01', stars: 2 },
  { key: 'day02', name: 'Day 02', stars: 2 },
  { key: 'day03', name: 'Day 03', stars: 2 },
  { key: 'day04', name: 'Day 04', stars: 2 },
  { key: 'day05', name: 'Day 05', stars: 2 },
  { key: 'day06', name: 'Day 06', stars: 2 },
  { key: 'day07', name: 'Day 07', stars: 2 },
  { key: 'day08', name: 'Day 08', stars: 2 },
  { key: 'day09', name: 'Day 09', stars: 2 },
  { key: 'day10', name: 'Day 10', stars: 2 },
];

// Public

export default function MainMenu(props) {
  const [page, setPage] = React.useState('main');
  const onSelect = ({ key }) => setPage(key);

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={['main']}
      mode="inline"
      onSelect={onSelect}
    >
      <Menu.Item key="main" icon={<PieChartOutlined />}>
        Overview
      </Menu.Item>
      <SubMenu key="sub1" icon={<CalendarOutlined />} title="Days">
        {days.map(({ key, name, stars = 0 }) => (
          <Menu.Item
            key={key}
            icon={[<StarOutlined />, <StarFilled />, <StarTwoTone />][stars]}
          >
            {name}
          </Menu.Item>
        ))}
      </SubMenu>
      <SubMenu key="sub2" icon={<ApiOutlined />} title="Helpers">
        <Menu.Item key="output" icon={<DesktopOutlined />}>
          display-output
        </Menu.Item>
        <Menu.Item key="fs" icon={<FolderOpenOutlined />}>
          fs-extravaganza
        </Menu.Item>
        <Menu.Item key="input" icon={<FileOutlined />}>
          get-input-file
        </Menu.Item>
        <Menu.Item key="math" icon={<CalculatorOutlined />}>
          math
        </Menu.Item>
        <Menu.Item key="memoize" icon={<FileTextOutlined />}>
          memoize
        </Menu.Item>
        <Menu.Item key="time" icon={<ClockCircleOutlined />}>
          time-execution
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}
