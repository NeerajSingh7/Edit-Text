

$(document).ready(function(){

    $(".convert-btn").on("click", function(){
        let userChoice = $("#modify").val();
        let userInput = $("#user-input").val();

        if(userInput == "") $("#user-output").text("select correct operation");
        // console.log(userInput);
        switch(userChoice){
            case "to lowercase": 
                let lower = toLowerCase(userInput);
                // console.log(lower);
                $("#user-output").text(lower);
                break;
            
            case "to uppercase":
                let upper = toUpperCase(userInput);
                // console.log(upper);
                $("#user-output").text(upper);
                break;

            case "remove spaces":
                let remove = removeSpaces(userInput);
                // console.log(upper);
                $("#user-output").text(remove);
                break;


            case "decimal to binary":
                let tobin = binary(userInput);
                // console.log(upper);
                $("#user-output").text(tobin);
                break;

            case "binary to decimal":
                let todec = toDecimal(userInput);
                // console.log(upper);
                $("#user-output").text(todec);
                break;

            case "string to binary":
                let bin = toBinary(userInput);
                // console.log(upper);
                $("#user-output").text(bin);
                break;

            case "binary to string":
                let string = toStr(userInput);
                // console.log(upper);
                $("#user-output").text(string);
                break;

            case "reverse text":
                let rev = reverseData(userInput);
                $("#user-output").text(rev);
                break;

            case "change font":
                // let font = changeFont(userInput);
                // console.log(upper);
                $("#user-output").text(userInput);
                $("#user-output").css("fontFamily", "Palette Mosaic");
                break;

            

            default: $("#user-output").text("select correct operation");
        }
        // console.log($("#user-input").val());
    });


    // console.log(toLowerCase("YOYOY HONEY"));
    function toLowerCase(str){
        let ans = "";
        for(let i=0;i<str.length;i++){
            let ch = str[i];
            // console.log(ch);
            if(ch >= 'A' && ch <= 'Z'){
                ch = String.fromCharCode(ch.charCodeAt(0) + 32);
            }
            ans += ch;
        }
        return ans;
    }



    function toUpperCase(str){
        let ans = "";
        for(let i=0;i<str.length;i++){
            let ch = str[i];
            // console.log(ch);
            if(ch >= 'a' && ch <= 'z'){
                ch = String.fromCharCode(ch.charCodeAt(0) - 32);
            }
            ans += ch;
        }
        return ans;
    }



    function toStr(str){
        let ans = "", word="";
        for(let i=0;i<str.length;i++){
            let ch = str[i];
            // console.log(ch);
            if(ch == " " || i == str.length-1){
                if(i == str.length-1){
                    word += ch;
                }
                console.log(word);
                ans += String.fromCharCode(toDecimal(word));
                word="";
            }
            word += ch;
        }
        return ans;
    }


    function toDecimal(str){
        let ans=0, j=0;
        for(let i = str.length-1; i>=0; i--){
            ans += str[i] * Math.pow(2,j++);
        }
        return ans;
    }


    // console.log(toDecimal("00110000"));

    function toBinary(str){
        let ans = "";
        for(let i=0;i<str.length;i++){
            let ch = str[i];
            // console.log(ch);
            ans += binary(ch.charCodeAt(0)) + " ";
        }
        return ans;
    }


    

    function binary(n){
        let ans = "", tempAns="";
        while(n>0){
            let r = n % 2;
            tempAns = ans;
            ans = r + tempAns;
            n = Math.floor(n/2);
        }
        return 0+ans;
    }


    function removeSpaces(str){
        let ans = "";
        for(let i=0;i<str.length;i++){
            let ch = str[i];
            // console.log(ch);
            if(ch != " "){
                ans += ch;
            }
        }
        return ans;
    }

    console.log(reverseData("jai hind dosto"));
    function reverseData(str){
        let ans = "";
        for(let i=str.length-1; i>=0; i--){
            ans += str[i];
        }
        return ans;
    }

    // console.log($("#to-lowercase").text());
})