import React from 'react';
import { Redirect, Switch } from 'react-router';
import { PublicRoute } from '../Routes/HelperRoutes';

import MechanicLayaout from '../Mecanica/Componentes/MechanicLayaout';
import PresenThree from '../Mecanica/Componentes/Example_one/PresenThree';
import PresenFour from '../Mecanica/Componentes/Example_one/PresenFour';


import IniSes from '../Mecanica/Componentes/IniSes';
import Regis from '../Mecanica/Componentes/Regis';
import IniForm from '../Mecanica/Componentes/Example_two/IniForm';
import Particular from '../Mecanica/Componentes/Particular';
import Camioneta from '../Mecanica/Componentes/Camioneta';
import Van from '../Mecanica/Componentes/Van';
import Camperos from '../Mecanica/Componentes/Camperos';
import FormAuto from '../Mecanica/Componentes/use/FormAuto';

const PublicRoutess = () => {
    return (
        <Switch>
            <PublicRoute exact path="/" component={MechanicLayaout} />
            <PublicRoute exact path="/Iniciar-Sesion" component={IniSes} />
            <PublicRoute exact path="/Registrar" component={Regis} />
            <PublicRoute exact path="/Automoviles" component={Particular} />
            <PublicRoute exact path="/Camioneta" component={Camioneta} />
            <PublicRoute exact path="/Vans" component={Van} />
            <PublicRoute exact path="/Camper" component={Camperos} />

            <PublicRoute exact path="/crud" component={PresenThree} />
            <PublicRoute exact path="/crud2" component={PresenFour} />
            <PublicRoute exact path="/form" component={IniForm} />
            <PublicRoute exact path="/form2" component={FormAuto} />
            <Redirect path="/**" to="/" />
        </Switch>
    )
}

export default PublicRoutess
