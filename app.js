const fastify = require('fastify')();

// Rota para calcular Fibonacci e Fatorial
fastify.post('/calcular', async (request, reply) => {
  const { fib, fat } = request.body;

  // Função para calcular o Fatorial
  const calcularFatorial = (num) => {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * calcularFatorial(num - 1);
    }
  };

  // Função para calcular a Sequência de Fibonacci
  const calcularFibonacci = (num) => {
    if (num <= 1) {
      return num;
    } else {
      return calcularFibonacci(num - 1) + calcularFibonacci(num - 2);
    }
  };

  const cal_fib = calcularFibonacci(fib);
  const cal_fat = calcularFatorial(fat);

  reply.send({
    cal_fib,
    cal_fat,
  });
});

const start = async () => {
  try {
    await fastify.listen(3000);
    console.log('Server is running on http://localhost:3000');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
