var access_token =  $J("[data-loyaltystore]").data("loyaltystore").webapi_token;
var badgeid = 0;

SetFavoriteFeaturedBadge(access_token, badgeid);

function SetFavoriteFeaturedBadge(access_token, badgeid) {
	$J.post( 'https://api.steampowered.com/IPlayerService/SetFavoriteBadge/v1?', {
		access_token: access_token,
		badgeid: badgeid
	});
}
