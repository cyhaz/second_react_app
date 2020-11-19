import styled from "styled-components";
import React from "react";
import Badge from "./Badge";

const Container = styled.div`
    margin: 0 auto 10px;
    padding: 50px;
    width: 200px;
    color: #333;
    font-size: 25px;
    font-weight: 600;
    border-radius: 20px;
    background:#fff;
    img {
        margin-right: 15px;
        width: 20px;
    }
    span {
        margin-top: 10px;
        display: block;
        font-size: 14px;
    }
`;

// class NameTag extends React.Component {
//     render() {
//         let name = this.props.name;
//         return (
//             <Container>
//                 <img src="dora.jpg" alt="" />
//                 {name}
//                 <span>{this.props.tag}</span>
//             </Container>
//         );
//     }
// }

function NameTag(props) {
    let name = props.name;
    let color = props.color;
    let color_stat = (<Badge color={color} />);
    // let type = props.type;
    // let tag = props.tag;

    // let output = '';
    // switch (type) {
    //     case "inline":
    //         default:
    //             output = "{color_stat} / {name} / {tag}";
    //         break;
    //     case "break-all":
    //         output = (
    //             <div>
    //                 <p>{color_stat}</p>
    //                 <p>{name}</p>
    //                 <p>{tag}</p>
    //             </div>
    //         );
    // }
    
    let tag_app = (
        <Container>
            <img src="dora.jpg" alt="" />
            {name}
            <span>{props.tag}</span>
            {color_stat}
        </Container>
    );

    return tag_app;
}

export default NameTag;