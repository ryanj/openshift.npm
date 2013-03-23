/**
 * This project is currently just a placeholder helping to ensure that the 'openshift' npm module is actually controlled by folks in the OpenShift team. 
 * @author TBD
 */
var openshift = function (setup) {
    //process array of setup vars, command line args, config files
    // establish a consistent internal variable configuration
    if (!(this instanceof openshift)) {
        return new openshift(setup);
    }
};

openshift.prototype = {
    //shared functions and static vars
};

(function(){
  // init()
}());

module.exports = openshift;
