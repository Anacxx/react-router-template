import {StyledHeader, StyledButton} from "../style"
import { useNavigate } from "react-router-dom";
import { goToHomePage,goToProfilePage } from "../Route/Coordinator";
function Header() {
  const navigate = useNavigate()
  return (
    <StyledHeader>
      <StyledButton onClick={() => {goToHomePage(navigate)}} >
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick= {()=> {goToProfilePage(navigate)}}>
        Ir para página de perfil
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
