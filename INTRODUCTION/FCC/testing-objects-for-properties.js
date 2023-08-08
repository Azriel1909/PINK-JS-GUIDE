function checkObj(obj, checkProp) {
  var result = obj.hasOwnProperty(checkProp);
  
  if (result == true) {
    return obj[checkProp];
  } else {
    return 'Not Found';
  }
}