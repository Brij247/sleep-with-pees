import React from "react";
import styled from "styled-components";

function Profile() {
  const profile = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
        fill="#015871"
      ></path>
    </svg>,
  ];
  return (
    <Hero>
      <Logo>Sleep Tech</Logo>
      <UserSection>
        <div>{profile}</div>
        <span>username.com</span>
      </UserSection>
    </Hero>
  );
}

export default Profile;

const Hero = styled.div`
  background-color: #caf4ff;
  padding: 1rem;
  margin: 10px;
  border-radius: 8px;
  row-gap: 8px;
`;
const Logo = styled.div`
  color: #015871;
  font-weight: 500;
  font-size: 2rem;
  text-align: center;
`;
const UserSection = styled.div`
  color: #015871;
  display: flex;
  justify-content: center;
  column-gap: 8px;
`;
