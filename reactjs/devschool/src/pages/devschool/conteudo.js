import {Conteudo,
            CadastrarAluno,
                Input,
                Button,
            ListarAlunos,
                TabelaListarAlunos,
Titulo,
LineTitulo,
    } from './styled.js';


import Edit from '../../assets/images/edit.svg';
import Excluir from '../../assets/images/trash-2.svg';



export default function ConteudoIndex(){
    return(
        <Conteudo>
            <CadastrarAluno>
                <Titulo>
                    <LineTitulo></LineTitulo>
                    <span> Novo Aluno </span>
                </Titulo>

                <form>
                    <div className="Column1">

                        <div className="Nome">
                            <label> Nome: </label>
                            <Input />
                        </div>

                        <div className="Chamada">
                            <label> Chamada: </label>
                            <Input />
                        </div>

                    </div>

                    <div className="Column2">

                        <div className="Curso">
                            <label> Curso: </label>
                            <Input />
                        </div>

                        <div className="Turma">
                            <label> Turma: </label>
                            <Input />
                        </div>

                    </div>

                    <Button>
                        Cadastrar
                    </Button>
                </form>

            </CadastrarAluno>
            
            <ListarAlunos>
                <Titulo>
                    <LineTitulo></LineTitulo>
                    <span> Alunos Matriculados </span>
                </Titulo>


                <TabelaListarAlunos>
                    <thead>
                        <tr className="CamposTabela">
                            <th> ID </th>
                            <th> Nome </th>
                            <th> Chamada </th>
                            <th> Turma </th>
                            <th> Curso </th>
                            <th id="OptionsC"></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="Space"></tr>

                       <tr className="RegistrosTabela">
                            
                            <td id="ID"> 1 </td>
                            <td id="Nome"> Daniel Assunção </td>
                            <td id="Chamada"> 07 </td>
                            <td id="Turma"> INFOB </td>
                            <td id="Curso"> Informática </td>

                            <td id="Options">
                                <div id="Edit">
                                    <img src={Edit} alt="" />
                                </div>
                                <div id="Excluir">
                                    <img src={Excluir} alt="" />
                                </div>
                            </td>
                        </tr> 

 
                        <tr className="RegistrosTabela">
                            
                            <td id="ID"> 1 </td>
                            <td id="Nome"> Daniel Assunção </td>
                            <td id="Chamada"> 07 </td>
                            <td id="Turma"> INFOB </td>
                            <td id="Curso"> Informática </td>

                            <td id="Options">
                                <div id="Edit">
                                    <img src={Edit} alt="" />
                                </div>
                                <div id="Excluir">
                                    <img src={Excluir} alt="" />
                                </div>
                            </td>
                        </tr>

                        <tr className="RegistrosTabela">
                            
                            <td id="ID"> 1 </td>
                            <td id="Nome"> Daniel Assunção </td>
                            <td id="Chamada"> 07 </td>
                            <td id="Turma"> INFOB </td>
                            <td id="Curso"> Informática </td>

                            <td id="Options">
                                <div id="Edit">
                                    <img src={Edit} alt="" />
                                </div>
                                <div id="Excluir">
                                    <img src={Excluir} alt="" />
                                </div>
                            </td>
                        </tr>

                        
                    </tbody>

                </TabelaListarAlunos>

            </ListarAlunos>
        </Conteudo>
    );
}