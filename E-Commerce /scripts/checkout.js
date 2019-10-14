
function finalize()
{
    var item = document.getElementById('item').innerHTML;
    var cname = document.getElementById("cname");
    var cmail = document.getElementById("cmail");
    var cnum = document.getElementById("cnum");
    
    var shipname = document.getElementById("shipname");
    var shipadr = document.getElementById("shipadr");
    var shipcity = document.getElementById("shipcity");
    var shipstate = document.getElementById("shipstate");
    var shipzip = document.getElementById("shipzip");
    
    var billname = document.getElementById("billname");
    var billadr = document.getElementById("billadr");
    var billcity = document.getElementById("billcity");
    var billstate = document.getElementById("billstate");
    var billzip = document.getElementById("billzip");
    
    var ccname = document.getElementById("ccname");
    var ccnum = document.getElementById("ccnum");
    var ccexp = document.getElementById("ccexp");
    var ccsec = document.getElementById("ccsec");
    
    var complete = true;
    var corrections = "";
    
    
    if (cname.value.length < 1)
    {
        corrections += "Contact name ,";
        complete = false;
    }
    if (cmail.value.includes('@') === false)
    {
        corrections += "Contact Email, ";
        complete = false;
    }
    if (cnum.value[3] !== '-' && cnum.value[7] !== '-' || cnum.value.length < 12 ||cnum.value.length > 12)
    {
        corrections += "Contact Number, ";
        complete = false;
    }

    if (shipname.value.length < 1)
    {
        corrections += "Shipping Name, ";
        complete = false;
    }               
    if (shipadr.value.length < 1)
    {
        corrections += "Shipping Address,";
        complete = false;
    }
    if (shipcity.value.length < 1)
    {
        corrections += "Shipping City, ";
        complete = false;
    }
    if (shipstate.value.length !== 2)
    {
        corrections += "Shipping State, ";
        complete = false;
    }
    if (shipzip.value.length !== 5)
    {
        corrections += "Shipping Zip Code, ";
        complete = false;
                
    }

	if (billname.value.length < 1)
	{
	    corrections += "Billing Name, ";
		 complete = false;
	}               
    if (billadr.value.length < 1)
    {
        corrections += "Billing Address, ";
        complete = false;
    }
    if (billcity.value.length < 1)
    {
        corrections += "Billing City, ";
        complete = false;
    }
    if (billstate.value.length !== 2)
    {
        corrections += "Billing State, ";
        complete = false;
    }
    if (billzip.value.length !== 5)
    {
        corrections += "Billing Zip, ";
        complete = false;
    }
    
    if (ccname.value.length < 0)
    {
        corrections += "Name On Credit Card, ";
        complete = false;
    }
    if (ccnum.value < 1)
    {
        corrections += "Credit Card #, ";
        complete = false;
    }
    if (ccexp.value[2] !== "/")
    {
        corrections += "Credit Card Expiration Date, ";
        complete = false;
    }
    if (ccsec.value.length < 3)
    {
        corrections += "Credit Card Security Number. ";
        complete = false;
    }
    
    if (standard === false && express === false)
    {
        corrections += "Choose a shipping method";
        complete = false;
    }
    
   if(complete === false)
   {
       alert("Please Check Input Fields: " + corrections);

   }
}        