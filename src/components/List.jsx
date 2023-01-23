import { Component } from "react";
import { Container } from "react-bootstrap";
import Cards from "./Cards";


export default class List extends Component {
    constructor() {
        super()
        this.state = {
            pelicula: []
        }
    }

    async componentDidMount() {
        const url = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json'
        const resp = await fetch(url)
        const data = await resp.json()
        const { results } = data;
        this.setState({ pelicula: results })
        console.log(results);
    }

    render() {
        return (
            <Container>

                <h1>Lista de Películas</h1>
                <hr />
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        this.state.pelicula.map((peli, index) => (
                            <Cards
                                key={index}
                                movies={peli}
                            />
                        ))
                    }
                </div>

            </Container>

        )
    }
}