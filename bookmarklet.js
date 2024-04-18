javascript:(function(){
    function getRandomPosition(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var randomX = getRandomPosition(-2, 2);
    var randomY = getRandomPosition(-2, 2);

    var css = ".browzr{z-index:99999;position:fixed;left:" + randomX + "px;top:" + randomY + "px;background-color:#f5f5f5;border:2px solid #ccc;border-radius:5px;padding:20px;box-shadow:0 0 10px rgba(0,0,0,0.5); color: black;}"+
              "#browzrTab{position:fixed;right:0;top:50%;transform:translateY(-50%);background-color:#f5f5f5;border:2px solid #ccc;border-radius:0 5px 5px 0;padding:5px 10px;cursor:pointer;z-index:99999;}"+
              "#browzrTab:hover{background-color:#ddd;}"+
              "#htmlframe{width:100%;height:100%;border:5px dashed #ff69b4;border-radius:10px;background-color:transparent;}"+
              ".button{padding:10px 20px;margin-right:10px;border:none;border-radius:5px;background-color:#4CAF50;color:white;font-size:16px;cursor:pointer;}"+
              ".button:hover{background-color:#45a049;}"+
              ".minimize{width:40px;height:40px;background-color:#000;border-radius:20px;color:#fff;font-size:20px;position:absolute;top:10px;right:10px;border:none;cursor:pointer;}"+
              ".minimize:hover{background-color:#333;}"+
              ".minimize-tab{position:fixed;right:-80px;top:50%;transform:translateY(-50%);background-color:#f5f5f5;border:2px solid #ccc;border-radius:5px;padding:5px 10px;cursor:pointer;z-index:99999;font-size:18px;}"+
              ".minimize-tab:hover{background-color:#ddd;}"+
              ".browzr.minimized{left:-300px !important;transition: left 0.3s ease-out;}"+
              ".browzr.minimized .minimize-tab{right:0;}";

    var style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);

    var div = document.createElement('div');
    div.id = 'browser1223';
    div.className = 'browzr';
    div.innerHTML = "<input type='text' id='htmlenter' placeholder='Enter HTML here...' style='color: black'><button class='button' onclick='dothething();'>Preview</button><button class='button' onclick='downloadContent();'>Download</button><button class='minimize' onclick='minimize();'>-</button><br><iframe id='htmlframe'></iframe>";
    document.body.appendChild(div);

    var tab = document.createElement('div');
    tab.id = 'browzrTab';
    tab.className = 'minimize-tab';
    tab.innerHTML = '&#x25BA;';
    tab.onclick = function() {
        div.classList.remove('minimized');
    };
    document.body.appendChild(tab);

    window.dothething = function() {
        var htmlContent = document.getElementById('htmlenter').value;
        var dataURI = 'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent);
        document.getElementById('htmlframe').src = dataURI;
    };

    window.downloadContent = function() {
        var htmlContent = document.getElementById('htmlenter').value;
        var filename = 'content.html';
        var blob = new Blob([htmlContent], { type: 'text/html' });

        var link = document.createElement('a');
        link.download = filename;
        link.href = window.URL.createObjectURL(blob);
        link.click();
    };

    window.minimize = function() {
        div.classList.add('minimized');
    };
})();
