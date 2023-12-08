import React from "react";

const User = ({userDate}) => {
    return (
        <tr>
            <td>{userDate.name}</td>
            <td>{userDate.email}</td>
        </tr>
    );
};

const UserList = () => {
    const users = [
        {email: "ryu@gmail.com", name: "유재석"},
        {email: "kim@gmail.com", name: "김종국"},
        {email: "ha@gmail.com", name: "하하"},
        {email: "song@gmail.com", name: "송지효"}
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userDate={user}/>)}
            </tbody>
        </table>
    );
};

export default UserList;