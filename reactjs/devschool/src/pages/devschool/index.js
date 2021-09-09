import {ContainerDevSchool,
        ContainerConteudo,
    } from './styled';

import SideComp from '../../components/sidecontainer/index';
import Cabecalho from '../../components/cabecalho/index.js';
import Conteudo from './conteudo.js'; 

export default function DevSchool(){
    return(
        <ContainerDevSchool>
            <SideComp />

            <ContainerConteudo>
                <Cabecalho />

                <Conteudo />
                
            </ContainerConteudo>
        </ContainerDevSchool>
    );
}