function Stopwatch () {
    let tStart, tEnd, running = false, duration = 0

    this.start = function () {
       if (running) {
           throw new Error ('Stopwatch is already running')
       }
       running = true
        tStart = new Date().getTime()

    }

    this.stop = function () {
        if (!running) {
            throw new Error ('Stopwatch has not started')
        }
        running = false
        tEnd = new Date().getTime()
        duration += (tEnd - tStart)/1000
    }

    this.reset = function () {
        tStart = null
        tEnd = null
        running = false
        duration = 0
    }

    Object.defineProperty (this, 'duration', {
        get: function () {
            return duration
        }
    })



}
