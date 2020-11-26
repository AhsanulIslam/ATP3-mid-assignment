const db = require('./db');

module.exports ={

	validate: function(user, callback){
		var sql = "select * from categories where name=? ";  //
		db.getResults(sql, [user], function(results){
			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getsearch: function(id,callback){
		var sql= "select * from categories where name like '%?%'";
		db.getResults(sql, [id], function(results){
			callback(results);
		});
	},

	getById: function(id,callback){
		var sql= "select * from categories where category_id=? ";
		db.getResults(sql, [id], function(results){
			callback(results);
		});
	},
	
	getByname: function(name,callback){
		var sql= "select * from categories where name=? ";
		db.getResults(sql, [name], function(results){
			callback(results);
		});
	},

	getcount: function(callback){
		var sql = "SELECT COUNT(*) as t_c FROM categories";
		db.getResults(sql, null, function(results){
			callback(results);
		});
	},

	
	getAll: function(callback){
		var sql = "select * from categories";
		db.getResults(sql, null, function(results){
			callback(results);
		});
	},
	insert: function(user, callback){
		var sql = "insert into categories VALUES (?, ?)";

		db.execute(sql, ['', user.name], function(status){
			callback(status);
		});
	},
	update: function(user,callback){
        var sql = "UPDATE categories SET name = ? WHERE  category_id =? ";

		db.execute(sql, [user.name, user.id], function(status){
			callback(status);
		});
	},
	delete: function(user,callback){ // check if i am sending an object in user or a single value
        var sql = "DELETE FROM categories WHERE category_id= ? ";

		db.execute(sql, [ user.id], function(status){
			callback(status);
        
	    });
    }
}