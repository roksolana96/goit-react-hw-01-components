import styled from '@emotion/styled'

export const ProfileBlock = styled.div`
  width: 300px;
  border-radius: 0px;
  background: #f0efef;
  box-shadow: 32px 32px 64px #afaeae, -32px -32px 64px #ffffff;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  margin-top: 15px;
  background-color: white;
  
`;

export const Description = styled.div`
    background-color: $color-accent;
    border-radius: 0px 0px 4px 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
export const Avatar = styled.img`
  width: 150px;
  height: 150px;
`;

export const ProfileTitle = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 30px;
`;

export const ProfileDescr = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 0px;
  color: grey;
  text-align: center;
`;

export const StatsList = styled.ul`
  margin-top: 15px;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 4px 4px;
  width: 100%;
  padding-left: 0px;
  background-color: #f0efef;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(217, 217, 217);
  width: 33%;
  height: 70px;
`;
export const StatsInfoTitile = styled.span`
  font-weight: bold;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
  color: grey;
`;
export const StatsInfo = styled.span`
  font-weight: bold;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
`;