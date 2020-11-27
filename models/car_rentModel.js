    
const db = require('./db');

module.exports ={

	validate: function(user, callback){
		var sql = "select * from car_rent where car_name=? and company=?";  //
		db.getResults(sql, [user.car_name, user.company], function(results){
			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getsearch: function(id,callback){
		var sql= "select * from car_rent where car_name like '%?%'";
		db.getResults(sql, [id], function(results){
			callback(results);
		});
	},

	getById: function(id,callback){
		var sql= "select * from car_rent where id=? ";
		db.getResults(sql, [id], function(results){
			callback(results);
		});
	},
	
	getByname: function(name,callback){
		var sql= "select * from car_rent where car_name=? ";
		db.getResults(sql, [name], function(results){
			callback(results);
		});
	},

	getcount: function(callback){
		var sql = "SELECT COUNT(*) as t_c FROM car_rent";
		db.getResults(sql, null, function(results){
			callback(results);
		});
	},

	
	getAll: function(callback){
		var sql = "select * from car_rent";
		db.getResults(sql, null, function(results){
			callback(results);
		});
	},



	insert: function(user, callback){
		var sql = "insert into car_rent VALUES (?, ?, ?, ?, ?, ?,?,?,?,?)";
		db.execute(sql, ['', user.car_name, user.company, user.category, user.date, user.day, user.rentamount, user.id, user.uid, user.mem_uname], function(status){
			callback(status);
		});
	},
	/////////////////////////////////////////////

	insertorder: function(user, callback){
		var sql = "insert into order_history VALUES (?, ?, ?, ?, ?,?, ?, ?)";
		db.execute(sql, ['', user.car_name, user.company, user.date, user.day, user.rentamount, user.uid, user.mem_uname], function(status){
			callback(status);
		});
	},

	getAllorder: function(callback){
		var sql = "select * from order_history";
		db.getResults(sql, null, function(results){
			callback(results);
		});
	},

	getByusername: function(name,callback){
		var sql= "select * from order_history where member_uname=? ";
		db.getResults(sql, [name], function(results){
			callback(results);
		});
	},
///////////////////////////////////////////////////////////////////////////////////

	update: function(user,callback){
        var sql = "UPDATE car_rent SET company = ?, category_id =?, rent_amount= ?, image= ? WHERE  car_name = ? ";

		db.execute(sql, ['',  user.car_name, user.company, user.category, user.date, user.day, user.rentamount, user.id], function(status){
			callback(status);
		});
	},
	delete: function(user,callback){ // check if i am sending an object in user or a single value
        var sql = "DELETE FROM car_rent WHERE rent_id= ?";

		db.execute(sql, [user.id], function(status){
			callback(status);
        
	    });
    }
}
