import { StyledNav, StyledList, StyledLink } from "./styled";

export const Navbar = () => {
    return (
        <StyledNav>
            <StyledList>
                <StyledLink>Hjem</StyledLink>
                <StyledLink>om Meg</StyledLink>
                <StyledLink>Prosjekter</StyledLink>
                <StyledLink>Kontakt</StyledLink>
            </StyledList>
        </StyledNav>
    );
};
