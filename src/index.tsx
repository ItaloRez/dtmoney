import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "McDonald's",
          amount: 30,
          type: 'withdraw',
          category: 'Alimentação',
          createdAt: new Date('2020-06-20 09:00:00'),
        },
        {
          id: 2,
          title: 'Freelance de Website',
          amount: 1500,
          type: 'deposit',
          category: 'Trabalho',
          createdAt: new Date('2021-06-20 09:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
