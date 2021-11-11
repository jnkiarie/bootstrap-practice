//Using string methods to filter an mpesa message to get what we need
const mpesaMessage ="XXXYYYZZZ5 Confirmed. Ksh1,030.00 sent to MSEE FULANI HAPO +254722222222 on 23/4/21 at 2:38 PM. New M-PESA balance is Ksh7. Transaction cost, Ksh22.00. Amount you can transact within the day is 297,420.00. SAFARICOM ONLY CALLS YOU FROM 0722000000. To reverse, forward this message to 456."
//Please analyze this message using string methods to retrieve amount, 
//name of the person sent to, their number and the date
const mpesaAmount = mpesaMessage.split(" sent")[0]
const mpesaAmount2 = mpesaAmount.split(". Ksh")
const finalmpesaAmount = mpesaAmount2[1]
console.log(finalmpesaAmount)
const mpesaSent_to = mpesaMessage.split("sent to ")[1]
const mpesaSent_to1 = mpesaSent_to.split(" +")[0]
console.log(mpesaSent_to1)
const recipientdata = mpesaMessage.split("HAPO ")[1]
const mpesaRecipient = recipientdata.split(" on ")[0]
console.log(mpesaRecipient)
const transactiondata = mpesaMessage.split(" on ")[1]
const transactionDate = transactiondata.split(" at ")[0]
console.log(transactionDate)
var the_end1 = " "
console.log(the_end1)

//analyze this message using string methods to retrieve amount,
// paybill number, paybill name and the date
var the_end = "The Second Message results as below"
console.log(the_end)
const mpesaMessage2 = "XXXYYYZZZ3 Confirmed. Ksh500.00 sent to KPLC PREPAID for account 123456789 on 23/4/21 at 9:57 PM New M-PESA balance is Ksh5,941.22. Transaction cost, Ksh23.00. Amount you can transact within the day is 296,283.00."
const paidAmountdata = mpesaMessage2.split(". Ksh")[1]
const paidAmount = paidAmountdata.split(" sent to ")[0]
console.log(paidAmount)
const paybillData = mpesaMessage2.split("sent to ")[1]
const paybillName = paybillData.split(" for ")[0]
console.log(paybillName)
const paybillDate = mpesaMessage2.split(" on ")[1]
const paybillDate_ = paybillDate.split(" at ")[0]
console.log(paybillDate_)



































