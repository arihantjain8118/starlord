const db = require('../../models') ;
const sequelize = require('sequelize') ;
const jwt = require('jsonwebtoken');
const utilities = require('../../helpers/utilities');

exports.byAgency = async ( req , res ) =>{
    try{
        let newAgencyID = req.body.agencyID ;
        let { count , rows } = await db.exams.findAndCountAll({
            where :{
                agencyID : newAgencyID
            },
            attributes: [ 'id' , 'name' ]
        });
        console.log(count) ;
        let exams = new Object() ;
        exams['examcount'] = count ;
        exams['examdata'] = rows ;
        res.status(200) ;
        res.send(exams) ;
    }
    catch(err){
        console.log( '401 ' + err  ) ;
        utilities.sendError(err, res);
    }
}