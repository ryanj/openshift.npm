/**
 * This project is mostly just a placeholder for future 'openshift' npm module work. 
 * @author TBD
 */
var request = require('request'),
  _ = require('underscore'),

exports = module.exports = function (setup) {
  if(typeof setup !== "object"){ var setup = {};}
  var env =  process.env,
    ip  =  setup.ip   || process.env.OPENSHIFT_NODEJS_IP   || '127.0.0.1',
    port = setup.port || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    cloud_domain = setup.domain || '.rhcloud.com',
    hostname = dns = setup.hostname || process.env.OPENSHIFT_APP_DNS   || 'http://localhost',
    siblings = [],
    scale_up = function(){
      // Stubbing out this function, we should hit the API
      console.log('scale up');
      //haproxy_ctld --up
    },
    scale_down = function(){
      // Stubbing out this function, we should hit the API
      console.log('scale down');
      //haproxy_ctld --down
    },
    scale_min = function(min){
      if(min){
        // Stubbing out this function, we should hit the API
        console.log('setting min scale to: ' + min);
        //rhc cartridge-scale nodejs-0.6 -a nodefly --min 3 --max 5
      }
    },
    scale_max = function(max){
      if(max){
        // Stubbing out this function, we should hit the API
        console.log('setting max scale to: ' + max);
        //rhc cartridge-scale nodejs-0.6 -a nodefly --min 3 --max 5
      }
    },
    scale_limits = function(min, max){
      this.scale_min(min);
      this.scale_max(max); 
    },
    auto_scale = function( true_false ){
      if(true_false === false || true_false == 'off'){
        this.auto_scale_off();
      }else{
        this.auto_scale_on();
      }
    },
    auto_scale_on = function(){
      // Stubbing out this function, we should hit the API
      console.log('autoscale on');
      // haproxy_ctld --up
      // haproxy_ctld_daemon --start 
    },
    auto_scale_off = function(){
      // Stubbing out this function, we should hit the API
      console.log('autoscale off');
      // haproxy_ctld --down
      // haproxy_ctld_daemon --stop 
    },
    parse_csv = function(lines, cb){
      // use through here?
      var clones = [];
      _.each(lines, function(line){
        var gear_name = line.split(',')[1];
        if( typeof gear_name == 'string' && gear_name.indexOf('gear-') !== -1 ){
          clones.push( "http://" + gear_name.substr(5) + cloud_domain);
        }
      });
      siblings = clones;
      cb(siblings);
    },
    refresh_groups = function(cb){
      request(this.hostname + '/haproxy-status/;csv', function(error, response, body){
        if (!error && response.statusCode == 200) {
          parse_csv( body.split('\n'), cb);
        }
      });
    };

  var expose = {
    ip: ip,
    env: env,
    dns: dns,
    port: port,
    siblings: [],
    hostname: hostname,
    scale_up: scale_up,
    scale_min: scale_min,
    scale_max: scale_max,
    scale_down: scale_down,
    scale_limits: scale_limits,
    auto_scale: auto_scale,
    refresh_groups: refresh_groups
  };
  return expose;
};
