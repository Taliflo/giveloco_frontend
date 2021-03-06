'use strict';

function exploreRoutes($stateProvider) {

    var explore = {
            name: 'explore',
            abstract: true,
            url: '/explore?q&reset',
            template: '<div ui-view></div>',
            controller:'ExploreCtrl'
        },
        exploreBusinesses = {
            name: 'explore.businesses',
            url: '/businesses',
            template: '<div explore-businesses></div>',
            data: {
                moduleClasses: 'explore',
                pageClasses: 'businesses',
                pageTitle: 'Explore Businesses',
                pageDescription: 'Explore Businesses on GiveLoco and donate to their supported causes and be rewarded with store credit.'
            }
        },
        exploreCauses = {
            name: 'explore.causes',
            url: '/causes',
            template: '<div explore-causes></div>',
            data: {
                moduleClasses: 'explore',
                pageClasses: 'causes',
                pageTitle: 'Explore Causes',
                pageDescription: 'Explore Causes on GiveLoco and donate to receive store credit that can be redeemed at the cause\'s sponsors.'
            }
        },
        redeemCredits = {
            name: 'explore.redeem',
            url: '/redeemable',
            template: '<div explore-redeem-credits></div>',
            data: {
                moduleClasses: 'explore',
                pageClasses: 'redeem-credits',
                pageTitle: 'Redeem Credits',
                pageDescription: 'Choose businesses on GiveLoco in which to redeem your store credit.'
            }
        };

    $stateProvider.state(explore);
    $stateProvider.state(exploreBusinesses);
    $stateProvider.state(exploreCauses);
    $stateProvider.state(redeemCredits);

}

exploreRoutes.$inject = ['$stateProvider'];
module.exports = exploreRoutes;
