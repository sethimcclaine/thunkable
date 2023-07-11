import React from 'react';
import {
  Button, Input, Table, Typography,
} from 'antd';
import DeleteIcon from '../../icons/DeleteIcon';
import EditIcon from '../../icons/EditIcon';

function ProjectsTable({
  projects,
  setProjects,
}) {
  const columns = [{
    title: 'order',
    dataIndex: 'order',
    key: 'order',
    render: (order) => <Typography>{order}</Typography>, // @TODO
  }, {
    title: 'icon',
    dataIndex: 'icon',
    key: 'icon',
    render: (val, { id, editing }) => (editing ? (
      <Typography />
    ) : (
      <Button
        icon={<EditIcon />}
        style={{
          border: 'none',
        }}
        onClick={() => {
          setProjects(projects.map((p) => (p.id !== id ? p : {
            ...p,
            editing: true,
          })));
        }}
      />
    )),
  }, {
    title: 'title',
    dataIndex: 'title',
    key: 'title',
    render: (title, p) => {
      // eslint-disable-next-line no-unused-vars
      const tmp = 'asdf';
      return (p.editing ? (
        <Input
          placeholder="Name your project"
          defaultValue={title}
          onBlur={(e) => {
            setProjects(projects.map((proj) => (p.id !== proj.id ? proj : {
              ...p,
              editing: false,
              title: e.currentTarget.value,
              updated: Date.now(),
            })));
          }}
        />
      ) : (<Typography>{title}</Typography>));
    },
  }, {
    title: 'updated',
    dataIndex: 'updated',
    key: 'updated',
    render: (updated, { editing }) => {
      if (editing) {
        return (<Typography />);
      }
      const date = new Date(updated).toDateString();
      const time = new Date(updated).toLocaleTimeString();
      return (
        <Typography>
          {date}
          {' '}
          {time}
        </Typography>
      );
    },
  }, {
    title: 'delete',
    dataIndex: 'delete',
    key: 'delete',
    render: (val, { id, editing }) => (editing ? (
      <Typography />
    ) : (
      <Button
        icon={<DeleteIcon />}
        style={{
          border: 'none',
        }}
        onClick={() => {
          setProjects(projects.filter((p) => p.id !== id).map((p, i) => ({
            ...p,
            order: i,
          })));
          console.log(val);
        }}
      />
    )),
  }];
  return (
    <Table
      columns={columns}
      dataSource={projects}
      showHeader={false}
      // pagination={{ style: { display: 'none' } }}
      pagination={false}
    />
  );
}

export default ProjectsTable;
