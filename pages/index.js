import {useState} from 'react';
import { Label, Card, Button, CardTitle, CardBody, Container, InputGroup, Input } from 'reactstrap';
import Header from '../components/Header'; 

 export default function Home(){

    var numEquipes = 5;
    var equipes = new Array();
    while( numEquipes > 0 ){
        let equipe = new Object();
        equipe['id'] = numEquipes;
        equipe['nome'] = "Equipe "+ numEquipes;
        equipes.push( equipe )
        numEquipes = numEquipes - 1;
    }

    console.log( equipes );

    return (
        <div>
            <Header/>
            <Container>
                    <Card>
                        <CardBody>
                            <Label>Quantas equipes?</Label>
                            <InputGroup>
                                <Input />
                                <Button color="primary">Próximo</Button>
                            </InputGroup>
                        </CardBody>
                    </Card>
            </Container>
            <Container>
                    <Card>
                        <CardBody>
                            <CardTitle>Nome da equipe: Alpha</CardTitle>
                            <span>Caixa: R$ 2000</span><br/>
                            <span>Processo: HC</span><br/>
                        </CardBody>
                    </Card>
            </Container>

            <Container>
                <Card>
                    <CardBody>
                        <h3>Caso 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </CardBody>
                </Card>
            </Container>
        </div>
    )
 }

