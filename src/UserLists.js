import React from 'react';
import ListComponent from './ListComponent';
import LoginComponent from './LoginComponent';


export default class UserLists extends React.Component{
    state = { lists:[], loading: true }
    async componentDidMount(){
        var url = 'http://localhost:8000/list/';
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token 6a4ef1cda17daa0e0de748c0a2ebc0c16b2c594b';


        const response = await fetch(url, config);
        const data = await response.json();
        this.setState({lists: data, loading: false});
    }

    render(){
        const listsApi = this.state.lists;
        var token = '';

        if(token==='')
            return <LoginComponent />
        else
            return (
                <div>
                    {listsApi.map(list => <ListComponent key={list.id} listName={list.name} items={list.item_set} /> )}
                </div>
            )
    }
}