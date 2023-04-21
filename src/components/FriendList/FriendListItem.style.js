import styled from '@emotion/styled'

export const FriendItem = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 15px;
    width: 270px;
    height: 80px;
    background-color: #fafafa;
    border-radius: 5px;
    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    :not(:last-child) {
        margin-bottom: 10px;
      }
`;
export const FriendAvatar = styled.img`
    margin-left: 15px;
    border-radius: 5px;
`;

export const FriendStatus = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ status }) => (status ? 'green' : 'red')};`;

export const FriendName = styled.p`
    margin-left: 15px;    
    text-align: center;
    padding: 10px;
    /* margin-bottom: 5px; */
    font-weight: 600;
    font-size: 15px;
`;

