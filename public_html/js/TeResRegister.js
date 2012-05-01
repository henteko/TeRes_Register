var LIST = new Array();
var ML_COPY = "";
var WIKI_COPY = "";
var COUNT = 0;

function set() {
	var gakunen_element = document.getElementById("gakunen");
	var name_element = document.getElementById("name");
    var id_element = document.getElementById("id");
	var phone_element = document.getElementById("phone");
    var ML_element = document.getElementById("ML");
    
    var gakunen = gakunen_element.value;
    var name = name_element.value;
    var id = id_element.value;
    var phone = phone_element.value;
    var ML = ML_element.value;

	if(gakunen == "" || name == "" || id == "" || phone == "" || ML == "") {
        alert("入力しなおしてください");
        return 0;
    }else {
        //正しいので、Listに追加
        //LIST['gakunen'][COUNT] = gakunen;
        //LIST['name'][COUNT] = name;
        //LIST['id'][COUNT] = id;
        //LIST['phone'][COUNT] = phone;
        //LIST['ML'][COUNT] = ML;
        
        
        table_add(gakunen,name,id,phone,ML);
        copy_add(gakunen,name,id,phone,ML);
        liset();
        
        COUNT++;
    }
}

function table_add(gakunen,name,id,phone,ML) {
    var hoge = new Array(6);
    hoge[0] = COUNT+1;
    hoge[1] = gakunen;
    hoge[2] = name;
    hoge[3] = id;
    hoge[4] = phone;
    hoge[5] = ML;

    var table_list_element = document.getElementById("list_table");
    var tr_element = document.createElement("tr");
    tr_element.setAttribute("id","tr_"+COUNT);
    tr_element.setAttribute("align","center");
    for(var i=0;i < 6;i++) {
        var td_element = document.createElement("td");
        td_element.setAttribute("style","color:#00ff00");
        td_element.innerText = hoge[i];
        tr_element.appendChild(td_element);
    }
    table_list_element.appendChild(tr_element);
}

function copy_add(gakunen,name,id,phone,ML) {
    ML_COPY += ML + ",";
    WIKI_COPY += "|" + gakunen + "||" + name + "|| "+ id + "|" + phone + "|" + ML + "|" + "\n";
    
    var ML_element = document.getElementById("ML_copy");
    var wiki_element = document.getElementById("wiki_copy");
    
    ML_element.innerHTML = ML_COPY;
    wiki_element.innerHTML = WIKI_COPY;
    
}

function liset() {
    //フォームをリセットする
    document.getElementById("gakunen").value = "";
	document.getElementById("name").value = "";
    document.getElementById("id").value = "";
	document.getElementById("phone").value = "";
    document.getElementById("ML").value = "";

}
