'use strict';

/**
 * @ngdoc function
 * @name angularPolymerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPolymerApp
 */
angular.module('angularPolymerApp')
  .controller('MainCtrl', function ($scope,$filter) {
    $scope.name = "asd";
    $scope.advengers = [];

    $scope.advengers.push({
    	avatar : 'http://www.dealante.com/upload/avatars/16333.jpg',
    	name : 'Iron Man',
    	phrase : 'hey oh, lest go',
    	latitude : '37.74493',
    	longitude : '-120.41942',
        icon : 'http://www.juegosdevengadores.com/wp-content/uploads/2011/11/Ironman-Makluan195x110-36x36.jpg'

    });   

    $scope.advengers.push({
    	avatar: 'http://1.bp.blogspot.com/-goCyDVxTpJw/T94VyC1HuPI/AAAAAAAAAjk/Gg54BXrl1cc/s1600/CptAmericaAvatar3_web.jpg',
    	name : 'Captain America',
    	phrase : 'Delete the database',
    	latitude : '37.77493',
    	longitude : '-121.41942',
        icon : 'http://www.gameteep.net/wp-content/uploads/2014/03/Captain-America-The-Winter-Soldier-Icon-36x36.jpg'
    });

    $scope.advengers.push({
	 	avatar: 'http://www.chw.net/foro/customavatars/avatar4929_4.gif',
	 	name : 'Thor',
    	phrase : 'Me llamo ralph',
    	latitude : '37.72493',
    	longitude : '-122.11942',
        icon : 'http://www.juegosdevengadores.com/wp-content/uploads/2011/09/Thor-640x300-36x36.jpg'
    });
    

    $scope.advengers.push({
    	avatar: 'http://4.bp.blogspot.com/-BXNggDlyqKI/ULmTJI8tpHI/AAAAAAAAAAc/95Cm-t65ZX4/s500/hulk.jpg',
	 	name : 'Hulk',
    	phrase : 'Fuck you!',
    	latitude : '37.54493',
    	longitude : '-121.71942',
        icon : 'http://www.juegosdevengadores.com/wp-content/uploads/2011/09/Thor-640x300-36x36.jpg'
    }); 

    $scope.advengers.push({
    	avatar: 'http://www.tumbaabierta.com/wp-content/uploads/2011/06/exhumador_avatar.gif',
	 	name : 'Ant man',
    	phrase : 'lorem ipsum',
    	latitude : '37.24493',
    	longitude : '-121.11942',
        icon : 'http://www.juegosdevengadores.com/wp-content/uploads/2012/09/hulk195x1101-36x36.jpg'
    });  

    $scope.advengers.push({
    	avatar: 'http://www.starburstmagazine.com/images/feb2012/avengers_black_widow_header.jpg',
	 	name : 'Black Widow',
    	phrase : 'lorem ipsum',
    	latitude : '37.11493',
    	longitude : '-122.121942',
        icon : 'http://speedzauto.com/wp-content/uploads/2014/02/Black-Widow-011-36x36.jpg'
    });   

    $scope.advengers.push({
    	avatar: 'http://www.ikoncollectables.com.au/images/SID300135-Avengers-Vision-Premium-Format-A_2.png',
	 	name : 'Vision',
    	phrase : 'I see you',
    	latitude : '37.84493',
    	longitude : '-121.99942',
        icon : 'http://static.tvtome.com/images/user_icons/comics/15.gif'
    });
    
    $scope.advengers.push({
    	avatar: 'http://neverdiemusic.com/wp-content/uploads/2013/12/hawkeye_p__series_by_thuddleston-d36b2ln.jpg',
	 	name : 'Hawkeye',
    	phrase : '...',
    	latitude : '37.20493',
    	longitude : '-122.121942',
        icon : 'http://www.juegosdevengadores.com/wp-content/uploads/2012/07/Hawkeye1-195x110-36x36.jpg'
    });


    $scope.$on('heroValueChange',function(event,value){
        console.log("searching "+value);
        $scope.hero = value;
        $scope.$apply();
    });
    
  });
