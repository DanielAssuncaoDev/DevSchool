import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;

    position: fixed;

    height: 100vh;
    width: 24.72%;

    background-color: #2B3031;


        .Space{
            height: 60px;
            background-color: #262626;
        }

`;

    export const LogoSideComp = styled.div`
        display: flex;
        aling-items: center;

        padding: 3em;

            .LogoImg{
                display: flex;
                align-items: center;
            }

            .LogoNome{
                color: #fff;
                font-weight: bold;
                font-size: 1.5em;

                margin-left: 8px;
            }

            .lgnm-1{
                color: #EA10C7 !important;
            }
    `;



    export const MenuSideComp = styled.ul`
            list-style-type: none;
            margin: 0;
            padding: 0;

                li {
                    display: flex;
                    justify-content: space-between;
                    padding: 1.3em 1.5em 1.3em 3em;

                    font-size: 1.2em;
                    color: white;
                }

                li:nth-child(2) {
                    border-left: 4px solid #DB21BD;
                    background-color: white;
                    color: #1A1A1A;
                }
    `;