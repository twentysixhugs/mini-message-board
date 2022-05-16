const messages = [];

function Message(text, user) {
  this.text = text;
  this.user = `by ${user}`;
  this.added = new Date().toLocaleString();
}

function addMessage(text, user) {
  const message = new Message(text, user);
  messages.push(message);
}

module.exports = {
  addMessage,
  messages,
};
