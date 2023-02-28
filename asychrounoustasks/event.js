// var event=require('events');
// var em=new event.EventEmitter();
// em.on('Firstevent',function(data)
// {
// console.log("first subsciber :"+data);
// });
// em.emit('Firstevent','This is my first event nodejs ');
//=======================================================================
// var emitter = require('events').EventEmitter;

// var em = new emitter();

// //Subscribe FirstEvent
// em.addListener('FirstEvent', function (data) {
//     console.log('First subscriber: ' + data);
// });

// //Subscribe SecondEvent
// em.on('SecondEvent', function (data) {
//     console.log('First subscriber: ' + data);
// });

// // Raising FirstEvent
// em.emit('FirstEvent', 'This is my first Node.js event emitter example.');

// // Raising SecondEvent
// em.emit('SecondEvent', 'This is my second Node.js event emitter example.');
//===============output
// First subscriber: This is my first Node.js event emitter example.
// First subscriber: This is my second Node.js event emitter example.
//=================================================Returned EventEmitter class===========
// var emitter = require('events').EventEmitter;

// function LoopProcessor(num) {
//     var e = new emitter();
    
//     setTimeout(function () {
        
//         for (var i = 1; i <= num; i++) {
//             e.emit('BeforeProcess', i);
            
//             console.log('Processing number:' + i);
            
//             e.emit('AfterProcess', i);
//         }
//     }
//     , 2000)
    
//     return e;
// }
// var lp = LoopProcessor(3);

// lp.on('BeforeProcess', function (data) {
//     console.log('About to start the process for ' + data);
// });

// lp.on('AfterProcess', function (data) {
//     console.log('Completed processing ' + data);
// });
//output============
// About to start the process for 1
// Processing number:1
// Completed processing 1
// About to start the process for 2
// Processing number:2
// Completed processing 2
// About to start the process for 3
// Processing number:3
// Completed processing 3
//===========================================================Extend EventEmitter class
var emitter = require('events').EventEmitter;

var util = require('util');

function LoopProcessor(num) {
    var me = this;

    setTimeout(function () {
        
        for (var i = 1; i <= num; i++) {
            me.emit('BeforeProcess', i);
            
            console.log('Processing number:' + i);
            
            me.emit('AfterProcess', i);
        }
    }
    , 2000)
        
    return this; 
}

util.inherits(LoopProcessor, emitter)

var lp = new LoopProcessor(3);

lp.on('BeforeProcess', function (data) {
    console.log('About to start the process for ' + data);
});

lp.on('AfterProcess', function (data) {
    console.log('Completed processing ' + data);
});
//Output============
// About to start the process for 1
// Processing number:1
// Completed processing 1
// About to start the process for 2
// Processing number:2
// Completed processing 2
// About to start the process for 3
// Processing number:3
// Completed processing 3
//=========================================================