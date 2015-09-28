function Director(Dname, Dquotes[])
    {
        this.name = Dname;
        this.quotes = null;

    }
    Director.prototype = {
        setName: function(dName) {
            this.name = dName;
        },
        getName: function() {
            return this.name;
        },
        setQuotes: function(Dquotes) {
            this.quotes = Dquotes;
        },
        getQuotes: function() {
            return this.quotes;
        }
        speak:function(){
        var i = Math.floor(Math.random() * this.quotes.length);
        var Direc1 = this.name + "dijo: " + this.quotes[i];
        return Direc1;

        }
     } 

	module.exports = Director; //exporto el modulo