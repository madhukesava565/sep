const mysql =require('mysql')


var mysqlConnection = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'Natava1@',
        database:'employeedb' 
    }
);


mysqlConnection.connect((err)=>{

    if(!err)
    console.log('db is connected')

    else
    console.log("db not connected   error is " + JSON.stringify(err,undefined,2));
});

app.listen(3000,()=> console.log('running in port 3000'));




//get exaple of all records in employee
app.get('/employee',(req,res)=>{

    mysqlConnection.query('select * from employee',(err,rows,feilds)=>
    {
              if(!err)
              console.log(rows)
              else
              console.log(err);
    } )

})

// comment belongs to retrival of particular employee
app.get('/employee/:id',(req,res)=>{

    mysqlConnection.query('select * from employee  where EmpID= ?',[id],(err,rows,feilds)=>
    {
              if(!err)
              console.log(rows)
              else
              console.log(err);
    } )

})