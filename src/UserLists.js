import React from 'react';
import ListComponent from './ListComponent';

export default class UserLists extends React.Component{
    state = { lists:null, loading: true }
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
        console.log(data);
        this.setState({lists: data, loading: false});
    }

    render(){
        return (
            <div>
                <ListComponent listName={'Minha Lista'} />
                <ListComponent listName={'Minha Lista 2'} />
            </div>
        )
    }
}