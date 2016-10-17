var knex = require('./knex');


module.exports = {

  getAllNotes: function(){
    return knex('notes').select();
  },
  getOneNote: function(id) {
    return knex('notes').select().where({id: id});
  },
  searchNote: function(query) {
    return knex('notes').select().where('body', 'like', '%'+query+'%');
  }
};
