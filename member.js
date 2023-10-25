function skillsMember() {
    return {
        restrict: 'E', 
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillersMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '-'
        }
    };
}