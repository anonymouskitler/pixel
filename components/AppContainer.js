import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux'
import {testNow} from '../actionCreators/actionCreators.js'
import LeadForm from './LeadForm'
import LeadLists from './LeadLists'

class AppContainer extends React.Component {
	componentDidMount() {
		this.props.onMount('Bonjour')
	}
	render() {
		return(
			<View style={styles.container}>
			  {/*<LeadForm style={styles.form}	/>*/}
			  <LeadLists style={styles.form}	/>
			</View>
		)
	}
}

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