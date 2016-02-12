
var isArrayEntry = function(notation){
  return notation.indexOf('[') > -1 && notation.indexOf(']') > -1;
};

var setVal = function(obj, notation, val) {
  if (!obj) {
    return undefined;
  }

  var props = notation.split('.');
  var retObj = obj;
  var prop = "";
  var i = 0;
  var lastItem = false;
  do {
    prop = props[i];

    if (i+1 === props.length) {
      lastItem = true;
    }

    if (isArrayEntry(prop)) {
      var propN = prop.substring(0, prop.indexOf('['));
      var propI = prop.charAt(prop.length -2);

      if (lastItem) {
        retObj[propN][propI] = val;
      } else {
        retObj = retObj[propN][propI];
      }

    }else {
      if (lastItem){
        retObj[prop] = val;
      } else {
        retObj = retObj[prop];
      }
    }
    i++;

  } while (i < props.length );

};

var getVal = function(obj, notation){
  if (!obj) {
    return undefined;
  }

  var props = notation.split('.');
  var retObj = obj;
  var prop = "";
  var i = 0;
  do {
    prop = props[i];

    if (isArrayEntry(prop)) {
      var propN = prop.substring(0, prop.indexOf('['));
      var propI = prop.charAt(prop.length -2);
      retObj = retObj[propN][propI];
    }else {
      retObj = retObj[prop];
    }
    i++;

  } while (i < props.length );

  return retObj;

};

module.exports = {
  setVal : setVal,
  getVal : getVal
};

