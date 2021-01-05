var encryptionHelper = require("./aes128")
var story = "this is the story of the brave prince who went off to fight the horrible dragon... he set out on his quest one sunny day";
var algorithm = encryptionHelper.CIPHERS.AES_256;

console.log("testing encryption and decryption");
console.log("text is: " + story);

encryptionHelper.getKeyAndIV("1234567890abcdefghijklmnopqrstuv", function (data) { //using 32 byte key

    console.log("got key and iv buffers");

    var encText = encryptionHelper.encryptText(algorithm, data.key, data.iv, story, "base64");

    console.log("encrypted text = " + encText);

    var decText = encryptionHelper.decryptText(algorithm, data.key, data.iv, encText, "base64");

    console.log("decrypted text = " + decText);

});