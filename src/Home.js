import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';


const url = 'http://localhost:4000/movie';

class Table extends Component
{
    render()
    {
        let temp = this.props.items;
        
        if (temp.length >0) {
            let Dlist = temp;
            return (
                <ul>
                    {
                        Dlist.map(item =>
                            <li className="table-row">
                              {
                                <NavLink to={"/Movie/" + item._id}>{item["title"]}  </NavLink>
                              }
                            </li>
                        )
                    }
                </ul>)
        }
        else
        {
            return(<div></div>)
        }

    }
}

class Search extends Component
{

    onSearchClick(event){
        event.target.value = '';
    }

    render()
    {
        const {  onChange } = this.props;
        return (
            <form className="interactions">
                <input
                    placeholder='جستجو'
                    type="text"
                    onChange={onChange}
                    onClick={this.onSearchClick}
                />
            </form>
        );
    }
}

class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            searchTerm :'',
            DB:[],
        };
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    componentDidMount() {
        fetch(url)
            .then(res=> res.json())
            .then(res=> this.setState({DB:res}))
            .catch(err=> alert(err));
    }


    onSearchChange(event) {
        this.setState({ searchTerm: event.target.value });
    }


    render() {
        return (
            <div className="App">
                <form>

                    <Search onChange={this.onSearchChange}>
                    </Search>

                    <Table pattern={this.state.searchTerm} items={this.state.DB}>
                    </Table>

                </form>
            </div>
        );
    }
}


export default Home;