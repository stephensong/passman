angular.module('templates-main', ['views/vaults.html']);

angular.module('views/vaults.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('views/vaults.html',
    '<div class="vault_wrapper"><div class="vaults" ng-if="!list_selected_vault && !creating_vault"><div class="ui-select-container ui-select-bootstrap vaultlist"><ul><li ng-click="newVault()">+ Create a new vault</li><li ng-repeat="vault in vaults" ng-class="{\'selected\': vault == list_selected_vault }" ng-click="selectVault(vault)"><div><span class="ui-select-choices-row-inner"><div class="ng-binding ng-scope">{{vault.name}}</div><small class="ng-binding ng-scope">Created: {{vault.created * 1000 | date:\'dd-MM-yyyy @ HH:mm:ss\'}} | Last accessed: {{vault.last_access * 1000 | date:\'dd-MM-yyyy @ HH:mm:ss\'}}</small></span></div></li></ul></div></div><div ng-if="creating_vault"><div class="login_form">Please give your new vault a name.<div><input type="text"></div><div class="button_wrapper"><div class="button button-geen">Create vault</div><div class="button button-red" ng-click="clearState()">Cancel</div></div></div></div><div ng-if="list_selected_vault != false"><div class="vaultlist"><ul><li ng-click="clearState()">Go back to vaults</li></ul></div><div class="login_form">Please input the password for {{list_selected_vault.name}}<div><input type="password"></div><div><div><label><input type="checkbox" ng-model="default_vault"> Set this vault as default.</label></div><div><label><input type="checkbox" ng-model="remember_vault_password"> Login automatically to this vault.</label></div></div><div class="button button-geen">Decrypt vault</div></div></div></div>');
}]);
