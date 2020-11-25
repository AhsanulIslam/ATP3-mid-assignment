const express 	= require('express');
const userModel = require.main.require('./models/userModel');
//const buyerModel	= require.main.require('./models/buyerModel');
const carlistModel		=require.main.require('./models/carlistModel');
const memberModel	= require.main.require('./models/memberModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
	
	// memberModel.getByname(req.cookies['uname'],function(results){
		//need to add jobs the uname has taken
		
		if(req.cookies['uname'] != null){
			carlistModel.getAll(function(results){	
			
				res.render('home/free_home',{userlist: results});
			});
		}
			else{
				res.redirect('/login');
			}
	
			
// need to work on car list



		//res.render('home/free_home');
	

	//});
});

router.get('/info', (req, res)=>{
	
	//res.render('home/index');// remove it after you have done your work
	memberModel.getByname(req.cookies['uname'],function(results){
		res.render('home/freelancer_info', {userlist: results});
	});

});

router.post('/info', (req, res)=>{
	var user = {
        fname: req.body.fname,
        username: req.body.uname,  //fname, uname, pass, pass2, email, phone, address1, member(freelancer/buyer) 
        password: req.body.pass,
        email:    req.body.email, 
        phone:    req.body.phone,
        address:  req.body.address1
        //member: req.body.member
         // need to check for radio button
	};
	console.log(user);
	//res.render('home/index');// remove it after you have done your work
	
	memberModel.update(user,function(status){
		if(status){
			memberModel.getByname(user.username,function(results){
				res.render('home/freelancer_info', {userlist: results});
			});
			//sres.render('home/freelancer_info');// need to change the path
		}else{
			
			res.redirect('/freelancer/info');
		}
		
	});

});
router.get('/free_admin_chat', (req, res)=>{

	userModel.getAll(function(results){
		res.render('home/free_admin_chat', {userlist: results});
	});

});



module.exports = router;