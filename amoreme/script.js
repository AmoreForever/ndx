function generate_qiwi_url() {
    var ammount = parseInt(document.getElementById("donate_ammount").value);
    if (0 > ammount || ammount > 10000) {
        var ammount = 100
    }

    var url = new URL("https://qiwi.com/payment/form/99999");

    url.searchParams.append("extra['accountType']", "nickname");
    url.searchParams.append("extra['account']", "FL1YD");
    url.searchParams.append("currency", "643");
    url.searchParams.append("blocked[0]", "sum");
    url.searchParams.append("blocked[1]", "account");
    url.searchParams.append("amountInteger", ammount);
    url.searchParams.append("amountFraction", (ammount % 1).toFixed(2) * 100);

    location.href = url.href;
    return true;
}
