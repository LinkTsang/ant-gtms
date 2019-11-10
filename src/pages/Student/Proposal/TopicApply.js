import React from 'react';
import { connect } from 'dva';
import { FormattedMessage } from 'umi-plugin-react/locale';
import { Button, Card, Form, Icon, Input, Transfer, Upload } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const FormItem = Form.Item;
const { TextArea } = Input;

@connect(({ loading }) => ({
  submitting: loading.effects['form/submitRegularForm'],
}))
@Form.create()
class TopicApply extends React.Component {
  state = {
    mockData: [],
    targetKeys: [],
  };

  componentDidMount() {
    this.getMock();
  }

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i += 1) {
      const data = {
        key: i.toString(),
        title: `老师${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };

  filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;

  handleChange = targetKeys => {
    this.setState({ targetKeys });
  };

  handleSearch = (dir, value) => {
    console.log('search:', dir, value);
  };

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
    const { submitting } = this.props;
    const {
      form: { getFieldDecorator },
    } = this.props;

    const { mockData, targetKeys } = this.state;

    const formItemLayout = {
      labelAlign: 'left',
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
        md: { span: 20 },
      },
    };

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };

    return (
      <PageHeaderWrapper
        title={<FormattedMessage id="app.student.topic_apply.title" />}
        content={<FormattedMessage id="app.student.topic_apply.description" />}
      >
        <Card bordered={false}>
          <Form onSubmit={this.handleSubmit} style={{ marginTop: 8 }}>
            <FormItem {...formItemLayout} label="课题名称">
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: '请输入课题名称',
                  },
                ],
              })(<Input placeholder="请输入课题名称" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="课题简介">
              {getFieldDecorator('introduction', {
                rules: [
                  {
                    required: true,
                    message: '请输入课题简介',
                  },
                ],
              })(<TextArea style={{ minHeight: 32 }} placeholder="请输入课题简介" rows={4} />)}
            </FormItem>
            <FormItem {...formItemLayout} label="指导教师">
              {getFieldDecorator('guider', {
                rules: [
                  {
                    required: true,
                    message: '请选择指导老师',
                  },
                ],
              })(
                <Transfer
                  rows={24}
                  dataSource={mockData}
                  showSearch
                  filterOption={this.filterOption}
                  targetKeys={targetKeys}
                  onChange={this.handleChange}
                  onSearch={this.handleSearch}
                  render={item => item.title}
                  listStyle={{
                    width: '46.5%',
                    height: 300,
                  }}
                />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="附件【可选】">
              <Upload.Dragger>
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">单击或拖动文件到此处进行上传</p>
              </Upload.Dragger>
            </FormItem>
            <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" htmlType="submit" loading={submitting}>
                <FormattedMessage id="form.submit" />
              </Button>
              <Button style={{ marginLeft: 8 }}>
                <FormattedMessage id="form.save" />
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default TopicApply;
