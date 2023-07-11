import React from 'react';
import { Button, Layout, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { PlusOutlined } from '@ant-design/icons';
import ProjectsTable from './ProjectsTable';

function MyProjectsPage() {
  const [projects, _setProjects] = React.useState();

  const setProjects = (p) => {
    _setProjects(p);
    localStorage.setItem('test', JSON.stringify(p));
  };

  React.useEffect(() => {
    _setProjects((JSON.parse(localStorage.getItem('test')) || []).sort((a, b) => a.order - b.order));
  }, []);

  const addRow = () => {
    setProjects([...projects.map((p) => ({
      ...p,
      editing: false,
      updated: p.editing ? Date.now() : p.updated,
    })), {
      id: Date.now(), // better option would be a uuid
      order: projects.length,
      title: '',
      updated: null,
      editing: true,
    }]);
  };

  return (
    <Layout>
      <Content>
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          onClick={addRow}
          style={{
            position: 'absolute',
            right: '10%',
            top: 47,
            zIndex: 999,
            background: '#3D3A4F',
            '&:hover': '#bada55', // @TODO figure out how and handles hover
          }}
        />
        {!projects ? (
          <>
            <Typography>Loading previous data</Typography>
            <Button onClick={() => { setProjects([]); }}>(Click here to bail)</Button>
          </>
        ) : (
          <ProjectsTable projects={projects} setProjects={setProjects} />
        )}
      </Content>
    </Layout>
  );
}

export default MyProjectsPage;
