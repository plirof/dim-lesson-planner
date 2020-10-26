//<script type="text/javascript">
/*
* pack_js_footer  (put this in same folder as parent html)
*
*
* Changes:
* ver201025b - eval (pack_refresh_browser.txt) execute commands dynamic (requires probeserver activated) (not implemented yet)
* ver201020c -norightclick -disable right click : eg http://192.168.1.200/tinymce_class/tinymce_template_form.html?file=temp_test01&norightclick
* ver190411 -noopengame (initial ver) (removes opengame -in case we run a plain Http server with no PHP)
* ver190410 -opengame (initial ver)
* ver190404 -showdiv
* ver190402 -all scripts are now in footer
* 
* example : index.html?showdiv5\&timer3\&probeserver , 
*/

    var first_click=true;
    var url_time_param=location.search.substring(1).indexOf("time");
    // (((((((((((((((((((  preset timers (((((((((((((((((((
    var additional_wait_time=0;
    var url_timer2=location.search.substring(1).indexOf("timer2");
    var url_timer3=location.search.substring(1).indexOf("timer3");
    var url_timer4=location.search.substring(1).indexOf("timer4");
    var url_timer5=location.search.substring(1).indexOf("timer5");
    var url_timer6=location.search.substring(1).indexOf("timer6");
    var url_timer7=location.search.substring(1).indexOf("timer7");

    if (url_timer2!==-1)additional_wait_time= -3;
    if (url_timer3!==-1)additional_wait_time= -2;
    if (url_timer4!==-1)additional_wait_time= -1;
    if (url_timer5!==-1)additional_wait_time= 0;
    if (url_timer6!==-1)additional_wait_time= 1;
    if (url_timer7!==-1)additional_wait_time= 2;
    var additional_wait_minutes=additional_wait_time*1000*60;
    // ))))))))))))))))  preset timers )))))))))))))))))))))))

    // (((((((((((((((((((  option to show only specific DIV (((((((((((((((((((
    var url_showdiv_param=location.search.substring(1).indexOf("showdiv");// != to -1 if we have this param
    var url_showdiv1=location.search.substring(1).indexOf("showdiv1");
    var url_showdiv2=location.search.substring(1).indexOf("showdiv2");
    var url_showdiv3=location.search.substring(1).indexOf("showdiv3");
    var url_showdiv4=location.search.substring(1).indexOf("showdiv4");
    var url_showdiv5=location.search.substring(1).indexOf("showdiv5");
    var url_showdiv6=location.search.substring(1).indexOf("showdiv6");
    var url_showdiv7=location.search.substring(1).indexOf("showdiv7");
    // ))))))))))))))))  option to show only specific DIV  )))))))))))))))))))))))

    var url_opengame=location.search.substring(1).indexOf("opengame"); //check if we want opengame as prefix to all urls
    var url_noopengame=location.search.substring(1).indexOf("noopengame"); //check if we DO NOT want opengame as prefix to all urls (for PHPless web servers)


//if we find a parameter that contains word "time" (eg packA01.html?timer) then we hide all the other links
function init_links(){

    if((url_showdiv_param!==-1 ) && (url_time_param==-1 ) ){  //disable show_url IF we have set timer
        //if((url_showdiv1==-1) && (url_time_param==-1 )) document.getElementById("div1").style.visibility = "hidden";
        if(url_showdiv1==-1) document.getElementById("div1").style.visibility = "hidden";
        if(url_showdiv2==-1) document.getElementById("div2").style.visibility = "hidden";
        if(url_showdiv3==-1) document.getElementById("div3").style.visibility = "hidden";
        if(url_showdiv4==-1) document.getElementById("div4").style.visibility = "hidden";
        if(url_showdiv5==-1) document.getElementById("div5").style.visibility = "hidden";
        if(url_showdiv6==-1) document.getElementById("div6").style.visibility = "hidden";
        if(url_showdiv7==-1) document.getElementById("div7").style.visibility = "hidden";    
    }    

    //If we have a timer URL param then HIDE divs
    if(url_time_param!==-1 ) {
        document.getElementById("div2").style.visibility = "hidden";
        document.getElementById("div3").style.visibility = "hidden";
        document.getElementById("div4").style.visibility = "hidden";
        document.getElementById("div5").style.visibility = "hidden";
        document.getElementById("div6").style.visibility = "hidden";
        document.getElementById("div7").style.visibility = "hidden";
        //document.getElementById("div6").style.visibility = "hidden";        
    }


// (((((((((((((((((((((((((( option to disable right click v201020c ((((((((((
    var url_norightclick=location.search.substring(1).indexOf("norightclick");// != to -1 if we have this param
    if(url_norightclick!==-1) {
        document.oncontextmenu=new Function("console.log('main page: right-click-context menu -STOPPED');return false") ; //OK normal page Works  
        setInterval(function(){window.frames["sideframe1"].document.oncontextmenu = function(){console.log("setInterval sideframe1 :right click-DISABLED"); return false;}; }, 5000);
    }
// )))))))))))))))))))))))))) option to disable right click ))))))))

} // end of function init_links(){

function showItTimer() {
    //enable if its 1st click AND we have a timer UTL param
    if(first_click && url_time_param !==-1 ) {
        //alert("first_timer=true   , "+"location.search.substring(1)="+location.search.substring(1));
        //if(location.search.substring(1)>0)  alert("location.search.substring(1)="+location.search.substring(1));
        var minute=1000*60;
        console.log("first click , timers set every :");
        console.log((5*minute + additional_wait_minutes)/60/1000);
            //############ TEST ###################
            setTimeout(function(){document.getElementById("div2").style.visibility = "visible"}, 2000);//test
            setTimeout(function(){document.getElementById("div2").style.visibility = "hidden"}, 5000);//test

            setTimeout(function(){document.getElementById("div4").style.visibility = "visible"}, minute/60);//test
            setTimeout(function(){document.getElementById("div4").style.visibility = "hidden"}, 3000);//test
            // ########### TEST #####################
        setTimeout(function(){document.getElementById("div2").style.visibility = "visible"}, 5*minute+additional_wait_minutes);
        setTimeout(function(){document.getElementById("div3").style.visibility = "visible"}, 10*minute+additional_wait_minutes);
        setTimeout(function(){document.getElementById("div4").style.visibility = "visible"}, 15*minute+additional_wait_minutes);
        setTimeout(function(){document.getElementById("div5").style.visibility = "visible"}, 20*minute+additional_wait_minutes);
        setTimeout(function(){document.getElementById("div6").style.visibility = "visible"}, 25*minute+additional_wait_minutes);
        setTimeout(function(){document.getElementById("div7").style.visibility = "visible"}, 26*minute+additional_wait_minutes);

        
    }
    first_click=false;

    return false;
} // end of showItTimer()






//+++++++++++++++++++ probeserver v03 201025+++++++++++++++++
var server_probing_enabled=false;
var server_eval_first_run=true; //to avoid running remote probeserver eval multipletimes
var url_probeserver=location.search.substring(1).indexOf("probeserver");
if (url_probeserver!==-1)server_probing_enabled=true;

var timer_server_probe = 30000; //probe every 30 seconds
var server_probe_file="pack_refresh_browser.txt";
var jsonrequestInterval = function () {
    console.log("The request was send");
    // <hr><div id="probeserver"></div><hr> 
    var jsonrequestIntervaled = new XMLHttpRequest();
    var random_number=Math.random(); // OLD was=Date.prototype.getTime;
    jsonrequestIntervaled.open("GET", server_probe_file+"?"+random_number, true); // Date.prototype.getTime is used to avoid caching
    jsonrequestIntervaled.send();
    jsonrequestIntervaled.onreadystatechange = function () {
        if (jsonrequestIntervaled.readyState == 4) {
            console.log("The request was made and returned results (with random number="+random_number);
            var response_string =jsonrequestIntervaled.responseText;
            //console.log("DEBUG response_string="+s);
            //always add our extra text
            document.getElementById("probeserver").innerHTML = response_string;
            
            //in case we put the word reload, refresh browser
            if (response_string.indexOf("reload") !== -1) {
                console.log("refreshing browser");
                //document.getElementById("probeserver").innerHTML = response_string;
                window.location.reload(true);
            }

            //v201025b -evel - pack_refresh_browser.txt execute commands dynamic (requires probeserver activated) (not implemented yet)
            //in case we put the word "execute", run/eval() command
            if (response_string.indexOf("execute") !== -1) {
                var s=response_string;               
                //pack_refresh_browser = execute EVAL:console.log("eval-command-console.log--hello");:EVAL
                //var result = s.match(/AAAA:(.*?):BBBB/i); //OLD - ONLY for single line
                //var result = s.match(/AAAA:([\s\S]*?):BBBB/); //multi line                
                var result = s.match(/EVAL:([\s\S]*?):EVAL/); //multi line                
                //console.log("DEBUG +++++++++execute found3="+result[1]+"-----------------------");
                eval(result[1]);
            }

            
        }
    };
    
};

if(server_probing_enabled) setInterval(jsonrequestInterval, timer_server_probe);

//-------------------probeserver ---------------


// ((((((((((((((((((((((replace_url v01 190410 opengame , noopengame ((((((((((((((((((((((
//source https://stackoverflow.com/questions/4939805/change-all-links-hrefs-urls-with-vanilla-javascript-regex
function prefix_url(elem, attr) {
    var elems = document.getElementsByTagName(elem);
    for (var i = 0; i < elems.length; i++)
        //elems[i][attr] = elems[i][attr].replace('./', 'opengame.php?file=./');
        elems[i][attr] = 'opengame.php?file=' + elems[i][attr];
}

if(url_opengame!==-1) {   
    prefix_url('a', 'href');
    //replace_url('img', 'src');    
}

function prefix_remove_url(elem, attr) {
    var elems = document.getElementsByTagName(elem);
    for (var i = 0; i < elems.length; i++)
        elems[i][attr] = elems[i][attr].replace('opengame.php?file=', '');
        //elems[i][attr] = 'opengame.php?file=' + elems[i][attr];
}

if(url_opengame!==-1) {   
    prefix_remove_url('a', 'href');
    //replace_url('img', 'src');    
}

// )))))))))))))))))))))) replace_url ))))))))))))))))))))))

//</script>
