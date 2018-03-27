import React, { Component } from 'react';
import { Redirect } from 'react-router';

const secureComponent = (ChildCompoenent) => {
    if (localStorage.getItem('currentUser') === null) {
        return class extends Component {
            render() {
                if (localStorage.getItem('currentUser')) {
                    return (
                        <ChildCompoenent />
                    )
                }

                return (
                    <Redirect to="/login" />
                )
            }
        }
    }

    return class extends Component{
        render() {
            return (
                <ChildCompoenent />
            )
        }
    }
}

export default secureComponent;
