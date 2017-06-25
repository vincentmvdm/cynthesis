import styled from 'styled-components';
import { Link } from 'react-router-dom';
import padding from '../../utils/padding';

const Button = styled(Link)`
    ${padding}
    background-color: #1db954;
    border-radius: 256px;
    color: white;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 32px;
    padding-right: 32px;
    font-family: inherit;
    font-size: inherit;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
        background-color: #1cd85e;
        cursor: pointer;
    }
`;

export default Button;
