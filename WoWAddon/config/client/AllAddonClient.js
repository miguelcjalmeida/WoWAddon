$(function(){
    if(window.location.search.replace('?Server', '') == window.location.search){
        new TimeLeftAddon().execute();    	   
    }
});