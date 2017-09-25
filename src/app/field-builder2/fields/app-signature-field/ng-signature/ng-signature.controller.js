class NgSignatureController {
	constructor($scope){
		this.$scope = $scope;
	}

	save(){
		return this.ngSignature.toDataURL();
	}

	clear(){
		this.ngSignature.clear();
	}

}


export default NgSignatureController;
