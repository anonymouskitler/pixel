import React from 'react'
import { FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native';
import { Field, reduxForm } from 'redux-form'
// import { Hoshi } from 'react-native-textinput-effects';

class LeadForm extends React.Component {
	render() {
		return(
			<View>
				<FormLabel>Name</FormLabel>
				<Field
					name='name'
					component={FormInput}
					type='text'
            		placeholder='Name'
				/>
				<FormValidationMessage></FormValidationMessage>
				<FormLabel>Phone number</FormLabel>
				<Field
					name='phone'
					component={FormInput}
					type='text'
            		placeholder='Phone number'
				/>
				<FormValidationMessage></FormValidationMessage>
				<FormLabel>Email</FormLabel>
				<Field
					name='email'
					component={FormInput}
					type='email'
            		placeholder='Email'
				/>
				<FormValidationMessage></FormValidationMessage>
				<View style={{height:'15%'}} />
				<Button title='Submit' />
			</View>
		)
	}
}

export default reduxForm({
	form: 'lead'
})(LeadForm)