import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import Spec from './spec/spec';
import clock from '../../../Assests/icons/icon_specs/clock.png';
import chef from '../../../Assests/icons/icon_specs/hat.png';
import leaf from '../../../Assests/icons/icon_specs/leaf.png';
import basket from '../../../Assests/icons/icon_specs/basket.png';

const specs=()=>{
    return(
        <Container>
            <Row>
                <Col>
                    <Spec src={basket} head="100% organic" content="Shefat tane nisin ta pergatisin porosine tuaj sapo ju ta kerkoni ate.Porosia do te arrije shume shpejt." />
                </Col>
                <Col>
                    <Spec src={clock} head="fast delivery" content="Shefat tane nisin ta pergatisin porosine tuaj sapo ju ta kerkoni ate.Porosia do te arrije shume shpejt."/>
                </Col>
                <Col>
                 <Spec src={leaf} head="cleanness" content="Shefat tane nisin ta pergatisin porosine tuaj sapo ju ta kerkoni ate.Porosia do te arrije shume shpejt."/>
                </Col>
                <Col>
                 <Spec src={chef} head="Experienced Chef" content="Shefat tane nisin ta pergatisin porosine tuaj sapo ju ta kerkoni ate.Porosia do te arrije shume shpejt."/>
                </Col>
            </Row>
        </Container>
    );
}

export default specs;