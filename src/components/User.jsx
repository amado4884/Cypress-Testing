import React from "react";

const User = ({ user }) => {
  return (
    <div className="user">
      <div>
        <label htmlFor="">Id:</label>
        <span data-cy="user-id">{user.id}</span>
      </div>
      <div>
        <label htmlFor="">Date Created:</label>
        <span data-cy="user-created">{user.createdAt}</span>
      </div>
      <div>
        <label htmlFor="">Name:</label>
        <span data-cy="user-name">{user.name}</span>
      </div>
      <div>
        <label htmlFor="">Email:</label>
        <span data-cy="user-email">{user.email}</span>
      </div>
      <div>
        <label htmlFor="">Password:</label>
        <span data-cy="user-password">{user.password}</span>
      </div>
      <div>
        <label htmlFor="">Role:</label>
        <span data-cy="user-role">{user.role}</span>
      </div>
      <div>
        <label htmlFor="">Start Date:</label>
        <span data-cy="user-startDate">{user.startDate}</span>
      </div>
      <div>
        <label htmlFor="">End Date:</label>
        <span data-cy="user-endDate">{user.endDate}</span>
      </div>
      <div>
        <label htmlFor="">Reason:</label>
        <span data-cy="user-reason">{user.reason}</span>
      </div>
      <div>
        <label htmlFor="">Read Terms of Service?:</label>
        <span data-cy="user-tos">{user.tos ? "Yes" : "No"}</span>
      </div>
    </div>
  );
};

export default User;
