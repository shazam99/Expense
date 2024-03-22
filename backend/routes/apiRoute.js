const express = require("express");
const router = express.Router();

const user = {
    regsiter: {
        desc: "regsiter user",
        method: "POST",
        route: "/api/v1/users/regsiter",
        access: "Public",
        body: {
            "name": "",
            "email": "",
            "password": "",
            "image": "",
            "state": "",
            "country": "",
            "role": "*optional*"
        },
    },
    login: {
        desc: "logins user",
        method: "POST",
        route: "/api/v1/users/login",
        access: "Public",
        body: {
            "email": "",
            "password": ""
        },
    },
    update: {
        desc: "update user data excepts ID and EMAIL",
        method: "POST",
        route: "/api/v1/users/update",
        access: "Private",
        header: "Authorization: Bearer Token",
        body: {
            "name": "",
            "password": "",
            "image": "",
            "state": "",
            "country": ""
        }
    }
};

const category = {
    addCategory: {
        desc: "user id taken if user adds and if admin adds user id taken as null",
        method: "POST",
        route: "/api/v1/update/category/add",
        access: "Private",
        header: "Authorization: Bearer Token",
        body: {
            "category_name": ""
        },
    },
    getCategory: {
        desc: "fetch all categories based on user id or null",
        method: "GET",
        route: "/api/v1/update/category/get",
        access: "Private",
        header: "Authorization: Bearer Token",
    },
    removeCategroy: {
        desc: "delete category based on userId or admin",
        method: "post",
        route: "/api/v1/update/category/remove",
        access: "Private",
        header: "Authorization: Bearer Token",
        body: {
            "category_id": ""
        },
    }


}

router.route("/").get((req, res) => {
    res.status(200).json({ user, category });
});

module.exports = router;
