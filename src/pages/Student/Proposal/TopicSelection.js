import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { Card, Divider, Table } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const columns = [
  {
    title: '愿次',
    dataIndex: 'order',
    key: 'order',
    render: text => <a>{text}</a>,
  },
  {
    title: '课题名称',
    dataIndex: 'topic',
    key: 'topic',
  },
  {
    title: '课题类型',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '课题来源',
    dataIndex: 'source',
    key: 'source',
  },
  {
    title: '指导教师',
    key: 'instructor',
    dataIndex: 'instructor',
  },
  {
    title: '选题状态',
    key: 'status',
    render: (text, record) => (
      <span>
        <a>{record.status}</a>
        <Divider type="vertical" />
        {record.status === '未选择' ? <a>进入选择</a> : <a>修改</a>}
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    order: '第一志愿',
    topic: '基于SpringBoot的论文管理系统',
    type: '',
    source: '',
    instructor: [''],
    status: '等待确认',
  },
  {
    key: '2',
    order: '第二志愿',
    topic: '',
    type: '',
    source: '',
    instructor: [''],
    status: '未选择',
  },
  {
    key: '3',
    order: '第三志愿',
    topic: '',
    type: '',
    source: '',
    instructor: [''],
    status: '未选择',
  },
];

@connect(({ loading }) => ({
  submitting: loading.effects['form/submitRegularForm'],
}))
class TopicReport extends PureComponent {
  handleSubmit = e => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'form/submitRegularForm',
          payload: values,
        });
      }
    });
  };

  render() {
    return (
      <PageHeaderWrapper
        title={<FormattedMessage id="app.student.topic_selection.title" />}
        content={<FormattedMessage id="app.student.topic_selection.description" />}
      >
        <Card bordered={false}>
          <Table columns={columns} dataSource={data} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default TopicReport;
