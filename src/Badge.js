import styled from "styled-components";

const Container = styled.span`
    &.Badge {
        &.no-color {
            text-decoration: underline;
        }
    }
`;

function Badge(props) {
    let color = props.color;

    if(typeof(color) == "undefined") {
        return (
            <Container className={`Badge no-color`}>No Color</Container>
        );
    } else {
        return (
            <Container className={`Badge ${color}`} color={color}>{color}</Container>
        );
    }
}

export default Badge;