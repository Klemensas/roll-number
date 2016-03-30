'use strict';
var rollNumber = function(format) {
    var Roller = {
        rollQueue: [],
        bidFormat: format || function(no) { return no; },
        frames: 125, // max amount of iterations in half a second due to setTimeout min cap of 4ms
        addToQueue: function(where, from, to) {
            if (!from) {
                from = 0;
            }
            if(!!where[0] && typeof where !== 'string') {
              where = where[0];
            }
            var increment = (to - from) / this.frames;
            this.rollQueue.push({ where: where, from: from, to: to, increment: increment });
            // Process item if there is no queue
            if (this.rollQueue.length === 1) {
                where.classList.add('rolling');
                this.processQueue(where, from, to, increment, 0);
            }
        },
        removeFromQueue: function() {
            this.rollQueue.shift();
            // Keep processing until queue is empty
            if (this.rollQueue.length) {
                this.processQueue(this.rollQueue[0].where, this.rollQueue[0].from, this.rollQueue[0].to, this.rollQueue[0].increment, 0);
            }
        },
        processQueue: function(where, from, to, increment, iteration) {
            from += increment;
            iteration++;
            if (iteration < this.frames) {
                where.innerHTML = this.bidFormat(from) || from;
                setTimeout(this.processQueue.bind(this), 0, where, from, to, increment, iteration);
            } else {
                where.innerHTML = this.bidFormat(to) || to;
                where.classList.remove('rolling');
                this.removeFromQueue();
            }
        }
    };
    return Roller;
};