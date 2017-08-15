$( document ).ready(function() {

var quotes = ["Don't cry because it's over, smile because it happened. - Dr. Seuss", "Be yourself; everyone else is already taken. - Oscar Wilde", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein", "You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr. Seuss", "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost", "A friend is someone who knows all about you and still loves you. - Elbert Hubbard", "Always forgive your enemies; nothing annoys them so much. - Oscar Wilde", "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde", "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring. - Marilyn Monroe", "The fool doth think he is wise, but the wise man knows himself to be a fool. - William Shakespeare", "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison", "Glory is fleeting, but obscurity is forever. - Napolean Bonaparte", "Everybody pities the weak; jealousy you have to earn. - Arnold Schwarzenegger", "Facts are the enemy of truth. - Don Quixote", "Whatever you are, be a good one. - Abraham Lincoln", "Great minds discuss ideas; average minds discuss events; small minds discuss people. - Eleanor Roosevelt", "If you cannot do great things, do small things in a great way. - Napolean Hill", "The greatest weapon against stress is our ability to choose one thought over another. - William James", "Small opportunities are often the beginning of great enterprises. - Demosthenes", "There is no greater agony than bearing an untold story inside you. - Maya Angelou", "Only those who dare to fail greatly can ever achieve greatly. - Robert Kennedy", "The greatest accomplishment is not in never falling, but in rising again after you fall. - Vince Lombardi", "Life is either a great adventure or nothing. - Helen Keller", "Great thoughts speak only to the thoughtful mind, but great actions speak to all mankind. - Theodore Roosevelt", "Great spirits have always encountered violent opposition from mediocre minds. - Albert Einstein", "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it. - Maurice Switzer", "For success, attitude is equally as important as ability. - anonymous", "Either you run the day, or the day runs you. - Jim Rohn", "To avoid criticism, say nothing, do nothing, be nothing. - Fred Shero", "Everything in moderation, including moderation. - Oscar Wilde", "Worry is like a rocking chair, it will give you something to do, but it won’t get you anywhere. - Vance Havner", "I asked God for a bike, but I know God doesn’t work that way. So I stole a bike and asked for forgiveness. - Emo Philips", "The trouble with eating Italian food is that five or six days later, you’re hungry again. - George Miller", "Always borrow money from a pessimist. He won’t expect it back. - Oscar Wilde", "Courage is contagious. When a brave man takes a stand, the spines of others are stiffened. - Billy Graham", "Patience is something you admire in the driver behind you, but not in one ahead. - Bill McGlashen"];
myFun();

document.getElementById("myBtn").addEventListener("click", myFun);

var rand = quotes[Math.floor( Math.random() * quotes.length)];
var b;
function myFun()
{

 var rand = quotes[Math.floor( Math.random() * quotes.length)];
	 
	  document.getElementById("output").innerHTML = rand;
	  b = rand;
}

$('.tweet').click(function(){
  
    $('.tweet a').attr('href','https://twitter.com/intent/tweet?text='+encodeURIComponent(b));
  });

});
