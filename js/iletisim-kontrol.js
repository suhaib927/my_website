var ad = document.forms["benimForm"]["ad"].value;
var soyad = document.forms["benimForm"]["soyad"].value;
var sifre = document.forms["benimForm"]["sifre"].value.toString();
var eposta = document.forms["benimForm"]["eposta"].value;
var form_tipi = document.forms["benimForm"]["form-tipi"].value;
var cinsiyet = document.forms["benimForm"]["cinsiyet"].value;
var universite = document.forms["benimForm"]["universite"].value;
var mesaj = document.forms["benimForm"]["mesaj"].value;

function formKontrol() {

    ad = document.forms["benimForm"]["ad"].value;
    if (ad.length > 25 || ad == "" || ad == null) {
        alert("adınız 25 harfi geçmemelidir!!!<br>adınız boş olmamalıdır!!!");
        return false;
    }

    soyad = document.forms["benimForm"]["soyad"].value;
    if (soyad.length > 15 || soyad == "" || soyad == null) {
        alert("soyadınız 15 harfi geçmemeidir!!!<br>soyadınız boş olmamalıdır!!!");
        return false;
    }

    eposta = document.forms["benimForm"]["eposta"].value;
    var sayac = 0;
    for (i = 0; i < eposta.length; i++) {
        if (eposta[i] == "@")
            sayac++;
    }
    if (sayac == 0 || eposta == "" || eposta[0] == "@") {
        alert("mail adresi hem @ operatoru içermeli hem boş olmamalıdır");
        return false;
    }

    sifre = document.forms["benimForm"]["sifre"].value.toString();
    if (sifre != eposta.toString().substring(0, sifre.length) || sifre == "") {
        alert("sifre hatalıdır!!!<br><b>sifreniz epostanızdaki @ operatorunden onceki harflerdir</b>");
        return false;
    }

    cinsiyet = document.forms["benimForm"]["cinsiyet"].value;
    if (cinsiyet == "") {
        alert("Cinsiyet belirtilmelidir");
        return false;
    }

    universite = document.forms["benimForm"]["universite"].value;
    if (universite != "sau" && universite != "subu" && universite != "itu" && universite == "") {
        universite = "belirtilmedi";
    }

    mesaj = document.forms["benimForm"]["mesaj"].value;
    if (mesaj == "") {
        alert("mesaj kısmı doldurulmalıdır!!!!");
        return false;
    }
}