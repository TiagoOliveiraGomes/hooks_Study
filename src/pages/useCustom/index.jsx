import PageTittle from '../../components/layouts/pageTittle'
import SessionTittle from '../../components/layouts/sessionTittle'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import "./index.css"

const UseCustom = props => {
    const [count, incremental, decremental] = useCounter(20)    
    const url = 'http://files.cod3r.com.br/curso-react/estados.json'

    const response = useFetch(url)
    const showStates = (states) => {
        return states.map(state => {
            return (
                <li key={state.nome}>
                    {state.nome} - {state.sigla}
                </li>
            )
        })
    }
    

    return(
        <div className="UseCustom">
            <PageTittle tittle='UseEffect' content="Let us learn how to create out own hook" isWarning={false} />
            <SessionTittle tittle="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={decremental}>-1</button>
                    <button className="btn" onClick={incremental}>+1</button>
                </div>
            </div>
            <SessionTittle tittle="Exercício #02" />
            <div className="center">
                <ul>
                    {!response.loading ? showStates(response.data): false}
                </ul>
            </div>
        </div>
    )
}

export default UseCustom