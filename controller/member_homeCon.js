const express 	= require('express');
const userModel = require.main.require('./models/userModel');
//const buyerModel	= require.main.require('./models/buyerModel');
const carlistModel		=require.main.require('./models/carlistModel');
const memberModel	= require.main.require('./models/memberModel');
const carrentModel	= require.main.require('./models/car_rentModel');
const router 	= express.Router();

router.get('/', (req, res)=>{
		
		if(req.cookies['uname'] != null){
			carlistModel.getAll(function(results){	
				var num = req.cookies['uname'];
				res.render('home/free_home',{userlist: results,num});
			});
		
		}
			else{
				res.redirect('/login');
			}
});



router.get('/rent/:id', (req, res)=>{
	
	//res.render('home/index');// remove it after you have done your work
	
	carlistModel.getById(req.params.id,function(results){
		res.render('home/freelancer_info', {userlist: results});
	});

});


router.post('/rent/:id', (req, res)=>{  //

	var today = new Date();
var dd = today.getDate();

var mm = today.getMonth(); 
var yyyy = today.getFullYear();

	var d =  yyyy+'-'+mm+'-'+dd;
	var num = req.cookies['uname'];
	memberModel.getByuname(num,function(resultsnum){
	carlistModel.getById(req.params.id,function(results){
		// memberModel.get(mem_id,function(results){

	var user = {


		id : results[0].id, 
		car_name: results[0].car_name,
		company: 	results[0].company,	 //user.buyer_uname, user.buyer_email, user.job_desc, user.job_date, user.salary, user.freelancer_uname 
		category:    results[0].category_id, 
		// user_image:  results[0].image,

        rentamount:    req.body.txtResult, 
		date:d,
		day:req.body.day,
		uid: resultsnum[0].id,
		mem_uname : num
        //member: req.body.member
         // need to check for radio button
	};
	console.log(user);
	//res.render('home/index');// remove it after you have done your work
	carrentModel.insert(user,function(status){
		if(status){
			console.log("insertion done")
			carrentModel.getAll(function(results1){
				res.render('home/member_order_info',{userlist: results1});
			});

			//sres.render('home/freelancer_info');// need to change the path
		}else{
			console.log("insertion fail");
			
			res.redirect('/member/freelancer_info');
		}
		
	});

});
});
});

router.get('/member_order_info', (req, res)=>{

	carrentModel.getAll(function(results){
		res.render('home/member_order_info', {userlist: results});
	});

});


router.get('/free_admin_chat', (req, res)=>{

	userModel.getAll(function(results){
		res.render('home/free_admin_chat', {userlist: results});
	});

});



router.get('/member_info', (req, res)=>{

	memberModel.getAll(function(results){
		res.render('home/member_info', {userlist: results});
	});

});
router.post('/member_info', (req, res)=>{
	
	var user = {
        fname: 	  req.body.fname,
        username: req.body.uname,  //fname, uname, pass, pass2, email, phone, address1, member(freelancer/buyer) 
        password: req.body.pass,
        email:    req.body.email, 
        phone:    req.body.phone,
        address:  req.body.address1
        //member: req.body.member
         // need to check for radio button
	};
	console.log(user);
	//console.log(req.body);
	//res.render('home/index');// remove it after you have done your work
	
	 memberModel.update(user,function(status){
		if(status){
			memberModel.getByname(user.username,function(results){
			//alert("user info updated");
			res.redirect('/member/member_info', {userlist: results});
			});// need to change the path
		}else{
			//alert("something wrong cannot update");
			res.redirect('/home/info');
		}
    });
		
	
});




router.get('/userlist', (req, res)=>{

	userModel.getAll(function(results){
		res.render('home/userlist', {userlist: results});
	});

});





module.exports = router;