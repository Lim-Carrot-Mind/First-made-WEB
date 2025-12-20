            // 객체 설정.....
            var Body = {
                SetColor: function(color) 
             { document.querySelector('body').style.color=color;}
                ,
                BackgroundColor: function(color)
             { document.querySelector('body').style.backgroundColor=color;} 
            }

            var Links = {
                SetColor: function (color) 
             {var alist=document.querySelectorAll('a');
                        var i=0;
                        while(i<alist.length)
                        {alist[i].style.color=color;
                        i=i+1} }
            } // 객체 활용 위 내용..


             /* function LinksSetColor(color) 
             {var alist=document.querySelectorAll('a');
                        var i=0;
                        while(i<alist.length)
                        {alist[i].style.color=color;
                        i=i+1} }

             function BodySetColor(color) 
             { document.querySelector('body').style.color=color;}
             function BodyBackgroundColor(color) 
             { document.querySelector('body').style.backgroundColor=color;}  이것들은 기존 함수..*/


             function NightDayHandler(self) 
             {
                 const target = document.querySelector('body') ;
                if(self.value === 'night')
                    {
                    Body.BackgroundColor('black');
                    Body.SetColor('white');
                    self.value='day';

                    Links.SetColor('skyblue');
                    }
                
                else
                    {
                    Body.BackgroundColor('white');
                    Body.SetColor('black');
                    self.value='night';

                    Links.SetColor('blue');
                    }
             }