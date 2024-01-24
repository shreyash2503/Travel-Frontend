import styled from "styled-components";
import image from "../assets/login__image.jpg";
import { ChangeEvent, FormEvent, useDebugValue, useState } from "react";
import { loginUser } from "../API/user.requests";
import { useDispatch } from "react-redux";
import { signInStart } from "../store/user/user.action";
import { Navigate, useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  width: 50vw;

  @media (max-width: 768px) {
    flex-direction: column;
    width: fit-content;
    align-items: center;
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  height: 60vh;
`;

const SideImage = styled.img`
  height: 100%;
  width: auto;
  max-height: 100%;
  object-fit: cover;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 40vh;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
    margin-top: 20px;
  }
`;

const FormInput = styled.input`
  height: 2rem;
  border: none;
  width : 100%
  background: none;
  padding: 10px 5px;
  border-bottom: 1px solid #000;
  margin-bottom: 10px;

  &:focus {
    outline: none;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-evenly;
`;

const Heading = styled.h3`
  font-family: "Poppins", sans-serif;
`;

const Button = styled.button`
  outline: none;
  border: none;
  height: 2rem;
  border-radius: 10px;
  background: rgb(126, 48, 225);
  background: linear-gradient(
    90deg,
    rgba(126, 48, 225, 1) 47%,
    rgba(226, 110, 229, 1) 99%
  );
  color: white;
  transition: background 0.3s ease, transform 0.2s ease-out;

  &:hover {
    cursor: pointer;
    background: linear-gradient(
      90deg,
      rgba(226, 110, 229, 1) 47%,
      rgba(126, 48, 225, 1) 99%
    );
    transform: scale(1.05); /* Example: Slightly scales the button on hover */
  }
`;

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  interface FormData {
    email: string;
    password: string;
  }

  const currentUser: FormData = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState<FormData>(currentUser);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signInStart(user.email, user.password));
    setUser(currentUser);
    // setUser(currentUser);
    navigate("/home");
  };

  return (
    <>
      <MainContainer>
        <ImageContainer>
          <SideImage src={image} alt="scenery-image" />
        </ImageContainer>
        <InputContainer>
          <Heading>Login</Heading>
          <Form onSubmit={handleSubmit}>
            <FormInput
              name="email"
              type="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              required
            />
            <FormInput
              name="password"
              type="password"
              value={user.password}
              placeholder="Password"
              onChange={handleChange}
              required
              min={8}
            />
            <Button type="submit">Login</Button>
          </Form>
        </InputContainer>
        <div></div>
      </MainContainer>
    </>
  );
}

export default LoginPage;
