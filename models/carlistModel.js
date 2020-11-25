const db = require('./db');

module.exports ={

	validate: function(user, callback){
		var sql = "select * from car_list where car_name=? and company=?";  //
		db.getResults(sql, [user.car_name, user.company], function(results){
			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getsearch: function(id,callback){
		var sql= "select * from car_list where car_name like '%?%'";
		db.getResults(sql, [id], function(results){
			callback(results);
		});
	},

	getById: function(id,callback){
		var sql= "select * from car_list where id=? ";
		db.getResults(sql, [id], function(results){
			callback(results);
		});
	},
	
	getByname: function(name,callback){
		var sql= "select * from car_list where car_name=? ";
		db.getResults(sql, [name], function(results){
			callback(results);
		});
	},

	getcount: function(callback){
		var sql = "SELECT COUNT(*) as t_c FROM car_list";
		db.getResults(sql, null, function(results){
			callback(results);
		});
	},

	
	getAll: function(callback){
		var sql = "select * from car_list";
		db.getResults(sql, null, function(results){
			callback(results);
		});
	},
	insert: function(user, callback){
		var sql = "insert into car_list VALUES (?, ?, ?, ?, ?, ?)";

		db.execute(sql, ['', user.car_name, user.company, user.category, user.rent_amount, user.image], function(status){
			callback(status);
		});
	},
	update: function(user,callback){
        var sql = "UPDATE car_list SET company = ?, category_id =?, rent_amount= ?, image= ? WHERE  car_name = ? ";

		db.execute(sql, ['', user.company, user.category, user.rent_amount, '',user.car_name], function(status){
			callback(status);
		});
	},
	delete: function(user,callback){ // check if i am sending an object in user or a single value
        var sql = "DELETE FROM car_list WHERE id= ? ";

		db.execute(sql, [ user.id], function(status){
			callback(status);
        
	    });
    }
}