angular.module('app', ['mwFormBuilder', 'mwFormViewer', 'pascalprecht.translate', 'monospaced.elastic'])
    .config(function($translateProvider){
        $translateProvider.useStaticFilesLoader({
            prefix: '../dist/i18n/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
    })
    .controller('DemoController', function($q, $translate) {
        var ctrl = this;
        ctrl.languages = ['en', 'pl'];
        ctrl.formData = {};
        ctrl.formViewer = {};
        ctrl.formStatus= {};
        ctrl.responseData={};
        ctrl.showResponseRata=false;
        ctrl.saveResponse = function(){
            var d = $q.defer();
            var res = confirm("Response save success?");
            if(res){
                d.resolve(true);
            }else{
                d.reject();
            }

            return d.promise;
        };

        ctrl.onImageSelection = function (){

            var d = $q.defer();
            var src = prompt("Please enter image src");
            if(src !=null){
                d.resolve(src);
            }else{
                d.reject();
            }

            return d.promise;
        };

        ctrl.resetViewer = function(){
            if(ctrl.formViewer.reset){
                ctrl.formViewer.reset();
            }

        };

        ctrl.changeLanguage = function (languageKey) {
            $translate.use(languageKey);
        };
    });