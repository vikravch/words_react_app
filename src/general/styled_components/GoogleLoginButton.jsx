import styled from "styled-components";
import google_icon from "../../assets/google_logo.png";
export const GoogleLoginButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FAFAFA;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid #EEEEEE;
`;

export const GoogleLoginButton = () => {
    return (
        <GoogleLoginButtonContainer>
            <img src={google_icon} alt="Google Logo"/>
        </GoogleLoginButtonContainer>
    );
}