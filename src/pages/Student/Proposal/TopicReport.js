import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { Card, Form, Table, Divider } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const columns = [
  {
    title: '课题名称',
    dataIndex: 'title',
    key: 'title',
    render: text => <a>{text}</a>,
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
    title: '开题报告状态',
    key: 'status',
    render: () => (
      <span>
        <a>已提交</a>
        <Divider type="vertical" />
        <a>修改</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    title: '毕业论文管理系统实现',
    type: '工程设计（实践）',
    source: '自主申报',
    instructor: ['张三三'],
    status: '请填写开题报告',
  },
];

@connect(({ loading }) => ({
  submitting: loading.effects['form/submitRegularForm'],
}))
@Form.create()
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
        title={<FormattedMessage id="app.forms.basic.title" />}
        content={<FormattedMessage id="app.forms.basic.description" />}
      >
        <Card bordered={false}>
          <Table columns={columns} dataSource={data} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default TopicReport;
