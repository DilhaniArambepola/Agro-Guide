const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
// const mysql = require('mysql');
// var path = require('path');
// var multer = require('multer');
// var session = require('express-session');
// var fs = require('fs');

var crypto = require('crypto');

var dataZone = [];

router.get('/crops', function (req, res) {
    let sql = 'SELECT * FROM crops c INNER JOIN crops_has_zones z ON c.cropName = z.cropName';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// router.get('/crops', function (req, res) {
//     let sql = 'SELECT * FROM crops c INNER JOIN diseases d ON c.cropName = d.cropName INNER JOIN crops_has_zones z ON c.cropName = z.cropName';
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         res.send(result);
//     });
// });

router.put('/crops', function (req, res) {
    db.query("UPDATE crops c, diseases d SET c.details='" + [req.body[0].details] + "', d.disease='" + [req.body[0].disease] + "', d.description='" + [req.body[0].description] + "' where c.cropID = ? AND c.cropName = d.cropName", [req.body[0].cropID], function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/selectedCrop/:zone', function (req, res) {
    var zone = req.params.zone;
    let sql = 'SELECT * FROM crops c INNER JOIN diseases d ON c.cropName = d.cropName INNER JOIN crops_has_zones z ON c.cropName = z.cropName where z.' + zone + '=1';
    db.query(sql, (err, result) => {
        if (err) throw err;
        
        res.send(result);
    });
});

router.delete('/crops/:cropName', function (req, res) {
    console.log("crop: " + req.params.cropName);
    // let sql = `call deleteCrops(?)`;
    var val;
    let sql = "SELECT count(*) AS number from diseases where cropName='" + req.params.cropName + "'";
    let sql3 = "SELECT count(*) AS num2 from crops_has_zones where cropName='" + req.params.cropName + "'";

    db.query(sql3, function (error, results, fields) {
        if (error) {
            res.send("Error deleting crops");
        } else {
            val = results[0].num2;
        }
    }),
        db.query(sql, function (error, results, fields) {
            if (error) {
                res.send("Error deleting crops");
            } else {
                if (results[0].number > 0) {
                    let sql1 = "DELETE from diseases where cropName='" + req.params.cropName + "'";
                    db.query(sql1, function (error, results, fields) {
                        if (error) {
                            res.send("Error deleting crops");
                        } else {
                            //  consoel.log("diseases deleted");
                        }
                    });
                } if (val > 0) {
                    let sql1 = "DELETE from crops_has_zones where cropName='" + req.params.cropName + "'";
                    db.query(sql1, function (error, results, fields) {
                        if (error) {
                            res.send("Error deleting crops");
                        } else {
                            console.log("diseases deleted");
                        }
                    });

                    let sql2 = "DELETE from crops where cropName='" + req.params.cropName + "'";
                    db.query(sql2, function (error, results, fields) {
                        if (error) {
                            res.send("Error deleting crops");
                        } else {
                            res.send(results);
                        }
                    })
                }
            }
        });
});

// const Storage = multer.diskStorage({
//     destination: __dirname + '/../../src/assets/images/crops/',
//     filename: function (req, file, callback) {
//         console.log("came here - storage2");
//         callback(null, 'sample' + '-' + Date.now() +
//             path.extname('test'));  
//     }
// });

// const upload = multer({
//     storage: Storage
// }).single('image'); //Field name and max count

router.post('/crops', function (req, res) {
    const data = req.body;
    console.log("returns : " + data[0].crop + ", " + data[0].description);
    // var img = data.image
    // var imageName = img.replace(/^.*[\\\/]/, '');

    // upload(req, res, (err) => {
    //     if (err) {
    //         console.log("upload error");
    //         res.send("Something went wrong!");
    //     } else {
    //         console.log("upload successfully");
    //         console.log(imageName);
    //         res.send("File uploaded sucessfully!.");
    //     }
    // });

    this.dataZone = data[0].zone;

    if (this.dataZone != null) {
        console.log("Enter here : " + this.dataZone);

        if (this.dataZone.find(x => x == 'DryZone')) {
            this.dry = 1;
        } else {
            this.dry = 0;
        }
        if (this.dataZone.find(x => x == 'Intermediate')) {
            this.inter = 1;
        } else {
            this.inter = 0;
        }
        if (this.dataZone.find(x => x == 'LowCountryWet')) {
            this.lowCountry = 1;
        } else {
            this.lowCountry = 0;
        }
        if (this.dataZone.find(x => x == 'UpCountryWet')) {
            this.upCountry = 1;
        } else {
            this.upCountry = 0;
        }
    }

    let sql2 = 'INSERT into crops(cropName, details) value(?,?)';
    db.query(sql2, [data[0].crop, data[0].description], (err, result) => {
        if (err) throw err;
        // console.log("results : " + JSON.parse(JSON.stringify(result)));
        console.log("Insert");
        res.send(result)
    });

    var sql = "INSERT INTO crops_has_zones(cropName, DryZone, Intermediate, LowCountryWet, UpCountryWet) value(?,?,?,?,?)";
    db.query(sql, [data[0].crop, this.dry, this.inter, this.lowCountry, this.upCountry], (err, result) => {
        if (err) throw err;
        // console.log("results : " + JSON.parse(JSON.stringify(result)));
        console.log("Insert");
        // res.send(result)
    });

    // let sql1 = 'call addDiseases(?,?,?)';
    let sql1 = 'INSERT INTO diseases(disease, description, cropName) VALUES (?,?,?)';
    db.query(sql1, [data[0].disease, data[0].diseaseDes, data[0].crop], (err, result) => {
        if (err) throw err;
    });
});

router.get('/cropZone', function (req, res) {
    let sql = 'SELECT * FROM zone';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.put('/vegetables/:id', function (req, res) {
    let sql = 'UPDATE test_data set vegetable=? where id=?';
    db.query(sql, [req.body.name, req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.delete('/vegetables', function (req, res) {
    let sql = 'DELETE from test_data where id=?';
    db.query(sql, [req.body.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/cutivate/:cropID', function (req, res) {
    console.log("call this with: " + req.params.cropID);
    let sql = "SELECT * FROM crops c INNER JOIN diseases d ON c.cropName = d.cropName INNER JOIN crops_has_zones z ON c.cropName = z.cropName WHERE c.cropID=?";
    db.query(sql, [req.params.cropID], (err, result) => {
        if (err) throw err;
        console.log("result: " + result[0].cropName);
        res.send(result);
    });
});

router.get('/getCropDetails/:cropName', function (req, res) {
    console.log("call this with: " + req.params.cropName);
    let sql = "SELECT * FROM crops c INNER JOIN diseases d ON c.cropName = d.cropName WHERE c.cropName='"+[req.params.cropName]+"'";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("result: " + result[0].step1);
        res.send(result[0]);
    });
});

router.get('/district', function (req, res) {
    let sql = 'SELECT * FROM district';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/seedShops', function (req, res) {
    let sql = "SELECT * FROM seedShop ss INNER JOIN users u on ss.userID = u.userID where u.userRole='Seed seller'";
    // let sql = "SELECT * FROM seedShop ss INNER JOIN users u on ss.userID = u.userID INNER JOIN seeds s on ss.shopID = s.shopID where u.userRole='Seed seller'";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.post('/seedShops', function (req, res) {
    console.log("details : " + req.body[0].item);
    console.log("details : " + req.body[0].quantity);
    let sql = 'INSERT INTO seeds(seedName, shopID, quantity, price, seedPlant) VALUES(?,?,?,?,?);';
    db.query(sql, [req.body[0].item, req.body[0].shop, req.body[0].quantity, req.body[0].price, req.body[0].seedPlant], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/districtSeedShops/:district', function (req, res) {
    let sql = "SELECT * FROM seedShop ss INNER JOIN users u on ss.userID = u.userID where u.userRole='Seed seller' AND u.districtName='"+[req.params.district]+"'";
    // let sql = "SELECT * FROM seedShop ss INNER JOIN users u on ss.userID = u.userID INNER JOIN seeds s on ss.shopID = s.shopID where u.userRole='Seed seller' AND u.districtName='"+[req.params.district]+"'";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

router.get('/seeds/:userId', function (req, res) {
    let sql = "SELECT * FROM seeds s INNER JOIN seedshop ss ON s.shopID=ss.shopID where s.seedPlant='seed' AND ss.userID=?";
    db.query(sql, [req.params.userId], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.put('/seeds/:quantity/:seedID', function (req, res) {
    db.query('UPDATE `seeds` SET `Quantity`=? where `seedID`=?', [req.params.quantity, req.params.seedID], function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

router.delete('/seeds/:id', function (req, res) {
    console.log("id : " + req.params.id);
    db.query("DELETE FROM seeds WHERE seedID = ?", [req.params.id], function (error, rows, fields) {
        if (!!error) {
            console.log(error);
        } else {
            // logger.log({
            //     timestamp: timestamps,
            //     level: 'info',
            //     message: 'Successfully updated candidate token duration!'
            // });
            res.send(JSON.stringify(rows));
        }
    });
});

router.put('/seedShops/:price/:seedID', function (req, res) {
    console.log("call : " + req.params.price, req.params.seedID);
    db.query('UPDATE `seeds` SET `price`=? where `seedID`=?', [req.params.price, req.params.seedID], function (err, result, fields) {
        if (err) throw err;
        // console.log("results : " + JSON.parse(JSON.stringify(result[0].districtName)));
        console.log("results user details: " + result);
        res.send(result);
    });
});


router.get('/plants/:userId', function (req, res) {
    let sql = "SELECT * FROM seeds s INNER JOIN seedshop ss ON s.shopID=ss.shopID where s.seedPlant='plant' AND ss.userID=?";
    db.query(sql, [req.params.userId], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/vegetableSellers', function (req, res) {
    let sql = "SELECT * FROM users u INNER JOIN organicfoodseller o ON u.userID = o.userID where u.userRole = 'Organic food seller'";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/organicSellers/:district', function (req, res) {
    let sql = "SELECT * FROM users u INNER JOIN organicfoodseller o ON u.userID = o.userID where u.userRole = 'Organic food seller' AND u.districtName=?";
    db.query(sql, [req.params.district], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});


router.get('/sellerDetails/:userID', function (req, res) {
    console.log("userID : " + req.params.userID);
    let sql = "SELECT * FROM users u INNER JOIN organicfoodseller o ON u.userID = o.userID INNER JOIN sellingvegetable s ON o.sellerID = s.sellerID where u.userID = ?";
    db.query(sql, [req.params.userID], (err, result) => {
        if (err) throw err;
        console.log("Seller" + result[0].sellerID);
        res.send(result);
    });
});

router.post('/sellerDetails', function (req, res) {
    console.log("details : " + req.body[0].item);
    console.log("details : " + req.body[0].seller);
    let sql = 'INSERT INTO sellingvegetable(itemName, Quantity, price, sellerID) VALUES(?,?,?,?);';
    db.query(sql, [req.body[0].item, req.body[0].quantity, req.body[0].price, req.body[0].seller], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/seedSellerDetails/:userID', function (req, res) {
    console.log(req.params.userID);
    let sql = "SELECT * FROM users u INNER JOIN seedshop ss ON u.userID = ss.userID INNER JOIN seeds s ON ss.shopID = s.shopID where u.userID = ?";
    db.query(sql, [req.params.userID], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/foodItems/:sellerID', function (req, res) {
    let sql = "SELECT * FROM sellingvegetable where sellerID=?";
    db.query(sql, [req.params.sellerID], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.put('/foodItems/:quantity/:vegID', function (req, res) {
    db.query('UPDATE `sellingvegetable` SET `Quantity`=? where `sellingVegetableID`=?', [req.params.quantity, req.params.vegID], function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

router.delete('/foodItems/:id', function (req, res) {
    console.log("id : " + req.params.id);
    db.query("DELETE FROM sellingvegetable WHERE sellingVegetableID = ?", [req.params.id], function (error, rows, fields) {
        if (!!error) {
            console.log(error);
        } else {
            // logger.log({
            //     timestamp: timestamps,
            //     level: 'info',
            //     message: 'Successfully updated candidate token duration!'
            // });
            res.send(JSON.stringify(rows));
        }
    });
});

router.put('/organicSellers/:price/:vegID', function (req, res) {
    db.query('UPDATE `sellingvegetable` SET `price`=? where `sellingVegetableID`=?', [req.params.price, req.params.vegID], function (err, result, fields) {
        if (err) throw err;
        // console.log("results : " + JSON.parse(JSON.stringify(result[0].districtName)));
        console.log("results user details: " + result);
        res.send(result);
    });
});

router.get('/userDetails/:userID', function (req, res) {
    console.log("userID : " + req.params.userID);
    let sql = "SELECT * FROM users where userID = ?";
    db.query(sql, [req.params.userID], (err, result) => {
        if (err) throw err;
        console.log("User : " + result[0].userName);
        res.send(result);
    });
});

router.get('/cropDetails/:district', function (req, res) {
    console.log("d : " + req.params.district);
    let sql = "SELECT * FROM zone_has_district where districtName = '" + [req.params.district] + "'";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Zone : " + result[0].zoneID);
        var zone;

        if (result[0].zoneID == 1) {
            zone = 'DryZone'
        } else if (result[0].zoneID == 2) {
            zone = 'Intermediate'
        } else if (result[0].zoneID == 3) {
            zone = 'LowCountryWet'
        } else if (result[0].zoneID == 4) {
            zone = 'UpCountryWet'
        }

        let sql = "SELECT * FROM crops c INNER JOIN crops_has_zones z on c.cropName = z.cropName where " + zone + " = 1 AND NOT EXISTS(SELECT * FROM farmergardening f WHERE f.crop = c.cropName)"
        //SELECT * FROM employees WHERE NOT EXISTS (SELECT * FROM eotm_dyn WHERE eotm_dyn.name = employees.name)
        db.query(sql, zone, (err, result) => {
            if (err) throw err;
            // console.log("final : " + result);
            // console.log("getZone Name : " + result[0].cropName);
            res.send(result);
        });
    });
});

router.post('/cropDetails', function (req, res) {
    console.log("details : " + req.body[0].cropName);
    console.log("details : " + req.body[0].userID);
    let sql = 'INSERT INTO farmergardening(user, crop) VALUES(?,?);';
    db.query(sql, [req.body[0].userID, req.body[0].cropName], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/selectedCropDetails/:userID', function (req, res) {
    console.log("userID : " + req.params.userID);
    let sql = "SELECT * FROM farmergardening where user = ?";
    db.query(sql, [req.params.userID], (err, result) => {
        if (err) throw err;
      //  console.log("SelectedCrop here : " + result[0].crop);
        res.send(result);
    });
});

router.delete('/selectedCropDetails/:cropName', function (req, res) {
    let sql = 'DELETE from farmergardening where crop=?';
    db.query(sql, [req.params.cropName], (err, result) => {
        if (err) throw err;
        console.log("deleted crop");
        res.send(result);
    });
});


router.put('/register/:contact/:sellerID', function (req, res) {
    db.query('UPDATE `organicfoodseller` SET `contact`=? where `sellerID`=?', [req.params.contact, req.params.sellerID], function (err, result, fields) {
        if (err) throw err;
        // console.log("results : " + JSON.parse(JSON.stringify(result[0].districtName)));
        console.log("results user details: " + result);
        res.send(result);
    });
});

router.put('/shop/:contact/:shopID', function (req, res) {
    console.log(req.params.contact + ": " + req.params.shopID);
    db.query('UPDATE `seedshop` SET `contact`=? where `shopID`=?', [req.params.contact, req.params.shopID], function (err, result, fields) {
        if (err) throw err;
        // console.log("results : " + JSON.parse(JSON.stringify(result[0].districtName)));
        console.log("results user details: " + result);
        res.send(result);
    });
});

function encrypt(text) {
    var cipher = crypto.createCipher('aes-256-cbc', 'd6f3Efeq');
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

router.post('/register', function (req, res) {
    var data = req.body;
    var today = new Date();
    var c = encrypt(data[0].password);

    var users = {
        "fname": data[0].fname,
        "lname": data[0].lname,
        "userName": data[0].userName,
        "password": c,
        "email": data[0].email,
        "userRole": data[0].userRole,
        "districtName": data[0].districtName,
        "created": today,
        "modified": today
    }
    var userNum;
    db.query('INSERT INTO users SET ?', users, function (error, results, fields) {
        if (error) {
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            db.query('SELECT userID from users WHERE userName=?', [data[0].userName], (err, result) => {
                if (err) {
                    throw err;
                } else {
                    var details = {
                        "userID": result[0].userID,
                        "AddressLine1": data[0].adL1,
                        "AddressLine2": data[0].adL2,
                        "AddressLine3": data[0].adL3,
                        "contact": data[0].contact
                    }
                    if (data[0].userRole == 'Farmer') {
                        console.log("success");
                        res.send({
                            "code": 200,
                            "success": "user registered sucessfully"
                        });
                    }
                    if (data[0].userRole == 'Seed seller') {
                        db.query('INSERT INTO seedshop SET ?', details, (err, result) => {
                            if (err) throw err;
                            console.log("registered successfully" + result);
                            res.send("success");
                        });
                    }
                    else if (data[0].userRole == 'Food seller') {
                        db.query('INSERT INTO organicfoodseller SET ?', details, (err, result) => {
                            if (err) throw err;
                            res.send({
                                "code": 200,
                                "success": "user registered sucessfully"
                            });
                        });
                    }
                }

            });

        }
    });
});

router.post('/users/authenticate', function (req, res) {
    data = req.body;
    var email = data[0].email;
    var password = data[0].password;
    var c = encrypt(password);
    console.log("email: " + email + password);
    console.log(c);
    db.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
        if (error) {
            // console.log("error ocurred",error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            // console.log('The solution is: ', results);
            if (results.length > 0) {
                console.log('res : ' + results[0].password);
                if (results[0].password === c) {
                    console.log("login success");
                    var token = jwt.sign({ id: results[0].id }, 'grokonez-super-secret-key', {
                        expiresIn: 86400 // expires in 24 hours
                    });
                    console.log('token' + token);
                    console.log('userID' + results[0].userID);

                    // res.status(200).send({ auth: true, accessToken: token });
                    res.send({
                        loggedIn: results[0],
                        code: 200,
                        auth: true,
                        accessToken: token,
                        success: "login sucessfull"
                    });
                }
                else {
                    console.log("Email and password does not match");
                    res.send({
                        "code": 204,
                        "error": "Email and password does not match"
                    });
                }
            }
            else {
                console.log("Email does not exits");
                res.send({
                    "code": 208,
                    "error": "Email does not exits"
                });
            }
        }
    });
});

router.post('/logout', function (req, res) {

    var sess = req.session.user;
    if (sess) {
        req.session.userID = null;
        res.json({ 'success': true, "message": "user logout successfully" });
    }
    res.json({ 'success': true, "message": "user logout successfully" });
});

router.get('/selectedEmails/:cropName', function (req, res) {
    let sql = "SELECT email FROM farmergardening f INNER JOIN users u ON f.user = u.userID where crop = '"+[req.params.cropName]+"'";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.post('/sendMail', function (req, res) {
    console.log("mail request came");
    let user = req.body;
console.log("email: " + user.email);
    sendMail(user, info => {
        console.log('The mail has been send and the id is');
        res.send(info)
    });
});

async function sendMail(user, callback) {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: 'nimdilhani21@gmail.com',
            pass: '72snmndk@K'
        }
    });

    // let mailOptions = {
    //     from: "nimdilhani21@gmail.com",
    //     to: user.email,
    //     subject: "Welcome to fun of Heuristics",
    //     html: '<h1>Hi </h1><hr><h4>Thanks for joining us</h4>'
    // };

    let mailOptions = {
        from: "nimdilhani21@gmail.com",
        to: user.email,
        subject: user.subject,
        html: '<h1>Hi </h1><br>' + user.body
    };

    let info = await transporter.sendMail(mailOptions);

    callback(info);

}


module.exports = router;