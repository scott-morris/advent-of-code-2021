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
  { key: 'day01', name: 'Day 01', stars: 2, parents: ['Days'] },
  { key: 'day02', name: 'Day 02', stars: 2, parents: ['Days'] },
  { key: 'day03', name: 'Day 03', stars: 2, parents: ['Days'] },
  { key: 'day04', name: 'Day 04', stars: 2, parents: ['Days'] },
  { key: 'day05', name: 'Day 05', stars: 2, parents: ['Days'] },
  { key: 'day06', name: 'Day 06', stars: 2, parents: ['Days'] },
  { key: 'day07', name: 'Day 07', stars: 2, parents: ['Days'] },
  { key: 'day08', name: 'Day 08', stars: 2, parents: ['Days'] },
  { key: 'day09', name: 'Day 09', stars: 2, parents: ['Days'] },
  { key: 'day10', name: 'Day 10', stars: 2, parents: ['Days'] },
];

const helpers = [
  {
    key: 'output',
    name: 'display-output',
    icon: () => <DesktopOutlined />,
    parents: ['Helpers'],
  },
  {
    key: 'fs',
    name: 'fs-extravaganza',
    icon: () => <FolderOpenOutlined />,
    parents: ['Helpers'],
  },
  {
    key: 'input',
    name: 'get-input-file',
    icon: () => <FileOutlined />,
    parents: ['Helpers'],
  },
  {
    key: 'math',
    name: 'math',
    icon: () => <CalculatorOutlined />,
    parents: ['Helpers'],
  },
  {
    key: 'memoize',
    name: 'memoize',
    icon: () => <FileTextOutlined />,
    parents: ['Helpers'],
  },
  {
    key: 'time',
    name: 'time-execution',
    icon: () => <ClockCircleOutlined />,
    parents: ['Helpers'],
  },
];

const lookup = new Map(
  [{ key: 'main', name: 'Overview' }, ...days, ...helpers].map(
    ({ key, ...props }) => [key, props]
  )
);

// Public

export default function MainMenu(props) {
  const onSelect = ({ key }) => {
    props?.onSelect?.(lookup.get(key));
  };

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
        {helpers.map(({ key, icon, name }) => (
          <Menu.Item key={key} icon={icon()}>
            {name}
          </Menu.Item>
        ))}
      </SubMenu>
    </Menu>
  );
}
