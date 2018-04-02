angular.module("pemrograman_dasar", ["ngCordova","ionic","ionMdInput","ionic-material","ion-datetime-picker","ionic.rating","utf8-base64","angular-md5","chart.js","pascalprecht.translate","tmh.dynamicLocale","ionicLazyLoad","pemrograman_dasar.controllers", "pemrograman_dasar.services"])
	.run(function($ionicPlatform,$window,$interval,$timeout,$ionicHistory,$ionicPopup,$state,$rootScope){

		$rootScope.appName = "Pemrograman Dasar" ;
		$rootScope.appLogo = "data/images/header/logo23.png" ;
		$rootScope.appVersion = "1.0" ;
		$rootScope.headerShrink = false ;

		$ionicPlatform.ready(function() {
			//required: cordova plugin add ionic-plugin-keyboard --save
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}

			//required: cordova plugin add cordova-plugin-statusbar --save
			if(window.StatusBar) {
				StatusBar.styleDefault();
			}

			//required: cordova plugin add cordova-plugin-network-information --save
			$interval(function(){
				if ( typeof navigator == "object" && typeof navigator.connection != "undefined"){
					var networkState = navigator.connection.type;
					if (networkState == "none") {
						$window.location = "retry.html";
					}
				}
			}, 5000);

		});
		$ionicPlatform.registerBackButtonAction(function (e){
			if($ionicHistory.backView()){
				$ionicHistory.goBack();
			}else{
				$state.go("pemrograman_dasar.dashboard");
			}
			e.preventDefault();
			return false;
		},101);
	})


	.filter("to_trusted", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])

	.filter("trustUrl", function($sce) {
		return function(url) {
			return $sce.trustAsResourceUrl(url);
		};
	})

	.filter("trustJs", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsJs(text);
		};
	}])

	.filter("strExplode", function() {
		return function($string,$delimiter) {
			if(!$string.length ) return;
			var $_delimiter = $delimiter || "|";
			return $string.split($_delimiter);
		};
	})

	.filter("strDate", function(){
		return function (input) {
			return new Date(input);
		}
	})
	.filter("strHTML", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])
	.filter("strEscape",function(){
		return window.encodeURIComponent;
	})
	.filter("strUnscape", ["$sce", function($sce) {
		var div = document.createElement("div");
		return function(text) {
			div.innerHTML = text;
			return $sce.trustAsHtml(div.textContent);
		};
	}])

	.filter("objLabel", function(){
		return function (obj) {
			var new_item = [];
			angular.forEach(obj, function(child) {
				new_item = [];
				var indeks = 0;
				angular.forEach(child, function(v,l) {
					if (indeks !== 0) {
					new_item.push(l);
				}
				indeks++;
				});
			});
			return new_item;
		}
	})
	.filter("objArray", function(){
		return function (obj) {
			var new_items = [];
			angular.forEach(obj, function(child) {
				var new_item = [];
				var indeks = 0;
				angular.forEach(child, function(v){
						if (indeks !== 0){
							new_item.push(v);
						}
						indeks++;
					});
					new_items.push(new_item);
				});
			return new_items;
		}
	})


.config(["$translateProvider", function ($translateProvider){
	$translateProvider.preferredLanguage("en-us");
	$translateProvider.useStaticFilesLoader({
		prefix: "translations/",
		suffix: ".json"
	});
}])


.config(function(tmhDynamicLocaleProvider){
	tmhDynamicLocaleProvider.localeLocationPattern("lib/ionic/js/i18n/angular-locale_{{locale}}.js");
	tmhDynamicLocaleProvider.defaultLocale("en-us");
})


.config(function($stateProvider, $urlRouterProvider,$sceDelegateProvider,$httpProvider,$ionicConfigProvider){
	try{
		// Domain Whitelist
		$sceDelegateProvider.resourceUrlWhitelist([
			"self",
			new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$'),
			new RegExp('^(http[s]?):\/\/(w{3}.)?w3schools\.com/.+$'),
		]);
	}catch(err){
		console.log("%cerror: %cdomain whitelist","color:blue;font-size:16px;","color:red;font-size:16px;");
	}
	$stateProvider
	.state("pemrograman_dasar",{
		url: "/pemrograman_dasar",
			abstract: true,
			templateUrl: "templates/pemrograman_dasar-side_menus.html",
			controller: "side_menusCtrl",
	})

	.state("pemrograman_dasar.about_us", {
		url: "/about_us",
		views: {
			"pemrograman_dasar-side_menus" : {
						templateUrl:"templates/pemrograman_dasar-about_us.html",
						controller: "about_usCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("pemrograman_dasar.dashboard", {
		url: "/dashboard",
		cache:false,
		views: {
			"pemrograman_dasar-side_menus" : {
						templateUrl:"templates/pemrograman_dasar-dashboard.html",
						controller: "dashboardCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("pemrograman_dasar.latihan", {
		url: "/latihan",
		cache:false,
		views: {
			"pemrograman_dasar-side_menus" : {
						templateUrl:"templates/pemrograman_dasar-latihan.html",
						controller: "latihanCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("pemrograman_dasar.pelajaran", {
		url: "/pelajaran",
		cache:false,
		views: {
			"pemrograman_dasar-side_menus" : {
						templateUrl:"templates/pemrograman_dasar-pelajaran.html",
						controller: "pelajaranCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("pemrograman_dasar.ringkasan", {
		url: "/ringkasan",
		cache:false,
		views: {
			"pemrograman_dasar-side_menus" : {
						templateUrl:"templates/pemrograman_dasar-ringkasan.html",
						controller: "ringkasanCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("pemrograman_dasar.slide_tab_menu", {
		url: "/slide_tab_menu",
		views: {
			"pemrograman_dasar-side_menus" : {
						templateUrl:"templates/pemrograman_dasar-slide_tab_menu.html",
						controller: "slide_tab_menuCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	$urlRouterProvider.otherwise("/pemrograman_dasar/dashboard");
});
