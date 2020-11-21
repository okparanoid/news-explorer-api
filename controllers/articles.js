const Article = require('../models/article');
const NotFoundError = require('../errors/not-found-err');
const ForbiddenError = require('../errors/forbidden-err');

module.exports.getArticles = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .then((articles) => res.status(200).send(articles))
    .catch(next);
};

module.exports.createArticle = (req, res, next) => {
  const owner = req.user._id;
  const {
    keyword, title, text, date, source, link, image,
  } = req.body;

  Article.create({
    keyword, title, text, date, source, link, image, owner,
  })
    .then((article) => res.status(201).send({
      _id: article._id,
      keyword: article.name,
      title: article.title,
      text: article.text,
      date: article.date,
      source: article.source,
      link: article.link,
      image: article.image,
    }))
    .catch(next);
};

module.exports.deleteArticle = (req, res, next) => {
  Article.findById(req.params.articleId).select('owner')
    .orFail(new NotFoundError('Нет карточки с таким id'))
    .then((article) => {
      if (article.owner.toString() !== req.user._id) {
        throw new ForbiddenError('Отсутствуют права на удаление для этой карточки');
      }
      article.remove()
        .then(() => res.send({ message: 'Карточка удалена' }));
    })
    .catch(next);
};
