const UsuarioModel = (sequelize, dataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    username: dataTypes.STRING,
    senha: dataTypes.STRING,
  });

  return Usuario;
}

module.exports = UsuarioModel;