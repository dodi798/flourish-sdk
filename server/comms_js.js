module.exports = `
window.addEventListener("message", function(event) {
	var a = document.createElement("a");
	a.href = event.origin;
	var origin_okay = (a.hostname == window.location.hostname)
	  || window.location.hostname === "localhost"
		|| (a.hostname.match(/\\.flourish\\.local$/) && window.location.hostname.match(/\\.flourish\\.local$/))
		|| (a.hostname.match(/\\.flourish\\.rocks$/) && window.location.hostname.match(/\\.flourish\\.rocks$/))
		|| (a.hostname.match(/\\.flourish\\.studio$/) && window.location.hostname.match(/\\.flourish\\.studio$/));

	if (!origin_okay) return;
	var message = event.data;
	var port = event.ports[0];
	if (!port || typeof message !== "object" || message.sender !== "Flourish") return;
	var result = null;
	try {
		switch(message.method) {
			case "getState":
			result = (message.argument) ? window.template.state[message.argument] : window.template.state;
			break;

			case "setState":
			for (var k in message.argument) {
				window.template.state[k] = message.argument[k];
			}
			break;

			case "hasData":
			result = !!window.template.data;
			break;

			case "setData":
			for (var k in message.argument) {
				window.template.data[k] = message.argument[k];
			}
			break;

			case "getData":
			result = window.template.data;
			break;

			case "draw":
			window.template.draw();
			break;

			case "update":
			window.template.update();
			break;

			case "snapshot":
			result = window.snapshot(message.argument, port);
			break;
		}

		port.postMessage({result: result});
	} catch (e) {
		port.postMessage({error: e.message});
		throw e;
	}
}, false);
`;