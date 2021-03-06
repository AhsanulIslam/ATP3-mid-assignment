const db = require('./db');

module.exports ={

	validate: function(user, callback){
		var sql = "select * from member where username=? and password=?";
		db.getResults(sql, [user.username, user.password], function(results){
			if(results.length > 0){
				callback(true);

			}else{
				callback(false);
			}
		});
	},
	getById: function(id,callback){
		var sql= "select * from member where id=? ";
		db.getResults(sql, [id], function(results){
			callback(results);
		});
	},
	getByname: function(name,callback){
		var sql= "select * from member where username=? ";
		db.getResults(sql, [name], function(results){
			callback(results);
		});
	},
	getByuname: function(name,callback){
		var sql= "select id from member where username=? ";
		db.getResults(sql, [name], function(results){
			callback(results);
		});
	},
	getcount: function(callback){
		var sql = "SELECT COUNT(*) as t_c FROM member ";
		db.getResults(sql, null, function(results){
			callback(results);
		});
	},

	getAll: function(callback){
		var sql = "select * from member";
		db.getResults(sql, null, function(results){
			callback(results);
		});
	},

	insert: function(user, callback){
		var sql = "insert into member VALUES (?, ?, ?, ?, ?, ?, ?)";

		db.execute(sql, ['', user.fname, user.username, user.password, user.email, user.phone, user.address], function(status){
			callback(status);
		});
	},
	update: function(user,callback){
        var sql = "UPDATE member SET fname = ?, password =?, email= ?, phone= ?, address=? WHERE username = ? ";

		db.execute(sql, [ user.fname, user.password, user.email, user.phone, user.address, user.username], function(status){
			callback(status);
		});
	},
	delete: function(user,callback){
	 var sql = "DELETE FROM member WHERE username= ? and password =?  ";

    db.execute(sql, [ user.username,user.password ], function(status)
    {
        callback(status);
    });

	}
}