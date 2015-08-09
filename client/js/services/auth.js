angular
  .module('app')
  .factory('AuthService', ['Reviewer', '$q', '$rootScope', function (User, $q,
                                                                     $rootScope) {
    function login(email, password) {
      return User
        .login({email: email, password: password})
        .$promise
        .then(function (response) {
          $rootScope.currentUser = {
            id: response.user.id,
            tokenId: response.id,
            email: email
          };
          localStorage.setItem('currentUser', JSON.stringify($rootScope.currentUser));
        });
    }

    function logout() {
      return User
        .logout()
        .$promise
        .then(function () {
          $rootScope.currentUser = null;
          localStorage.clear();
        });
    }

    function register(email, password) {
      return User
        .create({
          email: email,
          password: password
        })
        .$promise;
    }

    return {
      login: login,
      logout: logout,
      register: register
    };
  }]);
