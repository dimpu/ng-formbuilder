class AppHeaderController {
    constructor($uibModal) {
        this.$uibModal = $uibModal;
        this.name = 'app-header';
    }

    openCreateFormModal() {
        var modalInstance = this.$uibModal.open({
            component: 'createForm',
            resolve: {

            }
        });

        modalInstance.result.then(function (selectedItem) {
            //   $ctrl.selected = selectedItem;
        }, function () {
            //   $log.info('modal-component dismissed at: ' + new Date());
        });
    };




}


export default AppHeaderController;
