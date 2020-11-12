
function addSendListener(){
 var target = $('#new-message-input');
 target.keyup(sendKeyup);

 var button = $('#btn');
 button.click(sendClick);
}

function sendKeyup(){
  var key = event.which;

  if (key === 13) {
    var input = $('#new-message-input');
    var txt = input.val();
    input.val('');
    sendMessage(txt);
  }
}

function sendMessage(txt){
  var template = $('#template-message-sent .msg-sent').clone();
  var target = $('#target');

  template.find('#message-sent').text(txt);
  target.append(template);
  setTimeout(replyMessage, 2000);

  function replyMessage(){
    console.log(txt);

    var reply;
    if (txt == "ciao") {
      reply = "salve";
    }
    else if (txt == "ciao Alfred") {
      reply = "salve";
    }
    else if (txt == "come va?") {
      reply = "bene grazie, tu?";
    }
    else if (txt == "bene") {
      reply = "mi fa piacere";
    }
    else if (txt == "male") {
      reply = "che succede?Posso tirarti su il morale (copia e incolla): https://www.youtube.com/results?search_query=stanlio+e+olio";
    }
    else if (txt == "presentati") {
      reply = "Salve, io sono Alfred, sono un amico di Alfonso.";
    }
    else if (txt == "chi sei?") {
      reply = "Salve, io sono Alfred, sono un amico di Alfonso.";
    }
    else if (txt == "che ore sono?") {
      reply = moment().format('h:mm:ss a');
    }
    else if (txt == "che giorno é?") {
      reply = moment().format('dddd D MMMM YYYY');
    }

    console.log(reply);

    var template = $('#template-message-reply .msg-received').clone();
    var target = $('#target');
    template.append(reply);
    target.append(template);
  }
}

function sendClick(){
   var input = $('#new-message-input');
   var txt = input.val();

   if (txt) {
     var input = $('#new-message-input');
     var txt = input.val();
     input.val('');
     sendMessage(txt);
   }
}

function init(){
  addSendListener();

}
$(document).ready(init);
