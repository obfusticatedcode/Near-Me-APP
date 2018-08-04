app.factory('places', ['$http',
  function ($http) {
    var baseUrl = 'https://en.wikipedia.org/';
    var url = baseUrl + 'w/api.php?action=query&list=geosearch&gsradius=5000&gscoord=40.741934%7C-74.004897&gslimit=30&format=json&callback=JSON_CALLBACK';
    return $http.jsonp(url)
      .success(function (data) {
        return data;
      })
      .error(function (err) {
        return err;
      });
  }
]);