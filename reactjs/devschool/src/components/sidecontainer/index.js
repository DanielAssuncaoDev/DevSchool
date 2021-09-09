import {Container,
        LogoSideComp,
        MenuSideComp
    } from './styled.js';

import ImgLogo from '../../assets/images/book.svg';
import Vector from '../../assets/images/Vector.svg';

export default function SideComp(){
    return(
        <Container>
            <div className="Cabecalho-SideComp">
                <LogoSideComp>
                    <div className="LogoImg">
                        <img src={ImgLogo} alt="" />
                    </div>

                    <div className="LogoNome">
                        <span className="lgnm-1">Dev</span>
                        <span className="lgnm-2">School</span>
                    </div>
                </LogoSideComp>
            </div>

            <div className="Space">

            </div>

            <div className="Menu-SideComp">
                <MenuSideComp>
                    <li>     
                        <span> Gerenciamento </span>
                        <img src={Vector} alt="" />
                    </li>
                    <li>
                        <span> Alunos </span>
                    </li>
                </MenuSideComp>
            </div>
            
        </Container>
    );
}