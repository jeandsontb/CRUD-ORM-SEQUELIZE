
const index = async ({Pessoa}, req, res) => {
  const pessoa = await Pessoa.findAll()
  res.render('pessoas/index', { pessoa });
};

const createForm = (req, res) => {
  res.render('pessoas/create');
};


const createProcess = async ({Pessoa}, req, res) => {
  await Pessoa.create(req.body);
  res.redirect('/pessoas');
};

const editForm = async ({Pessoa}, req, res) => {
  const pessoa = await Pessoa.findByPk(req.params.id);
  res.render('pessoas/edit', { pessoa });
};


const editProcess = async ({Pessoa}, req, res) => {
  await Pessoa.update(req.body, {
    where: {
      id: req.params.id
    }
  });
  res.redirect('/pessoas');
};

const deleteOne = async ({Pessoa}, req, res) => {
  await Pessoa.destroy({
    where: {
      id: req.params.id
    }
  });
  res.redirect('/pessoas');
}

module.exports = {
  index,
  createForm,
  createProcess,
  deleteOne,
  editProcess,
  editForm
}
