import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button } from './common';
import { employeeEdit } from '../actions';

class EmployeeEdit extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    //call action creator with default for shift if picker is on default value
    this.props.employeeEdit({ name, phone, shift: shift || 'Monday' });
  }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect()(EmployeeEdit);
