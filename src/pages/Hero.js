import {
    StyledFlexColumn,
    StyledFlex,
    StyledMain,
    StyledH3,
} from "../components/styled";
import PlaceHolderImage from "../img/placeholder.jpg";
import { StyledBox } from "../components/styled";
import { useState } from "react";
import LanguageIcon from "../components/LanguageIcon";
import svgImg from "../img/svg";

const Hero = () => {
    const [svgImages, setSvgImages] = useState(svgImg);

    return (
        <StyledMain>
            <StyledFlexColumn>
                <img
                    width={"300px"}
                    height={"300px"}
                    src={PlaceHolderImage}
                    alt="picture of me"
                />

                <StyledFlexColumn>
                    <StyledH3>Egenskaper</StyledH3>
                    <StyledFlex>
                        {svgImages.map((svg) => {
                            return <LanguageIcon svg={svg} />;
                        })}
                    </StyledFlex>
                </StyledFlexColumn>
            </StyledFlexColumn>
            <StyledBox></StyledBox>
        </StyledMain>
    );
};

export default Hero;
