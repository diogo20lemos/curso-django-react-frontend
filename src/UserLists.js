import React from 'react';
import ListComponent from './ListComponent';


export default class UserLists extends React.Component{
    state = { lists:[], loading: true }
    async componentDidMount(){
        var url = 'http://localhost:8000/list/';
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token ' + localStorage.getItem('token');


        const response = await fetch(url, config);
        const data = await response.json();
        this.setState({lists: data, loading: false});
    }

    render(){
        const listsApi = this.state.lists;
        return (
                <div>
                    {listsApi.map(list => <ListComponent key={list.id} listName={list.name} items={list.item_set} /> )}
                </div>
         )

    }
}