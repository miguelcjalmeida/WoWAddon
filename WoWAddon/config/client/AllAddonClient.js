$(function(){
    if(window.location.search.replace('?Server', '') == window.location.search){
        new TimeLeftAddon().execute();
        new ThemeLessAddon().execute();
        new FastBidAddon().execute();
        new UnitPriceAddon().execute();
        new SearchAllAddon().execute();
        new AuctionRefreshAddon().execute();
    }
});