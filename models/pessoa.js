const PessoaModel = (sequelize, dataTypes) => {
  const Pessoa = sequelize.define('Pessoa', {
    nome: dataTypes.STRING,
    cargo: dataTypes.STRING,
  });

  return Pessoa;
}

module.exports = PessoaModel;