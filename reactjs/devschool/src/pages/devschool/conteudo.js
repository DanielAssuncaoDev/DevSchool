import {Conteudo,
            CadastrarAluno,
                Input,
                Button,
            ListarAlunos,
                TabelaListarAlunos,
Titulo,
LineTitulo,
    } from './styled.js';

import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'

import Edit from '../../assets/images/edit.svg';
import Excluir from '../../assets/images/trash-2.svg';

import { useState, useEffect, useRef } from 'react';

import Api from '../../services/api';
const api = new Api();


export default function ConteudoIndex(){

    const [matricula, setMatricula] = useState([]);

    const [id, setId] = useState(0);
    const [nome, setNome] = useState('');
    const [chamada, setChamada] = useState('');
    const [curso, setCurso] = useState('');
    const [turma, setTurma] = useState('');
    
    const loading = useRef(null);


    const listarMatriculas = async () => {
        loading.current.continuousStart();
            
            const m = await api.listarMatriculas();

            if(m.erro){
                toast.error(`${m.erro}`)
            } else {
            setMatricula(m);
            }
        loading.current.complete();
    }


    useEffect( () => {
        listarMatriculas()
    }, [] )


    const inserirMatricula = async () => {

        if (isNaN(chamada)){
            toast.error('A chamada deve ser um número!')
            return
        }

        if (chamada < 0 ){
            toast.error('A chamada deve ser um numero positivo')
            return
        }

        if (nome === '' || chamada === '' || curso === '' || turma === ''  ){
            toast.error('Todos os campos devem ser preenchidos!')
            return
        } 

            if (id > 0) {
                let m = await api.alterarMatricula(id, nome, chamada, curso, turma)

                if(m.erro){
                    toast.error(`${m.erro}`)
                } else{
                    toast.success('Matricula alterada!')
                }
            } else {

                const m = await api.inserirMatriculas(nome, chamada, curso, turma);

                if(m.erro){
                    toast.error(`${m.erro}`)
                    return
                }

                toast.success('Matricula enviada!')
            }

            limparRegistro()
            listarMatriculas(); 
        
    }

    const alterarMatricula = async (idChamada, nome, chamada, curso, turma) => {
        setId(idChamada);
        setNome(nome);
        setChamada(chamada);
        setCurso(curso);
        setTurma(turma);
    }

    const deletarMensagem = async (id) => {

        confirmAlert({
            title: 'Excluir Matricula?',
            message: `Relmente deseja excluir a matrícula ${id}?`,
            buttons: [
                {
                    label: 'Sim!',
                    onClick: async () => {
                        const m = await api.deletarMatricula(id)

                        if(m.erro){
                            toast.error(`${m.erro}`)
                        } else {
                            toast.success('Matricula deletada!')
                            listarMatriculas()
                        }
                    }
                },
                {
                    label: 'Não!',
                    onClick: () => {
                        toast.info('Matricula não foi deletada!')
                    }
                }
            ]
        })


    }


        function limparRegistro (){
            setId(0);
            setNome('');
            setChamada('');
            setCurso('');
            setTurma('');
        }


    
    return(
        <Conteudo>
            <LoadingBar color="#EA10C7" ref={loading} />
            <ToastContainer />

            <CadastrarAluno>
                <Titulo>
                    <LineTitulo></LineTitulo>
                    <span> 
                        { id === 0 ? 'Novo Aluno'
                                  : 'Alterando aluno ' + id 
                        } 
                    </span>
                </Titulo>

                <div className="Form-CadastrarAluno">
                    <div className="Column1">

                        <div className="Nome">
                            <label> Nome: </label>
                            <Input value={nome}
                                        onChange={ (x) => setNome(x.target.value) }/>
                        </div>

                        <div className="Chamada">
                            <label> Chamada: </label>
                            <Input value={chamada}
                                        onChange={ (x) => setChamada(x.target.value) }/>
                        </div>

                    </div>

                    <div className="Column2">

                        <div className="Curso">
                            <label> Curso: </label>
                            <Input value={curso}
                                        onChange={ (x) => setCurso(x.target.value) }/>
                        </div>

                        <div className="Turma">
                            <label> Turma: </label>
                            <Input value={turma}
                                        onChange={ (x) => setTurma(x.target.value) }/>
                        </div>

                    </div>

                    <Button onClick={inserirMatricula} >
                        { id === 0 ? "Cadastrar" : "Alterar" }
                    </Button>
                </div>

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

                        {matricula.map( x =>
                        
                            <tr className="RegistrosTabela" key={x.id_matricula}>
                            
                                <td id="ID"> {x.id_matricula} </td>
                                <td id="Nome" title={ x.nm_aluno }> { String(x.nm_aluno).length > 20 ? x.nm_aluno.substring(0, 20) + '...'  : x.nm_aluno  } </td>
                                <td id="Chamada"> {x.nr_chamada} </td>
                                <td id="Turma"> {x.nm_turma} </td>
                                <td id="Curso"> {x.nm_curso} </td>

                                <td id="Options">
                                    <div id="Edit"
                                            onClick={ () => alterarMatricula(x.id_matricula, x.nm_aluno, x.nr_chamada, x.nm_curso, x.nm_turma ) }>
                                        <img src={Edit} alt="" />
                                    </div>
                                    <div id="Excluir"
                                            onClick={ () => deletarMensagem(x.id_matricula) }>
                                        <img src={Excluir} alt="" />
                                    </div>
                                </td>
                            </tr> 
                            
                        )}
                      
                        
                    </tbody>

                </TabelaListarAlunos>

            </ListarAlunos>

            
        </Conteudo>
    );
}