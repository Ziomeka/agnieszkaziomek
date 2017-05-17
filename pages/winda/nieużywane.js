 var algorytmMaxPietro2=function(winda){
                var rozkladPasazerow=JSON.parse(JSON.stringify(winda));
                var algorytm=[];
                var pie=[0];
                var os=[0];
                var max=max_pietro(rozkladPasazerow);
                var osobyAkt=0;

                function max_pietro(konf){
                    var i=5;
                    while (konf[i]<=0)
                    {
                        i--;
                    }
                    return i;
                };

                while (max>0){
                    pie.push(max);
                    if (8-osobyAkt>rozkladPasazerow[max]) {
                        os.push(rozkladPasazerow[max]);
                        osobyAkt=osobyAkt+rozkladPasazerow[max];
                        rozkladPasazerow[max]=0;
                    }
                    else
                    {
                        os.push(8-osobyAkt);
                        rozkladPasazerow[max]=rozkladPasazerow[max]-(8-osobyAkt);
                        pie.push(0);
                        os.push(8);
                        osobyAkt=0;
                    };
                    max=max_pietro(rozkladPasazerow);
                }
                pie.push(0);
                os.push(osobyAkt)
                console.log(pie);
                console.log(os);
                for (var i=0; i<os.length; i++)
                {
                    algorytm[i]=[pie[i],os[i]];
                    console.log(algorytm[i]);
                }
                
                return algorytm;
                
    };

        function max_pietro(x) {
            var i = 5;
            while (x[i] <= 0) {
                i--;
            }
            return i;
        };

//var pietro_w_gore2=function(){
//            czas=czas+1;
//            pietro=pietro+1;
//            var print=function(){ $(".result").append("<p>Jazda na pietro: " + this.p); draw(this.p);}.bind({p:pietro});
//            setTimeout(print, czas*1000);
//           
//        };