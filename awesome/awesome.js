function awesomeness(){
	var site = Math.floor((Math.random()*links.length));
	var item = links[site];
	if (item.type === "video"){
		open_video(item.youtubeid);
	}
	else if (item.type === "image"){
		open_image(item);
	}
	else{
		open_in_new_tab(item.url);
	}
}
function open_in_new_tab(url)
{
  window.open(url, '_blank');
  window.focus();
}
function open_video(id){
	var embed = '<div class="embed"><iframe width="560" height="315" src="https://www.youtube.com/embed/'+id+'" frameborder="0" allowfullscreen></iframe></div>';
	$(".embed").replaceWith(embed);
}
function open_image(object){
	var embed = '<div class="embed"><img width="'+object.width+'" height="'+object.height+'" src="'+object.url+'"></img></div>';
	$(".embed").replaceWith(embed);
}