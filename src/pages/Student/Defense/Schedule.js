import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Form, Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

@connect(({ loading }) => ({
  submitting: loading.effects['form/submitRegularForm'],
}))
@Form.create()
class Schedule extends PureComponent {
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
      <PageHeaderWrapper title="答辩安排" content="答辩安排">
        <Card bordered={false} />
      </PageHeaderWrapper>
    );
  }
}

export default Schedule;
