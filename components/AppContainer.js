import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux'
import {testNow} from '../wit/actionCreators/actionCreators.js'
import LeadForm from './LeadForm'
import LeadLists from './LeadLists'
import { TabNavigator } from 'react-navigation';

const AppContainer = TabNavigator({
  List: {screen: LeadLists},
  Form: {screen: LeadForm},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    padding:'5%',
    alignContent: 'stretch'
  }
});

const mapStateToProps = (state) => {
	return {
		state: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onMount: (data) => (dispatch(testNow(data)))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
