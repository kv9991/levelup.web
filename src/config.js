export default new function() {
	const config = this;

	this.dev = false;
	this.ssl = false;
	this.type = this.ssl ? "https://" : "http://";
	this.host = this.dev ? "localhost:3000 : "185.22.232.114:3100";
	this.hosturl = this.type + this.host;
	this.mail = new function() {
		this.port = "3080";
		this.secret = "8gia89fianfiajsf";
		this.sendURL = config.hosturl + ':' + this.port + '/send';
	}
};