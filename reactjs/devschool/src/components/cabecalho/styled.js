import styled from 'styled-components';

export const ContainerCabecalho = styled.div`

position: fixed;

background-color: #FFF;

width: 75.23%;
padding: 0em 1.2em;

    .Cabecalho {
        display: flex;
        justify-content: space-between;

        padding: 1.1em 1.7em;        

        border-bottom: 1px solid #D9D9D9;
    }
    

        .ContUser{
            display: flex;
            flex-direction: row;
            align-items: center;
        }

            .ImgUser img{
                width: 57px;
                height: 57px;

                border-radius: 50%;

            }.ImgUser {
                display: flex;
                align-items: flex-start;
            }

                .NotificacaoUser{
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    font-size: 10px;
                    color: #FFF;
                    background-color: #DB21BD;
                    border: 2px solid #FFF;
                    border-radius: 50%;

                    width: 20px;
                    height: 20px;
                    margin: 0px 0px 0px -17px;
                }


            .HelloUser span {
                color: #615858;
                font-weight: bold;

            } .HelloUser {
                margin-left: 10px;
                color: #615858;
            }
        


        .Options{
            display: flex;
            align-items: center;

        } .Options div{
            display: flex;
            justify-content: center;
            align-items: center;

            height: 44px;
            width: 44px;
            margin-left: 6px;
            border-radius: 50%;

            background-color: #986CDF;
        }



`;