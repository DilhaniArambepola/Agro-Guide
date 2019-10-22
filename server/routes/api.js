const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const session = require('express-session');
// const mysql = require('mysql');
// var path = require('path');
// var multer = require('multer');
// var session = require('express-session');
// var fs = require('fs');

var crypto = require('crypto');

var dataZone = [];

router.get('/crops', function (req, res) {
    let sql = 'SELECT * FROM crops c INNER JOIN crops_has_zones z ON c.cropName = z.cropName INNER JOIN diseases d ON c.cropName = d.cropName';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.put('/crops', function (req, res) {
    db.query("UPDATE crops c, diseases d SET c.step1='" + [req.body[0].step1] + "', c.step2='" + [req.body[0].step2] + "', c.step3='" + [req.body[0].step3] + "', c.step4='" + [req.body[0].step4] + "', d.disease='" + [req.body[0].disease] + "', d.description='" + [req.body[0].description] + "' where c.cropID = ? AND c.cropName = d.cropName", [req.body[0].cropID], function (err, result, fields) {
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
                             console.log("diseases deleted");
                        }
                    });
                } if (val > 0) {
                    let sql1 = "DELETE from crops_has_zones where cropName='" + req.params.cropName + "'";
                    db.query(sql1, function (error, results, fields) {
                        if (error) {
                            res.send("Error deleting crops");
                        } else {
                            console.log("zones deleted");
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

    let sql2 = 'INSERT into crops(cropName, step1, step2, step3, step4) value(?,?,?,?,?)';
    db.query(sql2, [data[0].crop, data[0].step1, data[0].step2, data[0].step3, data[0].step4], (err, result) => {
        if (err) {
            // throw err;
            res.send("Error");
        }
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

router.get('/cultivate/:cropID', function (req, res) {
    let sql = "SELECT * FROM crops c INNER JOIN crops_has_zones z ON c.cropName = z.cropName WHERE c.cropID=?";
    db.query(sql, [req.params.cropID], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/cultivateMore/:cropID', function (req, res) {
    let sql = "SELECT * FROM crops c INNER JOIN diseases d ON c.cropName = d.cropName INNER JOIN crops_has_zones z ON c.cropName = z.cropName WHERE c.cropID=?";
    db.query(sql, [req.params.cropID], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/getCropDetails/:cropName', function (req, res) {
    let sql = "SELECT * FROM crops c INNER JOIN diseases d ON c.cropName = d.cropName WHERE c.cropName='" + [req.params.cropName] + "'";
    db.query(sql, (err, result) => {
        if (err) throw err;
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
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/farmers', function (req, res) {
    let sql = "SELECT * from users where userRole='Farmer'";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.delete('/farmers/:id', function (req, res) {
    let sql = "SELECT count(*) AS number from farmergardening where user=?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        // res.send(result);
        if (result[0].number > 0) {
            let sql1 = 'DELETE from farmergardening where user=?';
            db.query(sql1, [req.params.id], (err, result) => {
                if (err) throw err;

                let sql2 = 'DELETE from users where userID=?';
                db.query(sql2, [req.params.id], (err, result) => {
                    if (err) throw err;
                    res.send(result);
                });
            });
        } else {
            let sql3 = 'DELETE from users where userID=?';
            db.query(sql3, [req.params.id], (err, result) => {
                if (err) throw err;
                res.send(result);
            });
        }
    });
});

router.delete('/rvegSeller/:seller/:user', function (req, res) {
    let sql = "SELECT count(*) AS number from sellingvegetable where sellerID=?";
    db.query(sql, [req.params.seller], (err, result) => {
        if (err) throw err;
        // res.send(result);
        if (result[0].number > 0) {
            let sql1 = 'DELETE from sellingvegetable where sellerID=?';
            db.query(sql1, [req.params.seller], (err, result) => {
                if (err) throw err;
                let sql2 = 'DELETE from organicfoodseller where userID=?';
                db.query(sql2, [req.params.user], (err, result) => {
                    if (err) throw err;

                    let sql3 = 'DELETE from users where userID=?';
                    db.query(sql3, [req.params.user], (err, result) => {
                        if (err) throw err;
                        res.send(result);
                    });
                });

            });
        } else {
            let sql2 = 'DELETE from organicfoodseller where userID=?';
            db.query(sql2, [req.params.user], (err, result) => {
                if (err) throw err;

                let sql3 = 'DELETE from users where userID=?';
                db.query(sql3, [req.params.user], (err, result) => {
                    if (err) throw err;
                    res.send(result);
                });
            });
        }
    });
});

router.delete('/rSeedSeller/:seller/:user', function (req, res) {
    let sql = "SELECT count(*) AS number from seeds where shopID=?";
    db.query(sql, [req.params.seller], (err, result) => {
        if (err) throw err;
        // res.send(result);
        if (result[0].number > 0) {
            let sql1 = 'DELETE from seeds where shopID=?';
            db.query(sql1, [req.params.seller], (err, result) => {
                if (err) throw err;
                let sql2 = 'DELETE from seedshop where userID=?';
                db.query(sql2, [req.params.user], (err, result) => {
                    if (err) throw err;

                    let sql3 = 'DELETE from users where userID=?';
                    db.query(sql3, [req.params.user], (err, result) => {
                        if (err) throw err;
                        res.send(result);
                    });
                });

            });
        } else {
            let sql2 = 'DELETE from seedshop where userID=?';
            db.query(sql2, [req.params.user], (err, result) => {
                if (err) throw err;

                let sql3 = 'DELETE from users where userID=?';
                db.query(sql3, [req.params.user], (err, result) => {
                    if (err) throw err;
                    res.send(result);
                });
            });
        }
    });
});


router.get('/farmerCount', function (req, res) {
    let number;
    let sql = "SELECT count(*) AS number from users where userRole='Farmer'";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result[0]);
    });
});

router.post('/seedShops', function (req, res) {
    let sql = 'INSERT INTO seeds(seedName, shopID, quantity, price, seedPlant) VALUES(?,?,?,?,?);';
    db.query(sql, [req.body[0].item, req.body[0].shop, req.body[0].quantity, req.body[0].price, req.body[0].seedPlant], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/districtSeedShops/:district', function (req, res) {
    let sql = "SELECT * FROM seedShop ss INNER JOIN users u on ss.userID = u.userID where u.userRole='Seed seller' AND u.districtName='" + [req.params.district] + "'";
    // let sql = "SELECT * FROM seedShop ss INNER JOIN users u on ss.userID = u.userID INNER JOIN seeds s on ss.shopID = s.shopID where u.userRole='Seed seller' AND u.districtName='"+[req.params.district]+"'";
    db.query(sql, (err, result) => {
        if (err) throw err;
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
    db.query("DELETE FROM seeds WHERE seedID = ?", [req.params.id], function (error, rows, fields) {
        if (!!error) {
            throw error;
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
    db.query('UPDATE `seeds` SET `price`=? where `seedID`=?', [req.params.price, req.params.seedID], function (err, result, fields) {
        if (err) throw err;
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
    let sql = "SELECT * FROM users u INNER JOIN organicfoodseller o ON u.userID = o.userID where u.userRole = 'Food seller'";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/organicSellers/:district', function (req, res) {
    let sql = "SELECT * FROM users u INNER JOIN organicfoodseller o ON u.userID = o.userID where u.userRole = 'Food seller' AND u.districtName=?";
    db.query(sql, [req.params.district], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});


router.get('/sellerDetails/:userID', function (req, res) {
    let sql = "SELECT * FROM users u INNER JOIN organicfoodseller o ON u.userID = o.userID where u.userID = ?";
    db.query(sql, [req.params.userID], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/sales/:sellerID', function (req, res) {
    let sql = "SELECT * FROM sellingvegetable where sellerID = ?";
    db.query(sql, [req.params.sellerID], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.post('/sellerDetails', function (req, res) {
    let sql = 'INSERT INTO sellingvegetable(itemName, Quantity, price, sellerID) VALUES(?,?,?,?);';
    db.query(sql, [req.body[0].item, req.body[0].quantity, req.body[0].price, req.body[0].seller], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/seedSellerMoreDetails/:userID', function (req, res) {
    console.log(req.params.userID);
    let sql = "SELECT * FROM users u INNER JOIN seedshop ss ON u.userID = ss.userID where u.userID = ?";
    db.query(sql, [req.params.userID], (err, result) => {
        if (err) throw err;
        console.log("result1: " + result);
        res.send(result);
    });
});

router.get('/seedSellerDetails/:userID', function (req, res) {
    console.log(req.params.userID);
    let sql = "SELECT * FROM users where userID = ?";
    db.query(sql, [req.params.userID], (err, result) => {
        if (err) throw err;
        console.log("result2: " + result);
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
        res.send(result);
    });
});

router.get('/userDetails/:userID', function (req, res) {
    let sql = "SELECT * FROM users where userID = ?";
    db.query(sql, [req.params.userID], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/allUsers', function (req, res) {
    let sql = "SELECT * FROM users";
    db.query(sql, [req.params.userID], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/cropDetails/:district', function (req, res) {
    let sql = "SELECT * FROM zone_has_district where districtName = '" + [req.params.district] + "'";
    db.query(sql, (err, result) => {
        if (err) throw err;
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
        
        db.query(sql, zone, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    });
});

router.post('/cropDetails', function (req, res) {
    var today = new Date();
    let sql = 'INSERT INTO farmergardening(user, crop, created) VALUES(?,?,?);';
    db.query(sql, [req.body[0].userID, req.body[0].cropName, today], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.post('/inquiry', function (req, res) {
    var today = new Date();
    let sql = 'INSERT INTO inquiry(email, name, title, topic, description, created_date) VALUES(?,?,?,?,?,?);';
    db.query(sql, [req.body[0].email, req.body[0].name, req.body[0].title, req.body[0].topic, req.body[0].description, today], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.put('/inquiry', function (req, res) {
    let sql = 'UPDATE inquiry set respond=? where inquiryId=?';
    db.query(sql, [req.body.response, req.body.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.delete('/inquiry/:id', function (req, res) {
    let sql = 'DELETE from inquiry where inquiryID=?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/inquiry', function (req, res) {
    let sql = "SELECT * FROM inquiry";
    db.query(sql, [req.params.userID], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/selectedCropDetails/:userID', function (req, res) {
    let sql = "SELECT * FROM farmergardening where user = ?";
    db.query(sql, [req.params.userID], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.delete('/selectedCropDetails/:cropName', function (req, res) {
    let sql = 'DELETE from farmergardening where crop=?';
    db.query(sql, [req.params.cropName], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});


router.put('/register/:contact/:sellerID', function (req, res) {
    db.query('UPDATE `organicfoodseller` SET `contact`=? where `sellerID`=?', [req.params.contact, req.params.sellerID], function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

router.put('/shop/:contact/:shopID', function (req, res) {
    db.query('UPDATE `seedshop` SET `contact`=? where `shopID`=?', [req.params.contact, req.params.shopID], function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

function encrypt(text) {
    var cipher = crypto.createCipher('aes-256-cbc', 'd6f3Efeq');
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

function decrypt(pwd) {
    var decipher = crypto.createDecipher('aes-256-cbc', 'd6f3Efeq');
    var decrypted = decipher.update(pwd, 'hex', 'utf8')
    decrypted += decipher.final('utf8');
    return decrypted;
}

router.post('/register', function (req, res) {
    var data = req.body;
    var today = new Date();
    var c = encrypt(data[0].password);

    var users = {
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
                        res.send({
                            "code": 200,
                            "success": "user registered sucessfully"
                        });
                    }
                    if (data[0].userRole == 'Seed seller') {
                        db.query('INSERT INTO seedshop SET ?', details, (err, result) => {
                            if (err) throw err;
                            res.send({
                                "code": 200,
                                "success": "user registered sucessfully"
                            });
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

var val;
router.post('/users/authenticate', function (req, res) {
    data = req.body;
    var email = data[0].email;
    var password = data[0].password;
    var c = encrypt(password);
    db.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
        if (error) {
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            if (results.length > 0) {
                if (results[0].password === c) {
                    var token = jwt.sign({ id: results[0].id }, 'grokonez-super-secret-key', {
                        expiresIn: 86400 // expires in 24 hours
                    });

                    res.send({
                        loggedIn: results[0],
                        code: 200,
                        auth: true,
                        accessToken: token,
                        success: "login sucessfull"
                    });
                }
                else {
                    res.send({
                        "code": 204,
                        "error": "Email and password does not match"
                    });
                }
            }
            else {
                res.send({
                    "code": 208,
                    "error": "Email does not exits"
                });
            }
        }
    });
});

router.get('/admin', function (req, res) {
    let sql = "SELECT password from users where userROle = 'admin'";
    db.query(sql, (err, result) => {
        if (err) throw err;
        value = decrypt(result[0].password);
        val = [{
            value: decrypt(result[0].password)
        }]
        res.send(val[0]);
    });
});

router.put('/admin/:password', function (req, res) {
    var today = new Date();
    var c = encrypt(req.params.password);
    db.query("UPDATE users SET password='"+c+"', modified='"+today+"' where userID= 81", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    });
});

router.post('/logout', function f(req, res) {

    var sess = req.session.user;
    if (sess) {
        req.session.userID = null;
        res.json({ 'success': true, "message": "user logout successfully" });
    }
    res.json({ 'success': true, "message": "user logout successfully" });
});

router.get('/selectedEmails/:cropName', function (req, res) {
    let sql = "SELECT email FROM farmergardening f INNER JOIN users u ON f.user = u.userID where crop = '" + [req.params.cropName] + "'";
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.post('/sendMail', function (req, res) {
    console.log("details: " + req.body);
    let user = req.body;
    sendMail(user, info => {
        res.send(info)
    });
});

async function sendMail(user, callback) {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            // user: 'nimdilhani21@gmail.com',
            // pass: '72snmndk@K'
            user: 'agroguide.mailer@gmail.com',
            pass: 'agro123@'
        }
    });

    let mailOptions = {
        from: "nimdilhani21@gmail.com",
        to: user.email,
        subject: user.subject,
        html: '<h1>Hi, </h1><br>' + user.body
    };

    let info = await transporter.sendMail(mailOptions);

    callback(info);

}


module.exports = router;