import React, { Component } from 'react';
import { Container, Grid, Header, List } from "semantic-ui-react";

import "./Home.css"

const url = 'http://localhost:4000/Movie/';
const urlpic = 'http://localhost:4000/Pic/';



class ReviewShow extends Component
{
    render(){
        return (
            <div className="table-row">
                <List.Content>
                    {this.props.head}
                </List.Content>
                <List>
                    {
                    this.props.items.map(el => {
                        return (
                            <List.Item  key={el._id}>
                                <List.Content>
                                    {el.name} 
                                </List.Content>
                                <List.Content>
                                    {el.text}
                                </List.Content>
                            </List.Item>
                        );
                    })
                    }
                </List>
            </div> 
            );
    }
}

class NamesShow extends Component
{
    render(){
        return (
            <div className="table-row">
                <List.Content>
                    {this.props.head}
                </List.Content>
                <List>
                    {
                    this.props.items.map(el => {
                        return (
                            <List.Item  key={el._id}>
                                <List.Content>
                                    {el.name} 
                                </List.Content>
                            </List.Item>
                        );
                    })
                    }
                </List>
            </div> 
            );
    }
}

class itemShow extends Component{
    render(){
        return(
            <div className="table-row">
                <List.Content>
                    {this.props.head}
                </List.Content>
                <List.Content>
                    {this.props.val}
                </List.Content>
            </div>
        );
    }
}

class Movie extends Component
{
    constructor(props) {
        super(props);
        this.state={
            DB:[],
        };
    }

    componentDidMount() {
        let mURL = url + this.props.match.params.id;
        fetch(mURL)
        .then(response => response.json())
        .then(data => this.setState({DB: data}))
        .catch(err=> alert(err) );
    }

    render() {
        if(this.state.DB.title != undefined)
        {
            

            return (
                <div >
                    <div className="table-row">{"عنوان :" + this.state.DB.title}</div>
                    <div className="table-row">{"سال تولید:" + this.state.DB.year}</div>
                    <div className="table-row">{"نمره:" + this.state.DB.rate}</div>
                    <NamesShow items={this.state.DB.actors} head="بازیگران:" />
                    <NamesShow items={this.state.DB.directors} head="کارگردان:" />
                    <ReviewShow items={this.state.DB.reviews}  head="نقدها"/>
                    <img src={urlpic + this.state.DB.cover} alt="Movie Poster"/>
                </div> 
                )
        }
        else
        {
            return (<div></div>)
        }
    }
}


export default Movie;