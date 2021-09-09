import { useState } from 'react';
import {ContainerCabecalho} from './styled.js';

import SvgCarregar from '../../assets/images/refresh.svg';
import SvgSair from '../../assets/images/sair.svg';

export default function Cabecalho() {

const [user, setUser] = useState('DandinhoDev');
const [notificacao, setNotificacao] = useState(3);

    return(
            <ContainerCabecalho>
                <div className="Cabecalho">
                    <div className="ContUser">
                        <div className="ImgUser">
                            <img src="/assets/Images/Users/DandinhoDev.jpeg" alt="" />
                            <div className="NotificacaoUser">
                                {notificacao}
                            </div>
                        </div>

                        <span className="HelloUser">
                            Olá, <span> {user} </span>
                        </span>
                    </div>

                    <div className="Options">
                        <div className="BtCarrgar">
                            <img src={SvgCarregar} alt="" />
                        </div>

                        <div className="BtSair">
                            <img src={SvgSair} alt="" />
                        </div>
                    </div>  
                </div>          
        </ContainerCabecalho>
    );
}