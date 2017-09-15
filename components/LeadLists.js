import React from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {fetchLeads} from '../actionCreators/actionCreators'
import { List, ListItem } from 'react-native-elements'


class LeadLists extends React.Component {
	componentDidMount() {
		console.log(this.props.leads)
		this.props._fetchLeads();
	}
	componentWillReceiveProps(nextProps) {
		console.log(this.props.leads)
	}
	render() {
		return(
      <View>
        <Text> List of leads here</Text>
        <List containerStyle={{marginBottom: 20}}>
          {
            this.props.leads.map((lead, i) => (
              <ListItem
                key={i}
                title={lead.name}
                subtitle={lead.phone_number}
              />
            ))
          }
        </List>
      </View>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		_fetchLeads: ()=>(dispatch(fetchLeads()))
	}
}

const mapStateToProps = (state) => {
    return {
        leads: state.leads
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeadLists)
