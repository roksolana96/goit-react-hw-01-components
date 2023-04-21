import styled from '@emotion/styled'
import getRandomHexColor from './RandomHexColor';

export const StatisticsBlock = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 30px;
    width: 300px;
    border-radius: 0px;
    background:#ffffff;

    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
`;

export const StatsTitle = styled.h2`
    font-weight: 700;
    font-size: 30px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StatsList = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;
`;

export const StatsItem = styled.li`
    display: block;
    width: 70px;
    flex-direction: column;
    height: 70px;
    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.3);
    background-color: ${getRandomHexColor}; 
`;

export const StatsLabel = styled.span`
    display: block;
    text-align: center;
    padding: 10px;
    font-weight: 600;
    font-size: 15px;
`;
export const StatsPercentage = styled.span`
    display: block;
    text-align: center;
    padding: 2px;
    font-weight: 800;
    font-size: 15px;
`;
