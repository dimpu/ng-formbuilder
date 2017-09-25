import SignaturePad from 'szimek/signature_pad';

let appSignatureFieldLink = ($scope, $element, $attrs ,controller) => {
  controller.ngSignature  = new SignaturePad($element[0], {});
};

export default appSignatureFieldLink;
