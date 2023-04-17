"use strict";
let userIdCounter = 0;
let chartoomIdCounter = 0;
let users = [];
class User {
    constructor(name) {
        this.id = userIdCounter++;
        this.name = name;
        users.push(this);
    }
    notify(message, senderUser, callback) {
        if (senderUser.id === this.id) {
            return;
        }
        console.log(`This is ${this.name}'s device: ${message}`);
        if (callback) {
            callback();
        }
    }
}
class ChatRoom {
    constructor(name) {
        this.connectedUsers = [];
        this.usersToNotify = [];
        this.messages = [];
        this.messageId = 0;
        this.id = chartoomIdCounter++;
        this.name = name;
    }
    notifyUsers(message, user) {
        this.usersToNotify.forEach((currentUser) => currentUser.notify(`${user.name}: ${message}`, user));
    }
    addUser(user) {
        this.connectedUsers.push(user);
        this.usersToNotify.push(user);
    }
    removeUser(user) {
        this.connectedUsers = this.connectedUsers.filter((currentUser) => currentUser.id !== user.id);
        this.usersToNotify = this.usersToNotify.filter((currentUser) => currentUser.id !== user.id);
    }
    getUsers() {
        return this.connectedUsers.map((user) => user);
    }
    sendMessage(message, user) {
        this.messages.push([user.id, message, this.messageId++]);
        this.notifyUsers(message, user);
    }
    removeMessage(messageId) {
        this.messages = this.messages.filter((actualMessage) => actualMessage[2] !== messageId);
    }
    turnOnNotification(user) {
        this.usersToNotify.push(user);
    }
    turnOffNotification(user) {
        this.usersToNotify = this.usersToNotify.filter((currentUser) => currentUser.id !== user.id);
    }
}
var ChatApp;
(function (ChatApp) {
    const user1 = new User("Bob");
    const user2 = new User("Frank");
    const user3 = new User("Tom");
    const user4 = new User("Alice");
    console.log(users);
    const chatroom1 = new ChatRoom("ChatRoom");
    chatroom1.addUser(user1);
    chatroom1.addUser(user2);
    chatroom1.addUser(user3);
    chatroom1.addUser(user4);
    chatroom1.turnOffNotification(user4);
    chatroom1.sendMessage("Hi", user1);
    //console.log(chatroom1.messages);
    chatroom1.sendMessage("Hello", user2);
    //console.log(chatroom1.messages);
    chatroom1.sendMessage("Whats up?", user1);
    //console.log(chatroom1.messages);
    chatroom1.sendMessage("Everything is ok", user2);
    chatroom1.removeMessage(0);
    chatroom1.removeMessage(1);
    //console.log(chatroom1.messages);
})(ChatApp || (ChatApp = {}));
