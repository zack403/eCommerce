(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin-orders/admin-orders.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/admin-orders/admin-orders.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-orders/admin-orders.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-orders/admin-orders.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-orders works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin-orders/admin-orders.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/admin-orders/admin-orders.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersComponent", function() { return AdminOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminOrdersComponent = /** @class */ (function () {
    function AdminOrdersComponent() {
    }
    AdminOrdersComponent.prototype.ngOnInit = function () {
    };
    AdminOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-orders',
            template: __webpack_require__(/*! ./admin-orders.component.html */ "./src/app/admin/admin-orders/admin-orders.component.html"),
            styles: [__webpack_require__(/*! ./admin-orders.component.css */ "./src/app/admin/admin-orders/admin-orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminOrdersComponent);
    return AdminOrdersComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <a class=\"btn btn-primary\" routerLink=\"/admin/products/new\">New Products</a>\n</p>\n<p>\n  <input #query (keyup)=\"filter(query.value)\" type=\"text\" class=\"form-control\" placeholder=\"search.....\">\n</p>\n\n<!-- <data-table [items]=\"items\" [itemCount]=\"itemCount\" (reload)=\"reload($event)\">\n  <data-table-column [property]=\"'title'\" [header]=\"'Title'\" [sortable]=\"true\" [resizable]=\"true\"></data-table-column>\n  <data-table-column [property]=\"'price'\" [header]=\"'Price'\" [sortable]=\"true\" [resizable]=\"true\">\n    <ng-template #datatablecell let-item=\"item\">\n      {{item.price | currency:'USD': \"symbol\"}}\n    </ng-template>\n  </data-table-column>\n\n  <data-table-column [property]=\"'price'\">\n    <ng-template #datatablecell let-item=\"item\">\n      <a [routerLink]=\"['/admin/products', p.category]\">Edit</a>\n    </ng-template>\n  </data-table-column>\n</data-table> -->\n\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Title</th>\n      <th>Price</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let p of products\">\n      <td>{{p.title}}</td>\n      <td>{{p.price}}</td>\n      <td>\n        <a [routerLink]=\"['/admin/products', p.category]\">Edit</a>\n      </td>\n\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/admin/admin-products/admin-products.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-products/admin-products.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../product.service */ "./src/app/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminProductsComponent = /** @class */ (function () {
    function AdminProductsComponent(productservice) {
        this.productservice = productservice;
        this.products = [
            {
                category: "Wears",
                imageUrl: "https://cdn.shopify.com/s/files/1/0987/4618/products/Women-Elegant-Vintage-Autumn-Polka-Dot-Turn-Down-Collar-Belted-Wear-To-Work-Office-Casual-Long_aa86bf78-ba1f-48f0-8bf3-7b61d49cb6b8_grande.jpg?v=1514633750",
                price: 50,
                title: "Ladies Wears"
            },
            {
                category: "laptops",
                imageUrl: "https://cnet2.cbsistatic.com/img/C3RPtt8a_n1be4azT8jokd9vhsM=/1600x900/2016/07/21/d90577a0-8dc3-426a-889f-b3c29bbc9b17/4-laptops-dan-02.jpg",
                price: 1500,
                title: "Laptops"
            },
            {
                category: "phones",
                imageUrl: "https://amp.businessinsider.com/images/59c29dcb2488492b395ca43e-750-487.jpg",
                price: 1000,
                title: "Iphone"
            },
            {
                category: "shoes",
                imageUrl: 
                // tslint:disable-next-line:max-line-length
                "https://bluewater.co.uk/sites/bluewater/files/styles/whats_on_gallery_large/public/images/shops/gallery/office_aw16_1_1600x1600.jpg?itok=-xaVUtfn",
                price: 200,
                title: "Shoes"
            },
            {
                category: "vegetables",
                imageUrl: "http://www.publicdomainpictures.net/pictures/170000/velka/spinach-leaves-1461774375kTU.jpg",
                price: 2.5,
                title: "Spinach"
            },
            {
                category: "bread",
                imageUrl: "https://static.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg",
                price: 3,
                title: "Freshly Baked Bread"
            },
            {
                category: "fruits",
                imageUrl: "https://pixnio.com/free-images/2017/03/17/2017-03-17-09-15-56.jpg",
                price: 1.75,
                title: "Avacado"
            },
            {
                category: "vegetables",
                imageUrl: "https://static.pexels.com/photos/8390/food-wood-tomatoes.jpg",
                price: 2.5,
                title: "Tomato"
            },
            {
                category: "vegetables",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Lettuce_Mini_Heads_%287331119710%29.jpg",
                price: 1,
                title: "Lettuce"
            },
            {
                category: "vegetables",
                // tslint:disable-next-line:max-line-length
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Cauliflowers_-_20051021.jpg/1280px-Cauliflowers_-_20051021.jpg",
                price: 1.75,
                title: "Cauliflower"
            },
            {
                category: "fruits",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bananas.jpg/1024px-Bananas.jpg",
                price: 1.25,
                title: "Banana"
            },
            {
                category: "fruits",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",
                price: 1.7,
                title: "Orange"
            },
            {
                category: "fruits",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
                price: 2,
                title: "Apple"
            },
            {
                category: "fruits",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/36/Kyoho-grape.jpg",
                price: 2,
                title: "Grape"
            },
            {
                category: "fruits",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Autumn_Red_peaches.jpg",
                price: 2,
                title: "Peach"
            },
            {
                category: "seasonings",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cinnamon-other.jpg",
                price: 0.5,
                title: "Cinnamon Sticks"
            },
            {
                category: "seasonings",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Saffron_Crop.JPG",
                price: 3,
                title: "Saffron"
            },
            {
                category: "seasonings",
                imageUrl: "http://maxpixel.freegreatpicture.com/static/photo/1x/Seasoning-Powder-Curry-Spice-Ingredient-Turmeric-2344157.jpg",
                price: 0.75,
                title: "Ground Turmeric"
            },
            {
                category: "seasonings",
                imageUrl: "http://maxpixel.freegreatpicture.com/static/photo/1x/Ingredient-Herb-Seasoning-Seeds-Food-Coriander-390015.jpg",
                price: 0.5,
                title: "Coriander Seeds"
            },
            {
                category: "bread",
                imageUrl: 
                // tslint:disable-next-line:max-line-length
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Fabrication_du_lavash_%C3%A0_Noravank_%286%29.jpg/1280px-Fabrication_du_lavash_%C3%A0_Noravank_%286%29.jpg",
                price: 1.25,
                title: "Lavash Bread"
            },
            {
                category: "bread",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Bagel-Plain-Alt.jpg",
                price: 1,
                title: "Bagel Bread"
            },
            {
                category: "fruits",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Strawberries.jpg",
                price: 1.95,
                title: "Strawberry"
            },
            {
                category: "bread",
                imageUrl: "https://static.pexels.com/photos/416607/pexels-photo-416607.jpeg",
                price: 1.25,
                title: "Baguette Bread"
            }
        ];
    }
    AdminProductsComponent.prototype.filter = function (query) {
        console.log(query);
    };
    AdminProductsComponent.prototype.ngOnInit = function () { };
    AdminProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-admin-products",
            template: __webpack_require__(/*! ./admin-products.component.html */ "./src/app/admin/admin-products/admin-products.component.html"),
            styles: [__webpack_require__(/*! ./admin-products.component.css */ "./src/app/admin/admin-products/admin-products.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());



/***/ }),

/***/ "./src/app/admin/product-form/product-form.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/product-form/product-form.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/product-form/product-form.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/product-form/product-form.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-primary\">New Product</h1>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <form #form=\"ngForm\" (ngSubmit)=\"save(form.value)\">\n      <div class=\"form-group\">\n        <label for=\"title\">Title</label>\n        <input required #title=\"ngModel\" ngModel name=\"title\" id=\"title\" type=\"text\" class=\"form-control\">\n        <div class=\"alert alert-danger\" *ngIf=\"title.touched && title.invalid\">Title is required\n          <!-- <div *ngIf=\"title.errors.required\">Title is required</div>\n              <div *ngIf=\"title.errors.minlength\">Minimum length should be {{title.minlength.requiredLength}}</div>\n              <div *ngIf=\"title.errors.maxlength\">Maximum lenght should be {{title.maxlength.requiredLength}}</div> -->\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"price\">Price</label>\n        <div class=\"input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">$</span>\n          </div>\n          <input required #price=\"ngModel\" ngModel name=\"price\" id=\"price\" type=\"number\" class=\"form-control\">\n        </div>\n        <div *ngIf=\"price.touched && price.invalid\" class=\"alert alert-danger\">Price is required</div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"category\">Category</label>\n        <select required #category=\"ngModel\" ngModel name=\"category\" id=\"category\" class=\"form-control\">\n          <option value=\"\"></option>\n          <option *ngFor=\"let c of categories\" [value]=\"c.id\">{{c.name}}</option>\n          <div *ngIf=\"category.touched && category.invalid\" class=\"alert alert-danger\">Category is required</div>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"imageUrl\">Image URL</label>\n        <input required #image=\"ngModel\" ngModel name=\"image\" id=\"imageUrl\" type=\"text\" class=\"form-control\">\n        <div *ngIf=\"image.touched && image.invalid\" class=\"alert alert-danger\">Image url is required</div>\n      </div>\n      <button [disabled]=\"form.invalid\" class=\"btn btn-primary\">Save</button>\n    </form>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"card\" style=\"width: 18rem;\">\n      <img class=\"card-img-top\" [src]=\"image.value\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{title.value}}</h5>\n        <p class=\"card-text\">{{price.value | currency:'USD':\"symbol\"}}</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/product-form/product-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/product-form/product-form.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin-products/admin-products.component */ "./src/app/admin/admin-products/admin-products.component.ts");
/* harmony import */ var _node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(toastr, admin, router, categoryservice, productservice) {
        this.toastr = toastr;
        this.admin = admin;
        this.router = router;
        this.categoryservice = categoryservice;
        this.productservice = productservice;
        this.categories = [
            { id: "ladieswear", name: "Ladies Wear" },
            { id: "laptop", name: "Laptops" },
            { id: "shoe", name: "Shoes" },
            { id: "phone", name: "Phones" },
            { id: "bread", name: "Bread" },
            { id: "dairy", name: "Dairy" },
            { id: "fruits", name: "Fruits" },
            { id: "seasonings", name: "Seasonings and Spices" },
            { id: "vegetables", name: "Vegetables" }
        ];
        this.products = this.admin.products;
    }
    ProductFormComponent.prototype.showSuccess = function () {
        this.toastr.success("Successsful!");
    };
    ProductFormComponent.prototype.save = function (product) {
        this.productservice.create(product);
        this.toastr.success("Saved Successfully!");
        this.router.navigate(["/admin/products"]);
    };
    ProductFormComponent.prototype.ngOnInit = function () { };
    ProductFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-product-form",
            template: __webpack_require__(/*! ./product-form.component.html */ "./src/app/admin/product-form/product-form.component.html"),
            styles: [__webpack_require__(/*! ./product-form.component.css */ "./src/app/admin/product-form/product-form.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_4__["AdminProductsComponent"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"],
            _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(userService, auth, router) {
        this.userService = userService;
        this.auth = auth;
        this.router = router;
        this.title = "app";
        auth.user$.subscribe(function (user) {
            if (user) {
                userService.save(user);
                var returnurl = localStorage.getItem("returnUrl");
                router.navigateByUrl(returnurl);
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./check-out/check-out.component */ "./src/app/check-out/check-out.component.ts");
/* harmony import */ var _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./order-success/order-success.component */ "./src/app/order-success/order-success.component.ts");
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./my-orders/my-orders.component */ "./src/app/my-orders/my-orders.component.ts");
/* harmony import */ var _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/admin-products/admin-products.component */ "./src/app/admin/admin-products/admin-products.component.ts");
/* harmony import */ var _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/admin-orders/admin-orders.component */ "./src/app/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin/product-form/product-form.component */ "./src/app/admin/product-form/product-form.component.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./category.service */ "./src/app/category.service.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./product.service */ "./src/app/product.service.ts");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shopping-cart.service */ "./src/app/shopping-cart.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _flexlayout_flexlayout_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./flexlayout/flexlayout.component */ "./src/app/flexlayout/flexlayout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"],
                _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_15__["ShoppingCartComponent"],
                _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_16__["CheckOutComponent"],
                _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_17__["OrderSuccessComponent"],
                _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_18__["MyOrdersComponent"],
                _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_19__["AdminProductsComponent"],
                _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_20__["AdminOrdersComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_25__["ProductFormComponent"],
                _flexlayout_flexlayout_component__WEBPACK_IMPORTED_MODULE_31__["FlexlayoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_27__["FormsModule"],
                angular_6_datatable__WEBPACK_IMPORTED_MODULE_8__["DataTableModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_30__["ToastrModule"].forRoot({
                    timeOut: 10000,
                    positionClass: "toast-top-right",
                    preventDuplicates: true
                }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    { path: "", component: _flexlayout_flexlayout_component__WEBPACK_IMPORTED_MODULE_31__["FlexlayoutComponent"] },
                    { path: "products", component: _products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"] },
                    { path: "shopping-cart", component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_15__["ShoppingCartComponent"] },
                    {
                        path: "check-out",
                        component: _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_16__["CheckOutComponent"]
                    },
                    {
                        path: "order-success",
                        component: _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_17__["OrderSuccessComponent"]
                    },
                    {
                        path: "my/orders",
                        component: _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_18__["MyOrdersComponent"]
                    },
                    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"] },
                    {
                        path: "admin/products",
                        component: _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_19__["AdminProductsComponent"]
                    },
                    {
                        path: "admin/orders",
                        component: _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_20__["AdminOrdersComponent"]
                    },
                    {
                        path: "admin/products/new",
                        component: _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_25__["ProductFormComponent"]
                    },
                    {
                        path: "admin/products/:id",
                        component: _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_25__["ProductFormComponent"]
                    }
                ])
            ],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_22__["AuthService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_23__["AuthGuardService"],
                _user_service__WEBPACK_IMPORTED_MODULE_24__["UserService"],
                _category_service__WEBPACK_IMPORTED_MODULE_26__["CategoryService"],
                _product_service__WEBPACK_IMPORTED_MODULE_28__["ProductService"],
                _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_19__["AdminProductsComponent"],
                _shopping_cart_service__WEBPACK_IMPORTED_MODULE_29__["ShoppingCartService"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.user$.map(function (user) {
            if (user) {
                return true;
            }
            _this.router.navigate(["/login"], {
                queryParams: { returnurl: state.url }
            });
            return false;
        });
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(afauth, route) {
        this.afauth = afauth;
        this.route = route;
        this.user$ = afauth.authState;
    }
    AuthService.prototype.login = function () {
        var returnurl = this.route.snapshot.queryParamMap.get("returnUrl") || "/";
        localStorage.setItem("returnurl", returnurl);
        this.afauth.auth.signInWithRedirect(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.logout = function () {
        this.afauth.auth.signOut();
    };
    AuthService.prototype.isloggedin = function () {
        localStorage.getItem("returnurl");
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/category.service.ts":
/*!*************************************!*\
  !*** ./src/app/category.service.ts ***!
  \*************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = /** @class */ (function () {
    function CategoryService(db) {
        this.db = db;
    }
    CategoryService.prototype.getCategories = function () {
        return this.db.list("/categories");
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/check-out/check-out.component.css":
/*!***************************************************!*\
  !*** ./src/app/check-out/check-out.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/check-out/check-out.component.html":
/*!****************************************************!*\
  !*** ./src/app/check-out/check-out.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  check-out works!\n</p>\n"

/***/ }),

/***/ "./src/app/check-out/check-out.component.ts":
/*!**************************************************!*\
  !*** ./src/app/check-out/check-out.component.ts ***!
  \**************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckOutComponent = /** @class */ (function () {
    function CheckOutComponent() {
    }
    CheckOutComponent.prototype.ngOnInit = function () {
    };
    CheckOutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-check-out',
            template: __webpack_require__(/*! ./check-out.component.html */ "./src/app/check-out/check-out.component.html"),
            styles: [__webpack_require__(/*! ./check-out.component.css */ "./src/app/check-out/check-out.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckOutComponent);
    return CheckOutComponent;
}());



/***/ }),

/***/ "./src/app/flexlayout/flexlayout.component.css":
/*!*****************************************************!*\
  !*** ./src/app/flexlayout/flexlayout.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tem1 {\r\n  background-color: green;\r\n  height: 100px;\r\n}\r\n#tem2 {\r\n  background-color: orange;\r\n  height: 100px;\r\n}\r\n#tem3 {\r\n  background-color: yellow;\r\n  height: 100px;\r\n}\r\n#tem4 {\r\n  background-color: blue;\r\n  height: 100px;\r\n}\r\n#tem5 {\r\n  background-color: red;\r\n  height: 100px;\r\n}\r\n.img {\r\n  width: 100%;\r\n  margin-bottom: 18%;\r\n}\r\n.card-picture {\r\n  width: 23%;\r\n  margin-bottom: 2%;\r\n}\r\n.container {\r\n  min-height: 100%;\r\n  width: 100%;\r\n}\r\n.search-form {\r\n  width: 90%;\r\n}\r\n#gm {\r\n  height: 161.79px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/flexlayout/flexlayout.component.html":
/*!******************************************************!*\
  !*** ./src/app/flexlayout/flexlayout.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center text-secondary mb-5 text-uppercase\">\n\n  Items in the List</h1>\n<div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"0.5%\" fxLayoutAlign=\"center\">\n  <div fxFlex=\"20%\">\n    <img mat-card-image class=\"img\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbujcHAf0Afjya3JgW1HuExfiHTZHrm4JGl4_w1mOSOyRbkTazA\">\n  </div>\n  <div fxFlex=\"20%\">\n    <img mat-card-image id=\"gm\" class=\"img\" src=\"https://www.thecable.ng/wp-content/uploads/2018/02/Laptop-653x365.jpg\">\n  </div>\n  <div fxFlex=\"20%\">\n    <img mat-card-image id=\"gm\" class=\"img\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk0nGPFZx__e14vEQULjTBEQrtn86MwWDQc4awPrcco_H6fi45eg\">\n  </div>\n  <div fxFlex=\"20%\">\n    <img mat-card-image id=\"gm\" class=\"img\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXCuN7BuaS0JsBxpoXJw1ENF1neGQlhGLxc3j3fZv3Yb36pGJ3\">\n  </div>\n</div>\n<div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"0.5%\" fxLayoutAlign=\"center\">\n  <div fxFlex=\"20%\">\n    <img mat-card-image id=\"gm\" class=\"img\" src=\"https://media.playstation.com/is/image/SCEA/playstation-4-slim-vertical-product-shot-01-us-07sep16?$native_t$\">\n  </div>\n  <div fxFlex=\"20%\">\n    <img mat-card-image id=\"gm\" class=\"img\" src=\"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3514/3514031_sa.jpg\">\n  </div>\n  <div fxFlex=\"20%\">\n    <img mat-card-image id=\"gm\" class=\"img\" src=\"http://www.uggadgets.com/wp-content/uploads/2017/02/Unitec-32_-TV-4.png\">\n  </div>\n  <div fxFlex=\"20%\">\n    <img mat-card-image id=\"gm\" class=\"img\" src=\"data:image/jpeg;base64,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\">\n  </div>\n</div>\n<div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"0.5%\" fxLayoutAlign=\"center\">\n  <div fxFlex=\"20%\">\n    <img mat-card-image id=\"gm\" class=\"img\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ88sk_nkkCZaaXVIWSm_fSsr8NdfJJR_AYk4RWe0sA1j5bbORAOw\">\n  </div>\n  <div fxFlex=\"20%\">\n    <img mat-card-image id=\"gm\" class=\"img\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSInDQz9XJxJ4vqk0ACx-DZZlRdIzLzwN3DZYyI1ci_6R2XMq-e6Q\">\n  </div>\n  <div fxFlex=\"20%\">\n    <img mat-card-image id=\"gm\" class=\"img\" src=\"data:image/jpeg;base64,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\">\n  </div>\n  <div fxFlex=\"20%\">\n    <img mat-card-image id=\"gm\" class=\"img\" src=\"data:image/jpeg;base64,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\">\n  </div>\n</div>\n<div class=\"container\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutWrap fxLayoutGap=\"0.5%\" fxLayoutAlign=\"center\">\n  <div fxFlex=\"20%\">\n    <img mat-card-image id=\"gm\" class=\"img\" src=\"data:image/jpeg;base64,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\">\n  </div>\n  <div fxFlex=\"20%\">\n    <img mat-card-image id=\"gm\" class=\"img\" src=\"data:image/jpeg;base64,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\">\n  </div>\n  <div fxFlex=\"20%\">\n    <img mat-card-image id=\"gm\" class=\"img\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJwuvK8XoOzF8-GMgB5OwCv0TlOhOZVE9GLoha7UbLx5hDIYk2g\">\n  </div>\n  <div fxFlex=\"20%\">\n    <img mat-card-image id=\"gm\" class=\"img\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPpn_TKUeFgae0ySAkh6TgVEasaLJ0auFM5XnWANtYGK7tYvYx\">\n  </div>\n</div>\n\n<!-- <div class=\"container\" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\n  <div class=\"item item-1 mb-5 text-center text-white\" id=\"tem1\" fxFlex=\"15%\">Item 1</div>\n  <div class=\"item item-2 mb-5 text-center text-white\" id=\"tem2\" fxFlex=\"20%\" fxFlexOrder=\"3\">Item 2</div>\n  <div class=\"item item-3 mb-5 text-center text-white\" id=\"tem3\" fxFlex>Item 3</div>\n</div>\n\n<div class=\"container\" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\n  <div class=\"item item-4 text-center text-center text-white\" id=\"tem4\" fxFlex fxFlexOffset=\"50px\" fxFlexOffset.xs=\"0\">Item 4</div>\n  <div class=\"item item-5 text-center text-center text-white\" id=\"tem5\" fxFlex=\"200px\">Item 5</div>\n</div> -->"

/***/ }),

/***/ "./src/app/flexlayout/flexlayout.component.ts":
/*!****************************************************!*\
  !*** ./src/app/flexlayout/flexlayout.component.ts ***!
  \****************************************************/
/*! exports provided: FlexlayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexlayoutComponent", function() { return FlexlayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlexlayoutComponent = /** @class */ (function () {
    function FlexlayoutComponent() {
    }
    FlexlayoutComponent.prototype.ngOnInit = function () {
    };
    FlexlayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flexlayout',
            template: __webpack_require__(/*! ./flexlayout.component.html */ "./src/app/flexlayout/flexlayout.component.html"),
            styles: [__webpack_require__(/*! ./flexlayout.component.css */ "./src/app/flexlayout/flexlayout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FlexlayoutComponent);
    return FlexlayoutComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"login()\" class=\"btn btn-primary\">\n  Login with Google</button>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(afauth) {
        this.afauth = afauth;
    }
    LoginComponent.prototype.login = function () {
        this.afauth.login();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/my-orders/my-orders.component.css":
/*!***************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/my-orders/my-orders.component.html":
/*!****************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  my-orders works!\n</p>\n"

/***/ }),

/***/ "./src/app/my-orders/my-orders.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-orders/my-orders.component.ts ***!
  \**************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent() {
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
    };
    MyOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__(/*! ./my-orders.component.html */ "./src/app/my-orders/my-orders.component.html"),
            styles: [__webpack_require__(/*! ./my-orders.component.css */ "./src/app/my-orders/my-orders.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-toggle {\r\n  cursor: pointer;\r\n}\r\n.navbar-brand {\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand \" routerLink=\"/\">\n      <i class=\"fa fa-leaf\"></i>\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#drop\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"drop\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/shopping-cart\">\n            <i class=\"fa fa-shopping-cart\"></i>\n            <span class=\"badge badge-warning ml-1 \">{{cart}}</span>\n          </a>\n        </li>\n\n\n      </ul>\n      <ul class=\"navbar-nav \">\n        <ng-template #anonymousUser>\n          <li class=\"nav-item \">\n            <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n          </li>\n        </ng-template>\n        <li *ngIf=\"auth.user$ | async as user; else anonymousUser\" ngbDropdown class=\"nav-item dropdown\">\n          <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{user.displayName}}</a>\n          <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n            <a class=\"dropdown-item\" routerLink=\"/my/orders\">My Orders</a>\n            <a class=\"dropdown-item\" routerLink=\"/admin/orders\">Manage Orders</a>\n            <a class=\"dropdown-item\" routerLink=\"//admin/products\">Manage Products</a>\n            <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n</nav>\n\n\n\n<!-- /.container -->"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
        this.cart = 3;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.log = this.auth.isloggedin();
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/order-success/order-success.component.css":
/*!***********************************************************!*\
  !*** ./src/app/order-success/order-success.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order-success/order-success.component.html":
/*!************************************************************!*\
  !*** ./src/app/order-success/order-success.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  order-success works!\n</p>\n"

/***/ }),

/***/ "./src/app/order-success/order-success.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order-success/order-success.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function() { return OrderSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderSuccessComponent = /** @class */ (function () {
    function OrderSuccessComponent() {
    }
    OrderSuccessComponent.prototype.ngOnInit = function () {
    };
    OrderSuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-success',
            template: __webpack_require__(/*! ./order-success.component.html */ "./src/app/order-success/order-success.component.html"),
            styles: [__webpack_require__(/*! ./order-success.component.css */ "./src/app/order-success/order-success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderSuccessComponent);
    return OrderSuccessComponent;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(db) {
        this.db = db;
    }
    ProductService.prototype.create = function (product) {
        this.db.list("/products").push(product);
    };
    ProductService.prototype.getAll = function () {
        return this.db.list("/products");
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_node_modules_angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-footer {\r\n  padding: 0;\r\n}\r\n.sticky-top {\r\n  top: 80px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row \">\n  <div class=\"col-3 \">\n    <div class=\"list-group sticky-top \">\n      <a routerLink=\"/\" [class.active]=\"category === c.id\" [queryParams]=\"{category: c.id}\" *ngFor=\"let c of categories\" class=\"list-group-item \">{{c.name}}</a>\n    </div>\n  </div>\n  <div class=\"col-9\">\n    <div class=\"row\">\n      <ng-container *ngFor=\"let p of products; let i = index\">\n        <div class=\"col\">\n          <div class=\"card\" style=\"width: 15rem;\">\n            <img class=\"card-img-top\" [src]=\"p.imageUrl\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{p.title}}</h5>\n              <p class=\"card-text\">{{p.price | currency:\"USD\": \"symbol\"}}</p>\n              <div class=\"card-footer \">'\n                <button href=\"#\" (click)=\"addtocart(product)\" class=\"btn btn-primary btn-block\">Add to Cart</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"(i + 1) % 2 === 0\" class=\"w-100\"></div>\n      </ng-container>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shopping-cart.service */ "./src/app/shopping-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(cartservice, route) {
        this.cartservice = cartservice;
        this.route = route;
        this.categories = [
            { id: "ladieswear", name: "Ladies Wear" },
            { id: "laptop", name: "Laptops" },
            { id: "iphone", name: "Iphones" },
            { id: "shoe", name: "Shoes" },
            { id: "bread", name: "Bread" },
            { id: "dairy", name: "Dairy" },
            { id: "fruits", name: "Fruits" },
            { id: "seasonings", name: "Seasonings and Spices" },
            { id: "vegetables", name: "Vegetables" }
        ];
        this.products = [
            {
                category: "Wears",
                imageUrl: "https://cdn.shopify.com/s/files/1/0987/4618/products/Women-Elegant-Vintage-Autumn-Polka-Dot-Turn-Down-Collar-Belted-Wear-To-Work-Office-Casual-Long_aa86bf78-ba1f-48f0-8bf3-7b61d49cb6b8_grande.jpg?v=1514633750",
                price: 50,
                title: "Ladies Wears"
            },
            {
                category: "laptops",
                imageUrl: "https://cnet2.cbsistatic.com/img/C3RPtt8a_n1be4azT8jokd9vhsM=/1600x900/2016/07/21/d90577a0-8dc3-426a-889f-b3c29bbc9b17/4-laptops-dan-02.jpg",
                price: 1500,
                title: "Laptops"
            },
            {
                category: "phones",
                imageUrl: "https://amp.businessinsider.com/images/59c29dcb2488492b395ca43e-750-487.jpg",
                price: 1000,
                title: "Iphone"
            },
            {
                category: "shoes",
                imageUrl: 
                // tslint:disable-next-line:max-line-length
                "https://bluewater.co.uk/sites/bluewater/files/styles/whats_on_gallery_large/public/images/shops/gallery/office_aw16_1_1600x1600.jpg?itok=-xaVUtfn",
                price: 200,
                title: "Shoes"
            },
            {
                category: "vegetables",
                imageUrl: "http://www.publicdomainpictures.net/pictures/170000/velka/spinach-leaves-1461774375kTU.jpg",
                price: 2.5,
                title: "Spinach"
            },
            {
                category: "bread",
                imageUrl: "https://static.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg",
                price: 3,
                title: "Freshly Baked Bread"
            },
            {
                category: "fruits",
                imageUrl: "https://pixnio.com/free-images/2017/03/17/2017-03-17-09-15-56.jpg",
                price: 1.75,
                title: "Avacado"
            },
            {
                category: "vegetables",
                imageUrl: "https://static.pexels.com/photos/8390/food-wood-tomatoes.jpg",
                price: 2.5,
                title: "Tomato"
            },
            {
                category: "vegetables",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Lettuce_Mini_Heads_%287331119710%29.jpg",
                price: 1,
                title: "Lettuce"
            },
            {
                category: "vegetables",
                // tslint:disable-next-line:max-line-length
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Cauliflowers_-_20051021.jpg/1280px-Cauliflowers_-_20051021.jpg",
                price: 1.75,
                title: "Cauliflower"
            },
            {
                category: "fruits",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bananas.jpg/1024px-Bananas.jpg",
                price: 1.25,
                title: "Banana"
            },
            {
                category: "fruits",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",
                price: 1.7,
                title: "Orange"
            },
            {
                category: "fruits",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
                price: 2,
                title: "Apple"
            },
            {
                category: "fruits",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/36/Kyoho-grape.jpg",
                price: 2,
                title: "Grape"
            },
            {
                category: "fruits",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Autumn_Red_peaches.jpg",
                price: 2,
                title: "Peach"
            },
            {
                category: "seasonings",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cinnamon-other.jpg",
                price: 0.5,
                title: "Cinnamon Sticks"
            },
            {
                category: "seasonings",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Saffron_Crop.JPG",
                price: 3,
                title: "Saffron"
            },
            {
                category: "seasonings",
                imageUrl: "http://maxpixel.freegreatpicture.com/static/photo/1x/Seasoning-Powder-Curry-Spice-Ingredient-Turmeric-2344157.jpg",
                price: 0.75,
                title: "Ground Turmeric"
            },
            {
                category: "seasonings",
                imageUrl: "http://maxpixel.freegreatpicture.com/static/photo/1x/Ingredient-Herb-Seasoning-Seeds-Food-Coriander-390015.jpg",
                price: 0.5,
                title: "Coriander Seeds"
            },
            {
                category: "bread",
                imageUrl: 
                // tslint:disable-next-line:max-line-length
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Fabrication_du_lavash_%C3%A0_Noravank_%286%29.jpg/1280px-Fabrication_du_lavash_%C3%A0_Noravank_%286%29.jpg",
                price: 1.25,
                title: "Lavash Bread"
            },
            {
                category: "bread",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Bagel-Plain-Alt.jpg",
                price: 1,
                title: "Bagel Bread"
            },
            {
                category: "fruits",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Strawberries.jpg",
                price: 1.95,
                title: "Strawberry"
            },
            {
                category: "bread",
                imageUrl: "https://static.pexels.com/photos/416607/pexels-photo-416607.jpeg",
                price: 1.25,
                title: "Baguette Bread"
            }
        ];
        this.category = cartservice.create();
    }
    ProductsComponent.prototype.ngOnInit = function () { };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-products",
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"],
            _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/shopping-cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/shopping-cart.service.ts ***!
  \******************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(db) {
        this.db = db;
    }
    ShoppingCartService.prototype.create = function () {
        this.db.list("/shopping-cart").push({
            dateCreated: new Date().getTime()
        });
    };
    ShoppingCartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_node_modules_angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.html":
/*!************************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Shopping Cart</h1>\n<p>\n  You have {{cartno}} items in your shopping cart.\n</p>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Products</th>\n      <th>Quantity</th>\n      <th></th>\n    </tr>\n  </thead>\n</table>"

/***/ }),

/***/ "./src/app/shopping-cart/shopping-cart.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shopping-cart/shopping-cart.component.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(component) {
        this.component = component;
        this.cartno = component.cart;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () { };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-shopping-cart",
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(db) {
        this.db = db;
    }
    UserService.prototype.save = function (user) {
        this.db.object("/users/" + user.uid).update({
            name: user.displayName,
            email: user.email
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_node_modules_angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyA-zeuobdzrh8LSDXdXfYZkP3e_lRD3rJM",
        authDomain: "appdb-69b3e.firebaseapp.com",
        databaseURL: "https://appdb-69b3e.firebaseio.com",
        projectId: "appdb-69b3e",
        storageBucket: "",
        messagingSenderId: "394123989077"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DE\Desktop\E-CommerceApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map