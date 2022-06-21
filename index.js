function sameAsBilling() {
    var billing = document.getElementById("billing");
    var shipping = document.getElementById("shipping");
    var same = document.getElementById("same-address");
    if (same.checked) {
        shipping.firstName.value = billing.firstName.value;
        shipping.lastName.value = billing.lastName.value;
        shipping.username.value = billing.username.value;
        shipping.email.value = billing.email.value;
        shipping.address.value = billing.address.value;
        shipping.address2.value = billing.address2.value;
        shipping.city.value = billing.city.value;
        shipping.zip.value = billing.zip.value;
        shipping.country.value = billing.country.value;
        shipping.state.value = billing.state.value;
    }
}

function showHideDiv() {
    var div = document.getElementById("shipping");
    var same = document.getElementById("same-address");
    var divider = document.getElementById("hr-shipping");
    if (same.checked) {
        div.style.display = "none";
        divider.style.display = "none";
    } else {
        div.style.display = "block";
        divider.style.display = "block";
    }
}