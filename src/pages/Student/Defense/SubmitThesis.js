import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Form, Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

@connect(({ loading }) => ({
  submitting: loading.effects['form/submitRegularForm'],
}))
@Form.create()
class SubmitThesis extends PureComponent {
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
      <PageHeaderWrapper title="提交论文" content="提交论文">
        <Card bordered={false} />
      </PageHeaderWrapper>
    );
  }
}

export default SubmitThesis;
