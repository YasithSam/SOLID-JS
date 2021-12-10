class Store {
   constructor(paymentProcessor){
       this.paymentProcessor=paymentProcessor
   }
}

class StripePaymentProcessor{
    constructor(user){
        this.stripe=new Stripe(user)
    }
    pay(){
        this.stripe.makePayment()

    }
}

class PaypalPaymentProcessor{
    constructor(user){
        this.paypal=new PayPal(user)
    }
    pay(){
        this.paypal.makePayment()

    }
}

class Stripe{
    constructor(user){
        this.user=user
    }
    makePayment(){

    }
}
class PayPal{
    constructor(user){
        this.user=user
    }
    makePayment(){

    }
}

const store=new Store(PaypalPaymentProcessor(user))
const store=new Store(StripePaymentProcessor(user))