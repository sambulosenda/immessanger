
import React, { Component } from 'react'
import ChatListComponent from '../chatlist/chatlist'
import { async } from 'q';
const firebase = require("firebase");
class DashboardComponent  extends Component {
    constructor() {
        super();
        this.state = {
            selectedChat: null,
            newChatFormVisible: false,
            email: null,
            chats: []
        };
    }
    render() {
        return (
            <div>
                <div>fgsdfsdfsdfsdf</div>
                <ChatListComponent history={this.props.history}
                    newChatBtnFn={this.newChatBtnClicked}
                    selectChatFn ={this.selectChat}
                    chats={this.state.chats}
                    userEmail={this.state.email}
                    selectedChatIndex= {this.state.selectedChat}
                    > </ChatListComponent>
            </div>
        );
    }

    selectChat = () => {
        console.log('selected a chat')
    }

    newChatBtnClicked = () => this.setState({ newChatBtnClicked: true, selectedChat: null})

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(async _usr => {
            if(!_usr)
            this.props.history.push('/login');
            else{
                await firebase
                .firestore()
                .collection('chats')
                .where('users', 'array-contains', _usr.email)
                .onSnapshot(async res => {
                    const chats = res.docs.map(_doc => _doc.data())
                    await this.setState({
                        email: _usr.email,
                        chats: chats

                    });
                    console.log(this.state);
                })
            }
        
        })
    }
    
}

export default DashboardComponent;