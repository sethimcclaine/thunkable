import React from 'react';
import {
  // Divider,
  Typography,
} from 'antd';
import { Header } from 'antd/es/layout/layout';

function PageHeader({ pageTitle }) {
  return (
    <Header style={{ background: '#fff' }}>
      <Typography.Title
        style={{
          textAlign: 'left',
          fontSize: 24,
          zIndex: 999,
          'text-transform': 'uppercase', // @TODO  not effecting text
        }}
      >
        {pageTitle}
      </Typography.Title>
      <hr />
    </Header>
  );
}

export default PageHeader;
