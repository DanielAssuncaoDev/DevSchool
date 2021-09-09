import styled from 'styled-components';



export const ContainerDevSchool = styled.div`
    display: flex;
`;
    export const ContainerConteudo = styled.div`
        width: 75.23%;
        margin-left: 24.72%;
    `;




        export const Conteudo = styled.div`
            margin-top: 93.44px;

            padding: 57px 52px  24px;
            background-color: #F5F5F5;

        `;


            export const CadastrarAluno = styled.div`
                
                background-color: #FFF;
                box-shadow: 0px 0px 4px 1px 
                    rgba(186, 186, 186, 0.25);

                padding: 40px 55px;    


                    form {
                        display: flex;
                        align-items: flex-end;
                    } form label {
                        margin-right: 10px;
                    } 
                    
                        .Column1 {
                            margin-right: 6.76%;
                        }
                        .Column2 {
                            margin-right: 30px;
                        }

                        .Column1,
                        .Column2 {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-end;

                            color: #615858;

                        } .Column1 div:nth-child(1),
                          .Column2 div:nth-child(1) {
                              margin-bottom: 15px;
                          } .Column1 div,
                            .Column2 div {
                                display: flex;
                                justify-content: flex-end;
                                align-items: center;
                            }

                            @media (max-width: 1100px) {

                                .Column1 div,
                                .Column2 div {
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: flex-end;
                                    align-items: flex-start;
                                }

                            }
                          

            `;

                export const Titulo = styled.div`
                    display: flex;
                    align-items: center;

                    color: #3C3939;
                    font-size: 2em;
                    font-weight: bold;

                    margin-bottom: 37px;
                `;

                    export const LineTitulo = styled.div`
                        height: 26px;
                        background-color: #986CDF;

                        border-radius: 33px; 
                        border: 3px solid #986CDF;

                        margin-right: 14px;
                    `;            



                export const Input = styled.input`
                    border-radius: 5px;
                    border: 1px solid #A8A8A8;

                    height: 30px;
                `;

                export const Button = styled.button`
                    display: flex;
                    align-items: center;

                    width: 105;
                    height: 35px;
                    padding: 10px 22px;

                    border: none;
                    border-radius: 44px;

                    color: #FFF;
                    background-color: #E911C6;
                `;




            


            export const ListarAlunos = styled.div`
                background-color: #FFF;
                box-shadow: 0px 0px 4px 1px 
                    rgba(186, 186, 186, 0.25);

                margin-top: 45px;
                padding: 40px 55px;    
            
            `;

                export const TabelaListarAlunos = styled.table`
      
                    width: 100%;

                    border: 1px solid #E2E2E2;
                    border-collapse: collapse;

                        thead tr {
                            color: #FFF;
                            background-color: #986CDF;
                            height: 67px;
                        }
                            th {
                                text-align: left;

                            }
                            th:nth-child(1) {
                                width: 12.14%;
                                text-align: center;
                            }

                            #OptionsC {
                                width: 18.02%;
                            }

                        
                         tbody {
                             margin-top: 6px;
                         }

                            tbody tr:nth-child(even){
                                background-color: #F5F5F5;
                            }

                            td {
                                padding 18px 0;
                            }

                            .Space{
                                height: 10px;
                            }

                            td:nth-child(1) {
                                text-align: center;
                            }


                            #Curso {
                                width: 15%;
                            }

                            #Options {
                                display: flex;
                                justify-content: center;

                            } #Options div {
                                margin: 0 4px;
                            }
                            
                            #Edit, 
                            #Excluir{
                                display: none;
                            }

                        
                            tbody tr:hover {

                                #Edit, 
                                #Excluir {
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;

                                    background-color: #565656;
                                    border-radius: 50%;

                                    height: 31px;
                                    width: 31px;
                                } 

                            }

                        

                            
                `;



