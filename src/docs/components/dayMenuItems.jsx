// Libraries

import { Menu } from 'antd';

// Private

const days = [
    { key: 'day01', name: 'Day 01' },
    { key: 'day02', name: 'Day 02' },
    { key: 'day03', name: 'Day 03' },
    { key: 'day04', name: 'Day 04' },
];

// Public

export default function DayMenuItems (props) {
    return (
        <>{days.map(({key, name}) => (<Menu.Item key={key}>{name}</Menu.Item>))}</>
    )
}