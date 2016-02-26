/* Creates a local storage instance ‐ this is what you need to implement in this exercise */

var getStorageManager = function getStorageManager (){
  var obj =  Object.create(getStorageManager.prototype);
  obj.expirations = {}; 
  return obj;
}



getStorageManager.prototype.set = function(key, value, expiry){
  localStorage.setItem(key,JSON.stringify(value));
  this.expirations[key] = Date.now() + expiry*1000;
}

getStorageManager.prototype.get = function (key){
  var a = JSON.parse(localStorage.getItem(key));
  var isNotExpired = this.expirations[key] > Date.now();
  // console.log("this.expirations[key]",this.expirations[key], "isNotExpired", isNotExpired)
  if (a !== null && isNotExpired){
    return a;
  } else {
    this.remove(key);
    return undefined;
  }
}


getStorageManager.prototype.remove = function (key){
  localStorage.removeItem(key);
}

getStorageManager.prototype.setProperty = function (key, property, value, expiry){
  var oldVal;

  if (this.get(key) === undefined){
    oldVal = undefined;
  } else {
    oldVal = this.get(key);
  }


  if (Array.isArray(oldVal)){
    //do nothing
  } else if (typeof oldVal === "object"){
    // this.set(key, value, expiry);
    oldVal[property] = value;
    this.set(key, oldVal, expiry);
  } else if (oldVal === undefined){
    var obj = {};
    obj[property] = value;
    this.set(key, obj, expiry);
  } else {
    throw "exception";
  }

}



storageManager = getStorageManager();
