import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>McDonald's</td>
            <td className="deposit">R$100,00</td>
            <td className="category">Alimentação</td>
            <td className="date">20/06/2020</td>
          </tr>
          <tr>
            <td>McDonald's</td>
            <td className="withdraw">- R$100,00</td>
            <td className="category">Alimentação</td>
            <td className="date">20/06/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
