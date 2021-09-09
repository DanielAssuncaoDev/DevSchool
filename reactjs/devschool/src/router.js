import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Crud from './pages/devschool/index';

export default function Rotas() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Crud} />
            </Switch>
        </BrowserRouter>
    );
}