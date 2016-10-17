var knex = require('./knex');


module.exports = {

  getAllNotes: function(){
    return knex('notes').select();
  },
  getOneNote: function(id) {
    return knex('notes').select().where({id: id});
  }
};
