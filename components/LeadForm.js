import React from 'react';
import { FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { submitLeadForm } from '../wit/actionCreators/actionCreators';
import { connect } from 'react-redux';
// import { Hoshi } from 'react-native-textinput-effects';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <FormInput placeholder={label} name={label} {...input} />
);

class LeadForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit() {
    this.props.submitLeadForm();
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <View>
        <FormLabel>Name</FormLabel>
        <Field name="name" component={renderTextField} type="text" placeholder="Name" />
        <FormValidationMessage />
        <FormLabel>Phone number</FormLabel>
        <Field name="phone" component={renderTextField} type="text" placeholder="Phone number" />
        <FormValidationMessage />
        <FormLabel>Email</FormLabel>
        <Field name="email" component={renderTextField} type="email" placeholder="Email" />
        <FormValidationMessage />
        <View style={{ height: '15%' }} />
        <Button title="Submit" disabled={pristine || submitting} onPress={this.handleFormSubmit} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submitLeadForm: () => dispatch(submitLeadForm())
  };
};

const mapStateToProps = state => {
  return {
    leads: state.data.leads
  };
};

LeadForm = connect(mapStateToProps, mapDispatchToProps)(LeadForm);

export default reduxForm({
  form: 'lead'
})(LeadForm);
